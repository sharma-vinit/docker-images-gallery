docker-compose up 
# or
docker compose up

docker-compose up -d

docker-compose down 
# or
docker compose down

docker exec -it images-gallery-mongo-1 mongosh --username root --password password

> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> use admin
switched to db admin
> show collections
system.users
system.version