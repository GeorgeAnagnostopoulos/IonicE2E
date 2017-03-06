import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  getHomeTab(): ElementFinder {
    return element(by.css('[aria-selected=true] .tab-button-text'));
  }

  getContactTab(): ElementFinder {
    return element(by.css('[aria-controls=tabpanel-t0-2]'));
  }

  getAboutTab(): ElementFinder {

    return element(by.css('[aria-controls=tabpanel-t0-1]'));
  }

  getTabs(): ElementArrayFinder {
    return element.all(by.css('ion-tab'));
  }

}
