Feature: ApplicableToTab

  Background:
  Given I am logged in Ingenta Commercial Application
  When I click on Customer Service
  And I click on New Product from Customer Services
  And I select "Book- Paperback" from Product Types
  And I enter without prefix
  And I enter Title prefix "title"
  And I enter imprint "Reef Books"
  And I click on Next Button from Create new product wizard
  And I enter pubdate
  And I click on Finish button from Create new product wizard
  And I click on Prices tab
  And I click on New button from active prices field
  And I checked the Default field checkbox
  And I select "Sale" from License Type and tab from the field
  And I select "Euro" from Currency Type dropdown list 
  And I checked Approved field checkbox
  And I enter "456" in price field
  And I enter "100.00" in Renew Price and tab from the field
  And I checked Tax Inclusive checkbox
  And I enter Effctive To Date as Future Date
  
@Pricing
 Scenario:1 Verifying fields from Applicable To tab  
             And I click on Save and Close the record from New record prices record wizard
             Then The above enter data should be correctly displayed on Active Prices list view from Product Id wizard
             And Product information under Prices tab with column Default should be checked
             And I click on New button from active prices field
             And I checked the Default field checkbox
             And I select "Sale" from License Type and tab from the field
             And I select "Euro" from Currency Type dropdown list 
             And I again enter "589.00" in price field
             And I enter "100.00" in Renew Price and tab from the field
             And I checked Tax Inclusive checkbox
             And I enter Effctive To Date as Future Date
             And I select "Main Market Edition" product version 
             And Only Main Market Edition Version should be displayed
             And Product Sub Type field should be enabled
             And I select "Book- Paperback" from Product Types and tab from the field
             And I select "Sale" from License Type and tab from the field
             And I click on Save and Close the record from New record prices record wizard
             And Popup message should be there because we enter data again in price field  for same currency type
   

@Pricing         
  Scenario:2 verifying price enter in price field is mentioned as default
             And I click on Save and Close the record from New record prices record wizard 
             And I open this same product from active prices tab
             Then verify if the price should be mentioned as default 