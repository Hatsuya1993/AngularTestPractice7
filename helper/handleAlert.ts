import { browser } from "protractor";

export class HandleAlert {
    async getAlertText() {
        return await browser.switchTo().alert().getText().then(data => data
        )
    }
}