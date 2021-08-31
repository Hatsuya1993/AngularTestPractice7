import {$, browser, ElementFinder, element, by, $$, WebElement} from 'protractor'
import {ElementExist} from '../helper/elementExist'

let elementExist = new ElementExist()

export class LoginPage {
    username : ElementFinder = $("#text")
    password : ElementFinder = $("#password")
    loginButton : ElementFinder = $("#login-button")

    getDOMElements(data: ElementFinder) : any {
        let exist : Boolean = elementExist.checkTheElement(data)
        if (exist) return data
    }
}