Feature: QuantityBreakPrices

@Pricing
  Scenario: Creating Quantity Break Prices
  Given I am logged in Ingenta Commercial Application
  When I click on Product Management
  And I click on New Prices
  And I select a Price Type "Standard Price"
  And I select a Price Name "Contract Price"
  And I select a Currency Type "Euro"
  And I check Approved checkbox
  And I enter Price 60
  And I select Absolute Break
  And I select a product "Amazing Jake and the Shaggy Dog"
  And I select a License "Sale"
  Then Price and Renew Price fields should be cleared and disabled
  And I click on Price Breaks tab
  And Price Breaks tab should be displayed
  And I right click in the list view and select New
  And Product Price Breaks record window should be displayed
  And I enter a Break Quantity 2, Price 10, Renew Price 40 
  And I enter a Break Quantity 3, a Price 20, Renew Price 50 
  And I enter a Break Quantity 4, a Price 30, Renew Price 60
  And data should be correctly displayed in the list view 
  And I click on Save button for Product Price record
  And I click on Price Breaks tab
  And Quantity Break of 9999 should be automatically created with a Price and Renew Price equal to the highest Quantity Break
  
  
  
  