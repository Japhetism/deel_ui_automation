/// <reference types="cypress" />

class SalaryCalculator {

    // get dropdown container
    getDropdownContainer(position) {
        return cy.get(`${".MuiFilledInput-root:nth("+position+")"}`);
    }

    // get input type number
    getInputTypeNumber() {
        return cy.get("input[type='number']");
    }

    // get button
    getButton() {
        return cy.get("button");
    }

    // get h3 element
    getH3Element() {
        return cy.get("h3");
    }

    setCountry(country) {
        this.getDropdownContainer(0)
        .click()
        .get("div")
        .contains(country)
        .click();
    }

    setCurrency(currency) {
        this.getDropdownContainer(2)
        .click()
        .get("div")
        .contains(currency)
        .click();
    }

    setGrossSalary(amount) {
        this.getInputTypeNumber().type(amount);
    }

    clickOnCalculate() {
        this.getButton().contains("Calculate").click();
    }

}

export default SalaryCalculator;