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

When("I enter {string} in the username search input", (username) => {
    adminPage.setAdminSearchValue(username);
});

Then("I expected to see {string} in the username search input", (username) => {
    adminPage.validateAdminSearchValue(username);
});

When("I select {string} as user role", (roleName) => {
    adminPage.setAdminUserRole(roleName);
});

Then("I expect {string} as the user role field value", (roleName) => {
    adminPage.validateAdminUserRoleValue(roleName);
});

When("I select an admin status as {string}", (status) => {
    adminPage.setAdminStatus(status);
});

Then("I expect admin status field to have a value of {string}", (status) => {
    adminPage.validateAdminStatusValue(status);
});

When("I enter employee hint name as {string} and select {string} from employee dropdown", (employeeHintName, employeeName) => {
    adminPage.setEmployeeName(employeeHintName, employeeName);
});

Then("I expect employee name field to have a value of {string}", (employeeName) => {
    adminPage.validateEmployeeNameValue(employeeName);
});

When("I click on search button", () => {
    adminPage.clickOnSearchBtn();
});

Then("I should see result with a column as {string}", (searchInput) => {
    adminPage.validateSearchResult(searchInput);
});