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
exports.FillInDataClass = void 0;
const homePage_1 = require("../pageObject/homePage");
class FillInDataClass {
    fillInDataFunc(firstData, lastData, mailtData, commentstData, buttontData, typeData) {
        return __awaiter(this, void 0, void 0, function* () {
            let homePage = new homePage_1.HomePage();
            let contactUs = yield homePage.getRowInfo("CONTACT US");
            yield homePage.getWindowTab(1);
            let firstName = yield contactUs.getDOMElements(contactUs.firstName);
            yield firstName.sendKeys(firstData);
            let lastName = yield contactUs.getDOMElements(contactUs.lastName);
            yield lastName.sendKeys(lastData);
            let emailAddress = yield contactUs.getDOMElements(contactUs.email);
            yield emailAddress.sendKeys(mailtData);
            let comments = yield contactUs.getDOMElements(contactUs.comment);
            yield comments.sendKeys(commentstData);
            if (buttontData === "submit") {
                let submitButton = yield contactUs.getDOMElements(contactUs.submitButton);
                yield submitButton.click();
            }
            else if (buttontData === "reset") {
                let resetButton = yield contactUs.getDOMElements(contactUs.resetButton);
                yield resetButton.click();
            }
            let dataReturn = {
                "firstName": firstName.getAttribute('value'),
                "lastName": lastName.getAttribute('value'),
                "email": emailAddress.getAttribute('value'),
                "comment": comments.getAttribute('value'),
            };
            return dataReturn;
        });
    }
    loginPageFillIn(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let homePage = new homePage_1.HomePage();
            let loginData = yield homePage.getRowInfo("LOGIN PORTAL");
            yield homePage.getWindowTab(1);
            let usernameData = yield loginData.getDOMElements(loginData.username);
            yield usernameData.sendKeys(username);
            let passwordData = yield loginData.getDOMElements(loginData.password);
            yield passwordData.sendKeys(password);
            let loginButton = yield loginData.getDOMElements(loginData.loginButton);
            yield loginButton.click();
        });
    }
}
exports.FillInDataClass = FillInDataClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsbEluRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2hlbHBlci9maWxsSW5EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFpRDtBQUVqRCxNQUFhLGVBQWU7SUFFbEIsY0FBYyxDQUFFLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxTQUFpQixFQUFFLGFBQXFCLEVBQUUsV0FBbUIsRUFBRSxRQUFnQjs7WUFDdEksSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7WUFDekIsSUFBSSxTQUFTLEdBQUcsTUFBTSxRQUFRLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3ZELE1BQU0sUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUM5QixJQUFJLFNBQVMsR0FBRyxNQUFNLFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ25FLE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUVuQyxJQUFJLFFBQVEsR0FBRyxNQUFNLFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ2pFLE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUVqQyxJQUFJLFlBQVksR0FBRyxNQUFNLFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2xFLE1BQU0sWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUV0QyxJQUFJLFFBQVEsR0FBRyxNQUFNLFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2hFLE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUV0QyxJQUFHLFdBQVcsS0FBSyxRQUFRLEVBQUM7Z0JBQ3hCLElBQUksWUFBWSxHQUFHLE1BQU0sU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUE7Z0JBQ3pFLE1BQU0sWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO2FBQzdCO2lCQUVJLElBQUcsV0FBVyxLQUFLLE9BQU8sRUFBQztnQkFDNUIsSUFBSSxXQUFXLEdBQUcsTUFBTSxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDdkUsTUFBTSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUE7YUFDNUI7WUFDRCxJQUFJLFVBQVUsR0FBWTtnQkFDdEIsV0FBVyxFQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO2dCQUMzQyxVQUFVLEVBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7Z0JBQ3pDLE9BQU8sRUFBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztnQkFDMUMsU0FBUyxFQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO2FBQzNDLENBQUE7WUFDRCxPQUFPLFVBQVUsQ0FBQTtRQUN6QixDQUFDO0tBQUE7SUFFSyxlQUFlLENBQUUsUUFBZ0IsRUFBRSxRQUFhOztZQUNsRCxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtZQUM3QixJQUFJLFNBQVMsR0FBRyxNQUFNLFFBQVEsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDekQsTUFBTSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzlCLElBQUksWUFBWSxHQUFHLE1BQU0sU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDckUsTUFBTSxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3JDLElBQUksWUFBWSxHQUFHLE1BQU0sU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDckUsTUFBTSxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3JDLElBQUksV0FBVyxHQUFHLE1BQU0sU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDdkUsTUFBTSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDN0IsQ0FBQztLQUFBO0NBQ0o7QUEvQ0QsMENBK0NDIn0=