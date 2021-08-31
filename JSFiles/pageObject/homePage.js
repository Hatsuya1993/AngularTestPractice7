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
exports.HomePage = void 0;
const protractor_1 = require("protractor");
const contactUs_1 = require("../pageObject/contactUs");
const loginPage_1 = require("../pageObject/loginPage");
const buttonClicks_1 = require("../pageObject/buttonClicks");
const elementExist_1 = require("../helper/elementExist");
const toDoList_1 = require("../pageObject/toDoList");
const pageObjectModel_1 = require("./pageObjectModel");
const accordianText_1 = require("./accordianText");
const dropCheckRadio_1 = require("./dropCheckRadio");
const ajaxLoader_1 = require("./ajaxLoader");
const actionPage_1 = require("./actionPage");
let elementExist = new elementExist_1.ElementExist();
class HomePage {
    constructor() {
        this.website = protractor_1.browser.get("http://webdriveruniversity.com/index.html");
        this.rowDetails = protractor_1.$$(".thumbnail .section-title h1");
        this.contactus = new contactUs_1.ContactUs();
        this.loginpage = new loginPage_1.LoginPage();
        this.buttonpage = new buttonClicks_1.ButtonClick();
        this.todolist = new toDoList_1.ToDoList();
        this.pageObjectModel = new pageObjectModel_1.PageObjectModel();
        this.accordionAndText = new accordianText_1.AccordianText();
        this.dropCheckRadio = new dropCheckRadio_1.DropCheckRadio();
        this.ajaxLoader = new ajaxLoader_1.AjaxLoader();
        this.actionPage = new actionPage_1.ActionPage();
    }
    getRowInfo(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let numberOfRow = yield this.rowDetails.count();
            for (let i = 0; i < numberOfRow; i++) {
                let exist = elementExist.checkTheElement(this.rowDetails.get(i));
                if (exist) {
                    let dataOfEachRow = yield this.rowDetails.get(i).getText();
                    if (dataOfEachRow === data) {
                        yield this.rowDetails.get(i).click();
                        switch (data) {
                            case "CONTACT US": return this.contactus;
                            case "LOGIN PORTAL": return this.loginpage;
                            case "BUTTON CLICKS": return this.buttonpage;
                            case "TO DO LIST": return this.todolist;
                            case "PAGE OBJECT MODEL": return this.pageObjectModel;
                            case "ACCORDION & TEXT AFFECTS (APPEAR & DISAPPEAR)": return this.accordionAndText;
                            case "DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)": return this.dropCheckRadio;
                            case "AJAX LOADER": return this.ajaxLoader;
                            case "ACTIONS": return this.actionPage;
                            default:
                                break;
                        }
                    }
                }
            }
        });
    }
    getWindowTab(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.getAllWindowHandles().then((getAll) => __awaiter(this, void 0, void 0, function* () {
                getAll.forEach((el, ind) => __awaiter(this, void 0, void 0, function* () {
                    if (ind === data) {
                        protractor_1.browser.switchTo().window(el);
                        yield protractor_1.browser.sleep(500);
                    }
                }));
            }));
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L2hvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpRjtBQUNqRix1REFBaUQ7QUFDakQsdURBQWlEO0FBQ2pELDZEQUFzRDtBQUN0RCx5REFBbUQ7QUFDbkQscURBQStDO0FBQy9DLHVEQUFtRDtBQUNuRCxtREFBK0M7QUFDL0MscURBQWlEO0FBQ2pELDZDQUF5QztBQUN6Qyw2Q0FBeUM7QUFFekMsSUFBSSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUE7QUFFckMsTUFBYSxRQUFRO0lBQXJCO1FBQ0ksWUFBTyxHQUFTLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUE7UUFDeEUsZUFBVSxHQUFTLGVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO1FBRXJELGNBQVMsR0FBUyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNsQyxjQUFTLEdBQVMsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDbEMsZUFBVSxHQUFTLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQ3JDLGFBQVEsR0FBUyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUNoQyxvQkFBZSxHQUFTLElBQUksaUNBQWUsRUFBRSxDQUFDO1FBQzlDLHFCQUFnQixHQUFRLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBQzVDLG1CQUFjLEdBQVEsSUFBSSwrQkFBYyxFQUFFLENBQUM7UUFDM0MsZUFBVSxHQUFRLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBUSxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQXNDdkMsQ0FBQztJQXBDUyxVQUFVLENBQUMsSUFBWTs7WUFDekIsSUFBSSxXQUFXLEdBQVksTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3pELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUM7Z0JBQ2hDLElBQUksS0FBSyxHQUFhLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDMUUsSUFBRyxLQUFLLEVBQUM7b0JBQ0wsSUFBSSxhQUFhLEdBQVksTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtvQkFDbkUsSUFBRyxhQUFhLEtBQUssSUFBSSxFQUFDO3dCQUN0QixNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO3dCQUNwQyxRQUFRLElBQUksRUFBRTs0QkFDVixLQUFLLFlBQVksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTs0QkFDeEMsS0FBSyxjQUFjLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7NEJBQzFDLEtBQUssZUFBZSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBOzRCQUM1QyxLQUFLLFlBQVksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTs0QkFDdkMsS0FBSyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQTs0QkFDckQsS0FBSywrQ0FBK0MsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFBOzRCQUNsRixLQUFLLDBDQUEyQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFBOzRCQUM1RSxLQUFLLGFBQWMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTs0QkFDM0MsS0FBSyxTQUFVLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7NEJBQ3ZDO2dDQUNJLE1BQU07eUJBQ2I7cUJBQ0o7aUJBQ0o7YUFDSjtRQUNMLENBQUM7S0FBQTtJQUVLLFlBQVksQ0FBQyxJQUFZOztZQUMzQixNQUFNLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBTSxNQUFNLEVBQUMsRUFBRTtnQkFDcEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDNUIsSUFBRyxHQUFHLEtBQUssSUFBSSxFQUFDO3dCQUNaLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO3dCQUM3QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3FCQUMzQjtnQkFDTCxDQUFDLENBQUEsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtDQUNKO0FBbERELDRCQWtEQyJ9