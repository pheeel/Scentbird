import { Page } from 'playwright';
export default class Helpers {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async hideElement(selector: string): Promise<void> {
    const element = this.page.locator(selector).first();
    await element.evaluate((el) => {
      el.style.display = 'none';
      el.style.visibility = 'hidden';
    });
  }

  async getCurrentDate(): Promise<{ day: string, month: string, year: string }> {
    const date = new Date();
    const currentDay = date.getDate().toString();
    const currentMonth = (date.getMonth() + 1).toString();
    const currentYear = date.getFullYear().toString();

    return {
      day: currentDay,
      month: currentMonth,
      year: currentYear,
    };
  }
}
