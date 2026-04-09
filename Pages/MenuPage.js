import BasePage from "../Pages/BasePage";
import { expect } from "@playwright/test";
import fs from "fs";

const testData=JSON.parse(fs.readFileSync('./data/users.json'));
class MenuPage extends BasePage{
    constructor(page){
        super(page);
        
       this.menuPageVerify=page.getByRole('heading', { name: 'Menu' });
       this.addNewCategoryButton=page.getByRole('button', { name: 'Add New Category' });
       this.categoryTitleInput=page.getByRole('textbox', { name: 'Title' });
       this.categoryDescriptionInput=page.getByRole('textbox', { name: 'Description' });
       this.browseUploadButton=page.getByRole('button', { name: 'Browse' });
       this.selectCheckBox=page.getByRole('checkbox', { name: 'Select' });
        this.checkboxes = page.locator('input[type="checkbox"]');
        this.clickApply=page.getByRole('button', { name: 'Apply' });
        this.clickAddCategoryButton=page.getByRole('button', { name: 'Add Category' });
        
        this.verifyAddedCategory=page.getByText(testData.menuCategory,{exact:true});
        this.verticalMenuButton=page.locator("#category-options-button");
          this.deleteCategory=page.getByRole('menuitem', { name: 'Delete' });
        this.cancelButton=page.getByRole('button', { name: 'Cancel' });
        this.DeleteButton=page.getByRole('button', { name: 'Delete' });
       
    }
    // async verifyMenuPage(){
    //    // expect(this.isElementVisible(this.menuPageVerify, "Menu page is not visible"));
    //    expect(this.menuPageVerify).toBeVisible();
    // }

    async clickAddNewCatgory(){
       // await this.clickElement(this.addNewCategoryButton, "Add New Category button is not visible");
        await this.addNewCategoryButton.click();
    }
    async fillMenuDetails(){
        await this.categoryTitleInput.fill(testData.menuCategory);
        
        await this.categoryDescriptionInput.fill(testData.menuDescription);
    }
    async uploadMenuImage(){
        await this.browseUploadButton.click();
       // await this.page.setInputFiles('input[type="file"]',imagePath);
    }
     async selectImageByIndex(index) {
    await this.checkboxes.nth(index).check();
    await this.clickApply.click();
  }
  async clickAddCategory(){
    await this.page.waitForLoadState('load');
    await this.clickAddCategoryButton.click();
  }
  async verifyAddedCategoryIsDisplayed(){
   
    const category = this.verifyAddedCategory; 
     return await category.textContent();
    //return await this.isElementVisible(this.verifyAddedCategory, "Added category is not visible");
}
async clickVerticalMenuButton(){
    await this.verticalMenuButton.last().click();
}
async clickDeleteCategory(){
    await this.deleteCategory.click();}
    async clickDeleteButton(){
        await this.DeleteButton.click();
    }
}
export default MenuPage;