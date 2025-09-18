import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);

    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }

    await writeContacts(contacts);

    console.log(`${number} veri başarıyla eklendi.`);
  } catch (err) {
    console.error('Dosyaya veri ekleme hatası:', err);
  }
};

generateContacts(2);
