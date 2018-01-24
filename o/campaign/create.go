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
	for _, item := range campaigns {
		errStr := fmt.Sprintf("Thiết bị %s không thể áp dụng vì đang được áp dụng trong chiến dịch %s", item.Device, item.Name)
		return rest.BadRequest(errStr)
	}
	return CampaignTable.Create(c)
}
func UpdateByID(newCampaign *Campaign) error {
	rest.AssertNil(rest.Validate(newCampaign))
	return CampaignTable.UpdateID(newCampaign.ID, newCampaign)
}
