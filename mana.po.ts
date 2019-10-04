import { element, by, browser} from "protractor";

export class manageTests {
    get title (){
        return element(by.xpath("//span[@class='text-left']"));
    };
}