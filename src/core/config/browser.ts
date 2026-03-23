import { Browser, chromium, firefox, webkit } from '@playwright/test';
import { ENV } from '../config/env';

let sharedBrowser: Browser;

export const getBrowser = async (): Promise<Browser> => {
  if (!sharedBrowser) {
    const browserType = getBrowserType();
    sharedBrowser = await browserType.launch({ headless: ENV.headless });
  }
  return sharedBrowser;
};

const getBrowserType = () => {
  switch (ENV.browser) {
    case 'firefox':
      return firefox;
    case 'webkit':
      return webkit;
    case 'chromium':
    default:
      return chromium;
  }
};
