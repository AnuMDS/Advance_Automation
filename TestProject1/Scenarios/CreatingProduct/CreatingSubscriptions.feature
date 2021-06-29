Feature: CreatingSubscriptions

@Product_Management 
Scenario:1 Creating Subscription Product     
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Subscription (print)" from Product Types
    And I enter Title prefix "Subscription"
    And I enter Without prefix
    And I enter imprint "Reef Books"
    And I click Finish
    And I set a Primary Identifier for Subscription
    Then information submitted should be displayed in Product Information Panel
    And all the tabs like Editorial, Identifiers, Inventory, Feeds should be displayed
    And I create a Default Price set
    And I click on Save and Close Form

@Product_Management    
Scenario:2 Creating Subscription Product with Child product  
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Subscription (print)" from Product Types
    And I enter Title prefix "Subscription"
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
    And I enter a Primary Identifier for Subscription
    And information submitted should be displayed in Product Information Panel
    And all the tabs like Editorial, Identifiers, Inventory, Feeds should be displayed
    And I click on Relationships tab 
    And related product selected should be displayed
    And I create a Default Price set
    And I click on Save and Close Form 

@Product_Management     
Scenario:3 Creating Subscription Product with Parent product    
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Subscription (print)" from Product Types
    And I enter Title prefix "Subscription"
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
    And I enter a Primary Identifier for Subscription
    And information submitted should be displayed in Product Information Panel
    And all the tabs like Editorial, Identifiers, Inventory, Feeds should be displayed
    And I click on Relationships tab
    And I click on Relationships(Tree) tab 
    And the selected Related product should be displayed
    And I create a Default Price set  
    And I click on Save and Close Form