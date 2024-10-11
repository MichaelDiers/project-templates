import { By, WebDriver } from 'selenium-webdriver';
import { expect } from 'chai';
import { initDriver } from './selenium';
import { browsers, urls } from './config';

browsers.forEach((browser) => {
  describe(`tests for browser: ${browser}`, function tests() {
    this.timeout(10000);
    let driver: WebDriver;

    beforeEach(async () => {
      driver = await initDriver(browser);
    });

    afterEach(async () => {
      if (driver) {
        await driver.quit();
      }
    });

    it('ensure sign in page loads by default', async () => {
      await driver.get(urls.local);

      const element = await driver.findElement(By.css('main h1'));
      expect(element).not.be.null;

      const text = await element!.getText();
      expect(text).not.be.null;
      expect(text).to.equal('Hello World!');
    });
  });
});
