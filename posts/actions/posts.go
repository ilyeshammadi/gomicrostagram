package actions

import (
	"github.com/Ilyes-Hammadi/gomicrostagram/posts/mock"
	"github.com/Ilyes-Hammadi/gomicrostagram/posts/models"
	"github.com/Ilyes-Hammadi/gomicrostagram/posts/utils"
)

func GetAllPosts() []*models.Post {
	return mock.DB.Posts
}

func GetPost(id uint32) *models.Post {
	return mock.DB.Posts[0]
}

func CreatePost(userId uint32, title, content string) bool {
	post := &models.Post{UserID: userId,
		Title:   title,
		Content: content}
	mock.DB.Posts = append(mock.DB.Posts, post)
	return true
}

func UpdatePost(post *models.Post) *models.Post {
	return post
}

func DeletePost(id uint32) bool {
	for index, post := range mock.DB.Posts {
		if post.ID == id {
			mock.DB.Posts = utils.RemovePost(mock.DB.Posts, index)
			return true
		}
	}
	return false
}
