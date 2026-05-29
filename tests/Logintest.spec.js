import { SignupPage } from "../Pages/SignupPage"
import { LoginPage } from "../Pages/LoginPage"
import{test,expect} from '@playwright/test'
//import { userData } from "../TestData/userData"
import { ProductStorePage } from "../Pages/ProductStorePage"
import { AlertHandler } from "../Utils/AlertHandler"
import { CartPage } from "../Pages/CartPage"
import dataset from '../Utils/testdata.json'
//const dataset= require('../Utils/testdata.json')

let signuppage
let loginpage
let productstorepage
let alerthandler
let cartpage

test.beforeEach(async ({ page }) => {

    signuppage = new SignupPage(page)
    loginpage = new LoginPage(page)
    productstorepage=new ProductStorePage(page)
    alerthandler=new AlertHandler(page)
    cartpage=new CartPage(page)
    await signuppage.goto()

})

test('3. login using valid credentials', async({page})=>
{
 await loginpage.loginWithCreds(dataset.login.loginvalidusername,dataset.login.loginvalidpassword)
 await loginpage.clickLogin()
 const welcomemsg= await productstorepage.welcomeMessage()
 console.log(welcomemsg)
 await expect(welcomemsg).toContain('Welcome')
})

test('4. login using incorrect usename', async({page})=>
{
    await loginpage.loginWithCreds(dataset.login.logininvalidusername,dataset.login.logininvalidpwd)
    await alerthandler.handleAlert(dataset.login.alerttextincorrectuser)
    await loginpage.clickLogin() 
 }
)

test('5. login using incorrect password', async({page})=>
{
    //assertion given in alert handler
    await loginpage.loginWithCreds(dataset.login.loginvalidusername,dataset.login.logininvalidpwd)
     await alerthandler.handleAlert(dataset.login.alerttextincorrectpwd)
    await loginpage.clickLogin()
 }
)

test('6. login using incorrect username and password', async({page})=>
{
    //assertion given in alert handler
    await loginpage.loginWithCreds(dataset.login.logininvalidusername,dataset.login.logininvalidpwd)
    await alerthandler.handleAlert(dataset.login.alerttextincorrectuser)
    await loginpage.clickLogin()
}
)

test('10. login using valid credentials and then logout', async({page})=>
{ 
 await loginpage.loginWithCreds(dataset.login.loginvalidusername,dataset.login.loginvalidpassword)
 await loginpage.clickLogin()
 await loginpage.logout()
 await expect(page).toHaveTitle(dataset.signup.signuppagetitle)

}
)



 

