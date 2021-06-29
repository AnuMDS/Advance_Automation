Feature: eEditSundryChargeToOrderLine

#This feature file contains automated manual tests of RAVAUT-778 on Jira
#Select product of sub type - Book- Paperback
 @Order_Basket
  Scenario: Editing sundry charges to a product in order basket
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "Amazing Jake and the Shaggy Dog" to be used
    And I click on New Order button
    And I enter a company "account one" in Ship To field
    And I click on Red Arrow
    And I select a transaction type "Invoice"
    And I select a Sale type "Normal Sale"
    And I select the Product to Order
    And I enter P/O Reference
    And I enter Quantity 2 to Order
    And I select a seller "Streamline Distribution" in Sold By field
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Add/ Edit Sundry Charge to Order Line icon
    And I select a Sundry Charge Type "Author Rights"
    And I select a Invoice Group "Streamline Distribution"
    And I select a Organisation "Streamline Distribution"
    And I enter a Charge Value 3
    And I click Save button
    And I open the record displayed under Sundry Charges tab
    #And I select a Order Items "PEasy 1" 
    And I enter a Charge Value 4 in Order Sundry Charges
    And I enter a Item Tax Value 5 in Order Sundry Charges
    And I enter sum of Charge Value and Item Tax Value in Total Value
    #And I select a document to attach "0000000005C"
    And I enter an Organisation "Streamline Distribution"
    And I enter Order Batch Code "Alpha Books"
    And I enter a Partition Date "02/06/2020"
    And I select a Linked Order Sundry Charge "Author rights sundry charge......test today"
    And I click on Save Record and Close Form
    Then details should be displayed under Sundry Charges tab as submitted 
    And I open the record displayed under Sundry Charges tab
    #And I select a Order Items "PEasy 1" 
    And I enter a Charge Value 1 in Order Sundry Charges
    And I enter a Item Tax Value 5 in Order Sundry Charges
    And I enter sum of Charge Value and Item Tax Value in Total Value
    #And I select a document to attach "0000000005C"
    And I enter an Organisation "Streamline Distribution"
    And I enter Order Batch Code "Alpha Books"
    And I enter a Partition Date "12/12/2020"
    And I select a Linked Order Sundry Charge "US Custom - Export Charges" 
    And I click Save Record and Close Form
    And details should be displayed under Sundry Charges tab as submitted
    And I click on Delete Line icon under Sundry Charges tab
    And record should be deleted from Sundry Charges tab
    And I close the Order window
     