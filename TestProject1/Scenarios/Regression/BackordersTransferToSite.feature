Feature: BackordersTransferToSite

#This feature file contains automated manual tests of RAVAUT-856 on Jira
#Select product of sub type - Book- Paperback
@Backorder,@Regression
  Scenario:1 Creating a Backorder
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the backorder product "RAVE ROCKET Closed With Stock"
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
 
#Backorder for product mentioned below should exist 
@Backorder,@Regression      
  Scenario:2 Backorders - Transfer (Transfer to Site)
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open information panel for product "RAVE ROCKET Closed With Stock"
    And I check current site status if Closed if not I set it to "Closed"
    And I add a new Inventory Site "Oxford"
    And I perform Goods In  
    And I go to Backorder Wizard
    And I select the Product to release
    And I click on Blue plus icon to add Product
    And I click Next button 
    And I click Next button 
    And I click Next button 
    And I click on Copy or Transfer Product icon
    Then fields like Product To, Product Version, Supply Site To should be displayed
    And buttons like Apply as disabled, Cancel and copy checkbox should be displayed
    And buttons like Help and Finish as disabled, Cancel, Back, Next should be displayed
    And Transfer or Copy frame and Delete icon should be displayed
    And I select the Supply Site To created
    And I click Apply
    And Release frame and Undo icon should be displayed 
    And I click Next button 
    And I click Finish button
    And I click OK for pop up stating 'Process flow has been submitted for processing'
    And I click No to Close the wizard
    And I click on Orders 
    And I run Billing Wave Release
    And I click refresh on Documents
    And I open the documents generated
    And I retrieve the document references 
    And I click on Customer Service
    And I click on Find Orders
    And I search for transactions under Order Query
    And for first Order line the Order Line Status should be Backorder
    And for the second Order Line the Order Line Status should be Backorder Cancel and Backorder
    And the Backorder quantity should be negative
    And I open information panel of the Product
    And available inventory should be increased by Backorder quantity for original site
    And available inventory should be decreased by Backorder quantity for new site

    
    
    
    