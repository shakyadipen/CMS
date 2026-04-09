
import { baseUrl } from "../config";
import BasePage from "../Pages/basePage";

import fs from "fs";

// import
//  { loginPageLogo,
//      websiteIdInput, 
//      passwordInput, 
//      rememberMeCheckbox, 
//      forgotPasswordLink, 
//      signInButton, 
//      errorLoginMessage,
//      loginButton } from "../PageObjects/loginPage";

const testData=JSON.parse(fs.readFileSync('./data/users.json'));
class LoginPage extends BasePage{
    constructor(page){
        super(page);
        this.loginPageLogo="text=Nexora Site Manager";
        this.websiteIdInput="input[name='website_id']";
        this.passwordInput=" #password";
        this.rememberMeCheckbox="#rememberMe";
        this.forgotPasswordLink="text=Forgot password?";
        this.signInButton="button:has-text('Sign in')";
        this.loginButton="button[type='submit']";
        this.errorLoginMessage="text=Invalid identifier or password";
        

    }

    async openApp(){
        await super.open(baseUrl);
      //  return await super.waitForPageLoad();
    }
    async verifyLogo(){
        return await this.isElementVisible(this.loginPageLogo, testData.notVisibleText)
    }
    async verifyUsernameField(){
        return await this.isElementVisible(this.websiteIdInput, testData.notVisibleText)
    }
     async verifyPasswordField(){
        return await this.isElementVisible(this.passwordInput, testData.notVisibleText)
    }
    async visibleSignInButton(){
        return await this.isElementVisible(this.signInButton, testData.notVisibleText)
    }
    async loginButtonIsEnabled(){
        await this.isElementEnabled(this.loginButton, testData.notEnabledText)
    }
    async LoginAsUser(){     
        await this.waitAndFill(this.websiteIdInput,testData.websiteID);
        await this.waitAndFill(this.passwordInput,testData.password);
        await this.waitAndClick(this.signInButton);
    }
    async LoginWithInvalidCredentials(){
        await this.waitAndFill(this.websiteIdInput,testData.problemWebisteID);
        await this.waitAndFill(this.passwordInput,testData.password);
        await this.waitAndClick(this.signInButton);
    
    }
    async verifyErrorMessage(){
        return await this.isElementVisible(this.errorLoginMessage, testData.notVisibleText)
    }
}
export default LoginPage;