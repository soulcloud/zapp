# Use Python as the base image
FROM python:3.11-slim

# Set the working directory
WORKDIR /app

# Copy backend files
COPY ./backend /app

# Install dependencies
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Expose the backend port
EXPOSE 8000

# Run the Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
