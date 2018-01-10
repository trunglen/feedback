package main

import (
	//1
	_ "feedback/init"
	//2
	"feedback/api"
	"feedback/middleware"
	"feedback/room"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.New()
	router.Use(gin.Logger(), middleware.Recovery(), middleware.AddHeader())
	//static
	router.StaticFS("/static", http.Dir("./static"))
	//api
	rootAPI := router.Group("/api")
	api.InitApi(rootAPI)
	//ws
	room.NewRoomServer(router.Group("/room"))
	router.Run(":8080")
}
