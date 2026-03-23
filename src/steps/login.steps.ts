import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { CustomWorld } from '../core/fixtures/world';
import { ENV } from '../core/config/env';

let loginPage: LoginPage;
let dashboardPage: DashboardPage;

Given('el usuario navega a la página de login', async function (this: CustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.open();
  await loginPage.validateLoginPage();
});

When('ingresa credenciales válidas', async function (this: CustomWorld) {
  await loginPage.login(ENV.USER, ENV.PASSWORD);
});

Then('debería ver la página de productos', async function (this: CustomWorld) {
  dashboardPage = new DashboardPage(this.page);
  await dashboardPage.validateHome();
});
