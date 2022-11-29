/*
  AUTHOR: Diego Salas Noain
  FILENAME: get_categories.ts
  SPECIFICATION: 
    - We need to list categories
    - Retrieve the list of categories through a query
  FOR: CS 5364 Information Retrieval Section 001 
*/

import excuteQuery from "../../lib/db";

/*
  NAME: anonymous function
  PARAMETERS: request, res
  PURPOSE: Select a category with an specific id
  PRECONDITION: The user clicks on a category
  POSTCONDITION: The category entity is retrieved from the database
*/

export default async (request: any, res: any): Promise<any> => {
  try {
    const result = await excuteQuery(`SELECT * FROM categories WHERE category_id = ${request.query.id}`);
    
    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
  }
};
