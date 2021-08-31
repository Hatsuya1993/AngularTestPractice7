"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
const elementExist_1 = require("../helper/elementExist");
let elementExist = new elementExist_1.ElementExist();
class LoginPage {
    constructor() {
        this.username = protractor_1.$("#text");
        this.password = protractor_1.$("#password");
        this.loginButton = protractor_1.$("#login-button");
    }
    getDOMElements(data) {
        let exist = elementExist.checkTheElement(data);
        if (exist)
            return data;
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9sb2dpblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQWlGO0FBQ2pGLHlEQUFtRDtBQUVuRCxJQUFJLFlBQVksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQTtBQUVyQyxNQUFhLFNBQVM7SUFBdEI7UUFDSSxhQUFRLEdBQW1CLGNBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNyQyxhQUFRLEdBQW1CLGNBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN6QyxnQkFBVyxHQUFtQixjQUFDLENBQUMsZUFBZSxDQUFDLENBQUE7SUFNcEQsQ0FBQztJQUpHLGNBQWMsQ0FBQyxJQUFtQjtRQUM5QixJQUFJLEtBQUssR0FBYSxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hELElBQUksS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFBO0lBQzFCLENBQUM7Q0FDSjtBQVRELDhCQVNDIn0=