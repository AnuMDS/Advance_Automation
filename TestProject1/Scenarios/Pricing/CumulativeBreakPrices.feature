Feature: CumulativeBreakPrices

@Pricing
  Scenario: Creating Cumulative Break Prices 
  Given I am logged in Ingenta Commercial Application
  When I click on Product Management
  And I click on New Prices
  And I select a Price Type "Standard Price"
  And I select a Price Name "Contract Price"
  And I select a Currency Type "Euro"
  And I check Approved checkbox
  And I enter Price 60
  And I select Cumulative Break
  And I select a product "Amazing Jake and the Shaggy Dog"
  And I select product version "Main Market Edition" 
  And I select a Product Sub-Type "Book- Paperback"
  And I select a License "Sale"
  Then Cumulative Break should be checked
  And Price and Renew Price fields should be cleared and disabled
  And I click on Price Breaks tab
  And I right click in the list view and select New
  And I enter a Break Quantity 2, Price 10, Renew Price 40 
  And I enter a Break Quantity 3, a Price 20, Renew Price 50 
  And I enter a Break Quantity 4, a Price 30, Renew Price 60
  And data should be correctly displayed in the list view 
  And I click on Save button for Product Price record
  And I click on Price Breaks tab
  And Quantity Break of 9999 should be automatically created with a Price and Renew Price equal to the highest Quantity Break
  
  