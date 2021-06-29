Feature: ProductPricing

@Pricing
 Scenario:1 Verifying General tab from new product prices record wizard
  Given I am logged in Ingenta Commercial Application
  When I click on Customer Service
  And I click on New Product from Customer Services
  And I select "Book- Paperback" from Product Types
  And I enter without prefix
  And I enter "Reef" in Organization field
  And I click on Next Button from Create new product wizard
  And I enter pubdate
  And I click on Finish button from Create new product wizard
  And I click on pubdate from page
  And I click on Prices tab
  Then different prices tab should be displayed on screen
  And Active prices tab should be displayed
  And I select Currency Type "UK Sterling"
  And I enter "60" in price field and tab from the field
  And Add button should be enabled
  And I click on Add button 
  And I again select same currency Type
  And I again enter same price in price field
  And I click on Add button
  And The previously selected currency from Currency Type dropdown list should not be allowed again
  And The data should be correctly displayed in Active prices list view
  And I click on New button from active prices field
  And New product prices records should be displayed
  And Applicable To tab should be displayed
  And I select "Concurrency" from Price Type and tab from the field
  And I select "Student Price" from Price Name and tab from the field
  And I checked the Default field checkbox
  And Additional Licences added specifically to that product should be available for selection
  And I select "Sale" from License Type and tab from the field
  And I select "UK Sterling" from Currency Type dropdown list 
  And I checked Approved field checkbox
  And I enter "₹89.00" in price field
  And Price enter in Price field should be equal to Renew Price field
  And I enter "₹100.00" in Renew Price and tab from the field
  And I checked Tax Inclusive checkbox
  And Pricing Option radio buttons should be enabled
  And Effective From date should be Today's date
  And I enter "31/02/2014" in Effective From date field which is invalid
  And There should be Message regarding the format
  And Again I enter "19/02/2020" Effective From date which is valid and tab from the field
  And I enter "21/02/2020" Effective To date and tab from the field
  And I checked Pre Pub Price checkbox
  And The Effective To Date field should be defaulted to the Publication Date of the Main Market Edition less one Day
  And Active On Publication should be disabled
  And Again I enter "19/02/2020" Effective From date which is valid and tab from the field
  And Uncheck Pre Pub Price and check Active on Publication
  And The Effective From date should be  default to the Main Market Edition Version's Pub date and should be disabled.
           
           