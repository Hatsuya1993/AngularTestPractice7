import { $, browser, ElementFinder, WebElement } from "protractor";
import {ElementExist} from "../helper/elementExist"

export class AccordianText {
    manualTesting: ElementFinder = $("#manual-testing-accordion")
    manualTestingDisplay: ElementFinder = $("#manual-testing-description")
    cucumberBDD: ElementFinder = $("#cucumber-accordion")
    cucumberBDDDisplay: ElementFinder = $("#cucumber-testing-description")
    automationTesting: ElementFinder = $("#automation-accordion")
    automationTestingDisplay: ElementFinder = $("#automation-testing-description")
    keepCliking: ElementFinder = $("#click-accordion")
    keepClickingDisplay: ElementFinder = $("#timeout")

    elementExist = new ElementExist();

    async checkManualTesting(): Promise<Boolean> {
        await this.elementExist.checkTheElement(this.manualTesting)
        await this.manualTesting.click()
        return await this.elementExist.checkTheElement(this.manualTestingDisplay)
    }
}