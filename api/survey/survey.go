package survey

import (
	"feedback/x/rest"
	"g/x/web"
	"io/ioutil"

	"feedback/o/result"
	"feedback/o/survey"

	"github.com/gin-gonic/gin"
)

type SurveyServer struct {
	*gin.RouterGroup
	rest.JsonRender
}

func NewSurveyServer(parent *gin.RouterGroup, name string) *SurveyServer {
	var s = SurveyServer{
		RouterGroup: parent.Group(name),
	}
	s.GET("/list", s.GetAll)
	s.POST("/result/create", s.handleCreateResult)
	s.POST("/create", s.AddSurvey)
	s.POST("/update", s.handleUpdate)
	s.GET("/delete", s.handleDelete)
	s.POST("/icon/upload", s.UploadIcon)
	s.GET("/icon/list", s.ListIcon)
	s.POST("/device/add", s.AddSurveyDevice)
	s.GET("/list-device", s.handleListDeviceService)
	s.GET("/device/:id", s.handleFeedbackDevice)
	return &s
}

func (s *SurveyServer) AddSurvey(ctx *gin.Context) {
	var srv *survey.Survey
	web.AssertNil(ctx.BindJSON(&srv))
	web.AssertNil(srv.Create())
	s.SendData(ctx, srv)
}

func (s *SurveyServer) handleCreateResult(ctx *gin.Context) {
	var res *result.SurveyResult
	rest.AssertNil(ctx.BindJSON(&res), res.Create())
	result.ConvertToAggregate(res)
	s.SendData(ctx, res)
}

func (s *SurveyServer) handleUpdate(ctx *gin.Context) {
	var srv *survey.Survey
	web.AssertNil(ctx.BindJSON(&srv))
	web.AssertNil(survey.Update(srv))
	s.Success(ctx)
}
func (s *SurveyServer) handleDelete(ctx *gin.Context) {
	var id = ctx.Query("id")
	rest.AssertNil(survey.DeleteByID(id))
	s.Success(ctx)
}

func (s *SurveyServer) handleListDeviceService(ctx *gin.Context) {
	var srv, err = survey.GetListDeviceSurvey()
	rest.AssertNil(err)
	s.SendData(ctx, srv)
}

func (s *SurveyServer) handleFeedbackDevice(ctx *gin.Context) {
	var id = ctx.Param("id")
	var srv, err = survey.GetSurveyByDevice(id)
	rest.AssertNil(err)
	s.SendData(ctx, srv)
}

func (s *SurveyServer) ListIcon(ctx *gin.Context) {
	var listIcon = []string{}
	files, err := ioutil.ReadDir("./static/smiley")
	rest.AssertNil(err)
	for _, item := range files {
		listIcon = append(listIcon, "http://mqserver:8080/static/smiley/"+item.Name())

	}
	s.SendData(ctx, listIcon)
}

func (s *SurveyServer) AddSurveyDevice(ctx *gin.Context) {
	var surveyDevice = struct {
		SurveyID string `json:"survey_id"`
		DeviceID string `json:"device_id"`
	}{}
	web.AssertNil(ctx.BindJSON(&surveyDevice))
	web.AssertNil(survey.AddDeviceToSurvey(surveyDevice.DeviceID, surveyDevice.SurveyID))
	s.Success(ctx)
}

func (s *SurveyServer) GetAll(ctx *gin.Context) {
	surveys, _ := survey.ListSurvey()
	s.SendData(ctx, surveys)
}

func (s *SurveyServer) UploadIcon(ctx *gin.Context) {
	var file, err = ctx.FormFile("icon")
	web.AssertNil(err)
	web.AssertNil(ctx.SaveUploadedFile(file, "./static/smiley/abc"))
	s.Success(ctx)
}
