package utils

import "github.com/Ilyes-Hammadi/gomicrostagram/auth/models"

func RemoveToken(s []*models.Token, index int) []*models.Token {
	return append(s[:index], s[index+1:]...)
}
