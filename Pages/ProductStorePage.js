export class ProductStorePage{
    constructor(page){
        this.page=page
        this.welcometext=page.locator('#nameofuser')
        //this.itemcategory=page.locator(`//a[text()='${selectcategoryname}']`)
        //this.itemproduct=page.locator(`//a[text()='${selectitemname}']`)
        this.itemaddtocart=page.locator("//a[text()='Add to cart']")
    }

    async welcomeMessage()
    {
       const text= await this.welcometext.textContent()
       return text
       //console.log("welcome msg " +text)
    }
    async selectCategory(selectcategoryname)
    {
      await this.page.locator(`//a[text()='${selectcategoryname}']`).click()
    }
   async addItemToCart(selectitemname)
   {
    await this.page.locator(`//a[text()='${selectitemname}']`).click()
    await this.itemaddtocart.click()
    console.log(selectitemname + " is added to cart1")
   }
}