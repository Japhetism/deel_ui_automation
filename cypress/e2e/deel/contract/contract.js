/// <reference types="cypress" />

// import pages
import HomePage from "../../../pages/deel/home";
import LoginPage from "../../../pages/deel/login";
import ContractPage from "../../../pages/deel/contract";

const { Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");

// declare login page
let loginPage;
let homePage;
let contractPage;

Before(() => {
    // create an instance of home and login page class object
    loginPage = new LoginPage();
    homePage = new HomePage();
    contractPage = new ContractPage();

   cy.viewport("macbook-16");
   cy.visit("/");
   homePage.clickLoginText();
})

Cypress.on('uncaught:exception', (err) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log('Cypress detected uncaught exception: ', err);
    return false;
});

Given("a logged in user with email {string} and password {string}", (email, password) => {
    loginPage.userLogin(email, password);
});

Given("{string} is on the dashboard page with valid url {string}", (name, url) => {
    loginPage.validateSuccessfulLogin(name, url);
});

When("I click on create a contract on the side menu", () => {
    contractPage.clickOnCreateContract();
});

When("I click on fixed contract", () => {
    contractPage.clickOnFixedContract();
});

When("I enter {string} as contract name", (name) => {
    contractPage.setContractName(name);
});

When("I select {string} as the contractor's residence", (country) => {
    contractPage.setCountry(country);
});

When("I select {string} as the role", (role) => {
    contractPage.setRole(role);
});

When("I select {string} as province", (province) => {
    contractPage.setProvince(province);
});

When("I select {string} as seniority level", (level) => {
    contractPage.setSeniorityLevel(level);
});

When("I type {string} as scope of work", (workScope) => {
    contractPage.setScopeOfWork(workScope);
});

When("I set contract date as {string}", (date) => {
    contractPage.setContractDate(date);
});