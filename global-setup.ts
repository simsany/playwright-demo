import { chromium } from '@playwright/test';

const userAgent = process.env.USER_AGENT

async function globalSetup() {
  const browser = await chromium.launch();

  const browserContext = await browser.newContext({ userAgent });
  const tmdbPage = await browserContext.newPage();

  await tmdbPage.goto(process.env.LOGIN_URL as string);

  await browserContext.request.post(process.env.LOGIN_URL as string, {
    form: {
      username: process.env.TMDB_USERNAME as string,
      password: process.env.TMDB_PASSWORD as string,
    },
  });

  await tmdbPage
    .context()
    .storageState({ path: 'storage-state/logged-in.state.json' });

  await browser.close();
}

export default globalSetup;
