#/bin/bash

echo 'Building the posts service'
# Build the go binary
CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o ./bin/main main.go

