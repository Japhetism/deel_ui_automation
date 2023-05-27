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

When("I select from date as {string} from the date picker", (date) => {
    leavePage.setFromDate(date);
});

Then("I should see {string} as the selected from date", (date) => {
    leavePage.validateFromDate(date);
});

When("I select to date as {string} from the date picker", (date) => {
    leavePage.setToDate(date);
});

Then("I should see {string} as the selected to date", (date) => {
    leavePage.validateToDate(date);
});

When("I click on search button", () => {
    leavePage.clickOnSearchBtn();
});

Then("I should see table records", () => {
    leavePage.validateDateRangeSearchResult();
});