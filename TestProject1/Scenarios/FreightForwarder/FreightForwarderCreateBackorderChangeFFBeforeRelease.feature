Feature: FreightForwarderCreateBackorderChangeFFBeforeRelease

#This feature file contains automated manual tests of RAVAUT-919 on Jira
#Select product of sub type - Book- Paperback
@FreightForwarder
  Scenario: Testing Freight Forwarder with Backorder and changing Freight Forwarder before Release
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify backorder product "BXN  Sports - Tennis"
    And I verify backorder product "BXN Sports - Netball"    
    And I click on Orders 
    And I click on New Order
    And I enter "RAVE Freight Forwarder" in Ship To field
    And I click Order Attributes tab
    And I enter Default PO Reference and click Apply
    And I click on Red Arrow
    And I enter the product "BXN Sports - Tennis" to Backorder
    And I click Add
    And I enter the product "BXN Sports - Netball" to Backorder
    And I click Add 
    And I click on Left arrow
    And I click on Shipping Charges icon 
    And I select Dispatch Charge Details and Dispatch Method
    And I click Apply
    And I click Return To Checkout
    And I retrieve Supply and Backordered Value
    Then Backordered Shipping Value should be equal to the Despatch Charge selected
    And I make payment via Cheque  
    And I click on Checkout
    And I run Billing Wave 
    And I click refresh on Documents
    And I open the Advice Note generated
    And I change the Freight Forwarder to "Transvalair (UK) Limited"
    And I Click on Orders
    And I click on Find an Order
    And I enter the Document Reference and Search
    And Line Item Status should be Backorder 
    And I release backorders 
    And I run Billing Wave
    And I click refresh on Documents
    And I open the Invoices generated
    And Order status should be Completed Order
    And I change the Freight Forwarder to "European Van Services"