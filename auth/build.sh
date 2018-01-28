#/bin/bash

echo 'Building the auth service'
# Build the go binary
CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o ./out/main main.go
