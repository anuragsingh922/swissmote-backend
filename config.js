require("dotenv").config();

const database_uri = process.env.DATABASE_URI;
const jwt_secret = process.env.JWT_SECRET;
const jwt_secret_refresh = process.env.JWT_SECRET_REFRESH;
const node_env = process.env.NODE_ENV;

module.exports = {database_uri , jwt_secret , jwt_secret_refresh , node_env}