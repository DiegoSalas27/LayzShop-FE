import mysql from 'serverless-mysql';
import { IProduct } from '../interfaces';

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT as any,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});
export default async function excuteQuery(query: string): Promise<any> {
  try {
    const results = await db.query(query) as IProduct[];
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}