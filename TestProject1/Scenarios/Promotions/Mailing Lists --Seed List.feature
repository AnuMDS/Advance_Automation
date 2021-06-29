Feature: Mailing Lists --Seed List

#This feature file contains automated manual tests of RAVAUT-810 on Jira
@PromotionsAndDiscounts
  Scenario: Verifying Seed List under Mailing tab
    Given I am logged in Ingenta Commercial Application
    When I click on Sales & Marketing
    And I click on All Promotions and Mailing List
    And I click on New button in the toolbar 
    And I enter abbreviation to the promotion code
    And I enter short description of the code in Name
    And I enter full description of the code in Description "Description of the code"
    And I check the radio button Mailing
    And I check the radio button Seed List under Mailing Lists tab 
    And I check Customer List checkbox from customer criteria
    And I click on Customers tab
    And I select multiple Customers Name "Mary" , "Steve" , "Adam" 
    And I click on ADD button
    Then Customer Name as "Mary Blake", "Steven Sheehan", "Adam Ant" should be displayed under Message Box
    And Customer List Checkbox should be disabled
    And Product List,Territory List and Audience List checkboxes should be disabled
    And Seed List,Customer Mailing radio buttons should be disabled
    And I click on Save record and close the form button
    And Code and Name should be displayed under All Promotions_Mailing List 