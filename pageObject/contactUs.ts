import {$, browser, ElementFinder, element, by, $$, WebElement} from 'protractor'
import {ElementExist} from '../helper/elementExist'

let elementExist = new ElementExist()

export class ContactUs {
    heading : ElementFinder = $(".section_header")
    firstName : ElementFinder = $("input[name='first_name']")
    lastName : ElementFinder = $("input[name='last_name']")
    email : ElementFinder = $("input[name='email']")
    comment : ElementFinder = $("textarea[name='message']")
    resetButton : ElementFinder = $("input[value='RESET']")
    submitButton : ElementFinder = $("input[value='SUBMIT']")

    getDOMElements(data: ElementFinder) : any {
        let exist : Boolean = elementExist.checkTheElement(data)
        if (exist) return data
    }
}