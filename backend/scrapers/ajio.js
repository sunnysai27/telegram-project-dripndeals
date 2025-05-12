import puppeteer from 'puppeteer';

export async function scrapeAjioProduct(url) {
  const browser = await puppeteer.launch({ headless: false }); // use true in production
  const page = await browser.newPage();

 

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });


    // Short scroll just once to trigger product loading
    await page.evaluate(() => window.scrollBy(0, 500));
    await new Promise(resolve => setTimeout(resolve, 3000));


    // Wait for just one product to confirm items are loaded
    await page.waitForSelector('.rilrtl-products-list__item', { timeout: 15000 });

    const products = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('.rilrtl-products-list__item')).slice(0, 5);
      return items.map((el) => {
        const image = el.querySelector('img')?.src || null;
        const title = el.querySelector('.nameCls')?.innerText || null;
        const brand = el.querySelector('.brand strong')?.innerText || null;
        const price = el.querySelector('.price strong')?.innerText || null;
        const originalPrice = el.querySelector('.orginal-price')?.innerText || null;
        const discount = el.querySelector('.discount')?.innerText || null;
        const link = 'https://www.ajio.com' + (el.querySelector('a')?.getAttribute('href') || '');
        return { image, title, brand, price, originalPrice, discount, link };
      });
    });

    await browser.close();
    return products;
  } catch (err) {
    console.error("❌ Scraping failed:", err);
    await browser.close();
    return [];
  }
}
