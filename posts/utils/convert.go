package utils

import (
	"github.com/Ilyes-Hammadi/gomicrostagram/posts/models"
	pbPosts "github.com/Ilyes-Hammadi/gomicrostagram/posts/pb/posts"
)

// ConvertPost models.Post to auth.Post
func ConvertPost(post *models.Post) *pbPosts.Post {
	return &pbPosts.Post{Id: post.ID,
		UserId:  post.UserID,
		Title:   post.Title,
		Content: post.Content}
}

// ConvertPosts array of models.Post to an array auth.Post
func ConvertPosts(posts []*models.Post) []*pbPosts.Post {
	convertedPosts := []*pbPosts.Post{}
	for _, post := range posts {
		convertedPosts = append(convertedPosts, ConvertPost(post))
	}
	return convertedPosts
}
