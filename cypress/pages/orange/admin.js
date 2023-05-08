class Admin {

    // locate admin menu
    getAdminMenu() {
        return cy.get('.oxd-main-menu-item--name').contains("Admin");
    }

    // locate admin username search input
    getAdminSearchInput() {
        return cy.get('.oxd-input').last();
    }

    // locate select text input
    getSelectTextInput() {
        return cy.get('.oxd-select-text');
    }

    // locate employee name search input
    getEmployeeNameSearchInput() {
        return cy.get('input[placeholder="Type for hints..."]');
    }

    // locate admin user role select button
    getAdminUserRole() {
        return this.getSelectTextInput().first()
            .click({force: true})
            .get('.oxd-select-dropdown')
            .get('.oxd-select-option');
    }

    // locate admin status select button
    getAdminStatus() {
        return this.getSelectTextInput().last()
            .click({force: true})
            .get('.oxd-select-dropdown')
            .get('.oxd-select-option');
    }

    // locate employee search input
    getEmployeeSearchInput() {
        return cy.get('input[placeholder="Type for hints..."]');
    }

    // locate employee dropdown and select an employee
    getEmployee() {
        return cy.get(".oxd-autocomplete-dropdown")
        .get(".oxd-autocomplete-option");
    }

    // locate search button
    getSearchBtn() {
        return cy.get(".oxd-button").contains("Search");
    }

    // locate table cell
    getTableCell() {
        return cy.get(".oxd-table-cell");
    }

    // set admin search criteria
    setAdminSearchValue(input) {
        this.getAdminSearchInput().type(input);
    }

    setAdminUserRole(role_name) {
        this.getAdminUserRole().contains(role_name).click();
    }

    setAdminStatus(status) {
        this.getAdminStatus().contains(status).click();
    }

    setEmployeeName(employeeHintName, fullEmployeeName) {
        this.getEmployeeNameSearchInput().type(employeeHintName);
        cy.wait(9000);
        this.getEmployee().contains(fullEmployeeName).click();
    }

    clickOnAdminMenu() {
        this.getAdminMenu().click();
    }

    clickOnSearchBtn() {
        this.getSearchBtn().click({force: true});
    }

    // confirm admin search value
    validateAdminSearchValue(input) {
        this.getAdminSearchInput().should("have.value", input);
    }

    // confirm admin role value
    validateAdminUserRoleValue(role_name) {
        this.getSelectTextInput().first().should('contain', role_name);
    }

    // confirm admin status value
    validateAdminStatusValue(status) {
        this.getSelectTextInput().last().should('contain', status);
    }

    // confirm employee name value
    validateEmployeeNameValue(employee_name) {
        this.getEmployeeNameSearchInput().should("have.value", employee_name);
    }

    validateAdminPage() {
        cy.url().should('include', 'orangehrmlive.com')  
            .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
            .should('contain', 'orangehrmlive')
    }

    validateSearchResult(input) {
        this.getTableCell().contains(input);
    }
}

export default Admin;