Feature: CreateProducts_SetsAndCollections

@Product_Management
  Scenario:1  Create New Bundle Version Under bundles tab from product information panel
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
    And I retrieve title and subtype of the product
    And I click on save record and close form button
    And I click on New Product from Customer Services
    And I select "Bundle" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on Next Button from Create new product wizard
    And I select Bundle Type "Flexible Mixed Content Bundle Stock from Header"
    And I select Default Order Billing Plan "Advance Charge - full settlement on account or via payment in advance of fulfillment"
    And I select Default Order Cancellation Rule "No Restrictions On Cancellation"
    And I select Order Refund Rules "Pro-Rata Based on the Cancellation Date"
    And I select Default License "Sale"
    And I click on Finish button from Create new product wizard
    And I add Prices to the product
    And I click on Binocular icon under bundles tab
    And I enter product name in search bar
    And I click on plus sign to add that product under main product 
    And I select product from left side tree view
    And I enter Quantity in components attributes section "5"
    And I enter % of revenue in components attributes section "50"
    And I click on main product from left side tree view
    And I click on Recalculate button from main product
    And I click on New Bundle Version button
    And I click on Version Type link from bundle version
    And I enter code and description
    And I check Is Bundle Version checkbox
    And I enter Earliest Order Date
    And I click on save record and close form button
    Then Code and Description should be display under version type dropdown
    And I click on Save button from bundle version
    And Code and Description should be display under bundle version dropdown
    And I click on save record and close form button
    
@Product_Management   
  Scenario:2 Verifying fix revenue percent checkbox under bundles tab
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
    And I retrieve title and subtype of the first product
    And I click on save record and close form button
    And I click on New Product from Customer Services
    And I select "DVD - Audio" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on Finish button from Create new product wizard
    And I add Prices to the product
    And I retrieve title and subtype of the second product
    And I click on save record and close form button
    And I click on New Product from Customer Services
    And I select "Bundle" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on Next Button from Create new product wizard
    And I select Bundle Type "Flexible Mixed Content Bundle Stock from Header"
    And I select Default Order Billing Plan "Advance Charge - full settlement on account or via payment in advance of fulfillment"
    And I select Default Order Cancellation Rule "No Restrictions On Cancellation"
    And I select Order Refund Rules "Pro-Rata Based on the Cancellation Date"
    And I select Default License "Sale"
    And I click on Finish button from Create new product wizard
    And I add Prices to the product
    And I click on Binocular icon under bundles tab
    And I enter first product name in search bar
    And I click on plus sign to add that product under main product 
    And I enter second product name in search bar
    And I click on plus sign to add that product under main product
    And I select first product from left side tree view
    And I enter Quantity in components attributes section "5"
    And I enter % of revenue in components attributes section "50"
    And I select second product from left side tree view
    And I enter Quantity in components attributes section for other product "5"
    And I enter % of revenue in components attributes section for other product "80"
    And I check the checkbox Fix Revenue Percent
    And I click on main product from left side tree view
    And I click on Recalculate button from main product
    Then Under Bundle Contents section total of % Of Revenue column should be 100
    And % of Revenue Column value should be same for product with checked Fix Revenue Percent checkbox
    And For first product % Of Revenue Column should be change
    
    
@Product_Management    
  Scenario:3 Verifying split equally radio button under bundles tab
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
    And I retrieve title and subtype of the first product
    And I click on save record and close form button
    And I click on New Product from Customer Services
    And I select "DVD - Audio" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on Finish button from Create new product wizard
    And I add Prices to the product
    And I retrieve title and subtype of the second product
    And I click on save record and close form button
    And I click on New Product from Customer Services
    And I select "Bundle" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on Next Button from Create new product wizard
    And I select Bundle Type "Flexible Mixed Content Bundle Stock from Header"
    And I select Default Order Billing Plan "Advance Charge - full settlement on account or via payment in advance of fulfillment"
    And I select Default Order Cancellation Rule "No Restrictions On Cancellation"
    And I select Order Refund Rules "Pro-Rata Based on the Cancellation Date"
    And I select Default License "Sale"
    And I click on Finish button from Create new product wizard
    And I add Prices to the product
    And I click on Binocular icon under bundles tab
    And I enter first product name in search bar
    And I click on plus sign to add that product under main product
    And I enter second product name in search bar
    And I click on plus sign to add that product under main product
    And I select first product from left side tree view
    And I enter Quantity in components attributes section "5"
    And I enter % of revenue in components attributes section "70"
    And I select second product from left side tree view
    And I enter Quantity in components attributes section for other product "5"
    And I enter % of revenue in components attributes section for other product "80"
    And I click on main product from left side tree view
    And I select Split Equally option from Recalculate Revenue % based On section
    And I click on Recalculate button from main product
    Then Under Bundle Contents section total of % Of Revenue column should be 100
    And % of Revenue Column value for both the products should be 50 
    
@Product_Management 
  Scenario:4 Verifying Proportion Of List Price radio button under bundles tab
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
    And I retrieve title and subtype of the first product
    And I click on save record and close form button
    And I click on New Product from Customer Services
    And I select "DVD - Audio" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on Finish button from Create new product wizard
    And I add Prices to the product
    And I retrieve title and subtype of the second product
    And I click on save record and close form button
    And I click on New Product from Customer Services
    And I select "Bundle" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on Next Button from Create new product wizard
    And I select Bundle Type "Flexible Mixed Content Bundle Stock from Header"
    And I select Default Order Billing Plan "Advance Charge - full settlement on account or via payment in advance of fulfillment"
    And I select Default Order Cancellation Rule "No Restrictions On Cancellation"
    And I select Order Refund Rules "Pro-Rata Based on the Cancellation Date"
    And I select Default License "Sale"
    And I click on Finish button from Create new product wizard
    And I add Prices to the product
    And I click on Binocular icon under bundles tab
    And I enter first product name in search bar
    And I click on plus sign to add that product under main product
    And I enter second product name in search bar
    And I click on plus sign to add that product under main product
    And I select first product from left side tree view
    And I enter Quantity in components attributes section "5"
    And I enter % of revenue in components attributes section "70"
    And I select second product from left side tree view
    And I enter Quantity in components attributes section for other product "5"
    And I enter % of revenue in components attributes section for other product "80"
    And I click on main product from left side tree view
    And I click on Recalculate button from main product
    Then Under Bundle Contents section total of % Of Revenue column should be 100
    And % of Revenue Column value for both the products should be 50 
 
@Product_Management  
  Scenario:5 Creating Bundle Product
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Bundle" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on Next Button from Create new product wizard
    And I select Bundle Type "Flexible Mixed Content Bundle Stock from Header"
    And I select Default Order Billing Plan "Advance Charge - full settlement on account or via payment in advance of fulfillment"
    And I select Default Order Cancellation Rule "No Restrictions On Cancellation"
    And I select Order Refund Rules "Pro-Rata Based on the Cancellation Date"
    And I select Default License "Sale"
    And I click on Finish button from Create new product wizard
    Then Product should be created with all the submitted information
    And all the tabs like Bundles,Classifications,Relationships should be display
    And I click on Identifiers tab from Product Information panel
    And I select Identifier Type "PPN (Publisher Product Number)" 
    And I select Value and click Ok button
    And I click on save record and close form button

@Product_Management    
  Scenario:6 Creating Bundle Product with child product
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Bundle" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on radio button Open Product Relationships Wizard
    And I click on Next Button from Create new product wizard
    And I select Bundle Type "Flexible Mixed Content Bundle Stock from Header"
    And I select Default Order Billing Plan "Advance Charge - full settlement on account or via payment in advance of fulfillment"
    And I select Default Order Cancellation Rule "No Restrictions On Cancellation"
    And I select Order Refund Rules "Pro-Rata Based on the Cancellation Date"
    And I select Default License "Sale"
    And I click on Finish button from Create new product wizard
    Then Product Relationships Wizard should be displayed
    And  Product,Primary Identifier,Type and Publisher fields should not be empty
    And I select related product "The Migrating Sea life"
    And I select and enter Relation type "Other Products by this Author"
    And Start date should be auto filled
    And I enter valid end date
    And I select radio button Children
    And I click on Create button
    And Product record should be displayed on the bottom frame under Children
    And I click on finish button
    And Product information panel should be opened and all the submitted information should be displayed
    And I click on Relationships tab
    And I click on Relationships direct tab
    And Product information panel should be opened and Relationships(direct) tab should display the product used in related product field
    And I click on save record and close form button
    
@Product_Management   
  Scenario:7 Creating Bundle Product with parent product
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Bundle" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on radio button Open Product Relationships Wizard
    And I click on Next Button from Create new product wizard
    And I select Bundle Type "Flexible Mixed Content Bundle Stock from Header"
    And I select Default Order Billing Plan "Advance Charge - full settlement on account or via payment in advance of fulfillment"
    And I select Default Order Cancellation Rule "No Restrictions On Cancellation"
    And I select Order Refund Rules "Pro-Rata Based on the Cancellation Date"
    And I select Default License "Sale"
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
    And Product information panel should be opened and all the submitted information should be displayed
    And I click on Identifiers tab from Product Information panel
    And I select Identifier Type "PPN (Publisher Product Number)" 
    And I select Value and click Ok button
    And I click on Relationships tab
    And I click on Relationships tree tab
    And Product information panel should be opened and Relationships tab should display the product used in related product field
    And I click on save record and close form button

@Product_Management    
  Scenario:8 Creating subscription set type product 
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Subscription Set" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on Next Button from Create new product wizard
    And I select Bundle Type "Renewable Price from Header,Inv Comp. Rev Rule"
    And I select Default Order Billing Plan "Advance Charge - full settlement on account or via payment in advance of fulfillment"
    And I select Default Order Cancellation Rule "No Restrictions On Cancellation"
    And I select Order Refund Rules "Pro-Rata Based on the Cancellation Date"
    And I select Default License "Sale"
    And I click on Finish button from Create new product wizard
    Then Product should be created with all the submitted information
    And all the tabs like Bundles,Classifications,Relationships should be display
    And I click on Identifiers tab from Product Information panel
    And I select Identifier Type "PPN (Publisher Product Number)" 
    And I select Value and click Ok button
    And I click on save record and close form button 
    
@Product_Management    
  Scenario:9 Creating Product of type Subscription Set with Product Relationship as Parent
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Subscription Set" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on radio button Open Product Relationships Wizard
    And I click on Next Button from Create new product wizard
    And I select Bundle Type "Renewable Price from Header,Inv Comp. Rev Rule"
    And I select Default Order Billing Plan "Advance Charge - full settlement on account or via payment in advance of fulfillment"
    And I select Default Order Cancellation Rule "No Restrictions On Cancellation"
    And I select Order Refund Rules "Pro-Rata Based on the Cancellation Date"
    And I select Default License "Sale"
    And I click on Finish button from Create new product wizard
    Then Product Relationships Wizard should be displayed
    And  Product,Primary Identifier,Type and Publisher fields should not be empty
    And I select related product "The Migrating Sea life"
    And I select and enter Relation type "Other Products by this Author"
    And Start date should be auto filled
    And I enter valid end date
    And I select radio button Parent
    And I click on Create button
    And Product record should be displayed on the top frame under Parents
    And I click on finish button
    And Product information panel should be opened and all the submitted information should be displayed
    And I click on Identifiers tab from Product Information panel
    And I select Identifier Type "PPN (Publisher Product Number)" 
    And I select Value and click Ok button
    And I click on Relationships tab
    And I click on Relationships tree tab
    And Product information panel should be opened and Relationships tab should display the product used in related product field
    And I click on save record and close form button

@Product_Management  
  Scenario:10 Creating Product of type Subscription Set with Product Relationship as Child
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Subscription Set" from Product Types
    And I enter without prefix 
    And I enter Title prefix "Rave"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on radio button Open Product Relationships Wizard
    And I click on Next Button from Create new product wizard
    And I select Bundle Type "Renewable Price from Header,Inv Comp. Rev Rule"
    And I select Default Order Billing Plan "Advance Charge - full settlement on account or via payment in advance of fulfillment"
    And I select Default Order Cancellation Rule "No Restrictions On Cancellation"
    And I select Order Refund Rules "Pro-Rata Based on the Cancellation Date"
    And I select Default License "Sale"
    And I click on Finish button from Create new product wizard
    Then Product Relationships Wizard should be displayed
    And  Product,Primary Identifier,Type and Publisher fields should not be empty
    And I select related product "The Migrating Sea life"
    And I select and enter Relation type "Other Products by this Author"
    And Start date should be auto filled
    And I enter valid end date
    And I select radio button Children
    And I click on Create button
    And Product record should be displayed on the bottom frame under Children
    And I click on finish button
    And Product information panel should be opened and all the submitted information should be displayed
    And I click on Relationships tab
    And I click on Relationships direct tab
    And Product information panel should be opened and Relationships(direct) tab should display the product used in related product field
    
   