Feature: CreateNewProduct
  
@Product_Management
  Scenario:1 Creating new product
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
    Then product should be displayed with all the information as given during creation of the record
  
@Product_Management  
Scenario:2 Creating Books and Printed Items Products with Child product     
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Annual" from Product Types
    And I enter Title prefix "RAVE"
    And I enter Without prefix
    And I enter imprint "Reef Books"
    And I check Open Product Relationships Wizard checkbox
    And I click on Next Button from Create new product wizard
    And I click on New icon
    And I select Type from dimension record "Unit weight" 
    And I enter value "0.2"
    And I select ONIX Unit "Kilograms"
    And I click on OK button
    And I click on New icon from Identifiers table
    And I select Identifier Type "ISBN 13"
    And I select range "ISBN 13 (Global)" 
    And I click on OK button  
    And I enter Pubdate
    And I enter copyright year "2020"
    And I select Product Discount Type "Fiction"
    And I select Fulfilment Product Type "publication"   
    And I click Finish 
    Then Product Relationships wizard should be displayed
    And Product, Primary Identifier, Type and Publisher fields should not be empty
    And I enter Related Product(s) "Small barrier reef"
    And I enter Relationship Type "Other products by this author"
    And Start Date field should be filled
    And I enter End Date
    And I click on Create
    And related product selected should be displayed in the Children frame below
    And I click on Finish button
    And all the information submitted should be displayed in Information Panel
    And I click on Relationships tab
    And related product selected should be displayed  
    And I create a Default Price set  
    And I set Site Status as Open 
    And I click on Save and Close Form

@Product_Management   
Scenario:3 Creating Books and Printed Items Products with Parent product 
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Book- Paperback" from Product Types
    And I enter Title prefix "RAVE"
    And I enter Without prefix
    And I enter imprint "Reef Books"
    And I check Open Product Relationships Wizard checkbox
    And I click on Next Button from Create new product wizard
    And I click on New icon
    And I select Type from dimension record "Unit weight" 
    And I enter value "0.2"
    And I select ONIX Unit "Kilograms"
    And I click on OK button
    And I click on New icon from Identifiers table
    And I select Identifier Type "ISBN 13"
    And I select range "ISBN 13 (Global)" 
    And I click on OK button  
    And I enter Pubdate
    And I enter copyright year "2020"
    And I select Product Discount Type "Fiction"
    And I select Fulfilment Product Type "publication"   
    And I click Finish 
    Then Product Relationships wizard should be displayed
    And Product, Primary Identifier, Type and Publisher fields should not be empty
    And I enter Related Product(s) "Small barrier reef"
    And I enter Relationship Type "Other products by this author"
    And Start Date field should be filled
    And I enter End Date
    And I select Parent radio tab
    And I click on Create
    And related product selected should be displayed in the Parent frame above
    And I click on Finish button
    And all the information submitted should be displayed in Information Panel
    And I click on Relationships tab
    And I click on Relationships(Tree) tab 
    And Related product and Relationship Type selected should be displayed
    And I create a Default Price set  
    And I set Site Status as Open
    And I click on Save and Close Form     
  