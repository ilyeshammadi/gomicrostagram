package mock

import (
	"github.com/Ilyes-Hammadi/gomicrostagram/posts/models"
)

type Database struct {
	Posts []*models.Post
}

var DB Database

func init() {
	posts := GeneratePosts(10)
	DB = Database{Posts: posts}
}

func GeneratePosts(count uint) (posts []*models.Post) {
	for i := uint(0); i < count; i++ {
		post := &models.Post{ID: uint32(i), UserID: uint32(i)}
		posts = append(posts, post)
	}
	return posts
}
