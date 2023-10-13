const { connect, connection } = require("mongoose");

connect("mondoddb://127.0.0.1:27017/flockDB");

module.exports = connection;
