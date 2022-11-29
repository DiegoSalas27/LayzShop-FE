/*
  AUTHOR: Diego Salas Noain
  FILENAME: get_products.ts
  SPECIFICATION: 
    - We need to display best products when the main page loads
    - Create an sql query that searches for products orderred by rating in desc order
  FOR: CS 5364 Information Retrieval Section 001 
*/

import excuteQuery from "../../lib/db";

/*
  NAME: anonymous function
  PARAMETERS: None
  PURPOSE: Select a list of products based from walmart, order them in desc order, limit to 100
  PRECONDITION: The main page is loaded
  POSTCONDITION: A list of products are returned
*/

export default async (): Promise<any> => {
  try {
    const result = await excuteQuery("SELECT * FROM products WHERE store_id = 1 ORDER BY rating DESC LIMIT 100");
    return result;
  } catch (error) {
    console.log(error);
  }
};
