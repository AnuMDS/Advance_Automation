Feature: DiscountPrices

  Background: 
  Given I am logged in Ingenta Commercial Application
  When I click on Product Management
  And I click on New Prices 
  And I select a Price Type "Standard Price"
  And I select a Price Name "Contract Price"
  And I select a Currency Type "Euro"
  And I check Approved checkbox
  And I enter Price 60
  And I enter an Effective To date
  And I enter data into Code "dummyCode" and Description "dummyDescription"
  And I select a product "Amazing Jake and the Shaggy Dog"
  And I select product version "Main Market Edition" 
  And I select a Product Sub-Type "Book- Paperback"
  And I select a License "Sale"
  
@Pricing 
  Scenario:1 Verifying Absolute break pricing with Order Quantity as Price Break type 
  And I select Absolute Break
  And I select Price Breaks tab
  And I select Order Quantity
  And I select Multiply By Concurrency checkbox
  And I right click in the list view and select New
  And I enter a Break Quantity 2, Price 10, a Renew Price 40 
  And I click on Save and Close Record button for Product Price record
  And I open product information panel from Product Management
  And I click on Prices tab
  Then product information panel should be updated with all the information submitted 
  And Price and Renew Price should be correctly displayed in Prices Tab 
  
@Pricing  
  Scenario:2 Verifying Cumulative break pricing with Order Quantity as Price Break type
  And I select Cumulative Break
  And I select Price Breaks tab
  And I select Order Quantity
  And I select Multiply By Concurrency checkbox
  And I right click in the list view and select New
  And I enter a Break Quantity 3, Price 20, a Renew Price 50 
  And I click on Save and Close Record button for Product Price record
  And I open product information panel from Product Management
  And I click on Prices tab
  Then product information panel should be updated with all the information submitted 
  And Price and Renew Price should be correctly displayed in Prices Tab 
  
@Pricing 
  Scenario:3 Verifying Band break pricing with Order Quantity as Price Break type
  And I select Band Break
  And I select Price Breaks tab
  And I select Order Quantity
  And I select Multiply By Concurrency checkbox
  And I right click in the list view and select New
  And I enter a Break Quantity 4, Price 30, a Renew Price 60 
  And I click on Save and Close Record button for Product Price record
  And I open product information panel from Product Management 
  And I click on Prices tab
  Then product information panel should be updated with all the information submitted 
  And Price and Renew Price should be correctly displayed in Prices Tab
  
@Pricing
  Scenario:4 Verifying Absolute break pricing with License Concurrency as Price Break type
  And I select Absolute Break
  And I select Price Breaks tab
  And I select License Concurrency
  And I select Multiply By Quantity checkbox
  And I right click in the list view and select New
  And I enter a Break Quantity 5, Price 40, a Renew Price 70
  And I click on Save and Close Record button for Product Price record
  And I open product information panel from Product Management 
  And I click on Prices tab
  Then product information panel should be updated with all the information submitted 
  And Price and Renew Price should be correctly displayed in Prices Tab 
  
@Pricing 
  Scenario:5 Verifying Cumulative break pricing with License Concurrency as Price Break type
  And I select Cumulative Break
  And I select Price Breaks tab
  And I select License Concurrency
  And I select Multiply By Quantity checkbox
  And I right click in the list view and select New
  And I enter a Break Quantity 6, Price 50, a Renew Price 80 
  And I click on Save and Close Record button for Product Price record
  And I open product information panel from Product Management 
  And I click on Prices tab
  Then product information panel should be updated with all the information submitted 
  And Price and Renew Price should be correctly displayed in Prices Tab 
  
@Pricing 
  Scenario:6 Verifying Band break pricing with License Concurrency as Price Break type
  And I select Band Break
  And I select Price Breaks tab
  And I select License Concurrency
  And I select Multiply By Quantity checkbox
  And I right click in the list view and select New
  And I enter a Break Quantity 7, Price 60, a Renew Price 90 
  And I click on Save and Close Record button for Product Price record
  And I open product information panel from Product Management 
  And I click on Prices tab
  Then product information panel should be updated with all the information submitted 
  And Price and Renew Price should be correctly displayed in Prices Tab
  
  
  