import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions/index.js";
import 'dotenv/config';

// --- SINGLETON PATTERN SETUP ---
let singleClient = null;

const apiId = parseInt(process.env.API_ID);
const apiHash = process.env.API_HASH;
const sessionId = process.env.SESSION_ID || "";

if (!sessionId) {
    throw new Error("SESSION_ID is missing from environment variables. Please run the setup script first.");
}

const stringSession = new StringSession(sessionId);

export async function initializeClient() {
    if (singleClient && singleClient.connected) {
        console.log("✅ Reusing existing Telegram client connection.");
        return singleClient;
    }

    console.log("Creating new Telegram client instance...");
    
    const newClient = new TelegramClient(stringSession, apiId, apiHash, {
        connectionRetries: 5,
    });

    try {
        console.log("Connecting to Telegram with saved session...");
        await newClient.connect();
        console.log("✅ Successfully connected to Telegram!");

        singleClient = newClient;
        return singleClient;
        
    } catch (error) {
        console.error("Failed to connect to Telegram:", error);
        throw error;
    }
}


// This function ensures we disconnect cleanly before the process exits.
const cleanup = async () => {
    console.log('Attempting graceful shutdown...');
    if (singleClient && singleClient.connected) {
        try {
            await singleClient.disconnect();
            console.log('Telegram client disconnected successfully.');
        } catch (e) {
            console.error('Error during Telegram client disconnection:', e);
        }
    }
};

// This signal is sent by nodemon on restart (non-Windows)
process.once('SIGUSR2', async () => {
    await cleanup();
    process.kill(process.pid, 'SIGUSR2');
});

// These signals are for standard app termination (Ctrl+C, and what nodemon uses on Windows)
// Making the handlers async allows us to await the cleanup.
process.on('SIGINT', async () => {
    await cleanup();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    await cleanup();
    process.exit(0);
});
