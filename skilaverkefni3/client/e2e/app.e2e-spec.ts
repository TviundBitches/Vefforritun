import { Skilaverkefni3Page } from './app.po';

describe('skilaverkefni3 App', function() {
  let page: Skilaverkefni3Page;

  beforeEach(() => {
    page = new Skilaverkefni3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
