# 'Express' your creativity assignment

## Overview

This is a simple Images API built with Node.js and Express. It provides CRUD operations for images and users.

The API includes the following resources:

- images
- users

The API uses a simple JSON file as a data store for each resource (`db_images.json` for images and `db_users.json` for users), and includes a set of service modules and route files for handling operations related to each resource.

### Features

- CRUD operations for images and users
- Basic permission-based access control using headers-authentication

## Getting started (for user)

- go to https://api.nasa.gov/ to generate a unique API key for the NASA APOD API
  - this key will be used to pull images from the NASA APOD API
  - please insert it into the query string parameter of the URL within router.post request in the images.js file
- you may use the "date" (in YYYY-MM-DD format) query string to get the image for a specific date. Example: https://api.nasa.gov/planetary/apod?api_key="enter your API key here"&date=2021-09-01
- run the command `npm install` to install the dependencies
- run the command `npm run start` to start the server
- send HTTP requests to `http://localhost:3060` using Postman/Insomnia
- you may send these requests dependant on the resource desired:
  - for the users resource, send request to `http://localhost:3060/api/users`
    - GET, PUT, POST, DELETE requests are available
  - for the images resource, send request to `http://localhost:3060/api/images`
    - GET, PUT, POST, DELETE requests are available
- all requests require authentication using the following headers:
  - `x-email` - the email of the user
  - `x-password` - the password of the user

## Getting started (for developer)

No front-end (for now). Created a "projects" repository on GitHub to host the front-end for this project.

Use Postman to test the ExpressJS API.

Steps to building this project::

1. Create an images database with at least 5 images pulled from the NASA APOD API - get the data from the API and store it in the images.json database.
2. Create a users database with 3 users to start.
3. Create routes for the following:
   - images
   - users
4. Within images routes, create GET (all & by ID), POST (use nanoid for a random identifier), PUT and DELETE routes.
   - The GET (\:id) route will open the selected image in the default browser.
   - use authentication middleware to protect the POST, POST and DELETE routes.
5. Within users routes, create GET (all & by ID), POST & DELETE routes.
   - use authentication middleware (for ADMIN-only user) to protect the GET, POST & DELETE routes.
6. ther is a custom middleware (enforceJSONFormat.js) that is imported into the images.js and users.js files. It is meant to enfore a JSON-body format on PUT & POST (except for the createImage using axios call) requests It will check the request header for the content-type and if it is not application/json, it will return a 400 error. As well, if the body is empty or not a JSON object, it will return a 400 error.

The services and routes have been separated into their own files to keep the code clean and maintainable. The services are responsible for handling the business logic, while the routes are responsible for handling the HTTP requests and responses.

Only two services are required for this project:

- `imagesService.js` - handles operations related to images
- `usersService.js` - handles operations related to users

The routes are separated into two files:

- `images.js` - handles HTTP requests and responses related to images
- `users.js` - handles HTTP requests and responses related to users

The databases are separated into their respective files:

- `db_images.json` - stores the images data
- `db_users.json` - stores the users data
