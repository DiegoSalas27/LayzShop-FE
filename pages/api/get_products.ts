import excuteQuery from "../../lib/db";

export default async (): Promise<any> => {
  try {
    const result = await excuteQuery("SELECT * FROM products WHERE store_id = 1 ORDER BY rating DESC LIMIT 100");
    return result;
  } catch (error) {
    console.log(error);
  }
};
