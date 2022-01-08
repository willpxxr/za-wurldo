FROM node:17.3.0-alpine as builder

WORKDIR /go/src/github.com/willpxxr/za-wurldo/frontend

ADD ["ui/package.json", "ui/yarn.lock", "./"]

RUN yarn install

ADD ["frontend/", "."]

RUN yarn build

FROM alpine:3.15

COPY --from=builder /go/src/github.com/willpxxr/za-wurldo/frontend/build/ /usr/local/bin/frontend/

USER 999

ENTRYPOINT serve -s /usr/local/bin/frontend
