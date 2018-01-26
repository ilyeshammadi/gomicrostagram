package utils

import "github.com/Ilyes-Hammadi/gomicrostagram/posts/models"

func RemovePost(s []*models.Post, index int) []*models.Post {
	return append(s[:index], s[index+1:]...)
}
