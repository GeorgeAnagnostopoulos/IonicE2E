import { browser, element, by } from 'protractor';
import { AppPage } from './app.po';

describe('AppPage', () => {

  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have three tabs', () => {

    page.navigateTo();
    expect(page.getTabs().count()).toEqual(3);
  });

  it('should display the home tab by default', () => {

    page.navigateTo();
    expect(page.getHomeTab().getAttribute('innerHTML')).toContain('Home');
  });

  it('should navigate to About page with About title', () => {

    page.navigateTo();
    page.getAboutTab().click().then(() => {
      browser.driver.sleep(1000);
      expect(element(by.css('page-about ion-header ion-navbar ion-title div')).getAttribute('innerHTML')).toContain('About');
    });
  });

  it('should navigate to the contact tab and view the ionic twitter handle', () => {

    page.navigateTo();
    page.getContactTab().click().then(() => {

        browser.driver.sleep(1000);
        expect(element(by.css('ion-list ion-item ion-label')).getAttribute('innerHTML')).toContain('@ionicframework');
    });
  });

});
