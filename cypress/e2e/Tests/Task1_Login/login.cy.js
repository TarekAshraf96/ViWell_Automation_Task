import { LoginPage } from "../../Pages/login_Page"

const loginPage = new LoginPage()

describe('Login to Tradeling Website', () => {
    
  beforeEach(function(){
    cy.fixture('URLs.json').then((ruls) => {
      const {Home} = ruls;
    cy.visit(Home)
    });
  })

    it('Login with Valid Credentials', () => {
      cy.fixture('Enviroment.json').then((env) => {
        const { Mail, Password, Username} = env;
      
      loginPage.Login_to_Website(Mail,Password)
      loginPage.validate_URL();
      loginPage.Validate_User_Login(Username)

    })
  });
})