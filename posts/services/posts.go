package services

import (
	pbPosts "github.com/Ilyes-Hammadi/gostagram/posts/pb/posts"
	"golang.org/x/net/context"
)

// PostsServer
type PostsServer struct{}

// GetAllPosts service
func (p *PostsServer) GetAllPosts(ctx context.Context, r *pbPosts.GetAllPostsRequest) (*pbPosts.GetAllPostsResponse, error) {
	return &pbPosts.GetAllPostsResponse{nil}, nil
}

// GetPost service
func (p *PostsServer) GetPost(ctx context.Context, r *pbPosts.GetPostRequest) (*pbPosts.GetPostResponse, error) {
	return &pbPosts.GetPostResponse{nil}, nil
}

// CreatePost service
func (p *PostsServer) CreatePost(ctx context.Context, r *pbPosts.CreatePostRequest) (*pbPosts.CreatePostResponse, error) {
	return &pbPosts.CreatePostResponse{}, nil
}

// UpdatePost service
func (p *PostsServer) UpdatePost(ctx context.Context, r *pbPosts.UpdatePostRequest) (*pbPosts.UpdatePostResponse, error) {
	return &pbPosts.UpdatePostResponse{nil}, nil
}

// DeletePost service
func (p *PostsServer) DeletePost(ctx context.Context, r *pbPosts.DeletePostRequest) (*pbPosts.DeletePostResponse, error) {
	return &pbPosts.DeletePostResponse{}, nil
}
