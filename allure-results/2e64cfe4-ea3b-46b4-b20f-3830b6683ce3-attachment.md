# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logintest.spec.js >> 8.Add phone to cart
- Location: tests\Logintest.spec.js:82:6

# Error details

```
TypeError: Cannot read properties of undefined (reading 'placeorder')
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "PRODUCT STORE" [ref=e4] [cursor=pointer]:
        - /url: index.html
        - img [ref=e5]
        - text: PRODUCT STORE
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Home (current)" [ref=e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e10]: (current)
        - listitem [ref=e11]:
          - link "Contact" [ref=e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e13]:
          - link "About us" [ref=e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e15]:
          - link "Cart" [ref=e16] [cursor=pointer]:
            - /url: cart.html
        - listitem
        - listitem [ref=e17]:
          - link "Log out" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e19]:
          - link "Welcome reytest56786879890057" [ref=e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=e22]:
    - generic [ref=e25]:
      - list [ref=e26]:
        - listitem [ref=e27] [cursor=pointer]
        - listitem [ref=e28] [cursor=pointer]
        - listitem [ref=e29] [cursor=pointer]
      - link:
        - /url: "#myCarousel-2"
      - link:
        - /url: "#myCarousel-2"
    - generic [ref=e32]:
      - heading "Iphone 6 32gb" [level=2] [ref=e33]
      - separator [ref=e34]
      - heading "$790 *includes tax" [level=3] [ref=e35]
      - separator [ref=e36]
      - generic [ref=e37]:
        - list:
          - listitem
        - generic [ref=e39]:
          - strong [ref=e40]: Product description
          - paragraph [ref=e41]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
      - separator [ref=e42]
      - link "Add to cart" [active] [ref=e45] [cursor=pointer]:
        - /url: "#"
  - generic [ref=e47]:
    - generic [ref=e50]:
      - heading "About Us" [level=4] [ref=e51]
      - paragraph [ref=e52]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e55]:
      - heading "Get in Touch" [level=4] [ref=e56]
      - paragraph [ref=e57]: "Address: 2390 El Camino Real"
      - paragraph [ref=e58]: "Phone: +440 123456"
      - paragraph [ref=e59]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e63]:
      - img [ref=e64]
      - text: PRODUCT STORE
  - contentinfo [ref=e65]:
    - paragraph [ref=e66]: Copyright © Product Store
```

# Test source

```ts
  1   | import { SignupPage } from "../Pages/SignupPage"
  2   | import { LoginPage } from "../Pages/LoginPage"
  3   | import{test,expect} from '@playwright/test'
  4   | import { userData } from "../TestData/userData"
  5   | import { ProductStorePage } from "../Pages/ProductStorePage"
  6   | import { AlertHandler } from "../Utils/AlertHandler"
  7   | import { CartPage } from "../Pages/CartPage"
  8   | 
  9   | let signuppage
  10  | let loginpage
  11  | let productstorepage
  12  | let alerthandler
  13  | let cartpage
  14  | 
  15  | test.beforeEach(async ({ page }) => {
  16  | 
  17  |     signuppage = new SignupPage(page)
  18  |     loginpage = new LoginPage(page)
  19  |     productstorepage=new ProductStorePage(page)
  20  |     alerthandler=new AlertHandler(page)
  21  |     await signuppage.goto()
  22  | 
  23  | })
  24  | 
  25  | test('1. sign up as a new user', async({page})=>
  26  | {
  27  |     
  28  |         await signuppage.signUpEnterCreds(userData.signupusername,userData.signuppassword)
  29  |         await alerthandler.handleAlert('Sign up successful.')
  30  |         await signuppage.signUp()
  31  | })
  32  | /*
  33  | test('2. sign up enter creds and close',async({page})=>
  34  | {
  35  |     const signuppage=new LoginPage(page)
  36  |     await signuppage.goto()
  37  |     await signuppage.signUpEnterCreds(userData.username,userData.password)
  38  |     await signuppage.signUpClose()
  39  | }
  40  | )*/
  41  | test ('3. login using valid credentials', async({page})=>
  42  | {
  43  |  await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
  44  |  await loginpage.clickLogin()
  45  |  await expect(productstorepage.welcometext).toContainText('Welcome')
  46  | })
  47  | 
  48  | test('4. login using incorrect usename', async({page})=>
  49  | {
  50  |     await loginpage.loginWithCreds(userData.logininvalidusername,userData.signuppassword)
  51  |     await alerthandler.handleAlert('User does not exist.')
  52  |     await loginpage.clickLogin()
  53  |      
  54  |  }
  55  | )
  56  | 
  57  | test('5. login using incorrect password', async({page})=>
  58  | {
  59  |     await loginpage.loginWithCreds(userData.signupusername,userData.logininvalidpwd)
  60  |      await alerthandler.handleAlert('Wrong password.')
  61  |     await loginpage.clickLogin()
  62  |  }
  63  | )
  64  | 
  65  | test('6. login using incorrect username and password', async({page})=>
  66  | {
  67  |     await loginpage.loginWithCreds(userData.logininvalidusername,userData.logininvalidpwd)
  68  |     await alerthandler.handleAlert('User does not exist.')
  69  |     await loginpage.clickLogin()
  70  |     
  71  |  }
  72  | )
  73  | 
  74  | test('7.Add any item to cart',async({page})=>
  75  | {
  76  |     await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
  77  |     await loginpage.clickLogin()
  78  |     await productstorepage.addItemToCart('Samsung galaxy s6')
  79  |     await alerthandler.handleAlert('Product is added.')
  80  | })
  81  | 
  82  | test.only('8.Add phone to cart',async({page})=>
  83  | {
  84  |  await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
  85  |  await loginpage.clickLogin()
  86  |  await productstorepage.selectCategory('Phones')
  87  |  await productstorepage.addItemToCart('Iphone 6 32gb') 
> 88  |  await cartpage.placeorder('Iphone 6 32gb')
      |                 ^ TypeError: Cannot read properties of undefined (reading 'placeorder')
  89  | 
  90  | /*
  91  |  const [dialog] = await Promise.all([ 
  92  |         page.waitForEvent('dialog'), 
  93  |         productstorepage.addItemToCart('Iphone 6 32gb') 
  94  |     ])
  95  |  const message= await alerthandler.handleAlert(dialog,'Product added.') 
  96  |  console.log("Alert message is:", message)   */
  97  |  }
  98  | )
  99  | 
  100 | 
  101 | /* const [dialog] = await Promise.all([  //do 2 things at a time. Promise.all returns an array. The dialog object and aundefined(from click)
  102 |         page.waitForEvent('dialog'), //start listening for alert popup
  103 |         loginpage.clickLogin() //this triggers alert
  104 |     ])
  105 |     const message= await alerthandler.handleAlert(dialog,'User does not exist.') //dialog is the alert popup
  106 |     console.log("Alert message is:", message)*/
  107 | 
  108 |     /* incorrect pwd
  109 |      const [dialog] = await Promise.all([  //do 2 things at a time. Promise.all returns an array. The dialog object and aundefined(from click)
  110 |         page.waitForEvent('dialog'), //start listening for alert popup
  111 |         loginpage.clickLogin() //this triggers alert
  112 |     ])
  113 |     const message= await alerthandler.handleAlert(dialog,'Wrong password.') //dialog is the alert popup
  114 |     console.log("Alert message is:", message)
  115 |     */ 
  116 | 
```