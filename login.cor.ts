import { by, browser, element, protractor } from "protractor";
import 'jasmine';
describe('Correct log in', function(){
  const EC = protractor.ExpectedConditions;
  beforeEach(function() {
    browser.get('http://192.168.171.191:4200/#/login');
  });   
  var userName = element(by.xpath("//input[@id='Username']"));
  var passWord = element(by.xpath("//input[@id='Password']"));
  it('should redirect user to manage test page if they provided correct credentials', () => {
    userName.sendKeys('tester');
    passWord.sendKeys('1234');
    browser.wait(EC.visibilityOf(element(by.xpath("//span[@class='text-left']"))));
    var manageTets = element(by.xpath("//span[@class='text-left']"));
    expect(manageTets.getText()).toEqual("Manage Tests");
  })
}); 