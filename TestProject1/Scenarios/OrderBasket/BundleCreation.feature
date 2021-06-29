Feature: BundleCreation

#This feature file contains automated manual tests of RAVAUT-824 on Jira
 @Order_Basket
  Scenario:1 Creating new product
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
	  And I click on New button in Dimensions List View
    And I select a Type "Unit weight" 
    And I enter a numeric value 0.2 
    And I select a Unit "Kilograms" 
    And I click on Ok button
    And I click on New button in Identifiers List view
    And I select an Identifier Type "ISBN 13"
    And I select a range "ISBN 13 (Global)" 
    And I click on Ok  button
    And I enter a Pub Date "08/06/2020"
    And I enter a Copyright Year "2020"
    And I select a Product Discount Type "Fiction"
    And I select a Fulfilment Product Type "Publication"
    And I select a Inventory  Site "Watford"
    And I click on the Finish button
    And I set inventory site Supply Status to "Open" 
    And select a picking location "WAF3ZZZ"
    Then Supply Status should be set to "Open"
    And I create a price set of Currency Type "UK Sterling" and Price 10
    And price set should be displayed with information submitted
  
 @Order_Basket
   Scenario:2 Creating Bundle 
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product
    And I select "Set - Stock From Set" from Product Type
    And I enter Title Prefix 
    And I enter Without Prefix 
    And I enter "Alpha Books" in Organization field 
    And I click on the Next button
    And I select Bundle type "Fixed Pack - Price / Stock from Header"
    And I select Default License "Sale"
    And I click on the Finish button
    Then new bundle is created with all the information submitted 
    And I set inventory site Supply Status to "Open" 
    And select a picking location "WAF3ZZZ"
    And I create a price set of Currency Type "UK Sterling" and Price 38
    And I add Dimension of type "Unit weight", value 0.8 and unit "Kilograms"
    And I add Identifier of type "ISBN 13" and range "ISBN 13 (Global)"
    And I click Bundles tab
    And I enter first product "RAVE ROCKET Annual 1" in Search field
    And I click on Search
    And I drag the first product to Bundle Control frame
    And I enter second product "RAVE ROCKET Annual 2" in Search field
    And I click on Search
    And I drag the second product to Bundle Control frame
    And I click on the first product
    And I enter Quantity 2
    And I enter Revenue 50
    And I click on the second product
    And I enter Quantity 2
    And I enter Revenue 50
    And I click on the bundle 
    And I click on Recalculate button 
    And I click Save Record and Close Form button
    And I click on Inventory
    And I click on Goods In
    And I select a Site/Warehouse "Watford/Warehouse A" 
    And I select a before date "16/01/2020" from Received Date
    And I enter a message "customRef" in Reference
    And I click on Next button
    And I enter first product in Received section 
    And I enter number of loose packets 200
    And I click on Add button to add goods
    And I enter second product in Received section 
    And I enter number of loose packets 200
    And I click on Add button to add goods
    And I click on Next button
    And I select the two products
    And I click on Loose to Forward icon
    And I click Ok to message stating 'record(s) Loose moved to Forward Location'
    And I click on Finish 
    And I open information panel for first product
    And physical inventory displayed should be correct 
    And I click Manage Inventory sub tab
    And I confirm all the pending transactions 
    And I click on Finish button to close Confirm Transactions window 
    And I click Save Record and Close Form button
    And I open information panel for second product
    And physical inventory displayed should be correct
    And I click Manage Inventory sub tab
    And I confirm all the pending transactions
    And I click on Finish button to close Confirm Transactions window
    And I click Save Record and Close Form button
    