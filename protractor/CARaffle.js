exports.config = {
  seleniumAddress: 'http://ondemand.saucelabs.com:80',
  baseUrl: 'http://swat-preprod.cdbu.io/',
  specs: ['spec.js'],
  onPrepare: function(){
    browser.driver.get('http://swat-preprod.cdbu.io/');
    element(by.linkText('About')).click();
    element(by.linkText('Home')).click();
    element(by.css('[name="Name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('Enter Raffle')).click();
  }
}
