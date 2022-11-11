import excuteQuery from "../../lib/db";

export default async (): Promise<any> => {
  try {
    const result = await excuteQuery("SELECT * FROM lazyshop.products");
    return result;
  } catch (error) {
    console.log(error);
  }
};
