import { $$, browser, ElementArrayFinder } from "protractor";
import { HandleAlert } from "../helper/handleAlert";

export class ActionPage {

    hoverOptions: ElementArrayFinder = $$('#div-hover div[style*=float]')

    async hoverOnABox(whichOne: String) {
        let alertString
        let handleAlert = new HandleAlert()
        await this.hoverOptions.count().then(async data => {
            for(let i = 0; i < data; i++){
                await this.hoverOptions.get(i).getText().then(async dataString => {
                    if(whichOne === 'Hover Over Me First!' && whichOne === dataString){
                        await browser.actions().mouseMove(this.hoverOptions.get(i)).perform()
                        await browser.actions().mouseMove(this.hoverOptions.get(i).$('a')).click().perform()
                        // alertString = handleAlert.getAlertText().then(data => console.log(data, 1234)
                        // )
                        // await handleAlert.acceptAlert()
                        await browser.switchTo().alert().getText().then(data => console.log(data)
                        )
                    }
                })
                break
            }            
        })
    }

}