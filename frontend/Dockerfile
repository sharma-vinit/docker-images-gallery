# Use the official Node.js LTS image as the base image
FROM node:lts

# Set the working directory in the container
WORKDIR /app

# Expose port 3000 to access the server
EXPOSE 3000

# Copy only package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Delete existing package-lock.json to ensure a fresh instance
RUN rm -f package-lock.json

# Install dependencies silently and regenerate package-lock.json
RUN npm install

# Copy the rest of the application source code
COPY . ./

# Command to start the application
CMD ["npm", "start"]
