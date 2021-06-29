Feature: CreatingGroups

@Product_Management
Scenario:1 Creating Group Product     
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Series" from Product Types
    And I enter Title prefix "Series"
    And I enter Without prefix
    And I enter imprint "Reef Books"
    And I click Finish
    And I set a Primary Identifier for Group
    Then data submitted should be displayed in Product Information Panel
    And all the tabs like Editorial, Identifiers, Inventory should be displayed
    And I create a Default Price set
    And I click on Save and Close Form

@Product_Management    
Scenario:2 Creating Group Product with Child Product
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Series" from Product Types
    And I enter Title prefix "Series"
    And I enter Without prefix
    And I enter imprint "Reef Books"
    And I check Open Product Relationships Wizard checkbox
    And I click Finish
    Then Product Relationships wizard should be displayed
    And Product, Type and Publisher fields should not be empty
    And I enter Related Product(s) "Great Barrier reef"
    And I enter Relationship Type "Other products by this author"
    And Start Date field should be filled
    And I enter End Date
    And I click on Create
    And related product selected should be displayed in the Children frame below
    And I click on Finish button    
    And I enter a Primary Identifier for Group
    And data submitted should be displayed in Product Information Panel
    And all the tabs like Editorial, Identifiers, Inventory should be displayed 
    And I click on Relationships tab 
    And related product selected should be displayed
    And I create a Default Price set
    And I click on Save and Close Form       

@Product_Management
Scenario:3 Creating Group Product with Parent Product 
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Series" from Product Types
    And I enter Title prefix "Series"
    And I enter Without prefix
    And I enter imprint "Reef Books"
    And I check Open Product Relationships Wizard checkbox
    And I click Finish
    Then Product Relationships wizard should be displayed
    And Product, Type and Publisher fields should not be empty
    And I enter Related Product(s) "Great Barrier reef"
    And I enter Relationship Type "Other products by this author"
    And Start Date field should be filled
    And I enter End Date
    And I select Parent radio tab
    And I click on Create
    And related product selected should be displayed in the Parent frame above
    And I click on Finish button    
    And I enter a Primary Identifier for Group
    And data submitted should be displayed in Product Information Panel
    And all the tabs like Editorial, Identifiers, Inventory should be displayed 
    And I click on Relationships tab
    And I click on Relationships(Tree) tab 
    And the selected Related product should be displayed
    And I create a Default Price set  
    And I click on Save and Close Form             