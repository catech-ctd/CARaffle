describe('CA Raffle UI Test', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://Pre-Production.8bjja9kb5t.us-east-2.elasticbeanstalk.com/index.php');
    element(by.css('[name="Name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('Enter Raffle')).click();
    });
});
