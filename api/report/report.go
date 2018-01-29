package report

import (
	"feedback/o/result"
	"feedback/x/rest"
	"strconv"

	"github.com/gin-gonic/gin"
)

type ReportServer struct {
	*gin.RouterGroup
	rest.JsonRender
}

func NewReportServer(parent *gin.RouterGroup, name string) *ReportServer {
	var s = ReportServer{
		RouterGroup: parent.Group(name),
	}
	s.GET("/general", s.handleGeneralReport)
	s.GET("/campaign", s.handleCampaignReport)
	s.GET("/history", s.handleGetHistory)
	return &s
}

func (s *ReportServer) handleGetHistory(ctx *gin.Context) {
	var start, _ = strconv.Atoi(ctx.Query("start"))
	var end, _ = strconv.Atoi(ctx.Query("end"))
	res, err := result.GetHistory(start, end)
	rest.AssertNil(err)
	s.SendData(ctx, res)
}

func (s *ReportServer) handleCampaignReport(ctx *gin.Context) {
	res, err := result.GetCampaignReport(0, 0)
	rest.AssertNil(err)
	s.SendData(ctx, res)
}

func (s *ReportServer) handleGeneralReport(ctx *gin.Context) {
	var start, _ = strconv.Atoi(ctx.Query("start"))
	var end, _ = strconv.Atoi(ctx.Query("end"))
	var by = ctx.Query("by")
	if by == "" {
		res, err := result.GetGeneralReport(start, end)
		rest.AssertNil(err)
		s.SendData(ctx, res)
	} else {
		res, err := result.GetGeneralReportBy(by, start, end)
		rest.AssertNil(err)
		s.SendData(ctx, res)
	}

}
