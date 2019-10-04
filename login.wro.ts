import { by, browser, element, protractor } from "protractor";
import 'jasmine';
describe('Incorrect log in', function(){
  const EC = protractor.ExpectedConditions;
  beforeEach(function() {
    browser.get('http://192.168.171.191:4200/#/login');
  });   
  var userName = element(by.xpath("//input[@id='Username']"));
  var passWord = element(by.xpath("//input[@id='Password']"));
  var buttonText = element(by.xpath("//button[@id='logIn']"));
  it('should display an error message to the user if they provided incorrect credentials and stay at the log in page', () => {
    userName.sendKeys('tester');
    passWord.sendKeys('12345');
    browser.wait(EC.visibilityOf(element(by.xpath("//button[@id='logIn']"))));
    var manageTets = element(by.xpath("//span[@class='text-left']"));
    expect(buttonText.getText()).toEqual('Login');
  })
}); 