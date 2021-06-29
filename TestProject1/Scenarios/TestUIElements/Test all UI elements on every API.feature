Feature: Test all UI elements on every API

#This feature file contains automated manual tests of RAVAUT-936 on Jira
@Testing_UIElements
  Scenario:1 Test all UI elements on Customer Services API
    Given I am logged in Ingenta Commercial Application
    When I check the elements from folder list
    And I click on Customer Service
    Then shortcuts should be display on dashboard
    And I click on Find Customer
    And window should be opened with window title "Role Searching (Prefix Matching)"
    And Find Customer window should be display with Search , Identifier textbox 
    And Active checkbox should be checked
    
    And I click on New Customer
    And window should be opened with correct window title "Create a new customer"
    And New Customer window should be display with Person and Company area
    And Reset , Cancel buttons should be display
    
    And I click on Find Orders
    And Window should be opened with correct window title "New Order Search Record"
    And Find Orders window should be display with Search Criteria
    And Product , Customer dropdown should be display
    
    And I click on New Order from customer services folder list
    And Window should be opened with correct window title
    And New Order window should be display with Ship To,Bill to,End User dropdown
    And Order Attributes,Checkout tabs should be display
    
    And I click on Find Product
    And window should be opened with window title "Product Searching (Prefix Matching) Near Mode"
    And Find Product window should be display with Search link textbox and Identifiers textbox
    And Series Mode checkbox should be unchecked
    
    And I click on New Product
    And New Product window should be opened with correct window title "Create New Product"
    And New Product window should be display with Type,Imprint dropdown
    And Open Product radio button should be display
    
    And I click on Price and Availability
    And Window should be opened with correct window title "New Customer Services (Price & Availability) Record"
    And window should be display with Product dropdown
    
    And I click on Manage Backorders
    And window should be opened with correct window title "Backorder Wizard"
    And Backorder Wizard window should be display with Product,Customer dropdown
    And Bill To and Ship To checkbox should be checked
    
    And I click on Claims
    And window should be opened with correct window title "Claims Wizard"
    And New Claims window should be display with Options section
    And New, Existing radio button should be display 
     
    And I click on Raise a Case
    And Window should be opened with correct window title "New Cases Record"
    And Raise a Case window should be display with Case Role,Role Type fields
    
    And I click on Contact
    And Window should be opened with correct window title "New Contact Log Record"
    And Contact window should be display with Contact,Name fields
  
    
  Scenario:2 Test all UI elements on Inventory API
    Given I am logged in Ingenta Commercial Application
    When I check the elements from folder list
    And I click on Inventory
    Then shortcuts should be display on Inventory dashboard
    And I click on Find Product From Inventory folder list
    And window should be opened with window title "Product Searching (Prefix Matching) Near Mode"
    And Find Product window should be display with Search link textbox and Identifiers textbox
    And Series Mode checkbox should be unchecked
    
    And I click on New Supplier Order
    And Window should be opened with correct window title "New Inventory Supplier Orders Record"
    And Order Date, Order Type and Order Reference fields should be display
    And Authorisation Required checkbox should be display
    
    And I click on New Delivery
    And Window should be opened with correct window title "New Inventory Deliveries Record"
    And Origin Warehouse,Supplier and Destination Warehouse fields should be display
    
    And I click on Goods In
    And window should be opened with correct window title "Goods In Wizard"
    And Site/Warehouse,Location,Received Date fields should be display
    And Next,Cancel buttons should be display
    
    And I click on Inventory Movements
    And window should be opened with correct window title "Warehouse Inventory Movement"
    And From and To sections should be display
    And Site,Warehouse and Location Type fields should be display under To section
    
    And I click on Confirm Movements
    And window should be opened with correct window title "Confirm Transactions"
    And Search and Result sections should be display
    And Site/Warehouse,Location fields should be display under Search section
    
    And I click on Returns
    And Window should be opened with correct window title "New Warehouse Returns Record"
    And General,Attachments tabs should be display
    And RAN,INV/Pack No fields should be display
    
    And I click on Sets Make & Break 
    And window should be opened with correct window title "Inventory Sets Make And Break"
    And Inventory,Sets Make and Sets Break sections should be display
    And You can Break and You can Make fields should be display 
    
    And I click on Manage Backorders
    And window should be opened with correct window title "Backorder Wizard"
    And Product,Customer,Reference Type fields should be display
    
    
    
  Scenario:3 Test all UI elements on Orders API
    Given I am logged in Ingenta Commercial Application
    When I check the elements from folder list
    And I click on Orders
    Then Orders Management Dashboard should be display
    And I click on New order from folder list
    And Window should be opened with correct window title
    And New Order window should be display with Ship To,Bill to,End User dropdown
    And Order Attributes,Checkout tabs should be display
    
    And I click on Find an Order
    And Window should be opened with correct window title "New Order Search Record"
    And Reference,Product and Customer fields should be display
    
    And I click on Billing Wave Release from Orders dashboard
    And Localized message box should be opened with correct title "Order Management Dashboard"
    And Popup should be display with the message "Process flow has already been submitted."
    
    And I click on Standing Order Release from Orders dashboard
    And Localized message box should be opened with correct title "Order Management Dashboard"
    And Popup should be display with the message "Process flow has been submitted for processing."
    
    And I click on Standing Order(Calc) 
    And Localized message box should be opened with correct title "Order Management Dashboard"
    And Popup should be display with the message "Process flow has already been submitted." 
    
    And I click on Renewals Billing Wave
    And Localized message box should be opened with correct title "Order Management Dashboard"
    And Popup should be display with the message "Process flow has already been submitted."
    
    And I click on Charge By Release Billing Wave
    And Localized message box should be opened with correct title "Order Management Dashboard"
    And Popup should be display with the message "Process flow has already been submitted." 
    
   
  Scenario:4 Test all UI elements on Standing Order Administration API
    Given I am logged in Ingenta Commercial Application
    When I check the elements from folder list
    And I click on Standing Order Administration
    Then Standing Order Release, Standing Order (Calc), Standing Order Catchups, Standing Order Reprocess Orders should be display
    
    And I click on Find Customer from Standing Order Administration folder list
    And window should be opened with window title "Role Searching (Prefix Matching)"
    And Find Customer window should be display with Search , Identifier textbox 
    And Active checkbox should be checked
    
    
    And I click on Find Product from Standing Order Administration folder list
    And window should be opened with window title "Product Searching (Prefix Matching) Near Mode"
    And Find Product window should be display with Search link textbox and Identifiers textbox
    And Series Mode checkbox should be unchecked
    
    And I click on Find Orders from Standing Order Administration folder list
    And Window should be opened with correct window title "New Order Search Record"
    And Find Orders window should be display with Search Criteria
    And Product , Customer dropdown should be display   
    
    
  Scenario:5 Test all UI elements on Sales and Marketing API
    Given I am logged in Ingenta Commercial Application
    When I check the elements from folder list
    And I click on Sales & Marketing
    Then All the elements should be display on dashboard under sales and marketing option
    
  
    
     

    
    