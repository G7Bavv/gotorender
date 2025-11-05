# Use an official Node.js image as the base
FROM node:16-alpine

# Create a working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present) to install dependencies
# This is done first to leverage Docker's build cache
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port your app listens on
EXPOSE 3000

# Define the command to run your app
# The "start" script is defined in your package.json
CMD [ "npm", "start" ]