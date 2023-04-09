import { Page } from 'playwright';
import { ScentType, WhenToSend } from 'types';


const selectors = {
  scentCologne: '[data-testid="recipientGenderOptionMale"]',
  scentPerfume: '[data-testid="recipientGenderOptionFemale"]',
  recipientName: '[data-testid="recipientName"]',
  recipientEmail: '[data-testid="recipientEmail"]',
  recipientMessage: '[data-testid="recipientMessage"]',
  senderName: '[data-testid="senderName"]',
  sendNow: '[data-testid="sendDateOptionNow"]',
  sendLater: '[data-testid="sendDateOptionLater"]',
  confirmButton: '[data-testid="checkoutNowButton"]',
  selects: {
    day: '[data-testid="dateDay"]',
    month: '[data-testid="dateMonth"]',
    year: '[data-testid="dateYear"]',
  },
  errors: {
    recipientNameError: '[data-testid="recipientNameError"]',
    recipientEmailError: '[data-testid="recipientEmailError"]',
    dateError: '[data-testid="dateError"]',
  },
};

export default class GiftPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async setScentType(scentType: ScentType): Promise<void> {
    if (scentType === ScentType.cologne) {
      await this.page.click(selectors.scentCologne);
    } else {
      await this.page.click(selectors.scentPerfume);
    }
  }

  async setRecipientName(name: string): Promise<void> {
    await this.page.fill(selectors.recipientName, name);
  }

  async setRecipientEmail(email: string): Promise<void> {
    await this.page.fill(selectors.recipientEmail, email);
  }

  async setMessage(message: string): Promise<void> {
    await this.page.fill(selectors.recipientMessage, message);
  }

  async setSenderName(message: string): Promise<void> {
    await this.page.fill(selectors.senderName, message);
  }

  async setWhenToSend(whenToSend: WhenToSend): Promise<void> {
    if (whenToSend === WhenToSend.now) {
      await this.page.click(selectors.sendNow);
    } else {
      await this.page.click(selectors.sendLater);
    }
  }

  async clickConfirmButton(): Promise<void> {
    await this.page.click(selectors.confirmButton);
  }

  async isScentTypeSelected(scentType: ScentType): Promise<boolean> {
    if (scentType === ScentType.cologne) {
      return this.page.isChecked(selectors.scentCologne);
    } else {
      return this.page.isChecked(selectors.scentPerfume);
    }
  }

  async isWhenToSendSelected(whenToSend: WhenToSend): Promise<boolean> {
    if (whenToSend === WhenToSend.now) {
      return this.page.isChecked(selectors.sendNow);
    } else {
      return this.page.isChecked(selectors.sendLater);
    }
  }

  async isRecipientNameErrorDisplayed(): Promise<boolean> {
    return this.page.isVisible(selectors.errors.recipientNameError);
  }

  async isRecipientEmailErrorDisplayed(): Promise<boolean> {
    return this.page.isVisible(selectors.errors.recipientEmailError);
  }

  async isDateErrorDisplayed(): Promise<boolean> {
    return this.page.isVisible(selectors.errors.dateError);
  }

  async setDate(month: string, day: string, year: string): Promise<void> {
    await this.page.selectOption(selectors.selects.month, month);
    await this.page.selectOption(selectors.selects.day, day);
    await this.page.selectOption(selectors.selects.year, year);
  }
}
