import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { getBrowser } from '../config/browser';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  async init() {
    try {
      // this.browser = await chromium.launch({ headless: false });
      this.browser = await getBrowser(); // reutiliza browser
      // this.context = await this.browser.newContext();
      this.context = await this.browser.newContext({recordVideo: { dir: 'reports/videos/' }});
      this.page = await this.context.newPage();
    } catch (error) {
      console.error('❌ Error lanzando browser. ¿Instalaste Playwright?', error);
      throw error;
    }
  }

  async close() {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
