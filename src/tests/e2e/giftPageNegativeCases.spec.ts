import test, { expect } from 'fixtures';
import { giftFormData } from 'consts';

test.describe('Gift Page - Negative Test Cases', () => {
  test('Check basic form validation', async ({ giftPage, cartModal }) => {
    await giftPage.clickConfirmButton();
    expect(await giftPage.isRecipientNameErrorDisplayed()).toBe(true);
    expect(await giftPage.isRecipientEmailErrorDisplayed()).toBe(true);
    expect(await cartModal.isOpened()).toBe(false);
  });


  test('Check email validation', async ({ giftPage, cartModal }) => {
    await giftPage.setRecipientName(giftFormData.recipientName);
    await giftPage.setRecipientEmail('invalid.Email@com');
    await giftPage.clickConfirmButton();
    expect(await giftPage.isRecipientEmailErrorDisplayed()).toBe(true);
    expect(await cartModal.isOpened()).toBe(false);
  });

  test('Check validation with current and past date', async ({ helpers, giftPage, cartModal }) => {
    const currentDate = await helpers.getCurrentDate();

    await giftPage.setRecipientName(giftFormData.recipientName);
    await giftPage.setRecipientEmail(giftFormData.recipientEmail);
    await giftPage.setWhenToSend(giftFormData.whenToSend.later);
    await giftPage.setDate(currentDate.month, currentDate.day, currentDate.year);
    await giftPage.clickConfirmButton();

    expect(await giftPage.isDateErrorDisplayed()).toBe(true);
    expect(await cartModal.isOpened()).toBe(false);

    // TODO: This will fail on 1st day of the month. Add logic to handle this edge case
    await giftPage.setDate(currentDate.month, `${Number(currentDate.day) - 1}`, currentDate.year);
    await giftPage.clickConfirmButton();

    expect(await giftPage.isDateErrorDisplayed()).toBe(true);
    expect(await cartModal.isOpened()).toBe(false);
  });

});
