package middleware

import (
	"feedback/x/rest"

	"github.com/gin-gonic/gin"
)

func Recovery() gin.HandlerFunc {
	return func(c *gin.Context) {
		defer func() {
			if err := recover(); err != nil {
				var errResponse = map[string]interface{}{
					"error":  err.(error).Error(),
					"status": "error",
				}
				if httpError, ok := err.(rest.IHttpError); ok {
					c.JSON(httpError.StatusCode(), errResponse)
				} else {
					c.JSON(500, errResponse)
				}
			}
		}()
		c.Next()
	}
}

func AddHeader() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
	}
}
