import { createFakeContact } from "../utils/createFakeContact.js";
import fs from 'fs/promises';
import {PATH_DB} from "../constants/contacts.js";



const generateContacts = async (number) => {
     const data = createFakeContact(number);
  try {
    await fs.appendFile(PATH_DB, data, 'utf8');
    console.log('Veriler başarıyla dosyaya eklendi.');
  } catch (err) {
    console.error('Dosyaya veri ekleme hatası:', err);
  }
};

generateContacts(5);
