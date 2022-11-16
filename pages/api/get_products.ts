import excuteQuery from "../../lib/db";

export default async (): Promise<any> => {
  try {
    const result = await excuteQuery("SELECT * FROM heroku_2eb9131ede637f2.products");
    return result;
  } catch (error) {
    console.log(error);
  }
};
