import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const url = "http://www.google.fr/";
Given(/^I am at google page$/, () => {
  cy.setCookie('CONSENT', 'YES+FR.fr+V10+BX');
  cy.visit(url);
});

When(/^I type "([^"]*)"$/, (keyword) => {
  cy.get('[name="q"]').type(keyword);
});

Then(/^I should see "([^"]*)" word in the results$/, (keyword) => {
  cy.title().should('include', keyword);
});