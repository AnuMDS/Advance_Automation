Feature: BackordersCopyToCustomer

#This feature file contains automated manual tests of RAVAUT-854 on Jira
#Select product of sub type - Book- Paperback
@Backorder,@Regression
  Scenario: 1 Creating a Backorder  
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the backorder product "RAVE ROCKET NYP No Stock"
    And I click on New Order button
    And I enter a company "account two" in Ship To field
    Then The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", and Product 
    And I enter P/O Reference, Quantity 5  
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    And I click Checkout button
    And I click on Orders
    And I run Billing Wave Release
    And I click refresh on Documents

#Select product of sub type - Book- Paperback 
#Backorder for products mentioned below should exist 
@Backorder,@Regression
  Scenario: 2 Creating a Backorder  
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the backorder product "RAVE ROCKET Two Brothers"
    And I click on New Order button
    And I enter a company "Sandman Kurala" in Ship To field
    Then The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", and Product 
    And I enter P/O Reference, Quantity 5  
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    And I click Checkout button
    And I click on Orders
    And I run Billing Wave Release
    And I click refresh on Documents      

@Backorder,@Regression    
  Scenario: 3 Testing Orders- Backorders (Copy to Customer)
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I retrieve quantity of Confirmed Backorders for "RAVE ROCKET NYP No Stock"
    And I go to Backorder Wizard
    And I select a Customer "account two" and click Blue plus icon
    And I click Next button 
    And I click Next button 
    And I deselect all other Backorders except for the product 
    And I click Next button
    And I click on Copy or Transfer Customer icon from Customers tab
    Then fields like Customer To and Address Type should be displayed
    And buttons like Apply as disabled, Cancel and copy checkbox for Customer should be displayed
    And buttons like Help and Finish as disabled, Cancel, Back, Next should be displayed
    And I select a Customer "account one"
    And I select an Address Type "edit test"
    And I check the Copy checkbox for Customer
    And I click Apply button
    And I click Next button 
    And I click Finish button
    And I click OK for pop up stating 'Process flow has been submitted for processing'
    And I click No to Close the wizard
    And I click on Orders 
    And I run Billing Wave Release
    And I click refresh on Documents
    And Invoice for the To Customer should have been produced
    And I click on Customer Service
    And I click on Find Orders
    And I search for transactions for To Customer under Order Query
    And Order Quantity should be correctly displayed
    And quantity of Confirmed Backorders should be increased for the product
    And I retrieve quantity of Confirmed Backorders for "RAVE ROCKET Two Brothers"
    And I go to Backorder Wizard
    And I select a Customer "Sandman Kurala" and click Blue plus icon
    And I click Next button 
    And I click Next button 
    And I deselect all other Backorders except for the product 
    And I click Next button 
    And I click on Copy or Transfer Customer icon from Customers tab
    Then fields like Customer To and Address Type should be displayed
    And buttons like Apply as disabled, Cancel and copy checkbox for Customer should be displayed
    And buttons like Help and Finish as disabled, Cancel, Back, Next should be displayed
    And I select a Customer "account one"
    And I select an Address Type "edit test"
    And I check the Copy checkbox for Customer
    And I click Apply button
    And I click Next button 
    And I click Finish button
    And I click OK for pop up stating 'Process flow has been submitted for processing'
    And I click No to Close the wizard
    And I Click on Orders
    And I run Billing Wave Release
    And I click refresh on Documents
    And Invoice for the To Customer should have been produced
    And I click on Customer Service
    And I click on Find Orders
    And I search for transactions for To Customer under Order Query
    And Order Quantity should be correctly displayed
    And quantity of Confirmed Backorders should be increased for the product 