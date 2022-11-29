/*
  AUTHOR: Diego Salas Noain
  FILENAME: get_similar_products.ts
  SPECIFICATION: 
    - We need to retrieve a product from target that matches as close as possible the selected product from the user
    - Use the IR system and query for the products based on the name of the product selected
  FOR: CS 5364 Information Retrieval Section 001 
*/

import excuteQuery from "../../lib/db";
import { HTTPResponse } from "../../interfaces/http";

/*
  NAME: anonymous function
  PARAMETERS: request, res
  PURPOSE: Retrieve a product from target that matches the selected product
  PRECONDITION: A product was clicked
  POSTCONDITION: A product from target is returned
*/

export default async (request: any, res: any): Promise<any> => {
  try {
    const response = await fetch(`http://localhost:5000/similarity?name=${request.query.name}`)
    let { data } = (await response.json()) as HTTPResponse

    data = data.map(docID => docID + 667)

    const result = await excuteQuery(`SELECT * FROM products 
      WHERE product_id IN(${data.join(',')})
      ORDER BY FIELD(product_id, ${data.join(',')})`);

    return res.status(200).json(result[0])
  } catch (error) {
    console.log(error);
  }
};
