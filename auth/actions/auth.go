package actions

import (
	"github.com/Ilyes-Hammadi/gomicrostagram/auth/mock"
	"github.com/Ilyes-Hammadi/gomicrostagram/auth/models"
)

// Login a new user using the username and password
func Login(username, password string) (token string) {
	token = "helloworld"
	return token
}

// Register a new user
func Register(username, email, password string) bool {
	return true
}

// Signout a user
func Signout(token string) bool {
	return true
}

// VerifyToken and return a boolean, if true token valid, otherwise false
func VerifyToken(token string) bool {
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
