# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logintest.spec.js >> 10. login using valid credentials and then logout
- Location: tests\Logintest.spec.js:61:6

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "STOREstore"
Received: "STORE"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "STORE"

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "Second slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- link:
  - /url: prod.html?idp_=1
- heading "Samsung galaxy s6" [level=4]:
  - link "Samsung galaxy s6":
    - /url: prod.html?idp_=1
- heading "$360" [level=5]
- paragraph: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
- link:
  - /url: prod.html?idp_=2
- heading "Nokia lumia 1520" [level=4]:
  - link "Nokia lumia 1520":
    - /url: prod.html?idp_=2
- heading "$820" [level=5]
- paragraph: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
- link:
  - /url: prod.html?idp_=3
- heading "Nexus 6" [level=4]:
  - link "Nexus 6":
    - /url: prod.html?idp_=3
- heading "$650" [level=5]
- paragraph: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
- link:
  - /url: prod.html?idp_=4
- heading "Samsung galaxy s7" [level=4]:
  - link "Samsung galaxy s7":
    - /url: prod.html?idp_=4
- heading "$800" [level=5]
- paragraph: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
- link:
  - /url: prod.html?idp_=5
- heading "Iphone 6 32gb" [level=4]:
  - link "Iphone 6 32gb":
    - /url: prod.html?idp_=5
- heading "$790" [level=5]
- paragraph: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
- link:
  - /url: prod.html?idp_=6
- heading "Sony xperia z5" [level=4]:
  - link "Sony xperia z5":
    - /url: prod.html?idp_=6
- heading "$320" [level=5]
- paragraph: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
- link:
  - /url: prod.html?idp_=7
- heading "HTC One M9" [level=4]:
  - link "HTC One M9":
    - /url: prod.html?idp_=7
- heading "$700" [level=5]
- paragraph: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
- link:
  - /url: prod.html?idp_=8
- heading "Sony vaio i5" [level=4]:
  - link "Sony vaio i5":
    - /url: prod.html?idp_=8
- heading "$790" [level=5]
- paragraph: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
- link:
  - /url: prod.html?idp_=9
- heading "Sony vaio i7" [level=4]:
  - link "Sony vaio i7":
    - /url: prod.html?idp_=9
- heading "$790" [level=5]
- paragraph: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | import { SignupPage } from "../Pages/SignupPage"
  2  | import { LoginPage } from "../Pages/LoginPage"
  3  | import{test,expect} from '@playwright/test'
  4  | import { userData } from "../TestData/userData"
  5  | import { ProductStorePage } from "../Pages/ProductStorePage"
  6  | import { AlertHandler } from "../Utils/AlertHandler"
  7  | import { CartPage } from "../Pages/CartPage"
  8  | 
  9  | let signuppage
  10 | let loginpage
  11 | let productstorepage
  12 | let alerthandler
  13 | let cartpage
  14 | 
  15 | test.beforeEach(async ({ page }) => {
  16 | 
  17 |     signuppage = new SignupPage(page)
  18 |     loginpage = new LoginPage(page)
  19 |     productstorepage=new ProductStorePage(page)
  20 |     alerthandler=new AlertHandler(page)
  21 |     cartpage=new CartPage(page)
  22 |     await signuppage.goto()
  23 | 
  24 | })
  25 | 
  26 | test('3. login using valid credentials', async({page})=>
  27 | {
  28 |  await loginpage.loginWithCreds(userData.loginvalidusername,userData.loginvalidpassword)
  29 |  await loginpage.clickLogin()
  30 |  const welcomemsg= await productstorepage.welcomeMessage()
  31 |  console.log(welcomemsg)
  32 |  await expect(welcomemsg).toContain('Welcome')
  33 | })
  34 | 
  35 | test('4. login using incorrect usename', async({page})=>
  36 | {
  37 |     await loginpage.loginWithCreds(userData.logininvalidusername,userData.signuppassword)
  38 |     await alerthandler.handleAlert('User does not exist.')
  39 |     await loginpage.clickLogin() 
  40 |  }
  41 | )
  42 | 
  43 | test('5. login using incorrect password', async({page})=>
  44 | {
  45 |     //assertion given in alert handler
  46 |     await loginpage.loginWithCreds(userData.signupusername,userData.logininvalidpwd)
  47 |      await alerthandler.handleAlert('Wrong password.')
  48 |     await loginpage.clickLogin()
  49 |  }
  50 | )
  51 | 
  52 | test('6. login using incorrect username and password', async({page})=>
  53 | {
  54 |     //assertion given in alert handler
  55 |     await loginpage.loginWithCreds(userData.logininvalidusername,userData.logininvalidpwd)
  56 |     await alerthandler.handleAlert('User does not exist.')
  57 |     await loginpage.clickLogin()
  58 | }
  59 | )
  60 | 
  61 | test.only('10. login using valid credentials and then logout', async({page})=>
  62 | { 
  63 |  await loginpage.loginWithCreds(userData.loginvalidusername,userData.loginvalidpassword)
  64 |  await loginpage.clickLogin()
  65 |  await loginpage.logout()
> 66 |  await expect(page).toHaveTitle('STOREstore')
     |                     ^ Error: expect(page).toHaveTitle(expected) failed
  67 | 
  68 | })
  69 | 
  70 | 
  71 | 
  72 |  
  73 | 
  74 | 
```