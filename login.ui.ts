import { by, browser, element } from "protractor";
import 'jasmine';
import {logInPage} from './login.po';
describe('Log in page UI', function(){
  let page : logInPage;
    beforeEach(function() {
       page = new logInPage;
        browser.get('http://192.168.171.191:4200/#/login');
      });                  
          it('should have correct titles text', () => {
            expect(page.title.getText()).toEqual(' Login');
              });
});
describe('Log in page UI', function(){
  let page : logInPage;
    beforeEach(function() {
      page = new logInPage;
        browser.get('http://192.168.171.191:4200/#/login');
      });    
    it('should have correct button text', () =>{
        expect(page.loginButton.getText()).toEqual('Login');
      });
});