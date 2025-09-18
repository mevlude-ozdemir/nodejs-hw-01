import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);

    return contacts;
  } catch (err) {
    console.error('Dosya ve dizin listesini alma hatası:', err);
    return [];
  }
};

console.log(await getAllContacts());
