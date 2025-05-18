# Weather_API

This is a practice project developed using Node.js, Express, and Redis. It serves as a simple API that fetches weather data from a third-party service and caches responses using Redis to improve performance. The API has been tested using POSTMAN, and the test cases are available in the `tests` directory.

## Features

- **Weather Data Fetching**: Retrieves current weather information from a third-party API.
- **Caching with Redis**: Implements Redis to cache API responses, reducing redundant external API calls.
- **Environment Configuration**: Utilizes environment variables for configuration settings.

## Tech Stack

- Node.js
- Express
- Redis

## Installation

1. **Clone the repository**:
   ```console
   git clone https://github.com/SamardzicLuka/Weather_API.git
   cd Weather_API
    ```
2. **Install dependencies**:
    ```console
    npm install
    ```
3. **Set up environment variables**:
- Create a .env file in the root directory with the following content:
    ```.env
    PORT=<number_of_your_port>
    API_KEY=<your_weather_api_key>
    WEATHER_BASE=https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
    ```
4. **Start Redis (I did it locally):**
    ```console
    redis-server
    ```
5. **Start the application**:
    ```console
    npm start
    ```
## Testing
The API endpoints have been tested using POSTMAN. You can find test cases and collections in the tests directory.

## Notes
- This project is for learning purposes to demonstrate how to build a simple API with caching using Redis.
- There is no user interface provided, as the project focuses solely on backend functionality.
