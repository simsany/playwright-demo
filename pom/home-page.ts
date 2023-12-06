import { Locator, Page } from '@playwright/test';

const { BASE_URL } = process.env;

export class HomePage {
  readonly page: Page;
  readonly baseUrl: string;
  readonly profileLink: Locator;
  readonly footer: Locator;
  readonly welcomeMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = BASE_URL as string;
    this.profileLink = page.locator('li.user a');
    this.footer = page.locator('footer');
    this.welcomeMessage = this.footer.locator('.rounded.logged_in');
  }

  async goto() {
    await this.page.goto(this.baseUrl);
  }
  async waitForLoading() {
    await this.footer.waitFor({ state: 'visible' });
  }

  async load() {
    await this.goto();
    await this.waitForLoading();
  }
}
