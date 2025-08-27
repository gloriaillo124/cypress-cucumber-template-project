
/// <reference types="cypress" />

import { Given, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/login.page.js"

Given('je visite le lien {string}', (s) => {
    cy.visit("https://www.saucedemo.com/")
})

Then('je click sur le bouton login', () => {
    LoginPage.clickButtonLogin();
})

When('je saisi password dans le champs Password {string}', (s) => {
   LoginPage.setPassword("secret_sauce")
})

When('je saisi username dans le champs username {string}', (s) => {
  LoginPage.setUsername("standard_user")
})

Then('je suis redirige vers la page Dashboard {string}', (s) => {
  cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
})

Then('le message derreur saffiche {string}', (s) => {
   LoginPage.isDisplayedError();
})








