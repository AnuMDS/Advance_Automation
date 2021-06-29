Feature: FreightForwarderOverrideCreditStatusHeld 

#This feature file contains automated manual tests of RAVAUT-922 on Jira
#Select product of sub type - Book- Paperback
@FreightForwarder
  Scenario: Testing Freight Forwarder with account on Hold but overridden account status
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "Amazing Jake and the Red Balloon" to be used
    And I verify the product "Amazing Jake and the Shaggy Dog" to be used
    And I set Credit Status to "Stop\On Hold" for company "RAVE Freight Forwarder"
    And I click on Orders 
    And I click on New Order
    And I enter the company in Ship To field
    And I click Order Attributes tab
    And I enter Default PO Reference and click Apply
    And I check Override Credit Status Check checkbox
    And I click on Red Arrow
    And I enter the product "Amazing Jake and the Red Balloon" 
    And I enter quantity 1
    And I click Add 
    And I enter the product "Amazing Jake and the Shaggy Dog" 
    And I enter quantity 1
    And I click Add 
    And I click on Left arrow
    And I click on Shipping Charges icon 
    And I select Dispatch Charge Details and Dispatch Method
    And I click Apply
    And I click Return To Checkout
    Then Shipping Value should be equal to the Despatch Charge selected
    And I retrieve Total Order Value
    And I make payment via Cheque  
    And I click on Checkout
    And I run Billing Wave 
    And I click refresh on Documents
    And I open the Invoice note
    And I open the Ledger
    And products should be correctly displayed
    And Value displayed should be correct
    And I set Credit Status to "Account Open"