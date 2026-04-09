/*
Scenario :Add Category Functionality
Test Steps:
Step 1:Open the application
Step 2:Login with valid credentials
Step3:Verify the user is on the dashboard page
Step 4:Click on the menu icon
Step 5:Click on the "Add Category" button
Step 6:Verify the "Add Category" form is displayed
Step 7:Fill the category details and submit the form
Step 8:Verify the category is addded successfully
*/
import test from "../testFixtures/fixture";
import {expect } from "@playwright/test";

import fs from "fs";

const testData=JSON.parse(fs.readFileSync('./data/users.json'));
test.describe("Add Category Functionality",()=>{
  test("User should be able to add Menu category",async({loginPage,dashboard,menuPage})=>{
    await test.step("Open the application",async()=>{
    await loginPage.openApp();
    await loginPage.waitForPageLoad();

    })
    await test.step("Login with valid credentials",async()=>{
      await loginPage.LoginAsUser();
    })
    await test.step("Verify the user is on the dashboard page",async()=>{
      //await loginPage.verifyDashboardPage();
      await loginPage.waitForPageLoad();
      const dashboardTitle=await dashboard.verifyDashboardTitle();
      await expect( dashboardTitle).toContain("Overview");
     
    })
    await test.step('Click on the menu icon',async()=>{
      //await loginPage.waitForPageLoad();
      //expect(dashboard.toggleButton).toBeVisible();
      await dashboard.clickToggleButton();
      //await dashboard.clickElement(dashboard.toggleButton, "Toggle button is not visible");
      await expect(dashboard.menuButton).toBeVisible();
      await dashboard.clickMenuLink();
    })
    await test.step("click on Add category button",async()=>{
     // await dashboard.waitForPageLoad();
     //await menuPage.verifyMenuPage();
      await menuPage.clickAddNewCatgory();

  })
  await test.step("Fill the category details",async()=>{
    await menuPage.fillMenuDetails();
    await menuPage.uploadMenuImage();
    await menuPage.selectImageByIndex(0);
    await menuPage.clickAddCategory();
  })
  await test.step("Verify the category is added and verified successfully",async()=>{
    
    const isCategoryAdded=await menuPage.verifyAddedCategoryIsDisplayed();
    //await expect(menuPage.verifyAddedCategoryIsDisplayed).toBeVisible();
    //await menuPage.page.waitForLoadState('load');
    await expect(isCategoryAdded).toContain(testData.menuCategory);
  })
})
});

test.describe("Delete Category Functionality",()=>{
  test("User should be able to delete the category",async({loginPage,dashboard,menuPage})=>{
    await test.step("Open the application",async()=>{
    await loginPage.openApp();
    await loginPage.waitForPageLoad();
  })
  await test.step("Login with valid credentials",async()=>{
  await loginPage.LoginAsUser();
  })
  await test.step("Verify the user is on the dashboard page",async()=>{
  // await loginPage.waitForPageLoad();
  const dashboardTitle=await dashboard.verifyDashboardTitle();
  await expect( dashboardTitle).toContain("Overview");
  })
  await test.step("Click on the menu icon",async()=>{
  await dashboard.clickToggleButton();
 await expect(dashboard.menuButton).toBeVisible();
  await dashboard.clickMenuLink();
  })
  await test.step("Delete the added category",async()=>{
    await menuPage.clickVerticalMenuButton();
    await menuPage.clickDeleteCategory();
    await menuPage.clickDeleteButton();
    await expect(menuPage.verifyAddedCategory).not.toBeVisible();

  })
})
});