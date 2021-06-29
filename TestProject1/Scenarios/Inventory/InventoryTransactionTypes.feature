Feature: InventoryTransactionTypes

#This feature file contains automated manual tests of RAVAUT-738 on Jira
  
  Background:
  Given I am logged in Ingenta Commercial Application
  When I click on Inventory Lookups

  @InventoryManagement
  Scenario:1 Checking information displayed in the Inventory Transaction Types 
  And I click on Inventory Transaction Types
  And I click on "All Inventory Transactions Types" view
  And I click on "Inventory Return"
  Then Code as "RT", Description as "Inventory Return", Short Description as "Returns" should be displayed
  And Return checkbox should be checked in Settings section
  And Credit Disposal Type as "Returns" and Unknown Return Product as "Unknown Product" should be displayed
  And Reference Allocation Type as "Returns References (inc RAN's)", Range Prefix as "RT" should be displayed
  And Next in Range and Automatic Transaction Text as "Return <%QTY%> From <%FIRSTLASTNAME%>" should be displayed
  And I click on View Record History button
  And History of Inventory Transactions Types window should be displayed with Date Updated, Who Updated, Changes columns
  And I click on Close button
  And I click on Close this Form button
  
  @InventoryManagement
  Scenario:2 Checking information displayed in the Returns Authorisation Reasons 
  And I click on Returns Authorisation Reasons
  And I click on "All Returns Authorisation reasons" view  
  And I click on "Goodwill"
  And I click on View Record History button 
  Then History of Inventory Transactions Types window should be displayed with Date Updated, Who Updated, Changes columns
  And I click on Close button
  And I click on Close this Form button
  
  @InventoryManagement
  Scenario:3 Checking information displayed in the Refusal Reasons 
  And I click on Refusal Reasons 
  And I click on "All Refusal reasons" view  
  And I click on "Out of System"
  Then Internal Code should have same numeric code as the Code 
  And Internal Code should be prefixed with "I" and Code with "R"
  And I click on View Record History button
  And History of Inventory Transactions Types window should be displayed with Date Updated, Who Updated, Changes columns
  And I click on Close button
  And I click on Close this Form button
  
  @InventoryManagement
  Scenario:4 Checking information displayed in the Inventory Disposal Types
  And I click on Inventory Disposal Types
  And I click on "All Disposal Types" view  
  And I click on "Returned to Customer"  
  Then Code as "RTC", Description as "Returned to Customer", View Sequence as 15 should be displayed
  And Check box associated to Waste should be unchecked
  And I click on View Record History button
  And History of Inventory Transactions Types window should be displayed with Date Updated, Who Updated, Changes columns
  And I click on Close button
  And I click on Close this Form button
  
  @InventoryManagement
  Scenario:5 Checking information displayed in the Inventory Return Reason
  And I click on Inventory Return Reason
  And I click on "All Inventory Return Reason" view  
  And I click on "Wrong product sent" 
  Then ID, Code, Description, Return Days and Cancelled Reason should be displayed
  And I click on View Record History button
  And History of Inventory Transactions Types window should be displayed with Date Updated, Who Updated, Changes columns
  And I click on Close button
  And I click on Close this Form button
 
  
   