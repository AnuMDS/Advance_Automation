Feature: CreateCustomerLinkedToExistingPerson

  @CRM 
   Scenario:  Creating customer linked with a company
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Customer button
    And I enter a Person "account one"
    Then Create New Company checkbox should be checked
    And I select a Country "United Kingdom" 
    And I select a Type of Company "Bookseller" 
    And I enter a Company name 
    And I select a Website Type "Old"
    And I enter the Website 
    And I enter an Email address
    #And I enter an Area Code 01234
    #And I enter Number 
    #And I enter a Ext 981
    And I click on Next button
    And I click Ok for the message stating 'Person is linked to Company'
    And I select a Job Title "Sales Assistant"
    And I enter House No 29
    And I enter Floor "4th Floor"
    And I enter Building name "Shard"
    And I enter Street name "Abbey"
    And I enter District "Oxford"
    And I enter Town "South Bank"
    And I enter County "Kent"
    And I enter Postcode
    And I click on Refresh button
    And Address entered should be displayed in the Display Address frame
    And I check the Manual Edit Checkbox
    And the fields shoud be editable
    And I check the Open on Finish Checkbox
    And I select a Type "Street Address"
    And I select departments "Finance", "Sales"
    And Address Management frame should display Person name and Company name
    And I click Finish 
    And all the mandatory fields should not be blank 
    