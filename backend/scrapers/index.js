import { scrapeAmazonProduct } from './amazon.js';
import { scrapeFlipkartProduct } from './flipkart.js';
import { scrapeAjioProduct } from './ajio.js';


export async function scrapeProductByUrl(url) {
    if (url.includes('amazon')) return await scrapeAmazonProduct(url);
    if (url.includes('flipkart')) return await scrapeFlipkartProduct(url);
    if (url.includes('ajio')) return await scrapeAjioProduct(url);
    return null;
}