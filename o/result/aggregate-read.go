package result

import (
	"feedback/x/utils"

	"gopkg.in/mgo.v2/bson"
)

type Report struct {
	ID            string  `bson:"_id" json:"actor_name"`
	AveragePoint  float32 `bson:"average_point" json:"average_point"`
	High          int     `bson:"high" json:"high"`
	Credit        int     `bson:"credit" json:"credit"`
	Medium        int     `bson:"medium" json:"medium"`
	Low           int     `bson:"low" json:"low"`
	Count         int     `bson:"count" json:"count"`
	HighPercent   string  `bson:"-" json:"high_percent"`
	CreditPercent string  `bson:"-" json:"credit_percent"`
	MediumPercent string  `bson:"-" json:"medium_percent"`
	LowPercent    string  `bson:"-" json:"low_percent"`
}
type GeneralReport struct {
	Report `bson:",inline"`
}

func matchAggregateDuration(start, end int) bson.M {
	return bson.M{
		"$match": bson.M{
			"$and": []bson.M{
				bson.M{
					"created_at": bson.M{
						"$lte": end,
					},
				},
				bson.M{
					"created_at": bson.M{
						"$gte": start,
					},
				},
			},
		},
	}
}

func groupByLevel(field string) bson.M {
	return bson.M{
		"$sum": bson.M{
			"$cond": []interface{}{
				bson.M{"$eq": []interface{}{field, true}}, 1, 0,
			},
		},
	}
}
func GetGeneralReport(start, end int) (*GeneralReport, error) {
	var gReports *GeneralReport
	var match = matchAggregateDuration(start, end)
	var group = bson.M{
		"$group": bson.M{
			"_id": nil,
			"average_point": bson.M{
				"$avg": "$average_point",
			},
			"high":   groupByLevel("$high"),
			"credit": groupByLevel("$credit"),
			"medium": groupByLevel("$medium"),
			"low":    groupByLevel("$low"),
			"count":  bson.M{"$sum": 1},
		},
	}
	err := AggregateTable.Pipe([]bson.M{
		match,
		group,
	}).One(&gReports)
	if gReports != nil {
		gReports.TransformData()
	}
	return gReports, err
}

func GetGeneralReportBy(by string, start, end int) ([]*GeneralReport, error) {
	var reports []*GeneralReport
	var match = matchAggregateDuration(start, end)
	var group = bson.M{
		"$group": bson.M{
			"_id": "$" + by,
			"average_point": bson.M{
				"$avg": "$average_point",
			},
			"high":   groupByLevel("$high"),
			"credit": groupByLevel("$credit"),
			"medium": groupByLevel("$medium"),
			"low":    groupByLevel("$low"),
			"count":  bson.M{"$sum": 1},
		},
	}
	err := AggregateTable.Pipe([]bson.M{
		match,
		group,
	}).All(&reports)
	if reports != nil {
		for _, item := range reports {
			item.TransformData()
		}
	}
	return reports, err
}

type CampaignReport struct {
	CampaignName string  `bson:"campaign_name"  json:"campaign_name" `
	SurveyName   string  `bson:"survey_name" json:"survey_name"`
	Count        string  `bson:"count" json:"count"`
	AveragePoint float32 `bson:"average_point" json:"average_point"`
	Start        int     `bson:"start"  json:"-" `
	End          int     `bson:"end" json:"-"`
	Duration     string  `bson:"-" json:"duration"`
}

func GetCampaignReport(start, end int) ([]*CampaignReport, error) {
	var result []*CampaignReport
	var group = bson.M{
		"$group": bson.M{
			"_id": bson.M{
				"campaign_name": "$campaign",
				"survey_name":   "$survey_name",
			},
			"count": bson.M{
				"$sum": 1,
			},
			"average_point": bson.M{
				"$avg": "$average_point",
			},
		},
	}
	var lookup = bson.M{
		"$lookup": bson.M{
			"from":         "campaign",
			"localField":   "_id.campaign_name",
			"foreignField": "name",
			"as":           "campaign",
		},
	}
	var unwind = bson.M{
		"$unwind": "$campaign",
	}
	var project = bson.M{
		"$project": bson.M{
			"campaign_name": "$_id.campaign_name",
			"survey_name":   "$_id.survey_name",
			"count":         "$count",
			"average_point": "$average_point",
			"start":         "$campaign.start",
			"end":           "$campaign.end",
		},
	}
	err := AggregateTable.Pipe([]bson.M{group, lookup, unwind, project}).All(&result)
	if result != nil {
		for _, item := range result {
			item.TransformData()
		}
	}
	return result, err
}
func (r *GeneralReport) TransformData() {
	r.HighPercent = utils.Float32ToPercentString(float32(r.High) / float32(r.Count))
	r.CreditPercent = utils.Float32ToPercentString(float32(r.Credit) / float32(r.Count))
	r.MediumPercent = utils.Float32ToPercentString(float32(r.Medium) / float32(r.Count))
	r.LowPercent = utils.Float32ToPercentString(float32(r.Low) / float32(r.Count))
}
func (r *CampaignReport) TransformData() {
	r.Duration = utils.UnixToDate(r.Start)
}
