Feature: PaymentsSplitAllocation

#This feature file contains automated manual tests of RAVAUT-885 and RAVAUT-886 on Jira
#Select customers with Invoices

  Scenario:1 Testing Payments made with split allocation
    Given I am logged in Ingenta Commercial Application
    When I click Accounts Receivable Administration 
    And I switch to Accounts Receivable Management
    And I click on New Payment button
    And I search for Account "SJB Books For Everyone" with outstanding Balances in a Ledger
    And I select a transaction with Outstanding Value
    And I retrieve the value for first account
    And I close Accounts Receivable Payments Record 
    And I click on New Payment button
    And I search for Account "SJB Bath Abbey Bookshop" with outstanding Balances in the same Ledger
    And I select a transaction with Outstanding Value
    And I retrieve the value for second account
    And I select a Payment Method "Cheque"
    And I enter a valid Cheque Number
    And I enter Received Value equal to total value of the two Invoices
    And I check the Split Cash checkbox
    And I click on Generate Payment button
    Then total received value should be added as a Payment row
    And I click on Pay Invoice for an Invoice value less than the Received Value
    And Invoice should be paid 
    And Invoice value should be deducted from the Outstanding value on the payment row
    And I click on the Select Account button
    And I click on Cancel
    And I click on the Select Account button
    And I click on Ok
    And 'New Accounts Receivable Payments Record' search page should be displayed
    And window caption should display Total Received and Total Outstanding To Allocate values
    And I search for second account with outstanding Balances in the same Ledger
    And all the fields should be disabled except the Document date field
    And all the fields should be correctly populated
    And Payment row should be displayed with correct value
    And I click on Pay Invoice for an Invoice value less than the Payment
    And I click on Commit
    And I click on Ledger tab 
    And Payment should be correctly displayed in the Ledger
    And I click on Find Account 
    And I open the second account and go to Ledger tab
    And I click on Toggle Zero Outstanding
    And Payment should be correctly displayed
    
  Scenario:2 Testing Payments made with split allocation
    Given I am logged in Ingenta Commercial Application
    When I click Accounts Receivable Administration 
    And I click on New Payment button
    And I search for Account "SJB Books For Everyone" with outstanding Balances in a Ledger
    And I select a transaction with Outstanding Value
    And I retrieve the value for first account
    And I close Accounts Receivable Payments Record 
    And I click on New Payment button
    And I search for Account "SJB Bath Abbey Bookshop" with outstanding Balances in the same Ledger
    And I select a transaction with Outstanding Value
    And I retrieve the value for second account
    And I select a Payment Method "Cheque"
    And I enter a valid Cheque Number
    And I enter Received Value equal to total value of the two Invoices
    And I check the Split Cash checkbox
    And I click on Generate Payment button 
    Then total received value should be added as a Payment row
    And I click on Pay Invoice for an Invoice value less than the Received Value 
    And Invoice value should be deducted from the Outstanding value on the payment row
    And I click on the Select Account button
    And I click on Cancel
    And I click on the Select Account button
    And I enter "ABCD" in Leave on account field
    And I enter value higher than the Total Unallocated
    And I enter value in Leave on account field
    And I clear Leave on account field and tab
    And Transfer Value should be similar to Total Unallocated value
    And I enter Transfer Value less than Total Unallocated value
    And I click on Ok
    And I search for second account with outstanding Balances in the same Ledger
    And all the fields should be disabled except the Document date field
    And all the fields should be correctly populated
    And Payment row should be displayed below with correct value
    And I click on Pay Invoice for value less than the Received Value
    And Invoice value should be deducted from the Outstanding value in the payment row
    And I click on Commit
    And I click on Ledger tab 
    And Value and Balance should match the Total Received Value and Leave on account field value
    And I click Save Record and Close Form button
    And I click on Find Account 
    And I open the second account 
    And I click on Ledger tab 
    And Value should match the Transfer Value and Balance should match reduced Outstanding Value 
    And I click Save Record and Close Form button
    
    And I click on New Payment 
    And I search for Account "SJB Books For Everyone" with outstanding Balances in a Ledger
    And I select a transaction with Outstanding Value
    And I retrieve the value for first account
    And I close Accounts Receivable Payments Record 
    And I click on New Payment 
    And I search for Account "SJB Bath Abbey Bookshop" with outstanding Balances in the same Ledger
    And I select a transaction with Outstanding Value
    And I retrieve the value for second account
    And I select a Payment Method "Cheque"
    And I enter a valid Cheque Number
    And I enter Received Value equal to total value of the two Invoices
    And I check the Split Cash checkbox
    And I click on Generate Payment button
    And I click on Pay Invoice for an Invoice value less than the Received Value
    And I click on the Select Account button
    And I click on Cancel
    And I click on the Select Account button
    And I click on Ok
    And I click on Cross to close record
    And message stating, the received payment was not fully posted and exiting now will remove the entire payment should be displayed
    And I click on Cancel
    And I click on Cross to close record
    And I click Ok to the warning message 
    And I click on Find Account 
    And I open the second account 
    And I click on Ledger tab
    And Transaction should not be posted to the Ledger 