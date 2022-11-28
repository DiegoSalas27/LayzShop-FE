import excuteQuery from "../../lib/db";
import { HTTPResponse } from "../../interfaces/http";

export default async (request: any, res: any): Promise<any> => {
  try {
    const response = await fetch(`http://localhost:5000/similarity?name=${request.query.name}`)
    let { data } = (await response.json()) as HTTPResponse

    data = data.map(docID => docID + 667)

    const result = await excuteQuery(`SELECT * FROM heroku_2eb9131ede637f2.products 
      WHERE product_id IN(${data.join(',')})
      ORDER BY FIELD(product_id, ${data.join(',')})`);

    return res.status(200).json(result[0])
  } catch (error) {
    console.log(error);
  }
};
