Feature: Pete1

@E2E
  Scenario: Verifying my test so far works
    Given I am logged in Ingenta Commercial Application
    When I generate a P/O Ref
    And I click on Customer Service
    And I retrieve the picking location for "Amazing Jake and the Lost Weekend"
    And I click on New Order from folder list
    And I enter customer name in Ship To field "Smalls McCoy"
    And I click on Red colour Arrow
    And I select the Product to Order
    And I enter the generated P/O Reference
    And I enter Quantity 5 to Order
    And I click on Add Button to displayed product in the section below with correct information
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I click on Checkout button
    And I click on Orders
    And I click Billing Wave Release
    And I click on Refresh button from the action list icon in the window Documents
#    And Document Produced and Document Attached both the columns should be checked to generate relevant documents
    When I click on Inventory
    And I click on Goods In
    And I click on Next button 
    And I select a delivery of "Amazing Jake and the Lost Weekend"  
    And I select the Miscellaneous Goods In checkbox
    And I click Yes button to pop up message
#    And I enter Size 1
#    And I enter number of packets 5
    And I enter number of loose goods 5
    And I click on Add Button from Inventory goodsIn
    And I click on Next button
    Then product should be displayed in the Stock manager page 
#    And I move Inventory from Bulk to Forward 
    And I move loose Inventory from Bulk to correct Forward
    And I click on Finish button to close Goods In wizard
    And I confirm the Inventory movement transaction
    And I Click on Orders
    And I click Find an Order
    And I search for the customer reference
    And I select a backorder line with the current Customer Reference
    And I click on Backorders from Order Release