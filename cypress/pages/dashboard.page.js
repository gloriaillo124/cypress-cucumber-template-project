/// <reference types="cypress" />

class DashboardPage {
    elements  = {
        pageTitle : () => cy.get("#site-name"),
        logout : () => cy.get("#submit")
    }
    clickLogoutButton(){
        this.elements.logout().click
    }
}