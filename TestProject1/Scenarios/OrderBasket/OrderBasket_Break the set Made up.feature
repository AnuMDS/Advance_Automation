Feature: OrderBasket_Break the set Made up

#This feature file contains automated manual tests of RAVAUT-829 on Jira
# select product sub type - set -stock from set
@Sets_MakeAndBreak,@Order_Basket
  Scenario: Break the set made up
    Given I am logged in Ingenta Commercial Application
    When I click on Inventory
    And I open set product "BXN Sports Set - Stock from Set"
    And I click on Sets Make & Break button
    And I select set product 
    And I check the checkbox Reserve Inventory To Make Sets in the section Sets Break
    And I enter valid number in Sets To Break less than the number shown in You can Break field 
    And I click on Finish button to confirm the transaction
    And I click on Sets Make & Break button
    And I select set product 
    And I check the checkbox Move Sets To Break
    And I select the listed product in the frame 
    And I click on Next button from Inventory Sets Make and Break window 
    And I check the checkboxs beside the product name 
    And I click on Next button from Inventory Sets Make and Break window
    And I check the checkboxes to select product
    And I click on Finish to close the wizard
    And I click on Sets Make & Break button
    And I select set product 
    And I check the checkbox Confirm Sets Broken
    And I select product from the list
    And I click on Next button from Inventory Sets Make and Break window
    And I enter valid number in Total Sets Broken less than the number shown in sets to break field
    And I click on the button Confirm Sets
    And I click Ok on the pop-up confirmation message box
    And I click on Finish to confirm the transaction
    And I search for the set product
    And I click on Manage inventory tab
    And I select product from tree view on left side panel
    And I check the checkbox to select the row in the right side frame
    And I click on Loose To Forward action button above the frame
    And I click Ok on the pop-up confirmation message box
    And I go to Forward location in the tree view above Set make up location and click to select the location
    And I click on the red alert triangle in the row displayed on right side panel
    And I check the checkbox to select the unconfirmed transaction row on the pop up Confirm Inventory Movements wizard
    And I click on Confirm button above to perform the transaction
    And I click OK on the confirmation popup message box
    Then Product information panel should be updated with all pending confirmations cleared
    And I click Finish button to confirm the transaction and close the wizard
    And I click on Other Actions and click on Refresh icon
    And Manage Inventory tab should be display the actions performed
    And I click Save and close the record to save the record and close the form
    And Set break should be performed without errors
  
    