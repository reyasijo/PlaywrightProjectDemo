export class ProductStorePage{
    constructor(page){
        this.page=page
        this.welcometext=page.locator('#nameofuser')
        this.phonecategory=page.locator("//a[text()='Phones']")
        this.itemaddtocart=page.locator("//a[text()='Add to cart']")
    }

    async welcomeMessage()
    {
       const text= await this.welcometext.textContent()
       //console.log("welcome msg " +text)
    }

   async addItemToCart(selectitemname)
   {
    await this.page.locator(`//a[text()='${selectitemname}']`).click()
    await this.itemaddtocart.click()
    console.log(selectitemname + " is added to cart1")
   }
}