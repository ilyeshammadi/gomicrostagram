package mock

import "github.com/Ilyes-Hammadi/gomicrostagram/auth/models"

// GenerateUsers generate random mock users
func GenerateUsers(count uint) (users []*models.User) {
	user := &models.User{Username: "tux", Email: "tux@gmail.com", Password: "tux123"}
	for i := uint(1); i <= count; i++ {
		users = append(users, user)
	}
	return users
}
