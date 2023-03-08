class Login {

    // get elements
    getLoginSignupBtn() {
        return cy.get("._12e27_1r3kc > ._7ad32_SD12Y");
    }

    getEmail() {
        return cy.get("#username");
    }

    getPassword() {
        return cy.get("#password");
    }

    getLoginBtn() {
        return cy.get('button[type="submit"]').contains("Login");
    }

    // set value for the elements
    setEmail(email) {
        this.getEmail().type(email);
    }

    setPassword(password) {
        this.getPassword().type(password);
    }

    // click on login button
    clickLoginBtn() {
        this.getLoginBtn().click();
    }

    // click on login/signup button
    clickLoginSignupBtn() {
        this.getLoginSignupBtn().click();
    }
}

export default Login;