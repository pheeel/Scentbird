import test, { expect } from 'fixtures';
import { mostPopularDesktopViewports } from 'consts';

const mainContentSelector = '#main';

for (const viewport of mostPopularDesktopViewports) {
  test.describe('Visual regression: Main Page', () => {
    test.beforeEach(async ({ policyBanner, chatButton }) => {
      await policyBanner.hide();
      await chatButton.hide();
    });
    test.use({ viewport });
    test(`Check size w:${viewport.width} h:${viewport.height}`, async ({ page }) => {
      await expect(page.locator(mainContentSelector)).toHaveScreenshot();
    });
  });
}
