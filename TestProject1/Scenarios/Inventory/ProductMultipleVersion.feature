Feature: ProductMultipleVersion

#This feature file contains automated manual tests of RAVAUT-775 on Jira
@InventoryManagement
   Scenario: Creating new product with multiple versions
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
    And I enter value "20.00"
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
    And I click on Product versions tab
    And I click on New button from product version
    And I select description "Airside"
    And I select Output Format "HardCover"
    And I check the checkbox Default version
    And I enter a message "Edition Statement" in Edition Statement
    And I enter Pubdate "25/09/2020"
    And I enter Copyright Year "2020"
    And I click on OK Button
    Then New version as "Airside" should be displayed under Product versions tab
    And I click on Save Record and Close 
    And I click on Find Product from Inventory folder list
    And I search product in Find product field
    And I click on Product versions tab
    And After opening same product all the changes should be saved and display in the product information
    And I click on New button from product version
    And I select description "Reprints" from product version record
    And I enter necessary details in the fields from Product version record wizard
    And I select Actual Product "Small Barrier reef"
    And I click on Ok Button
    And New version as "Reprints" should be displayed under product versions tab
    And I open product versions Record
    And Actual product as "Small barrier reef" and description as "Reprints" should be displayed on Product versions record
    And I click on Ok Button
    And I click on Save Record and Close 
    And I click on Find Product from Inventory folder list
    And I search product in Find product field
    And I click on Product versions tab
    And I click on New button from product version
    And I select description "Microsoft Reader" from product version record
    And I enter necessary details in the fields from Product version record wizard
    And I select Next Product Id "Product Air version"
    And I select substitute product version "Main Market Edition"
    And I click on Ok Button
    And New Version as "Microsoft Reader" should be displayed under product versions tab
    And I click on Version Type column to open Product Versions Record 
    And Next Product Id as "Product Air version" and description as "Microsoft Reader" should be displayed on Product versions record 
    And I click on Ok Button
    And I click on Save Record and Close Form button to close the record
    