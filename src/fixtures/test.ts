import { test as baseTest } from '@playwright/test';
import { GiftPage } from 'pages';
import { PolicyBanner, ChatWidget, CartModal } from 'components';
import { Helpers } from 'utils';

const test = baseTest.extend<{
  giftPage: GiftPage;
  policyBanner: PolicyBanner;
  chatButton: ChatWidget;
  cartModal: CartModal;
  helpers: Helpers;
}>({
  page: async ({ page }, use) => {
    await page.goto('', { waitUntil: 'networkidle' });
    await use(page);
  },
  giftPage: async ({ page }, use) => {
    await use(new GiftPage(page));
  },

  policyBanner: async ({ page }, use) => {
    await use(new PolicyBanner(page));
  },

  chatButton: async ({ page }, use) => {
    await use(new ChatWidget(page));
  },

  cartModal: async ({ page }, use) => {
    await use(new CartModal(page));
  },

  helpers: async ({ page }, use) => {
    await use(new Helpers(page));
  },
});

export default test;
export const { expect } = test;
