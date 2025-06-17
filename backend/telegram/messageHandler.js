import { NewMessage } from "telegram/events/NewMessage.js";
import path from "path";
import { uploadImageToCloudinary } from "../config/cloudinary.js";
import fs from "fs";
import dealModel from "../models/Deal.js";



function extractUrl(text) {
  const match = text.match(/https?:\/\/[^\s]+/);
  return match ? match[0] : null;
}

function getSource(url) {
  try {
    const hostname = new URL(url).hostname;
    if (hostname.includes("amazon") ) return "Amazon";
    if (hostname.includes("flipkart") || hostname.includes("fkrt")) return "Flipkart";
    if (hostname.includes("ajio") || hostname.includes("ajiio")) return "Ajio";
    if (hostname.includes("myntra") || hostname.includes("myntr")) return "Myntra";
    return "Other";
  } catch {
    return "Unknown";
  }
}

function extractTitle(message) {
  if (!message) return null;

  // Split by newlines and trim each line
  const lines = message.split('\n').map(line => line.trim());

  // Return the first non-empty line as the title
  return lines.find(line => line.length > 0) || null;
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



      let imagePath = null;
      if (msg.media) {
        try {
          const fileName = `image_${msg.id}.jpg`;
          const saveDir = "../frontend/public/images/";
          const savePath = path.join(saveDir, fileName);

          await client.downloadMedia(msg.media, { outputFile: savePath });
          
          const cloudinaryUrl = await uploadImageToCloudinary(savePath);
          console.log(`☁️ Uploaded to Cloudinary: ${cloudinaryUrl}`);

          imagePath = cloudinaryUrl;

          // Optional: delete local file
          fs.unlinkSync(savePath);
        } catch (err) {
          console.error("❌ Error downloading media:", err);
        }
      }
      const acceptedSources = ["Amazon" , "Flipkart", "Ajio" , "Myntra"];
      if(imagePath && acceptedSources.includes(source)){

        const dealData = {
          messageId : msg.id,
          title,
          url,
          source,
          imagePath,
          date,
        }

        const deal = new dealModel(dealData);
        await deal.save();


        io.emit("new_message", {
            id: msg.id,
            title,
            date,
            url,
            source,
            imagePath,
        });
      }
      
    },
    new NewMessage({ chats: ["TopDealsAndOffersss"] })
  );
}
