// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GoogleAuth } from 'google-auth-library';
// eslint-disable-next-line import/no-extraneous-dependencies
import { google } from 'googleapis';

export default async function getData(token: string, listIds: string[], listName: string) {
  try {
    let response: any = { data: [] };
    let i = 0;
    const arr: Map<number, object> = new Map();
    const status: Map<number, object> = new Map();
    let statusRes: any = [];
    do {
      const offset = i * 1000;
      // eslint-disable-next-line no-await-in-loop
      response = await axios.get(
        `http://localhost:3000/clients?offset=${offset}&limit=1000`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      response.data.forEach((item: any) => {
        arr.set(item._id, item);
      });
      const usId = response.data.map((item: { _id: any; }) => item._id);
      // eslint-disable-next-line no-await-in-loop
      statusRes = await axios('http://localhost:3000/clients/status', {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify({
          ids: usId,
        }),
      });
      statusRes.data.forEach((item: any) => {
        status.set(item._id, item);
      });
      // eslint-disable-next-line no-plusplus
      i++;
    } while (response.data.length > 0);
    const statusArrFromMap: any[] = Array.from(status.values());
    // eslint-disable-next-line no-restricted-syntax
    for (const x of statusArrFromMap) {
      const item = arr.get(x.id);
      arr.set(x.id, { ...item, ...x });
    }
    const mergedList = [...arr.values()];
    const arrFromMap: any[] = Array.from(mergedList.values());
    // логика записи в лист
    const auth = new GoogleAuth({
      keyFile: 'credentials.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });

    const service = google.sheets({ version: 'v4', auth });

    const rows = arrFromMap.map((item) => Object.values(item));
    const values = rows;
    const requestBody = {
      values,
    };
    listIds.forEach(async (listId) => {
      const range = `${listName}!A:I`;
      const spreadsheetId = listId;
      const valueInputOption = 'RAW';
      try {
        await service.spreadsheets.values.update({
          spreadsheetId,
          range,
          valueInputOption,
          requestBody,
        });
        console.log('cells appended.');
      } catch (error) {
        console.log({ error });
      }
    });
  } catch (error) {
    console.error(error);
  }
}
