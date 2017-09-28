async function login(page) {
  const loginEnv = (process.env.UNESC_LOGIN||':').split(':');
  const login = loginEnv[0];
  const password = loginEnv[1];

  await page.goto('https://minha.unesc.net/signin');
  
  await page.click("#cd_pessoa");
  await page.type(login);

  await page.click("#password");
  await page.type(password);

  await page.click('input[value="Entrar"]');
  await page.waitForNavigation();
  return page;
}
export default login;