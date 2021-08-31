import {$, browser, ElementFinder, element, by, $$, WebElement} from 'protractor'
import {ElementExist} from '../helper/elementExist'

let elementExist = new ElementExist()

export class ButtonClick {
    clickMeFirst : ElementFinder = $("#button1")
    clickMeSecond : ElementFinder = $("#button2")
    clickMeThird : ElementFinder = $("#button3")
    popUpMessageFirst : ElementFinder = $("div#myModalClick .modal-dialog.modal-sm .modal-content .modal-body")
    popUpMessageSecond : ElementFinder = $("div#myModalJSClick .modal-dialog.modal-md .modal-content .modal-body")
    popUpMessageThird : ElementFinder = $("div#myModalMoveClick .modal-dialog.modal-sm .modal-content .modal-body p")
    buttonCloseModal : ElementFinder = element(by.buttonText("Close"))
    
    getDOMElements(data: ElementFinder) : any {
        let exist : Boolean = elementExist.checkTheElement(data)
        if (exist) return data
    }

    async getButtonClick(each: Number) {
        let popUpData
        if(each === 1){
            popUpData = this.getDOMElements(this.clickMeFirst)
            await popUpData.click()
            await browser.sleep(500)
            return this.popUpMessageFirst.getText()
        }
        else if(each === 2){
            popUpData = this.getDOMElements(this.clickMeSecond)
            await popUpData.click()
            await browser.sleep(500)
            return this.popUpMessageSecond.getText()
        }
        else if(each === 3){
            popUpData = this.getDOMElements(this.clickMeThird)
            await popUpData.click()
            await browser.sleep(500)
            return this.popUpMessageThird.getText()
        }
    }

    getCloseButton() : ElementFinder {
        let closeButtonData = this.getDOMElements(this.buttonCloseModal)
        return closeButtonData
    }
}