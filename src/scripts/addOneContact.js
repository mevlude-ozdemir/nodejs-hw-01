import fs from "fs/promises";
import { createFakeContact } from "../utils/createFakeContact.js";
import { PATH_DB } from "../constants/contacts.js";
import { readContacts } from "../utils/readContacts.js";

export const addOneContact = async () => {
  try {

    const data = await readContacts();

    //  Eğer boş dizi [] ise, direkt ilk elemanı ekle
    if (data.trim() === "[]") {
      const firstContact = createFakeContact();
      const content = JSON.stringify([firstContact], null, 2);
      await fs.writeFile(PATH_DB, content, "utf8");
      console.log("İlk veri başarıyla dosyaya eklendi.");
      return;
    }


    const newContact = createFakeContact();
    const newContactString = ",\n  " + JSON.stringify(newContact, null, 2) + "\n]";

    const updatedData = data.trim().slice(0, -1);


    await fs.writeFile(PATH_DB, updatedData + newContactString, "utf8");

    console.log("Bir veri başarıyla dosyaya eklendi.");
  } catch (err) {
    console.error("Dosyaya veri ekleme hatası:", err);
  }
};

addOneContact();
