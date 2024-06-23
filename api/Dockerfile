# Base Image
FROM python:3.12

# Set the working directory in the container
WORKDIR /app

# Expose the port the app runs on
EXPOSE 5050

# Copy Pipfiles
COPY Pipfile ./


# Approach 1
# Install pipenv, update all dependencies, and sync the virtual environment
# RUN python -m pip install --upgrade pip && \
#    pip install pipenv && \
#    pipenv update && \  # This updates all dependencies to their latest versions and updates Pipfile.lock
#    pipenv sync  # This installs all the packages specified in Pipfile.lock


# Approach 2
# Install pipenv and project dependencies
# pipenv lock # This command updates Pipfile.lock
RUN python -m pip install --upgrade pip && \
    pip install pipenv && \
    pipenv lock && \  
    pipenv install --deploy --ignore-pipfile

# Copy the rest of your app's source code from your project's directory to the Docker container
COPY . ./

# Command to run the application
CMD ["pipenv", "run", "python", "main.py"]
