/// <reference types="cypress" />

// import pages
import LoginPage from "../../pages/login";

describe("Test Konga login ", () => {

    // declare a login data variable
    let loginData;

    // get access to data using before hook
    before(function() {
        cy.fixture("login").then(function(res) {
            loginData = res;
        })
    });

    // create an instance of login class
    const loginPage = new LoginPage();

    it("Test valid login credentials", () => {

        // go to Konga landing page
        cy.visit("https://www.konga.com/");

        // click on login/signup button
        loginPage.clickLoginSignupBtn();

        // enter email address
        loginPage.setEmail(loginData.email);

        // enter password
        loginPage.setPassword(loginData.password);

        // click on login button
        loginPage.clickLoginBtn();

    })
})