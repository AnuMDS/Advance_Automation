Feature: FreightForwarder-CreateHeldOrderChangeFFBeforeRelease

#This feature file contains automated manual tests of RAVAUT-921 on Jira
#Select product of sub type - Book- Paperback
@FreightForwarder
  Scenario: Tests Freight forwarder with held order and release after freight forwarder change
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open the product to verify details "Amazing Jake and the Green Bay Packers"
    And I open the product to verify details "Amazing Jake and the Red Balloon"
    And I open customer record "RAVE Freight Forwarder" to set account status "Stop\On Hold"
    And I click on Orders
    And I click on New Order
    And I enter customer name in Ship To field "RAVE Freight Forwarder"
    And I click Order Attributes tab
    And I enter Default PO Reference and click Apply
    And I click on Red colour right arrow icon
    And I enter supplied product "Amazing Jake and the Green Bay Packers"
    And I click on Add Item
    And I enter supplied product "Amazing Jake and the Red Balloon"
    And I click on Add Item
    And I retrieve total order value for held order
    And I click on blue colour arrow
    And I click on Checkout button
    And I navigate to Orders Homepage
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    Then Advice note should be generated for Held Orders
    And I open the Advice note generated for Held Orders
    And I click on Find Orders to enter document reference and click on search button
    And Order status should be Held Order
    And I click on Customer Service
    And I change the account status "Account Open"
    And I change the freight forwarder "Transvalair (UK) Limited"
    And I release the held order for both the products
    And I close Order Query window
    And I navigate to Orders Homepage
    And I click on Billing Wave Release button
    And I click refresh on Documents
    And I retrieve the document references for both the products
    And I open the Invoice for first product
    And I open the Invoice for second product
    And Order value and Order status should be correct for first product
    And I close Order Query window
    And Order value and Order status should be correct for second product
    
