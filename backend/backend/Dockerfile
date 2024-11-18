# Use Python as the base image
FROM python:3.11-slim

# Set the working directory
WORKDIR /app

# Copy the backend folder contents into the container
COPY ./backend /app

COPY requirements.txt /app

# Install Python dependencies
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Expose the Django server port
EXPOSE 8000

# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
