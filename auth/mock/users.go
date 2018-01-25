package mock

import "github.com/Ilyes-Hammadi/gomicrostagram/auth/models"

type Database struct {
	Users  []*models.User
	Tokens []*models.Token
}

// DB mock database
var DB Database

func init() {
	users := GenerateUsers(5)
	tokens := []*models.Token{}
	DB = Database{Users: users, Tokens: tokens}
}

// GenerateUsers generate random mock users
func GenerateUsers(count uint) (users []*models.User) {
	user := &models.User{Username: "tux", Email: "tux@gmail.com", Password: "tux123"}
	for i := uint(1); i <= count; i++ {
		users = append(users, user)
	}
	return users
}

func GenerateTokens(count uint) (tokens []*models.Token) {
	users := GenerateUsers(5)
	for i := uint(0); i < count; i++ {
		token := &models.Token{Content: "abcd1234" + string(i), User: users[i]}
		tokens = append(tokens, token)
	}
	return tokens
}
