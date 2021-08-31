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
exports.ActionPage = void 0;
const protractor_1 = require("protractor");
const handleAlert_1 = require("../helper/handleAlert");
class ActionPage {
    constructor() {
        this.hoverOptions = protractor_1.$$('#div-hover div[style*=float]');
    }
    hoverOnABox(whichOne) {
        return __awaiter(this, void 0, void 0, function* () {
            let alertString;
            let handleAlert = new handleAlert_1.HandleAlert();
            yield this.hoverOptions.count().then((data) => __awaiter(this, void 0, void 0, function* () {
                for (let i = 0; i < data; i++) {
                    yield this.hoverOptions.get(i).getText().then((dataString) => __awaiter(this, void 0, void 0, function* () {
                        if (whichOne === 'Hover Over Me First!' && whichOne === dataString) {
                            yield protractor_1.browser.actions().mouseMove(this.hoverOptions.get(i)).perform();
                            yield protractor_1.browser.actions().mouseMove(this.hoverOptions.get(i).$('a')).click().perform();
                            // alertString = handleAlert.getAlertText().then(data => console.log(data, 1234)
                            // )
                            // await handleAlert.acceptAlert()
                            yield protractor_1.browser.switchTo().alert().getText().then(data => console.log(data));
                        }
                    }));
                    break;
                }
            }));
        });
    }
}
exports.ActionPage = ActionPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvYWN0aW9uUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkQ7QUFDN0QsdURBQW9EO0FBRXBELE1BQWEsVUFBVTtJQUF2QjtRQUVJLGlCQUFZLEdBQXVCLGVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO0lBdUJ6RSxDQUFDO0lBckJTLFdBQVcsQ0FBQyxRQUFnQjs7WUFDOUIsSUFBSSxXQUFXLENBQUE7WUFDZixJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQTtZQUNuQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQU0sSUFBSSxFQUFDLEVBQUU7Z0JBQzlDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUM7b0JBQ3pCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQU0sVUFBVSxFQUFDLEVBQUU7d0JBQzdELElBQUcsUUFBUSxLQUFLLHNCQUFzQixJQUFJLFFBQVEsS0FBSyxVQUFVLEVBQUM7NEJBQzlELE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTs0QkFDckUsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTs0QkFDcEYsZ0ZBQWdGOzRCQUNoRixJQUFJOzRCQUNKLGtDQUFrQzs0QkFDbEMsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQ3hFLENBQUE7eUJBQ0o7b0JBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQTtvQkFDRixNQUFLO2lCQUNSO1lBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtDQUVKO0FBekJELGdDQXlCQyJ9