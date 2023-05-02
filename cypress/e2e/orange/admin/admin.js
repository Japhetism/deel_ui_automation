/// <reference types="cypress" />

// import pages
import AdminPage from "../../../pages/orange/admin";
import LoginPage from "../../../pages/orange/login";

const { Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");

// declare admin page
let adminPage;

// declare login page
let loginPage;

// declare a variable to save login data
let loginData;

Before(() => {
    // create an instance of admin page
    adminPage = new AdminPage();

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

When("I click on admin", () => {
    adminPage.clickOnAdminMenu();
});

Then("I should be redirected to admin page", () => {
    adminPage.validateAdminPage();
});

When("I enter admin search input", () => {
    adminPage.setAdminSearchValue("abc123");
});

// Then("I expected admin search field to have a value", () => {
//     adminPage.validateAdminSearchValue("abc123");
// });

When("I click on search button", () => {
    adminPage.clickOnSearchBtn();
});

Then("I should see my result", () => {
    adminPage.validateSearchResult("abc123");
});