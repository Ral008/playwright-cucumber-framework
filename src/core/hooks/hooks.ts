import { Before, After, AfterStep } from '@cucumber/cucumber';
import { CustomWorld } from '../fixtures/world';

Before(async function (this: CustomWorld, scenario) {
  try {
      console.log(`🚀 INICIANDO: ${scenario.pickle.name}`);

      await this.init();

      // console.log('✅ PAGE EN BEFORE:', this.page);
    } catch (error) {
      console.error('💣 ERROR EN BEFORE:', error);
      throw error; // importante
    }
});

/*
AfterStep(async function (this: CustomWorld, step) {
  if (this.page) {
    const screenshot = await this.page.screenshot();
    await this.attach(screenshot, 'image/png');
  }
});
*/

After(async function (this: CustomWorld, scenario) {
  try {
    if (scenario.result?.status === 'FAILED') {
        if (this.page) {
            // const safeName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_');
            //const screenshot = await this.page.screenshot({path: `reports/screenshots/${safeName}.png`});
            const screenshot = await this.page.screenshot();
            await this.attach(screenshot, 'image/png');
            await this.attach(`URL: ${this.page.url()}`, 'text/plain');
            await this.attach(`Escenario: ${scenario.pickle.name}`, 'text/plain');
            await this.attach(`Estado: ${scenario.result?.status}`, 'text/plain');
            console.log(`❌ FAILED: ${scenario.pickle.name}`);
            const video = this.page.video();
            if (video) {
              const path = await video.path();
              await this.attach(`Video: ${path}`, 'text/plain');
            }
        }
    } else {
        console.log(`✅ PASSED: ${scenario.pickle.name}`);
        // 👇 opcional: screenshot también en PASSED (modo debug)
        const screenshot = await this.page.screenshot();
        await this.attach(screenshot, 'image/png');
    }
  } catch (error) {
    console.error('Error en After hook:', error);
  } finally {
    if (this.browser) {
        await this.close();
    }
  }
});
