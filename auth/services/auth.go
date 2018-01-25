package services

import (
	"golang.org/x/net/context"

	"github.com/Ilyes-Hammadi/gomicrostagram/auth/actions"
	pb "github.com/Ilyes-Hammadi/gomicrostagram/auth/pb/auth"
	"github.com/Ilyes-Hammadi/gomicrostagram/auth/utils"
)

// AuthServer
type AuthServer struct{}

// Login an existing user
func (s *AuthServer) Login(ctx context.Context, r *pb.LoginRequest) (*pb.LoginResponse, error) {
	username := r.GetUsername()
	password := r.GetPassword()
	token := actions.Login(username, password)
	return &pb.LoginResponse{Token: token}, nil
}

// Register a new user
func (s *AuthServer) Register(ctx context.Context, r *pb.RegisterRequest) (*pb.RegisterResponse, error) {
	username := r.GetUsername()
	email := r.GetEmail()
	password := r.GetPassword()
	registerResponse := actions.Register(username, email, password)
	return &pb.RegisterResponse{Ok: registerResponse}, nil
}

// GetAllUsers service
func (s *AuthServer) GetAllUsers(ctx context.Context, r *pb.GetAllUsersRequest) (*pb.GetAllUsersResponse, error) {
	users := actions.GetAllUsers()
	return &pb.GetAllUsersResponse{Users: utils.ConvertUsers(users)}, nil
}

// GetUser service
func (s *AuthServer) GetUser(ctx context.Context, r *pb.GetUserRequest) (*pb.GetUserResponse, error) {
	username := r.GetUsername()
	user := actions.GetUser(username)
	userConverted := utils.ConvertUser(user)
	return &pb.GetUserResponse{User: userConverted}, nil
}

// Signout service
func (s *AuthServer) Signout(ctx context.Context, r *pb.SignoutRequest) (*pb.SignoutResponse, error) {
	return &pb.SignoutResponse{}, nil
}

// VerifyToken service
func (s *AuthServer) VerifyToken(ctx context.Context, r *pb.VerifyTokenRequest) (*pb.VerifyTokenResponse, error) {
	token := r.GetToken()
	ok := actions.VerifyToken(token)
	return &pb.VerifyTokenResponse{Ok: ok}, nil
}
