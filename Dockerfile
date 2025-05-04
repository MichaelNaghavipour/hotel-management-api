# Use official Node.js v22 slim image for production
FROM node:22-slim

# Set working directory
WORKDIR /app

# Install dependencies (only production)
COPY package*.json ./
RUN npm ci --only=production

# Copy built application
COPY dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables (can be overridden at runtime)
ENV NODE_ENV=production

# Start the application
CMD ["node", "dist/index.js"] 