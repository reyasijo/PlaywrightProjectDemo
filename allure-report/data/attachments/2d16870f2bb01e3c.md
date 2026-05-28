# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logintest.spec.js >> login using incorrect usename
- Location: tests\Logintest.spec.js:46:6

# Error details

```
Error: toContainText can be only used with Locator object, was called with Wrong password.
```

# Test source

```ts
  1  | import { SignupPage } from "../Pages/SignupPage"
  2  | import { LoginPage } from "../Pages/LoginPage"
  3  | import{test,expect} from '@playwright/test'
  4  | import { userData } from "../TestData/userData"
  5  | import { ProductStorePage } from "../Pages/ProductStorePage"
  6  | let signuppage
  7  | let loginpage
  8  | let productstorepage
  9  | 
  10 | test.beforeEach(async ({ page }) => {
  11 | 
  12 |     signuppage = new SignupPage(page)
  13 |     loginpage = new LoginPage(page)
  14 |     productstorepage=new ProductStorePage(page)
  15 |     await signuppage.goto()
  16 | 
  17 | })
  18 | 
  19 | test('sign up as a new user', async({page})=>
  20 | {
  21 |     await signuppage.signUpEnterCreds(userData.signupusername,userData.signuppassword)
  22 |     //Handling the alert on Signup action
  23 |     const waitforalert = page.waitForEvent('dialog') //waitis for alert
  24 |     await signuppage.signUp()
  25 |     const dialog = await waitforalert //wait until alert appears
  26 |     console.log("Alert message is:", dialog.message())
  27 |     expect(dialog.message()).toBe('Sign up successful.')
  28 |     await dialog.accept()
  29 | })
  30 | /*
  31 | test('sign up enter creds and close',async({page})=>
  32 | {
  33 |     const signuppage=new LoginPage(page)
  34 |     await signuppage.goto()
  35 |     await signuppage.signUpEnterCreds(userData.username,userData.password)
  36 |     await signuppage.signUpClose()
  37 | }
  38 | )*/
  39 | test('login using valid credentials', async({page})=>
  40 | {
  41 |  await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
  42 |  await loginpage.clickLogin()
  43 |  await expect(productstorepage.welcometext).toContainText('Welcome')
  44 | })
  45 | 
  46 | test.only('login using incorrect usename', async({page})=>
  47 | {
  48 |     await loginpage.loginWithCreds(userData.logininvalidusername,userData.signuppassword)
  49 |     const waitforalert = page.waitForEvent('dialog') //prepare to catch alert
  50 |     await loginpage.clickLogin()
  51 |     const dialog = await waitforalert //wait until alert appears
  52 |     console.log("Alert message is:", dialog.message())
> 53 |     await expect(dialog.message()).toContainText(' Wrong password.')
     |                                    ^ Error: toContainText can be only used with Locator object, was called with Wrong password.
  54 |     await dialog.accept()
  55 | }
  56 | )
  57 | 
```