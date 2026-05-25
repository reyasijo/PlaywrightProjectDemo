# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logintest.spec.js >> login using incorrect usename
- Location: tests\Logintest.spec.js:48:6

# Error details

```
TypeError: Cannot read properties of undefined (reading 'AlertHandler')
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog "Log in" [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Log in" [level=5] [ref=e6]
          - button "Close" [ref=e7] [cursor=pointer]: ×
        - generic [ref=e9]:
          - generic [ref=e10]:
            - generic [ref=e11]: "Username:"
            - textbox [ref=e12]: gjgj
          - generic [ref=e13]:
            - generic [ref=e14]: "Password:"
            - textbox [ref=e15]: dgfdfghgfjhkk
        - generic [ref=e17]:
          - button "Close" [ref=e18]
          - button "Log in" [active] [ref=e19]
  - text:             
  - navigation [ref=e20]:
    - link "PRODUCT STORE" [ref=e21] [cursor=pointer]:
      - /url: index.html
      - img [ref=e22]
      - text: PRODUCT STORE
    - list [ref=e24]:
      - listitem [ref=e25]:
        - link "Home (current)" [ref=e26] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e27]: (current)
      - listitem [ref=e28]:
        - link "Contact" [ref=e29] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e30]:
        - link "About us" [ref=e31] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e32]:
        - link "Cart" [ref=e33] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e34]:
        - link "Log in" [ref=e35] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e36]:
        - link "Sign up" [ref=e37] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e39]:
      - list [ref=e40]:
        - listitem [ref=e41] [cursor=pointer]
        - listitem [ref=e42] [cursor=pointer]
        - listitem [ref=e43] [cursor=pointer]
      - generic [ref=e44]:
        - img "First slide" [ref=e46]
        - img "Second slide" [ref=e48]
      - button "Previous" [ref=e49] [cursor=pointer]:
        - generic [ref=e51]: Previous
      - button "Next" [ref=e52] [cursor=pointer]:
        - generic [ref=e54]: Next
  - generic [ref=e56]:
    - generic [ref=e58]:
      - link "CATEGORIES" [ref=e59] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e60] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e61] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e62] [cursor=pointer]:
        - /url: "#"
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e66]:
          - link [ref=e67] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=e68]:
            - heading "Samsung galaxy s6" [level=4] [ref=e69]:
              - link "Samsung galaxy s6" [ref=e70] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=e71]
            - paragraph [ref=e72]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=e74]:
          - link [ref=e75] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=e76]:
            - heading "Nokia lumia 1520" [level=4] [ref=e77]:
              - link "Nokia lumia 1520" [ref=e78] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=e79]
            - paragraph [ref=e80]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=e82]:
          - link [ref=e83] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=e84]:
            - heading "Nexus 6" [level=4] [ref=e85]:
              - link "Nexus 6" [ref=e86] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=e87]
            - paragraph [ref=e88]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=e90]:
          - link [ref=e91] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=e92]:
            - heading "Samsung galaxy s7" [level=4] [ref=e93]:
              - link "Samsung galaxy s7" [ref=e94] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=e95]
            - paragraph [ref=e96]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=e98]:
          - link [ref=e99] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=e100]:
            - heading "Iphone 6 32gb" [level=4] [ref=e101]:
              - link "Iphone 6 32gb" [ref=e102] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=e103]
            - paragraph [ref=e104]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=e106]:
          - link [ref=e107] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=e108]:
            - heading "Sony xperia z5" [level=4] [ref=e109]:
              - link "Sony xperia z5" [ref=e110] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=e111]
            - paragraph [ref=e112]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=e114]:
          - link [ref=e115] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=e116]:
            - heading "HTC One M9" [level=4] [ref=e117]:
              - link "HTC One M9" [ref=e118] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=e119]
            - paragraph [ref=e120]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
        - generic [ref=e122]:
          - link [ref=e123] [cursor=pointer]:
            - /url: prod.html?idp_=8
          - generic [ref=e124]:
            - heading "Sony vaio i5" [level=4] [ref=e125]:
              - link "Sony vaio i5" [ref=e126] [cursor=pointer]:
                - /url: prod.html?idp_=8
            - heading "$790" [level=5] [ref=e127]
            - paragraph [ref=e128]: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
        - generic [ref=e130]:
          - link [ref=e131] [cursor=pointer]:
            - /url: prod.html?idp_=9
          - generic [ref=e132]:
            - heading "Sony vaio i7" [level=4] [ref=e133]:
              - link "Sony vaio i7" [ref=e134] [cursor=pointer]:
                - /url: prod.html?idp_=9
            - heading "$790" [level=5] [ref=e135]
            - paragraph [ref=e136]: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
      - list [ref=e138]:
        - listitem [ref=e139]:
          - button "Previous" [ref=e140]
        - listitem [ref=e141]:
          - button "Next" [ref=e142] [cursor=pointer]
  - generic [ref=e144]:
    - generic [ref=e147]:
      - heading "About Us" [level=4] [ref=e148]
      - paragraph [ref=e149]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e152]:
      - heading "Get in Touch" [level=4] [ref=e153]
      - paragraph [ref=e154]: "Address: 2390 El Camino Real"
      - paragraph [ref=e155]: "Phone: +440 123456"
      - paragraph [ref=e156]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e160]:
      - img [ref=e161]
      - text: PRODUCT STORE
  - contentinfo [ref=e162]:
    - paragraph [ref=e163]: Copyright © Product Store
```

# Test source

```ts
  1  | import { SignupPage } from "../Pages/SignupPage"
  2  | import { LoginPage } from "../Pages/LoginPage"
  3  | import{test,expect} from '@playwright/test'
  4  | import { userData } from "../TestData/userData"
  5  | import { ProductStorePage } from "../Pages/ProductStorePage"
  6  | import { AlertHandler } from "../Utils/AlertHandler"
  7  | let signuppage
  8  | let loginpage
  9  | let productstorepage
  10 | let alerthandler
  11 | 
  12 | test.beforeEach(async ({ page }) => {
  13 | 
  14 |     signuppage = new SignupPage(page)
  15 |     loginpage = new LoginPage(page)
  16 |     productstorepage=new ProductStorePage(page)
  17 |     await signuppage.goto()
  18 | 
  19 | })
  20 | 
  21 | test('sign up as a new user', async({page})=>
  22 | {
  23 |     await signuppage.signUpEnterCreds(userData.signupusername,userData.signuppassword)
  24 |     //Handling the alert on Signup action
  25 |     const waitforalert = page.waitForEvent('dialog') //waitis for alert
  26 |     await signuppage.signUp()
  27 |     const dialog = await waitforalert //wait until alert appears
  28 |     console.log("Alert message is:", dialog.message())
  29 |     expect(dialog.message()).toBe('Sign up successful.')
  30 |     await dialog.accept()
  31 | })
  32 | /*
  33 | test('sign up enter creds and close',async({page})=>
  34 | {
  35 |     const signuppage=new LoginPage(page)
  36 |     await signuppage.goto()
  37 |     await signuppage.signUpEnterCreds(userData.username,userData.password)
  38 |     await signuppage.signUpClose()
  39 | }
  40 | )*/
  41 | test('login using valid credentials', async({page})=>
  42 | {
  43 |  await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
  44 |  await loginpage.clickLogin()
  45 |  await expect(productstorepage.welcometext).toContainText('Welcome')
  46 | })
  47 | 
  48 | test.only('login using incorrect usename', async({page})=>
  49 | {
  50 |     await loginpage.loginWithCreds(userData.logininvalidusername,userData.signuppassword)
  51 |  // const waitforalert = page.waitForEvent('dialog') //prepare to catch alert
  52 |     await loginpage.clickLogin()
> 53 |     const message= await alerthandler.AlertHandler('Wrong password.')
     |                                       ^ TypeError: Cannot read properties of undefined (reading 'AlertHandler')
  54 |  // const dialog = await waitforalert //wait until alert appears
  55 |  // console.log("Alert message is:", dialog.message())
  56 |   //await expect(dialog.message()).toBe('Wrong password.')
  57 |   //await dialog.accept()
  58 | }
  59 | )
  60 | 
```