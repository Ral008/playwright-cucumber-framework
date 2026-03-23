import { Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/base.page';
import { ENV } from '../core/config/env';

export class LoginPage extends BasePage {
  private username: Locator;
  private password: Locator;
  private loginBtn: Locator;
  private title: Locator;

  constructor(page: Page) {
    super(page);

    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
    this.title = page.locator('.login_logo');
  }

  async open() {
    await this.navigate(ENV.BASE_URL);
  }

  async validateLoginPage() {
    await this.expectText(this.title, 'Swag Labs');
  }

  async login(username: string, password: string) {
    await this.fill(this.username, username);
    await this.fill(this.password, password);
    await this.click(this.loginBtn);
  }
}
