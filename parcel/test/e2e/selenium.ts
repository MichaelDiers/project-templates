import { Builder, Browser } from 'selenium-webdriver';
// eslint-disable-next-line import/extensions
import { Options as ChromeOptions } from 'selenium-webdriver/chrome.js';
// eslint-disable-next-line import/extensions
import { Options as FirefoxOptions } from 'selenium-webdriver/firefox.js';

export async function initDriver(browser: string) {
  let builder = new Builder().forBrowser(browser);
  switch (browser) {
    case Browser.CHROME:
      builder = builder.withCapabilities(
        new ChromeOptions()
          .excludeSwitches('enable-logging')
          .addArguments('--headless'),
      );
      break;
    case Browser.FIREFOX:
      builder = builder.withCapabilities(new FirefoxOptions().addArguments('--headless'));
      break;
    default:
      break;
  }

  const driver = await builder.build();

  return driver;
}
