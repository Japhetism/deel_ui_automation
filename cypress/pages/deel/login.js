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

    // get button
    getButton() {
        return cy.get("button");
    }

    // locate paragraph element
    getParagraph() {
        return cy.get("p");
    }

    // locate otp element
    getOtpElements() {
        return cy.get("input[type='tel']");
    }

    // locate h2 element
    getHeading2Element() {
        return cy.get("h2");
    }

    // set email
    setEmailValue(email) {
        this.getEmailInput().type(email);
    }

    // set password
    setPasswordValue(password) {
        this.getPasswordInput().type(password);
    }

    // set otp
    setOtp(otp) {
        this.getOtpElements().each(($el, index, $list) => {
            cy.wrap($el).type(otp[index]);
        });
    }

    // click on login button
    clickLogin() {
        this.getButton().contains("log in").click();
    }

    // click on complete login
    clickCompleteLogin() {
        this.getButton().contains("Complete Login").click();
    }

    // click on log in with Google button
    clickGoogleLogin() {
        this.getButton().contains("Log in using Google").click();
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
        this.getParagraph().contains(text).should("exist");
    }

    validateOtpModalIsVisible() {
        this.getHeading2Element().contains("Verification required").should("exist");
    }

    validateCompleteLoginButton() {
        cy.get("button[type='submit']").should('have.attr', 'disabled', "disabled");
    }

    validateSuccessfulLogin(name, url) {
        cy.url().should('eq', url);
        cy.get("h1").invoke("text").should('include', name);
    }

    readOtpFromBrowserConsole() {
        const otp = window.prompt("Enter otp");
        this.setOtp(otp);
    }

    googleAuth(email, password) {
        cy.origin("https://accounts.google.com/", () => {
        cy.visit("/");
        cy.get("input[type='email']").type(email, password);
        cy.get("button").contains("Next").click();
    })
    }

    userLogin(email, password) {
        this.setEmailValue(email);
        this.setPasswordValue(password);
        this.clickLogin();
    }
}

export default Login;