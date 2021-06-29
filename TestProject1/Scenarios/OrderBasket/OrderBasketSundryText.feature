Feature: OrderBasketSundryText

#This feature file contains automated manual tests of RAVAUT-840 on Jira
#Select products of sub type - Book- Paperback

@Order_Basket
  Scenario:1 Creating two Companies with Sundry Text
  Given I am logged in Ingenta Commercial Application
  When I click on Customer Service
  And I click on New Customer button
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller" 
  And I enter Company name "Rave Sigma"
  And I enter Company details
  And I enter Address 
  And I add Standard Document, Warehouse, Label, Footnote and Information Message
  And I click Save Record and Close Form button
  And I click on New Customer button
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller" 
  And I enter Company name "Rave Ford"
  And I enter Company details
  And I enter Address
  And I enter Standard Document, Warehouse, Label, Footnote and Information Message 
  And I click Save Record and Close Form button  
  
@Order_Basket
  Scenario:2 Changing Sundry Text
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "Amazing Jake and the Red Balloon" to be used
    And I verify the product "Amazing Jake and the Shaggy Dog" to be used
    And I click on New Order button
    And I enter a company "Rave Sigma" in Ship To field
    Then Information Text should be displayed under Ship To field
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And Order Date should be today, Order Process Type should be "Invoice",
    And Order Type should be "Normal Sale", Currency Type should be "UK Sterling", Billing Plan should be "Advance Charge"
    And I click on Texts sub tab
    And Document, Warehouse, Label and Footnote Texts should not be empty
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", first Product "Amazing Jake and the Red Balloon"  
    And I enter P/O Reference, Quantity 2, seller "Streamline Distribution" 
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    And I retrieve the Total Value for first product
    And I click Checkout button
    And I click on New Order button
    And I enter a company "Rave Ford" in Ship To field
    And I click Order Attributes tab
    And I click on Texts sub tab
    And I check Custom text checkbox
    And I change the text in Document Text to "Document"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale" and a second Product "Amazing Jake and the Shaggy Dog" 
    And I enter P/O Reference, Quantity 1, seller "Streamline Distribution" 
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    And I retrieve the Total Value for second product
    And I click Checkout button
    And I click on Orders
    And I click Billing Wave Release
    And I click on Customer Service
    And I open customer information panel for "Rave Sigma"
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open a correct profile "Streamline Sterling" 
    And I click on Ledger tab
    And I refresh the page
    And I click on recent Order
    And Order details should be correctly displayed for first customer
    And I click on the link to Invoice
    And I click Save Record and Close Form button
    And I click Save Record and Close Form button
    And I open customer information panel for "Rave Ford"
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open a correct profile "Streamline Sterling" 
    And I click on Ledger tab
    And I refresh the page
    And I click on recent Order
    And Order details should be correctly displayed for second customer
    And I click on the link to Invoice
    And I click Save Record and Close Form button
    And I click Save Record and Close Form button
    
    