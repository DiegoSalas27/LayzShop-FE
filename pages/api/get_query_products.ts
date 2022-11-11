import excuteQuery from "../../lib/db";
import { HTTPResponse } from "../../interfaces/http";

export default async (request: any, res: any): Promise<any> => {
  try {
    const response = await fetch(`http://localhost:5000/search?query=${request.query.search}`)
    const { data } = (await response.json()) as HTTPResponse
    
    const result = await excuteQuery(`SELECT * FROM lazyshop.products WHERE product_id IN(${data.join(',')})`);

    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
  }
};
