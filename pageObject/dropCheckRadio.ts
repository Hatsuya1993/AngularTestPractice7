import { $, $$, ElementArrayFinder, ElementFinder, WebElement } from "protractor";

export class DropCheckRadio {
    firstDropDown: ElementArrayFinder = $$("#dropdowm-menu-1 option")
    secondDropDown: ElementArrayFinder = $$("#dropdowm-menu-2 option")
    thirdDropDown: ElementArrayFinder = $$("#dropdowm-menu-3 option")

    firstDropDownEach: ElementFinder = $("#dropdowm-menu-1")
    secondDropDownEach: ElementFinder = $("#dropdowm-menu-2")
    thirdDropDownEach: ElementFinder = $("#dropdowm-menu-3")

    allCheckBox : ElementArrayFinder = $$("#checkboxes label")


    async selectFunction(dropdown: String, item: String) {
        let num
        let val
        switch (dropdown) {
            case "first":                
                await this.firstDropDown.count().then(data => num = data)                
                for(let i = 0; i < num; i++){
                    val = this.firstDropDown.get(i)
                    await val.getText().then(data => {
                        if(data === item){
                            val.click()
                        }
                    })
                }
                break
            case "second":
                await this.secondDropDown.count().then(data => num = data)
                for(let i = 0; i < num; i++){
                    val = this.secondDropDown.get(i)
                    await val.getText().then(data => {
                        if(data === item){
                            val.click()
                        }
                    })
                }
                break;
                case "third":
                    await this.thirdDropDown.count().then(data => num = data)
                    for(let i = 0; i < num; i++){
                        val = this.thirdDropDown.get(i)
                        await val.getText().then(data => {
                            if(data === item){
                                val.click()
                            }
                        })
                    }
            default:
                break;
        }
    }
    async checkBox(check: String) {
        await this.allCheckBox.count().then(async(data) => {
            for(let i = 0; i < data; i++) {
                await this.allCheckBox.get(i).getText().then(data => {
                    if(data === check){
                        this.allCheckBox.get(i).isSelected().then(data => console.log(data)
                         )
                    }
                })
            }
        })
    }
}