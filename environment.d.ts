declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BROWSER: 'chromium' | 'firefox' | 'webkit';
      MAX_WORKERS: string;
      RETRIES: string;
    }
  }
}
export {};
