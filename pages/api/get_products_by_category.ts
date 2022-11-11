import excuteQuery from "../../lib/db";

export default async (request: any, res: any): Promise<any> => {
  try {
    const result = await excuteQuery(`SELECT p.name, p.description, p.rating, p.thumbnail_image, p.price 
    FROM lazyshop.products p INNER JOIN lazyshop.categories c on p.category_id = c.category_id where c.category_slug 
    = '${request.query.search}'`);
    
    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
  }
};
