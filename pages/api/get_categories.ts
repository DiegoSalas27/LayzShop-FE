/*
  AUTHOR: Diego Salas Noain
  FILENAME: get_categories.ts
  SPECIFICATION: 
    - We need to search for products given their categories
    - Retrieve the list of categories from the database
  FOR: CS 5364 Information Retrieval Section 001 
*/

import excuteQuery from "../../lib/db";

/*
  NAME: anonymous function
  PARAMETERS: request, res
  PURPOSE: Selects all the categories from the database
  PRECONDITION: The page is loaded
  POSTCONDITION: The list of categories is returned
*/

export default async (request: any, res: any): Promise<any> => {
  try {
    const result = await excuteQuery("SELECT * FROM categories");
    
    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
  }
};
