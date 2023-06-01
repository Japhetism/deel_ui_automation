/// <reference types="cypress" />

// import salary calculator page
import SalaryCalculatorPage from "../../pages/deel-salary-calculator/salaryCalculator";

const { Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");

// declare growth page
let salaryCalculatorPage;

Before(() => {
    // create an instance of salary calculator page class object
    salaryCalculatorPage = new SalaryCalculatorPage();

    cy.viewport("macbook-16");
})

Given("I am on Deel salary calculator page", () => {
    cy.visit("/dev/salary-calculator");
});

When("I filled all the required details", (datatable) => {
    datatable.hashes().forEach((row) => {
        salaryCalculatorPage.setCountry(row.country);
        salaryCalculatorPage.setCurrency(row.currency);
        salaryCalculatorPage.setGrossSalary(row.grossSalary);
    });
});

When("I click on calculate button", () => {
    salaryCalculatorPage.clickOnCalculate();
});

Then("I should see {string} below the screen after calculation", (country) => {
    salaryCalculatorPage.getH3Element().should("include.text", country);
});