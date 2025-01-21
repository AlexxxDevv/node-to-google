export default () => ({
  database: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/node-to-google',
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
  jwt: {
    key: process.env.JWT_KEY || 'mY-ZypEr-sEKRet-23549',
    ttl: process.env.JWT_TTL || '7d',
  },
  password: {
    saltRounds: Number(process.env.SALT) || 10,
  },
});
