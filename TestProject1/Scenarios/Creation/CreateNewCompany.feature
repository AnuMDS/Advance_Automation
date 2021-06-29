Feature: CreateNewCompany

@CRM  
  Scenario: Creating a new Company
  Given I am logged in Ingenta Commercial Application
  When I click on Customer Service
  And I click on New Customer button
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller" 
  And I enter a Company name 
  And I select a Website Type "Old"
  And I enter the Website 
  And I enter Email address
  #And I enter Area Code 01234
  #And I enter Company Number 
  #And I enter an Ext 981
  And I click on Next button
  #And I select a Job Title "Sales Assistant"
  And I enter Business Name "Ingenta" 
  And I enter House No 29
  And I enter Floor "4th Floor"
  And I enter Building name "Shard"
  And I enter Street name "Abbey"
  And I enter District "Brent"
  And I enter Town "South Bank"
  And I enter County "Kent"
  And I enter Postcode 
  And I click on Refresh button
  Then Address entered should be displayed in the Display Address frame
  And I check Open on Finish checkbox
  And I click on Finish Button
  And Company name displayed in information panel should be correct 
  
   

  
  
  
  
  
  
