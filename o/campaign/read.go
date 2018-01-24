package campaign

import (
	"ehelp/x/rest"

	"gopkg.in/mgo.v2/bson"
)

func GetCampaignDevice(deviceID string, at int64) (*CampaignView, error) {
	var campaign *CampaignView
	var match = bson.M{}
	var join = bson.M{}
	match["$match"] = bson.M{
		"devices": deviceID,
		"$and": []bson.M{
			bson.M{
				"start": bson.M{
					"$lte": at,
				},
			},
			bson.M{
				"end": bson.M{
					"$gte": at,
				},
			},
		},
	}
	join["$lookup"] = bson.M{
		"from":         "survey",
		"localField":   "surveys",
		"foreignField": "_id",
		"as":           "survey",
	}
	err := CampaignTable.Pipe([]bson.M{
		match,
		join,
	}).One(&campaign)
	if err != nil {
		if rest.IsNotFound(err) {
			return nil, nil
		}
		return nil, err
	}
	return campaign, err
}
func GetCampaigns() ([]*Campaign, error) {
	var campaigns []*Campaign
	err := CampaignTable.FindWhere(bson.M{}, &campaigns)
	return campaigns, err
}

func GetCampaignByDevices(deviceArr []string, start int64) ([]*Campaign, error) {
	var campaigns []*Campaign
	err := CampaignTable.Pipe([]bson.M{
		bson.M{
			"$match": bson.M{
				"$and": []bson.M{
					bson.M{"devices": bson.M{"$in": deviceArr}},
					bson.M{"end": bson.M{"$gte": start}},
					bson.M{"start": bson.M{"$lte": start}},
				},
			},
		},
		bson.M{
			"$unwind": "$devices",
		},
		bson.M{
			"$addFields": bson.M{
				"device": "$devices",
			},
		},
	}).All(&campaigns)
	return campaigns, err
}
