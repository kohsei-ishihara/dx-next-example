FROM node:alpine

ENV BUILD_PACKAGES="build-base bash git rsync"

RUN mkdir -p /var/www \
    && chmod +x /var/www

WORKDIR /var/www

RUN set -ex \
    && apk update \
    && apk upgrade  \
    && apk add --update --no-cache \
        $BUILD_PACKAGES \
    && rm -rf /var/cache/apk/*

#ENTRYPOINT tail -f /dev/null

