# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logintest.spec.js >> 5. login using incorrect password
- Location: tests\Logintest.spec.js:43:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
```

# Test source

```ts
  1  | export class LoginPage{
  2  |     constructor(page){
  3  |         this.page=page
  4  |         this.loginbtn1=page.locator('#login2')
  5  |         this.loginusename=page.locator('#loginusername')
  6  |         this.loginpwd=page.locator('#loginpassword')
  7  |         this.loginbtn2=page.locator("//button[@onclick='logIn()']")
  8  |         this.logoutbtn=page.locator('#logout2')
  9  |     }
  10 | 
  11 |     async loginWithCreds(user,pass)
  12 |     {
  13 |         await this.loginbtn1.click()
> 14 |         await this.loginusename.fill(user)
     |                                 ^ Error: locator.fill: Target page, context or browser has been closed
  15 |         await this.loginpwd.fill(pass)
  16 |        
  17 | 
  18 |     }
  19 |     async clickLogin()
  20 |     {
  21 |         await this.loginbtn2.click()
  22 |     }
  23 | 
  24 |     async logout()
  25 |      {
  26 |         await this.logoutbtn.click()
  27 |      }}
```