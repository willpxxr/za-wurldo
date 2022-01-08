FROM docker.io/library/golang:1.17 as builder

WORKDIR /go/src/github.com/willpxxr/za-wurldo/backend

COPY go.mod go.mod
COPY go.sum go.sum

RUN go mod download

COPY . .

WORKDIR /go/src/github.com/willpxxr/za-wurldo/backend/cmd

RUN go build -o backend

FROM alpine:3.15

COPY --from=builder /go/src/github.com/willpxxr/za-wurldo/backend/cmd/backend /usr/local/bin/

USER 999

ENTRYPOINT ./user/local/bin/backend
