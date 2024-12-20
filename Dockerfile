# Use official Node.js image as base
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the Vue.js app
RUN npm run build

# Stage 2: Setup for serving the built app
FROM nginx:alpine

# Copy built files from build stage to nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the application
EXPOSE 80

# Start Nginx to serve the Vue app
CMD ["nginx", "-g", "daemon off;"]
