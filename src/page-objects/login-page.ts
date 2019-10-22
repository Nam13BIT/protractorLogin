import { element, by, browser} from "protractor";
// import a from '../testcases/TC_LI001'
import 'jasmine';
export default class logInPage {
    get title (){
        return element(by.xpath("//span[@class='align-middle']"));
    };
    get loginButton (){
        return element(by.xpath("//button[@id='logIn']"));
    };
    get username (){
        return element(by.xpath("//input[@id='Username']"));
    };
    get password (){
        return element(by.xpath("//input[@id='Password']"));
    };
}