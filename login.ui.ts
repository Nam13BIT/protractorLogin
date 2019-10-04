import { by, browser, element } from "protractor";
import 'jasmine';
describe('UI', function(){
    beforeEach(function() {
        browser.get('http://192.168.171.191:4200/#/login');
      });         
          var titleText = element(by.xpath("//span[@class='align-middle']"));
          it('should have correct titles text', () => {
            expect(titleText.getText()).toEqual(' Login');
              });
});
describe('UI', function(){
    beforeEach(function() {
        browser.get('http://192.168.171.191:4200/#/login');
      });
    var buttonText = element(by.xpath("//button[@id='logIn']"));
    it('should have correct button text', () =>{
        expect(buttonText.getText()).toEqual('Login');
      });
});