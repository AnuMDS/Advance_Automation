Feature: FreightForwarder-ProformaOrder

#This feature file contains automated manual tests of RAVAUT-915 on Jira
@FreightForwarder
  Scenario: Verifying Proforma products for Freight Forwarder
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open the product to verify details "Amazing Jake and the Green Bay Packers"
    And I open the product to verify details "Amazing Jake and the Red Balloon"
    And I click on Orders
    And I click on New Order
    And I enter customer name in Ship To field "RAVE Freight forwarder"
    And I click Order Attributes tab
    And I enter Default PO Reference and click Apply
    And I select Order Process Type "Proforma"
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
    And I open the Invoice note
    And I click on Find Orders from Orders homepage
    And I enter document reference 
    And I enter customer name
    And I click on search button
    Then Line Item status should be "Supply" for Proforma order
    And Order value should be correct for Proforma order
    And Order status should be completed order for both the products
    And I pay the proforma for both the products
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    And I close Order Query window
    And I click on Find Orders to enter document reference and click on search button
    And Order status should be converted to invoice
  
    
    
    