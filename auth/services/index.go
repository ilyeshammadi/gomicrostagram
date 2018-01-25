package services

import (
	pb "github.com/Ilyes-Hammadi/gomicrostagram/auth/pb/auth"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

// RegisterServices all the services
func RegisterServices(s *grpc.Server) {
	pb.RegisterAuthServer(s, &AuthServer{})
	reflection.Register(s)
}
