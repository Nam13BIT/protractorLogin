"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
require("jasmine");
class logInPage {
    get title() {
        return protractor_1.element(protractor_1.by.xpath("//span[@class='align-middle']"));
    }
    ;
    get loginButton() {
        return protractor_1.element(protractor_1.by.xpath("//button[@id='logIn']"));
    }
    ;
    get username() {
        return protractor_1.element(protractor_1.by.xpath("//input[@id='Username']"));
    }
    ;
    get password() {
        return protractor_1.element(protractor_1.by.xpath("//input[@id='Password']"));
    }
    ;
}
exports.default = logInPage;
