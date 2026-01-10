# Use official Node.js LTS image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all source code
COPY . .

# Build Next.js app
RUN npm run build

# Expose port (Azure will set PORT env variable)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
