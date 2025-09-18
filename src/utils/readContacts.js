import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
      try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return data || "[]"; // boşsa [] dön

  } catch (err) {
       // dosya yoksa boş array dön
    if (err.code === "ENOENT") {
      return "[]";
    }
    throw err;
  }
};
