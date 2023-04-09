import { Page } from 'playwright';

const selectors = {
  cartModal: '#modals [data-testid="cartModal"]',
  checkoutButton: '#modals [data-testid="modalPrimaryButton"]',
  subtotalValue: '#modals [data-testid="subtotalValue"]',
  totalValue: '#modals [data-testid="totalValue"]',
};

export default class CartModal {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isOpened(): Promise<boolean> {
    try {
      await this.page.waitForSelector(selectors.cartModal, { timeout: 2000 });
      return true;
    } catch (error) {
      return false;
    }
  }

  async getSubtotalValue(): Promise<string | null> {
    return this.page.textContent(selectors.subtotalValue);
  }

  async getTotalValue(): Promise<string | null> {
    return this.page.textContent(selectors.totalValue);
  }
}
