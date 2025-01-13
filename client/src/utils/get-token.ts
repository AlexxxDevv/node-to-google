import axios from 'axios';
import getData from './get-and-emit-data';

export default async function getToken(listIds: string [], listName: string) {
  try {
    const res = await axios('http://94.103.91.4:5000/auth/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        username: 'Alexey',
      }),
    });
    getData(res.data.token, listIds, listName);
  } catch (error) {
    console.log({ error });
  }
}
