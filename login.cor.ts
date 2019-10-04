import { by, browser, element, protractor } from "protractor";
import 'jasmine';
import {logInPage} from './login.po';
import {manageTests} from './mana.po'; 
describe('Log in page', function(){
  let page: logInPage;
  let manageTests: manageTests;
  const EC = protractor.ExpectedConditions;
  beforeEach(function() {
    page = new logInPage;
    browser.get('http://192.168.171.191:4200/#/login');
  });   
  it('should redirect user to manage test page if they provided correct credentials', () => {
    const manageTests = new manageTests();
    page.username.sendKeys('tester');
    page.password.sendKeys('1234');
    page.loginButton.click();
    browser.wait(EC.visibilityOf(manageTests.title));
    expect(manageTests.title.getText()).toEqual('Manage Tests');
  })
}); 