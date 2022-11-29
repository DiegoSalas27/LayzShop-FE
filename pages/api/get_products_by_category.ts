/*
  AUTHOR: Diego Salas Noain
  FILENAME: get_product_by_category.ts
  SPECIFICATION: 
    - We need to return a product given its category
    - Create an sql query that searches for a product given its category
  FOR: CS 5364 Information Retrieval Section 001 
*/

import excuteQuery from "../../lib/db";

/*
  NAME: anonymous function
  PARAMETERS: request, res
  PURPOSE: Select a product based on its category
  PRECONDITION: The user is in an specific category page
  POSTCONDITION: A list of products are returned
*/

export default async (request: any, res: any): Promise<any> => {
  try {
    const result = await excuteQuery(`SELECT p.name, p.description, p.rating, p.thumbnail_image, p.price, 
    p.category_id, p.product_slug FROM products p INNER JOIN categories c on p.category_id = c.category_id where c.category_slug 
    = '${request.query.search}'`);
    
    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
  }
};
