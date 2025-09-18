
import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {

try {
    const data = await readContacts();
    const contacts = JSON.parse(data);

  if (Array.isArray(contacts)) {
      return contacts.length;
    } else {
      console.error("Veri dizi değil!");
      return 0;
    }

} catch (err) {
    console.error("Dosya okuma hatası:", err);
    return 0;
  }


};

console.log(await countContacts());
