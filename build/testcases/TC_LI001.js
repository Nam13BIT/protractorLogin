"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
require("jasmine");
const login_page_1 = __importDefault(require("../page-objects/login-page"));
describe('Log in page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let page;
        const EC = protractor_1.protractor.ExpectedConditions;
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                page = new login_page_1.default;
                yield protractor_1.browser.get('http://192.168.171.191:4200/#/login');
            });
        });
        it('should redirect user to log in page if they provided incorrect credentials', () => __awaiter(this, void 0, void 0, function* () {
            yield page.username.sendKeys('tester');
            yield page.password.sendKeys('12345');
            yield page.loginButton.click();
            yield protractor_1.browser.wait(EC.visibilityOf(page.loginButton));
            yield expect(page.loginButton.await.getText()).toEqual('Login');
        }));
    });
});
