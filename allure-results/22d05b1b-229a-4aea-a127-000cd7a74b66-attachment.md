# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PurchaseItemTest.spec.js >> 9.Purchase Monitor
- Location: tests\PurchaseItemTest.spec.js:40:9

# Error details

```
ReferenceError: signuppage is not defined
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test'
  2  | import { SignupPage } from '../Pages/SignupPage'
  3  | import { LoginPage } from '../Pages/LoginPage'
  4  | import { ProductStorePage } from '../Pages/ProductStorePage'
  5  | import { AlertHandler } from '../Utils/AlertHandler'
  6  | import { CartPage } from '../Pages/CartPage'
  7  | import { userData } from '../TestData/userData'
  8  | 
  9  | 
  10 | test.beforeEach(async ({ page }) => {
> 11 |     signuppage = new SignupPage(page)
     |               ^ ReferenceError: signuppage is not defined
  12 |     loginpage = new LoginPage(page)
  13 |     productstorepage=new ProductStorePage(page)
  14 |     alerthandler=new AlertHandler(page)
  15 |     cartpage=new CartPage(page)
  16 |     await signuppage.goto()
  17 | 
  18 | })
  19 | test('7.Add any item to cart',async({page})=>
  20 | {
  21 |   
  22 |      await loginpage.loginWithCreds(userData.loginvalidusername,userData.loginvalidpassword)
  23 |      await loginpage.clickLogin()
  24 |      await productstorepage.addItemToCart('Samsung galaxy s6')
  25 |      await alerthandler.handleAlert('Product is added.')
  26 | })
  27 |     
  28 | test('8.Purchase Phone',async({page})=>
  29 | {
  30 |  await loginpage.loginWithCreds(userData.loginvalidusername,userData.loginvalidpassword)
  31 |  await loginpage.clickLogin()
  32 |  await productstorepage.selectCategory('Phones')
  33 |  await alerthandler.handleAlert('Product added.')
  34 |  await productstorepage.addItemToCart('Iphone 6 32gb') 
  35 |  await alerthandler.handleAlert('Product added.')
  36 |  await cartpage.placeorder('Iphone 6 32gb')
  37 | 
  38 |  })
  39 | 
  40 |     test('9.Purchase Monitor',async({page})=> 
  41 | {
  42 |  await loginpage.loginWithCreds(userData.logininvalidusername,userData.logininvalidpassword)
  43 |  await loginpage.clickLogin()               
  44 |     await productstorepage.selectCategory('Monitors')
  45 |     await alerthandler.handleAlert('Product added.')
  46 |      await productstorepage.addItemToCart('Apple monitor 24')
  47 |     await alerthandler.handleAlert('Product added.')
  48 |     await cartpage.placeorder('Apple monitor 24')
  49 | })
  50 | 
  51 | 
  52 | 
  53 | 
```