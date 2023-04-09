import { Page } from 'playwright';
import { Helpers } from 'utils';

const selectors = {
  banner: '.osano-cm-window [role="dialog"]',
};

export default class PolicyBanner {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async hide(): Promise<void> {
    const helpers = new Helpers(this.page);
    await helpers.hideElement(selectors.banner);
  }
}
