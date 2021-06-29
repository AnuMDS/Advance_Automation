Feature: FreightForwarder-QuotationOrder

#This feature file contains automated manual tests of RAVAUT-917 on Jira
@FreightForwarder
  Scenario: Verifying Freight Forwarder Quotation Order
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open the product to verify details "Amazing Jake and the Green Bay Packers"
    And I open the product to verify details "Amazing Jake and the Red Balloon"
    And I click on Orders
    And I click on New Order
    And I enter customer name in Ship To field "RAVE Freight forwarder"
    And I click Order Attributes tab
    And I enter Default PO Reference and click Apply
    And I select Order Process Type "Quotation" 
    And I click on red colour arrow
    And I enter supplied product "Amazing Jake and the Green Bay Packers"
    And I click On Add button
    And I enter supplied product "Amazing Jake and the Red Balloon"
    And I click On Add button
    And I click on blue colour arrow
    And I click on shipping charges icon
    And I select charge from the list offered on the checkout page
    And I click Apply after selecting charge 
    And I click on Return To Checkout 
    And I click on Checkout button
    And I navigate to Orders Homepage
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    And I open the Quotation document
    And I click on Find Orders from Orders homepage
    And I enter document reference 
    And I enter customer name
    And I click on search button
    Then Line Item Status should be "Supply" for quotation order
    And Order value should be correct for quotation order
    And Order Type should be quotation
    And I release quotation for both the products
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    And I open the Invoice for first product
    And I open the Invoice for second product
    And I close Order Query window
    And I click on Find Orders to enter document reference and click on search button
    And Order status should be completed order for both the products
