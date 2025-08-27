/// <reference types="cypress" />

class TestPage {
  elements = {
    username: () => cy.get('#id_username'),
    password: () => cy.get('#id_password'),
    loginButton: () => cy.get('form#login-form input[type="submit"]'),
    errorMessage: () => cy.get('.errornote'),
  };

  saisirNomUtilisateur(username) {
    this.elements.username().clear().type(username);
  }

  saisirMotDePasse(password) {
    this.elements.password().clear().type(password);
  }

  cliquerLogin() {
    this.elements.loginButton().click();
  }

  verifierErreurConnexion() {
    this.elements.errorMessage()
      .should('be.visible')
      .and('contain', 'Please enter the correct username and password');
  }

  logout() {
  cy.get('form#logout-form button').click();
}

}

export default new TestPage();