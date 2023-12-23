# Portfolio Starter Ilias Omari

## Description

Welcome to my car portfolio, where I present my favorite cars in a virtual showroom. 🚗 Explore my picks, add or remove cars based on your preferences. Don't miss the immersive 3D visualization of my dream car! 🌟 Dive into my automotive world, where every ride is a unique experience. 🛣️✨

## Installation

```bash
docker-compose up -- build
```

## API documentation

1. Retrieve a list of all cars in the database. This endpoint provides a comprehensive overview of available car data.

```bash
GET /cars
```

2. Retrieve detailed information about a specific car model. Returns data including manufacturer, model, and image URL. If the car model is not found, a 404 error is returned.

```bash
GET /cars/:model
```

3. Create a new car entry by providing the car model, manufacturer, and image URL. Successful addition results in a 200 OK response, while missing fields trigger a 400 Bad Request error.

```bash
POST /cars
```

4. Change the model of a car by providing the new model in the request body. Receives a 200 OK on success, or returns a 400 Bad Request for incomplete requests or a 404 Not Found if the car model is not found.

```bash
PUT /cars/:model
```

5. Delete a car by specifying its model. Returns a 200 OK if successful, or a 404 Not Found if the car model is not present.

```bash
DELETE /cars/:model
```

## Environment Variables

`POSTGRES_DB`: Specifies the database that applications and services will engage with.

`POSTGRES_PASSWORD`: Specifies the password for authenticating with a PostgreSQL database server.

`POSTGRES_USER`: Specifies the user account utilized by applications and services when connecting to the PostgreSQL server.

`POSTGRES_HOST_AUTH_METHOD`: Determines the authentication method used for PostgreSQL host connections.

`NODE_ENV`: Specifies the Node.js environment mode, serving to indicate the operating environment, such as development or production.

## Author

Ilias Omari

## License

This project is governed by the terms of the [MIT License](License.md)

## Sources

- https://canvas.ehb.be/courses/33618/modules (Courses DEV 5 of Jan Everaerts)
- https://dev.to/nourdinedev/how-to-use-threejs-and-react-to-render-a-3d-model-of-your-self-4kkf
- https://chat.openai.com/share/95753cdc-7781-445d-ac3a-64b5eb735518
