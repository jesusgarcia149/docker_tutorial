# Docker Tutorial

# list docker images
- docker images
# download docker image
- docker pull <image> << lastest version
- docker pull node << lastest node version
- docker pull <image:18> << 18 version
- docker pull node:18 << node version 18
# download the images from hub
- https://hub.docker.com/
# download specific platform
- docker pull --platform <linux/x86_64> <image>
# eliminate image
- docker image rm <image>
- docker image rm <node>
- docker image rm <node:18>
# create image
- docker create <image> 
    - return <id>
- docker start <id>
# view contaires runnig
- docker ps
    - return <container_id>
# stop container
- docker stop <container_id>
# view containers created
- docker ps -a
# you can detele container with your <container_name>
- docker image rm <container_name>

# create container 
- docker create --name <container_name> <container_based>
- docker create --name contenedor1 mongo
# start container
- docker start <container_name>

# create image with ports
- docker create <-pPort_virutal> --name <name> <image_based>
- docker create -p27017 --name imagen1 mongo
# create image with ports customs
- docker create <-pPort_royal:Port_virutal> --name <name> <image_based>
- docker create -p27017:27017 --name imagen1 mongo

# view server running
- docker logs <name>
- docker logs imagen1
# view server flowing running
- docker logs --follow <name>
- docker logs --follow imagen1

# delete image
- docker rm <image>
- docker rm imagen1

# docker run
## 1.- search imagen if not download imagen
## 2.- create container
## 3.- init container
## 4.- view logs
- docker run <image>
- docker run mongo
# docker run without logs
- docker run -d <image>
- docker run -d mongo
# All
- docker run --name <container> <-p27017:27017> -d <image>
- docker run --name prueba1 -p27017:27017 -d mongo

# docker view containers list
- docker ps -a


# practice with this code
## index.js
```javascript

const express = require('express');
const server = express();
server.get('/', function(req,res){
    res.send('<h1>Hello World with Express and Nodejs from Docker</h1>');
    res.end();
});
server.listen(3000, function(){
    console.log('Server on Port 3000');
});

``` 

# download image mongo
``` docker pull mongo ``` 
# list images
``` docker images ```
# list containers
``` docker ps -a ```
# create a container and configure
``` 
docker create -pHOST_A:HOST_C --name $NAME -e MONGO_INITDB_ROOT_USERNAME=$USER -e MONGO_INITDB_ROOT_PASSWORD=$PASS $CONTAINER
```
``` 
docker create -p27017:27017 --name monguito -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=123 mongo
```

# create Dockerfile
## Dockfile
```javascript
FROM node:18

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 3000

CMD ["node", "/home/app/index.js"]
```

# init container
``` docker start $container ```
``` docker start monguito ```
# list container running
``` docker ps ```

# list network
``` docker network ls ```
# create network
``` docker network create $name ```
``` docker network create mired ```
# remove network
``` docker network remove $name ```
``` docker network remove mired ```

# docker build
``` docker build -t $name:$tag $dir ```
``` docker build -t miapp:1 . ```

# docker list images
``` docker images ```
# docker stop image
``` docker stop $name ```
``` docker stop monguito ```
# docker remove image
``` docker rm $name ```
``` docker rm monguito ```

# docker create container with network configured
``` docker create -p3000:3000 --name chanchito --network mired miapp:1 ```

# docker start container
``` docker start chanchito ```
# docker stop container
``` docker stop chanchito ```

# DOCKER COMPOSE
# create docker-compose.yml
## docker-compose.yml
```yml
    version: "3.9"
    services:
    chanchito:
        build: .
        ports:
        - "3000:3000"
    #   links:
    #      - monguito
    #   monguito:
    #     image: mongo
    #     ports:
    #       - "27017:27017"
    #     environment:
    #       - MONGO_INITDB_ROOT_USERNAME=$USER 
    #       - MONGO_INITDB_ROOT_PASSWORD=$PASS
```
# docker comple build
``` docker compose up ```

# docker delete containers and networks
``` docker compose down ```