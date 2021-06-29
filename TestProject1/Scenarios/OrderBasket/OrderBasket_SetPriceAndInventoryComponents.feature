Feature: OrderBasket_SetPriceAndInventoryComponents

#This feature file contains automated manual tests of RAVAUT-838 on Jira
#select product sub type - set - stock from components
@Order_Basket
  Scenario: Set price and inventory components
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the details for Set stock from components product "BXN  Sports Set - Stock from Components"
    And I click on New Order from folder list
    And I enter customer name in Ship To field "Sandman Kurala"
    Then The Ship To, Bill To, User Addresses should be populated with the same street address
    And Account Number, Telephone Number and Email Address should be correctly displayed
    And I click on Order attributes tab
    And I change the Release Priority to "Immediate"
    And Order Date should be Today's date and Order Process Type should be "Invoice"
    And Order Type should be "Normal Sale" and The Currency Type should be "UK Sterling"
    And Billing Plan should be "Advance Charge"
    And I click on the red arrow
    And I enter product on Orders Id wizard
    And I enter P/O Refrence
    And I enter Qty 6
    And I click on Add Item
    And I click on blue colour left arrow icon on the top right hand side of the window
    And There should be Columns for Values, Supply, Backordered, Held, Totals
    And The values should be correctly displayed under Backordered and Totals column
    And I click on Checkout button
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    And I click on Customer Service
    And I click on Find Orders from folder list
    And I enter Customer Name "Sandman Kurala"
    And I click on Search button
    And Order details should be correctly displayed on Order Query page
    And On Order Query Page Order should be displayed as Backorder
    And Order Type as "AdviceNote" should be displayed
    And Order Status as "Open Order" should be displayed
    And Document reference should be displayed under summary tab
    And I open the product record
    And I click on Inventory tab from Product Information Panel
    And Physical and Available column data should be Empty
    And I click on Save Record and Close Form button to close the record
    And I close the search form
    
    And I open first product
    And I click on Inventory tab from Product Information Panel
    And Available Inventory should be decreased
    And I click on Save Record and Close Form button to close the record
    
    And I open second product
    And I click on Inventory tab from Product Information Panel
    And Available Inventory should be decreased
    And I click on Save Record and Close Form button to close the record
    And I Click on Orders
    And Advice note should be displayed in Documents window
    And I Select the Order Item, in the lower grid click on the link to the Invoice