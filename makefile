DOCKER_COMPOSE=docker-compose -f ./docker/docker-compose.yml

lint:
	yarn run lint

lint-fix:
	yarn run lint-fix

set-env:
	cp .env.development .env

install:
	yarn install

start: 
	$(DOCKER_COMPOSE) --env-file .env up

stop:
	$(DOCKER_COMPOSE) down

clean:
	$(DOCKER_COMPOSE) down --rmi all
	rm -rf ./node_modules

clean-all:
	sh ./scripts/clean_docker.sh

rebuild: clean
	$(DOCKER_COMPOSE) --env-file .env build --no-cache