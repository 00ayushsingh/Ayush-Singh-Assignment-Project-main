# Backend Assignment API

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```properties
   MONGO_URI=mongodb://localhost:27017/backend-assignment
   PORT=5000
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Connect to MongoDB:**
   Ensure MongoDB is running on your local machine or update the `MONGO_URI` in the `.env` file to point to your MongoDB instance.

## API Endpoints

### Register a new user

- **URL:** `/api/register`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "username": "your-username",
    "password": "your-password"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```

### List all rides

- **URL:** `/api/rides`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "id": "ride1",
      "name": "Ride 1",
      "description": "Description of Ride 1"
    },
    {
      "id": "ride2",
      "name": "Ride 2",
      "description": "Description of Ride 2"
    }
  ]
  ```

### Get details for a specific ride

- **URL:** `/api/rides/:id`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "id": "ride1",
    "name": "Ride 1",
    "description": "Description of Ride 1"
  }
  ```

## Testing with Postman

1. **Open Postman.**

2. **Create a new request:**
   - **Method:** `POST`
   - **URL:** `http://localhost:5000/api/register`
   - **Body:** Select `raw` and `JSON` format, then add:
     ```json
     {
       "username": "testuser",
       "password": "testpassword"
     }
     ```
   - **Send the request** and you should receive a success message.

3. **Create another request:**
   - **Method:** `GET`
   - **URL:** `http://localhost:5000/api/rides`
   - **Send the request** and you should receive a list of rides.

4. **Create another request:**
   - **Method:** `GET`
   - **URL:** `http://localhost:5000/api/rides/ride1`
   - **Send the request** and you should receive the details of the specific ride.

## Default Route

- **URL:** `/`
- **Method:** `GET`
- **Response:** HTML content with available endpoints.

