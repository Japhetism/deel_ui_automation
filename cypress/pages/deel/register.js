/// <reference types="cypress" />

class Register {

    // get button
    getButton() {
        return cy.get("button");
    }

    // get submit button
    getSubmitButton() {
        return cy.get("button[type='submit']");
    }

    // get h4 element
    getH4Element() {
        return cy.get("h4");
    }

    // get h1 element
    getH1Element() {
        return cy.get("h1");
    }

    // get h3 element
    getH3Element() {
        return cy.get("h3");
    }

    // get how you hear about us
    getHowYouHearAboutUs() {
        return cy.get(".MuiFormControl-root");
    }

    // get first name input field
    getFirstNameInput() {
        cy.wait(100000);
        return cy.get("input[name='firstName']");
    }

    // get last name input field
    getLastNameInput() {
        return cy.get("input[name='lastName']");
    }

    // get email input field
    getEmailInput() {
        return cy.get("input[name='email']");
    }

    // get password input field
    getPasswordInput() {
        return cy.get("input[name='new-password']");
    }

    // set first name
    setFirstName(name) {
        this.getFirstNameInput().type(name);
    }

    // set last name
    setLastName(name) {
        this.getLastNameInput().type(name);
    }

    // set email
    setEmail(email) {
        this.getEmailInput().type(email);
    }

    // set password
    setPassword(password) {
        this.getPasswordInput().type(password);
    }

    // set how you hear about us
    setHowYouHearAboutUs(option) {
        this. getHowYouHearAboutUs().last().click()
            .get("div")
            .contains(option)
            .click();
    }

    // click button
    clickButton(text) {
        cy.wait(50000);
        this.getButton().contains(text).click({force: true});
    }
}

export default Register;