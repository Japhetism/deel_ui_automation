/// <reference types="cypress" />

// import pages
import LeavePage from "../../../pages/orange/leave";
import LoginPage from "../../../pages/orange/login";

const { Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");

// declare admin page
let leavePage;

// declare login page
let loginPage;

// declare a variable to save login data
let loginData;

Before(() => {
    // create an instance of admin page
    leavePage = new LeavePage();

    // create an instance of login page class object
    loginPage = new LoginPage();

    // get access to data using before hook
    cy.fixture("login").then(function(res) {
        loginData = res;
    });
});

Given("I am on the dashboard page", () => {
    loginPage.userLogin(loginData.username, loginData.password);
});

When("I click on leave", () => {
    leavePage.clickOnLeaveMenu();
});

Then("I should be redirected to the leave page", () => {
    leavePage.validateLeavePage();
});

When("I select from date", () => {
    leavePage.setFromDate();
});

Then("I should see the selected from date", () => {
    leavePage.validateFromDate();
});

When("I select to date", () => {
    leavePage.setToDate();
});

Then("I should see the selected to date", () => {
    leavePage.validateToDate();
});