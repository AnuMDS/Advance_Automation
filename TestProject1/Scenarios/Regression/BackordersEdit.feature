Feature: BackordersEdit

#This feature file contains automated manual tests of RAVAUT-858 on Jira
#Select product of sub type - Book- Paperback
@Backorder,@Regression
  Scenario:1 Creating a Backorder
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the backorder product "RAVE ROCKET Two Brothers" 
    And I click on New Order button
    And I enter a company "account one" in Ship To field
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
@Backorder,@Regression
  Scenario:2 Creating a Backorder
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the backorder product "RAVE ROCKET Book No Stock" 
    And I click on New Order button
    And I enter a company "account one" in Ship To field
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
    
#Backorders for products mentioned below should exist  
@Backorder,@Regression  
  Scenario:3 Editing backorders
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open information panel for "RAVE ROCKET Two Brothers"
    And I go to Backorder Wizard
    And I select the Product to release
    And I click on Blue plus icon to add Product
    And I click Next button 
    And I click Next button 
    And I deselect an Order
    And I click Next button 
    And I click All tab
    And I click Edit icon
    And I click on the Customer icon in front of the Ship To field
    And If customer has only one address Type, insert a second 
    And I increase the Quantity by 5
    And I click on Apply
    And I click Next button 
    And I click Finish button
    And I click OK for pop up stating 'Process flow has been submitted for processing'
    And I click No to Close the wizard
    And I Click on Orders
    And I run Billing Wave Release
    And I click refresh on Documents
    And I open the Invoice generated
    And I click on Customer Service
    And I open Product information panel 
    Then inventory should be decreased by the increased quantity 
    And I go to Backorder Wizard
    And I select Product to release
    And I click on Blue plus icon to add Product
    And I click Next button 
    And I click Next button
    And I deselect an Order
    And I click Next button 
    And I click All tab
    And I click Edit icon
    And I decrease the Quantity by 3
    And I click on Apply
    And I click Next button 
    And I click Finish button
    And I click OK for pop up stating 'Process flow has been submitted for processing'
    And I click No to Close the wizard
    And I Click on Orders
    And I run Billing Wave Release
    And I click refresh on Documents
    And I open the Advice note generated
    And I click on Customer Service
    And I open information panel of the Product
    And inventory should be increased by the decreased quantity 
    And I click on Customer Service
    And I open product information panel for "RAVE ROCKET Book No Stock"
    And I retrieve Sale quantity from overview sub tab
    And I Click on Orders
    And I click Find an Order
    And I search for the customer with new address inserted and product
    And I select a backorder line  
    And I click on Backorders from Order Release
    And I click Edit icon
    And I select a Contact card 
    And I click on Apply Button 
    And I click Next button 
    And I click Finish button
    And I click OK for pop up stating 'Process flow has been submitted for processing'
    And I click No to Close the wizard
    And I Click on Orders
    And I run Billing Wave Release
    And I click on Backorders from Order Release
    And I check Release checkbox
    And I check Override Product Supply Status checkbox
    And I click Next button 
    And I click Finish button
    And I click OK for pop up stating 'Process flow has been submitted for processing'
    And I click No to Close the wizard
    And I Click on Orders
    And I run Billing Wave Release
    And I refresh Documents section
    And I open the Invoice generated
    And I click on Customer Service
    And I open information panel of the Product 
    And Sale quantity should be increased 
    