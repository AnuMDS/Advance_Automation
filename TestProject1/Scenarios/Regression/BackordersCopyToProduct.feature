Feature: BackordersCopyToProduct

#This feature file contains automated manual tests of RAVAUT-852 on Jira
#Select product of sub type - Book- Paperback
@Backorder,@Regression
  Scenario:1 Creating a Backorder
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the backorder product "RAVE  Closed With Stock" 
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
 
#Backorder for products mentioned below should exist       
@Backorder,@Regression
  Scenario:2 Testing Orders- Backorders (Copy to Product)
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I retrieve quantity of Confirmed Backorders for From product "RAVE  Closed With Stock"
    And I retrieve quantity of Confirmed Backorders for To product "BXN Sports - Netball"
    And I go to Backorder Wizard
    And I enter the From product
    And I click on Blue plus icon to add Product
    And I click Next button 
    And I click Next button 
    And I deselect an Order
    And I click Next button 
    And I click on Copy or Transfer Product icon
    Then fields like Product To, Product Version, Supply Site To should be displayed
    And buttons like Apply as disabled, Cancel and copy checkbox should be displayed
    And buttons like Help and Finish as disabled, Cancel, Back, Next should be displayed
    And I enter To Product
    And I select Supply Site To "Watford"
    And I check the Copy checkbox
    And I click on Apply
    And I click Next button 
    And I click Finish button
    And I click OK for pop up stating 'Process flow has been submitted for processing'
    And I click No to Close the wizard
    And I Click on Orders 
    And I run Billing Wave Release
    And I click refresh on Documents
    And I retrieve the document reference 
    And I click on Customer Service
    And I click on Find Orders
    And I search for transactions under Order Query
    And Order Quantity displayed should be correct
    And quantity of Confirmed Backorders should be incremented for To product "BXN Sports - Netball"
    And quantity of Confirmed Backorders should remain unchanged for From product "RAVE  Closed With Stock"
    
    