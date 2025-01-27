# phonebook

This repository contains the backend implementation for a phonebook application as part of the [Full Stack Open course (Part 3)](https://fullstackopen.com/en/part3) imparted by the University of Helsinki.

## Description

The application serves a simple API that provides a hardcoded list of phonebook entries. The API is available at the following endpoint:
- `GET /api/persons`: Returns a list of persons in JSON format.

Example response:
```json
[
  {
    "id": "1",
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": "2",
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": "3",
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": "4",
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]
```
