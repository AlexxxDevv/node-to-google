export default () => ({
  database: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/node-to-google',
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
});
