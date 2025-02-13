# phonebook

This repository contains the backend implementation for a phonebook application as part of the [Full Stack Open course (Part 3)](https://fullstackopen.com/en/part3) imparted by the University of Helsinki.

## Description

The application serves a simple API that provides a hardcoded list of phonebook entries. The API is available at the following endpoint:
- `GET /api/persons`: Returns a list of persons in JSON format.
- `GET /info`: Returns information about the phonebook, including the total number of entries and the current server time.
- `GET /api/persons/:id`: Returns the information of a single person based on the ID. If the ID is not found, a 404 error is returned.
- `DELETE /api/persons/:id`: Deletes a single phonebook entry based on the ID. Responds with `204 No Content` if the entry is successfully deleted. Returns `204 No Content` if the ID is not found.
- `POST /api/persons`: Adds a new phonebook entry. Expects a JSON body with `name` and `number`. If either field is missing, or if the name is not unique, the server responds with a 400 Bad Request error. The newly added entry is returned in the response.
- `PUT /api/persons/:id`: Updates the phone number of an existing entry based on the ID. Expects a JSON body with the new number. Returns the updated entry.

### Morgan Middleware for Logging

Morgan middleware is configured to log HTTP requests in the console using the tiny format. Additionally, for POST requests, the request body is logged to the console. Example log for a POST request:

```
POST /api/persons 200 120 - 10.000 ms {"name":"Test User","number":"123-456"}
```

## Deploying the App to the Internet

The application has been deployed using [Fly.io](https://fly.io/). You can access the deployed app at the following URL:

[https://phonebook-lingering-pond-5262.fly.dev/](https://phonebook-lingering-pond-5262.fly.dev/)

## Database

The application is integrated with MongoDB Atlas for storing phonebook entries.

To connect to the database, the `MONGODB_URI` environment variable must be set with the connection string provided by MongoDB Atlas.

## ESLint

The project uses ESLint to ensure code quality and consistency. To check for linting issues, run the following command:

```bash
npm run lint
```
