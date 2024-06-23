# Import necessary modules
import os
import requests
from flask import Flask, request
from dotenv import load_dotenv
from flask_cors import CORS

# Load environment variables from a .env.local file
load_dotenv(dotenv_path="./.env.local")

# Define constants for the Unsplash API
UNSPLASH_URL = "https://api.unsplash.com/photos/random"  # API endpoint for fetching random photos
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY", "")  # Access key for Unsplash API, fetched from environment variables

# Fetch DEBUG setting from environment variables and convert it to boolean
DEBUG = os.environ.get("DEBUG", "True").lower() in ['true', '1', 't', 'y', 'yes']

# Validate UNSPLASH_KEY to ensure it's set
if not UNSPLASH_KEY:
    raise EnvironmentError(
        "Please create .env.local file and insert there UNSPLASH_KEY"
    )

# Initialize a Flask application
app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing (CORS) for the Flask app
app.config["DEBUG"] = DEBUG  # Set Flask's debug mode based on the DEBUG environment variable

# Define a route to fetch a new image based on a search query
@app.route("/new-image")
def new_image():
    # Fetch the search query from URL parameters
    word = request.args.get("query")
    # Set headers for the Unsplash API request
    headers = {"Accept-Version": "v1", "Authorization": "Client-ID " + UNSPLASH_KEY}
    # Set parameters for the API request; in this case, the query word
    params = {"query": word}
    
    try:
        # Make a GET request to Unsplash API
        response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
        response.raise_for_status()  # Check for HTTP errors and raise exception if any
        data = response.json()  # Parse the JSON response into a dictionary
        return data
    except requests.RequestException as e:
        # Handle network errors and return an error message and a 500 status code
        return {"error": str(e)}, 500

# Check if the script is executed as the main program and run the Flask app
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)  # Run the app on all interfaces, port 5050
