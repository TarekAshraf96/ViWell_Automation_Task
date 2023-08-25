export class LoginPage{

    myAccount_Div = 'My Account'
    login_Button = 'Log In'
    email_Input_Field = '[data-testid="login-form-email-input"]'
    continue_Button = 'CONTINUE'
    password_Input_Field = '[data-testid="email-login-password-input"]'
    credentials_Login_Button = 'LOG IN'

    Login_to_Website(email, password){
      cy.contains(this.myAccount_Div).trigger('mouseover', {force: true})
      cy.contains(this.login_Button).click()
      cy.get(this.email_Input_Field).type(email)
      cy.contains(this.continue_Button).click()
      cy.get(this.password_Input_Field).type(password)
      cy.contains(this.credentials_Login_Button).click()
    }

    validate_URL(){
        cy.url().should('eq', 'https://www.tradeling.com/ae-en')
    }

    Validate_User_Login(accountName){
      cy.contains(this.myAccount_Div).trigger('mouseover', {force: true})
      cy.contains(this.myAccount_Div).click({ force: true })
      cy.contains(accountName).should('be.visible')
    }

}