/// <reference types="cypress" />

describe("Test Konga login ", () => {

    it("Test valid login credentials", () => {

        // go to Konga landing page
        cy.visit("https://www.konga.com/");

        // click on login/signup button
        cy.get("._12e27_1r3kc > ._7ad32_SD12Y").click();

        // enter email address
        cy.get("#username").type("a@gmail.com");

        // enter password
        cy.get("#password").type("password");

        // click on login button
        cy.get("").click('button[type="submit"]').contains("Login").click();

    })
})