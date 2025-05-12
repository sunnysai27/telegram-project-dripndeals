// backend/telegram/client.js
import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions/index.js";
import input from "input";
import 'dotenv/config';

const apiId = parseInt(process.env.API_ID);
const apiHash = process.env.API_HASH;
let stringSession = process.env.SESSION_ID || "";

const client = new TelegramClient(new StringSession(stringSession), apiId, apiHash, {
  connectionRetries: 5,
});

export async function initializeClient() {
  if (!stringSession) {
    await client.start({
      phoneNumber: async () => await input.text("Enter your phone number: "),
      password: async () => await input.text("Enter your password (if any): "),
      phoneCode: async () => await input.text("Enter the code you received: "),
      onError: (err) => console.error(err),
    });
    console.log("✅ Connected to Telegram!");
    // fs.writeFileSync("session.txt", client.session.save());
    // console.log("Session saved to session.txt");
  } else {
    console.log("🔓 Logged in with saved session!");
    await client.connect();
  }

  return client;
}

export default client;
