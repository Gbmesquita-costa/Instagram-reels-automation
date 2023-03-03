import puppeteer from 'puppeteer';
import path from "path"
import readLineSync from "readline-sync"

async function createReels() {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50, executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe" });
  const page = await browser.newPage();

  // User Information
  const email = readLineSync.question('Informe o seu e-mail: ');
  const password = readLineSync.question('Informe a sua senha: ');

  // File Information

  const file = readLineSync.question('Selecione o diretório ma pasta raiz do seu projeto: ');
  const format = readLineSync.question('Informe o formato do se vídeo: ');

  // Photo Cap
  const photoCap = readLineSync.question('Informe a foto de capa do seu vídeo: ');

  // Time to execute de clicks
  const time = readLineSync.question('Selecione o tempo de execução dos cliques: ');

  // Hashtags

  const hashtags = readLineSync.question('Coloque as suas hashtags: ');

  // Day, Month, Year, hour and minute information

  const day = readLineSync.question('Informe o dia que será publicado: ');
  const month = readLineSync.question('Informe o mês que será publicado: ');
  const year = readLineSync.question('Informe o ano que será publicado: ');
  const hour = readLineSync.question('Informe a hora que será publicado: ');
  const minute = readLineSync.question('Informe os minutos que será publicado: ');

  await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: "networkidle2" });

  const now = new Date();
  const date = new Date();

  date.setHours(hour);
  date.setMinutes(minute);

  let timeRemaining = date.getTime() - now.getTime();

  date.setDate(day);
  let compareDays = date.getDate() - now.getDate();

  date.setMonth(month - 1);
  let compareMonths = date.getMonth() - now.getMonth();

  date.setFullYear(year);
  let compareYears = date.getFullYear() - now.getFullYear();

  for (let i = 0; i < compareDays; i++) {
    if (timeRemaining > 0) {
      return;
    }

    return;
  };

  for (let i = 0; i < compareMonths; i++) {
    if (timeRemaining > 0) {
      return;
    }
    return;
  };

  for (let i = 0; i < compareYears; i++) {
    if (timeRemaining > 0) {
      return;
    }
    return;
  };

  await TimeOut(timeRemaining)

  await page.type('input[name="username"]', email);
  await page.type('input[name="password"]', password);
  await page.click('button[type="submit"]');

  await page.waitForNavigation({ waitUntil: 'networkidle2' });

  const notification = await page.$('button[class="_a9-- _a9_0"]');

  if (notification) {
    await page.waitForSelector('button[class="_a9-- _a9_0"]');
    await page.click('button[class="_a9-- _a9_0"]');
  }

  await page.click('svg[aria-label="Nova publicação"]');

  await page.waitForSelector('input[type="file"]');

  const filePath = path.resolve(file);

  const fileInputs = await page.$('input[type="file"]');
  await fileInputs.uploadFile(filePath);

  await page.waitForSelector('button[class="_acan _acap _acaq _acas _acav _aj1-"]')
  await page.click('button[class="_acan _acap _acaq _acas _acav _aj1-"]')

  await page.waitForSelector('svg[aria-label="Selecionar corte"]');
  await page.click('svg[aria-label="Selecionar corte"]');

  switch (format) {
    case 'Ícone de corte em formato quadrado':
      await page.waitForSelector('svg[aria-label="Ícone de corte em formato quadrado"]');
      await page.click('svg[aria-label="Ícone de corte em formato quadrado"]');
      break;
    case 'Ícone de corte em formato retrato':
      await page.waitForSelector('svg[aria-label="Ícone de corte em formato retrato"]');
      await page.click('svg[aria-label="Ícone de corte em formato retrato"]');
      break;
    case 'Ícone de corte em formato paisagem':
      await page.waitForSelector('svg[aria-label="Ícone de corte em formato paisagem"]');
      await page.click('svg[aria-label="Ícone de corte em formato paisagem"]');
      break;
  };

  await TimeOut(time)

  await page.waitForSelector('div[class="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9p  _ab9- _abaa _abcm"]');
  await page.click('div[class="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9p  _ab9- _abaa _abcm"] > button[type="button"]');

  await page.waitForSelector('input[type="file"]');

  const photoPath = path.resolve(photoCap);

  const photoInputs = await page.$('input[type="file"]');
  await photoInputs.uploadFile(photoPath);

  await TimeOut(time)

  await page.waitForSelector('div[class="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9p  _ab9- _abaa _abcm"]');
  await page.click('div[class="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9p  _ab9- _abaa _abcm"] > button[type="button"]');

  await page.waitForSelector('div[role="textbox"]');
  await page.type('div[role="textbox"]', hashtags);

  await TimeOut(time)

  await page.waitForSelector('div[class="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9p  _ab9- _abaa _abcm"]');
  await page.click('div[class="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9p  _ab9- _abaa _abcm"] > button[type="button"]');

  await page.waitForSelector('img[src="https://static.cdninstagram.com/rsrc.php/v3/yb/r/sHkePOqEDPz.gif"]', { timeout: 0 });

  const tryAgain = await page.$('div[class="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9p  _ab9- _abaa _abcm"]');

  if (tryAgain) {
    await page.waitForSelector('div[class="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9p  _ab9- _abaa _abcm"] > button[type="button"]');
    await page.click('div[class="_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9p  _ab9- _abaa _abcm"] > button[type="button"]');
  }

  await TimeOut(time);

  await browser.close();
}

function TimeOut(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
};

createReels();