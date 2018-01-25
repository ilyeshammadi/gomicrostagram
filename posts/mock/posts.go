package mock

import (
	"github.com/Ilyes-Hammadi/gomicrostagram/posts/models"
)

func GeneratePosts(count uint) (posts []*models.Post) {
	for i := uint(1); i <= count; i++ {
		post := &models.Post{ID: uint32(i)}
		posts = append(posts, post)
	}
	return posts
}
