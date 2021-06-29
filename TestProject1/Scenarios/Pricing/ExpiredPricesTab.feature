Feature: ExpiredPricesTab

  Background: 
  Given I am logged in Ingenta Commercial Application
  When I click on Product Management
  And I click on New Prices 
  And I select a Price Type "Standard Price"
  And I select a Price Name "Contract Price"
  And I select a Currency Type "Euro"
  And I check Approved checkbox
  And I enter Price 60
  And I enter a From date "29/07/2019"
  And I enter an Effective To date "29/09/2019"
  And I enter data into Code "dummyCode" and Description "dummyDescription"
  And I select a product "Amazing Jake and the Shaggy Dog"
  And I select product version "Main Market Edition" 
  And I select a Product Sub-Type "Book- Paperback"
  And I select a License "Sale"
  
@Pricing
  Scenario:1 Updating product with Expired Date and Single Level as Pricing 
  #And I select Single Level
  And I click on Save and Close Record button for Product Price record
  And I open product information panel from Product Management 
  And I click on Prices tab
  And I click on All Prices tab
  Then Product should be displayed under All Prices
  And I click on Expired Prices tab
  And product should be updated in the Expired Prices tab with all the information submitted 
  
@Pricing
  Scenario:2 Updating product with Expired Date and Absolute Break as Pricing
  And I select Absolute Break
  And I select Price Breaks tab
  And I right click in the list view and select New
  And I enter a Break Quantity 5, Price 40, a Renew Price 70
  And I click on Save and Close Record button for Product Price record
  And I open product information panel from Product Management 
  And I click on Prices tab
  And I click on All Prices tab
  Then Product should be displayed under All Prices
  And I click on Expired Prices tab
  And product should be updated in the Expired Prices tab with all the information submitted 
  
@Pricing
  Scenario:3 Updating product with Expired Date and Cumulative Break as Pricing
  And I select Cumulative Break
  And I select Price Breaks tab
  And I right click in the list view and select New
  And I enter a Break Quantity 5, Price 40, a Renew Price 70
  And I click on Save and Close Record button for Product Price record
  And I open product information panel from Product Management 
  And I click on Prices tab
  And I click on All Prices tab
  Then Product should be displayed under All Prices
  And I click on Expired Prices tab
  And product should be updated in the Expired Prices tab with all the information submitted 
  
@Pricing 
  Scenario:4 Updating product with Expired Date and Band Break as Pricing
  And I select Band Break
  And I select Price Breaks tab
  And I right click in the list view and select New
  And I enter a Break Quantity 5, Price 40, a Renew Price 70
  And I click on Save and Close Record button for Product Price record
  And I open product information panel from Product Management 
  And I click on Prices tab
  And I click on All Prices tab
  Then Product should be displayed under All Prices
  And I click on Expired Prices tab
  And product should be updated in the Expired Prices tab with all the information submitted 
 