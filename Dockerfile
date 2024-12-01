# Step 1: Use Node.js to build the app
FROM node:18 as build-stage

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project and build it
COPY . .
RUN npm run build

# Step 2: Use Nginx to serve the built files
FROM nginx:stable-alpine as production-stage

# Copy built files to Nginx's serving directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 for the app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
