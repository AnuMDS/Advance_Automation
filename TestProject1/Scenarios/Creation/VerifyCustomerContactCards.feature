Feature: VerifyCustomerContactCards

 @CRM 
  Scenario: Verifying Contact Cards tab
  Given I am logged in Ingenta Commercial Application
  When I click on Customer Service
  And I click on New Customer button
  And I create a New Person
  And I click on New Customer button
  And I select the Person created which is not already associated with another Company
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller" 
  And I enter a Company name
  And I click on Next button
  And I select a Job Title "Sales Assistant"
  And I enter House No 29
  And I enter Floor "4th Floor"
  And I enter Building name "Shard"
  And I enter Street name "Abbey"
  And I enter District "Barnet"
  And I enter Town "South Bank"
  And I enter County "Kent"
  And I enter Postcode 
  And I click on Departments option and select a number of Departments
  And I check the Open on Finish Checkbox
  And I click on Finish button
  And I click on Contact Cards tab
  Then there should be two Contact Cards with Role Type of Customer 
  And I open Contact Card for the Person
  #And Job title should be populated with the Job title selected
  And I click on Save Record and Close Form
  And I click on Overview tab
  And I click on Child grid arrow in Relationships tab
  And person should be associated with the Company created
  And I click on Departments sub tab
  And all the selected Departments should be displayed
  And I close the records 
  And click on the New Customer button
  And Create New Customer Wizard should open