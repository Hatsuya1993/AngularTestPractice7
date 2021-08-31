import { browser } from "protractor";
import { HomePage } from "../pageObject/homePage"
import {FillInDataClass, } from "../helper/fillInData"
import {HandleAlert} from "../helper/handleAlert"


describe('HomePage', async () => {
    beforeEach(async()=>{
        browser.waitForAngularEnabled(false);
        let homePage = new HomePage()
        await homePage.website
    })
    afterEach(async () => {
        browser.close()
    })
    it('Check if the url is correct', async()=>{
        expect(browser.getCurrentUrl()).toContain('webdriveruniversity')
    })
    it('Check if the title is correct', async()=>{
        expect(browser.getTitle()).toContain("WebDriverUniversity")
    })
    it('Click on contact us link', async()=>{
        let homePage = new HomePage()
        await homePage.getRowInfo("CONTACT US")
        await homePage.getWindowTab(1)
        expect(browser.getCurrentUrl()).toContain("Contact-Us")
    })
    it('Error Page is present', async () => {
        let homePage = new HomePage()
        let contactUs = await homePage.getRowInfo("CONTACT US")
        await homePage.getWindowTab(1)
        let submitButton = await contactUs?.getDOMElements(contactUs.submitButton)
        await submitButton.click()
        expect(await browser.getCurrentUrl()).toContain("contact_us")
    })
    it('Invalid email address', async () => {
        let fillInData = new FillInDataClass()
        await fillInData.fillInDataFunc("testName","testLastname","testEmail","testComment","submit", "CONTACT US")
        expect(await browser.getCurrentUrl()).toContain("contact_us")
    })
    it('Valid details', async () => {
        let fillInData = new FillInDataClass()
        await fillInData.fillInDataFunc("testName","testLastname","testEmail@test.com","testComment","submit", "CONTACT US")
        expect(await browser.getCurrentUrl()).toContain("contact-form-thank-you")
    })
    it('Check the functionality of the reset button', async () => {
        let fillInData = new FillInDataClass()
        let returnData = await fillInData.fillInDataFunc("testName","testLastname","testEmail@test.com","testComment","reset", "CONTACT US")
        expect(await returnData["firstName"]).toBe("")
        expect(await returnData["lastName"]).toBe("")
        expect(await returnData["email"]).toBe("")
        expect(await returnData["comment"]).toBe("")
    })

    it('Click on login portal link', async () => {
        let homePage = new HomePage()
        await homePage.getRowInfo("LOGIN PORTAL")
        await homePage.getWindowTab(1)
        expect(browser.getCurrentUrl()).toContain("Login-Portal")
    })
    it('Check the functionality of the login page when login invalid', async () => {
        let fillInData = new FillInDataClass()
        let handleAlert = new HandleAlert()
        await fillInData.loginPageFillIn("", "")
        expect(await handleAlert.getAlertText()).toBe("validation failed")
    })

    it('Check the functionality of the button click page for webelement click', async () => {
        let homePage = new HomePage()
        let buttonInfo = await homePage.getRowInfo("BUTTON CLICKS")
        await homePage.getWindowTab(1)
        expect(await buttonInfo.getButtonClick(1)).toBe("Well done for successfully using the click() method!")
    })

    it('Check the functionality of the button click page for javascript click', async () => {
        let homePage = new HomePage()
        let buttonInfo = await homePage.getRowInfo("BUTTON CLICKS")
        await homePage.getWindowTab(1)
        expect(await buttonInfo.getButtonClick(2)).toBe("We can use JavaScript code if all else fails! Remember always try to use the WebDriver Library method(s) first such as WebElement.click(). (The Selenium development team have spent allot of time developing WebDriver functions etc).")
    })

    it('Check the functionality of the button click page for action move and click', async () => {
        let homePage = new HomePage()
        let buttonInfo = await homePage.getRowInfo("BUTTON CLICKS")
        await homePage.getWindowTab(1)
        expect(await buttonInfo.getButtonClick(3)).toBe("Advanced user interactions (API) has been developed to enable you to perform more complex interactions such as:")
    })

    it('Check the functionality of the tol do list', async () => {
        let homePage = new HomePage()
        let toDoListInfo = await homePage.getRowInfo("TO DO LIST")
        await homePage.getWindowTab(1)
        expect(browser.getCurrentUrl()).toContain("To-Do-List")
    })

    it('Check the slash functionality works', async () => {
        let homePage = new HomePage()
        let toDoListInfo = await homePage.getRowInfo("TO DO LIST")
        await homePage.getWindowTab(1)
        let key = 0
        await toDoListInfo.slashAllList(key)
        expect(toDoListInfo.listOfItems.get(key).getAttribute('class')).toContain("completed")
    })

    it('Check the functionality for the page object model site', async () => {
        let homePage = new HomePage()
        let pageObject = await homePage.getRowInfo("PAGE OBJECT MODEL")
        await homePage.getWindowTab(1)
        expect(browser.getCurrentUrl()).toContain("Page-Object-Model")
    })

    it('Check the functionality accordion and text affectts', async () => {
        let homePage = new HomePage()
        let pageObject = await homePage.getRowInfo("ACCORDION & TEXT AFFECTS (APPEAR & DISAPPEAR)")
        await homePage.getWindowTab(1)
        expect(browser.getCurrentUrl()).toContain("Accordion")
    })

    it('Check the functionality when each testing is clicked with what is displayed', async () => {
        let homePage = new HomePage()
        let accordian = await homePage.getRowInfo("ACCORDION & TEXT AFFECTS (APPEAR & DISAPPEAR)")
        await homePage.getWindowTab(1)
        await expect(await accordian.checkManualTesting()).toBeTruthy()
    })

    it('Check if the page is displayed for the dropdown, checkboxes & radio buttons', async () => {
        let homePage = new HomePage()
        let dropCheckRadio = await homePage.getRowInfo("DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)")
        await homePage.getWindowTab(1)
        expect(await browser.getCurrentUrl()).toContain("Dropdown-Checkboxes-RadioButtons")
    })

    it('Check the functionality for the dropdown menu', async () => {
        let homePage = new HomePage()
        let dropCheckRadio = await homePage.getRowInfo("DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)")
        await homePage.getWindowTab(1)
        await dropCheckRadio.selectFunction("first", "Python")
        expect(await dropCheckRadio.firstDropDownEach.getAttribute('value')).toBe("python")
    })

    it('Check the functionality for the ajax loader', async () => {
        let homePage = new HomePage()
        let buttonAjax = await homePage.getRowInfo("AJAX LOADER")
        await homePage.getWindowTab(1)
        expect(await browser.getCurrentUrl()).toContain("Ajax-Loader")
    })

    it('Check the functionality for the ajax loader when the button is pressed', async () => {
        let homePage = new HomePage()
        let buttonAjax = await homePage.getRowInfo("AJAX LOADER")
        await homePage.getWindowTab(1)
        await buttonAjax.clickButton().click()
        await browser.sleep(1000)
        expect(await buttonAjax.modalPopUpBody.getText()).toBe("The waiting game can be a tricky one; this exercise will hopefully improve your understandings of the various types of waits.")
    })

    it('Check the functionality of the actions page', async () => {
        let homePage = new HomePage()
        let actionPage = await homePage.getRowInfo("ACTIONS")
        await homePage.getWindowTab(1)
        expect(await browser.getCurrentUrl()).toContain("Actions")
    })

    //Problem with the alert
    it('Check the functionality of the actions page for the hover over me first', async () => {
        let homePage = new HomePage()
        let actionPage = await homePage.getRowInfo("ACTIONS")
        await homePage.getWindowTab(1)
        let final : String = await actionPage.hoverOnABox('Hover Over Me First!')
        expect(final).toBe('Well done you clicked on the link!')
        
    })

})
