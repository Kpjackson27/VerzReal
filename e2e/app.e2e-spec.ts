import { VerzPage } from './app.po';

describe('verz App', () => {
  let page: VerzPage;

  beforeEach(() => {
    page = new VerzPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
