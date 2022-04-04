echo "Tageando version..."
sh ./tag.sh

echo "Borrando container..."
docker stop challenge-api-server
docker rm challenge-api-server

echo "Borrando imagen..."
docker rmi challenge-api

echo "Creando imagen..."
docker build -t challenge-api .

echo "Creando container..."
docker run --name challenge-api-server -p 8000:8000 -d challenge-api

echo "Status del container"
docker ps --filter "name=challenge-api-server"