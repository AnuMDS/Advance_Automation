Feature: Promotion Product Options - All Products

#This feature file contains automated manual tests of RAVAUT-811 on Jira
@PromotionsAndDiscounts
  Scenario: Verifying All Products option from Product Options
    Given I am logged in Ingenta Commercial Application
    When I click on Sales & Marketing
    And I create Campaign Record
    And I click on Save Record and close the form button
    And I open the Campaign record 
    And I click on Promotions/Mailings
    And I click on Create New Promotion 
    And I select radio button Start New Promotion 
    And I enter name in New Promotion Record
    And I select Organisation "Alpha Books"
    And I click on Qualification
    And I check the checkbox Product
    And I select Product Option "All Products"
    And I click on binocular icon in the left window box
    And I click on Search for Qualification Lists
    And I drag and drop the list on the node in left side frame box
    And I click on the added list to see the collection of products
    Then "SJB Qualification List Product 1" ,"SJB Qualification List Product 2" should be displayed under Qualification Lists
    And I click on Offers tab
    And Offer Tab should be disabled
    And I click on Save Record to activate Offers tab
    And Offer Tab should be activated
    And I click on New Icon 
    And I enter Name from New Promotion Offers Record
    And I enter Offer Type "Free Item(s)"
    And I click on Details tab
    And Details Tab should be activated
    And I select Product Options "All Products"
    And I click on binocular icon in the left window box
    And I click on Search for Product offer Lists
    And I select product from list 
    And I drag and drop selected product under Product offers
    And I enter start Time on New Promotion Offers Record Page 
    And I click on Save Record and Close Form button
    And Name of Promotions and Offer Type as "Free Item(s)" should be displayed under Offers tab
    And I click on New Icon 
    And I enter Name from New Promotion Offers Record
    And I enter Offer Type "Freight/Shipping"
    And I enter Offer Definition on New Promotion Offers Record page "Freight Discount"
    And I enter message under Description "message description"
    And I check the checkbox Auto Apply To Order
    And I select Qualification parent
    And I enter start Time on New Promotion Offers Record Page
    And I click on Save Record and Close Form button
    And Name of Promotions and offer type as "Freight/Shipping" should be displayed under Offers tab
    And I click on All Promotions View
    Then Promotions record should be saved and displayed under All promotions view with Promotion Name
    And I click on All Campaigns View
    And Campaign Record should be saved and displayed under All Campaign records view with Campaign Name
    And I click on Save Record and Close Form button to close all the records
    