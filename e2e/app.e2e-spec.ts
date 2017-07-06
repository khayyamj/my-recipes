import { MyRecipesPage } from './app.po';

describe('my-recipes App', () => {
  let page: MyRecipesPage;

  beforeEach(() => {
    page = new MyRecipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
