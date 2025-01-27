# phonebook

This repository contains the backend implementation for a phonebook application as part of the [Full Stack Open course (Part 3)](https://fullstackopen.com/en/part3) imparted by the University of Helsinki.

## Description

The application serves a simple API that provides a hardcoded list of phonebook entries. The API is available at the following endpoint:
- `GET /api/persons`: Returns a list of persons in JSON format.
- `GET /info`: Returns information about the phonebook, including the total number of entries and the current server time.
- `GET /api/persons/:id`: Returns the information of a single person based on the ID. If the ID is not found, a 404 error is returned.
- `DELETE /api/persons/:id`: Deletes a single phonebook entry based on the ID. Responds with `204 No Content` if the entry is successfully deleted. Returns `204 No Content` if the ID is not found.
- `POST /api/persons`: Adds a new phonebook entry. Expects a JSON body with `name` and `number`. If either field is missing, or if the name is not unique, the server responds with a 400 Bad Request error. The newly added entry is returned in the response.
