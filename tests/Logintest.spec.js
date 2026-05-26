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

test('1. sign up as a new user', async({page})=>
{
    
        await signuppage.signUpEnterCreds(userData.signupusername,userData.signuppassword)
        await alerthandler.handleAlert('Sign up successful.')
        await signuppage.signUp()
})

test('2. sign up enter creds and close',async({page})=>
{
    await signuppage.signUpEnterCreds(userData.loginvalidusername,userData.loginvalidpassword)
    await signuppage.signUpClose()
}
)
test.only ('3. login using valid credentials', async({page})=>
{
 await loginpage.loginWithCreds(userData.loginvalidusername,userData.loginvalidpassword)
 await loginpage.clickLogin()
 await expect(productstorepage.welcometext).toContainText('Welcome')
 //const welcomemsg= await productstorepage.welcomeMessage()
 //await expect(welcomemsg).toContain('Welcome')
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

test('7.Add any item to cart',async({page})=>
{
    await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
    await loginpage.clickLogin()
    await productstorepage.addItemToCart('Samsung galaxy s6')
    await alerthandler.handleAlert('Product is added.')
})

test('8.Purchase Phone',async({page})=>
{
 await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
 await loginpage.clickLogin()
 await productstorepage.selectCategory('Phones')
 await alerthandler.handleAlert('Product added.')
 await productstorepage.addItemToCart('Iphone 6 32gb') 
 await alerthandler.handleAlert('Product added.')
 await cartpage.placeorder('Iphone 6 32gb')

 })

 test('9.Purchase Monitor',async({page})=>
{
 await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
 await loginpage.clickLogin()
 await productstorepage.selectCategory('Monitors')
 await alerthandler.handleAlert('Product added.')
 await productstorepage.addItemToCart('Apple monitor 24') 
 await alerthandler.handleAlert('Product added.')
 await cartpage.placeorder('Apple monitor 24')

 })

 test('10. login using valid credentials and then logout', async({page})=>
{
 await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
 await loginpage.clickLogin()
 await loginpage.logout()
})


