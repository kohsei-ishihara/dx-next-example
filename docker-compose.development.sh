#!/bin/sh
#docker network rm common_link; \
#docker network create common_link; \
docker-compose -f docker/development/nginx/docker-compose.yml \
               -f docker/development/express/docker-compose.yml \
               -f docker/development/network/docker-compose.yml \
               $@;