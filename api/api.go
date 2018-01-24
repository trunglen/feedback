package api

import (
	"feedback/api/campaign"
	"feedback/api/report"
	"feedback/api/survey"

	"github.com/gin-gonic/gin"
)

func InitApi(root *gin.RouterGroup) {
	survey.NewSurveyServer(root, "survey")
	campaign.NewCampaignServer(root, "campaign")
	report.NewReportServer(root, "report")
}
