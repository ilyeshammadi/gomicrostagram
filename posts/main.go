package main

import (
	"fmt"
	"log"
	"net"
	"os"

	"github.com/Ilyes-Hammadi/gomicrostagram/posts/services"
	"google.golang.org/grpc"
)

var serverAddress = os.Getenv("POSTS_SERVER_ADDRESS")
var serverPort = os.Getenv("POSTS_SERVER_PORT")

var host = fmt.Sprintf("%s:%s", serverAddress, serverPort)

func startServer() {
	lis, err := net.Listen("tcp", host)
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}
	s := grpc.NewServer()
	services.RegisterServices(s)
	log.Println("gRPC server running on " + host)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}

func main() {
	startServer()
}
