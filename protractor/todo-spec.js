describe('CA Raffle UI Test', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://swat-preprod.cdbu.io/');
    element(by.css('[name="Name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('Enter Raffle')).click();
    });
});
