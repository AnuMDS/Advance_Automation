Feature: Backorders_TransferToCustomer

#This feature file contains automated manual tests of RAVAUT-857 on Jira
# we will have to put a comment after feature file // minimum 2 backorders are required .... this will make sure whoever picks this script will make that arrangement 
@Backorder,@Regression
   Scenario: 1 Creating an Order
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I search the product to verify details "golf"
    And I click on New Order button
    And I enter a company "account two" in Ship To field
    Then The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", a Product "golf"
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
  Scenario:2 Verifying backorders with Transfer to Customer process
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open the Product record for "Golf"
    And I click on Manage Backorders
    And I search and select customer "account two"
    And I click On Add Symbol from Backorder wizard
    And I click on Next button
    And I click on Next button
    And I deselect all the backorder for product
    And I click on Next button
    And I click on Customers tab from backorder wizard
    And I click on Copy or Transfer customer
    Then Copy checkbox should be display under Transfer or Copy ship to frame
    And Apply button should be disabled under Transfer or Copy ship to frame
    And Cancel button should be display under Transfer or Copy ship to frame
    And I enter customer name "account one" 
    And I click on Apply button from Transfer or Copy ship to frame
    And I click on Next button
    And I click on Finish button from Backorder Wizard
    And I click on No in the message
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Refresh button from the action list icon in the window Documents
    And I retrieve both the document references
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Reference for first From Customer
    And I enter product name
    And I enter Customer Name "account two"
    And I click on Search button
    And I select the order
    And I click on Transactions tab
    And Line Item Status for From Customer should be "Backorder Cancel"
    And Backorders with Negative number for From Customer
    And I close the record
    And I click on Find Order from Customer services tab
    And I enter Reference for first To Customer
    And I enter product name 
    And I enter Customer Name "account one"
    And I click on Search button
    And I close the search criteria field
    And I select the order
    And I click on Transactions tab
    And Line Item Status for To Customer should be "BackOrder"
    And Backorders with Positive number for To Customer
    And I Open the product record
    And I select Inventory Overview tab
    And I click on Refresh button from product information panel
    And Backorder figure should be remain unchanged
    
