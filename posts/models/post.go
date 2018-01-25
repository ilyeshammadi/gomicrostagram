package models

// Post model
type Post struct {
	ID      uint32
	UserID  uint32
	Title   string
	Content string
}
