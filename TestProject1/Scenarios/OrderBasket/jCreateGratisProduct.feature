Feature: jCreateGratisProduct

#This feature file contains automated manual tests of RAVAUT-813 on Jira
@Gratis, @Order_Basket
  Scenario: Creating new gratis product
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product
    And I select "Book- Paperback" from Product Type
    And I enter Title Prefix 
    And I enter Without Prefix 
    And I enter "Alpha Books" in Organization field 
    And I click on the Next button
    And I select a Dimension Group "Standard UK Paperback" 
    And I click on Apply button to Dimension Group
    And I click on Yes button to apply Dimension Group
    And I enter an Author "Harper Lee"
    And I click on New button in Dimensions List View
    And I select a Type "Unit weight" 
    And I enter a numeric value 1 
    And I select a Unit "Kilograms" 
    And I click on Ok button
    And I click on New button in Identifiers List view
    And I select an Identifier Type "ISBN 13"
    And I select a range "ISBN 13 (Global)" 
    And I click on Ok button
    And I enter a Pub Date "08/06/2020"
    And I enter a Copyright Year "2020"
    And I select a Product Discount Type "Fiction"
    And I select a Fulfilment Product Type "Publication"
    And I select a Inventory  Site "Watford"
    And I click on the Finish button
    Then new product is created with all the information submitted
    And I click on Fulfilment tab
    And I check the Gratis Only checkbox
    And checkboxes Gratis Only and Gratis Allowed should be checked
    And I click on Prices tab
    And I create a default price set
    And I click Save Record and Close Form button
   
    