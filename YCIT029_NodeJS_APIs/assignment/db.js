// db.js
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesFile = join(__dirname, "db_images.json");
const usersFile = join(__dirname, "db_users.json");

const imagesAdapter = new JSONFile(imagesFile);
const usersAdapter = new JSONFile(usersFile);

const imagesDefaultData = { images: [] };
const usersDefaultData = { users: [] };

export const imagesDb = new Low(imagesAdapter, imagesDefaultData);
export const usersDb = new Low(usersAdapter, usersDefaultData);

await imagesDb.read();
await usersDb.read();
