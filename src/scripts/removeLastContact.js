import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);
    if (contacts.length === 0) {
      console.log('Silinecek kişi bulunamadı. Dizi zaten boş.');
      return;
    }

    const removed = contacts.pop();
    await writeContacts(contacts);

    console.log('Son kişi silindi:', removed);// silinen kişiyi console a yazadır
  } catch (err) {
    console.error('Son kişiyi silerken hata oluştu:', err);
  }
};

removeLastContact();
