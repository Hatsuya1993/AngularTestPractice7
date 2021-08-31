"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementExist = void 0;
const protractor_1 = require("protractor");
let EC = protractor_1.protractor.ExpectedConditions;
class ElementExist {
    checkTheElement(data) {
        protractor_1.browser.wait(EC.presenceOf(data), 3000);
        return true;
    }
    checkTheElementDisplayed(data) {
        protractor_1.browser.wait(EC.visibilityOf(data), 8000);
        return true;
    }
}
exports.ElementExist = ElementExist;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudEV4aXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vaGVscGVyL2VsZW1lbnRFeGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBNEU7QUFFNUUsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2QyxNQUFhLFlBQVk7SUFDckIsZUFBZSxDQUFDLElBQW1CO1FBQy9CLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkMsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0Qsd0JBQXdCLENBQUMsSUFBbUI7UUFDeEMsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN6QyxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7Q0FDSjtBQVRELG9DQVNDIn0=