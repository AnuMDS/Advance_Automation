Feature: FreightForwarder_BackorderSupplyOrder

#This feature file contains automated manual tests of RAVAUT-912 on Jira
#Creating a person to be used for Freight Forwarder module

  Scenario:1 Creating a Person 
  Given I am logged in Ingenta Commercial Application
  When I click on Customer Service
  And I click on New Customer button
  And I check the Create New Person checkbox
  And I select the Country "United Kingdom" 
  And I select a Type of Person "Private Individual" 
  And I enter Forename "RAVE"
  And I enter Family Name "Freight Forwarder"
  And I enter Customer details
  And I enter the Address
  And I click on Finish
  Then all the mandatory fields should be populated 
  And I add Organisations records 
  And I add Freight Forwarder "European Van Services"
  And I click Save Record and Close Form button

@FreightForwarder
#Select product of sub type - Book- Paperback
  Scenario: 2 Testing Freight Forwarder with Backorder and Supply Order 
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "Amazing Jake and the Red Balloon" to be used 
    And I verify the backorder product "BXN Guide to Sport-Badminton"
    And I click on Orders
    And I click on New Order
    And I enter "RAVE Freight Forwarder" in Ship To field
    And I click Order Attributes tab
    And I enter Default PO Reference and click Apply
    And I click on Red Arrow
    And I enter the product "BXN Guide to Sport-Badminton" to Backorder
    And I click Add 
    And I enter the product "Amazing Jake and the Red Balloon" to Supply
    And I click Add 
    And I click on Left arrow
    And I click on Shipping Charges icon 
    And I select Dispatch Charge Details and Dispatch Method
    And I click Apply
    And I click Return To Checkout
    And I retrieve Supply and Backordered Value
    And I make payment via Cheque  
    And I click on Checkout 
    And I run Billing Wave 
    And I click refresh on Documents
    And I open the Invoice note
    And I click on Find an Order
    And I enter the Document Reference and Search
    And I release the backorder 
    Then Line Item Status should be Backorder and Supply 
    And Ordered Value displayed should be equal to Supply and Backordered Value  