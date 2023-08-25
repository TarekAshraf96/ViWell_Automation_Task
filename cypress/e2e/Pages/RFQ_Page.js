export class RFQ{
    productName_Input_Field = '#combobox-1-input'
    productName_Dropdown_List = '[data-testid="autocompletev2-dropdown"]' 
    categorySelect_Field = '[data-testid="rfq-category"]'
    confirm_Category = '[data-testid="confirm-category-selection-button"]'
    quantity_Field = '#quantity'
    unitTargetPrice_Field = '#targetedPrice'

    expireDate_Field = '#expiryDate'
    monthSelectorDiv = '.chakra-select__wrapper.css-1qgaviy'
    monthSelector = '.chakra-select.css-1mryz6k';
    yearSelectorDiv = '.chakra-select__wrapper.css-d11if0'
    yearSelector = '.chakra-select.css-1mryz6k';
    datePickerDay = '.react-datepicker__day'

    shipDestination_Dropdown = '[data-testid="rfq-shipping-destination"]'
    shipDestination_Container = '.css-6h0eu2-container'
    shipDestination_Class = '.css-1g02t5'
    shipDestination_Value = '#react-select-location'
    destinations_Lists = '.css-11unzgr'

    city_Dropdown = '.rfq-city-input > .css-19ai18z-control > .css-1g02t5'
    cities_Lists = '.css-11unzgr'

    create_RFQ_Button = '[data-testid="create-rfq-button"]'
    RFQ_Submition_Heading = '.css-12fpe1y'
    RFQ_Submition_body = '.css-1xdtwiy'


    Enter_Product_Name(productName){
        cy.get(this.productName_Input_Field).type(productName)
        cy.contains(productName).click()
    }

    Choose_Product_Category(categoryOne, categoryTwo, categoryThree, categoryFour){
        cy.get(this.categorySelect_Field).click()
        cy.contains(categoryOne).click()
        cy.contains(categoryTwo).click()
        cy.contains(categoryThree).click()
        cy.contains(categoryFour).click()
        cy.get(this.confirm_Category).click()
    }

    EnterQuantity(quantity){
        cy.get(this.quantity_Field).type(quantity)
    }

    Enter_Unit_Price(price){
        cy.get(this.unitTargetPrice_Field).type(price)
    }

    pick_Expire_Date(day,month,year){
        cy.get(this.expireDate_Field).click()
        cy.get(this.monthSelectorDiv).find(this.monthSelector).select(month);
        cy.get(this.yearSelectorDiv).find(this.yearSelector).select(year);
        cy.get(this.datePickerDay).contains(day).click()
    }

    choose_Ship_Destination(destination){
        cy.get(this.shipDestination_Dropdown).click()
        cy.get(this.destinations_Lists)  
        .contains(destination)
        .click()
    }
    choose_Shiping_City(city){
        cy.get(this.city_Dropdown).click()
        cy.get(this.cities_Lists)  
            .contains(city)
            .click()
        }

    submit_RFQ(){
        cy.get(this.create_RFQ_Button).click()
    }

    validate_RFQ_URL_Submittion(){
        cy.url().should('include', '=submit')
    }

    validate_RFQ_Submitted(){
        cy.get(this.RFQ_Submition_Heading).should('be.visible')
        cy.get(this.RFQ_Submition_body).should('be.visible')  
    }
}    