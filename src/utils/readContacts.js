import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
      try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    console.log('Dosya içeriği:', data);
  } catch (err) {
    console.error('Dosya okuma hatası:', err);
  }
};
