import { by, browser, element, protractor } from "protractor";
import 'jasmine';
import {logInPage} from './login.po';
import {manageTests} from './mana.po'; 
describe('Log in page', function(){
  let page: logInPage;
  const EC = protractor.ExpectedConditions;
  beforeEach(function() {
    page = new logInPage;
    browser.get('http://192.168.171.191:4200/#/login');
  });   
  it('should redirect user to log in page if they provided incorrect credentials', () => {
    page.username.sendKeys('tester');
    page.password.sendKeys('12345');
    page.loginButton.click();
    browser.wait(EC.visibilityOf(page.loginButton));
    expect(page.loginButton.getText()).toEqual('Login');
  })
}); 