import { config } from 'dotenv';

config();
const browser = process.env.BROWSER;
const maxWorkers = process.env.MAX_WORKERS;
const retries = process.env.RETRIES;
const viewport = {
  width: 1366,
  height: 768,
};
const localRunMode = {
  workers: Number(maxWorkers),
  retries: Number(retries),
  timeout: 20000,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
  testDir: 'src/tests',
  testMatch: ['**/src/tests/**/**.spec.ts'],
  trace: 'on-first-retry',
  video: 'on-first-retry',
  screenshot: 'only-on-failure',
  use: {
    baseURL: 'https://www.scentbird.com/gift?months=6',
    actionTimeout: 1000 * 10,
    browserName: browser,
    headless: false,
    viewport,
    locale: 'en-GB',

    ignoreHTTPSErrors: false,
    launchOptions: {
      slowMo: 100,
    },
  },
};

export default localRunMode;

