#!/bin/bash

docker container rm -f $(docker container ls -a -q)
docker image rm $(docker image ls -a -q)
docker volume rm $(docker volume ls -q)
docker network rm $(docker network ls -q)
docker system prune -f