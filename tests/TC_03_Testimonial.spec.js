import test from '../testFixtures/fixture';
import {expect} from '@playwright/test';

test.describe("Testimonials Functionality",()=>{
    test("User should be able to navigate to testimonials page",async({loginPage,dashboard,testimonialPage})=>{
        await test.step("Open the application",async()=>{
            await loginPage.openApp();
            await loginPage.waitForPageLoad();
    })
    
    await test.step("Login with valid credentials",async()=>{
      await loginPage.LoginAsUser();
    })
    await test.step("Verify the user is on the dashboard page",async()=>{
        await loginPage.waitForPageLoad();
        const dashboardTitle=await dashboard.verifyDashboardTitle();
        expect( dashboardTitle).toContain("Overview");

})

await test.step("Click on the testimonials link",async()=>{
    await dashboard.clickToggleButton();
    expect(dashboard.testimonials).toBeVisible();
    await dashboard.clickTestimonialsLink();

})
await test.step("Verify the testimonials page is visible",async()=>{
    const testimonialPageHeading = await testimonialPage.verifyTestimonialPage();
    expect(testimonialPageHeading).toContain("Testimonials");
})
    await test.step("Click on the Add Testimonials button",async()=>{
    await testimonialPage.clickAddTestimonialsButton();
    })
})
});
