package utils

import (
	"github.com/Ilyes-Hammadi/gostagram/auth/models"
	"github.com/Ilyes-Hammadi/gostagram/auth/pb/auth"
)

// ConvertUser models.User to auth.User
func ConvertUser(user *models.User) *auth.User {
	return &auth.User{Username: user.Username, Email: user.Email, Password: user.Password}
}

// ConvertUsers array of models.User to an array auth.User
func ConvertUsers(users []*models.User) []*auth.User {
	convertedUsers := []*auth.User{}
	for _, user := range users {
		convertedUsers = append(convertedUsers, ConvertUser(user))
	}
	return convertedUsers
}
