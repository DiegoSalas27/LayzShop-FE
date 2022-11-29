/*
  AUTHOR: Diego Salas Noain
  FILENAME: db.ts
  SPECIFICATION: 
    - We need to connect to the databse to retrieve products for the frontend
    - Create a MySql connection through serverless-mysql package
  FOR: CS 5364 Information Retrieval Section 001 
*/

import mysql from 'serverless-mysql';

/*
  NAME: mysql
  PARAMETERS: host, port, database, user, password
  PURPOSE: Creates a connection to mysql database
  PRECONDITION: environment variables are setup
  POSTCONDITION: Connection to mysql database is established
*/
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT as any,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});

/*
  NAME: excuteQuery
  PARAMETERS: query
  PURPOSE: Accepts a query and executes it through the db instance
  PRECONDITION: a query is given
  POSTCONDITION: Thre result from the query is returned
*/
export default async function excuteQuery(query: string): Promise<any> {
  try {
    const results = await db.query(query);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}