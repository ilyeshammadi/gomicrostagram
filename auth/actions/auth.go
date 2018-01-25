package actions

import (
	"github.com/Ilyes-Hammadi/gomicrostagram/auth/mock"
	"github.com/Ilyes-Hammadi/gomicrostagram/auth/models"
	"github.com/Ilyes-Hammadi/gomicrostagram/auth/utils"
)

// Login a new user using the username and password
func Login(username, password string) string {
	for _, user := range mock.DB.Users {
		if username == user.Username && password == user.Password {
			// Create, save and link the created token with the user
			token := &models.Token{Content: "abcd1234", User: user}
			mock.DB.Tokens = append(mock.DB.Tokens, token)
			return token.Content
		}
	}
	return ""
}

// Register a new user
func Register(username, email, password string) bool {
	user := &models.User{Username: username, Email: email, Password: password}
	mock.DB.Users = append(mock.DB.Users, user)
	return true
}

// Signout a user
func Signout(token string) bool {
	for index, t := range mock.DB.Tokens {
		if token == t.Content {
			mock.DB.Tokens = utils.RemoveToken(mock.DB.Tokens, index)
			return true
		}
	}
	return false
}

// VerifyToken and return a boolean, if true token valid, otherwise false
func VerifyToken(token string) bool {
	for _, t := range mock.DB.Tokens {
		if token == t.Content {
			return true
		}
	}
	return false
}

// GetAllUsers from the database
func GetAllUsers() []*models.User {
	return mock.DB.Users
}

// GetUser by username
func GetUser(username string) *models.User {
	for _, user := range mock.DB.Users {
		if user.Username == username {
			return user
		}
	}
	return nil

}
