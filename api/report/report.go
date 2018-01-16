package report

import (
	"feedback/x/rest"

	"github.com/gin-gonic/gin"
)

type ReportServer struct {
	*gin.RouterGroup
	rest.JsonRender
}
