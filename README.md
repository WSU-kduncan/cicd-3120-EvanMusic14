#This is a respository for creating a Docker container

1. Command to build the image
    - sudo docker build -t reactapp:version .

2. Command to start a container using the image
    - sudo docker run -d --name react -p 3000:3000 reactapp:version
