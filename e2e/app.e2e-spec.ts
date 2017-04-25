import { TicketsManagerPage } from './app.po';

describe('tickets-manager App', function() {
  let page: TicketsManagerPage;

  beforeEach(() => {
    page = new TicketsManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
