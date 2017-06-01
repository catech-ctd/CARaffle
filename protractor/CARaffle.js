exports.config = {
  seleniumAddress: 'http://ondemand.saucelabs.com:80',
  baseUrl: 'http://Pre-Production.8bjja9kb5t.us-east-2.elasticbeanstalk.com ',
  specs: ['spec.js'],
  onPrepare: function(){
    browser.driver.get('http://Pre-Production.8bjja9kb5t.us-east-2.elasticbeanstalk.com/');
    element(by.linkText('About')).click();
    element(by.linkText('Home')).click();
    element(by.css('[name="Name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('Submit')).click();
  }
}
