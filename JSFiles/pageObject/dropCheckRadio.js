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
exports.DropCheckRadio = void 0;
const protractor_1 = require("protractor");
class DropCheckRadio {
    constructor() {
        this.firstDropDown = protractor_1.$$("#dropdowm-menu-1 option");
        this.secondDropDown = protractor_1.$$("#dropdowm-menu-2 option");
        this.thirdDropDown = protractor_1.$$("#dropdowm-menu-3 option");
        this.firstDropDownEach = protractor_1.$("#dropdowm-menu-1");
        this.secondDropDownEach = protractor_1.$("#dropdowm-menu-2");
        this.thirdDropDownEach = protractor_1.$("#dropdowm-menu-3");
        this.allCheckBox = protractor_1.$$("#checkboxes label");
    }
    selectFunction(dropdown, item) {
        return __awaiter(this, void 0, void 0, function* () {
            let num;
            let val;
            switch (dropdown) {
                case "first":
                    yield this.firstDropDown.count().then(data => num = data);
                    for (let i = 0; i < num; i++) {
                        val = this.firstDropDown.get(i);
                        yield val.getText().then(data => {
                            if (data === item) {
                                val.click();
                            }
                        });
                    }
                    break;
                case "second":
                    yield this.secondDropDown.count().then(data => num = data);
                    for (let i = 0; i < num; i++) {
                        val = this.secondDropDown.get(i);
                        yield val.getText().then(data => {
                            if (data === item) {
                                val.click();
                            }
                        });
                    }
                    break;
                case "third":
                    yield this.thirdDropDown.count().then(data => num = data);
                    for (let i = 0; i < num; i++) {
                        val = this.thirdDropDown.get(i);
                        yield val.getText().then(data => {
                            if (data === item) {
                                val.click();
                            }
                        });
                    }
                default:
                    break;
            }
        });
    }
    checkBox(check) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.allCheckBox.count().then((data) => __awaiter(this, void 0, void 0, function* () {
                for (let i = 0; i < data; i++) {
                    yield this.allCheckBox.get(i).getText().then(data => {
                        if (data === check) {
                            this.allCheckBox.get(i).isSelected().then(data => console.log(data));
                        }
                    });
                }
            }));
        });
    }
}
exports.DropCheckRadio = DropCheckRadio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcENoZWNrUmFkaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L2Ryb3BDaGVja1JhZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFrRjtBQUVsRixNQUFhLGNBQWM7SUFBM0I7UUFDSSxrQkFBYSxHQUF1QixlQUFFLENBQUMseUJBQXlCLENBQUMsQ0FBQTtRQUNqRSxtQkFBYyxHQUF1QixlQUFFLENBQUMseUJBQXlCLENBQUMsQ0FBQTtRQUNsRSxrQkFBYSxHQUF1QixlQUFFLENBQUMseUJBQXlCLENBQUMsQ0FBQTtRQUVqRSxzQkFBaUIsR0FBa0IsY0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDeEQsdUJBQWtCLEdBQWtCLGNBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQ3pELHNCQUFpQixHQUFrQixjQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUV4RCxnQkFBVyxHQUF3QixlQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQXVEOUQsQ0FBQztJQXBEUyxjQUFjLENBQUMsUUFBZ0IsRUFBRSxJQUFZOztZQUMvQyxJQUFJLEdBQUcsQ0FBQTtZQUNQLElBQUksR0FBRyxDQUFBO1lBQ1AsUUFBUSxRQUFRLEVBQUU7Z0JBQ2QsS0FBSyxPQUFPO29CQUNSLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUE7b0JBQ3pELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUM7d0JBQ3hCLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDL0IsTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUks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