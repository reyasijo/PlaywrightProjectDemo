import { SignupPage } from "../Pages/SignupPage"
import { LoginPage } from "../Pages/LoginPage"
import{test,expect} from '@playwright/test'
import { userData } from "../TestData/userData"
import { ProductStorePage } from "../Pages/ProductStorePage"
import { AlertHandler } from "../Utils/AlertHandler"
import { CartPage } from "../Pages/CartPage"

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
 await loginpage.loginWithCreds(userData.loginvalidusername,userData.loginvalidpassword)
 await loginpage.clickLogin()
 const welcomemsg= await productstorepage.welcomeMessage()
 console.log(welcomemsg)
 await expect(welcomemsg).toContain('Welcome')
})

test('4. login using incorrect usename', async({page})=>
{
    await loginpage.loginWithCreds(userData.logininvalidusername,userData.signuppassword)
    await alerthandler.handleAlert('User does not exist.')
    await loginpage.clickLogin()
     
 }
)
test('5. login using incorrect password', async({page})=>
{
    
    await loginpage.loginWithCreds(userData.signupusername,userData.logininvalidpwd)
     await alerthandler.handleAlert('Wrong password.')
    await loginpage.clickLogin()
 }
)

test('6. login using incorrect username and password', async({page})=>
{
    await loginpage.loginWithCreds(userData.logininvalidusername,userData.logininvalidpwd)
    await alerthandler.handleAlert('User does not exist.')
    await loginpage.clickLogin()
    
 }
)
test('10. login using valid credentials and then logout', async({page})=>
{
 await loginpage.loginWithCreds(userData.loginvalidusername,userData.loginvalidpassword)
 await loginpage.clickLogin()
 await loginpage.logout()
})



 

