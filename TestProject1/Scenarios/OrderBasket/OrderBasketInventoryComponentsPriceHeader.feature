Feature: OrderBasketInventoryComponentsPriceHeader

#This feature file contains automated manual tests of RAVAUT-837 on Jira
#Select product of sub type - Set - Stock from Components
 @Order_Basket
  Scenario: Testing order process with product having Inventory from Components and Price from Header
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the set "BXN  Sports Set - Stock from Components" to use
    And I open first component to retrieve Available Qty
    And I open second component to retrieve Available Qty
    And I click on New Order button
    And I enter a company "account one" in Ship To field
    Then The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And Order Date should be today, Order Process Type should be "Invoice",
    And Order Type should be "Normal Sale", Currency Type should be "UK Sterling", Billing Plan should be "Advance Charge"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", and the Product 
    And I enter P/O Reference, Quantity 2, seller "Streamline Distribution"
    And I click on Calculate button  
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Edit Line icon
    And Configuration, Valuation, Supply Status, Net, sections should be displayed
    And Backorders, Held, Totals sections should be displayed
    And I click Save button
    And I click on Left facing arrow
    And I retrieve the Total Value
    And I click Checkout button
    And I click on Orders
    And I click Billing Wave Release
    And I click refresh on Documents
    And I click on Find an Order
    And I enter Customer 
    And I enter Product
    And I click on Search button
    And Order information should be correctly displayed 
    And Line Item Status should be displayed as Backorder
    And I click on the record for Summary
    And Order Type as "AdviceNote" should be displayed
    And Order Status as "Open Order" should be displayed
    And I click on Customer Service
    And I open the set  
    And Physical and Available quantity should be Null
    And I click on Save Record and Close Form button to close the record
    And I close the search form
    And I open product information panel for first component
    And Available quantity should be downgraded
    And I click Save Record and Close Form button
    And I open product information panel for second component
    And available quantity should be downgraded
    And I click Save Record and Close Form button