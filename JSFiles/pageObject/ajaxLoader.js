"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AjaxLoader = void 0;
const protractor_1 = require("protractor");
const elementExist_1 = require("../helper/elementExist");
class AjaxLoader {
    constructor() {
        this.clickMeButton = protractor_1.$("#button1 p");
        this.modalPopUpBody = protractor_1.$("#myModalClick .modal-body");
    }
    clickButton() {
        let clickNow = new elementExist_1.ElementExist();
        let buttonClick = clickNow.checkTheElementDisplayed(this.clickMeButton);
        if (buttonClick)
            return this.clickMeButton;
        else
            throw new Error("Button doesnt exist");
    }
}
exports.AjaxLoader = AjaxLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheExvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvYWpheExvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBOEM7QUFDOUMseURBQW1EO0FBR25ELE1BQWEsVUFBVTtJQUF2QjtRQUNJLGtCQUFhLEdBQWtCLGNBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM5QyxtQkFBYyxHQUFrQixjQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtJQVFsRSxDQUFDO0lBTkcsV0FBVztRQUNQLElBQUksUUFBUSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1FBQ2xDLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDdkUsSUFBRyxXQUFXO1lBQUUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBOztZQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNKO0FBVkQsZ0NBVUMifQ==