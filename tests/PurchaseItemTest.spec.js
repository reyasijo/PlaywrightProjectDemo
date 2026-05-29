import { test,expect } from '@playwright/test'
import { SignupPage } from '../Pages/SignupPage'
import { LoginPage } from '../Pages/LoginPage'
import { ProductStorePage } from '../Pages/ProductStorePage'
import { AlertHandler } from '../Utils/AlertHandler'
import { CartPage } from '../Pages/CartPage'
import dataset from '../Utils/testdata.json'

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
  
     await loginpage.loginWithCreds(dataset.login.loginvalidusername,dataset.login.loginvalidpassword)
     await loginpage.clickLogin()
     await productstorepage.addItemToCart(dataset.productdata.anyitem)
     await alerthandler.handleAlert(dataset.productdata.productaddedalert)
})
    
test('8.Purchase Phone',async({page})=>
{
 await loginpage.loginWithCreds(dataset.login.loginvalidusername,dataset.login.loginvalidpassword)
 await loginpage.clickLogin()
 await productstorepage.selectCategory(dataset.productdata.phonecategory)
 //await alerthandler.handleAlert('Product added.')
 await productstorepage.addItemToCart(dataset.productdata.phoneitem)
 await alerthandler.handleAlert(dataset.productdata.productaddedalert)
 const orderConfirmationText = await cartpage.placeorder(dataset.productdata.phoneitem)
 expect(orderConfirmationText.trim()).toContain('Thank you for your purchase!')
 })

test('9.Purchase Monitor',async({page})=> 
{
    await loginpage.loginWithCreds(dataset.login.loginvalidusername,dataset.login.loginvalidpassword)
    await loginpage.clickLogin()    
    console.log("Selected category is:", dataset.productdata.monitorcategory)            
    await productstorepage.selectCategory(dataset.productdata.monitorcategory)
    await alerthandler.handleAlert(dataset.productdata.productaddedalert)
    await productstorepage.addItemToCart(dataset.productdata.monitoritem)
    await alerthandler.handleAlert(dataset.productdata.productaddedalert)
    const orderConfirmationText =
    await cartpage.placeorder(dataset.productdata.monitoritem)
    expect(orderConfirmationText.trim()).toContain('Thank you for your purchase!') 
  
})



