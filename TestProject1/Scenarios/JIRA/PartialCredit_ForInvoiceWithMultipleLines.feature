Feature: PartialCredit_ForInvoiceWithMultipleLines

#This feature file contains automated manual tests of RAVAUT-892 on Jira
#Select product of sub type - Book- Paperback

  Scenario: This ticket tests orders placed and credited back appropriately with regards to partial credit.
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify all the products
    And I click on Orders
    And I click on New Order
    And I enter a customer "account two" in Ship To field
    And I click on Red Arrow
    And I place order for all the products
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    Then Invoice note should be present in Documents window
    And I retrieve the document reference from orders dashboard
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    And I search the order and click on credit from Order actions
    And I select Order type "Normal Credit" and click on Ok button
    And I click refresh on my pending basket 
    And Open basket button should be enabled
    And I click on Open Basket
    And Type should be Credit Note and Order Type should be Normal Credit
    And Quantity,Product,P/O ref,Customer details should be correct
    And Amount should be negative
    And I retrive supply value
    And I click on Left facing arrow
    And I click on Checkout button
    And Order should not be displayed in My Pending Basket
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    And I open the Credit Note generated
    And I select credit from order actions for same order transaction line
    And Following message should be displayed for already credited product "Only invoices that are not already fully credited can be credited. Un-select the non-invoice / non-fully credited line(s).".
    And I select rest of products for credit process
    And I open credit documents generated
    And I click on Customer Service
    And Credit Inventory should be reverted back to the product inventory
    And Invoice document type entry should display with correct details
    And Credit document type entries should display with correct details
    