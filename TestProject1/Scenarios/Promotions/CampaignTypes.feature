Feature: CampaignTypes
 
#This feature file contains automated manual tests of RAVAUT-782 on Jira 
#This feature file contains automated manual tests of RAVAUT-804 on Jira 
  @PromotionsAndDiscounts
  Scenario: Creating Campaign Id record to verify the New Promotions Record Wizard
   Given I am logged in Ingenta Commercial Application
    When I click on Sales & Marketing
    And I create Campaign Record
    And I click on Save Record and close the form button
    Then New record should be saved with Unique Id in list of All Campaigns record 
    And I open the Campaign record 
    And I click on Promotions/Mailings
    And I click on Create New Promotion 
    And I select radio button Start New Promotion 
    And I enter name in New Promotion Record
    And I select Organisation "Alpha Books"
    And I click on Qualification
    And I check the checkbox Product
    And Qualifications Required check box should be disabled
    And Product tab should be Enabled
    And I click on Product Option 
    And All Products , Single Product and Specific Products should be displayed under Product Option
    
    