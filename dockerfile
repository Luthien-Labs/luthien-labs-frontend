# Use the official Node.js image as the base image
FROM node:19

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

# Expose port for the application
EXPOSE 3002

# Start the application
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3002"]