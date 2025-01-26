import axios from 'axios';
import getData from './get-and-emit-data';

export default async function getToken(listIds: string [], listName: string) {
  try {
    const res = await axios('http://localhost:3000/auth/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        username: 'Alexey',
        password: '1q2w3e',
      }),
    });
    getData(res.data.access_token, listIds, listName);
  } catch (error) {
    console.log({ error });
  }
}
