import puppeteer from 'puppeteer';
import login from '../login/login';
import invoiceGetter from '../invoice/invoiceGetter';

async function invoiceApi(req, res) {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await login(page);
  const list = await invoiceGetter(page);

  await browser.close();
  res.send(list);
}
export default invoiceApi;