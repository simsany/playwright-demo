import { test as base } from '@playwright/test';
import { HomePage } from '../pom/home-page';

// Declare the types of your fixtures.
type MyFixtures = {
  homePage: HomePage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.load();

    await use(homePage);

    await homePage.page.close()
  },
});

export { expect } from '@playwright/test';
