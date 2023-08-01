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


# practice with this repository
```javascript

import express from 'express'
import mongoose from 'mongoose'

const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

const app = express()

mongoose.connect('mongodb://nico:password@monguito:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando... chanchitos...')
  const animales = await Animal.find();
  return res.send(animales)
})
app.get('/crear', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Chanchito', estado: 'Feliz' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))

``` 