Feature: OpenProductRelationshipsWizard
  
## Create product subtype dvd-audio
@Product_Management 
  Scenario:1 Creating Audio Product
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "DVD - Audio" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on Finish button from Create new product wizard
    And I add Prices to the product
    Then product should be created with all the submitted infromation
    And all the tabs like Identifiers,Inventory,Relationships should be display
    And I click on Identifiers tab from Product Information panel
    And I select Identifier Type "EAN 13" 
    And I enter Value and click Ok button
    And I click on save record and close form button  
    
@Product_Management     
  Scenario:2 Creating Audio Product with child product 
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "DVD - Audio" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on radio button Open Product Relationships Wizard
    And I click on Finish button from Create new product wizard
    Then Product Relationships Wizard should be displayed
    And  Product,Primary Identifier,Type and Publisher fields should not be empty
    And I select related product "Amazing Jake and the Red Balloon"
    And I select and enter Relation type "Other Products by this Author"
    And Start date should be auto filled
    And I enter valid end date
    And I select radio button Children
    And I click on Create button
    And Product record should be displayed on the bottom frame under Children
    And I click on finish button
    And I click on Relationships tab
    And I click on Relationships direct tab
    And Product information panel should be opened and Relationships(direct) tab should display the product used in related product field
    
@Product_Management     
  Scenario:3 Creating Audio Product with parent product
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "DVD - Audio" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on radio button Open Product Relationships Wizard
    And I click on Finish button from Create new product wizard
    Then Product Relationships Wizard should be displayed
    And  Product,Primary Identifier,Type and Publisher fields should not be empty
    And I select related product "Amazing Jake and the Red Balloon"
    And I select and enter Relation type "Other Products by this Author"
    And Start date should be auto filled
    And I enter valid end date
    And I select radio button Parent
    And I click on Create button
    And Product record should be displayed on the top frame under Parents
    And I click on finish button
    And I click on Relationships tab
    And I click on Relationships tree tab
    And Product information panel should be opened and Relationships tab should display the product used in related product field
    And I click on save record and close form button
    