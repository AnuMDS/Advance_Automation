Feature: Backorders_Transfer to Product

#This feature file contains automated manual tests of RAVAUT-855 on Jira
# we will have to put a comment after feature file // minimum 2 backorders are required .... this will make sure whoever picks this script will make that arrangement 
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
  Scenario:2 Verifying backorders with Transfer to Product process
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open the first product to verify details "RAVE ROCKET and the Bus Ride Home"
    And I open the second product to verify details "RAVE ROCKET BIC Subject Code"
    And I click on Manage Backorders
    And I select first product on backorder wizard
    And I click On Add Symbol
    And I click on Next button
    And I click on Next button
    And I deselect first order details
    And I click on Next button
    And I click on the icon Copy or Transfer product
    Then Product To link box should be display under Transfer or Copy frame 
    And Product Version field should be disabled
    And Supply site To field should be display with defaulted Supply Site "Watford"
    And Copy checkbox should be display
    And Apply button should be disabled
    And Cancel button should be display
    And Cancel,Back and Next buttons should be display
    And Help, Finish button should be disabled
    And I search and select product to Transfer
    And I select Supply site from dropdown "Watford"
    And I click on Apply button from backorder wizard
    And I click on Next button
    And I click on Finish button from Backorder Wizard
    And I click on No in the message
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Refresh button from the action list icon in the window Documents
    And I retrieve document references for both the products
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Reference for first To Product
    And I enter Customer Name "account one"
    And I enter second product name 
    And I click on Search button
    And I select the order
    And I click on Transactions tab
    And Line Item Status for To product should be "BackOrder"
    And Backorders with Positive number
    And I close the record
    And I open the first product record
    And I select Inventory Overview tab
    And The backordered figure should be reduced by the quantity of the transfer
    And I click on save record and close form button
    And I click on Find Order from Customer services tab
    And I enter Reference for first From Product
    And I enter Customer Name "account one"
    And I enter first product name
    And I click on Search button
    And I select the order
    And I click on Transactions tab
    And Line Item Status for From product should be "Backorder Cancel"
    And Backorders with Negative number for From Product
    And I open the second product record
    And I select Inventory Overview tab
    And The backorder figure should be incremented
    And I click on save record and close form button
    
    
    
    
   