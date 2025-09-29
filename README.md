# realworld-docker

A Docker-based implementation of the RealWorld project with microservices architecture.

## Architecture

- **Frontend**: React application
- **API**: Node.js/Express API service
- **Auth**: Authentication microservice
- **Database**: MongoDB for each service
- **Nginx**: Reverse proxy and load balancer

## Development

Run in development mode with hot reload:

```bash
docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build
```

## Production

Run in production mode:

```bash
docker-compose up --build
```

## Accessing the Application

- Frontend: http://realworld-docker.com (or http://realworld-docker.local for dev)
- API: http://realworld-docker.com/api
- Auth: http://realworld-docker.com/auth/api

Make sure to add the following to your `/etc/hosts` file:
```
127.0.0.1   realworld-docker.com
127.0.0.1   realworld-docker.local
```