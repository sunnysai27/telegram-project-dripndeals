import { scrapeAjioProduct } from './scrapers/ajio.js'; // Adjust path as needed

const testUrl = 'https://www.ajio.com/search/?query=%3Aprce-asc%3Agenderfilter%3AMen&text=Sweatshirt%20%26%20Hoodies&classifier=intent&gridColumns=3&userClusterId=nonpremium%7Cmen%2Cbrand7%2Cnrc_decentr%2Cactive&customertype=Existing&pwsvid=PW1746120011895SZBYpuKRzxTcU8hy&utm_source=paisawapas&utm_medium=affiliate&utm_campaign=EPTG2612396_1594_ZBYpuK&utm_term=&clickid=6813ad4cf2d4220001b3f2b9&pid=17&offer_id=2&attribution_window=1D&return_cancellation_window=45D'; // ✅ Use any AJIO listing URL

async function test() {
  const results = await scrapeAjioProduct(testUrl);
  console.log("📦 Scraped Products:", results);
}

test();
