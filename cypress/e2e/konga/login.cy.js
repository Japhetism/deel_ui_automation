/// <reference types="cypress" />

// import pages
import LoginPage from "../../pages/login";

describe("Test Konga login ", () => {

    // create an instance of login class
    const loginPage = new LoginPage();

    it("Test valid login credentials", () => {

        // go to Konga landing page
        cy.visit("https://www.konga.com/");

        // click on login/signup button
        loginPage.clickLoginSignupBtn();

        // enter email address
        loginPage.setEmail("a@gmail.com");

        // enter password
        loginPage.setPassword("passwordd");

        // click on login button
        loginPage.clickLoginBtn();

    })
})