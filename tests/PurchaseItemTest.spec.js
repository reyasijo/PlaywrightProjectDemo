import { test,expect } from '@playwright/test'
import { SignupPage } from '../Pages/SignupPage'
import { LoginPage } from '../Pages/LoginPage'
import { ProductStorePage } from '../Pages/ProductStorePage'
import { AlertHandler } from '../Utils/AlertHandler'
import { CartPage } from '../Pages/CartPage'
import { userData } from '../TestData/userData'
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
test('7.Add any item to cart',async({page})=>
{
  
     await loginpage.loginWithCreds(userData.loginvalidusername,userData.loginvalidpassword)
     await loginpage.clickLogin()
     await productstorepage.addItemToCart('Samsung galaxy s6')
     await alerthandler.handleAlert('Product is added.')
})
    
test('8.Purchase Phone',async({page})=>
{
 await loginpage.loginWithCreds(userData.loginvalidusername,userData.loginvalidpassword)
 await loginpage.clickLogin()
 await productstorepage.selectCategory('Phones')
 await alerthandler.handleAlert('Product added.')
 await productstorepage.addItemToCart('Iphone 6 32gb') 
 await alerthandler.handleAlert('Product added.')
 await cartpage.placeorder('Iphone 6 32gb')

 })

test('9.Purchase Monitor',async({page})=> 
{
    await loginpage.loginWithCreds(userData.loginvalidusername,userData.loginvalidpassword)
    await loginpage.clickLogin()               
    await productstorepage.selectCategory('Monitors')
    await alerthandler.handleAlert('Product added.')
     await productstorepage.addItemToCart('Apple monitor 24')
    await alerthandler.handleAlert('Product added.')
    await cartpage.placeorder('Apple monitor 24')
})



