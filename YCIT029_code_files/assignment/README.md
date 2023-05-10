# 'Express' your creativity assignment

## Overview

No front-end (for now). Will simply use Postman to test the ExpressJS API.

Steps to building this project::

1. Create an images database with at least 5 images pulled from the NASA APOD API - get the data from the API and store it in the images.json database.
2. Create a users database with 3 users to start.
3. Create routes for the following:
   - images
   - users
4. Within images routes, create GET (all & by ID), POST (use nanoid for a random identifier) & DELETE routes.
   - create a special GET route that will open the image in the browser.
   - use authentication middleware to protect the POST & DELETE routes.
5. Within users routes, create GET (all & by ID), POST & DELETE routes.
   - use authentication middleware (for ADMIN-only user) to protect the GET, POST & DELETE routes.
