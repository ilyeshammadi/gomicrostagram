package services

import (
	pb "github.com/Ilyes-Hammadi/gomicrostagram/posts/pb/posts"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

// RegisterServices all the services
func RegisterServices(s *grpc.Server) {
	pb.RegisterPostsServer(s, &PostsServer{})
	reflection.Register(s)
}
