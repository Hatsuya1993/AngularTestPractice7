import { $$, browser } from "protractor";

export class ToDoList {
    listOfItems : any = $$("body #container ul li")

    async slashAllList(num: Number) {
            this.listOfItems.get(num).click()
            await browser.sleep(500)
    }
}