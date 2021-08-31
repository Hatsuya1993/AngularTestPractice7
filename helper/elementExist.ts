import { browser, ElementFinder, protractor, WebElement } from "protractor";

let EC = protractor.ExpectedConditions;

export class ElementExist{
    checkTheElement(data: ElementFinder) {
        browser.wait(EC.presenceOf(data), 3000)
        return true
    }
    checkTheElementDisplayed(data: ElementFinder) {
        browser.wait(EC.visibilityOf(data), 8000)
        return true
    }
}