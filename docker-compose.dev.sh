#!/bin/sh
#docker network rm common_link; \
#docker network create common_link; \
docker-compose -f docker/development/express/docker-compose.yml \
               $@;