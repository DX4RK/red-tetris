DOCKER_COMPOSE = docker-compose -f ../src/docker-compose.yml

start:
	docker compose up

build:
	docker compose build

help:
	@python3 ./main.py --help

stop:
	@docker compose stop

clean:
	@python3 ./progress.py init "Cleaning" 5
	@docker compose stop        > /dev/null 2>&1; python3 ./progress.py step
	@docker compose down        > /dev/null 2>&1; python3 ./progress.py step
	@docker container prune -f  > /dev/null 2>&1; python3 ./progress.py step
	@docker volume prune -f     > /dev/null 2>&1; python3 ./progress.py step
	@docker network prune -f    > /dev/null 2>&1; python3 ./progress.py step
	@python3 ./progress.py done

.SILENT:
