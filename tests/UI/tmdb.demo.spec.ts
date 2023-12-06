import { test, expect } from '../../fixtures/fixtures';

const USER_NAME = process.env.TMDB_USERNAME;

test.describe('TMDB login test', () => {
  test.use({ storageState: './storage-state/logged-in.state.json' });

  test('TMBD user profile page validation', async ({ homePage }) => {

    await test.step('should have correct title', async () => {
      return expect(homePage.page).toHaveTitle('The Movie Database (TMDB)');
    });

    await test.step('the logged in user\'s profile link should be visible', async () => {
      return expect(homePage.profileLink).toBeVisible({ timeout: 20000 });
    });

    await test.step('should have correct welcome message', async () => {
      return expect(homePage.welcomeMessage).toHaveText(`Hi ${USER_NAME}!`);
    });
  });
});
