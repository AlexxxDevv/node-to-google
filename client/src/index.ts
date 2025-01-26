import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors';
import process from 'process';
import getToken from './utils/get-token';

const { PORT = 3001 } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let listIds: string[] = [];
if (process.env.LIST_ID) {
  listIds = JSON.parse(process.env.LIST_ID);
}
let listName: string = '';
if (process.env.LIST_NAME) {
  listName = process.env.LIST_NAME;
}
getToken(listIds, listName);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
