package result

import (
	"feedback/x/db/mongodb"
)

type SurveyResult struct {
	mongodb.BaseModel `bson:",inline"`
	Uname             string         `bson:"uname" json:"uname"`
	Device            string         `bson:"device" json:"device"`
	Store             string         `bson:"store" json:"store"`
	Counter           string         `bson:"counter" json:"counter"`
	Campaign          string         `bson:"campaign" json:"campaign"`
	CampaignID        string         `bson:"campaign_id" json:"campaign_id"`
	Question          string         `bson:"question" json:"question"`
	SurveyDetails     []SurveyDetail `bson:"survey_detail" json:"survey_detail"`
	Point             int            `bson:"point" json:"point"`
	MaxPoint          int            `bson:"max_point" json:"max_point"`
	Avg               float32        `bson:"avg" json:"avg"`
	DayCtime          string         `bson:"day_ctime" json:"day_ctime"`
	HourCtime         string         `bson:"hour_ctime" json:"hour_ctime"`
}

type SurveyDetail struct {
	SurveyID        string           `bson:"survey_id" json:"survey_id"`
	SurveyName      string           `bson:"survey_name" json:"survey_name"`
	FeedbackDetails []FeedbackDetail `bson:"feedback_detail" json:"feedback_detail"`
}

type FeedbackDetail struct {
	Content  string `bson:"content" json:"content"`
	Answer   string `bson:"answer" json:"answer"`
	Point    int    `bson:"point" json:"point"`
	MaxPoint int    `bson:"max_point" json:"max_point"`
}

var ResultTable = mongodb.NewTable("result", "RES", 5)

func (s *SurveyResult) Create() error {
	return ResultTable.Create(s)
}

const (
	HIGH_RATE   = 0.85
	CREDIT_RATE = 0.65
	MEDIUM_RATE = 0.5
)

func ConvertToAggregate(s *SurveyResult) {
	var a = Aggregate{
		StoreID:    s.Store,
		StoreName:  s.Store,
		DeviceID:   s.Device,
		DeviceName: s.Device,
		UName:      s.Uname,
		Campaign:   s.Campaign,
	}
	for _, survey := range s.SurveyDetails {
		var point = 0
		var maxPoint = 0
		a.SurveyID = survey.SurveyID
		a.SurveyName = survey.SurveyName

		for _, feedback := range survey.FeedbackDetails {
			point += feedback.Point
			maxPoint += feedback.MaxPoint
		}
		var avgPoint = float32(point) / float32(maxPoint)
		if avgPoint >= HIGH_RATE {
			a.High = true
		} else if avgPoint >= CREDIT_RATE {
			a.Credit = true
		} else if avgPoint >= MEDIUM_RATE {
			a.Medium = true
		} else {
			a.Low = true
		}
		a.AveragePoint = avgPoint
		AggregateTable.Create(&a)
		a.High, a.Credit, a.Medium, a.Low = false, false, false, false
	}
}
