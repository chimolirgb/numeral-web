#!/usr/bin/env bash

# Pull changes from the main branch
git pull origin master

# Kill and remove the current Docker container
echo "Killing and removing the current Docker container..."
docker stop numeral-web && docker rm numeral-web

# Optionally, remove old Docker images to free up space
echo "Removing old Docker images..."
docker image prune -a -f

# Build the Docker image
echo "Building the Docker image..."
docker build -t numeral-web .

# Run the Docker container
echo "Starting the Docker container..."
docker run --restart always -d --name numeral-web -p 9799:3000 numeral-web

echo "Deployment completed successfully."