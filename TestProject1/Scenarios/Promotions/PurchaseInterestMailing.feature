Feature: PurchaseInterestMailing

#This feature file contains automated manual tests of RAVAUT-808 on Jira
  @PromotionsAndDiscounts
   Scenario: Creating mailing list type- Purchase/Interest Mailing
    Given I am logged in Ingenta Commercial Application
    When I click on Sales & Marketing
    And I click on Promotion & Mailing List
    And I click on All Promotion & Mailing List view   
    And I click on New record
    And I enter promotion code 
    And I enter name of the code "RaveAutomation"
    And I enter description of the code "Purchase/Interest Mailing"
    And I select Mailing radio button
    And I click on Mailing List tab
    And I check the Author List checkbox
    And I check the Sub Type List checkbox
    And I check the Audience List checkbox
    And I check the Version List checkbox
    And I check the Language List checkbox
    And I click on Products tab 
    And I check the Product List checkbox
    And I select multiple Products "Great Barrier" , "Amazing jake"
    And I enter Quantity 2
    And I click Add button to add products
    Then products "Great Barrier" "Amazing Jake" should be displayed below
    And Product List checkbox should be disabled  
    And I click on Product Classifications tab
    And I check the Product Classification List checkbox
    And I click on New to create Product Classifications 
    And I select Product Classification Type "Access Management Scope Type"
    And I select Classification Code "In-Content"
    And I select Offer Definition "30% Discount"
    And I click OK button
    And product classification type "Access Management Scope Type" should be displayed below
    And Product Classification List checkbox should be disabled 
    And I click on Product Organisations tab
    And I check the Organisation List checkbox
    And I select "Streamline Distribution" to select all Organizations
    And I click Add button to add Product Organisations 
    And list of organisations should be displayed below
    And I check the Customer List checkbox
    And Organization List checkbox should be disabled 
    And I click on Customers tab
    And I select multiple Customers "Adam" , "Sue"
    And I click on Add to add Customers
    And customers "Adam" "Sue" should be displayed below
    And Customer List checkbox should be disabled
    And I check Customer Classification List checkbox in mailing
    And I click on Customer Classifications tab
    And I click on New to create Customer Classifications
    And I select Customer Classification Type "Agent Type" in mailing
    And I enter Lookup Code Record ID "Donor"
    And I click on OK button
    And Classification Type "Agent Type" should be displayed below
    And checkbox Customer Classification List should be disabled 
    And I click on Roles tab
    And I check Role List checkbox in mailing
    And I click on New to create Roles
    And I enter Role Type "Customer Services"
    And I click on OK button
    And Role Type "Customer Services" should be displayed below
    And checkbox Role List should be disabled
    And I click on Territory tab
    And I check Territory List checkbox in mailing
    And I enter a Territory "United Kingdom"
    And I click on Add to add Territory
    And Territory "United Kingdom" should be displayed below
    And checkbox Territory List should be disabled
    And I click Save Record and Close Form button
    And Record should be saved with Code and Name entered
    
   