Feature: Qualification List_Offer List

#This feature file contains automated manual tests of RAVAUT-799 on Jira 
#This feature file contains automated manual tests of RAVAUT-803 on Jira 

  Background: 
    Given I am logged in Ingenta Commercial Application
    When I click on Sales & Marketing
    And I click on All Promotions and Mailing List
    And I click on New button in the toolbar 
    And I enter abbreviation to the promotion code
    And I enter short description of the code in Name
    And I enter full description of the code in Description "Description of the code"
    And I check the radio button Promotions
    
    @PromotionsAndDiscounts
    Scenario:1 Verifying Product Qualification List 
    And I check the checkbox Qualification List
    And I check the checkbox Product List
    And I select multiple products name "reefs" , "alpha" , "schedule"
    And I enter Quantity 2
    And I click on ADD button
    Then Title as "The Reef Collection","Signal from Alpha Prime","Test Schedule" should be displayed under list 
    And Product List checkbox should be disabled from Product Qualification List
    And I click Product Classifications tab 
    And I check the checkbox Product Classification List
    And I open wizard Promotion List Product Codes Record 
    And I enter Classification Type from Promotion List "Access Management Platform"
    And I enter Classification Code "Access Management Platform - AFR"
    And I enter Offer Definition "Additional 35%"
    And I click on Ok button
    And Classification Type as "Access Management Platform" and Classification Code as "Access Management Platform - AFR" should be displayed under list 
    And Product Classification List checkbox should be disabled from Product qualification List
    And I click on Product Organizations
    And I check the checkbox Organisation List
    And I check the checkbox Streamline Distribution
    And I click on ADD button from Product Qualification
    And List of Organization Name as "Streamline Distribution" ,"Crafts Publishing" and  should be displayed
    And Organization List checkbox should be disabled from Product Qualification List
    And I click on Save record and close the form button
    And Code and Name should be displayed under All Promotions_Mailing List 
    
    @PromotionsAndDiscounts
    Scenario:2 Verifying Product Offer List 
    And I check the checkbox Offer List
    And I enter Offer Definition "25% Discount"
    And I check the checkbox Product List
    And I select multiple products name "reefs" , "alpha" , "schedule"
    And I enter Quantity 2
    And I click on ADD button
    Then Title as "The Reef Collection","Signal from Alpha Prime","Test Schedule" should be displayed under list 
    And Product List checkbox should be disabled
    And I click Product Classifications tab 
    And I check the checkbox Product Classification List
    And I open wizard Promotion List Product Codes Record 
    And I enter Classification Type from Promotion List "Access Management Platform"
    And I enter Classification Code "Access Management Platform - AFR"
    And I enter Offer Definition "Additional 35%"
    And I click on Ok button
    And Classification Type as "Access Management Platform" and Classification Code as "Access Management Platform - AFR" should be displayed under list 
    And Product Classification List checkbox should be disabled
    And I click on Product Organizations
    And I check the checkbox Organisation List
    And I check the checkbox Streamline Distribution
    And I click on ADD button from Product Qualification
    And List of Organization Name as "Streamline Distribution" ,"Crafts Publishing" and  should be displayed
    And Organization List checkbox should be disabled
    And I click on Save record and close the form button
    And Code and Name should be displayed under All Promotions_Mailing List 
    
    