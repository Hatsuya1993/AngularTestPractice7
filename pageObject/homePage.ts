import {$, browser, ElementFinder, element, by, $$, WebElement} from 'protractor'
import {ContactUs} from '../pageObject/contactUs'
import {LoginPage} from '../pageObject/loginPage'
import {ButtonClick} from '../pageObject/buttonClicks'
import {ElementExist} from '../helper/elementExist'
import {ToDoList} from '../pageObject/toDoList'
import { PageObjectModel } from './pageObjectModel'
import { AccordianText } from './accordianText'
import { DropCheckRadio } from './dropCheckRadio'
import { AjaxLoader } from './ajaxLoader'
import { ActionPage } from './actionPage'

let elementExist = new ElementExist()
 
export class HomePage {
    website : any = browser.get("http://webdriveruniversity.com/index.html")
    rowDetails : any = $$(".thumbnail .section-title h1")

    contactus : any = new ContactUs();
    loginpage : any = new LoginPage();
    buttonpage : any = new ButtonClick();
    todolist : any = new ToDoList();
    pageObjectModel : any = new PageObjectModel();
    accordionAndText: any = new AccordianText();
    dropCheckRadio: any = new DropCheckRadio();
    ajaxLoader: any = new AjaxLoader();
    actionPage: any = new ActionPage();

    async getRowInfo(data: String){
        let numberOfRow : Number = await this.rowDetails.count();
        for(let i = 0; i < numberOfRow; i++){
            let exist : Boolean = elementExist.checkTheElement(this.rowDetails.get(i))
            if(exist){
                let dataOfEachRow : String = await this.rowDetails.get(i).getText()
                if(dataOfEachRow === data){
                    await this.rowDetails.get(i).click()
                    switch (data) {
                        case "CONTACT US": return this.contactus
                        case "LOGIN PORTAL": return this.loginpage
                        case "BUTTON CLICKS": return this.buttonpage
                        case "TO DO LIST": return this.todolist
                        case "PAGE OBJECT MODEL": return this.pageObjectModel
                        case "ACCORDION & TEXT AFFECTS (APPEAR & DISAPPEAR)": return this.accordionAndText
                        case "DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)" : return this.dropCheckRadio
                        case "AJAX LOADER" : return this.ajaxLoader
                        case "ACTIONS" : return this.actionPage
                        default:
                            break;
                    }
                }
            }
        }
    }

    async getWindowTab(data: Number){
        await browser.getAllWindowHandles().then(async(getAll)=>{
            getAll.forEach(async(el, ind) => {
                if(ind === data){
                    browser.switchTo().window(el)
                    await browser.sleep(500)
                }
            })
        })
    }
}