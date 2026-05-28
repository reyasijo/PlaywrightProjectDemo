# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logintest.spec.js >> 1. sign up as a new user
- Location: tests\Logintest.spec.js:22:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Signe up successful."
Received: "Sign up successful."
```

# Test source

```ts
  1   | import { SignupPage } from "../Pages/SignupPage"
  2   | import { LoginPage } from "../Pages/LoginPage"
  3   | import{test,expect} from '@playwright/test'
  4   | import { userData } from "../TestData/userData"
  5   | import { ProductStorePage } from "../Pages/ProductStorePage"
  6   | import { AlertHandler } from "../Utils/AlertHandler"
  7   | let signuppage
  8   | let loginpage
  9   | let productstorepage
  10  | let alerthandler
  11  | 
  12  | test.beforeEach(async ({ page }) => {
  13  | 
  14  |     signuppage = new SignupPage(page)
  15  |     loginpage = new LoginPage(page)
  16  |     productstorepage=new ProductStorePage(page)
  17  |     alerthandler=new AlertHandler(page)
  18  |     await signuppage.goto()
  19  | 
  20  | })
  21  | 
  22  | test.only('1. sign up as a new user', async({page})=>
  23  | {
  24  |     /*
  25  |     await signuppage.signUpEnterCreds(userData.signupusername,userData.signuppassword)
  26  |     const [dialog] = await Promise.all([  
  27  |         page.waitForEvent('dialog'), 
  28  |         signuppage.signUp()])
  29  |         const message= await alerthandler.handleAlert(dialog,'Sign up successful.') //dialog is the alert popup
  30  |         console.log("Alert message is:", message) */
  31  |        await signuppage.signUpEnterCreds(userData.signupusername,userData.signuppassword)
  32  |        page.on('dialog', async dialog=>{
> 33  |         expect(dialog.message()).toBe('Signe up successful.') 
      |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  34  |         await dialog.accept()
  35  |        })
  36  |       await signuppage.signUp()
  37  | })
  38  | /*
  39  | test('2. sign up enter creds and close',async({page})=>
  40  | {
  41  |     const signuppage=new LoginPage(page)
  42  |     await signuppage.goto()
  43  |     await signuppage.signUpEnterCreds(userData.username,userData.password)
  44  |     await signuppage.signUpClose()
  45  | }
  46  | )*/
  47  | test ('3. login using valid credentials', async({page})=>
  48  | {
  49  |  await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
  50  |  await loginpage.clickLogin()
  51  |  await expect(productstorepage.welcometext).toContainText('Welcome')
  52  | })
  53  | 
  54  | test('4. login using incorrect usename', async({page})=>
  55  | {
  56  |     await loginpage.loginWithCreds(userData.logininvalidusername,userData.signuppassword)
  57  |       const [dialog] = await Promise.all([  //do 2 things at a time. Promise.all returns an array. The dialog object and aundefined(from click)
  58  |         page.waitForEvent('dialog'), //start listening for alert popup
  59  |         loginpage.clickLogin() //this triggers alert
  60  |     ])
  61  |     const message= await alerthandler.handleAlert(dialog,'User does not exist.') //dialog is the alert popup
  62  |     console.log("Alert message is:", message)
  63  |  }
  64  | )
  65  | 
  66  | test('5. login using incorrect password', async({page})=>
  67  | {
  68  |     await loginpage.loginWithCreds(userData.signupusername,userData.logininvalidpwd)
  69  |       const [dialog] = await Promise.all([  //do 2 things at a time. Promise.all returns an array. The dialog object and aundefined(from click)
  70  |         page.waitForEvent('dialog'), //start listening for alert popup
  71  |         loginpage.clickLogin() //this triggers alert
  72  |     ])
  73  |     const message= await alerthandler.handleAlert(dialog,'Wrong password.') //dialog is the alert popup
  74  |     console.log("Alert message is:", message)
  75  |  }
  76  | )
  77  | 
  78  | test('6. login using incorrect username and password', async({page})=>
  79  | {
  80  |     await loginpage.loginWithCreds(userData.logininvalidusername,userData.logininvalidpwd)
  81  |       const [dialog] = await Promise.all([ 
  82  |         page.waitForEvent('dialog'), 
  83  |         loginpage.clickLogin() 
  84  |     ])
  85  |     const message= await alerthandler.handleAlert(dialog,'User does not exist.') //dialog is the alert popup
  86  |     console.log("Alert message is:", message)
  87  |  }
  88  | )
  89  | 
  90  | test('7.Add any item to cart',async({page})=>
  91  | {
  92  |  await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
  93  |  await loginpage.clickLogin()
  94  |  await productstorepage.addItemToCart('Nokia lumia 1520')
  95  |  /*const [dialog] = await Promise.all([ 
  96  |         page.waitForEvent('dialog'), 
  97  |         productstorepage.addItemToCart('Nokia lumia 1520') 
  98  |     ])
  99  |  const message= await alerthandler.handleAlert(dialog,'Product added.') 
  100 |  console.log("Alert message is:", message)   */
  101 |  })
  102 | 
  103 | test('8.Add phone to cart',async({page})=>
  104 | {
  105 |  await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
  106 |  await loginpage.clickLogin()
  107 |  const [dialog] = await Promise.all([ 
  108 |         page.waitForEvent('dialog'), 
  109 |         productstorepage.addItemToCart('Iphone 6 32gb') 
  110 |     ])
  111 |  const message= await alerthandler.handleAlert(dialog,'Product added.') 
  112 |  console.log("Alert message is:", message)   
  113 |  }
  114 | )
  115 | 
```