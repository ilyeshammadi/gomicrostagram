package actions

import (
	"github.com/Ilyes-Hammadi/gostagram/auth/mock"
	"github.com/Ilyes-Hammadi/gostagram/auth/models"
)

// Login a new user using the username and password
func Login(username, password string) (token string) {
	token = "helloworld"
	return token
}

// Register a new user
func Register(username, email, password string) (ok bool) {
	return true
}

// GetAllUsers from the database
func GetAllUsers() []*models.User {
	return mock.GenerateUsers(5)
}

// GetUser by username
func GetUser(username string) *models.User {
	return mock.GenerateUsers(1)[0]
}
