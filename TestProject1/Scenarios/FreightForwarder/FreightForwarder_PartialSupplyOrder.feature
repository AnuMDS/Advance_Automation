Feature: FreightForwarder_PartialSupplyOrder

#This feature file contains automated manual tests of RAVAUT-914 on Jira
#Select product of sub type - Book- Paperback
@FreightForwarder
  Scenario:1 Testing Freight Forwarder with Partial Supply Order 
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "RAVE ROCKET and the Bus Ride Home" to be used
    And I verify the product "RAVE ROCKET and the Big Fat Wood Pigeon" to be used    
    And I click on Orders 
    And I click on New Order
    And I enter "RAVE Freight Forwarder" in Ship To field
    And I click Order Attributes tab
    And I enter Default PO Reference and click Apply
    And I click on Red Arrow
    And I enter the product "RAVE ROCKET and the Bus Ride Home" to deplete the stock 
    And I enter quantity
    And I click Add 
    And I enter the product "RAVE ROCKET and the Big Fat Wood Pigeon" to deplete the stock 
    And I enter quantity
    And I click Add 
    And I click on Left arrow
    And I click on Shipping Charges icon 
    And I select Dispatch Charge Details and Dispatch Method
    And I click Apply
    And I click Return To Checkout
    Then Backordered Shipping Value should be equal to the Despatch Charge selected
    And I make payment via Cheque  
    And I click on Checkout 
    And I run Billing Wave 
    And I click refresh on Documents
    And I open the Advice note created
    And I click on Find an Order
    And I enter the Document Reference and Search
    And I release backorders 
    And Line Item Status should be Backorder for both the Products

  Scenario:2 Performing Goods In
    Given I am logged in Ingenta Commercial Application 
    When I click on Inventory
    And I click on Goods In button 
    And I click on Next button
    And I enter product "RAVE ROCKET and the Bus Ride Home" to goods in 
    And I check the Miscellaneous Goods In checkbox
    And I enter loose packets 1
    And I click on Add Button 
    And I enter product "RAVE ROCKET and the Big Fat Wood Pigeon" to goods in 
    And I check the Miscellaneous Goods In checkbox
    And I enter loose packets 1
    And I click on Add Button 
    And I click on Finish button to close Goods In wizard