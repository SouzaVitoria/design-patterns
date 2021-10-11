import Db from "../model/Db";
import IDbProduct from "../model/IDbProduct";
import MongoDBProduct from "../model/MongoDBProduct";
import MySQLProduct from "../model/MySQLProduct";

export default class DbProductFactory {
  static type: Db = Db.MONGODB;

  static create(): IDbProduct {
    if (DbProductFactory.type === Db.MYSQL) {
      return new MySQLProduct();
    } else if (DbProductFactory.type === Db.MONGODB) {
      return new MongoDBProduct();
    }
  }
}