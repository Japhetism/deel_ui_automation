/// <reference types="cypress" />

// import pages
import LoginPage from "../../../pages/deel/login";
import HomePage from "../../../pages/deel/home";
import RegisterPage from "../../../pages/deel/register";

const { Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");

// declare login page
let loginPage;
let homePage;
let registerPage;



Before(() => {
    // create an instance of home and login page class object
    loginPage = new LoginPage();
    homePage = new HomePage();
    registerPage = new RegisterPage();

   cy.viewport("macbook-16");
})

Cypress.on('uncaught:exception', (err) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log('Cypress detected uncaught exception: ', err);
    return false;
});

Given("I am on the home page", () => {
    cy.visit("/");
});

When("I click on log in button on the home page", () => {
    homePage.clickLoginText();
});

Then("I should be redirected to the login page with url as {string}", (url) => {
    cy.url().should('eq', url);
});

When("I click on sign up", () => {
    loginPage.clickRegisterButton();
});

Then("I should be redirected to the sign up page with url as {string}", (url) => {
    cy.wait(50000);
    cy.url().should('eq', url);
    registerPage.getH1Element().contains("How will you use Deel?").should("exist");
});

When("I select {string}", (text) => {
    registerPage.clickButton(text);
});

Then("I should see {string}", (text) => {
    cy.wait(50000);
    registerPage.getH3Element().contains(text).should("exist");
});

When("I click on {string} button", (text) => {
    cy.wait(20000);
    registerPage.clickButton(text);
});

Then("I should be redirected to a page with url with url path as {string}", (urlPath) => {
    cy.wait(50000);
    cy.url().should("include", urlPath);
})

When("I enter all the sign up details", (datatable) => {
    datatable.hashes().forEach((row) => {
        registerPage.setFirstName(row.firstName);
        registerPage.setLastName(row.lastName);
        registerPage.setEmail(row.email);
        registerPage.setPassword(row.password);
        registerPage.setHowYouHearAboutUs(row.howYouHearAboutUs);
    }) 
});

Then("I should see Create Your Deel Account button enabled", () => {
    cy.wait(50000);
    registerPage.getSubmitButton().should("not.have.attr", "disabled");
});

When("I click on {string}", (text) => {
    registerPage.clickButton(text);
});

Then("I should be redirected to contractor type page with url path as {string}", (urlPath) => {
    cy.wait(50000);
    cy.url().should("include", urlPath);
    cy.wait(30000);
    registerPage.getH1Element().contains("What kind of contractor are you?").should("exist");
});

When("I select {string} on contractor page", (contractorType) => {
    registerPage.getH4Element().contains(contractorType).click();
});

Then("I should be redirected to confirmation page with url as {string}", (url) => {
    cy.wait(50000);
    cy.url().should("eq", url);
    registerPage.getH1Element().contains("Check your inbox and confirm your email address").should("exist");
})