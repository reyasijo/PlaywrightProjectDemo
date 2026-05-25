import { SignupPage } from "../Pages/SignupPage"
import { LoginPage } from "../Pages/LoginPage"
import{test,expect} from '@playwright/test'
import { userData } from "../TestData/userData"
import { ProductStorePage } from "../Pages/ProductStorePage"
import { AlertHandler } from "../Utils/AlertHandler"
let signuppage
let loginpage
let productstorepage
let alerthandler

test.beforeEach(async ({ page }) => {

    signuppage = new SignupPage(page)
    loginpage = new LoginPage(page)
    productstorepage=new ProductStorePage(page)
    alerthandler=new AlertHandler(page)
    await signuppage.goto()

})

test('1. sign up as a new user', async({page})=>
{
    await signuppage.signUpEnterCreds(userData.signupusername,userData.signuppassword)
    const [dialog] = await Promise.all([  
        page.waitForEvent('dialog'), 
        signuppage.signUp()])
        const message= await alerthandler.handleAlert(dialog,'Sign up successful.') //dialog is the alert popup
        console.log("Alert message is:", message)
})
/*
test('2. sign up enter creds and close',async({page})=>
{
    const signuppage=new LoginPage(page)
    await signuppage.goto()
    await signuppage.signUpEnterCreds(userData.username,userData.password)
    await signuppage.signUpClose()
}
)*/
test ('3. login using valid credentials', async({page})=>
{
 await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
 await loginpage.clickLogin()
 await expect(productstorepage.welcometext).toContainText('Welcome')
})

test('4. login using incorrect usename', async({page})=>
{
    await loginpage.loginWithCreds(userData.logininvalidusername,userData.signuppassword)
      const [dialog] = await Promise.all([  //do 2 things at a time. Promise.all returns an array. The dialog object and aundefined(from click)
        page.waitForEvent('dialog'), //start listening for alert popup
        loginpage.clickLogin() //this triggers alert
    ])
    const message= await alerthandler.handleAlert(dialog,'User does not exist.') //dialog is the alert popup
    console.log("Alert message is:", message)
 }
)

test('5. login using incorrect password', async({page})=>
{
    await loginpage.loginWithCreds(userData.signupusername,userData.logininvalidpwd)
      const [dialog] = await Promise.all([  //do 2 things at a time. Promise.all returns an array. The dialog object and aundefined(from click)
        page.waitForEvent('dialog'), //start listening for alert popup
        loginpage.clickLogin() //this triggers alert
    ])
    const message= await alerthandler.handleAlert(dialog,'Wrong password.') //dialog is the alert popup
    console.log("Alert message is:", message)
 }
)

test('6. login using incorrect username and password', async({page})=>
{
    await loginpage.loginWithCreds(userData.logininvalidusername,userData.logininvalidpwd)
      const [dialog] = await Promise.all([ 
        page.waitForEvent('dialog'), 
        loginpage.clickLogin() 
    ])
    const message= await alerthandler.handleAlert(dialog,'User does not exist.') //dialog is the alert popup
    console.log("Alert message is:", message)
 }
)

test('7.Add any item to cart',async({page})=>
{
 await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
 await loginpage.clickLogin()
 await productstorepage.addItemToCart('Nokia lumia 1520')
 /*const [dialog] = await Promise.all([ 
        page.waitForEvent('dialog'), 
        productstorepage.addItemToCart('Nokia lumia 1520') 
    ])
 const message= await alerthandler.handleAlert(dialog,'Product added.') 
 console.log("Alert message is:", message)   */
 })

test.only('8.Add phone to cart',async({page})=>
{
 await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
 await loginpage.clickLogin()
 const [dialog] = await Promise.all([ 
        page.waitForEvent('dialog'), 
        productstorepage.addItemToCart('Iphone 6 32gb') 
    ])
 const message= await alerthandler.handleAlert(dialog,'Product added.') 
 console.log("Alert message is:", message)   
 }
)
