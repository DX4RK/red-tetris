DOCKER_COMPOSE = docker-compose -f src/docker-compose.yml

start:


help:
	@python3 ./assets/main.py --help

stop:
	@docker compose stop

clean:
	@python3 ./assets/progress.py init "Cleaning" 5
	@docker compose stop        > /dev/null 2>&1; python3 ./assets/progress.py step
	@docker compose down        > /dev/null 2>&1; python3 ./assets/progress.py step
	@docker container prune -f  > /dev/null 2>&1; python3 ./assets/progress.py step
	@docker volume prune -f     > /dev/null 2>&1; python3 ./assets/progress.py step
	@docker network prune -f    > /dev/null 2>&1; python3 ./assets/progress.py step
	@python3 ./assets/progress.py done

.SILENT:
