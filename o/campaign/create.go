package campaign

import (
	"feedback/o/survey"
	"feedback/x/db/mongodb"
	"feedback/x/rest"
	"fmt"
)

var CampaignTable = mongodb.NewTable("campaign", "CAM", 5)

func (c *Campaign) Create() error {
	rest.AssertNil(rest.Validate(c), survey.CheckExistSurveys(c.Surveys))
	var campaigns, err = GetCampaignByDevices(c.Devices, c.Start)
	rest.AssertNil(err)
	for _, campaign := range campaigns {
		for _, device := range c.Devices {
			if device == campaign.Device {
				errStr := fmt.Sprintf("Thiết bị %s không thể áp dụng vì đang được áp dụng trong chiến dịch %s", device, campaign.Name)
				return rest.BadRequest(errStr)
			}
		}
	}
	return CampaignTable.Create(c)
}
func UpdateByID(newCampaign *Campaign) error {
	rest.AssertNil(rest.Validate(newCampaign))
	return CampaignTable.UpdateID(newCampaign.ID, newCampaign)
}
