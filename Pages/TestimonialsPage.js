
import BasePage from "./basePage";
class TestimonialPageTest extends BasePage{

constructor(page){
    super(page);
    this.verifyTestimonialTitle=page.getByRole('heading', { name: 'Testimonials' });
    this.addTestimonialButton=page.getByRole('button', { name: 'Add Testimonials' });

}
async verifyTestimonialPage(){
const testimonialPageHeading = await this.verifyTestimonialTitle.textContent();
return testimonialPageHeading;
}
async clickAddTestimonialsButton(){
    await this.addTestimonialButton.click();}
}
export default TestimonialPageTest;