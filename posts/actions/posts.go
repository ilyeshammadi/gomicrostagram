package actions

import (
	"github.com/Ilyes-Hammadi/gomicrostagram/posts/mock"
	"github.com/Ilyes-Hammadi/gomicrostagram/posts/models"
)

func GetAllPosts() []*models.Post {
	return mock.GeneratePosts(5)
}

func GetPost(id uint32) *models.Post {
	return &models.Post{}
}

func CreatePost(userId uint32, title, content string) bool {
	return true
}

func UpdatePost(post *models.Post) *models.Post {
	return post
}

func DeletePost(id uint32) bool {
	return true
}
