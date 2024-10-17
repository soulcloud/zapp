# Zapp Backend

Zapp is an application that provides internet speed testing services, similar to Fast.com. This backend is built using **Django** and **Django REST Framework** to handle speed test functionality and provide a simple API for frontend communication.

## Features
- **Internet Speed Test**: Measure download and upload speeds, ping, and get server information.
- **API-First**: The backend exposes RESTful endpoints to support frontend development.

## Technologies Used
- **Python**: 3.12
- **Django**: 5.1.2
- **Django REST Framework**: Handles API requests.
- **speedtest-cli**: Used to perform the internet speed test.

## Setup Instructions

### Prerequisites
- Python 3.12+
- Virtual environment tool (`venv`, `virtualenv`, etc.)
- `pip` (Python package installer)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd zapp-backend


Create a virtual environment and activate it:

bash
Copy code
python3 -m venv env
source env/bin/activate
Install the dependencies:

bash
Copy code
pip install -r requirements.txt
Run database migrations:

bash
Copy code
python manage.py migrate
Start the Django development server:

bash
Copy code
python manage.py runserver
The backend will be available at http://127.0.0.1:8000/.

API Endpoints
Method	URL	Description
GET	/api/speedtest/test/	Perform a speed test and get results (download, upload, ping, server).
Example Response
json
Copy code
{
    "download": 87.32,
    "upload": 10.23,
    "ping": 35.0,
    "server": "Speedtest Server Name"
}
Error H0andling
In case of an error during the speed test, a response with the error message is returned:


    "error": "An error occurred while performing the speed test."
}
Future Improvements
Implement rate limiting to prevent excessive requests from the same IP address.
Add authentication for more secure usage.
Extend speed test results to include more detailed metrics.