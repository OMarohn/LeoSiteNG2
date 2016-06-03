export class RebelAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rebel-app-app h1')).getText();
  }
}
