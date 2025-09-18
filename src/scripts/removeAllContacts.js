import fs from "fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const removeAllContacts = async () => {
   try {
    
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), "utf8");
    console.log("Tüm kişiler başarıyla silindi.");
  } catch (err) {
    console.error("Kişileri silerken hata oluştu:", err);
  }

};

removeAllContacts();
