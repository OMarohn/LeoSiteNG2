import { RebelAppPage } from './app.po';

describe('rebel-app App', function() {
  let page: RebelAppPage;

  beforeEach(() => {
    page = new RebelAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
