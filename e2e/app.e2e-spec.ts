import { Ng2directivesPage } from './app.po';

describe('ng2directives App', function() {
  let page: Ng2directivesPage;

  beforeEach(() => {
    page = new Ng2directivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
