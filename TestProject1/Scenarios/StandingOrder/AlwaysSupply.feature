Feature: StandingOrderAlwaysSupply

@Standing_Order
#This feature file contains automated manual tests of RAVAUT-900 on Jira
  Scenario: Testing Standing Orders when Always Supply is flagged
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    #And I open a company information panel for "account one"
    And I create a new customer
    And I click on Profile Tab
    And I click on Marketing Tab
    And I click on Interests Tab 
    And I click on New to open New Companies Interests Record
    And I select Interest Type "Standing Order Sale"
    And I enter Standing Orders Quantity 1
    And I check the Always Supply checkbox 
    And I enter Customer Reference "5.0.1.1"
    And I enter Valid From Today's date
    And I click on Criteria Tab
    And I enter Product Series "Art Series"
    And I click on Save Form 
    And I click on General tab
    Then Name frame should display the product series starting with Ser:
    And I click Save and Close Form 
    And I click on New to open New Companies Interests Record
    And I select Interest Type "Standing Order Sale"
    And I enter Standing Orders Quantity 1
    And I check Always Supply checkbox
    And I enter Customer Reference "5.0.1.4"
    And I enter Valid From Today's date
    And I click on Criteria Tab
    And I enter an Author "Belinda Summers"
    And I click on new Interest Classifications Record
    And I select Interest Classification Type "BIC Subject Codes"
    And I enter Interest Classification Code "Fantasy"
    And I click Ok 
    And I click on Save Form 
    And Name frame should display the author name starting with Aut:
    And I click Save and Close Form
    
