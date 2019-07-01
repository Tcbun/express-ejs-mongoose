const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/test";
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
    console.log("mongodb数据库连接成功")
});
mongoose.connection.on("error", (error) => {
    console.log("mongodb数据库连接失败", error)
});
module.exports = mongoose;
