import excuteQuery from "../../lib/db";

export default async (request: any, res: any): Promise<any> => {
  try {
    const result = await excuteQuery("SELECT * FROM lazyshop.categories");
    
    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
  }
};
