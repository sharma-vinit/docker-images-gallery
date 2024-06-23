import os
import requests
from flask import Flask, request
from dotenv import load_dotenv
from flask_cors import CORS

# Load environment variables
load_dotenv(dotenv_path="./.env.local")

# Constants
UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY", "")
DEBUG = os.environ.get("DEBUG", "True").lower() in ['true', '1', 't', 'y', 'yes']

# Validate UNSPLASH_KEY
if not UNSPLASH_KEY:
    raise EnvironmentError(
        "Please create .env.local file and insert there UNSPLASH_KEY"
    )

# Initialize Flask app
app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = DEBUG

# Define route for getting a new image
@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    headers = {"Accept-Version": "v1", "Authorization": "Client-ID " + UNSPLASH_KEY}
    params = {"query": word}
    
    try:
        # Make a GET request to Unsplash API
        response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
        response.raise_for_status()  # Raises an HTTPError for bad responses
        data = response.json()
        return data
    except requests.RequestException as e:
        # Handle errors in the network call
        return {"error": str(e)}, 500

# Run the application
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
