require("dotenv").config();
const connectDB = require("./DB/DataBase");
const Products = require("./Model/ApiSchema");
const JsonFile = require("./products.json");

const PushData = async () => {
  try {
    await connectDB(process.env.DATABASE);
    await Products.create(JsonFile);
    console.log("Data Save in the Database successfully");
  } catch (error) {
    console.log(error);
  }
};

PushData();
