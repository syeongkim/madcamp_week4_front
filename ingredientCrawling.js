const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1366,
    height: 768,
  });

  const ingredients = [
    "Horn_of_Bicorn",
    "Unicorn_hair",
    "Dragon_liver",
    "Ashwinder_egg",
    "Murtlap_Essence",
    "Dittany",
    "Powered_bicorn",
    "Valerian_root",
    "Nettle",
    "Gillyweed",
    "Moonstone",
    "Asphodel",
    "Wormwood",
  ];

  const extraIngredients = [
    "Aconite",
    "Belladonna",
    "Leech",
    "Fluxweed",
    "Boomslang_skin",
    "Phoenix_feather",
    "Rose_thorns",
    "Squill_bulb",
    "Occamy",
    "Clabbert",
    "Flobberworm_mucus",
    "Beetle",
    "Essence_of_comfrey",
    "Mandrake",
    "Baneberry",
    "Puffer-fish_eyes",
    "Rose_petals",
    "Sal_Ammoniac",
  ];

  const results = [];

  for (const ingredient of extraIngredients) {
    try {
      console.log(`Crawling ${ingredient}`);
      const url = `https://harrypotter.fandom.com/wiki/${ingredient}`;
      await page.goto(url);
      const ingredientNameSelector = ".mw-page-title-main";
      const ingredientName = await page.$eval(
        ingredientNameSelector,
        (el) => el.innerText
      );
      console.log("name is: ", ingredientName);
      const showImageSelector = ".gallery-icon-container";
      await page.waitForSelector(showImageSelector);
      await page.$eval(showImageSelector, (el) => el.click());
      const ingredientImageSelector =
        "#LightboxModal > div > div > div.media > img";
      await page.waitForSelector(ingredientImageSelector);
      const ingredientImage = await page.$eval(
        ingredientImageSelector,
        (el) => el.src
      );
      console.log("image is: ", ingredientImage);

      const imagePath = path.join(__dirname, "images", `${ingredientName}.png`);
      const writer = fs.createWriteStream(imagePath);

      const response = await axios({
        url: ingredientImage,
        method: "GET",
        responseType: "stream",
      });

      response.data.pipe(writer);

      await new Promise((resolve, reject) => {
        writer.on("finish", resolve);
        writer.on("error", reject);
      });

      results.push({
        name: ingredientName,
        imageUrl: `https://syeongkim.github.io/madcamp_week4_front/images/${ingredientName}.png`,
      });
    } catch (e) {
      console.log(`Error crawling ${ingredient}`, e);
    }
  }

  await browser.close();

  // Define the path where the JSON file will be saved
  const filePath = path.join(__dirname, "extraIngredients.json");

  // Save the results to a JSON file
  fs.writeFileSync(filePath, JSON.stringify(results, null, 2));

  console.log(`Data saved to ${filePath}`);
})();
