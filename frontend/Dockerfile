# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the frontend folder contents into the container
COPY ./frontend /app

# Install Node.js dependencies
RUN npm install && npm run build

# Expose the React development server port
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
