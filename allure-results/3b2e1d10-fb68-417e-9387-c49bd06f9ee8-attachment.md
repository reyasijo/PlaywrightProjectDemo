# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logintest.spec.js >> login using valid credentials
- Location: tests\Logintest.spec.js:38:6

# Error details

```
Error: page.title: Test ended.
```

# Test source

```ts
  1  | import { SignupPage } from "../Pages/SignupPage"
  2  | import { LoginPage } from "../Pages/LoginPage"
  3  | import{test,expect} from '@playwright/test'
  4  | import { userData } from "../TestData/userData"
  5  | let signuppage
  6  | let loginpage
  7  | 
  8  | test.beforeEach(async ({ page }) => {
  9  | 
  10 |     signuppage = new SignupPage(page)
  11 |     loginpage = new LoginPage(page)
  12 |     await signuppage.goto()
  13 | 
  14 | })
  15 | 
  16 | test('sign up as a new user', async({page})=>
  17 | {
  18 |    // signuppage=new SignupPage(page)
  19 |    // await signuppage.goto()
  20 |     await signuppage.signUpEnterCreds(userData.signupusername,userData.signuppassword)
  21 |     //Handling the alert on Signup action
  22 |     const waitforalert = page.waitForEvent('dialog') //waitis for alert
  23 |     await signuppage.signUp()
  24 |     const dialog = await waitforalert //wait until alert appears
  25 |     console.log("Alert message is:", dialog.message())
  26 |     expect(dialog.message()).toBe('Sign up successful.')
  27 |     await dialog.accept()
  28 | })
  29 | 
  30 | test('sign up enter creds and close',async({page})=>
  31 | {
  32 |     const signuppage=new LoginPage(page)
  33 |     await signuppage.goto()
  34 |     await signuppage.signUpEnterCreds(userData.username,userData.password)
  35 |     await signuppage.signUpClose()
  36 | }
  37 | )
  38 | test.only('login using valid credentials', async({page})=>
  39 | {
  40 |  await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
> 41 |  await console.log("title is "+page.title())
     |                                     ^ Error: page.title: Test ended.
  42 | }
  43 | )
```