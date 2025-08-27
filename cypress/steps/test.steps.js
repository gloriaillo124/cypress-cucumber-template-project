/// <reference types="cypress" />

import { Given, When } from "cypress-cucumber-preprocessor/steps";


When('je saisi le username dans le champs Username {string}', (s) => {
    cy.get('#id_username').clear().type(username);
})

When('je clique sur le bouton login', () => {
    cy.get('form#login-form input[type="submit"]').click();
})

When('je saisi le password dans le champs Password {string}', (s) => {
     cy.get('#id_password').clear().type(password);
})

Given('jaccede au lien {string}', (s) => {
    cy.visit(url);
})

Then('je vois le titre du site admin {string}', (s) => {
      cy.url().should('include', '/admin/');
})


