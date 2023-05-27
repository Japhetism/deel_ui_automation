class Leave {

    // to be remove
    getMonthName(date) {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const d = new Date(date);
        return monthNames[d.getMonth()]
    }

    // locate leave menu
    getLeaveMenu() {
        return cy.get('.oxd-main-menu-item--name').contains("Leave");
    }

    // locate date picker input
    getDateInput(position) {
        return cy.get("input[placeholder='yyyy-mm-dd']").eq(position);
    }

    // locate search button
    getSearchBtn() {
        return cy.get("button").contains("Search");
    }

    // locate span
    getTableRow() {
        return cy.get(".oxd-table-row");
    }

    setDate(position, date) {
        const d = new Date(date);
        return this.getDateInput(position).click()
            .get(".oxd-calendar-selector-month-selected").eq(position).click()
            .get(".oxd-calendar-dropdown")
            .get(".oxd-calendar-dropdown--option").contains(this.getMonthName(date)).click()
            .get(".oxd-calendar-selector-year-selected").click()
            .get(".oxd-calendar-dropdown")
            .get(".oxd-calendar-dropdown--option").contains(d.getFullYear()).click()
            .get(".oxd-calendar-date").contains(d.getDate()).click();
    }

    setFromDate(date) {
        this.setDate(0, date);
    }

    setToDate(date) {
        this.setDate(1, date);
    }

    clickOnLeaveMenu() {
        this.getLeaveMenu().click();
    }

    clickOnSearchBtn() {
        this.getSearchBtn().click({force: true});
    }

    validateDateInputValue(position, date) {
        this.getDateInput(position).should('have.value', date);
    }

    validateFromDate(date) {
        this.validateDateInputValue(0, date);
    }

    validateToDate(date) {
        this.validateDateInputValue(1, date);
    }

    validateLeavePage() {
        cy.url().should('include', 'orangehrmlive.com')  
            .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')
            .should('contain', 'orangehrmlive')
    }

    validateDateRangeSearchResult() {
        cy.wait(1000);
        this.getTableRow().its('length').should('be.gt', 0);
    }
}

export default Leave;