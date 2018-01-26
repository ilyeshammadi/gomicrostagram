package services

import (
	"github.com/Ilyes-Hammadi/gomicrostagram/posts/actions"
	pbPosts "github.com/Ilyes-Hammadi/gomicrostagram/posts/pb/posts"
	"github.com/Ilyes-Hammadi/gomicrostagram/posts/utils"
	"golang.org/x/net/context"
)

// PostsServer
type PostsServer struct{}

// GetAllPosts service
func (p *PostsServer) GetAllPosts(ctx context.Context, r *pbPosts.GetAllPostsRequest) (*pbPosts.GetAllPostsResponse, error) {
	posts := utils.ConvertPosts(actions.GetAllPosts())
	return &pbPosts.GetAllPostsResponse{Posts: posts}, nil
}

// GetPost service
func (p *PostsServer) GetPost(ctx context.Context, r *pbPosts.GetPostRequest) (*pbPosts.GetPostResponse, error) {
	postID := r.GetId()
	post := utils.ConvertPost(actions.GetPost(postID))
	return &pbPosts.GetPostResponse{Post: post}, nil
}

// CreatePost service
func (p *PostsServer) CreatePost(ctx context.Context, r *pbPosts.CreatePostRequest) (*pbPosts.CreatePostResponse, error) {
	ok := actions.CreatePost(
		r.GetUserId(),
		r.GetTitle(),
		r.GetContent())
	return &pbPosts.CreatePostResponse{Ok: ok}, nil
}

// UpdatePost service
func (p *PostsServer) UpdatePost(ctx context.Context, r *pbPosts.UpdatePostRequest) (*pbPosts.UpdatePostResponse, error) {
	return &pbPosts.UpdatePostResponse{Post: nil}, nil
}

// DeletePost service
func (p *PostsServer) DeletePost(ctx context.Context, r *pbPosts.DeletePostRequest) (*pbPosts.DeletePostResponse, error) {
	ok := actions.DeletePost(r.GetId())
	return &pbPosts.DeletePostResponse{Ok: ok}, nil
}
