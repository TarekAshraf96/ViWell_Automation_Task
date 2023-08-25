export class AddtoCart{

    searchBar_InputField = '[data-test-id="header-search-input"]'
    search_Results_Grid = '.css-13tqmi9'
    targetResult_Index = '.css-1kfqjyx'
    searchButton = '[data-test-id="header-search-button"]'
    addtoCartButton = '[data-testid="pdp-cart-add-button"]'
    gotoCartPageSidebarButton = '[data-testid="drawer-cta-go-to-cart"]'
    myCartTitle = 'My Cart'
    cartSummary_text = 'Cart Summary'
    checkout_Button = '[data-testid="cart-page-checkout-button"]'
    Item_In_Cart = '.css-1rzri79'
    cart_Summary_Div = '[data-testid="cart-summary-container-box"]'
    cart_Counter = '[data-testid="cart-title-items-count"]'
    remove_Item_Button = '[data-testid="cart-remove-cta"]'
    confirm_Item_Removal = '[data-testid="delete-cart-popup-ok-cta"]'


    searchFor(searchValue){
        cy.get(this.searchBar_InputField).type(searchValue)
        cy.get(this.searchButton).click()
    }
    
    SearchResults_selectItem(itemIndex){
        cy.get(this.search_Results_Grid)
        .find(this.targetResult_Index)
            .eq(itemIndex)           
            .click();
    }

    addItemtoCart(){
        cy.get(this.addtoCartButton).click()
    }

    gotoCartSidebarButton(){
        cy.get(this.gotoCartPageSidebarButton).click()
    }

    Validate_Item_In_Cart(){
     cy.get(this.Item_In_Cart).should('be.visible')
     cy.contains(this.myCartTitle).should('be.visible')
     cy.get(this.cart_Summary_Div).should('be.visible')
     cy.get(this.cart_Counter).should('be.visible')
     cy.contains(this.myCartTitle).should("have.text","My Cart")
     cy.contains(this.cartSummary_text).should("have.text","Cart Summary")
     cy.get(this.checkout_Button).should("have.text","Checkout")
    }

    //Use the Below Function when you are adding an item with an existing account not as a guest
    remove_Item_from_Cart(){
        cy.get(this.remove_Item_Button).click()
        cy.get(this.confirm_Item_Removal).click()
    }
}