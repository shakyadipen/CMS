import { test as fixture } from '@playwright/test'
import LoginPage from '../Pages/loginPage'
import Dashboard from '../Pages/Dashboard';
import MenuPage from '../Pages/MenuPage';
import TestimonialPageTest from '../Pages/TestimonialsPage';

const test = fixture.extend({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page))
	},
	dashboard: async ({ page }, use) => {
		await use(new Dashboard(page))
	},
	menuPage: async ({ page }, use) => {
		await use(new MenuPage(page))
	},
	testimonialPage: async ({ page }, use) => {
		await use(new TestimonialPageTest(page))
	},
});

export default test;