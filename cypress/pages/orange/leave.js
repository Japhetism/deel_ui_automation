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

    setFromDate() {
        this.setDate(0, "1990-10-31");
    }

    setToDate() {
        this.setDate(1, "2023-04-20");
    }

    clickOnLeaveMenu() {
        this.getLeaveMenu().click();
    }

    validateDateInputValue(position, date) {
        this.getDateInput(position).should('have.value', date);
    }

    validateFromDate() {
        this.validateDateInputValue(0, "1990-10-31");
    }

    validateToDate() {
        this.validateDateInputValue(1, "2023-04-20");
    }

    validateLeavePage() {
        cy.url().should('include', 'orangehrmlive.com')  
            .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')
            .should('contain', 'orangehrmlive')
    }
}

export default Leave;