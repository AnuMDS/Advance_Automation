Feature: ClassificationTypePrices

@Pricing
  Scenario:1 Creating Classification Type with Single Level as Pricing
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
  And I select a product "Great Barrier Reef"
  And I select product version "Main Market Edition" 
  And I select a Product Sub-Type "Book- Paperback"
  And I select a License "Sale"
  And I right click on Customer Classification Types and select New
  And I select a Classification Type "Agent Type"
  And I select a Classification Description "A"
  And I click on Ok button
  And I click on Save and Close Record button for Product Price record
  And I open Product Information Panel 
  And I click on Prices tab
  Then classification Type and Classification Description should be displayed in the Customer Classification column of Prices tab 
  
  
  