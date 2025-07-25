import { NewMessage } from "telegram/events/NewMessage.js";
import path from "path";
import { uploadImageToCloudinary } from "../config/cloudinary.js";
import fs from "fs";
import dealModel from "../models/Deal.js";
import os from 'os'



function extractUrl(text) {
  const match = text.match(/https?:\/\/[^\s]+/);
  return match ? match[0] : null;
}

function getSource(url) {
  if(!url) return 'Unknown';
  try {
    const hostname = new URL(url).hostname;
    if (hostname.includes("amazon") ) return "amazon";
    if (hostname.includes("flipkart") || hostname.includes("fkrt")) return "flipkart";
    if (hostname.includes("ajio") || hostname.includes("ajiio")) return "ajio";
    if (hostname.includes("myntra") || hostname.includes("myntr")) return "myntra";
    return "other";
  } catch {
    return "unknown";
  }
}

function extractTitle(message) {
  if (!message) return null;

  // Split by newlines and trim each line
  const lines = message.split('\n').map(line => line.trim());
  const firstLine =  lines.find(line => line.length > 0) || null;
  return firstLine;
}

function findIsLoot(text) {
  const lootRegex = /loot|steal|glitch/i;
    return lootRegex.test(text.toLowerCase());
}

function findDiscount(text) {
  const match = text.toLowerCase().match(/\b\d+% off\b/i);
  match ? match[0] : null;

}


export async function setupMessageHandler(client, io) {

  client.addEventHandler(
    async (event) => {
      const msg = event.message;
      if (!msg.message) return;
      console.log(msg.message);
      
      const date = new Date(msg.date * 1000).toLocaleString();
      const title = extractTitle(msg.message);
      const url = extractUrl(msg.message);
      const source = getSource(url);
      const discount = findDiscount(msg.message);
      const isLoot = findIsLoot(msg.message);

      const acceptedSources = ["amazon" , "flipkart", "ajio" , "myntra"];
      if(!acceptedSources.includes(source)) return;



      let cloudinaryUrl = null;
      let savePath = '';
      if (msg.media) {
        try {
          const tempDir = os.tmpdir();
          const fileName = `image_${msg.id}.jpg`;
          savePath = path.join(tempDir, fileName);

          await client.downloadMedia(msg.media, { outputFile: savePath });
          
          cloudinaryUrl = await uploadImageToCloudinary(savePath);
          console.log(`☁️ Uploaded to Cloudinary: ${cloudinaryUrl}`);

        } catch (err) {
          console.error("❌ Error downloading media:", err);
          return;

        } finally {

          if (fs.existsSync(savePath)) {
              fs.unlinkSync(savePath);
          }
        }
      }
      
      

        const dealData = {
          messageId : msg.id,
          title,
          url,
          source,
          isLoot,
          discount,
          imagePath : cloudinaryUrl,
          date,
        }
        
        try {
            const deal = new dealModel(dealData);
            const savedDeal = await deal.save();
            console.log(`💾 Deal saved to DB: ${savedDeal._id}`);

            io.emit("new_deal", savedDeal);

        } catch (dbError) {
            console.error("❌ Error saving deal to DB:", dbError);
        }
    
    },
    new NewMessage({ chats: ["TopDealsAndOffersss"] })
  );
}
