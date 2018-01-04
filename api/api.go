package api

import (
	"feedback/api/survey"

	"github.com/gin-gonic/gin"
)

func InitApi(root *gin.RouterGroup) {
	survey.NewSurveyServer(root, "survey")
}
