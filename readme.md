Welcome !

This is a simple CRUD API to post , delete & list courses.


How to run it ?

1- Build the image locally in the dockerfile using :

docker build . -t mynodecourseapi

2- Start a swarm using: 

docker swarm init

3- Build the stack and deploy using: 

docker stack deploy -c docker-compose.yml courseAPI

--> The server will be running under : 

http://127.0.0.1:5000

Notice: Endpoints are under the repo exported as postman collection

4- You can make nodes join the swarm created using: 

docker swarm join -t [token]

