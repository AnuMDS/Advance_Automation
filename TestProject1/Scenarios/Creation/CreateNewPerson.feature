Feature: CreateNewPerson

 @CRM 
  Scenario: Creating a new person
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Customer button
    And I check the Create New Person checkbox
    And I select the Country "United Kingdom" 
    And I select a Type of Person "Standard"
    And I enter Forename "RAVE"
    And I enter Family Name 
    And I enter an Email address
    #And I enter an Area Code 01234
    #And I enter Number 
    #And I enter a Ext 981
    #And I enter Account No
    And I click on Next button
    #And I select a Job Title "Sales Assistant"
    And I enter Business Name "Ingenta"
    And I enter House No 29
    And I enter Floor "4th Floor"
    And I enter Building name "Shard"
    And I enter Street name "Abbey"
    And I enter District "Barnet"
    And I enter Town "South Bank"
    And I enter County "Kent"
    And I enter Postcode 
    And I click on Refresh button
    Then Address should be displayed in the Display Address frame
    And I check Open on Finish checkbox for Person
    And I click on Finish Button
    And Name and Account Number displayed in information panel should be correct