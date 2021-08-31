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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const homePage_1 = require("../pageObject/homePage");
const fillInData_1 = require("../helper/fillInData");
const handleAlert_1 = require("../helper/handleAlert");
describe('HomePage', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let homePage = new homePage_1.HomePage();
        yield homePage.website;
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.close();
    }));
    it('Check if the url is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(protractor_1.browser.getCurrentUrl()).toContain('webdriveruniversity');
    }));
    it('Check if the title is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(protractor_1.browser.getTitle()).toContain("WebDriverUniversity");
    }));
    it('Click on contact us link', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        yield homePage.getRowInfo("CONTACT US");
        yield homePage.getWindowTab(1);
        expect(protractor_1.browser.getCurrentUrl()).toContain("Contact-Us");
    }));
    it('Error Page is present', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let contactUs = yield homePage.getRowInfo("CONTACT US");
        yield homePage.getWindowTab(1);
        let submitButton = yield (contactUs === null || contactUs === void 0 ? void 0 : contactUs.getDOMElements(contactUs.submitButton));
        yield submitButton.click();
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("contact_us");
    }));
    it('Invalid email address', () => __awaiter(void 0, void 0, void 0, function* () {
        let fillInData = new fillInData_1.FillInDataClass();
        yield fillInData.fillInDataFunc("testName", "testLastname", "testEmail", "testComment", "submit", "CONTACT US");
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("contact_us");
    }));
    it('Valid details', () => __awaiter(void 0, void 0, void 0, function* () {
        let fillInData = new fillInData_1.FillInDataClass();
        yield fillInData.fillInDataFunc("testName", "testLastname", "testEmail@test.com", "testComment", "submit", "CONTACT US");
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("contact-form-thank-you");
    }));
    it('Check the functionality of the reset button', () => __awaiter(void 0, void 0, void 0, function* () {
        let fillInData = new fillInData_1.FillInDataClass();
        let returnData = yield fillInData.fillInDataFunc("testName", "testLastname", "testEmail@test.com", "testComment", "reset", "CONTACT US");
        expect(yield returnData["firstName"]).toBe("");
        expect(yield returnData["lastName"]).toBe("");
        expect(yield returnData["email"]).toBe("");
        expect(yield returnData["comment"]).toBe("");
    }));
    it('Click on login portal link', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        yield homePage.getRowInfo("LOGIN PORTAL");
        yield homePage.getWindowTab(1);
        expect(protractor_1.browser.getCurrentUrl()).toContain("Login-Portal");
    }));
    it('Check the functionality of the login page when login invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        let fillInData = new fillInData_1.FillInDataClass();
        let handleAlert = new handleAlert_1.HandleAlert();
        yield fillInData.loginPageFillIn("", "");
        expect(yield handleAlert.getAlertText()).toBe("validation failed");
    }));
    it('Check the functionality of the button click page for webelement click', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let buttonInfo = yield homePage.getRowInfo("BUTTON CLICKS");
        yield homePage.getWindowTab(1);
        expect(yield buttonInfo.getButtonClick(1)).toBe("Well done for successfully using the click() method!");
    }));
    it('Check the functionality of the button click page for javascript click', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let buttonInfo = yield homePage.getRowInfo("BUTTON CLICKS");
        yield homePage.getWindowTab(1);
        expect(yield buttonInfo.getButtonClick(2)).toBe("We can use JavaScript code if all else fails! Remember always try to use the WebDriver Library method(s) first such as WebElement.click(). (The Selenium development team have spent allot of time developing WebDriver functions etc).");
    }));
    it('Check the functionality of the button click page for action move and click', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let buttonInfo = yield homePage.getRowInfo("BUTTON CLICKS");
        yield homePage.getWindowTab(1);
        expect(yield buttonInfo.getButtonClick(3)).toBe("Advanced user interactions (API) has been developed to enable you to perform more complex interactions such as:");
    }));
    it('Check the functionality of the tol do list', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let toDoListInfo = yield homePage.getRowInfo("TO DO LIST");
        yield homePage.getWindowTab(1);
        expect(protractor_1.browser.getCurrentUrl()).toContain("To-Do-List");
    }));
    it('Check the slash functionality works', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let toDoListInfo = yield homePage.getRowInfo("TO DO LIST");
        yield homePage.getWindowTab(1);
        let key = 0;
        yield toDoListInfo.slashAllList(key);
        expect(toDoListInfo.listOfItems.get(key).getAttribute('class')).toContain("completed");
    }));
    it('Check the functionality for the page object model site', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let pageObject = yield homePage.getRowInfo("PAGE OBJECT MODEL");
        yield homePage.getWindowTab(1);
        expect(protractor_1.browser.getCurrentUrl()).toContain("Page-Object-Model");
    }));
    it('Check the functionality accordion and text affectts', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let pageObject = yield homePage.getRowInfo("ACCORDION & TEXT AFFECTS (APPEAR & DISAPPEAR)");
        yield homePage.getWindowTab(1);
        expect(protractor_1.browser.getCurrentUrl()).toContain("Accordion");
    }));
    it('Check the functionality when each testing is clicked with what is displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let accordian = yield homePage.getRowInfo("ACCORDION & TEXT AFFECTS (APPEAR & DISAPPEAR)");
        yield homePage.getWindowTab(1);
        yield expect(yield accordian.checkManualTesting()).toBeTruthy();
    }));
    it('Check if the page is displayed for the dropdown, checkboxes & radio buttons', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let dropCheckRadio = yield homePage.getRowInfo("DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)");
        yield homePage.getWindowTab(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("Dropdown-Checkboxes-RadioButtons");
    }));
    it('Check the functionality for the dropdown menu', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let dropCheckRadio = yield homePage.getRowInfo("DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)");
        yield homePage.getWindowTab(1);
        yield dropCheckRadio.selectFunction("first", "Python");
        expect(yield dropCheckRadio.firstDropDownEach.getAttribute('value')).toBe("python");
    }));
    it('Check the functionality for the ajax loader', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let buttonAjax = yield homePage.getRowInfo("AJAX LOADER");
        yield homePage.getWindowTab(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("Ajax-Loader");
    }));
    it('Check the functionality for the ajax loader when the button is pressed', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let buttonAjax = yield homePage.getRowInfo("AJAX LOADER");
        yield homePage.getWindowTab(1);
        yield buttonAjax.clickButton().click();
        yield protractor_1.browser.sleep(1000);
        expect(yield buttonAjax.modalPopUpBody.getText()).toBe("The waiting game can be a tricky one; this exercise will hopefully improve your understandings of the various types of waits.");
    }));
    it('Check the functionality of the actions page', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let actionPage = yield homePage.getRowInfo("ACTIONS");
        yield homePage.getWindowTab(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("Actions");
    }));
    //Problem with the alert
    it('Check the functionality of the actions page for the hover over me first', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new homePage_1.HomePage();
        let actionPage = yield homePage.getRowInfo("ACTIONS");
        yield homePage.getWindowTab(1);
        let final = yield actionPage.hoverOnABox('Hover Over Me First!');
        expect(final).toBe('Well done you clicked on the link!');
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0U3BlYy9ob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQyxxREFBaUQ7QUFDakQscURBQXNEO0FBQ3RELHVEQUFpRDtBQUdqRCxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQVMsRUFBRTtJQUM1QixVQUFVLENBQUMsR0FBTyxFQUFFO1FBQ2hCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFDN0IsTUFBTSxRQUFRLENBQUMsT0FBTyxDQUFBO0lBQzFCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixTQUFTLENBQUMsR0FBUyxFQUFFO1FBQ2pCLG9CQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDbkIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxHQUFPLEVBQUU7UUFDdkMsTUFBTSxDQUFDLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUNwRSxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLCtCQUErQixFQUFFLEdBQU8sRUFBRTtRQUN6QyxNQUFNLENBQUMsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQy9ELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsMEJBQTBCLEVBQUUsR0FBTyxFQUFFO1FBQ3BDLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzdCLE1BQU0sUUFBUSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN2QyxNQUFNLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxD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