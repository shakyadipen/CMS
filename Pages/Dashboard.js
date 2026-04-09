
import BasePage from "./basePage";
// import { dashboardTitle,
//     menuButton } from "../PageObjects/dashboard";

class Dashboard extends BasePage{
        constructor(page){
            super(page);
            this.dashboardTitle="text=Overview";
           this.toggleButton=page.getByTitle('Toggle Sidebar');
          // this.toggleButton= page.locator('button[data-sidebar="rail"]');
            this.menuButton=page.getByRole('link', { name: 'Menu' });
            this.DashboardButton="text=Dashboard";
            this.WebsitePreviewButton="text=Website Preview";
            this.PagesButton="text=Pages";
            this.Leads="text=Leads";
            this.testimonials=page.getByRole('link',{name:'Testimonials'});

//             await page.getByTitle('Toggle Sidebar').click();
//   await page.getByRole('link', { name: 'Menu' }).click();

        }

        async verifyDashboardPage(){
            return await this.isElementVisible(this.dashboardTitle, "Dashboard page is not visible");
        }
        async verifyDashboardTitle(){
            const title = await this.page.locator(this.dashboardTitle).textContent();
            return title;
        }
       
        async clickToggleButton(){
            await this.toggleButton.click();
           // expect(this.toggleButton).toBeVisible();
           // await this.isElementVisible(this.toggleButton, "Toggle button is not visible");
            
            //await this.clickElement(this.toggleButton, "Toggle button is not visible");
        }
         async clickMenuLink(){
           // await this.clickElement(this.menuButton, "Menu button is not visible");
            await this.menuButton.click();
        }
        async clickTestimonialsLink(){
        await this.testimonials.click();
        }
}
export default Dashboard;