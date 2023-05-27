/// <reference types="cypress" />

class Login {

    // get email input field
    getEmailInput() {
        return cy.get("input[placeholder='Type your email']");
    }

    // get password input field
    getPasswordInput() {
        return cy.get("input[name='password']");
    }

    // get login button
    getLoginButton() {
        return cy.get("button").contains("log in");
    }

    // locate paragraph element
    getParagraph() {
        return cy.get("p");
    }

    // set email
    setEmailValue(email) {
        this.getEmailInput().type(email);
    }

    // set password
    setPasswordValue(password) {
        this.getPasswordInput().type(password);
    }

    // click on login button
    clickLogin() {
        this.getLoginButton().click();
    }

    // validate email address field
    validateEmailAddressValue(email) {
        this.getEmailInput().should("have.value", email);
    }

    // validate password field
    validatePasswordValue(password) {
        this.getPasswordInput().should("have.value", password);
    }

    validateLoginPageUrl(url) {
        cy.url().should('eq', url);
    }

    validateInvalidLogin(text) {
        this.getParagraph().contains(text).should('exist');
    }

    userLogin(email, password) {
        this.setEmailValue(email);
        this.setPasswordValue(password);
        this.clickLogin();
    }
}

export default Login;