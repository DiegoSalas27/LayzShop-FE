/*
  AUTHOR: Diego Salas Noain
  FILENAME: get_product_by_slug.ts
  SPECIFICATION: 
    - We need to return a product given its slug
    - Create an sql query that searches for a product given its slug
  FOR: CS 5364 Information Retrieval Section 001 
*/

import excuteQuery from "../../lib/db";

/*
  NAME: anonymous function
  PARAMETERS: request, res
  PURPOSE: Select a product based on its slug
  PRECONDITION: The user is in the product detail page
  POSTCONDITION: A product entity is returned
*/

export default async (request: any, res: any): Promise<any> => {
  try {
    const result = await excuteQuery(`SELECT * FROM products WHERE product_slug = '${request.query.slug}'`);
    
    return res.status(200).json(result[0])
  } catch (error) {
    console.log(error);
  }
};
