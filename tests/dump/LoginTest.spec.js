import { test,expect } from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage";
//import {Dashboard} from "../pages/Dashboard";
import {Dashboard} from "../../pages/Dashboard";
import {testUser} from "../../Utils/testData";
import {MenuPage} from "../../pages/MenuPage";
test("user Should Login With Valid Credentials",async({page})=>{
        const loginPage=new LoginPage(page);
        const dashboardPage=new Dashboard(page);
        const menuPage=new MenuPage(page);

        await loginPage.gotoPage();
        await loginPage.Login(testUser.email,testUser.password);
          await page.waitForLoadState('load');
        //verify that user is able to  login successfully by checkin the presence of the dahboard title"overview
        await expect( dashboardPage.title).toBeVisible();
      

        //click on toggle button

        //await dashboardPage.waitForSelector(dashboardPage.toggle);
        await expect(dashboardPage.toggle).toBeVisible();
        await dashboardPage.toggle.click();
        await page.waitForLoadState('load');
        //click on menu link
        await expect(dashboardPage.menuLink).toBeVisible();
        //await dashboardPage.toggle.click();
        await dashboardPage.menuLink.click();

        //click add new category button
        await menuPage.clickAddNewCatgory();

        //Fill the menu details
        await menuPage.fillMenuDetails("Tato tato  choila","handmade yummy choila with fresh ingredeints");
        //clcik browse button the image
        await menuPage.uploadMenuImage();
//Select the image by index
        await menuPage.selectImageByIndex(2);
        await menuPage.clickAddCategory();
        await expect(page.getByText('Category created successfully')).toBeVisible();
        
      
});