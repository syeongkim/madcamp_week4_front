const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1366,
    height: 768
  });

  const results = [];

  try {
    await page.goto("https://harrypotter.fandom.com/wiki/List_of_spells", { waitUntil: 'domcontentloaded' });
    const spellNameSelector = ".wds-tab__content h3";
    await page.waitForSelector(spellNameSelector, { timeout: 10000 });
    const spells = await page.$$(spellNameSelector);
    console.log(spells.length);

    for (const spell of spells) {
      try {
        let spellName = await spell.evaluate(el => el.innerText.replace("[]", "").trim());
        if (spellName.startsWith('(')) {
          spellName = spellName.slice(1, -1);
        }

        console.log(spellName);
  
        let nextElement = await spell.evaluateHandle(el => el.nextElementSibling);
        let tdElements = await nextElement.$$eval('td', tds => tds.map(td => td.innerText));
        let ddElements = await nextElement.$$eval('dd', dds => dds.map(dd => dd.innerText));
  
        if (!tdElements.length && !ddElements.length) {
          nextElement = await spell.evaluateHandle(el => el.nextElementSibling.nextElementSibling);
          tdElements = await nextElement.$$eval('td', tds => tds.map(td => td.innerText));
          ddElements = await nextElement.$$eval('dd', dds => dds.map(dd => dd.innerText));
        }
  
        let description = '';
        for (const text of [...tdElements, ...ddElements]) {
          if (text.includes('Description:')) {
            description = text.replace('Description:', '').trim();
            break;
          }
        }
  
        if (description) {
          console.log({ name: spellName, description });
          results.push({ name: spellName, description });
        } else {
          console.log({ name: spellName, description: 'No description found' });
          results.push({ name: spellName, description: 'No description found' });
        }
      } catch (e) {
        console.log(`Error crawling spell`, e);
      }
    } 
  } catch (e) {
    console.log(`Error crawling spells`, e);
  }


  await browser.close();

  // Define the path where the JSON file will be saved
  const filePath = path.join(__dirname, 'spells.json');

  // Save the results to a JSON file
  fs.writeFileSync(filePath, JSON.stringify(results, null, 2));

  console.log(`Data saved to ${filePath}`);
})();
