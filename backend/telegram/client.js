import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions/index.js";
import input from "input";
import 'dotenv/config';

const apiId = parseInt(process.env.API_ID);
const apiHash = process.env.API_HASH;
let stringSession = process.env.SESSION_ID || "";

// Ensure SESSION_ID is provided in the production environment
if (!process.env.SESSION_ID) {
    throw new Error("SESSION_ID is missing from environment variables. Please run the setup script first.");
}

const client = new TelegramClient(new StringSession(stringSession), apiId, apiHash, {
  connectionRetries: 5,
});

export async function initializeClient() {
  
  try {
    console.log("Connecting to Telegram with saved session...");
        await client.connect();
        console.log("✅ Successfully connected to Telegram!");
  } catch (error) {
    console.error("Failed to connect to Telegram:", error);
        // Exit the process if the connection fails, as the app can't function.
        process.exit(1);
  }

  return client;
}

// export default client;
