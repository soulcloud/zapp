# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy frontend files
COPY ./frontend /app

# Install dependencies and build the app
RUN npm install && npm run build

# Expose the port the frontend will run on
EXPOSE 3000

# Start the frontend server
CMD ["npm", "start"]
