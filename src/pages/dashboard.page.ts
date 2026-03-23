import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
  private title: Locator;
  private products: Locator;

  constructor(page: Page) {
    super(page);

    this.title = page.locator('//div[@class="app_logo"]');
    this.products = page.locator('//span[@class="title"]');
  }

  async validateHome() {
    await this.expectText(this.title, 'Swag Labs');
    await this.expectText(this.products, 'Products');
  }
}
