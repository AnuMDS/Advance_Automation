Feature: GoodsIn-StockManager

#This feature file contains automated manual tests of RAVAUT-683 on Jira
#This feature file contains automated manual tests of RAVAUT-684 on Jira
#This feature file contains automated manual tests of RAVAUT-685 on Jira
#This feature file contains automated manual tests of RAVAUT-686 on Jira
#This feature file contains automated manual tests of RAVAUT-687 on Jira

#select product sub-type books
  Background:
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open product to verify details "Amazing Jake and the Big Fat Wood Pigeon"
    #And I retrieve product name to enter in received section
    And I click on Inventory
    And I click on Goods In
    And I select a Site/Warehouse "Watford/Warehouse A"
    And I select a before date "27/01/2021" from Received Date
    And I enter a message "customRef" in Reference
    And I click on Next button
    And I select a product "Amazing Jake and the Big Fat Wood Pigeon" in Received section 
    And I enter Size 20 in Received section from Goods In wizard
    And I enter number of packets 5
    And I enter number of Qty Loose 2
    And I enter a message in the Comments "customComment"
    And I click on Add Button from Inventory goodsIn
    And I click on Next button
    
@InventoryManagement   
    Scenario:1 Waste Reason
    And I check the checkbox beside first product name to select the product
    And I click on Waste button from toolbar
    And I select Waste Reason "Exhibition Waste"
    And I enter Packets "1"
    And I click on Transfer Button
    And I click on OK button from pop-up window
    Then Data in the Available Qty should be updated after transaction
    And Product name should be displayed under Marshalling Area

@InventoryManagement    
    Scenario:2 Freeze button
    And I check the checkbox beside first product name 
    And I click on Freeze button from toolbar
    And I enter packets "1"
    And I enter Qty Loose "0"
    And I enter a message "comments" in Comments input box
    And I click on Finish button
    Then Checkbox under Freeze column should be checked
    And Number of Goods should be displayed under Frozen Quantity 
    And Product name should be displayed under Marshalling Area
 
@InventoryManagement   
    Scenario:3 Transfer button
    And I check the checkbox beside first product name
    And I click on Transfer button from toolbar
    And I enter Site "Watford" 
    And I enter Warehouse "Warehouse A"  
    And I enter Location Type "Forward"
    And I select Location "WAF2B01A"
    And I enter Packets "1" in To section
    And I click on Transfer Button
    Then Popup message should be displayed as transferred quantty from one location to another
    And I click on OK button from pop-up window    
    And Product name should be displayed under Marshalling Area        

@InventoryManagement            
    Scenario:4 Loose To Forward
    And I check the checkbox beside first product name
    And I click on Loose to Forward button from toolbar
    Then Popup message should be displayed as one record loose moved to forward location
    And I click on OK Button  
   
@InventoryManagement 
    Scenario:5 Unfreeze button   
    And I check the checkbox beside first product name 
    And I click on Un-Freeze button from toolbar
    And I check number of packets from Frozen Inventory
    And I enter equal number of packets as Frozen inventory packets
    And I enter Qty Loose "0"
    And I enter a message "comments" in Comments input box
    And I click on Finish button
    Then Checkbox under Freeze column should be Un-checked
    And Number of Goods after transaction should be displayed 0 or less number of goods frozen than before performing this transaction
    And Product name should be displayed under Marshalling Area