import { element, by, browser} from "protractor";

export class logInPage {
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