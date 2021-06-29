Feature: SupplierOrders

#This feature file contains automated manual tests of RAVAUT-758 on Jira
#This feature file contains automated manual tests of RAVAUT-761 on Jira
#This feature file contains automated manual tests of RAVAUT-762 on Jira


  Background:
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open product to verify details "Amazing Jake and the Banana Milkshake"
    When I click on Inventory
    And I click on New Supplier Order 
    And I select Order Type "Supplier Order"

    @InventoryManagement   
    Scenario:1 Supplier Orders without Authorisation required
             And I enter a message "order1" in Order Reference
             And I select Currency Type "Australian Dollar" 
             And I select Requisitioner "Lionel Clement"
             And I select Supplier "Garmin"
             And I check the checkbox Authorised
             And I select Authorised Date as Today's date
             And I enter a message "custom comments" in Comments textbox
             And I click on New button 
             And I enter Product under Inventory supplier order items record "Amazing Jake and the Banana Milkshake"
             And I enter Order Qty 500
             And I enter Packet Size 10
             And I enter Advance Qty 5
             And I enter Unit Cost 100
             And I enter Reference
             And I enter a message in comments "custom data"
             And I click on Ok Button
             And I click on Save record and Close Form icon
             Then window should be closed without any errors
             And I click on Find Product from Inventory folder list
             And I search for the product and open product id wizard
             And I click on Inventory from Product Information Panel
             And I click on Supplier Orders tab from Product Information Panel
             And Under Supplier Orders tab Supplier and Reference should be displayed
             
    @InventoryManagement
    Scenario:2 Supplier Orders with Authorisation required
             And I check Authorisation Required checkbox
             And I enter a message "Authorisation" in Order Reference
             And I select Currency Type "US Dollar" 
             And I select Requisitioner "Lionel Clement"
             And I select Supplier "Harvey"
             And I enter a message "custom comments" in Comments textbox
             And I click on New button 
             And I enter Product under Inventory supplier order items record "Amazing Jake and the Banana Milkshake"
             And I enter Order Qty 30
             And I enter Packet Size 10
             And I enter Advance Qty 5
             And I enter Unit Cost 100
             And I enter Reference
             And I enter a message in comments "custom data"
             And I click on Ok Button
             And I click on Save record and Close Form icon
             Then window should be closed without any errors
             And I click on Find Product from Inventory folder list
             And I search for the product and open product id wizard
             And I click on Inventory from Product Information Panel
             And I click on Supplier Orders tab from Product Information Panel
             And Under Supplier Orders tab Supplier and Reference should be displayed