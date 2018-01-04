package room

import (
	"feedback/x/rest"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/golang/glog"
	"github.com/gorilla/websocket"
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
	serveWS(ctx.Writer, ctx.Request)
}

func serveWS(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		glog.Infof("error upgrading %s", err)
		return
	}
	for {
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			glog.Error(err)
			return
		}
		if err := conn.WriteMessage(messageType, p); err != nil {
			glog.Error(err)
			return
		}
	}
}

var upgrader = &websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}
