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
exports.ToDoList = void 0;
const protractor_1 = require("protractor");
class ToDoList {
    constructor() {
        this.listOfItems = protractor_1.$$("body #container ul li");
    }
    slashAllList(num) {
        return __awaiter(this, void 0, void 0, function* () {
            this.listOfItems.get(num).click();
            yield protractor_1.browser.sleep(500);
        });
    }
}
exports.ToDoList = ToDoList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Eb0xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L3RvRG9MaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF5QztBQUV6QyxNQUFhLFFBQVE7SUFBckI7UUFDSSxnQkFBVyxHQUFTLGVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0lBTW5ELENBQUM7SUFKUyxZQUFZLENBQUMsR0FBVzs7WUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDakMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQyxDQUFDO0tBQUE7Q0FDSjtBQVBELDRCQU9DIn0=