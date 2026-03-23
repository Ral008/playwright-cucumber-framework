import { config } from 'dotenv';

const env = process.env.NODE_ENV || 'dev';
config({ path: `config/env.${env}` });

export const ENV = {
  BASE_URL: process.env.BASE_URL!,
  USER: process.env.STANDARD_USER!,
  PASSWORD: process.env.PASSWORD!,
  browser: process.env.BROWSER || 'chromium', // chromium | firefox | webkit
  headless: process.env.HEADLESS !== 'false', // true | false
};
