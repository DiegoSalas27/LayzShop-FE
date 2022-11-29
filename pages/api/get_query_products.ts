/*
  AUTHOR: Diego Salas Noain
  FILENAME: get_query_products.ts
  SPECIFICATION: 
    - We need to retrieve products that matches the user's query
    - Use the IR system and query for the products based on the docIDs retrieved
  FOR: CS 5364 Information Retrieval Section 001 
*/

import excuteQuery from "../../lib/db";
import { HTTPResponse } from "../../interfaces/http";

/*
  NAME: anonymous function
  PARAMETERS: request, res
  PURPOSE: Select a list of products that matches as close as possible the user's query
  PRECONDITION: A query has been entered
  POSTCONDITION: A list of products are returned
*/

export default async (request: any, res: any): Promise<any> => {
  try {
    const response = await fetch(`http://localhost:5000/search?query=${request.query.search}`)
    const { data } = (await response.json()) as HTTPResponse
    let result;
    
    if (data.length > 0) {
      result = await excuteQuery(`SELECT * FROM products WHERE product_id IN(${data.join(',')})`);
    } else {
      result = await excuteQuery(`SELECT * FROM products WHERE product_id IN(0)`);
    }
    

    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
  }
};
