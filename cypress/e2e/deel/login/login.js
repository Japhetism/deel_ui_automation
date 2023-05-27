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
    cy.visit("/");
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

Then("I should see a modal for otp", () => {
    loginPage.validateOtpModalIsVisible();
});

Then("I should see an error message as {string}", (message) => {
    loginPage.validateInvalidLogin(message);
});

When("I click on login with Google button with email as {string} and password as {string}", (email, password) => {
    cy.wait(10000);
    loginPage.clickGoogleLogin();
    loginPage.googleAuth(email, password);
});

When("I enter otp from browser prompt", () => {
    loginPage.readOtpFromBrowserConsole();
});

Then("I should see complete login button enabled", () => {
    loginPage.validateCompleteLoginButton();
});

When("I click on complete login button", () => {
    loginPage.clickCompleteLogin();
});

Then("I should be redirected to my dashboard with greetings to include my name as {string} and url as {string}", (name, url) =>  {
    loginPage.validateSuccessfulLogin(name, url);
})
