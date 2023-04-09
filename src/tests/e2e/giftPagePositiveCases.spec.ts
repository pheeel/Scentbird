import test, { expect } from 'fixtures';
import { ScentType, SubscriptionPlanPrices, WhenToSend } from 'types';
import { giftFormData } from 'consts';

const subscriptionPlanPrice = `$${SubscriptionPlanPrices.sixMonths}.00`;

const testCases: [ScentType, WhenToSend][] = [
  [giftFormData.scentType.cologne, giftFormData.whenToSend.now],
  [giftFormData.scentType.cologne, giftFormData.whenToSend.later],
  [giftFormData.scentType.perfume, giftFormData.whenToSend.now],
  [giftFormData.scentType.perfume, giftFormData.whenToSend.later],
];

test.describe('Gift Page - Positive Test Cases', () => {
  for (const [scentType, whenToSend] of testCases) {
    test(`Proceed with ${scentType} and send ${whenToSend}`, async ({ giftPage, cartModal }) => {
      await giftPage.setScentType(scentType);
      await giftPage.setRecipientName(giftFormData.recipientName);
      await giftPage.setRecipientEmail(giftFormData.recipientEmail);
      await giftPage.setMessage(giftFormData.personalMessage);
      await giftPage.setSenderName(giftFormData.senderName);
      await giftPage.setWhenToSend(whenToSend);
      await giftPage.clickConfirmButton();

      expect(await cartModal.isOpened()).toBe(true);
      expect(await cartModal.getSubtotalValue()).toBe(subscriptionPlanPrice);
      expect(await cartModal.getTotalValue()).toBe(subscriptionPlanPrice);
    });
  }

  test('Check default state of the form', async ({ giftPage }) => {
    expect(await giftPage.isScentTypeSelected(giftFormData.scentType.cologne)).toBe(true);
    expect(await giftPage.isScentTypeSelected(giftFormData.scentType.perfume)).toBe(false);
    expect(await giftPage.isWhenToSendSelected(giftFormData.whenToSend.now)).toBe(true);
    expect(await giftPage.isWhenToSendSelected(giftFormData.whenToSend.later)).toBe(false);
  });
});
