# Requirements

To run the environment you need to have at least the following stack:
- Docker
- Docker Compose

# Clone Project
git clone 

# The folder Structure

```
> api-login
   > src # This is our Node.js server
    > node_modules
    > app
      |- app.js
    > api-client-rest       
    > api            
    > domain      
    > domain-detail 
    > auxiliar
    > auxiliar-detail     
    > utils       
    - .dockerignore
    - .env.example   
    - Dockerfile    
    - package.json
  - docker-compose.yml
  - serverless.yml
  - README.md
```

# Initial configurations

## environment variables

Create a file with environment variable to configure the services.

```
cp .env.example .env
```
```
@DESKTOP-SM7QPBM MINGW64 ~/path/api-login $ cp .env.example .env
```
### Running following command. This will create docker images and volumes which will run in the containers.


### If you want to build your images before starting your containers.
```
$ docker-compose up --build
```

## docker-compose
```
$ docker-compose up
```

## Run a command in a running container
docker exec -it server bash