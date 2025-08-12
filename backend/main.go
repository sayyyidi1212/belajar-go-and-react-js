package main

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Enable CORS untuk semua origin, metode, header
	r.Use(cors.Default())

	r.GET("/api/message", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Halo dari Go API 🚀",
		})
	})

	r.GET("/api/status", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"server_time": time.Now().Format(time.RFC1123),
			"status":      "API berjalan dengan baik",
		})
	})

	r.Run(":8080")
}
