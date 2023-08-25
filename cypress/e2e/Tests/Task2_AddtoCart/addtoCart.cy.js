import { AddtoCart } from "../../Pages/Add_to_Cart_Page"
import { LoginPage } from "../../Pages/login_Page"

const loginPage = new LoginPage()
const addtoCart = new AddtoCart()

describe('Add Item to Cart', () => {
    
    beforeEach(function(){
  
      cy.visit('https://www.tradeling.com/ae-en')
    
    })

    it('Check adding Item to Cart', () => {
        addtoCart.searchFor('Lenovo thinkpad')
        addtoCart.SearchResults_selectItem(0)
        cy.wait(2000)

        addtoCart.addItemtoCart()
        addtoCart.gotoCartSidebarButton()
        cy.wait(2000)
        addtoCart.Validate_Item_In_Cart()
    })
   
  })