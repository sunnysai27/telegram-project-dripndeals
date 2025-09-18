import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions/index.js";
import input from "input"; // npm install input
import "dotenv/config"

const apiId = parseInt(process.env.API_ID);
const apiHash = process.env.API_HASH;
const stringSession = new StringSession(""); // empty session

(async () => {
  console.log("Generating session...");
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  await client.start({
    phoneNumber: async () => await input.text("Phone number: "),
    password: async () => await input.text("Password: "), // Only if 2FA is enabled
    phoneCode: async () => await input.text("Code sent by Telegram: "),
    onError: (err) => console.log(err),
  });
  console.log("✅ Session created successfully!");
  console.log(client.session.save());
  process.exit();
})();
