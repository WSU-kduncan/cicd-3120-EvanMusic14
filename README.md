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
    - Command: `sudo docker run -d --name react -p 80:3000 reactapp:version`
- View the running project
    - Open a web browser
    - On the same system as the container navigate to `localhost` or `localhost:80`
    - On a different system as the container navigate to the `ipaddress` of the system or `ipaddress:80`

## GitHub Actions and DockerHub

- Create a new DockerHub repository
    - Go to DockerHub
    - Click "Create repository"
    - Add a name and description then choose wether it is public or private
    - Click "Create"
- Authenticating to DockerHub using the cli
    - DockHub needs a username and a token
    - The username is your DockerHub username and the token is created by DockerHub in your account settings
    - I reccomend selecting Read and Write when creating a token to give the least access to get the job done
- Push container to Dockerhub
    - Once you have a built image push it using:
        - `docker push username/imagename:version`
- GitHub secrets
    - DockerHub Username
    - DockerHub Token'
- GitHub workflow
    - What does it do
        - Checkout of the repository
        - Setup Docker builx
        - Login to docker
        - Builds docker image
        - Push docker image to DockerHub
    - What variables are custom
        - Respository name is hard coded in

## Deployment



