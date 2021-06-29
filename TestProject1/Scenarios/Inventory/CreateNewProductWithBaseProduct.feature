Feature: CreateNewProductWithBaseProduct

#This feature file contains automated manual tests of RAVAUT-774 on Jira
@InventoryManagement
   Scenario: Creating new product with base product
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Book- Paperback" from Product Types
    And I enter without prefix
    And I enter Title prefix "title"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on Next Button from Create new product wizard
    And I enter Author name "Authors"
    And I select Dimension Group "Standard UK Paperback"
    And I click on Apply button from dimensions group
    And I click on New icon
    And I select Type from dimension record "Unit weight" 
    And I enter value "20"
    And I select ONIX Unit "Grams"
    And I click on OK button
    And I click on New icon from Identifiers table
    And I select Identifier Type "ISBN 13"
    And I select range "ISBN 13 (Global)" 
    And I click on OK button
    And I enter pubdate
    And I enter copyright year "2020"
    And I select product disount type "Fiction"
    And I select fulfilment product type "publication"
    And I click on Finish button from Create new product wizard
    Then product should be displayed with all the information as given during creation of the record
    And I click on Save Record and Close Form from product information panel
    And I create new product
    And I enter recently created product as Base product
    And All the information of the Base product should be reflected under imprint and without prefix field
    And I edit Title prefix "Title"
    And I edit Without prefix field
    And I enter description "one line description"
    And I click on Next Button 
    And Unit weight for base product should be same for newly created product
    And I enter pubdate "20/03/2020"
    And I enter copyright year "2020"
    And I check inventory sites to add multiple sites
    And I click on Finish button to create product
    And I click on Save Record and Close Form from product information panel