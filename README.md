# Building a react application inside of a docker container

## Overview

- I am building a react application in docker using node.js as the web server and `node:19-alpine` as the base image

## Running the project

- Installing Docker on a native linux machine
    - Commands
        - `sudo apt-get remove docker docker-engine docker.io`
        - `sudo apt install docker.io`
        - `sudo snap install docker`
        - `docker --version` to see if docker has installed
        - `sudo docker run hello-world` if you want to quickly test docker
- Building a container from the Dockerfile
    - Command: `sudo docker build -t reactapp:version .`
- Running the container
    - Command: `sudo docker run -d --name react -p 3000:3000 reactapp:version`
- View the running project
    - Open a web browser
    - On the same system as the container navigate to `localhost:3000`
    - On a different system as the container navigate to `ipaddress:3000`