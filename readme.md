## Usage

### Docker

Granted you have Docker installed.

Simply run `npm run dc`

This will create a mongodb instance and a container that will be used to "seed" mongo with some initial book data.
Once that is complete it will create the web container which will be accessible on port 3000.


### Gulp

If you wish to run without Docker you can simply just run `gulp` *(granted you've installed gulp globally)*.
This will start the API on port 8000.

If you wish to do this you will need to seed mongo with the JSON data before starting the API.

In order to do that you can simply run `npm run mongo-up` this assumes you have the mongoimport binary with in your PATH.
This will start a MongoDB container and seed it with the required data.

### Components

* MongoDB
* NodeJS + Express

### Status codes

Throughout this project you will notice sets of [status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
These are general Web API related status codes but please see below for more information on what they mean.

* 200 - Successful
* 201 - Created
* 500 - Internal Server Error
* 204 - No Content

### Postman

If you want to work with an API you will want a tool that allows you to test and make API calls as you build. [Postman](https://www.getpostman.com/) makes this process super simple.
You can make any sort of verb call from the interface and have immediate feedback to know how your API is functioning.