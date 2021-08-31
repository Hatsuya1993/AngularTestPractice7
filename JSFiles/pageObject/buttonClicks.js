"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonClick = void 0;
const protractor_1 = require("protractor");
const elementExist_1 = require("../helper/elementExist");
let elementExist = new elementExist_1.ElementExist();
class ButtonClick {
    constructor() {
        this.clickMeFirst = protractor_1.$("#button1");
        this.clickMeSecond = protractor_1.$("#button2");
        this.clickMeThird = protractor_1.$("#button3");
        this.popUpMessageFirst = protractor_1.$("div#myModalClick .modal-dialog.modal-sm .modal-content .modal-body");
        this.popUpMessageSecond = protractor_1.$("div#myModalJSClick .modal-dialog.modal-md .modal-content .modal-body");
        this.popUpMessageThird = protractor_1.$("div#myModalMoveClick .modal-dialog.modal-sm .modal-content .modal-body p");
        this.buttonCloseModal = protractor_1.element(protractor_1.by.buttonText("Close"));
    }
    getDOMElements(data) {
        let exist = elementExist.checkTheElement(data);
        if (exist)
            return data;
    }
    getButtonClick(each) {
        return __awaiter(this, void 0, void 0, function* () {
            let popUpData;
            if (each === 1) {
                popUpData = this.getDOMElements(this.clickMeFirst);
                yield popUpData.click();
                yield protractor_1.browser.sleep(500);
                return this.popUpMessageFirst.getText();
            }
            else if (each === 2) {
                popUpData = this.getDOMElements(this.clickMeSecond);
                yield popUpData.click();
                yield protractor_1.browser.sleep(500);
                return this.popUpMessageSecond.getText();
            }
            else if (each === 3) {
                popUpData = this.getDOMElements(this.clickMeThird);
                yield popUpData.click();
                yield protractor_1.browser.sleep(500);
                return this.popUpMessageThird.getText();
            }
        });
    }
    getCloseButton() {
        let closeButtonData = this.getDOMElements(this.buttonCloseModal);
        return closeButtonData;
    }
}
exports.ButtonClick = ButtonClick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uQ2xpY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9idXR0b25DbGlja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWlGO0FBQ2pGLHlEQUFtRDtBQUVuRCxJQUFJLFlBQVksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQTtBQUVyQyxNQUFhLFdBQVc7SUFBeEI7UUFDSSxpQkFBWSxHQUFtQixjQUFDLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDNUMsa0JBQWEsR0FBbUIsY0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzdDLGlCQUFZLEdBQW1CLGNBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM1QyxzQkFBaUIsR0FBbUIsY0FBQyxDQUFDLG9FQUFvRSxDQUFDLENBQUE7UUFDM0csdUJBQWtCLEdBQW1CLGNBQUMsQ0FBQyxzRUFBc0UsQ0FBQyxDQUFBO1FBQzlHLHNCQUFpQixHQUFtQixjQUFDLENBQUMsMEVBQTBFLENBQUMsQ0FBQTtRQUNqSCxxQkFBZ0IsR0FBbUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFpQ3RFLENBQUM7SUEvQkcsY0FBYyxDQUFDLElBQW1CO1FBQzlCLElBQUksS0FBSyxHQUFhLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEQsSUFBSSxLQUFLO1lBQUUsT0FBTyxJQUFJLENBQUE7SUFDMUIsQ0FBQztJQUVLLGNBQWMsQ0FBQyxJQUFZOztZQUM3QixJQUFJLFNBQVMsQ0FBQTtZQUNiLElBQUcsSUFBSSxLQUFLLENBQUMsRUFBQztnQkFDVixTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7Z0JBQ2xELE1BQU0sU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUN2QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUN4QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQTthQUMxQztpQkFDSSxJQUFHLElBQUksS0FBSyxDQUFDLEVBQUM7Z0JBQ2YsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dCQUNuRCxNQUFNLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDdkIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUE7YUFDM0M7aUJBQ0ksSUFBRyxJQUFJLEtBQUssQ0FBQyxFQUFDO2dCQUNmLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFDbEQsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ3ZCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFBO2FBQzFDO1FBQ0wsQ0FBQztLQUFBO0lBRUQsY0FBYztRQUNWLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDaEUsT0FBTyxlQUFlLENBQUE7SUFDMUIsQ0FBQztDQUNKO0FBeENELGtDQXdDQyJ9