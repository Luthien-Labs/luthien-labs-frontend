# Use multi-stage build for production
FROM node:22-alpine AS builder

# Set the working directory in the container to /app
WORKDIR /app

# Copy dependency files first
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Astro project
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine

# Copy the built files to Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]