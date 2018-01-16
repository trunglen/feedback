package campaign

import (
	"feedback/x/db/mongodb"
	"fmt"

	"gopkg.in/mgo.v2/bson"
)

var CampaignTable = mongodb.NewTable("campaign", "CAM", 5)

func (c *Campaign) Create() error {
	return CampaignTable.Create(c)
}
func UpdateByID(newCampaign *Campaign) error {
	fmt.Println(newCampaign)
	return CampaignTable.UpdateID(newCampaign.ID, newCampaign)
}
func GetCampaigns() ([]*Campaign, error) {
	var campaigns []*Campaign
	err := CampaignTable.FindWhere(bson.M{}, &campaigns)
	return campaigns, err
}
