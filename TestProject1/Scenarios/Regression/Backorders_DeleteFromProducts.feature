Feature: Backorders_DeleteFromProducts

#This feature file contains automated manual tests of RAVAUT-859 on Jira
# we will have to put a comment after feature file // minimum 2 backorders with two different customers are required .... this will make sure whoever picks this script will make that arrangement 
@Backorder,@Regression
   Scenario: 1 Creating an Order
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I search the product to verify details "RAVE ROCKET and the Bus Ride Home"
    And I click on New Order button
    And I enter a company "account one" in Ship To field
    Then The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", a Product "RAVE ROCKET and the Bus Ride Home" 
    And I enter P/O Refrence
    And I enter Qty 2
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    And I click Checkout button
    And I click on Orders
    And I run Billing Wave Release
    And I click refresh on Documents
    
    
    
    
@Backorder,@Regression
  Scenario:2 Verifying deletes the backordered quantity of product
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open the Product record for "RAVE ROCKET and the Bus Ride Home"
    And I click on Manage Backorders
    And I select product on backorder wizard
    And I click On Add Symbol
    And I click on Next button
    And I click on Next button
    And I deselect first order details
    And I click on Next button
    And I click on All tab
    And I click on Products tab from backorder wizard
    And I click on Delete Icon
    And I click on Undo Icon
    And I click on No from popup message
    And I click on Undo Icon
    And I click on Yes from popup message
    And I click on Delete Icon
    And I click on Next button
    And I click on Finish button from backorder wizard
    And I click on No in the message
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Refresh button from the action list icon in the documents window
    And I retrieve document reference
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter product name
    And I enter Reference from documents window
    And I click on Search button
    Then order should be display under order Query page 
    And I close the search criteria field
    And I click on Transactions tab
    And Line Item Status Should be "Backorder Cancel"
    And Backorders with Negative number
    And I Open the product record
    And I select Inventory Overview tab
    And I click on Refresh button from product information panel
    And The backordered figure should be reduced by the quantity of the Delete
    And I click on save record and close form button
    
  