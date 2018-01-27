#/bin/bash
# Generate the proto code for this service using the specifed proto file

protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  -I ../protos \
  --js_out=import_style=commonjs,binary:./proto \
  --ts_out=service=true:./proto \
  $1
