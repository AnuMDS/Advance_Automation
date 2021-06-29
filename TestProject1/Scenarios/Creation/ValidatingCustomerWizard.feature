Feature: ValidatingCustomerWizard

 Background:
  Given I am logged in Ingenta Commercial Application
  When I click on Customer Service
  And I click on New Customer button
  
 @CRM 
  Scenario: 1 Verifying Customer Wizard details
  Then Create New Person checkbox should be visible   
  And Create New Company checkbox should be visible
  And Company Details frame should be visible
  And Person Details frame should be displayed
  And Help ,Back, Next, Finish buttons should be disabled
  And Cancel button should be enabled
  
 @CRM 
  Scenario: 2 Verifying Company Frame details
  Then Create New Company checkbox should be visible
  And Company Details frame should be visible
  And Reset button should be visible
  And Help ,Back, Next, Finish buttons should be disabled
  And Cancel button should be enabled

 @CRM 
  Scenario: 3 Check Country field
  And I select the Create New Company check box 
  Then the Country field should be enabled
 
 @CRM 
  Scenario: 4 Verifying Country field validation
  And I select the Create New Company check box 
  And I press tab from Country field
  Then a message stating that Country cannot be blank should be displayed

 @CRM  
  Scenario: 5 Search and Select Country functionality
  And I select the Create New Company check box 
  And I select a Country "United Kingdom"
  Then the data should be accepted and Type field should be enabled
  
 @CRM 
  Scenario: 7 Verifying Template field
  And I select the Create New Company check box 
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller" 
  Then data should be accepted and Template field should not be empty 
  And rest of the fields in the Company frame should be enabled 
  And Website should be disabled
 
 @CRM 
  Scenario: 13 Checking Name Type field
  And I select the Create New Company check box 
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller" 
  Then Name Type field should default to Company Name
  
 @CRM 
  Scenario: 14 Validating Name Type functionality
  And I select the Create New Company check box 
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller" 
  And I clear the Name Type field and press tab
  Then message stating that Name Type cannot be empty should be displayed
  
 @CRM 
  Scenario: 15 Verifying Name Type field
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller" 
  And I press tab from the role field and Name Type field is default to Company Name 
  And I clear the Name Type field and press tab
  Then Name Type field should be cleared
  
 @CRM 
  Scenario: 15 Verifying Name Type functionality
  And I select the Create New Company check box
  And I select a Country "United Kingdom"
  And I select a Type of Company "Bookseller"       
  And I clear the Name Type 
  Then selecting a Name Type again should be possible
  
 @CRM 
  Scenario: 1617 Verifying Valid Companies and Default Company Name Type is checked
  And I select the Create New Company check box 
  And I select a Country "United Kingdom"
  And I select a Type of Company "Bookseller"        
  Then Click on the link to Name Type, Name Types record will be displayed and Valid Companies and Default Company Name Type should be checked
  And Name Type record should be closed by clicking the 'x' at top right 
 
 @CRM 
  Scenario: 18 Navigating to Company Name field 
  And I select the Create New Company check box 
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"    
  And I press tab from the Name Type field 
  Then focus should be on Company Name field

@CRM 
  Scenario:  19 Verifying Company Name field 
  And I select the Create New Company check box 
  And I select a Country "United Kingdom"
  And I select a Type of Company "Bookseller"   
  And I click on Company Name field
  And I press Tab from the Company Name field
  Then there should be a message stating that Name cannot be empty
  
 @CRM 
  Scenario: 27 Validating Invalid email
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter an Email address of more than two fifty characters 
  And I press tab from Email
  Then there should be a message stating The Email Address is invalid. Please enter a valid Email Address
  
@CRM 
  Scenario: 28 Validating Valid email
  And I select the Create New Company check box
  And I select a Country "United Kingdom"
  And I select a Type of Company "Bookseller"
  And I enter Email address 
  And I press tab from Email
  Then data should be accepted  
  
 @CRM 
  Scenario: 29 Validating Invalid Area code
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter an Area Code "12345678"
  Then area code of only five digits should be accepted
 
 @CRM  
  Scenario: 30 Validating Valid Area code
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter an Area Code "01234"
  And I press tab from area code
  Then data should be accepted and Number field should have focus
  
 @CRM 
  Scenario: 31 Validating Invalid Number field
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter a Number of more than twenty digits
  Then invalid number should not be accepted
  
@CRM 
  Scenario: 32 Validating Valid Number field
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter Number
  And I press tab from Number field
  Then Number should be accepted
 
 @CRM 
  Scenario: 45 Validating Valid Floor name
  And I select the Create New Company check box
  And I select a Country "United Kingdom"
  And I select a Type of Company "Bookseller"
  And I enter a Company name
  And I click on Next button
  And I click on Floor field
  And I enter Floor "4th Floor"  
  And I press tab from floor field 
  Then data should be accepted, focus should be in the Building field
  
 @CRM 
  Scenario: 46 Verifying Floor field
  And I select the Create New Company check box
  And I select a Country "United Kingdom"
  And I select a Type of Company "Bookseller"
  And I enter a Company name
  And I click on Next button
  And I click on Floor field
  And I enter Floor "4th Floor" 
  And I re-select and clear the Floor field 
  And I press tab from floor field 
  Then focus should be in the Building field
  
 @CRM 
  Scenario: 47 Validating Invalid Building name
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter a Company name
  And I click on Next button
  And I click on Building field
  And I enter a building name of more than fifty characters
  And I press tab from building field 
  Then building name of upto fifty characters should only be accepted
  
@CRM 
  Scenario: 48X Validating Valid Building name
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter a Company name
  And I click on Next button
  And I click on Building field
  And I enter Building name "Shard"
  And I press tab from building field 
  Then data should be accepted, focus should be on Street Name 
  
@CRM 
  Scenario: 49 Verifying Building field
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter a Company name
  And I click on Next button
  And I click on Building field
  And I enter Building name "Shard"
  And I re-select and clear the building field 
  And I press tab from building field 
  Then focus should be on Street Name 
  
 @CRM  
  Scenario: 50X Validating Invalid Street name
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter a Company name
  And I click on Next button
  And I click on Street name field
  And I enter more than fifty characters in the Street Name field
  And I press tab from Street name field 
  Then street name of upto fifty characters should only be accepted
  
 @CRM 
  Scenario: 51 Validating valid Street name
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter a Company name
  And I click on Next button
  And I click on Street name field
  And I enter Street name "Abbey"
  And I press tab from Street name field 
  Then data should be accepted, focus should be in District field

@CRM 
  Scenario: 60 Verifying valid Postcode 
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter a Company name
  And I click on Next button
  And I enter Postcode
  And I press tab from Postcode field 
  Then data should be accepted, focus should be on QAS button

 @CRM 
  Scenario: 61 Entering UK format Postcode 
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter a Company name
  And I click on Next button
  And I enter Postcode
  And I re-select the Postcode, enter a correctly formatted UK postcode "OX29 9ZZ"
  And I press tab from Postcode field 
  Then data should be accepted, focus should be on QAS button
 
 @CRM 
  Scenario: 6263 Verifying Reset button
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter a Company name
  And I click on Next button
  And I enter House No 29
  And I enter Street name "Abbey"
  And I enter Town "South Bank"
  And I enter County "Kent"
  And I enter Postcode 
  And I click on Reset button
  Then all the fields in the Address frame should be cleared
  
 @CRM  
  Scenario: 6264 Reviewing Display Address frame 
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter a Company name
  And I click on Next button
  And I enter House No 29
  And I enter Street name "Abbey"
  And I enter Town "South Bank"
  And I enter County "Kent"
  And I enter Postcode
  Then in the Display Address frame Refresh button should be visible 
  And Manual Edit check box should be visible
    
 @CRM 
  Scenario: 65 Verifying Refresh button
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller"
  And I enter a Company name
  And I click on Next button
  And I enter Business Name "Ingenta"
  And I enter House No 29
  And I enter Floor "4th Floor"
  And I enter Building name "Shard"
  And I enter Street name "Abbey"
  And I enter District "Northway"
  And I enter Town "South Bank"
  And I enter County "Kent"
  And I enter Postcode
  And I click on Refresh button
  Then Address entered should be displayed in the Display Address frame
