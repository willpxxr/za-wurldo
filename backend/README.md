# Generating go from .proto

The following will produce generated golang in the pkg directory
```
protoc --proto_path=./server --go_out=./pkg/api --go_opt=paths=source_relative --go-grpc_out=./pkg/api --go-grpc_opt=paths=source_relative .\server\protosample\protosample.proto
```