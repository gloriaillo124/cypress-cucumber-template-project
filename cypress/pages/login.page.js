class LoginPage {
    elements = {
        username : () => cy.get("#user-name"),
        password : () => cy.get("#password"),
        loginButton : () => cy.get("#login-button"),
        errorMsg : () => cy.get('[data-test="error"]')
    }
    setUsername(username){
        this.elements.username().type(username)
    }
    setPassword(password){
        this.elements.password().clear().type(password)
    }
    clickButtonLogin(){
        this.elements.loginButton().click()
    }
    isDisplayedError(){
    this.elements.erreurMessage().should(
            'have.text',
            'Epic sadface: Username and password do not match any user in this service'
        );
    }
}
export default new LoginPage();