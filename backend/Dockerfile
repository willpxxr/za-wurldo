FROM docker.io/library/golang:1.17.6-alpine as builder

WORKDIR /go/src/github.com/willpxxr/za-wurldo/backend

ADD ["go.mod", "go.sum", "./"]

RUN go mod download

ADD [".", "."]

WORKDIR /go/src/github.com/willpxxr/za-wurldo/backend/cmd

RUN go build -o backend

FROM alpine:3.16

COPY --from=builder /go/src/github.com/willpxxr/za-wurldo/backend/cmd/backend /usr/local/bin/

USER 999

ENTRYPOINT ./user/local/bin/backend
