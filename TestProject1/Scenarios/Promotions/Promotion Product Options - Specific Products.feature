Feature: Promotion Product Options - Specific Products

#This feature file contains automated manual tests of RAVAUT-812 on Jira
@PromotionsAndDiscounts
  Scenario: Verifying Promotions Product Options with Specific Products option
    Given I am logged in Ingenta Commercial Application
    When I click on Sales & Marketing
    And I create Campaign Record
    And I click on Save Record button
    And I click on Promotions/Mailings
    And I click on Create New Promotion 
    And I select radio button Start New Promotion 
    And I enter name in New Promotion Record
    And I select Organisation "Alpha Books"
    And I uncheck the checkbox Allow Backorders
    And I click on Qualification
    And I check the checkbox Product
    And I select Product Option "Specific Products"
    And I enter Minimum Purchase Quantity 2
    And I click on binocular icon in the left window box
    And I click on Search for Qualification Lists
    And I drag and drop the list on the node in left side frame box
    And I click on the added list to see the collection of products
    And I click on Save Record and close the form button in the toolbar to close the promotions record 
    And I click on Save Record and close the form button in the toolbar to close the Campaigns record
    And I click on All Promotions View
    Then Promotions record should be saved and displayed under All promotions view with Promotion Name
    And I click on All Campaigns View
    And Campaign Record should be saved and displayed under All Campaign records view with Campaign Name