/// <reference types="cypress" />

// import pages
import HomePage from "../../../pages/deel/home";
import LoginPage from "../../../pages/deel/login";

const { Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");

// declare login page
let loginPage;
let homePage;



Before(() => {
    // create an instance of home and login page class object
    loginPage = new LoginPage();
    homePage = new HomePage();

   cy.viewport("macbook-16");
})

Cypress.on('uncaught:exception', (err) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log('Cypress detected uncaught exception: ', err);
    return false;
});

Given("I am on the home page", () => {
    cy.visit("https://deel.com");
    //homePage.redirectToLoginPage();
});

When("I click on log in button on the home page", () => {
    homePage.clickLoginText();
});

Then("I should be redirected to the login page with url as {string}", (url) => {
    loginPage.validateLoginPageUrl(url);
});

When("I enter email address as {string}", (email) => {
    loginPage.setEmailValue(email)
});

When("I enter password as {string}", (password) => {
    loginPage.setPasswordValue(password);
});

Then("I should see email address field value as {string} and password field value as {string}", (email, password) => {
    loginPage.validateEmailAddressValue(email);
    loginPage.validatePasswordValue(password);
});

When("I click on log in button on the login page", () => {
    loginPage.clickLogin();
});

Then("I should see an error message as {string}", (message) => {
    loginPage.validateInvalidLogin(message);
});

