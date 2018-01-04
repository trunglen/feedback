package room

import (
	"feedback/x/rest"
	"net/http"

	"github.com/gin-gonic/gin"
)

type RoomServer struct {
	*gin.RouterGroup
	rest.JsonRender
}

func NewRoomServer(parent *gin.RouterGroup) *RoomServer {
	var s = RoomServer{
		RouterGroup: parent,
	}
	s.GET("/join", s.handleJoin)
	return &s
}
func (s *RoomServer) handleJoin(ctx *gin.Context) {

}

func wsHandler(w http.ResponseWriter, r *http.Request) {

}
