import { $, ElementFinder } from "protractor";
import {ElementExist} from '../helper/elementExist'


export class AjaxLoader {
    clickMeButton: ElementFinder = $("#button1 p")
    modalPopUpBody: ElementFinder = $("#myModalClick .modal-body")

    clickButton() {
        let clickNow = new ElementExist();
        let buttonClick = clickNow.checkTheElementDisplayed(this.clickMeButton)        
        if(buttonClick) return this.clickMeButton
        else throw new Error("Button doesnt exist");
    }
}