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
exports.AccordianText = void 0;
const protractor_1 = require("protractor");
const elementExist_1 = require("../helper/elementExist");
class AccordianText {
    constructor() {
        this.manualTesting = protractor_1.$("#manual-testing-accordion");
        this.manualTestingDisplay = protractor_1.$("#manual-testing-description");
        this.cucumberBDD = protractor_1.$("#cucumber-accordion");
        this.cucumberBDDDisplay = protractor_1.$("#cucumber-testing-description");
        this.automationTesting = protractor_1.$("#automation-accordion");
        this.automationTestingDisplay = protractor_1.$("#automation-testing-description");
        this.keepCliking = protractor_1.$("#click-accordion");
        this.keepClickingDisplay = protractor_1.$("#timeout");
        this.elementExist = new elementExist_1.ElementExist();
    }
    checkManualTesting() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.elementExist.checkTheElement(this.manualTesting);
            yield this.manualTesting.click();
            return yield this.elementExist.checkTheElement(this.manualTestingDisplay);
        });
    }
}
exports.AccordianText = AccordianText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaWFuVGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvYWNjb3JkaWFuVGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUU7QUFDbkUseURBQW1EO0FBRW5ELE1BQWEsYUFBYTtJQUExQjtRQUNJLGtCQUFhLEdBQWtCLGNBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO1FBQzdELHlCQUFvQixHQUFrQixjQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtRQUN0RSxnQkFBVyxHQUFrQixjQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUNyRCx1QkFBa0IsR0FBa0IsY0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFDdEUsc0JBQWlCLEdBQWtCLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQzdELDZCQUF3QixHQUFrQixjQUFDLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtRQUM5RSxnQkFBVyxHQUFrQixjQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUNsRCx3QkFBbUIsR0FBa0IsY0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRWxELGlCQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7SUFPdEMsQ0FBQztJQUxTLGtCQUFrQjs7WUFDcEIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDM0QsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2hDLE9BQU8sTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUM3RSxDQUFDO0tBQUE7Q0FDSjtBQWpCRCxzQ0FpQkMifQ==