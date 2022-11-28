import excuteQuery from "../../lib/db";

export default async (request: any, res: any): Promise<any> => {
  try {
    const result = await excuteQuery(`SELECT * FROM products WHERE product_slug = '${request.query.slug}'`);
    
    return res.status(200).json(result[0])
  } catch (error) {
    console.log(error);
  }
};
