#!/usr/bin/env bash

# Pull changes from the main branch
git pull origin main

# Kill and remove the current Docker container
echo "Killing and removing the current Docker container..."
docker stop numeral-iot && docker rm numeral-iot

# Optionally, remove old Docker images to free up space
echo "Removing old Docker images..."
docker image prune -a -f

# Build the Docker image
echo "Building the Docker image..."
docker build -t numeral-iot .

# Run the Docker container
echo "Starting the Docker container..."
docker run --restart always -d --name numeral-iot -p 9798:3000 numeral-iot

echo "Deployment completed successfully."