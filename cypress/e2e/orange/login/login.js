/// <reference types="cypress" />

// import pages
import LoginPage from "../../../pages/orange/login";

const { Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");

// declare login page
let loginPage;

// declare a variable to save login data
let loginData;

Before(() => {
    // create an instance of login page class object
    loginPage = new LoginPage();

    // get access to data using before hook
    cy.fixture("login").then(function(res) {
        loginData = res;
    });
})

Given("I am on the home page", () => {
    cy.visit("/");
});

Then("I should be redirected to the login screen", () => {
    loginPage.validateLoginScreen();
});

When("I enter username", () => {
    loginPage.setUsername(loginData.username);
});

Then("I expected username field to have a value", () => {
    loginPage.validateUsername(loginData.username);
});

When("I enter password", () => {
    loginPage.setPassword(loginData.password);
});

Then("I expected password field to have a value", () => {
    loginPage.validatePassword(loginData.password);
});

When("I click on login button", () => {
    loginPage.clickLoginBtn();
});

Then("I should be redirected to my dashboard", () => {
    loginPage.validateUserLogin(loginData.name);
});