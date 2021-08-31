"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUs = void 0;
const protractor_1 = require("protractor");
const elementExist_1 = require("../helper/elementExist");
let elementExist = new elementExist_1.ElementExist();
class ContactUs {
    constructor() {
        this.heading = protractor_1.$(".section_header");
        this.firstName = protractor_1.$("input[name='first_name']");
        this.lastName = protractor_1.$("input[name='last_name']");
        this.email = protractor_1.$("input[name='email']");
        this.comment = protractor_1.$("textarea[name='message']");
        this.resetButton = protractor_1.$("input[value='RESET']");
        this.submitButton = protractor_1.$("input[value='SUBMIT']");
    }
    getDOMElements(data) {
        let exist = elementExist.checkTheElement(data);
        if (exist)
            return data;
    }
}
exports.ContactUs = ContactUs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdFVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9jb250YWN0VXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQWlGO0FBQ2pGLHlEQUFtRDtBQUVuRCxJQUFJLFlBQVksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQTtBQUVyQyxNQUFhLFNBQVM7SUFBdEI7UUFDSSxZQUFPLEdBQW1CLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQzlDLGNBQVMsR0FBbUIsY0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFDekQsYUFBUSxHQUFtQixjQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQTtRQUN2RCxVQUFLLEdBQW1CLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ2hELFlBQU8sR0FBbUIsY0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFDdkQsZ0JBQVcsR0FBbUIsY0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDdkQsaUJBQVksR0FBbUIsY0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUE7SUFNN0QsQ0FBQztJQUpHLGNBQWMsQ0FBQyxJQUFtQjtRQUM5QixJQUFJLEtBQUssR0FBYSxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hELElBQUksS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFBO0lBQzFCLENBQUM7Q0FDSjtBQWJELDhCQWFDIn0=