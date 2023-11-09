const mongoose = require("mongoose");
const DB = process.env.DATABASE;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected");
  } catch (err) {
    console.error(err);
  }
};

connectToDatabase();
