import { Locator, expect, Page } from '@playwright/test';
import { DEMOQA_URL } from '../../config/urls';

export class WebTablesPage {
    constructor(private readonly page: Page) {}

// Usamos getters para que los locators se consulten siempre en el DOM actual
    private get addButton() {return this.page.getByRole('button', { name: 'Add' });} 
    private get firstNameInput() {return this.page.getByPlaceholder('First Name');}
    private get lastNameInput() {return this.page.getByPlaceholder('Last Name');}
    private get emailInput() {return this.page.getByPlaceholder('name@example.com');}
    private get ageInput() {return this.page.getByPlaceholder('Age');}
    private get salaryInput() {return this.page.getByPlaceholder('Salary');}
    private get departmentInput() {return this.page.getByPlaceholder('Department');}
    private get submitButton() {return this.page.getByRole('button', { name: 'Submit' });}

async navigate() {
    await this.page.goto(DEMOQA_URL + '/webtables') 
}

async addNewUser(user: {
    firstName: string;
    lastName: string;
    email: string;
    age: string;
    salary: string;
    department: string;
}){
    await this.addButton.click();
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.emailInput.fill(user.email);
    await this.ageInput.fill(user.age);
    await this.salaryInput.fill(user.salary);
    await this.departmentInput.fill(user.department);
    await this.submitButton.click();
}
// Método para verificar registros en la tabla
async assertRowContainsText(text: string) {
    await expect(this.page.locator('tr').filter({ hasText: text })).toBeVisible();
}     
};


