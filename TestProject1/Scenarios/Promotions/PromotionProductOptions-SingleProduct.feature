Feature: PromotionProductOptions - SingleProduct

#This feature file contains automated manual tests of RAVAUT-805 on Jira
 @PromotionsAndDiscounts
   Scenario: Creating promotion to apply for single product
    Given I am logged in Ingenta Commercial Application
    When I click on Sales & Marketing
    And I click on Campaigns
    And I click on All Campaigns view
    And I click on New record 
    And I enter Campaign name 
    And I enter Campaign Type "Standard (Undefined)"
    And I enter Start Date "18/10/2020"
    And I enter End date "28/10/2020"
    And I select Campaign Manager "Sue Burch"
    And I click on Save Record
    And I click on Promotions/Mailings tab
    And I right click on the Node with Campaign name to select Create New Promotion
    And I click on OK to start a New Promotion
    And I enter Promotion name
    And I enter a Organisation "Reef Books"
    And I deselect Allow Backorders checkbox
    And I click on Qualification tab
    And I select the Product checkbox
    And I select Product Option "Single Product"
    And I enter a product "Amazing Jake and the Red Balloon"
    And I click Save Record and Close Form button
    And I click Save Record and Close Form button
    Then Campaign name should be displayed under All Campaigns view
    And I go to Sales & Marketing
    And I click on Promotions
    And I click on All Promotions view
    And Promotion name should be displayed under All Promotions view
  
   
