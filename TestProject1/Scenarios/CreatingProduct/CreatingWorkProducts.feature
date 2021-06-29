Feature: CreatingWorkProducts

@Product_Management 
Scenario:1 Creating Product of Type Work    
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Work" from Product Types
    And I enter Title prefix "RAVE"
    And I enter Without prefix
    And I enter imprint "Reef Books"
    And I click on Next Button from Create new product wizard
    And I check "Book- HardCover" to create
    And I check "Book- Paperback" to create  
    And I click on Next Button from Create new product wizard
    And I click on New icon
    And I select Type from dimension record "Unit weight" 
    And I enter value "0.2"
    And I select ONIX Unit "Kilograms"
    And I click on OK button
    And I click on New icon from Identifiers table
    And I select Identifier Type "Work Identifier"
    And I enter a Value
    And I click on OK button  
    And I enter Pubdate
    And I enter copyright year "2020"
    And I select Product Discount Type "Fiction"
    And I select Fulfilment Product Type "publication"   
    And I click Finish
    Then the information submitted should be displayed in Information Panel
    And all the tabs like Editorial, Identifiers, Details should be displayed
    And additional product types created should be displayed under Editorial tab
    And I create a Default Price set  
    And I click on Save and Close Form

@Product_Management     
Scenario:2 Creating Work Product with Parent product
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Work" from Product Types
    And I enter Title prefix "WORK"
    And I enter Without prefix
    And I enter imprint "Reef Books"
    And I check Open Product Relationships Wizard checkbox
    And I click on Next Button from Create new product wizard
    And I check "Book- HardCover" to create
    And I click on Next Button from Create new product wizard
    And I click on New icon
    And I select Type from dimension record "Unit weight" 
    And I enter value "0.2"
    And I select ONIX Unit "Kilograms"
    And I click on OK button
    And I click on New icon from Identifiers table
    And I select Identifier Type "Work Identifier"
    And I enter a Value
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
    And the information submitted should be displayed in Information Panel
    And all the tabs like Editorial, Identifiers, Details should be displayed
    And additional product types created should be displayed under Editorial tab
    And I click on Relationships tab
    And I click on Relationships(Tree) tab 
    And Related product selected should be displayed
    And I create a Default Price set  
    And I click on Save and Close Form        
 
@Product_Management    
Scenario:3 Creating Work Product with Child product 
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Work" from Product Types
    And I enter Title prefix "WORK"
    And I enter Without prefix
    And I enter imprint "Reef Books"
    And I check Open Product Relationships Wizard checkbox
    And I click on Next Button from Create new product wizard
    And I check "Book- HardCover" to create
    And I check "Book- Paperback" to create 
    And I click on Next Button from Create new product wizard
    And I click on New icon
    And I select Type from dimension record "Unit weight" 
    And I enter value "0.2"
    And I select ONIX Unit "Kilograms"
    And I click on OK button
    And I click on New icon from Identifiers table
    And I select Identifier Type "Work Identifier"
    And I enter a Value
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
    And the information submitted should be displayed in Information Panel
    And all the tabs like Editorial, Identifiers, Details should be displayed
    And additional product types created should be displayed under Editorial tab
    And I click on Relationships tab 
    And related product selected should be displayed
    And I create a Default Price set  
    And I click on Save and Close Form   