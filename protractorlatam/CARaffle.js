exports.config = {
  seleniumAddress: 'http://ondemand.saucelabs.com:80',
  baseUrl: 'http://latam-Preprod.xxjjcd5dt9.us-east-2.elasticbeanstalk.com/',
  specs: ['spec.js'],
  onPrepare: function(){
    browser.driver.get('http://latam-Preprod.xxjjcd5dt9.us-east-2.elasticbeanstalk.com/');
    element(by.linkText('About')).click();
    element(by.linkText('Home')).click();
    element(by.css('[name="Name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('Enter Raffle')).click();
  }
}
