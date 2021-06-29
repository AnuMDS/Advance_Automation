Feature: CustomerQualification
#This feature file contains automated manual tests of RAVAUT-801 on Jira
@PromotionsAndDiscounts
  Scenario: Creating promotion list type- Qualification List
    Given I am logged in Ingenta Commercial Application
    When I click on Sales & Marketing
    And I click on Promotion & Mailing List
    And I click on All Promotion & Mailing List view 
    And I click on New record
    And I enter promotion code 
    And I enter name of the code "RaveAutomation"
    And I enter description of the code "PromotionsMailing"
    And I check Qualification List checkbox
    And I click on Customers tab
    And I check the chekbox Customer List
    And I select multiple Customers "Adam" , "Sue"
    And I click on Add 
    Then customers "Adam" "Sue" should be displayed below
    And Customer List checkbox should be deactivated
    And I check Customer Classification List checkbox
    And I click on Customer Classifications tab
    And I click on New to create Customer Classifications
    And I enter Classification Type "Customer Group"
    And I enter Lookup Code Record ID "Sales & Marketing"
    And I click on OK button
    And Classification Type "Customer Group" should be displayed below
    And checkbox Customer Classification List should be deactivated
    And I click on Roles tab
    And I check Role List checkbox
    And I click on New to create Roles
    And I enter Role Type "Customer Services"
    And I click on OK button
    And Role Type "Customer Services" should be displayed below
    And checkbox Role List should be deactivated
    And I click on Territory tab
    And I check Territory List checkbox
    And I enter a Territory "United Kingdom"
    And I click on Add button from Promotions lists 
    And Territory "United Kingdom" should be displayed below
    And checkbox Territory List should be deactivated
    And I click Save Record and Close Form button
    And Record should be saved with Code and Name entered
    
    
    