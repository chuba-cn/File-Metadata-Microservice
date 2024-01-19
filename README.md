# File Metadata Microservice (FCC PROJECT)

This project provides a simple API for uploading files and retrieving metadata about the uploaded files. Users can interact with the API to analyze various properties of the uploaded files, such as name, type, and size.

## Getting Started

To use the File Metadata Microservice API, follow the steps below:

### 1. Clone the Repository

```bash
git clone https://github.com/chuba-cn/file-metadata-microservice.git
cd file-metadata-microservice
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
node app.js
```

The server will start listening on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### 1. Home Route

- **Endpoint:** `/`
- **Description:** Displays the home page for interacting with the file upload functionality.
- **Method:** GET

### 2. File Analysis API

- **Endpoint:** `/api/fileanalyse`
- **Description:** Handles file uploads and returns metadata about the uploaded file.
- **Method:** POST
- **Request Body:** Requires a file attached to the 'upfile' field.

#### Example Usage

```bash
curl -X POST -H "Content-Type: multipart/form-data" -F "upfile=@/path/to/your/file.txt" http://localhost:3000/api/fileanalyse
```

#### Response

```json
{
  "name": "file.txt",
  "type": "text/plain",
  "size": 12345
}
```

### Testing

You can test the API by visiting the home page `http://localhost:3000/` and using the provided file upload form. Additionally, you can use tools like `curl` or Postman to make API requests to the `/api/fileanalyse` endpoint.

### Dependencies

- Express: `https://expressjs.com/`
- Cors: `https://www.npmjs.com/package/cors`
- EJS (Embedded JavaScript): `https://www.npmjs.com/package/ejs`
- Multer: `https://www.npmjs.com/package/multer`
