
var ledgerType;
var value1;
var value2;
var x;
var outstandingValue, outstandingValue2;
var reducedOutstandingValue;
var account1, account2;
var receivedValueRequired; 
var valueLeaveOnAccount;
var totalUnallocatedValue, transferValue ;

When("I switch to Accounts Receivable Management", function (){
 let dashboardCaption = Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").Caption;

  if(dashboardCaption == "advance> Accounts Receivable Management"){
    Log.Checkpoint("Accounts Receivable Management dashboard displayed is Correct");
  }
  else{
    Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblOptions.Click();
    Sys.Process("Aptify Shell").Popup("Context").MenuItem("Switch Dashboard").Click();  
    Aliases.Aptify_Shell.Popup("Switch Dashboard").MenuItem("advance> Accounts Receivable Management").Click();  
    
    Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager", 6000);
    
    Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblOptions").Click();
    Sys.Process("Aptify Shell").Popup("Context").MenuItem("Set as Default").Click();
  }
});

When("I click on New Payment button", function (){
  if(Aliases.Aptify_Shell.SearchForm.Exists ){
     Aliases.Aptify_Shell.SearchForm.Close();
  }
    
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton15.ClickButton();
});

When("I search for Account {arg} with outstanding Balances in a Ledger", function (searchText){
  let txtSearch = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.keys("^a[BS]");
  txtSearch.SetText(searchText);
  account1 = searchText;
  
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  let gridSearchResults = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTAccountsReceivablePayments.Form").WinFormsObject("PTAccountsReceivablePayments.SearchDetails").WinFormsObject("panel4Content").WinFormsObject("PTAccountsReceivablePayments.Tabs.GeneralSearch").WinFormsObject("PTAccountsReceivablePayments.Tabs.GeneralSearch.Searching Parameters").WinFormsObject("searchControl").WinFormsObject("splitContainer1").WinFormsObject("SplitterPanel", "", 2).WinFormsObject("radPanelResults").WinFormsObject("PTEntityListView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  if(gridSearchResults.wRowCount > 1 ){
   let records = gridSearchResults.wRowCount;
   let i =0;
   for (i; i<records; i++)
   {
    let Balance = gridSearchResults.wValue(i, 2).OleValue;  
      if((Balance > 0))
       {
        let ledgerTypeSelected = gridSearchResults.wValue(i, 3).OleValue;
        ledgerType = ledgerTypeSelected;
        gridSearchResults.DblClickRowIndicator(i);
        break;
       }
   }
  } 
   else{
     let ledgerTypeSelected = gridSearchResults.wValue(0, 3).OleValue;
     ledgerType = ledgerTypeSelected;
   }
});



When("I retrieve the value for first account", function (){
   let totalValue =  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(x, 14).OleValue;
   value1 = totalValue;
});

When("I search for Account {arg} with outstanding Balances in the same Ledger", function (searchText){
  let gridSearchResults = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtSearch = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.keys("^a[BS]");
  txtSearch.SetText(searchText);
  account2 = searchText;
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
 if( gridSearchResults.Exists ){
  if(gridSearchResults.wRowCount > 1){
  let records = gridSearchResults.wRowCount;
  let i =0;
  for (i; i<records; i++)
   {
    let Balance = gridSearchResults.wValue(i, 2).OleValue;  
    let ledgerTypeSelected = gridSearchResults.wValue(i, 3).OleValue;
    if((Balance > 0) && (ledgerTypeSelected == ledgerType))
     {
        gridSearchResults.DblClickRowIndicator(i);
        x = i;
        break;
     }
   }
  } 
  }
});


When("I retrieve the value for second account", function (){
  let totalValue =  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(x, 14).OleValue;
  value2 = totalValue;
});

When("I enter Received Value equal to total value of the two Invoices", function (){
  let txtReceivedValue = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_ReceivedValue.txtInner;
  let totalValue = ((aqConvert.StrToInt(value1)) + (aqConvert.StrToInt(value2)));
  txtReceivedValue.Click();
  txtReceivedValue.Keys("^a[BS]");
  txtReceivedValue.SetText(totalValue);
    receivedValue = totalValue;
  txtReceivedValue.Keys("[Tab]");
});

When("I check the Split Cash checkbox", function (){
 Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_Tabs_GeneralPayment_IsSplitCash.chkInternal.wState = cbChecked;
});

Then("total received value should be added as a Payment row", function (){
let totalValue = ((aqConvert.StrToInt(value1)) + (aqConvert.StrToInt(value2)));
let rowCount = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
let value = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowCount - 1, 14).OleValue;
let documentType = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowCount - 1, 7).OleValue;

if( (aqObject.CompareProperty(value, cmpEqual, -(totalValue), true, 3)) && (aqObject.CompareProperty(documentType, cmpEqual, "Payment", true, 3)) ){
    Log.Checkpoint("Total Received value is added as a Payment row");
   }
  else{
    Log.Error("Total Received value is not added as a Payment row");
   }
});

Then("I click on Pay Invoice for an Invoice value less than the Payment", function (){
  let totalValue = value1 + value2;
  let records = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  let i = 0;
  for (i; i<records; i++)
  {
  let outstandingValuesDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 8).OleValue;
  let documentType = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 7).OleValue;
  if( documentType == "Invoice" ){  
   if(outstandingValuesDisplayed < reducedOutstandingValue)
    {
     let value = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 8).OleValue;
     outstandingValue = value;
     Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(i, 0);
     x = i;
     break;
    }
   } 
  }
});

Then("I click on the Select Account button", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(232, 20);
});

Then("I click on Cancel", function (){
  if(Aliases.Aptify_Shell.LocalizedMsgBox.Exists){
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
  else{
    Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_Active_Button_Cancel.Click();
  }
});

Then("I click on Ok", function (){
  Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_Active_Button_OK.Click();
});

Then("{arg} search page should be displayed", function (caption){
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_ReceivedValueOutstanding.txtInner.get_Text();
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, caption);
});

Then("window caption should display Total Received and Total Outstanding To Allocate values", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_ReceivedValueOutstanding.txtInner.get_Text();
  let windowCaption = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_FormCaption.panel4Content.captionText.WndCaption;
  let totalValue = ((aqConvert.StrToInt(value1)) + (aqConvert.StrToInt(value2)));

  let message1 = "Splitting Cash| Total Received: (" ;
  var message2 = ")  Total Outstanding To Allocate: (" ;
  var message3 = ")..." ;
 
  let splitCaption = windowCaption.split("(");
  let getSign = aqString.SubString(splitCaption[1], 0, 1) ;
  
  let result1 = aqString.Concat(message1,(aqString.concat(getSign+totalValue.toFixed(2), message2 )));
  let result2 = aqString.Concat(getSign+reducedOutstandingValue.toFixed(2), message3);
  let captionGenerated = aqString.Concat(result1, result2);

  if(aqObject.CompareProperty(windowCaption, cmpEqual, captionGenerated, true, 3)){
    Log.Checkpoint("Window caption displays Total Received and Total Outstanding To Allocate values");
  }
  else{
    Log.Error("Window caption does not display Total Received and Total Outstanding To Allocate values");
	}
});


Then("I search for {arg} with outstanding Balances in the same Ledger", function (searchText){
  let txtSearch = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.keys("^a[BS]");
  txtSearch.SetText(searchText);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  let gridSearchResults = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridSearchResults.wRowCount;
  let i =0;
  for (i; i<records; i++)
   {
    let Balance = gridSearchResults.wValue(i, 2).OleValue;  
    let ledgetTypeSelected = gridSearchResults.wValue(i, 3).OleValue;
    if((Balance > 0) && (ledgetTypeSelected == ledgerType))
     {
       gridSearchResults.DblClickRowIndicator(i);
       x = i;
       break;
     }
   }
});

Then("all the fields should be disabled except the Document date field", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_PaymentMethodID.LookupSearchCombo, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_Tabs_General_PaymentReference.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_ChequeNumber.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_Tabs_GeneralPayment_DocumentDate.txtInner, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_ReceivedValue.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_Tabs_GeneralPayment_RVO.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_ReceivedCurrencyID.LookupSearchCombo, "Enabled", cmpEqual, false);

});

When("I close Accounts Receivable Payments Record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});

Then("I click on the Pay Invoice button for an invoice row", function (){
  let records = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  let i = 0;
  for (i; i<records; i++)
  {
  let outstandingValuesDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 8).OleValue;
  let documentType = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 7).OleValue;
  if( documentType == "Invoice" ){  
   if(outstandingValuesDisplayed > 0 )
    {
     let value = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 8).OleValue;
     outstandingValue2 = value;
     Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(i, 0);
     break;
    }
   } 
  }
});

Then("Invoice should be paid", function (){
  let outstandingValueDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(x, 8).OleValue;
  let payValue = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(x, 18).OleValue;
  if((aqObject.CompareProperty(outstandingValueDisplayed, cmpEqual, 0, true, 3)) && (aqObject.CompareProperty(payValue, cmpEqual, outstandingValue, true, 3)) ){
    Log.Checkpoint("Invoice is paid");
     }
  else{
    Log.Error("Invoice is not paid");
	}
});

Then("Invoice value should be deducted from the Outstanding value on the payment row", function (){
  let totalValue = ((aqConvert.StrToInt(value1)) + (aqConvert.StrToInt(value2)));
  let rowCount = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  var i =0
  
  for(i;i<rowCount;i++){
   var reference = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i,6).OleValue;    
    if( reference == chequeNumber  ){
        var outstandingValueDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i,8).OleValue;

    }
  }
  let outstandingValueCalculated = totalValue - outstandingValue;
  reducedOutstandingValue = outstandingValueCalculated;
  if(aqObject.CompareProperty(aqConvert.StrToFloat(outstandingValueDisplayed), cmpEqual, -( aqConvert.StrToFloat(outstandingValueCalculated)), true, 3)){
    Log.Checkpoint("Invoice value is deducted from the Outstanding value on the payment row");
  }
  else{
    Log.Error("Invoice value is not deducted from the Outstanding value on the payment row");
	}
});

Then("Payment should be correctly displayed in the Ledger", function (){
  let gridInvoices = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1; 
  let records = gridInvoices.wRowCount;
  let i = 0;
  for (i; i<records; i++)
  {
    let reference = gridInvoices.wValue(i, 3).OleValue;
    if(reference = chequeNumber)
    {
      let value = gridInvoices.wValue(i, 7).OleValue;
      //let balanceDisplayed = gridInvoices.wValue(i, 8).OleValue;
      //&& (aqObject.CompareProperty(-(reducedOutstandingValue), cmpEqual, balanceDisplayed, true, 3))
      if((aqObject.CompareProperty(value, cmpEqual,-(reducedOutstandingValue), true, 3)) ){
       Log.Checkpoint("Transaction is correctly displayed in the Ledger");
       break;
      }
      else{
       Log.Error("Transaction is not correctly displayed in the Ledger");
       break;
	    }
    }
  }
});

Then("I click on Pay Invoice for an Invoice value less than the Received Value", function (){
  let totalValue = ((aqConvert.StrToInt(value1)) + (aqConvert.StrToInt(value2)));
  let records = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  let i = 0;
  for (i; i<records; i++)
  {
  let outstandingValuesDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 8).OleValue;
  let documentType = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 7).OleValue;
  if( documentType == "Invoice" ){  
   if(outstandingValuesDisplayed < totalValue)
    {
     let value = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 8).OleValue;
     outstandingValue = value;
     Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(i, 0);
     x = i;
     break;
    }
   } 
  }
});

Then("I search for second account with outstanding Balances in the same Ledger", function (){
  let txtSearch = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.keys("^a[BS]");
  txtSearch.SetText(account1);

  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  let gridSearchResults = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
if( gridSearchResults.Exists ){
  if(gridSearchResults.wRowCount > 1){
    gridSearchResults.DblClickCell(0, 0);
  }
}  
});

Then("Payment row should be displayed with correct value", function (){
  let rowCount = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  let value = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(1, 14).OleValue;
  let documentType = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowCount - 1, 7).OleValue;
//
//  if( (aqObject.CompareProperty(value, cmpEqual, -(reducedOutstandingValue), true, 3)) && (aqObject.CompareProperty(documentType, cmpEqual, "Payment Transfer IN From Another Account", true, 3)) ){
//    Log.Checkpoint("Total Received value is added as a Payment row");
//   }
//  else{
//    Log.Error("Total Received value is not added as a Payment row");
//   }

Log.Message(value);
});

Then("all the fields should be correctly populated", function (){
  let totalValue = ((aqConvert.StrToInt(value1)) + (aqConvert.StrToInt(value2)));
  let receivedValue = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_ReceivedValue.txtInner.get_Text();
  let receivedOutstandingValue = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_Tabs_GeneralPayment_RVO.txtInner.get_Text();
  let chequeNumber = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_ChequeNumber.txtInner.get_Text();
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_PaymentMethodID.LookupSearchCombo, "WndCaption", cmpEqual, "Cheque");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_Tabs_GeneralPayment_DocumentDate.txtInner, "Text", cmpEqual, aqDateTime.Today());

  if((aqObject.CompareProperty((aqString.Remove(receivedOutstandingValue, 1, 1)), cmpEqual, aqString.Concat("(",(aqString.concat(totalValue.toFixed(2),")"))), true, 3)) && (aqObject.CompareProperty((value2.toFixed(2)), cmpEqual, (outstandingValue), true, 3)) && (aqObject.CompareProperty(chequeNumber, cmpEqual, chequeNumber, true, 3)) ){
    Log.Checkpoint("All the fields are correctly populated");
  }
  else{
    Log.Error("Not all the fields are correctly populated");
	}
});

Then("I enter {arg} in Leave on account field", function (leaveOnAccount){
  let txtLeaveOnAccount = Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_ReceivedValueOutstanding.txtInner;
  
  txtLeaveOnAccount.Click();
  txtLeaveOnAccount.Clear();
  txtLeaveOnAccount.SetText(leaveOnAccount);
  txtLeaveOnAccount.Keys("[Tab]");
  
  Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
  Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
});

Then("I enter value higher than the Total Unallocated", function (){
  var totalUnallocated =  Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_ReceivedValue.txtInner.Text;
  let txtLeaveOnAccount = Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_ReceivedValueOutstanding.txtInner;
  let leaveOnAccount =  10 + aqConvert.StrToInt(totalUnallocated);
  txtLeaveOnAccount.Click();
  txtLeaveOnAccount.Clear();
  txtLeaveOnAccount.SetText(leaveOnAccount);
  txtLeaveOnAccount.Keys("[Tab]");
});

Then("I clear Leave on account field and tab", function (){
  let txtLeaveOnAccount = Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_ReceivedValueOutstanding.txtInner;
  
  txtLeaveOnAccount.Click();
  txtLeaveOnAccount.Clear();
  txtLeaveOnAccount.Keys("[Tab]");
});

Then("Transfer Value should be similar to Total Unallocated value", function (){
  var totalUnallocated =  Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_ReceivedValue.txtInner.Text;
  var transferValue = Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_PaymentOutstanding.txtInner.get_Text();
  
  if(aqObject.CompareProperty(totalUnallocated, cmpEqual, transferValue, true, 3)){
    Log.Checkpoint("Transfer Value is similar to Total Unallocated value");
     }
  else{
    Log.Error("Transfer Value is not similar to Total Unallocated value");
	}
});

Then("I enter Transfer Value less than Total Unallocated value", function (){
  var totalUnallocated =  Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_ReceivedValue.txtInner.Text;
    
  let txtTransferValue = Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_PaymentOutstanding.txtInner;
  transferValue = (aqConvert.StrToInt(totalUnallocated)+1);
  txtTransferValue.Click();
  txtTransferValue.Clear();
  txtTransferValue.SetText(transferValue);
  txtTransferValue.Keys("[Tab]");
  
  let getLeaveOnAccount = Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_ReceivedValueOutstanding.txtInner.get_Text();
  valueLeaveOnAccount = getLeaveOnAccount;
Log.Message(valueLeaveOnAccount);
  var totalUnallocated =  Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_ReceivedValue.txtInner.Text;
  totalUnallocatedValue = totalUnallocated;
});

function test(){
//  var totalUnallocated = - 98.50;
//  
//  transferValue = (aqConvert.StrToInt(-totalUnallocated)-1);
   var totalUnallocated =  Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_ReceivedValue.txtInner.Text;
  
var c= aqConvert.StrToInt(totalUnallocated);
Log.Message(totalUnallocated)
Log.Message(c);
Log.Message(c+1);
}

Then("I enter value in Leave on account field", function (){
  var totalUnallocated =  Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_ReceivedValue.txtInner.Text;
  let txtLeaveOnAccount = Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_ReceivedValueOutstanding.txtInner;
  
  txtLeaveOnAccount.Click();
  txtLeaveOnAccount.Clear();
  txtLeaveOnAccount.SetText(totalUnallocated);
  txtLeaveOnAccount.Keys("[Tab]");
});

Then("I search for Account {arg} with outstanding Balances in a Ledger", function (searchText){
  let txtSearch = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.keys("^a[BS]");
  txtSearch.SetText(searchText);
  account1 = searchText;
  
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  let gridSearchResults = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTAccountsReceivablePayments.Form").WinFormsObject("PTAccountsReceivablePayments.SearchDetails").WinFormsObject("panel4Content").WinFormsObject("PTAccountsReceivablePayments.Tabs.GeneralSearch").WinFormsObject("PTAccountsReceivablePayments.Tabs.GeneralSearch.Searching Parameters").WinFormsObject("searchControl").WinFormsObject("splitContainer1").WinFormsObject("SplitterPanel", "", 2).WinFormsObject("radPanelResults").WinFormsObject("PTEntityListView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  if(gridSearchResults.wRowCount > 1 ){
   let records = gridSearchResults.wRowCount;
   let i =0;
   for (i; i<records; i++)
   {
    let Balance = gridSearchResults.wValue(i, 2).OleValue;  
      if((Balance > 0))
       {
        let ledgerTypeSelected = gridSearchResults.wValue(i, 3).OleValue;
        ledgerType = ledgerTypeSelected;
        gridSearchResults.DblClickRowIndicator(i);
        break;
       }
   }
  } 
   else
   {
    let windowCaption = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_FormCaption.panel4Content.captionText.WndCaption;
    let ledgerTypeSelected = windowCaption.split(",") ;
    ledgerType = ledgerTypeSelected;
 
   }
});

Then("I select a transaction with Outstanding Value", function (){
  var records = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  var i = 0;
  for (i; i<records; i++)
  {
  var outstandingValuesDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 8).OleValue;
  var documentType = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 7).OleValue;
  if( documentType == "Invoice" ){  
   if(outstandingValuesDisplayed > 0)
    {
     var outstandingValue =  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 8).OleValue;
     receivedValueRequired = outstandingValue;
     Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickRowIndicator(i);
     x = i;
     break;
    }
   }
  }
});

Then("I retrieve the value for first account", function (){
  let totalValue =  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(x, 14).OleValue;
  value1 = totalValue;
});

Then("I close Accounts Receivable Payments Record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});

Then("I search for Account {arg} with outstanding Balances in the same Ledger", function (searchText){
  let gridSearchResults = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtSearch = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.keys("^a[BS]");
  txtSearch.SetText(searchText);
  account2 = searchText;
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_SearchDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralSearch.PTAccountsReceivablePayments_Tabs_GeneralSearch_Searching_Parameters.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
 if(gridSearchResults.Exists){
  if(gridSearchResults.wRowCount > 1){
  let records = gridSearchResults.wRowCount;
  let i =0;
  for (i; i<records; i++)
   {
    let Balance = gridSearchResults.wValue(i, 2).OleValue;  
    let ledgetTypeSelected = gridSearchResults.wValue(i, 3).OleValue;
    if((Balance > 0) && (ledgetTypeSelected == ledgerType))
     {
        gridSearchResults.DblClickRowIndicator(i);
        x = i;
        break;
     }
   }
  } 
 } 
});

Then("I retrieve the value for second account", function (){
  let totalValue =  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(x, 14).OleValue;
  value2 = totalValue;
});

Then("I enter Received Value equal to total value of the two Invoices", function (){
  let txtReceivedValue = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_ReceivedValue.txtInner;
  let totalValue = ((aqConvert.StrToInt(value1)) + (aqConvert.StrToInt(value2)));
  txtReceivedValue.Click();
  txtReceivedValue.Keys("^a[BS]");
  txtReceivedValue.SetText(totalValue);
  txtReceivedValue.Keys("[Tab]");
});

Then("I check the Split Cash checkbox", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_Tabs_GeneralPayment_IsSplitCash.chkInternal.wState = cbChecked;
});

Then("I click on Cross to close record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});

Then("message stating, the received payment was not fully posted and exiting now will remove the entire payment should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage, "Text", cmpEqual, "Splitting cash. the payment received has not fully posted. Exiting will remove the entire payment and action made. OK to Close?");
});

Then("I click Ok to the warning message", function (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});

Then("I click on New Payment", function (){
  if(Aliases.Aptify_Shell.SearchForm.Exists ){
     Aliases.Aptify_Shell.SearchForm.Close();
  }  
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton15.ClickButton();
});

Then("Value should match the Transfer Value and Balance should match reduced Outstanding Value", function (){
  let gridInvoices = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1; 
  let records = gridInvoices.wRowCount;
  let i = 0;
  for (i; i<records; i++)
  {
    let reference = gridInvoices.wValue(i, 3).OleValue;
    if(reference = chequeNumber)
    {
      var value = gridInvoices.wValue(i, 7).OleValue;
      var balanceDisplayed = gridInvoices.wValue(i, 8).OleValue;
      
      if((aqObject.CompareProperty(value, cmpEqual,-(receivedValue), true, 3))  && (aqObject.CompareProperty((aqConvert.StrToFloat(valueLeaveOnAccount)), cmpEqual, balanceDisplayed, true, 3))){
       Log.Checkpoint("Transaction is correctly displayed in the Ledger");
       break;
      }
      else{
       Log.Error("Transaction is not correctly displayed in the Ledger");
       break;
	    }
    }
  }
  
  Log.Message(receivedValue);
  Log.Message(value);
  Log.Message(valueLeaveOnAccount);
  Log.Message(balanceDisplayed);
  Delay(10000);
});
function test1(){
  
  let getLeaveOnAccount = Aliases.Aptify_Shell.Form.AptifyControlBase.PTAccountsReceivablePayments_SplitCash.PTAccountsReceivablePayments_SplitCash_ReceivedValueOutstanding.txtInner.get_Text();
  valueLeaveOnAccount = getLeaveOnAccount;

    Log.Message( aqConvert.StrToFloat("(£1.56)"  ) );
}

Then("I open the second account", function (){
  let txtSearch = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(account2);
  
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  let gridSearchResults = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
 if( gridSearchResults.Exists ){ 
  if(gridSearchResults.wRowCount > 1){
  let records = gridSearchResults.wRowCount;
  let i =0;
  for (i; i<records; i++)
   {
    let Balance = gridSearchResults.wValue(i, 2).OleValue;  
    if(Balance > 0)
     {
       gridSearchResults.DblClickRowIndicator(i);
       break;
     }
   }
  } 
 } 
});

Then("Value and Balance should match the Total Received Value and Leave on account field value", function (){
  let gridInvoices = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1; 
  let records = gridInvoices.wRowCount;
  let totalValue = ((aqConvert.StrToInt(value1)) + (aqConvert.StrToInt(value2)));
  let i = 0;
  for (i; i<records; i++)
  {
    let reference = gridInvoices.wValue(i, 3).OleValue;
    if(reference = chequeNumber)
    {
      let value = gridInvoices.wValue(i, 7).OleValue;
     let balanceDisplayed = gridInvoices.wValue(i, 8).OleValue;
     
if((aqObject.CompareProperty(value, cmpEqual,(transferValue), true, 3))  && (aqObject.CompareProperty((aqConvert.StrToInt(transferValue)), cmpEqual, balanceDisplayed, true, 3))){
       Log.Checkpoint("Transaction is correctly displayed in the Ledger");
       break;
      }
      else{
       Log.Error("Transaction is not correctly displayed in the Ledger");
       break;
	    }
    }
  }
    Log.Message(receivedValue);
  Log.Message(transferValue);
  Log.Message(valueLeaveOnAccount);
});

Then("Transaction should not be posted to the Ledger", function (){
  let gridInvoices = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1; 
  let records = gridInvoices.wRowCount;
  let i = 0;
  let passCount = 0;
  for (i; i<records; i++)
  {
    let reference = gridInvoices.wValue(i, 3).OleValue;
    if(reference != chequeNumber ){
       passCount += 1;
    }
  }
  
  if (passCount == records)
  {
   Log.Checkpoint("Transaction is not posted to the Ledger");
  }
  else
  {
   Log.Error("Transaction is posted to the Ledger");
  }
});

Then("I click on Pay Invoice for value less than the Received Value", function (){
  let receivedValue = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_ReceivedValue.txtInner.Text;
  let records = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  let i = 0;
  for (i; i<records; i++)
  {
  let outstandingValuesDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 8).OleValue;
  let documentType = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 7).OleValue;
  if( documentType == "Invoice" ){  
   if(outstandingValuesDisplayed < receivedValue)
    {
     let value = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 8).OleValue;
     outstandingValue = value;
     Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(i, 0);
     break;
    }
   } 
  }
});

Then("I open the second account and go to Ledger tab", function (){
 var gridCustomer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
 
  let txtSearch = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(account2);
  
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  let gridSearchResults = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
if( gridSearchResults.Exists ){ 
  if(gridSearchResults.wRowCount > 1){
  let records = gridSearchResults.wRowCount;
  let i =0;
  for (i; i<records; i++)
   {
    let Balance = gridSearchResults.wValue(i, 2).OleValue;  
    if(Balance > 0)
     {
       gridSearchResults.DblClickRowIndicator(i);
       break;
     }
   }
  } 
}  
   Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.ClickTab("Ledger");
});

Then("", function (){
  throw new NotImplementedError();
});

Then("Payment should be correctly displayed", function (){
  let gridInvoices = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1; 
  let records = gridInvoices.wRowCount;
      let value = gridInvoices.wValue(0, 8).OleValue;
      //let balanceDisplayed = gridInvoices.wValue(i, 8).OleValue;
      //&& (aqObject.CompareProperty(-(reducedOutstandingValue), cmpEqual, balanceDisplayed, true, 3))
      if((aqObject.CompareProperty(value, cmpEqual,reducedOutstandingValue, true, 3)) ){
       Log.Checkpoint("Transaction is correctly displayed in the Ledger");
     
      }
      else{
       Log.Error("Transaction is not correctly displayed in the Ledger");
      
	    }
});

Then("Payment row should be displayed below with correct value", function (){
  let rowCount = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  let value = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowCount - 1, 14).OleValue;
  let documentType = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowCount - 1, 7).OleValue;

  if( (aqObject.CompareProperty(value, cmpEqual, (transferValue), true, 3)) && (aqObject.CompareProperty(documentType, cmpEqual, "Payment Transfer IN From Another Account", true, 3)) ){
    Log.Checkpoint("Total Received value is added as a Payment row");
   }
  else{
    Log.Error("Total Received value is not added as a Payment row");
   } 
});

Then("Invoice value should be deducted from the Outstanding value in the payment row", function (){
  let totalValue = ((aqConvert.StrToInt(value1)) + (aqConvert.StrToInt(value2)));
  let rowCount = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  var i =0
  
  for(i;i<rowCount;i++){
   var reference = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i,6).OleValue;    
    if( reference == chequeNumber  ){
        var outstandingValueDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i,8).OleValue;

    }
  } 
//  let outstandingValueDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowCount - 1, 8).OleValue;
  let outstandingValueCalculated = totalValue - outstandingValue;
  reducedOutstandingValue = outstandingValueCalculated;
  if(aqObject.CompareProperty(outstandingValueDisplayed, cmpEqual, (transferValue), true, 3)){
    Log.Checkpoint("Invoice value is deducted from the Outstanding value on the payment row");
  }
  else{
    Log.Error("Invoice value is not deducted from the Outstanding value on the payment row");
	}
});

When("I select a transaction with Outstanding Value", function (){
 var records = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  var i = 0;
if( Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists ){  
  for (i; i<records; i++)
  {
  var outstandingValuesDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 8).OleValue;
  var documentType = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 7).OleValue;
  if( documentType == "Invoice" ){  
    
   if(outstandingValuesDisplayed > 0)
    {
     var outstandingValue =  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 8).OleValue;
     receivedValueRequired = outstandingValue;
     Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_OutstandingTransactions.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralTransactions.PTAccountsReceivablePayments_Tabs_GeneralTransactionsl_Telerik_List_View_Results.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickRowIndicator(i);
     x = i;
     break;
    }
   }
  } 
}
});

When("I select a Payment Method {arg}", function (paymentMethod){
  var ddPaymentMethod = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_PaymentMethodID.LookupSearchCombo;
  
  ddPaymentMethod.Click();
  ddPaymentMethod.ClickItem(paymentMethod);
  ddPaymentMethod.Keys("[Tab]");
});

When("I enter a valid Cheque Number", function (){
  var randomNumber = aqConvert.FloatToStr(Math.floor((Math.random() * 100000) + 1));
  var txtChequeNumber = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_ChequeNumber.txtInner;
  
  txtChequeNumber.Click();
  txtChequeNumber.SetText(randomNumber);
  chequeNumber = randomNumber;
  txtChequeNumber.Keys("[Tab]");
});

When("I click on Generate Payment button", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_Tabs_GeneralPayment_Active_Button_GeneratePayment.Click();
});

Then("I click on Commit", function (){
 Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_Tabs_GeneralPayment_Active_Button_Commit.Click();
  
 if(Aliases.Aptify_Shell.LocalizedMsgBox.Exists){
   verifyCommitMessage();
   Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
 }
});
function verifyCommitMessage()
{
  aqObject.CheckProperty(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage, "textValue", cmpEqual, "Unallocated Cash Remains against this account. Save as Unallocated?");
}
Then("I click on Find Account", function (){
  closeLedger();
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton14.ClickButton();
});
function closeLedger()
{
  if(Aliases.Aptify_Shell.SearchForm.Exists){
    Aliases.Aptify_Shell.SearchForm.Close();
   }
}

Then("I select a Payment Method {arg}", function (paymentMethod){
  var ddPaymentMethod = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_PaymentMethodID.LookupSearchCombo;
  
  ddPaymentMethod.Click();
  ddPaymentMethod.ClickItem(paymentMethod);
  ddPaymentMethod.Keys("[Tab]");
});

Then("I enter a valid Cheque Number", function (){
  var randomNumber = aqConvert.FloatToStr(Math.floor((Math.random() * 100000) + 1));
  var txtChequeNumber = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_ChequeNumber.txtInner;
  
  txtChequeNumber.Click();
  txtChequeNumber.SetText(randomNumber);
  chequeNumber = randomNumber;
  txtChequeNumber.Keys("[Tab]");
});

Then("I click on Generate Payment button", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivablePayments_Form.PTAccountsReceivablePayments_PaymentDetails.panel4Content.PTAccountsReceivablePayments_Tabs_GeneralPayment.PTAccountsReceivablePayments_Tabs_GeneralPayment_Active_Button_GeneratePayment.Click();
});
