/// <reference types="cypress" />

class Contract {

    constructor() {
        this.monthNames = [
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
    }

    // to be remove
    getMonthName(month) {
        return this.monthNames[month];
    }

    // get anchor element
    getAnchorElement() {
        return cy.get("a");
    }

    // get heading 1 element
    getHeading1Element() {
        return cy.get("h1");
    }

    // get heading 2 element
    getHeading2Element() {
        return cy.get("h2");
    }

    // get contract type container
    getContractTypeContainer() {
        return cy.get(".deel-ui__stack");
    }

    // get fixed contract type
    getFixedContract() {
        return this.getContractTypeContainer().contains("Fixed Rate");
    }

    // locate contract name input field
    getContractNameInput() {
        return cy.get("input[name='name']");
    }

    // get scope of work element input field
    getScopeOfWork() {
        return cy.get("#scope-of-work-creation");
    }

    // get role input box
    getRoleInputBox() {
        return cy.get("input[id='free-solo-job-title']");
    }

    // get contractor residence
    getContractorResidence() {
        return cy.get("div[data-qa='contractor-tax-residence'] > div > div > input");
    }

    // get contractor country province
    getContractorProvince() {
        return cy.get("div[data-qa='contractor-tax-residence-province'] > div > div > input");
    }

    // get seniority level
    getSeniorityLevel() {
        return cy.get("div[data-qa='selector-seniority-level'] > div > div > div > div");
    }

    // get contract date input
    getContractDateInput() {
        return cy.get("input[name='effectiveDate']");
    }

    // get contract day
    getContractDay() {
        return cy.get(".MuiPickersDay-root");
    }

    // get contract year
    getContractYear() {
        return cy.get(".PrivatePickersYear-yearButton");
    }

    // get calendar
    getCalendarPicker() {
        return cy.get(".MuiCalendarPicker-root");
    }

    // get calendarHeader
    getCalendarHeader() {
        return cy.get(".MuiPickersCalendarHeader-label");
    }

    // get calendar next month button
    getCalendarNextMonthButton() {
        return cy.get("button[title='Next month']");
    }

    // get calendar previous month button
    getCalendarPreviousMonthButton() {
        return cy.get("button[title='Previous month']");
    }

    // set Calendar Month
    setCalendarMonth(month) {
        const currentMonthName = this.getMonthName(new Date().getMonth());
        const newMonthName = this.getMonthName(month);

        // get the index of new and current month from month names array
        const currentMonthIndex = this.monthNames.indexOf(currentMonthName);
        const newMonthIndex = this.monthNames.indexOf(newMonthName);

        if (newMonthIndex < currentMonthIndex) {
            const iteration = currentMonthIndex - newMonthIndex;
            for(let index = 0; index < iteration; index++) {
                this.getCalendarPreviousMonthButton()
                    .click();
            }
        } else {
            const iteration = newMonthIndex - currentMonthIndex;
            for(let index = 0; index < iteration; index++) {
                this.getCalendarNextMonthButton()
                    .click();
            }
        }
    }

    // set contract name
    setContractName(name) {
        this.getContractNameInput().type(name);
    }

    // set scope of work
    setScopeOfWork(workScope) {
        this.getScopeOfWork().type(workScope);
    }

    // set role
    setRole(role) {
        this.getRoleInputBox().click({force: true})
        .type(role)
        .get("div")
        .contains(role)
        .click({force: true});
        //.get(".MuiAutocomplete-popper > .MuiPaper-root > .MuiAutocomplete-listbox > .MuiAutocomplete-option")
        
    }

    // set contractor residence
    setCountry(country) {
        this.getContractorResidence().click({force: true})
            .type(country)
            .get("div")
            .contains(country)
            .click({force: true});
            //.get(".MuiAutocomplete-popper > .MuiPaper-root > .MuiAutocomplete-listbox > li > .MuiAutocomplete-groupUl > .MuiAutocomplete-option > div > div > div")
            // .contains(country)
            // .click({force: true});
    }

    setProvince(province) {
        this.getContractorProvince().click({force: true})
            .type(province)
            .get("div")
            .contains(province)
            .click({force: true});
    }

    setSeniorityLevel(level) {
        this.getSeniorityLevel().click({force: true})
            .type(level)
            .get("div")
            .contains(level)
            .click({force: true});
    }

    // set contract date
    setContractDate(date) {
        const d = new Date(date);
        this.getContractDateInput().click({force: true})
            this.getCalendarPicker()
            this.getCalendarHeader()
                .click({force: true})
            this.getContractYear()
                .contains(d.getFullYear())
                .click({force: true})
            this.setCalendarMonth(d.getMonth())
            this.getContractDay()
                .contains(d.getDate())
                .click({force: true})
    }
    
    // click on  fixed contract
    clickOnFixedContract() {
        cy.wait(10000);
        this.getFixedContract().click();
    }

    // click on create a contract
    clickOnCreateContract() {
        cy.wait(20000);
        this.getAnchorElement().contains("Create A Contract").click();
        cy.wait(10000);
    }

    validateContractPage() {
        cy.url().should("include", "/create?contract-type=contractor");
        this.getHeading1Element().invoke("text").should('eq', "Create a contract");
    }

    validateFixedContractPage() {
        cy.url().should("include", "create/fixed?contract-type=contractor");
        this.getHeading2Element().invoke("text").should("eq", "Creating a fixed contract");
    }
}

export default Contract;