import excuteQuery from "../../lib/db";
import { HTTPResponse } from "../../interfaces/http";

export default async (request: any, res: any): Promise<any> => {
  try {
    const response = await fetch(`http://localhost:5000/search?query=${request.query.search}`)
    const { data } = (await response.json()) as HTTPResponse
    let result;
    
    if (data.length > 0) {
      result = await excuteQuery(`SELECT * FROM heroku_2eb9131ede637f2.products WHERE product_id IN(${data.join(',')})`);
    } else {
      result = await excuteQuery(`SELECT * FROM heroku_2eb9131ede637f2.products WHERE product_id IN(0)`);
    }
    

    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
  }
};
