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
	//static
	router.StaticFS("/static", http.Dir("./static"))
	router.StaticFS("/app", http.Dir("./app"))
	router.StaticFS("/feedback", http.Dir("./device")).Use(func(c *gin.Context) {
		c.Writer.Header().Set("Content-Type", "text/html")
		c.Next()
	})

	router.Use(gin.Logger(), middleware.Recovery(), middleware.AddHeader())
	//api
	rootAPI := router.Group("/api")
	api.InitApi(rootAPI)
	//ws
	room.NewRoomServer(router.Group("/room"))
	router.Run(":8080")
}
