﻿Feature: FreightForwarderQuotationReserve

#This feature file contains automated manual tests of RAVAUT-918 on Jira
#Select product of sub type - Book- Paperback
@FreightForwarder
  Scenario: Testing Freight Forwarder Quotation and reserve Order
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "Amazing Jake and the Red Balloon" to be used
    And I verify the product "Amazing Jake and the Shaggy Dog" to be used    
    And I click on Orders
    And I click on New Order
    And I enter "RAVE Freight Forwarder" in Ship To field
    And I click Order Attributes tab
    And I enter Default PO Reference and click Apply
    And I select "Quotation" as Order Processs Type
    And I select "Quotation and Reserve" as Order Type
    And I click on Red Arrow
    And I enter the product "Amazing Jake and the Red Balloon" 
    And I enter quantity 1
    And I click Add 
    And I enter the product "Amazing Jake and the Shaggy Dog"
    And I enter quantity 1
    And I click Add 
    And I click on Left arrow
    And I click on Shipping Charges icon 
    And I select Dispatch Charge Details and Dispatch Method
    And I click Apply
    And I click Return To Checkout
    Then Shipping Value should be equal to the Despatch Charge selected      
    And I click on Checkout 
    And I run Billing Wave 
    And I click refresh on Documents
    And I open the Quotation generated
    And I click on Find an Order
    And I enter the Document Reference and Search
    And I Release Quotes
    And I run Billing Wave 
    And I click refresh on Documents
    And I open the Invoices generated
    And Supply Value displayed should be equal to the value on Checkout 
    And Quotation and Invoice process types should be displayed in Transactions tab