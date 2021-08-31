import { HomePage } from "../pageObject/homePage"

export class FillInDataClass {

    async fillInDataFunc (firstData: String, lastData: String, mailtData: String, commentstData: String, buttontData: String, typeData: String) {
        let homePage = new HomePage()
            let contactUs = await homePage.getRowInfo("CONTACT US")
            await homePage.getWindowTab(1)
            let firstName = await contactUs.getDOMElements(contactUs.firstName)
            await firstName.sendKeys(firstData)
            
            let lastName = await contactUs.getDOMElements(contactUs.lastName)
            await lastName.sendKeys(lastData)
            
            let emailAddress = await contactUs.getDOMElements(contactUs.email)
            await emailAddress.sendKeys(mailtData)
            
            let comments = await contactUs.getDOMElements(contactUs.comment)
            await comments.sendKeys(commentstData)
    
            if(buttontData === "submit"){
                let submitButton = await contactUs.getDOMElements(contactUs.submitButton)
                await submitButton.click()
            }
    
            else if(buttontData === "reset"){
                let resetButton = await contactUs.getDOMElements(contactUs.resetButton)
                await resetButton.click()
            }
            let dataReturn : Object = {
                "firstName":firstName.getAttribute('value'),
                "lastName":lastName.getAttribute('value'),
                "email":emailAddress.getAttribute('value'),
                "comment":comments.getAttribute('value'),
            }
            return dataReturn
    }

    async loginPageFillIn (username: String, password: any){
        let homePage = new HomePage()
        let loginData = await homePage.getRowInfo("LOGIN PORTAL")
        await homePage.getWindowTab(1)
        let usernameData = await loginData.getDOMElements(loginData.username)
        await usernameData.sendKeys(username)
        let passwordData = await loginData.getDOMElements(loginData.password)
        await passwordData.sendKeys(password)
        let loginButton = await loginData.getDOMElements(loginData.loginButton)
        await loginButton.click()
    }
}

