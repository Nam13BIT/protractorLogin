import { by, browser, element, protractor } from "protractor";
import 'jasmine';
import logInPage from '../page-objects/login-page';
import { async } from "q";
describe('Log in page', async function(){
  let page: logInPage;
  const EC = protractor.ExpectedConditions;
  beforeEach( async function() {
    page = new logInPage;
    await browser.get('http://192.168.171.191:4200/#/login');
  });   
  it('should redirect user to log in page if they provided incorrect credentials', async() => {
    await page.username.sendKeys('tester');
    await page.password.sendKeys('12345');
    await page.loginButton.click();
    await browser.wait(EC.visibilityOf(page.loginButton));
    await expect(page.loginButton.await.getText()).toEqual('Login');
  })
}); 