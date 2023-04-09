import { Page } from 'playwright';
import { Helpers } from 'utils';

const selectors = {
  button: '#solvvy-widget-iframe',
};

export default class ChatWidget {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async hide(): Promise<void> {
    const helpers = new Helpers(this.page);
    await helpers.hideElement(selectors.button);
  }
}
