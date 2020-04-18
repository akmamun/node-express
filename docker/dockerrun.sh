docker stop server 
docker rm server 
docker run --name server -p 4000:4000 --network host server
#always run
# docker run --name server -p 4000:4000 --network host -dit --restart always server