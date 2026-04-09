/*
Scenario 1: Login Fucntionality with valid credentials
Test Steps:
1. Open the application
2. Verify the login page logo is visible
3. Verify the username and password fields are visible
4. Verify the login button is enabled
5. Login with valid credentials

Scenario 2: Login Functionality with invalid credentials
Test Steps:
1. Open the application
2. Verify the login page logo is visible
3. Login with invalid credentials
4. Verify the error message is displayed on login failure
*/
import test from "../testFixtures/fixture";
import {expect } from "@playwright/test";
//import { LoginPage } from "../pages/LoginPage";

test.describe("Login Functionality",()=>{

test("user Should Login With Valid Credentials",async({loginPage})=>{
  await test.step("Open the application", async()=>{

 await  loginPage.openApp();
  await loginPage.waitForPageLoad();
  })
  await test.step("Verify the login page logo",async()=>{
    await loginPage.verifyLogo();
  })
  await test.step("Verify the useraname and password fields are visible",async()=>{
    await loginPage.verifyUsernameField();
    await loginPage.verifyPasswordField();
  })

  await test.step(
				`Verify Login button is enabled`,
				async () => {
					await loginPage.loginButtonIsEnabled()
				}
			)
  await test.step("Login with valid credentials",async()=>{
    await loginPage.LoginAsUser();
  });
});
});

test.describe.only("Negative Login Functionality",()=>{
  test("User should not login with invalid credentials",async({loginPage})=>{
  await test.step("Open the website",async()=>{
    await loginPage.openApp();
    await loginPage.waitForPageLoad();

    })
  await test .step("Verify the page is loaded and website logo is visible",async()=>{
    await loginPage.verifyLogo();
  })
  test.step("Login with invalid credentials",async()=>{
    await loginPage.LoginWithInvalidCredentials();
  })
  await test.step('user should see error message on login failure',async()=>{
    await loginPage.verifyErrorMessage();
});
  });
});
































