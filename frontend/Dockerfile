FROM node:17.3.0-alpine as builder

WORKDIR yarn/src/github.com/willpxxr/za-wurldo/frontend

ADD ["package.json", "yarn.lock", "./"]

RUN yarn install --frozen-lockfile

ADD [".", "."]

RUN yarn build

FROM alpine:3.16

COPY --from=builder yarn/src/github.com/willpxxr/za-wurldo/frontend/build/ /usr/local/bin/frontend/

USER 999

ENTRYPOINT serve -s /usr/local/bin/frontend
