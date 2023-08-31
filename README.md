# LazyShop-FE
This is the Front End application for Lazy Shop. This system was built using NextJS a production framework for react. It
shows a graphical interface to the user displaying products from different stores and consumes the services of LazyShop IR system API. Because the code runs in a server, it leverages NodeJS runtime environment and has a built in module to support backend functionalities which are used to retrieve the document ids map them with the database, and finally retrive the complete information of each product.

## Before installation:
NodeJS runtime environment should be downloaded and installed. 

## Install dependencies:
```
npm install --save
```
This will install the dependencies needed to run the project

## Environment variables:
It will be necessary to create an .env file in the root of this project with the following entries:
```
MYSQL_HOST=<address of the host>(could be localhost is the database is running on the same computer)
MYSQL_PORT=3306 (by default it will be port 3306 for MySQL database)
MYSQL_DATABASE=<name of the database>
MYSQL_USER=<name of the user of the database>
MYSQL_PASSWORD=<password for the database user>
```

## Run this project:
```
npm run dev
```

## Folder structure:
- pages: 
  - it will contain all the presentation files that are displayed in the web
  - it will contain the api folder where we leverage the NextJS custom server 
- node_modules:
  - contains all the dependencies of our frontend
- lib:
  - contains the connection code to the database
- interfaces:
  - contains files to provide typings for the code
- components:
  - contains reusable and common components like grid cards, cards, carousel, footer, header, etc.

## Database
Run the sql files in this repository to create the schema and the tables needed to run the project.

Demo:
https://www.youtube.com/watch?v=h9S-YwZ4o2M
