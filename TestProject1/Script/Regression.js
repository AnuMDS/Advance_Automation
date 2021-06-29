//USEUNIT OrderBasket
var balanceQty1,balanceQty2,txtProduct,parIdentifier;
var parType;
var parTitle;
var value,companyName,presentRow,Reference,totalSupplyValue,documentRef
var productName,creditDocumentRef,accProduct;
var productInventory1 ,productInventory2,productInventory3,productInventory4, productInventory5,productInventory6;
var productInventory7,productInventory8;
var totalOrderValue,productOrderQty;
var documentReference,docRefFromCustomer,docRefToCustomer,docRefFromProduct,docRefToProduct;
var title;
var site;
var version;
var inventorySite1;
var inventorySite2;
var baseProduct;

var customer, documentReference, backOrderQty, product, fromProduct;
var referenceCode, orderId, totalProducts, chequeNumber, toProduct;
var productInventory1, productInventory2, productInventory3, productInventory4;
var productInventory5, productInventory6, productInventory7, productInventory8;
var product1, product2, product3, product4, product5, product6, product7, product8;
var searchValue1, searchValue2, increasedQtyBy, decreasedQtyBy;
var forProductQty, toProductQty, docInvoice, docAdviceNote;
var companyName, sales, addressType, orderPar;
var refCode, site, netValue, confirmedQty;
var poRefOrderQuery, supplyValue, productPar;
var addressLine1, addressLine2, addressLine3, addressLine4, addressLine5;
var availableQtyNewInventory, availableNewInventory, availableInventory, avaialbleQty;
var documentReference1, documentReference2, toCustomer, productQty;
var arrayOrderId = [];
var arrayProducts = [];
var arrayInventory = [];
let sFolder = "\\booboo\\Handover_Bhanu\\IngentaCommercialApplication_New\\TestProject1\\Invoices\\";

//cash on
When("I click on Order attributes tab", function clickOrderAttributes (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.ClickTab("Order Attributes");
});

When("I click on Add Item from Order Basket page", function clickAddOrderBasket (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
  if(Aliases.Aptify_Shell.dlg.Exists)
  {
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
  }
});

When("I open the record from documents window", function openDocument (){
  let radGridViewLinkInvoice = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  
  let DocumentReference = radGridViewLinkInvoice.wValue(0, 2).OleValue;
  
  let sFile = sFolder + DocumentReference
   aqFileSystem.CreateFolder(sFile);
   
  radGridViewLinkInvoice.DblClickCell(0, 2);
  Delay(7000);
  let referenceInvoice = Sys.Desktop.Picture();
  referenceInvoice.SaveToFile(sFile + "\\" + "FirstPage.jpg");
   
  Sys.Keys("[PageDown]");
   
  referenceInvoice.SaveToFile(sFile + "\\" + "SecondPage.jpg");
    
});

Then("Order Process Type should be {arg}", function selectOrderProcess (orderProcessType){
  let radGridViewOrderProcessType = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmOrderProcessType = radGridViewOrderProcessType.wValue(0, "Order Process Type").OleValue;
  if(aqObject.CompareProperty(clmOrderProcessType, cmpEqual ,orderProcessType , true,3))
  {
    Log.Checkpoint("Order Process Type has been showing correctly")
  }
  else{
    Log.Error("Incorrect Order process Type has been showing");
  }
});

Then("I enter different Product Name On Order Id wizard {arg}", function (prodName){
  
  let lnkProductName = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  lnkProductName.Keys(prodName);
  lnkProductName.Keys("[Tab]");
  accProduct = prodName;
  let radGridViewProductOrderId = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  if(radGridViewProductOrderId.Exists)
  {
    radGridViewProductOrderId.DblClickCell(0, "Title");
  }
});

Then("I select Order Type {arg}", function selectOrderType (orderType){
  let ddOrderType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderTypeID.LookupSearchCombo;
  ddOrderType.ClickItem(orderType)
});

When("I select Order Process Type {arg}", function (orderProcessType){
  let ddOrderProcessType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderProcessTypeID.LookupSearchCombo;
  ddOrderProcessType.ClickItem(orderProcessType);
});

Then("second document reference record should be display under Ledger tab", function (){
  let splitContainer = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1;
  splitContainer.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, "Document Type");
  splitContainer.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,"Title");
  let clmTitle = splitContainer.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Title").OleValue;
  
  
   if(aqObject.CompareProperty(clmTitle, cmpEqual ,accProduct, true,3))
  {
    Log.Checkpoint("second Invoice record record has been display under ledger")
  }
  else{
    Log.Error("second Invoice record record is not display under ledger");
  }
  
});

Then("I refresh the documents window to retrieve the document reference", function (){
  Delay(80000);
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(71, 15);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(43, 180);
  let radGridViewDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  clmDocumentRef = radGridViewDocuments.wValue(0, "Document Reference").OleValue;
  creditDocumentRef = clmDocumentRef;
});


Then("I enter same product in Product link box {arg}", function (prodName){
  let lnkProductName = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  lnkProductName.Keys(prodName);
  lnkProductName.Keys("[Tab]");
  productName = prodName;
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel_new.splitContainerDetails.SplitterPanel.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridView.Exists)
  {
    let totalRows = radGridView.wRowCount;
    radGridView.DblClickCell(totalRows-1, "Title");
  }
});

Then("I select credit reason {arg}", function selectCreditReason (creditReason){
  let ddCreditReason = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_PT_Group_Box_OrderTypeReasons.PTOrderItems_Detail_ReasonsForOrderType.PTOrderItems_Detail_ReaonsForOrderType_CreditReasonID.LookupSearchCombo;
  ddCreditReason.ClickItem(creditReason);
});

Then("I select cancel reason {arg}", function selectCancelReason (cancelReason){
  let ddCancelReason = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_PT_Group_Box_OrderTypeReasons.PTOrderItems_Detail_ReasonsForOrderType.PTOrderItems_Detail_ReaonsForOrderType_CancelReasonID.LookupSearchCombo;
  ddCancelReason.ClickItem(cancelReason);
});

Then("I open the record from documents window", function openDocumentRecord (){
  let radGridViewDocumentWindow = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  //radGridViewDocumentWindow.DblClickCell(0,"Document Reference");
  
  
  let DocumentReference = radGridViewDocumentWindow.wValue(0, 2).OleValue;
  
  //var sFolder = "C:\\Project\\IngentaCommercialApplication\\IngentaCommApp\\Invoice\\"
  let sFile = sFolder + DocumentReference
   aqFileSystem.CreateFolder(sFile);
   
  radGridViewDocumentWindow.DblClickCell(0, 2);
  Delay(7000);
  referenceInvoice.SaveToFile(sFile + "\\" + "FirstPage.jpg");
  
  Sys.Keys("[PageDown]");
   
  referenceInvoice.SaveToFile(sFile + "\\" + "SecondPage.jpg");
});

Then("I place a new order with same customer {arg}", function enterCustomerName(customerName){
  let lnkShipTo = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_ShipToRoleID.txtLink;
  lnkShipTo.Keys(customerName);
  lnkShipTo.Keys("[Tab]");
  let radGridViewShipTo = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewShipTo.Exists)
  {
    radGridViewShipTo.DblClickCell(0, "Name");
  }
});

Then("I select Payment option {arg}", function selectPaymentOption (paymentMode){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeID.LookupSearchCombo.ClickItem(paymentMode);
});

Then("I select row to take the amount from credit", function selectRowfromCredit (){
  var radGridViewCredit = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeCash.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeCash_CashOnLedger.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  var totalRows = radGridViewCredit.wRowCount;
  radGridViewCredit.ClickCell(totalRows-1,0);
 
}); 

Then("I enter P\\/O Reference {arg}", function enterReference (Reference){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSearch_CustomerLineRef.txtInner;
  txtReference.Keys(Reference);
  txtReference.Keys("[Tab]");
});

Then("I click on Find Option from Other Actions",function clickFindOption()
{
  let radCommandBar = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1;
  radCommandBar.diagramCommandbarinplaceedit.Click(43, 19);
  radCommandBar.diagramCommandbarmoreactions.Keys("^f");
});

Then("I enter document Reference in Find field", function enterReferenceInFindField (){
  let txtDocumentRef = Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel.simpleSearchCtl.txtSearch;
  txtDocumentRef.Keys(documentRef);
  txtDocumentRef.Keys("[Enter]");
});

Then("Record should be display under Ledger tab", function checkpointRecordDisplay (){
  let splitContainer = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1;
  splitContainer.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(1, "Document Type");
  splitContainer.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,"Title");
  let clmTitle = splitContainer.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Title").OleValue;
  
   if(aqObject.CompareProperty(clmTitle, cmpEqual ,product, true,3))
  {
    Log.Checkpoint("first Invoice record record has been display under ledger")
  }
  else{
    Log.Error("first Invoice record is not display under ledger");
  }
  
});

Then("I close the Find record window", function closeWindow (){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});

Then("I enter second document Reference in Find field", function enterSecondReference (){
  let txtDocumentRef = Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel.simpleSearchCtl.txtSearch;
  txtDocumentRef.Keys(documentReference);
  txtDocumentRef.Keys("[Enter]");
});

Then("I click on Fiscal Summary", function clickFiscalTab (){
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain;
  ultraTabControl.ClickTab("Fiscal Summary");
  
});

Then("Credits record should be display", function (){
  
  let radGridViewCreditsRecord = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Tab_FiscalSummary_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Tab_FiscalSummary.PTAccountsReceivables_PT_PTAccountsReceivables_Tab_FiscalSummary_Telerik_List_View_FiscalLedgerDetail.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let creditRef = radGridViewCreditsRecord.wValue(1,"Document Reference").OleValue;
  if(aqObject.CompareProperty(creditRef == creditDocumentRef))
  {
      Log.Checkpoint("Credits record has been display under Fiscal tab");
  }
  else
  {
      Log.Error("Credits record is not display under Fiscal tab");
  }
});

Then("I open Correct profile {arg}", function selectCorrectProfile (param1){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Ledger");
});

Then("I click on Apply button from payment details", function clickApplyBtn (){
  
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeCash.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeCash_Active_Button_Apply.Click(23, 6);
});


//copy to site


When("I navigate to Order Query page", function openOrderQuery (){
  //Delay(13000);
  
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Customer Services");
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton9.ClickButton();
});



When("I open the product to check the inventory sites", function  (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,"Title");
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  ultraTabControl.ClickTab("Inventory");

});

Then("I create new Inventory sites", function createNewInventorySite (){
  selectSiteAndLocation();
  selectVersion();
  selectSupplyStatus();
  clickSaveRecordAndCloseForm();
});

Then("I select Location {arg} for the Watford site", function selectLocation (location){
  let radGridViewSiteLocation = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridViewSiteLocation.DblClickCell(0, "Site");
  let inventorySiteLayout = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General;
  let ddDefaultLocation = inventorySiteLayout.PTInventorySites_Tabs_General_DefaultPickingLocationID.txtLink;
  ddDefaultLocation.Keys(location);
  ddDefaultLocation.Keys("[Tab]");
  clickSaveRecordAndCloseForm();
  
});


Then("Minimum One Inventory site should be present", function checkpointOneInventory (){
  let radGridViewInvnetorySite = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewInvnetorySite.RowCount;
  if(aqObject.CompareProperty(totalRows, cmpGreaterOrEqual ,1 , true,3))
  {
    Log.Checkpoint("Minimum One Inventory site has been display")
  }
  else{
    Log.Error("Zero Inventory site has been display");
  }
});

Then("I click on save record and close form button", function clickSaveAndCloseBtn (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists)
  {
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
});

Then("Edit backorder Icon should be display under Gridview", function checkpointEditIcon (){
  
  let radGridViewEditIcon = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_AllELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridViewEditIcon.HoverMouseCell(0, 3);
  let aptify_Shell = Aliases.Aptify_Shell;
  let toolTipNativeWindow = aptify_Shell.ToolTipNativeWindow;
  toolTipNativeWindow.WaitProperty("Visible", true, 6000)
  let editBackorder = Aliases.Aptify_Shell.ToolTipNativeWindow.wText;
  
  if(aqObject.CompareProperty(editBackorder, cmpEqual,"Edit Backorder", true,3))
  {
    Log.Checkpoint("Edit backorder icon has been display under gridView")
  }
  else
  {
    Log.Error("Edit backorder icon is not display");
  }
});

Then("I click the icon Transfer Product", function clickTransferProduct (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_AllELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 1);
});

Then("Both sites {arg} and {arg} should be offered in the dropdown", function checkpointSitesPresent (site1, site2){
  let ddSupplySiteTo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_SiteTransfer_SupplySiteIDTo.LookupSearchCombo;
  let val1 = ddSupplySiteTo.wItem(0);
  Log.Message(val1);
  let val2 = ddSupplySiteTo.wItem(1);
  Log.Message(val2)
  if(aqObject.CompareProperty(val2, cmpEqual,site1, true,3))
  {
    Log.Checkpoint("Site has been display")
  }
  else
  {
    Log.Error("Watford site is not display")
  }
  if(aqObject.CompareProperty(val1, cmpEqual,site2, true,3))
  {
    Log.Checkpoint("Site has been display")
  }
  else{
    Log.Error("Oxford site is not display")
  }
  
});

Then("I select newly created site from Supply Site To dropdown", function selectSupplySite (){
  let ddSupplySiteTo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_SiteTransfer_SupplySiteIDTo.LookupSearchCombo;
  ddSupplySiteTo.ClickItem(site);
});

Then("In the Transfer or Copy frame Product To link box should be display with correct value", function checkpointProductName (){
  let lnkProductTo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ProductVersionControl.advancedLinkBoxProducts.txtLink.Text.OleValue;
  if(aqObject.CompareProperty(lnkProductTo, cmpEqual,title, true,3))
  {
    Log.Checkpoint("Product Name has been display")
  }
  else{
    Log.Error("Product Name is not display")
  }
});

Then("Product Version link box should be disabled", function checkpointVersionLinkBox (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ProductVersionControl.lookupSearchBoxProductVersions.LookupSearchCombo, "Enabled", cmpEqual, false);
});

Then("Product Version link box should be display with correct value", function checkpointProductVersionLinkBox (){
  let lnkProductVersion = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ProductVersionControl.lookupSearchBoxProductVersions.LookupSearchCombo.Text.OleValue;
  if(aqObject.CompareProperty(lnkProductVersion, cmpEqual,version, true,3))
  {
    Log.Checkpoint("Version has been display")
  }
  else{
    Log.Error("Product Version is not display")
  }
});

Then("Supply Site To link box should be display with correct value", function checkpointSupplySite (){
  let ddSupplySiteTo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_SiteTransfer_SupplySiteIDTo.LookupSearchCombo.Text.OleValue;
  if(aqObject.CompareProperty(ddSupplySiteTo, cmpEqual,site, true,3))
  {
    Log.Checkpoint("Supply Site has been display")
  }
  else{
    Log.Error("Supply Site is not display")
  }
});

Then("Copy checkbox should be display", function checkpointCopyCheckbox (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_Copy.chkInternal, "WndCaption", cmpEqual, "Copy");
});

Then("There should be buttons for Apply and Cancel", function checkpointVerifyBtnPresent (){
  let formTemplateLayout = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer;
  aqObject.CheckProperty(formTemplateLayout.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ActiveButton_Apply, "Text", cmpEqual, "Apply");
  aqObject.CheckProperty(formTemplateLayout.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ActiveButton_Cancel, "Text", cmpEqual, "Cancel");
});

Then("I check the checkbox Copy", function checkCopyCheckbox (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_Copy.chkInternal.wState = cbChecked;
});

Then("Transfer or copy frame should be removed from grid", function (){
  throw new Error("Not implemented.");
});

Then("Backorder review grid should be updated", function checkpointReviewGridUpdated (){
  let radGridViewBackorderReview = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_AllELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let edit = radGridViewBackorderReview.HoverMouseCell(0, 3);
  
  if(aqObject.CompareProperty(edit, cmpEqual,EmptyVariant, true,3))
  {
    Log.Checkpoint("backorder review grid have been updated")
  }
  else{
    Log.Error("Backorder review grid not updated")
  }
});

Then("Delete icon should be replaced by the Undo icon", function verifyUndoIcon (){
  Delay(3000);
  let radGridViewDeleteIcon = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_AllELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridViewDeleteIcon.HoverMouseCell(0,8);
  let aptify_Shell = Aliases.Aptify_Shell;
  let toolTipNativeWindow = aptify_Shell.ToolTipNativeWindow;
  toolTipNativeWindow.WaitProperty("Visible", true, 6000)
  let Undo = Aliases.Aptify_Shell.ToolTipNativeWindow.wText;
  
  toolTipNativeWindow.WaitProperty("Visible", false, 6000)
  if(aqObject.CompareProperty(Undo, cmpEqual,"Undo", true,3))
  {
    Log.Checkpoint("Undo icon has been display under gridView")
  }
  else
  {
    Log.Error("Undo icon is not display");
  }
});

Then("I click on No in the message", function clickNoMsg (){
  let button = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne;
  button.ClickButton();
  button.ClickButton();
});

Then("I open the product to check the Inventory", function clickTabInventory (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,"Title")
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  ultraTabControl.ClickTab("Inventory");
});

When("I enter without prefix to create new product", function (){
  let anysize = 4;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomProductName="";
  for( let i=0; i < anysize; i++ ){
  randomProductName += charset[Math.floor(Math.random() * charset.length)];
  }
  
  let txtWithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner;
  txtWithoutPrefix.Click();
  txtWithoutPrefix.Keys(randomProductName);
  baseProduct = randomProductName
});

Then("I enter newly created product name On Order Id wizard", function (){
  let lnkProductName = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  lnkProductName.Keys(baseProduct);
  txtProduct = baseProduct;
  lnkProductName.Keys("[Tab]");
  
  let radGridViewProductOrderId = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  if(radGridViewProductOrderId.Exists)
  {
    radGridViewProductOrderId.DblClickCell(0, "Title");
    }
});

Then("I enter newly created product name on order query page", function (){
  let lnkProduct = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID.txtLink;
  lnkProduct.Keys(baseProduct);
  lnkProduct.Keys("[Tab]");
  let radGridViewSearchProductName = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewSearchProductName.Exists){
  radGridViewSearchProductName.DblClickCell(0, "Title");
  }
});

Then("I check the checkbox Close Panel After Search", function (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_ClosePanelAfterSearch.chkInternal.wState = cbChecked;
});

Then("I uncheck the checkbox from Order Query and close the same window", function (){
  let formTemplateForm = Aliases.Aptify_Shell.FormTemplateForm;
  formTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_ClosePanelAfterSearch.chkInternal.wState = cbUnchecked;
  formTemplateForm.Close();
});



function selectSiteAndLocation()
{
  let txtTitle = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Title.txtInner.Text.OleValue;
  title = txtTitle;
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(9, 21);
  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteID.LookupSearchCombo.ClickItem("Oxford");
  let ddLocation = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_DefaultPickingLocationID.txtLink;
  ddLocation.Keys("XX2F1");
}

function selectVersion()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_VersionLinkDescription.LookupSearchCombo.ClickItem("Main Market Edition");
}

function selectSupplyStatus()
{
  let ddSite = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteID.LookupSearchCombo.Text.OleValue;
  site = ddSite;
  let ddVersion = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_VersionLinkDescription.LookupSearchCombo.Text.OleValue;
  version = ddVersion;
  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteStatusID.LookupSearchCombo.ClickItem("Not Yet Published");
}

function clickSaveRecordAndCloseForm()
{
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
}

Then("I add Prices to the product", function addPrices (){
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  ultraTabControl.ClickTab("Prices");
  let formTemplateLayout = ultraTabControl.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices;
  let productActivePriceLayout = formTemplateLayout.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices;
  
  let ddCurrencyType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_CurrencyTypeID.LookupSearchCombo;
  ddCurrencyType.ClickItem("UK Sterling");
  ddCurrencyType.Keys("[Tab]");
  let txtPrice = productActivePriceLayout.PTProductPrices_ActivePrices_Price.txtInner;
  txtPrice.SetText("£10.00");
  productActivePriceLayout.PTProductPrices_ActivePrices_Active_Button_Add.Click();
  
});

Then("I click on Red colour Arrow", function clickRedArrowOrder (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.buttonImage.ClickButton();
});

Then("I navigate to Order Query page", function openOrderQueryWindow (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton12.ClickButton();

});

Then("I enter Product name {arg}", function enterProdName (productName){
  let lnkProduct = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID.txtLink;
  lnkProduct.Keys(productName);
  lnkProduct.Keys("[Tab]");
  let radGridViewSearchProductName = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewSearchProductName.Exists){
  radGridViewSearchProductName.DblClickCell(0, "Title");
  }
});

Then("I open the product to check the inventory sites", function selectTitle (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,"Title");
});

Then("Under Allocations section Confirmed backorder should be display for {arg} site", function verifyBackorderforSite (Site){
  let radGridViewAllocationSEction = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_2.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmSite = radGridViewAllocationSEction.wValue(0, "Site").OleValue;
  if(aqObject.CompareProperty(clmSite, cmpEqual,Site, true,3))
  {
    Log.Checkpoint("Watford Site has been display")
  }
  else{
    Log.Error("Site is not display")
  }
  aqObject.CheckProperty(radGridViewAllocationSEction, "wRowCount", cmpEqual, 1);
});

Then("Invoice Note should be display", function verifyInvoiceNote (){
  let radGridViewInvoiceNote = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmDocumentSource = radGridViewInvoiceNote.wValue(0, "Document Source").OleValue;
  
  if(aqObject.CompareProperty(clmDocumentSource, cmpEqual,"Order Invoice", true,3))
  {
    Log.Checkpoint("Invoice note has been display");
  }
  else
  {
    Log.Error("Invoice note is not display under documents window")
  }
});

Then("I open the Invoice note from documents window", function openInvoiceNote (){
  Delay(80000);
  let splitterPanel = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel;
  let radCommandBar = splitterPanel.radCommandBar1;
  radCommandBar.Click(91, 19);
  radCommandBar.Keys("[F5]");
  radCommandBar.Click(92, 21);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(66, 187);

});

Then("Physical Inventory should remain unchanged for Watford site", function verifyPhysicalInventory (){
  let radGridViewPhysicalInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmPhysical = radGridViewPhysicalInventory.wValue(0, "Physical").OleValue;
  if(aqObject.CompareProperty(clmPhysical, cmpEqual,inventorySite1,true,3))
  {
    Log.Checkpoint("Physical inventory remain unchanged for original site");
  }
  else{
    Log.Error("Physical inventory is changed for original site")
  }
});

Then("Under Allocations section Confirmed backorder should be display for {arg} site also", function verifyBackorderforOtherSite (Site){
  let radGridViewAllocationsSection = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_2.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmSite = radGridViewAllocationsSection.wValue(1, "Site").OleValue;
  if(aqObject.CompareProperty(clmSite, cmpEqual,Site, true,3))
  {
    Log.Checkpoint("Oxford Site has been display")
  }
  else{
    Log.Error("Site is not display")
  }
  aqObject.CheckProperty(radGridViewAllocationsSection, "wRowCount", cmpEqual, 2);
});

Then("I click on Add button from Order basket", function clickAddBtnOrderBasket (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
});

Then("I click on Inventory tab from information panel", function clickInventory (){
  let radGridViewInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  let clmWatfordPhysical = radGridViewInventory.wValue(0,"Physical").OleValue;
  inventorySite1 = clmWatfordPhysical;
  let clmOxfordPhysical = radGridViewInventory.wValue(0,"Physical").OleValue;
  inventorySite2 = clmOxfordPhysical;
});

Then("I select Backorders from Order Release dropdown", function selectBackorders (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(407, 11);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(69, 17);
});

Then("I click on Finish button from Backorder Wizard", function clickFinishBtn (){
  let wizardControl = Aliases.Aptify_Shell.GenericWizardForm.WizMain;
  wizardControl.btnFinish.ClickButton();
});

Then("I click on Apply button from backorder wizard", function  (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ActiveButton_Apply.Click();
});


Then("Cancel Icon should be display under GridView", function verifyCancelIcon (){
  let radGridViewCancelIcon = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_AllELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  Delay(3000);
  radGridViewCancelIcon.HoverMouseCell(0, 5);
  let toolTipNativeWindow = Aliases.Aptify_Shell.ToolTipNativeWindow;
  toolTipNativeWindow.WaitProperty("Visible", true, 6000)
  let Cancel = Aliases.Aptify_Shell.ToolTipNativeWindow.wText;
  
  toolTipNativeWindow.WaitProperty("Visible", false, 6000)
  if(aqObject.CompareProperty(Cancel, cmpEqual,"Cancel", true,3))
  {
    Log.Checkpoint("Cancel icon has been display under gridView")
  }
  else
  {
    Log.Error("Cancel icon is not display");
  }
});

Then("Remove row from selection Icon should be display under GridView", function verifyRemoveRowIcon (){
  Delay(3000);
  let radGridViewRemoveRowFromSelectionIcon = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_AllELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridViewRemoveRowFromSelectionIcon.HoverMouseCell(0, 7);
  let toolTipNativeWindow = Aliases.Aptify_Shell.ToolTipNativeWindow;
  
  let RemoveRow = Aliases.Aptify_Shell.ToolTipNativeWindow.wText;
  
  toolTipNativeWindow.WaitProperty("Visible", true, 6000)
  if(aqObject.CompareProperty(RemoveRow, cmpEqual,"Remove row from selection", true,3))
  {
    Log.Checkpoint("Undo icon has been display under gridView")
  }
  else
  {
    Log.Error("Undo icon is not display");
  }
});

Then("{arg} site should be offered in the dropdown", function verifySupplySite (supplySite){
  let lnkSupplySiteTo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_SiteTransfer_SupplySiteIDTo.LookupSearchCombo.Text.OleValue;
  if(aqObject.CompareProperty(lnkSupplySiteTo, cmpEqual,supplySite, true,3))
  {
    Log.Checkpoint("Site has been display")
  }
  else
  {
    Log.Error("Watford site is not display")
  }
});

//deleteFromcustomers



When("I click on Customers tab from Backorder wizard", function clickOnTabCustomers (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.ClickTab("Customers");
});

When("I click on Delete Icon from Customers tab", function clickDeleteIcon (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers_CustomerSummaryELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 2);
});

When("I click on Undo Icon from Customers tab", function clickUndoIcon (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers_CustomerSummaryELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 3);
});

When("I deselect all the backorder for product", function deselectBackorder (){
  let radGridViewDeselectBackorder = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_213.PTBackOrderWizard_Details.PTBackOrderWizard_Details_DetailsELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewDeselectBackorder.wRowCount;
  
  for(let i=0;i<totalRows;i++)
  {
    let clmTitle = radGridViewDeselectBackorder.wValue(i,"Title").OleValue;
    if(clmTitle != product)
    {
      radGridViewDeselectBackorder.ClickCell(i,0);
    }
  }
  
});

When("I search and select customer {arg}", function selectCustomer (customerName){
  let lnkCustomer = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_CustomerID.txtLink;
  lnkCustomer.Keys(customerName);
  lnkCustomer.Keys("[Tab]");
});

When("I enter Customer name {arg}", function (customerName){
  let lnkCustomerName = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  lnkCustomerName.Keys(customerName);
  lnkCustomerName.Keys("[Tab]");
});

When("I click On Add Symbol from Backorder wizard", function clickAddSymbol (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_AddCustomerToAdvancedSearch.buttonImage.ClickButton();
});

Then("The backordered figure should be reduced by the quantity of the Delete", function verifyBackorderValue (){
  let txtAvailableInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_PTUnboundTextBoxAvailableInventory.textBox1.Text.OleValue;
  
  if((txtAvailableInventory < balanceQty1)|| (txtAvailableInventory == 0))
  {
    
    Log.Checkpoint("Backordered figure has been reduced by the quantity of the Delete");
  }
  else{
    Log.Error("Backordered figure has been remain unchnaged");
  }
});

Then("I close the search criteria field", function closeSearchCriteria (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.Click(14, 9);
});

//deleteFromProducts



When("I click on All tab", function clickAllTab (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.ClickTab("All");
});

When("I click on Products tab from backorder wizard", function clickProductsTab (){
  let ultraTabControl = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain;
  ultraTabControl.ClickTab("Products");
});

When("I click on Delete Icon", function clickDeleteIconBackorder (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products_ProductSummaryELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 2);
});

When("I click on Undo Icon", function clickUndoIconBackorder (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products_ProductSummaryELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 3);
});

When("I click on No from popup message", function clickNo (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

When("I click on Yes from popup message", function clickYes (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});

When("I enter Reference from documents window", function enterReferenceSearchCriteria (){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  txtReference.SetText(documentRef);
  txtReference.Keys("[Tab]");
});

When("I click on Refresh button from the action list icon in the documents window", function clickRefresh (){
  Delay(80000);
  let radCommandBar = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1;
  radCommandBar.Click(89, 13);
  let radDropDownMenu = Aliases.Aptify_Shell.RadDropDownMenu;
  radDropDownMenu.Click(78, 187);
});

Then("order should be display under order Query page", function verifyOrder (){
  let radGridViewOrderQueryPage = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridViewOrderQueryPage.ClickCell(0, "Bill To Identifier");
  let clmTitle = radGridViewOrderQueryPage.wValue(0, "Title").OleValue;
  
  if(clmTitle == product)
  {
    Log.Checkpoint("Same Product Name is display");
  }
  else{
    Log.Error("Product Names are different");
  }
  
});

When("I click on Finish button from backorder wizard", function clickFinishbtn (){
  var wizardControl = Aliases.Aptify_Shell.GenericWizardForm.WizMain;
  wizardControl.btnFinish.ClickButton();
  
});


/*
function enterProduct(searchProduct)
{
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radGridViewProduct = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let panel = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch;
  panel.quickSearchText.Click();
  panel.Keys(searchProduct);
  product=searchProduct
  splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  if(radGridViewProduct.Exists)
  {
    radGridViewProduct.DblClickCell(0, "Title");
  }
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
}
*/
When("I click on No in the message", function clickNoMsgfromPanel (){
  let button = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne;
  button.ClickButton();
  button.ClickButton();
});

/*
Then("I open product record for {arg}", function (product){
   clickFindProduct();
   enterProduct(product);
   //clickOverviewtab();
});

*/

Then("The Backordered figure should be reduced by the quantity of the Delete", function (){
   let radGridViewDeleteQty = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_2.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
   let backorderQty1 = radGridViewDeleteQty.wValue(0, "Balance Qty").OleValue;
  if(aqObject.CompareProperty(backorderQty1, cmpLess,balanceQty1, true,3))
  {
    Log.Checkpoint("Backordered figure has been reduced by the quantity of the Delete");
  }
  else{
    Log.Error("Backordered figure has been remain unchnaged");
  }
  
  
  
});
//orderswithOverLimit

When("I enter P\\/o Reference {arg}", function enterReferenceOrderBasket (Reference){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSearch_CustomerLineRef.txtInner;
  txtReference.Keys(Reference);
  txtReference.Keys("[Tab]");
});

When("I click on Add Item", function (){
  let btnAdd = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
  if(Aliases.Aptify_Shell.dlg.Exists)
  {
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
  }
});

When("I Click on Orders", function clickOrders (){
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Orders");
});

When("I click on Billing Wave Release button", function clickBillingWaveReleaseBtn (){
  let button = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_BillingWaveRelease.buttonImage;
  button.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

When("I click on Find Order from Customer services tab", function openOrderQueryCS (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton12.ClickButton();
 
});

When("I enter Customer Name {arg}", function enterCustomerOrderQuery (customerName){
  let lnkcustomerName = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  lnkcustomerName.Click();
  lnkcustomerName.Keys(customerName);
  lnkcustomerName.Keys("[Tab]");
  //txtCustomerName = customerName;
});

When("I click on Search button", function clickBtnSearch (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
});


Then("Order Status should be display {arg}", function verifyOrderStatusDisplayed (orderStatus){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, "Bill To Identifier");
  let txtOrderStatus = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderStatus.txtInner.Text.OleValue;
  if(aqObject.CompareProperty(txtOrderStatus, cmpEqual,orderStatus, true,3))
  {
    Log.Checkpoint("Correct Order Status display")
  }
  else{
    Log.Error("Order status is incorrect");
  }
  
});

Then("I click on Transactions tab", function clickTabTransactions()
{
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.ClickTab("Transactions");
});

Then("Under Transactions tab Line Item status should be display as {arg}", function (lineItemStatus){
  let radGridViewLineItemStatus = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  let clmLineItemStatus = radGridViewLineItemStatus.wValue(0, "Line Item Status").OleValue;
  if(aqObject.CompareProperty(clmLineItemStatus, cmpEqual,lineItemStatus, true,3))
  {
    Log.Checkpoint("correct status displays under Column Line Item Status")
  }
  else{
    Log.Error("Incorrect status displays under Column Line Item Status")
  }
});

Then("I click on New Order from folder list", function clickNewOrder (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton8.ClickButton();
});

Then("I enter Company Name in Ship To {arg}", function enterCompanyName (customerName){
  let lnkShipTo = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_ShipToRoleID.txtLink;
  lnkShipTo.Keys(customerName);
  lnkShipTo.Keys("[Tab]");
  let radGridViewLnkShipTo = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewLnkShipTo.Exists)
  {
    radGridViewLnkShipTo.DblClickCell(0, "Name");
  }
});

Then("I click on Red colour right arrow icon", function clickRedArrowOrderBasket (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.buttonImage.ClickButton();
});

Then("I select Zero Price Product {arg}", function enterZeroPriceProduct (zeroPriceProduct){
  let lnkProductName = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  lnkProductName.Keys(zeroPriceProduct);
  lnkProductName.Keys("[Tab]");
  product = zeroPriceProduct
  let radGridViewProductOrderId = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  if(radGridViewProductOrderId.Exists)
  {
  let countRows = radGridViewProductOrderId.wRowCount;
  for(let i=0;i<countRows;i++)
  {
  if(zeroPriceProduct == radGridViewProductOrderId.wValue(i, "Title").OleValue)
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(i, "Title");
    break;
  }
  }
  }
  
});

Then("I enter P\\/o Reference {arg}", function (Reference){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSearch_CustomerLineRef.txtInner;
  txtReference.Keys(Reference);
  txtReference.Keys("[Tab]");
});

Then("I enter Order Type {arg}", function selectOrderTypeOrderBasket (orderType){
  let ddOrderType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderTypeID.LookupSearchCombo
  ddOrderType.ClickItem(orderType);
});

Then("I select Gratis Product {arg}", function enterGratisProduct (gratisProduct){
 let lnkProductName = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  lnkProductName.Keys(gratisProduct);
  lnkProductName.Keys("[Tab]");
  product = gratisProduct
  let radGridViewProductOrderId = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  if(radGridViewProductOrderId.Exists)
  {
  let countRows = radGridViewProductOrderId.wRowCount;
  for(let i=0;i<countRows;i++)
  {
  if(gratisProduct == radGridViewProductOrderId.wValue(i, "Title").OleValue)
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(i, "Title");
    break;
  }
  }
  }
});

Then("I click on the link to the Invoice", function openInvoice (){
  
  let radGridViewlnkInvoice = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let DocumentReference = radGridViewlnkInvoice.wValue(0, 2).OleValue;
  
  //var sFolder = "C:\\Project\\IngentaCommercialApplication\\IngentaCommApp\\Invoice\\"
  var sFile = sFolder + DocumentReference
 aqFileSystem.CreateFolder(sFile);
   
  radGridViewlnkInvoice.DblClickCell(0, 2);
  Delay(7000);
  var referenceInvoice = Sys.Desktop.Picture();
  referenceInvoice.SaveToFile(sFile + "\\" + "FirstPage.jpg");
   
  Sys.Keys("[PageDown]");
   
  referenceInvoice.SaveToFile(sFile + "\\" + "SecondPage.jpg");


});

Then("I click on the link to the Advice Note", function openAdviceNote (){
  //Delay(60000);
  let radGridViewlinkAdvice = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let DocumentReference = radGridViewlinkAdvice.wValue(0, 2).OleValue;
  
  //var sFolder = "C:\\Project\\IngentaCommercialApplication\\IngentaCommApp\\Invoice\\"
  var sFile = sFolder + DocumentReference
  aqFileSystem.CreateFolder(sFile);
   
  radGridViewlinkAdvice.DblClickCell(0, 2);
  Delay(7000);
  var referenceInvoice = Sys.Desktop.Picture();
  referenceInvoice.SaveToFile(sFile + "\\" + "FirstPage.jpg");
   
  Sys.Keys("[PageDown]");
   
   referenceInvoice.SaveToFile(sFile + "\\" + "SecondPage.jpg");


});

Then("I close Order Query page", function closeRecord (){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});

Then("I click on Refresh button from transactions tab", function clickRefreshFromTransactionsTab  (){
  Delay(50000);
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(172, 19);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(65, 155);
});

//ordersWithStop

When("I click on Order Attributes tab", function clickOrderAttributesOrderBasket (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.ClickTab("Order Attributes");
});

When("I click on Red colour right arrow icon", function clickRedArrowOrders (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.buttonImage.ClickButton();
});

When("I select book-Paperback product {arg}", function selectBookPaperbackProduct (paperbackProduct){
  let lnkProductName = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  lnkProductName.Keys(paperbackProduct);
  lnkProductName.Keys("[Tab]");
  product = paperbackProduct
  let radGridViewProductOrderId = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  if(radGridViewProductOrderId.Exists)
  {
  let countRows = radGridViewProductOrderId.wRowCount;
  for(let i=0;i<countRows;i++)
  {
  if(paperbackProduct == radGridViewProductOrderId.wValue(i, "Title").OleValue)
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(i, "Title");
    break;
  }
  }
  }
  
});

Then("I close the Order basket", function (){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});

Then("Pop-up message should be displayed as {arg}", function VerifyPopupMsg (popupMsg){
  let txtMsg = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage.Text.OleValue;
  if(aqObject.CompareProperty(txtMsg, cmpEqual,popupMsg, true,3))
  {
    Log.Checkpoint("Correct Popup Message has been display")
  }
  else{
    Log.Error("Incorrect popup message has been display")
  }
});

Then("I click on Ok button from popup", function clickOKBtn (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

//proforma







Then("I enter default P\\/O ref", function enterDefaultReference (){
  PORefInt = Project.Variables.POInt
  PORef = aqString.Concat("AUT", PORefInt)
  Project.Variables.POInt = Project.Variables.POInt+1
  Project.Variables.PORef = PORef
  
   txtDefaultRef = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_CustomerReference.txtInner;
  txtDefaultRef.Keys(Project.Variables.PORef);
  Reference = Project.Variables.PORef;
});

Then("I click on Apply button", function clickBtnApply (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_Order_Active_Button_ApplyPORef.Click();
});

Then("Pages should be close", function verifyPageClose (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_Group_Box_1.MainGroupBox, "WndCaption", cmpEqual, "Please Select a Product");
});

Then("The P\\/O Reference should be display", function verifyReference (){
  let splitContainer = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter;
  let txtRef = splitContainer.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSearch_CustomerLineRef.txtInner.Text.OleValue;
  if(aqObject.CompareProperty(txtRef, cmpEqual,Reference, true,3))
  {
  Log.Checkpoint("Default Reference has been same");
  }else{
  Log.Error("Default Reference has been different");
  }
  
});
var products = [];
products.push("Rave Rocket  and the Red Balloon","RAVE NYP No Stock","RAVE NYP With Stock","RAVE Closed With Stock","RAVE Closed No Stock","RAVE TOS Closed No Stock","RAVE OP Open With Stock","RAVE OP Closed With Stock");

When("I open all the products to verify details", function (){
  clickFindProduct();
  openPaperbackProduct();
  checkIdentifierBooksType();
  checkListPricesBooksType();
  checkSubTypeForPaperBack();
  checkCheckboxCurrentlySold();
  clickDetailsTab();
  checkAnswerCode();
  retrieveProductInformation();
  clickInventoryTab();
  checkInventorySites();
  checkCheckboxAllowBackorders
  checkInventorySupplyStatus();
  checkAvailableInventory();
  clickSaveRecordAndCloseForm();
  
  clickFindProduct();
  openNYPNoStockProduct();
  checkIdentifierBooksType();
  checkListPricesBooksType();
  checkCheckboxCurrentlySold();
  clickDetailsTab();
  checkAnswerCodeNYP();
  clickInventoryTab();
  checkCheckboxAllowBackorders();
  checkInventorySites();
  checkSupplyStatusNyp();
  clickSaveRecordAndCloseForm();
  
  clickFindProduct();
  openNYPWithStockProduct();
  checkIdentifierBooksType();
  checkListPricesBooksType();
  checkCheckboxCurrentlySold();
  clickDetailsTab();
  checkAnswerCodeNYP();
  clickInventoryTab();
  checkCheckboxAllowBackorders();
  checkInventorySites();
  checkSupplyStatusNyp();
  checkAvailableStock();
  clickSaveRecordAndCloseForm();
  
  clickFindProduct();
  openClosedWithStockProduct();
  checkIdentifierBooksType();
  checkListPricesBooksType();
  checkCheckboxCurrentlySold();
  clickDetailsTab();
  checkAnswerCode();
  clickInventoryTab();
  checkCheckboxAllowBackorders();
  checkInventorySites();
  checkSupplyStatusClosed()
  checkAvailableStock();
  clickSaveRecordAndCloseForm();
  
  clickFindProduct();
  openClosedNoStockProduct();
  checkIdentifierBooksType();
  checkListPricesBooksType();
  checkCheckboxCurrentlySold();
  clickDetailsTab();
  checkAnswerCodeOP();
  clickInventoryTab();
  checkCheckboxAllowBackorders();
  checkInventorySites();
  checkSupplyStatusClosed()
  clickSaveRecordAndCloseForm();
  
  clickFindProduct();
  openTOSClosedProduct();
  checkIdentifierBooksType();
  checkListPricesBooksType();
  checkCheckboxCurrentlySold();
  clickDetailsTab();
  checkAnswerCode();
  clickInventoryTab();
  checkCheckboxAllowBackorders();
  checkInventorySites();
  checkSupplyStatusClosed()
  clickSaveRecordAndCloseForm();
  
  clickFindProduct();
  openOPOpenProduct();
  checkIdentifierBooksType();
  checkListPricesBooksType();
  checkCheckboxCurrentlySold();
  clickDetailsTab();
  checkAnswerCodeOP();
  clickInventoryTab();
  checkCheckboxAllowBackorders();
  checkInventorySites();
  checkAvailableStock();
  checkInventorySupplyStatus();
  clickSaveRecordAndCloseForm();
  
  clickFindProduct();
  openOPClosedProduct();
  checkIdentifierBooksType();
  checkListPricesBooksType();
  checkCheckboxCurrentlySold();
  clickDetailsTab()
  checkAnswerCodeOP();
  clickInventoryTab();
  checkCheckboxAllowBackorders();
  checkInventorySites();
  checkAvailableStock();
  checkSupplyStatusClosed();
  clickSaveRecordAndCloseForm();
});



Then("I add products in order basket", function addMultipleProducts (){
  
   
  enterPaperbackProduct();
  
  clickAddBtn();
  enterNYPNoStockProduct();
  
  clickAddBtn();
  enterNYPWithStockProduct();
  
  clickAddBtn();
  enterClosedWithStockProduct();
  
  clickAddBtn();
  enterClosedNoStockProduct();
  
  clickAddBtn();
  enterTOSClosedProduct();
  
  clickAddBtn();
  enterOPOpenProduct();
  
  clickAddBtn();
  enterOPClosedProduct();
  
  clickAddBtn();
});

function enterPaperbackProduct()
{ 
  let radGridViewPaperBack = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys(products[0]);
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys("[Enter]");
  if(radGridViewPaperBack.Exists)
  {
    radGridViewPaperBack.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory1 = txtInventory;
}

function clickAddBtn()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
  if(Aliases.Aptify_Shell.dlg.Exists)
  {
  Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
  }
  
}

function enterNYPNoStockProduct()
{
  let radGridViewNypNoStock = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys(products[1]);
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys("[Enter]");
  if(radGridViewNypNoStock.Exists)
  {
    radGridViewNypNoStock.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory2 = txtInventory;
}
function enterNYPWithStockProduct()
{
  let radGridViewNypWithStock = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys(products[2]);
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys("[Enter]");
  if(radGridViewNypWithStock.Exists)
  {
    radGridViewNypWithStock.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory3 = txtInventory;
}
function enterClosedWithStockProduct()
{
  let radGridViewClosedWithStock = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys(products[3]);
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys("[Enter]");
  if(radGridViewClosedWithStock.Exists)
  {
    radGridViewClosedWithStock.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory4 = txtInventory;
}
function enterClosedNoStockProduct()
{
  let radGridViewClosedNoStock = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys(products[4]);
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys("[Enter]");
  if(radGridViewClosedNoStock.Exists)
  {
    radGridViewClosedNoStock.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory5 = txtInventory;
}
function enterTOSClosedProduct()
{
  let radGridViewTosClosed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys(products[5]);
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys("[Enter]");
  if(radGridViewTosClosed.Exists)
  {
    radGridViewTosClosed.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory6 = txtInventory;
}
function enterOPOpenProduct()
{
  let radGridViewOpOpen = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys(products[6]);
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys("[Enter]");
  if(radGridViewOpOpen.Exists)
  {
    radGridViewOpOpen.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory7 = txtInventory;
}
function enterOPClosedProduct()
{
  let radGridViewOpClosed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys(products[7]);
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink.Keys("[Enter]");
  if(radGridViewOpClosed.Exists)
  {
    radGridViewOpClosed.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory8 = txtInventory;
}


Then("The products should be display in the order basket", function verifyProductsUnderOrderBasket (){
  let radGridViewProductOrderBasket = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewProductOrderBasket.wRowCount;
  if(aqObject.CompareProperty(totalRows, cmpEqual,8, true,3))
  {
    Log.Checkpoint("Products has been display in the order basket")
  }
  else
  {
    Log.Error("Products is not display")
  }
});

Then("Our order should not be display under Ledger tab", function verifyOrderNotDisplayUnderLedger (){
  let radGridViewOrderLedgerTab = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCount = radGridViewOrderLedgerTab.wRowCount;
  for(let i=0;i<rowCount;i++)
  {
    let clmDocumentRef = radGridViewOrderLedgerTab.wValue(i, "Document Reference").OleValue;
    if(aqObject.CompareProperty(clmDocumentRef, cmpNotEqual,documentReference, true,3))
  {
    Log.Checkpoint("Order has been not display under ledger tab")
  }
  else
  {
   Log.Error("Order has been display under ledger tab")
  }
  }
 
});

Then("Order Type should be Proforma", function verifyOrderType (){
  let radGridViewOrderType = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let totalRows = radGridViewOrderType.wRowCount;
  
  for(i=0;i<totalRows;i++)
  {
  let txtOrderType = radGridViewOrderType.wValue(i, "Order Type").OleValue;
  if(aqObject.CompareProperty("Proforma", cmpEqual,txtOrderType, true,3))
  {
    Log.Checkpoint("Order Type displays Proforma")
  }
  else{
    Log.Error("Order Type is not Proforma")
    }
  }
  
});

Then("I search for order with the help of document reference in the Order Query page", function searchOrder (){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  txtReference.SetText(documentRef);
});

Then("I select Order Process Type {arg}", function selectOrderProcessTypeOrderBasket (orderProcessType){
  let ddOrderProcessType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderProcessTypeID.LookupSearchCombo;
  ddOrderProcessType.ClickItem(orderProcessType);
});

Then("values should be correctly display in the supply and totals column", function verifySupplyAndTotalsClm (){
  
  let txtNetValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_NetValue.txtInner.Text.OleValue;
  let txtTotalNetValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_TotalNetValue.textBox1.Text.OleValue;
  
  if(aqObject.CompareProperty(txtNetValue, cmpEqual,totalSupplyValue, true,3))
  {
    Log.Checkpoint("Correct Net value has been display on checkout page")
  }
  else{
    Log.Error("Incorrect Net value has been display on checkout page")
    }
    
  if(aqObject.CompareProperty(txtTotalNetValue, cmpEqual,totalSupplyValue, true,3))
  {
    Log.Checkpoint("Correct Total Net value has been display on checkout page")
  }
  else{
    Log.Error("Incorrect Total Net value has been display on checkout page")
    }
  let clmTotalOrderValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_Total.textBox1.Text.OleValue;
  totalOrderValue = clmTotalOrderValue;
  
});

Then("All the orders from order basket should be display as Supplied", function verifyStatusofOrder (){
  
  let radGridViewSuppliedIcon = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewSuppliedIcon.wRowCount;
  for(let i=0;i<totalRows;i++)
  {
    radGridViewSuppliedIcon.HoverMouseCell(i, 10);
    let aptify_Shell = Aliases.Aptify_Shell;
    let toolTipNativeWindow = aptify_Shell.ToolTipNativeWindow;
    toolTipNativeWindow.WaitProperty("Visible", true, 6000)
    let order1 = Aliases.Aptify_Shell.ToolTipNativeWindow.wText;
    let suppliedQty = productOrderQty + "Supplied"
    
    if(aqString.Find(order1,suppliedQty))
    {
    Log.Checkpoint("Order displays as supplied")
    }
    else
    {
    Log.Error("Order is not displays as supplied")
    }
    
    }
  let TotalValue = 0;
  for(let i=0;i<totalRows;i++)
  {
    let value1 = radGridViewSuppliedIcon.wValue(i,"Supply Value").OleValue;
    TotalValue = TotalValue + value1;
    totalSupplyValue = TotalValue;
  }
});

Then("Inventory should remain unchanged for all products in order basket", function verifyInventoryOfMultipleProducts (){
  clickFindProduct();
  openPaperbackProduct();
  clickInventoryTab();
  checkpointInventoryPaperBack();
  clickSaveRecordAndCloseForm();
  
  clickFindProduct();
  openNYPNoStockProduct();
  clickInventoryTab();
  checkpointInventoryNYPNoStockProduct();
  clickSaveRecordAndCloseForm();
  
  clickFindProduct();
  openNYPWithStockProduct();
  clickInventoryTab();
  checkpointInventoryNYPWithStockProduct();
  clickSaveRecordAndCloseForm();
  
  clickFindProduct();
  openClosedWithStockProduct();
  clickInventoryTab();
  checkpointInventoryClosedWithStockProduct();
  clickSaveRecordAndCloseForm();
  
  clickFindProduct();
  openClosedNoStockProduct();
  clickInventoryTab();
  checkpointInventoryClosedNoStockProduct();
  clickSaveRecordAndCloseForm();
  
  clickFindProduct();
  openTOSClosedProduct();
  clickInventoryTab();
  checkpointInventoryTOSClosedProduct();
  clickSaveRecordAndCloseForm();
  
  clickFindProduct();
  openOPOpenProduct();
  clickInventoryTab();
  checkpointInventoryOPOpenProduct();
  clickSaveRecordAndCloseForm();
  
  clickFindProduct();
  openOPClosedProduct();
  clickInventoryTab();
  checkpointInventoryOPClosedProduct();
  clickSaveRecordAndCloseForm();

});

function openPaperbackProduct()
{
  
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radGridViewPaperbackProduct = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let panel = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch;
  panel.quickSearchText.Click();
  panel.Keys(products[0]);
  splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  if(radGridViewPaperbackProduct.Exists)
  {
    radGridViewPaperbackProduct.DblClickCell(0, "Title");
  }
}

function openNYPNoStockProduct()
{
  
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radGridViewNypNoStock = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let panel = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch;
  panel.quickSearchText.Click();
  panel.Keys(products[1]);
  splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  if(radGridViewNypNoStock.Exists)
  {
    radGridViewNypNoStock.DblClickCell(0, "Title");
  }
}
function openNYPWithStockProduct()
{
  
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radGridViewNypWithStock = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let panel = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch;
  panel.quickSearchText.Click();
  panel.Keys(products[2]);
  splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  if(radGridViewNypWithStock.Exists)
  {
    radGridViewNypWithStock.DblClickCell(0, "Title");
  }
}
function openClosedWithStockProduct()
{
  
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radGridViewClosedWithStock = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let panel = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch;
  panel.quickSearchText.Click();
  panel.Keys(products[3]);
  splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  if(radGridViewClosedWithStock.Exists)
  {
    radGridViewClosedWithStock.DblClickCell(0, "Title");
  }
}
function openClosedNoStockProduct()
{
  
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radGridViewClosedNoStock = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let panel = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch;
  panel.quickSearchText.Click();
  panel.Keys(products[4]);
  splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  if(radGridViewClosedNoStock.Exists)
  {
    radGridViewClosedNoStock.DblClickCell(0, "Title");
  }
}

function openTOSClosedProduct()
{
  
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radGridViewTosClosedProduct = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let panel = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch;
  panel.quickSearchText.Click();
  panel.Keys(products[5]);
  splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  if(radGridViewTosClosedProduct.Exists)
  {
    radGridViewTosClosedProduct.DblClickCell(0, "Title");
  }
}

function openOPOpenProduct()
{
  
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radGridViewOPOpenProduct = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let panel = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch;
  panel.quickSearchText.Click();
  panel.Keys(products[6]);
  splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  if(radGridViewOPOpenProduct.Exists)
  {
    radGridViewOPOpenProduct.DblClickCell(0, "Title");
  }
}

function openOPClosedProduct()
{
  
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radGridViewOPClosedProduct = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let panel = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch;
  panel.quickSearchText.Click();
  panel.Keys(products[7]);
  splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  if(radGridViewOPClosedProduct.Exists)
  {
    radGridViewOPClosedProduct.DblClickCell(0, "Title");
  }
  
}

function checkpointInventoryPaperBack()
{
  let radGridViewPaperBackInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailable = radGridViewPaperBackInventory.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(clmAvailable, cmpEqual,productInventory1, true,3))
  {
    Log.Checkpoint("Inventory should remain unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}

function checkpointInventoryNYPNoStockProduct()
{
  let radGridViewNypNoStockInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailable = radGridViewNypNoStockInventory.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(clmAvailable, cmpEqual,productInventory2, true,3))
  {
    Log.Checkpoint("Inventory should remain unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}

function checkpointInventoryNYPWithStockProduct()
{
  let radGridViewNypWithStockInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailable = radGridViewNypWithStockInventory.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(clmAvailable, cmpEqual,productInventory3, true,3))
  {
    Log.Checkpoint("Inventory should remain unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}

function checkpointInventoryClosedWithStockProduct()
{
  let radGridViewClosedWithStockInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailable = radGridViewClosedWithStockInventory.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(clmAvailable, cmpEqual,productInventory4, true,3))
  {
    Log.Checkpoint("Inventory should remain unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}

function checkpointInventoryClosedNoStockProduct()
{
  let radGridViewClosedNoStockInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailable = radGridViewClosedNoStockInventory.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(clmAvailable, cmpEqual,productInventory5, true,3))
  {
    Log.Checkpoint("Inventory should remain unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}

function checkpointInventoryTOSClosedProduct()
{
  let radGridViewTosClosedProductInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailable = radGridViewTosClosedProductInventory.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(clmAvailable, cmpEqual,productInventory6, true,3))
  {
    Log.Checkpoint("Inventory should remain unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}

function checkpointInventoryOPOpenProduct()
{
  let radGridViewOPOpenProductInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailable = radGridViewOPOpenProductInventory.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(clmAvailable, cmpEqual,productInventory7, true,3))
  {
    Log.Checkpoint("Inventory should remain unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}

function checkpointInventoryOPClosedProduct()
{
  let radGridViewOPClosedProductInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailable = radGridViewOPClosedProductInventory.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(clmAvailable, cmpEqual,productInventory8, true,3))
  {
    Log.Checkpoint("Inventory should remain unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}

function clickOnFindProduct()
{ 
  if(Aliases.Aptify_Shell.SearchForm.Exists)
   {
     Aliases.Aptify_Shell.SearchForm.Close();
   }
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea1.DockableWindow1.aptifyTree.tvwMain.ClickItem("advance> Home|Customer Services");
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  
}

function clickFindProductButton(){
  if(Aliases.Aptify_Shell.SearchForm.Exists)
   {
     Aliases.Aptify_Shell.SearchForm.Close();
   }  
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();   
}
function clickSaveRecordAndClose()
{
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists)
  {
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
}

Then("I edit the Order Qty for all the products in the input field Quantity {arg}", function editOrderQty (orderQty){
  
  let radGridViewEditOrderQty = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let productSelectionLayout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection;
  let totalRows = radGridViewEditOrderQty.wRowCount;
  let i;
  for(i=0;i<totalRows;i++)
  {
  radGridViewEditOrderQty.ClickCell(i, 0);
  let txtOrderQty = productSelectionLayout.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  txtOrderQty.Keys(orderQty);
  productOrderQty = orderQty;
  checkpointDisplayFrames();
  productSelectionLayout.PTOrders_ProductSelection_AddOrderItem.Click();
  }
});

function checkpointDisplayFrames()
{
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Valuation, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Configure, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_SupplyStatus, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Net, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Backorder, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Held, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Totals, "Visible", cmpEqual, true);
}

Then("I close the Records", function closeRecords (){
  clickSaveRecordAndCloseForm();
  clickSaveRecordAndCloseForm();
});



Then("I click on Refresh button from the action list icon in the window documents", function (){
  
  Delay(80000);
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(71, 15);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(43, 180);
  let radGridViewDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  clmDocumentRef = radGridViewDocuments.wValue(0, "Document Reference").OleValue;
  documentReference = clmDocumentRef;
});

//proformaPayment


When("I click on Find Order to open Order Query window", function clickFindOrder (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton12.ClickButton();
  });

When("I select Customer Name {arg}", function selectCustomerName (customerName){
  let txtCustomerName = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  txtCustomerName.Keys(customerName);
  txtCustomerName.Keys("[Tab]");
  companyName = customerName
});

When("I select Order Process Type from Order Query window {arg}", function selectOrderProcessTypeOrderSearch (orderProcessType){
  //Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_OrderProcessType.ucCombo.ClickItem(orderProcessType);
  //let ddOrderProcessType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderProcessTypeID;
 // ddOrderProcessType.ClickItem(orderProcessType);
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_OrderProcessType.ucCombo.ClickItem(orderProcessType);
  
});



When("I click on Order Actions", function clickOrderActions (){
  let radGridViewOrderActions = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewOrderActions.wRowCount;
  let currentRow = 0;
  for(let i=0;i<totalRows;i++)
  {
    let clmOrderStatus = radGridViewOrderActions.wValue(i,"Order Status").OleValue;
    radGridViewOrderActions.ClickCell(i, "Bill To Identifier");
    if(currentRow == 0 && clmOrderStatus == "Completed Order")
    {
    //var aptify_Shell = Aliases.Aptify_Shell;
    Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(311, 13);
    Aliases.Aptify_Shell.RadDropDownMenu.Click(48, 10);
    currentRow = i;
    break;
    }
    
  }
});


Then("Popup window should be named as {arg}", function verifyPopupWindowName (param1){
  aqObject.CheckProperty(Aliases.Aptify_Shell.WinFormsObject("OrderAmendAddressBookLayout", "Order Amend"), "WndCaption", cmpEqual, "Order Amend");
});

Then("Change from Proforma to Invoice checkbox Should be checked", function verifyCheckbox (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.OrderAmendAddressBookLayout.PTOrders_OrderAmendAddressBook.PTOrders_OrderAmend_ConvertProformaToInvoice.checkBox1, "Checked", cmpEqual, true);
  
});

Then("ShipTo, BillTo and End user fields should be duly filled", function verifyFields (){
  let formTemplateLayout = Aliases.Aptify_Shell.OrderAmendAddressBookLayout.PTOrders_OrderAmendAddressBook;
  let lnkShipTo = formTemplateLayout.PTOrders_Amend_ShipToRoleID.txtLink.Text.OleValue;
  let lnkBillTo = formTemplateLayout.PTOrders_Amend_BillToRoleID.txtLink.Text.OleValue;
  let lnkEndUser = formTemplateLayout.PTOrders_Amend_LicenseeRoleID.txtLink.Text.OleValue;
  
  if(aqObject.CompareProperty(lnkShipTo, cmpEqual,companyName, true,3))
  {
    Log.Checkpoint("Ship To field has been filled with customer Name")
  }
  else{
    Log.Error("Ship To field is empty ")
  }
  
  if(aqObject.CompareProperty(lnkBillTo, cmpEqual,companyName, true,3))
  {
    Log.Checkpoint("Bill To field has been filled with customer Name")
  }
  else{
    Log.Error("Bill To field is empty from order Amend window")
  }
  
  if(aqObject.CompareProperty(lnkEndUser, cmpEqual,companyName, true,3))
  {
    Log.Checkpoint("End User field has been filled with customer Name")
  }
  else{
    Log.Error("End User field is empty from order Amend window")
  }
});

Then("I click on OK button from order Amend window", function clickOKBtnfromOrderAmendWindow (){
  Aliases.Aptify_Shell.OrderAmendAddressBookLayout.PTOrders_OrderAmendAddressBook.PTOrders_OrderAmendAddressBook_Active_Button_OK.Click();
});

Then("I click on Refresh button from popup window until the record is displayed", function clickRefreshFromPopup (){
    Delay(5000);
    let button = Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage;
    button.ClickButton();
    
});

Then("Popup window name should be displayed as {arg}", function verifyPopupName (param1){
  //aqObject.CheckProperty(Aliases.Aptify_Shell.MessageGrid, "wText", cmpEqual, "My pending baskets");
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessageGrid, "WndCaption", cmpEqual, "My pending baskets");
});

Then("Open Basket button should be enabled once row should be populated", function verifyEnabledProperty (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessageGrid.Button1, "Enabled", cmpEqual, true);
});

Then("I click on Open Basket button from My Open Basket window", function clickOpenBasketBtn (){
  Aliases.Aptify_Shell.MessageGrid.Button1.ClickButton();
});

Then("I click on left side blue colour arrow", function clickBlueArrow (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();
});

Then("I select Payment mode {arg}", function selectPaymentMode (paymentMode){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeID.LookupSearchCombo.ClickItem(paymentMode);
  
});

Then("I enter Cheque number {arg}", function enterChequeNum(chequeNumber){
  let txtChequeNumber = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_ChequeNumber.txtInner;
  txtChequeNumber.Keys(chequeNumber);
  let txtTotalValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_NetValue.txtInner.Text.OleValue;
  value = txtTotalValue;
  
});

Then("I select bank {arg}", function selectBank(clientBank){
  let splitContainer = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter;
  splitContainer.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_ClientBank.LookupSearchCombo.ClickItem(clientBank);
});

Then("I close My Open Basket window", function closeMyOpenBasketWindow (){
  Aliases.Aptify_Shell.MessageGrid.Close();
});

Then("I close Order Query window", function closeOrderQueryWindow (){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});



Then("I click on Find Order to open Order Query window", function clickFindOrderFromOrders (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
});

Then("I select Customer Name {arg}", function enterCustomerNameCS (customerName){
  let lnkCustomerName = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  lnkCustomerName.Keys(customerName);
  lnkCustomerName.Keys("[Tab]");
});

Then("I select order from gridView", function selectOrder (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(presentRow, "Bill-To Name");
});

Then("Order status should be display as {arg}", function verifyOrderStatusOrderSearch (orderStatus){
  let txtOrderStatus = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderStatus.Text.OleValue;
  if(aqObject.CompareProperty(txtOrderStatus, cmpEqual,orderStatus, true,3))
  {
    Log.Checkpoint("Correct Order Status display")
  }
  else{
    Log.Error("Order status is incorrect")
  }
});



Then("I select first row", function selectFirstRow (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, "Bill-To Name");
});

Then("Transactions tab should be display Original proforma record and invoice record in the frame", function verifyProformaAndInvoice (){
  let radGridViewTransactionsTab = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let clmOrderProcessType1 = radGridViewTransactionsTab.wValue(0, "Order Process Type").OleValue;
  if(aqObject.CompareProperty(clmOrderProcessType1, cmpEqual,"Proforma", true,3))
  {
    Log.Checkpoint("Original Proforma record has been display")
  }
  else{
    Log.Error("Original Proforma record is not display")
  }
  let clmOrderProcessType2 = radGridViewTransactionsTab.wValue(1, "Order Process Type").OleValue;
  if(aqObject.CompareProperty(clmOrderProcessType2, cmpEqual,"Invoice", true,3))
  {
    Log.Checkpoint("New Invoice record has been display")
  }
  else{
    Log.Error("New Invoice record is not display")
  }
});

Then("Order value should be match the Total Order Value on the checkout page of order basket", function verifyOrderValue (){
  let radGridViewOrderValue = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let clmSupplyValue = radGridViewOrderValue.wValue(0, "Supply Value").OleValue;
  if(aqObject.CompareProperty(aqConvert.IntToStr(clmSupplyValue), cmpEqual,aqConvert.IntToStr(value), true,3))
  {
    Log.Checkpoint("Correct total value has been display")
  }
  else{
    Log.Error("InCorrect total value has been display")
  }
});

Then("I close all the open windows", function  (){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});

When("I select Order Type from order query window {arg}", function selectOrderTypefromOrderQuery (orderType){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_OrderType.ucCombo.ClickItem(orderType);
});



Then("I Clear filters applied on Order Query", function clearFilters (){
  let ddOrderProcessType = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_OrderProcessType.ucCombo;
  ddOrderProcessType.ClickItem(0);
});


Then("I select Order Process Type from order query window {arg}", function selectOrderProcessTypeFromOrderQuery (orderProcessType){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_OrderProcessType.ucCombo.ClickItem(orderProcessType);
});

Then("I select Order Type from order query window {arg}", function selectOrderTypeFromOrderQuery (orderType){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_OrderType.ucCombo.ClickItem(orderType);
});

When("I close the search criteria field", function closeTopSearchCriteria (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.Click(12, 8);
});

Then("I click on Apply button from checkout window", function clickApplyBtnFromCheckoutBtn (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_Active_Button_Apply.Click(56, 12);
});

//publishedPrice



  
function selectFindProduct()
{
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
}

function searchProduct()
{
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let textBox = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  
  textBox.SetText(txtProduct);
  textBox.Keys("[Enter]");
  let radGridViewSearchProduct = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewSearchProduct.Exists)
  {
    radGridViewSearchProduct.DblClickCell(0, "Title");
  }
  
}

function verifyListPrices()
{
  let txtListPrices = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Field_ListPricesDisplay.txtInner.Text.OleValue;
  if(aqObject.CompareProperty(txtListPrices, cmpNotEqual,EmptyVariant, true,3))
  {
    Log.Message("We can successfully move ahead with all other operations");
  }
  else{
    Log.Error("List Prices field is empty!");
    Runner.Stop(false);
  }
  
}

function closeProductInformationPanel()
{
  
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }
}

function verifyfields()
{

  let txtIdentifier = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_PrimaryIdentifierLabel.txtInner.Text.OleValue;
  let txtType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  let txtTitle = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Title.txtInner.Text.OleValue;
  parIdentifier = txtIdentifier;
  parType = txtType;
  parTitle = txtTitle;
}

Then("I check for the List Prices field from product information panel", function checkListPrices (){
  selectFindProduct();
  searchProduct();
  verifyListPrices();
  verifyfields();
  closeProductInformationPanel();
});


Then("on top of the window highlighted information as {arg} should be displayed", function verifyText (captionText){
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket_FormCaption.panel4Content.captionText, "Text", cmpEqual, captionText);
});


Then("values should be correctly display in the supply column and Totals should be correct", function verifyValuesOfTotalsAndSupplyColumn (){
  
  let clmSupplyValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_NetValue.txtInner.Text.OleValue;
  let clmTotals = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_TotalNetValue.textBox1.Text.OleValue;
 // if(aqObject.CompareProperty(clmSupplyValue, cmpEqual,txtSupplyStatus, true,3))
  if(aqObject.CompareProperty(aqConvert.IntToStr(clmSupplyValue), cmpEqual,aqConvert.IntToStr(txtSupplyStatus), true,3))
  
  {
    Log.Checkpoint("Supply column value should be correct");
  }
  else
  {
    Log.Error("Supply column value is incorrect");
  }
  if(aqObject.CompareProperty(aqConvert.IntToStr(clmTotals), cmpEqual,aqConvert.IntToStr(txtSupplyStatus), true,3))
  //if(aqObject.CompareProperty(clmTotals, cmpEqual,txtSupplyStatus, true,3))
  {
    Log.Checkpoint("Totals column value should be correct")
  }
  else
  {
    Log.Error("Totals cloumn value is incorrect");
  }
  let clmTotalValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_Total.textBox1.Text.OleValue;
  totalSupplyValue = clmTotalValue;
});

Then("Correct value should be display under Ledger tab", function verifyValueUnderLedgerTab (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmValue = radGridView.wValue(0, "Value").OleValue;

  if(aqObject.CompareProperty(aqConvert.IntToStr(clmValue), cmpEqual,aqConvert.IntToStr(totalSupplyValue), true,3))
  {
    Log.Checkpoint("Correct value is display under ledger tab")
  }
  else{
    Log.Error("Incorrect value is display under ledger tab")
  }
});



Then("I enter product name On Order Id wizard {arg}", function enterProductNameOrdersIdWizard (product){
  
  let lnkProductName = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  lnkProductName.Keys(product);
  txtProduct = product;
  lnkProductName.Keys("[Tab]");
  
  let radGridViewProductOrderId = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  if(radGridViewProductOrderId.Exists)
  {
    radGridViewProductOrderId.DblClickCell(0, "Title");
    }
  
  
});

//transferTocustomer




When("I click on Customers tab from backorder wizard", function clickCustomersTabBackorder (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.Click(88, 8);
});

When("I click on Copy or Transfer customer", function clickCopyOrTransferCustomerIcon (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers_CustomerSummaryELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 1);
});

Then("I enter customer name {arg}", function enterCustomerNameBackorder (customerName){
  let ultraTextEditor = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_ShipToRoleIDTo.txtLink;
  ultraTextEditor.wButtonsRight(1).Click();
  ultraTextEditor.Keys(customerName);
  ultraTextEditor.Keys("[Tab]");
});

Then("I select the order", function selectFirstCustomer (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, "Bill To Identifier");
});

Then("BackOrder should be display against from customer with negative quantity", function verifyBackorder (){
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain;
  let radGridViewNegativeQty = ultraTabControl.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmBackorders = radGridViewNegativeQty.wValue(0, "Backorders").OleValue;
  
  if(aqObject.CompareProperty(clmBackorders, cmpLess,0, true,3))
  {
    Log.Checkpoint("Backorder value has been negative number");
  }
  else{
    Log.Error("Backorder value is positive number");
  }
});

Then("Line Item Status should be display against from customer {arg}", function verifyLineItemStatusFromCustomer (lineItemStatus){
  let radGridViewLineItemStatusCustomer = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmLineItemStatus = radGridViewLineItemStatusCustomer.wValue(0, "Line Item Status").OleValue;
  if(aqObject.CompareProperty(lineItemStatus, cmpEqual,clmLineItemStatus, true,3))
  {
    Log.Checkpoint("Correct Line Item Status has been display");
  }
  else{
    Log.Error("InCorrect Line Item Status has been display");
  }
});



Then("Backorder figure should be remain unchanged", function verifyBackorderFigure (){
  let txtAvailableInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_PTUnboundTextBoxAvailableInventory.textBox1.Text.OleValue;
  if(txtAvailableInventory == balanceQty1)
  {
    Log.Checkpoint("Backordered figure is not changed");
  }
  else{
    Log.Error("Backordered figure is changed");
  }
});

Then("Copy checkbox should be display under Transfer or Copy ship to frame", function verifyCopyCheckbox (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_Copy.chkInternal, "WndCaption", cmpEqual, "Copy");
});

Then("Apply button should be disabled under Transfer or Copy ship to frame", function verifyDisabledApplyBtn (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_ActiveButton_Apply, "Enabled", cmpEqual, false);
});

Then("Cancel button should be display under Transfer or Copy ship to frame", function verifyCancelBtn (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_ActiveButton_Cancel, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_ActiveButton_Cancel, "WndCaption", cmpEqual, "Cancel");
});

Then("I click on Apply button from Transfer or Copy ship to frame", function verifyApplyBtn (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_ActiveButton_Apply.Click();
});

Then("I click on Refresh button from product information panel", function clickRefreshBtn (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview_ActiveButtonRefresh.Click(26, 12);
});


//transferToProduct




When("I open both the products to check the Backorder Figure", function openProductDetails(){
   
   clickFindProduct();
   enterFromProduct();
   clickOverviewtab();
   saveBalanceQty1();
   checkIdentifierBooksType();
   checkListPricesBooksType();
   clickInventoryTab();
   checkInventorySites();
   checkSupplyStatusBackorder();
   clickSaveRecordAndCloseForm();
   
   clickFindProduct();
   enterToProduct();
   clickOverviewtab();
   saveBalanceQty2();
   checkIdentifierBooksType();
   checkListPricesBooksType();
   clickInventoryTab();
   checkInventorySites();
   checkSupplyStatusBackorder();
   clickSaveRecordAndCloseForm();
});



When("I search and select product {arg}", function searchProductBackorder (productFrom){
  let lnkProductTo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_ProductID.txtLink;
  lnkProductTo.Keys(productFrom);
  lnkProductTo.Keys("[Tab]");
});

When("I click On Add Symbol", function clickAddSymbolBackorder (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_AddProductToAdvancedSearch.buttonImage.ClickButton();
});

When("I deselect first order details", function deselectFirstOrderDetails (){
  let radGridViewDeselectOrderDetails = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_213.PTBackOrderWizard_Details.PTBackOrderWizard_Details_DetailsELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewDeselectOrderDetails.wRowCount;
  if(totalRows == 1)
  {
    Aliases.Aptify_Shell.GenericWizardForm.WizPanels_213.PTBackOrderWizard_Details.PTBackOrderWizard_Details_DetailsELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,0);
    Aliases.Aptify_Shell.GenericWizardForm.WizPanels_213.PTBackOrderWizard_Details.PTBackOrderWizard_Details_DetailsELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,0);
  }
  else
  {
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_213.PTBackOrderWizard_Details.PTBackOrderWizard_Details_DetailsELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,0);
   }
});

When("I click on the icon Copy or Transfer product", function clickCopyOrTransferIcon (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products_ProductSummaryELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 1);
});

Then("Product To link box should be display under Transfer or Copy frame", function verifytransferOrCopyFrame (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ProductVersionControl.advancedLinkBoxProducts, "Visible", cmpEqual, true);
});

Then("Product Version field should be disabled", function verifyDisabledVersionField (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ProductVersionControl.lookupSearchBoxProductVersions, "Enabled", cmpEqual, false);
});



Then("Supply site To field should be display with defaulted Supply Site {arg}", function verifySupplySiteBackorder (param1){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_SiteTransfer_SupplySiteIDTo.LookupSearchCombo, "WndCaption", cmpEqual, "Watford");
});

Then("Apply button should be disabled", function verifyDisabledApplyBtnBackorder (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ActiveButton_Apply, "Enabled", cmpEqual, false);
});

Then("Cancel button should be display", function verifyCancelBtnBackorder(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ActiveButton_Cancel, "WndCaption", cmpEqual, "Cancel");
});

Then("Cancel,Back and Next buttons should be display", function verifyBtns (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnCancel, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnBack, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext, "Visible", cmpEqual, true);
});

Then("Help, Finish button should be disabled", function verifyDisabledBtns (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnHelp, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish, "Enabled", cmpEqual, false);
});

Then("I select Supply site from dropdown {arg}", function selectSupplySiteBackorder (supplysite){
  let ddSupplySite = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_SiteTransfer_SupplySiteIDTo.LookupSearchCombo;
  ddSupplySite.DropDown();
  ddSupplySite.ClickItem(supplysite);
});



Then("Line Item Status Should be {arg}", function verifyLineItemStatusTransactions (lineItemStatus){
  let radGridViewBackordersNegative = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewBackordersNegative.wRowCount;
  for(let i = 0;i<totalRows;i++)
  {
  
    let clmDocRef = radGridViewBackordersNegative.wValue(i,"Doc Ref").OleValue;
    if(clmDocRef == documentRef)
    {
    let clmLineItemStatus = radGridViewBackordersNegative.wValue(i,"Line Item Status").OleValue;
    if(aqObject.CompareProperty(clmLineItemStatus, cmpEqual,lineItemStatus, true,3))
    {
    Log.Checkpoint("Line Item Status is display correctly");
    }
    else{
    Log.Error("Incorrect line item status is display");
    }
    }
  }
});

Then("Backorders with Positive number", function verifyBackorders (){
  let radGridViewBackorders = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewBackorders.wRowCount;
  for(let i = 0;i<totalRows;i++)
  {
  
    let clmDocRef = radGridViewBackorders.wValue(i,"Doc Ref").OleValue;
    let clmLineItemStatus = radGridViewBackorders.wValue(i,"Line Item Status").OleValue;
    if(clmDocRef = docRefToProduct && clmLineItemStatus == "Backorder" )
    {
    let clmBackorderNo = radGridViewBackorders.wValue(i, "Backorders").OleValue;
    if(aqObject.CompareProperty(clmBackorderNo, cmpLess,0, true,3))
    {
    Log.Checkpoint("Backorder value is negative number");
    }
    else{
    Log.Error("Backorder value is positive number");
    }
    }
  }
});

Then("Backorders with Negative number", function verifyBackordersNumber (){
  let radGridViewBackordersNegative = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewBackordersNegative.wRowCount;
  for(let i = 0;i<totalRows;i++)
  {
  
    let clmDocRef = radGridViewBackordersNegative.wValue(i,"Doc Ref").OleValue;
    let clmLineItemStatus = radGridViewBackordersNegative.wValue(i,"Line Item Status").OleValue;
    if(clmDocRef = documentRef && clmLineItemStatus == "Backorder Cancel" )
    {
    let clmBackorderNo = radGridViewBackordersNegative.wValue(i, "Backorders").OleValue;
    if(aqObject.CompareProperty(clmBackorderNo, cmpLess,0, true,3))
    {
    Log.Checkpoint("Backorder value is negative number");
    }
    else{
    Log.Error("Backorder value is positive number");
    }
    }
  }
});



Then("The backordered figure should be reduced by the quantity of the transfer", function verifyBackorderQty (){
  let txtAvailableInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_PTUnboundTextBoxAvailableInventory.textBox1.Text.OleValue;
  if((txtAvailableInventory <  balanceQty1)||(txtAvailableInventory == 0))
  {
    Log.Checkpoint("Backordered figure is reduced by the quantity of the transfer");
  }
  else{
    Log.Error("Backordered figure is not changed");
  }
});



Then("The backorder figure should be incremented", function verifyBackorderFig (){
  let txtAvailableInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_PTUnboundTextBoxAvailableInventory.textBox1.Text.OleValue;
  if(aqObject.CompareProperty(txtAvailableInventory, cmpGreater, balanceQty2))
  {
    Log.Checkpoint("Backordered figure is incremented by the quantity of the transfer");
  }
  else{
    Log.Error("Backordered figure is not changed");
  }
});

function enterFromProduct(searchProduct)
{
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radGridViewFromProduct = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let panel = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch;
  panel.quickSearchText.Click();
  panel.Keys(searchProduct);
  product1 = searchProduct;
  splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  if(radGridViewFromProduct.Exists)
  {
    radGridViewFromProduct.DblClickCell(0, "Title");
  }
}

function clickOverviewtab()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Overview");
}

function enterToProduct(searchProduct)
{
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radGridViewToProduct = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let panel = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch;
  panel.quickSearchText.Click();
  panel.Keys(searchProduct);
  product2 = searchProduct;
  splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  if(radGridViewToProduct.Exists)
  {
    radGridViewToProduct.DblClickCell(0, "Title");
  }
}




Then("I search and select product to Transfer", function enterTransfer(){
  
  let aptify_Shell = Aliases.Aptify_Shell;
  let lnkProductTo = aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ProductVersionControl.advancedLinkBoxProducts.txtLink;
  lnkProductTo.wButtonsRight(1).Click();
  lnkProductTo.Keys(product2);
  lnkProductTo.Keys("[Enter]");
  let radGridViewBackorderWizard = aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewBackorderWizard.Exists)
  {
    let rowCount = radGridViewBackorderWizard.wRowCount;
    for(let i =0;i<rowCount;i++)
    {
      if(product2 == radGridViewBackorderWizard.wValue(i,"Title").OleValue)
      {
        radGridViewBackorderWizard.DblClickCell(0, "Title");
      }
    }
  }
});

Then("I open product record and select Inventory Overview tab", function openProductAndClickInventory (){
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,"Title")
  let productLayout = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form;
  let ultraTabControl = productLayout.Products_OTC_Tabs.tabMain;
  ultraTabControl.ClickTab("Inventory");
  ultraTabControl.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Overview");
});

Then("I close the record", function (){
   Aliases.Aptify_Shell.FormTemplateForm.Close();
});

   
When("I select a Contact Card to Ship To {arg}", function selectShipToContactCard(contactCard){
  let ddContactCard = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_ShipToContactCardID.LookupSearchCombo;
  
  ddContactCard.Click();
  ddContactCard.ClickItem(contactCard);
  ddContactCard.Keys("[Tab]");
});

When("I select a Contact Card to Bill To {arg}", function selectBillToContactCard(contactCard){
  let ddContactCard = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_BillToContactCardID.LookupSearchCombo;

  ddContactCard.Click();
  ddContactCard.ClickItem(contactCard);
  ddContactCard.Keys("[Tab]");
});

When("I go to Backorder Wizard", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton13.ClickButton();
});

When("I select a Customer {arg} and click Blue plus icon", function enterCustomerBackorderWizard(customerPar){
  selectCustomerToSearch(customerPar);
  clickBluePlusIcon();
});

function saveBalanceQty1()
{
  let clmBalanceQty = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_PTUnboundTextBoxAvailableInventory.textBox1.Text.OleValue;
  balanceQty1  = clmBalanceQty;
}

function saveBalanceQty2()
{
  let clmBalanceQty =  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_PTUnboundTextBoxAvailableInventory.textBox1.Text.OleValue;
  balanceQty2  = clmBalanceQty;
}

function checkTwoBackordersRequired()
{
  let clmBalanceQty = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_PTUnboundTextBoxAvailableInventory.textBox1.Text.OleValue;
  if(clmBalanceQty > -2)
  {
    Log.Error("Minimum two backorders are required")
  }
  
}

When("I open the Product record for {arg}", function (searchProduct){
   clickFindProduct();
   enterProductNameCS(searchProduct);
   checkIdentifierBooksType();
   checkListPricesBooksType();
   clickInventoryTab();
   checkInventorySites();
   checkSupplyStatusBackorder();
   clickOverviewtab();
   checkTwoBackordersRequired();
   saveBalanceQty1();
   clickSaveRecordAndCloseForm();
});

function enterProductNameCS(searchProduct)
{
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radGridViewFromProduct = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let panel = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch;
  panel.quickSearchText.Click();
  panel.Keys(searchProduct);
  product = searchProduct;
  splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  
  if(radGridViewFromProduct.Exists)
  {
    radGridViewFromProduct.DblClickCell(0, "Title");
  }
}

When("I enter product name", function enterProductNameSearchCriteria (){
  
  let lnkProduct = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID.txtLink;
  lnkProduct.SetText(product);
  title = product;
  lnkProduct.Keys("[Enter]");
  let radgridviewOrderQuery = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radgridviewOrderQuery.Exists)
  {
    let rowCount = radgridviewOrderQuery.wRowCount;
    for(let i = 0;i<rowCount;i++)
    {
      if(product == radgridviewOrderQuery.wValue(i,"Title").OleValue)
      {
        radgridviewOrderQuery.DblClickCell(i, "Title");
      }
    }
  }
});

When("I open the first product to verify details {arg}", function (searchProduct){
  clickFindProductBtn()
  enterFromProduct(searchProduct);
  checkIdentifierBooksType();
  checkListPricesBooksType();
  clickInventoryTab();
  checkInventorySites();
  checkSupplyStatusBackorder();
  clickOverviewtab();
  checkTwoBackordersRequired();
  saveBalanceQty1();
  clickSaveAndClose();
});

When("I open the second product to verify details {arg}", function (searchProduct){
  clickFindProductBtn()
  enterToProduct(searchProduct);
  checkIdentifierBooksType();
  checkListPricesBooksType();
  clickInventoryTab();
  checkInventorySites();
  checkSupplyStatusBackorder();
  clickOverviewtab();
  saveBalanceQty2();
  clickSaveAndClose();
});

When("I deselect all other Backorders except for the product", function deselectBackOrders(){
  let gridBackorders = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_213.PTBackOrderWizard_Details.PTBackOrderWizard_Details_DetailsELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridBackorders.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  let backorderProducts = gridBackorders.wValue(i, 2).OleValue;  
  if(backorderProducts != product)
   {
    gridBackorders.ClickCell(i, 0);
   }
  } 
});

When("I click on Copy or Transfer Customer icon from Customers tab", function gotoCopyOrTransferCustomer(){
  clickCustomersTab();
  retrieveBackorderQty();
  clickCopyOrTransferCustomer();
});

Then("fields like Customer To and Address Type should be displayed", function verifyCustomerToAddressType(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_ShipToRoleIDTo.txtLink, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_ShipToContactCardIDTo.LookupSearchCombo, "Visible", cmpEqual, true);
});

Then("I select a Customer {arg}", function selectCustomerToCopyOrTransfer(customerPar){
  let txtCustomer = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_ShipToRoleIDTo.txtLink;
  
  txtCustomer.Keys("^a[BS]");
  txtCustomer.Click();
  txtCustomer.SetText(customerPar);
  toCustomer = customerPar;
  txtCustomer.Keys("[Tab]");
});

Then("I select an Address Type", function selectAddressType(){
  let shipTo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers_CustomerSummaryELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 5).OleValue;
  
  let ddAddressType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_ShipToContactCardIDTo.LookupSearchCombo;
  if(shipTo == "DEVIZES"){
  ddAddressType.Click();
  ddAddressType.ClickItem("rave general");
  ddAddressType.Keys("[Tab]");
  }
  else if (shipTo == " "){
  ddAddressType.Click();
  ddAddressType.ClickItem("rave general");
  ddAddressType.Keys("[Tab]");
  }
 
  else {
  ddAddressType.Click();
  ddAddressType.ClickItem("rave sole trader");
  ddAddressType.Keys("[Tab]");
  }
});

Then("Invoice for the To Customer should have been produced", function (){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let docRef = gridDocuments.wValue(0, 2).OleValue;
  documentReference = docRef;
  
  let recipientNameDisplayed = gridDocuments.wValue(0, 3).OleValue;
  let docSourceDisplayed = gridDocuments.wValue(0, 4).OleValue;
  
  if((aqObject.CompareProperty(recipientNameDisplayed, cmpEqual, toCustomer, true,3)) && (aqObject.CompareProperty(docSourceDisplayed, cmpEqual, "Order Invoice Advice Note", true,3)) ){
    Log.Checkpoint("Invoice for the To Customer has been produced");
     }
  else{
    Log.Error("Invoice for the To Customer has not been produced");
    }
});


function clickCustomerServices()
{
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Customer Services");
}

function selectCustomerToSearch(customerPar){
  let gridCustomers = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomer = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_CustomerID.txtLink;
  
  txtCustomer.Click();
  txtCustomer.SetText(customerPar);
  customer = customerPar;
  txtCustomer.Keys("[Tab]");
  
  if( gridCustomers.Exists )
   {
    gridCustomers.DblClickCell(0, "Title");
   }
}

function clickBluePlusIcon(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_AddCustomerToAdvancedSearch.buttonImage.ClickButton();
}

function clickCustomersTab()
{
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.ClickTab("Customers");
}

function clickCopyOrTransferCustomer()
{
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers_CustomerSummaryELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 1);
}

function enterFromCustomer_OrderQuery(customer){
  let gridCustomers = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomer = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  
  txtCustomer.Click();
  txtCustomer.SetText(customer);
  txtCustomer.Keys("[Tab]");
 
  if( gridCustomers.Exists )
   {
    gridCustomers.DblClickCell(0, "Title");
   }
}

function enterToCustomer_OrderQuery(toCustomer){
  let gridCustomers = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomer = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  
  txtCustomer.Click();
  txtCustomer.SetText(toCustomer);
  txtCustomer.Keys("[Tab]");
 
  if( gridCustomers.Exists )
   {
    gridCustomers.DblClickCell(0, "Title");
   }
}
function enterProduct_OrderQuery(product){
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID.txtLink;
 
  txtProduct.Click();
  txtProduct.SetText(product);
  txtProduct.Keys("[Tab]");
 
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
}

function retrieveBackorderQty(){
  let backOrderQtyDisplayed = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Customers_CustomerSummaryELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 9).OleValue;
  backOrderQty = backOrderQtyDisplayed;
}

Then("Order Quantity should be correctly displayed", function verifyOrderQty_OrderQuery(){
  let gridOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridOrderLines.wRowCount;
  let i =0;
  var totalQty = 0;
  for (i; i<records; i++)
  {
  let docRefOrderQuery = gridOrderLines.wValue(i, 8).OleValue;  
   if(docRefOrderQuery == documentReference)
   {
    let qty = gridOrderLines.wValue(i, 12).OleValue;
     totalQty = totalQty + qty;
   }
  }
    
  if(aqObject.CompareProperty(backOrderQty, cmpEqual, totalQty, true, 3)){
    Log.Checkpoint("Order Quantity displayed is correct");
     }
  else{
    Log.Error("Order Quantity displayed is incorrect");
    }
    
  closeOrderQuery();  
});

Then("I retrieve quantity of Confirmed Backorders for From product {arg}", function (productName){
  openProductInformation(productName);
  clickInventoryTab();
  clickOverwiewTab();
  retrieveQtyForProd();
  clickSaveAndCloseForm();
  closeSearchBox();
});

Then("I go to Backorder Wizard", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton13.ClickButton();
});

Then("I select a Customer {arg} and click Blue plus icon", function enterCustomerBackOrderWizard(customerPar){
  selectCustomerToSearch(customerPar);
  clickBluePlusIcon();
});


Then("I deselect all other Backorders except for the product", function deselectBackorders(){
  let gridBackorders = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_213.PTBackOrderWizard_Details.PTBackOrderWizard_Details_DetailsELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridBackorders.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  let backorderProducts = gridBackorders.wValue(i, 2).OleValue;  
  if(backorderProducts != product)
   {
    gridBackorders.ClickCell(i, 0);
   }
  } 
});

Then("I click on Copy or Transfer Customer icon from Customers tab", function (){
  clickCustomersTab();
  retrieveBackorderQty();
  clickCopyOrTransferCustomer();
});

Then("buttons like Apply as disabled, Cancel and copy checkbox for Customer should be displayed", function verifyButtonsBackOrderWizard(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_ActiveButton_Apply, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_Copy.chkInternal, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_ActiveButton_Cancel, "Visible", cmpEqual, true);
});

Then("I check the Copy checkbox for Customer", function checkCustomerBackordersCopy(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_Copy.chkInternal.ClickButton();
});



Then("I search for transactions for From Customer under Order Query", function searchFromCustomerOrderQuery(){
  enterFromCustomer_OrderQuery(customer);
  enterProduct_OrderQuery(product);
  clickSearch();
});

Then("I search for transactions for To Customer under Order Query", function searchToCustomerOrderQuery(){
  enterToCustomer_OrderQuery(toCustomer);
  enterProduct_OrderQuery(product);
  clickSearch();
  Delay(5000);
});

When("I retrieve quantity of Confirmed Backorders for {arg}", function getConfirmedBackorders(productPar){
  openProductInformation(productPar);
  clickInventoryTab();
  clickOverwiewTab();
  retrieveQtyForProduct();
  clickSaveAndCloseForm();
  closeSearchBox();
});

When("I retrieve quantity of Confirmed Backorders for From product {arg}", function getConfirmedBackorderFromProd(productPar){
  openProductInformation(productPar);
  clickInventoryTab();
  clickOverwiewTab();
  retrieveQtyForProd();
  clickSaveAndCloseForm();
  closeSearchBox();
});

function openProductInformation(productPar){
  clickFindProduct();
  searchProductTitle(productPar);
  clickSearchBtn();
  handleProductsGrid();  
}

function openProduct(productPar){
  clickFindProduct();
  searchToProduct(productPar);
  clickSearchBtn();
  handleProductsGrid();  
}

function searchProductTitle(productPar){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(productPar);
  product = productPar;
  fromProduct = productPar;
}

function openProductPanel(product){
  clickFindProduct();
  enterProductTitle(product);
  clickSearchBtn();
  handleProductsGrid(); 
}

function enterProductTitle(){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(product);
}

function searchToProduct(productPar){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(productPar);
  toProduct = productPar;
}

function clickSearchBtn(){
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
}

function handleProductsGrid(){
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
}


function clickInventoryTab(){
   Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
}


function retrieveQtyForProduct(){
  let gridAllocations = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_2.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  for(let i = 0; i < gridAllocations.wRowCount; i++){
    let allocationType = gridAllocations.wValue(i, 0).OleValue;
    if(allocationType == "Confirmed Backorders"){
      let confirmedBackorders = gridAllocations.wValue(i, 1).OleValue;
      productQty = confirmedBackorders;
    }
  }
}


function clickManageBackorders()
{
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.grpBox.WaitProperty("Visible", true, 6000);
  Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("AptifyDashboardArea", "", 3).WinFormsObject("DashCtrlWrapper", "", 1).WinFormsObject("ButtonBar").WinFormsObject("UltraButton", "Manage Backorders").Click();
}

function closeOrderQuery()
{
  Aliases.Aptify_Shell.FormTemplateForm.Close();
}
function verifyCustomer(){ 
  let gridAllocations = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_2.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  for(let i = 0; i < gridAllocations.wRowCount; i++){
    let allocationType = gridAllocations.wValue(i, 0).OleValue;
    if(allocationType == "Confirmed Backorders"){
      let backOrderQtyDisplayed = gridAllocations.wValue(i, 1).OleValue;
        if(aqObject.CompareProperty(backOrderQtyDisplayed, cmpGreater, productQty, true, 3)){
         Log.Checkpoint("Quantity of Confirmed Backorders is Incremented");
        }
        else{
         Log.Error("Quantity of Confirmed Backorders is not Incremented");
        }
    } 
  }
}


Then("quantity of Confirmed Backorders should remain unchanged for From product {arg}", function verifyConfirmedBackorders(productPar){
  openProductInformation(productPar);
  clickInventoryTab();
  clickOverwiewTab();
  verifyForProduct()
  clickSaveAndCloseForm();
  closeSearchBox();
});

Then("I retrieve quantity of Confirmed Backorders for {arg}", function retrieveQtyConfirmedBackorders(productPar){
  openProductInformation(productPar);
  clickInventoryTab();
  clickOverwiewTab();
  retrieveQtyForProduct();
  clickSaveAndCloseForm();
  closeSearchBox();
});

//Then("I enter P\\/O Reference, Quantity {arg}", function (quantity){
  //enterPOref();
  //enterQuantity(quantity);
//});

function enterPOref(poRefPar){
  
  PORefInt = Project.Variables.POInt
  PORef = aqString.Concat("AUT", PORefInt)
  Project.Variables.POInt = Project.Variables.POInt+1
  Project.Variables.PORef = PORef
  
  let txtCodeRef = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSearch_CustomerLineRef.txtInner;
 
 txtCodeRef.Click();
 txtCodeRef.SetText(Project.Variables.PORef);
 Log.Message(Project.Variables.PORef);
 refCode = PORef;
 txtCodeRef.Keys("[Tab]");
}

function enterQuantity(quantityPar){
  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  
  txtQuantity.Click();
  txtQuantity.SetText(quantityPar);
  quantity = quantityPar;
}

When("I deselect an Order", function deselectOrders(){
 let gridProductSummary = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_213.PTBackOrderWizard_Details.PTBackOrderWizard_Details_DetailsELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
 let records = gridProductSummary.wRowCount;
 if(records > 1){
   gridProductSummary.ClickCell(0, 0);
 }
});

When("I click on Copy or Transfer Product icon", function clickCopyOrTransferProduct(){
  let backOrderQtyDisplayed =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products_ProductSummaryELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 7).OleValue;
  backOrderQty = backOrderQtyDisplayed;
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products_ProductSummaryELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 1);
});

Then("fields like Product To, Product Version, Supply Site To should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ProductVersionControl.advancedLinkBoxProducts.lblLink, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ProductVersionControl.lookupSearchBoxProductVersions.comboLinkLabel, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_SiteTransfer_SupplySiteIDTo.comboLinkLabel, "Visible", cmpEqual, true);
});

Then("buttons like Apply as disabled, Cancel and copy checkbox should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ActiveButton_Apply, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ActiveButton_Cancel, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_Copy.chkInternal, "Visible", cmpEqual, true);
});

Then("buttons like Help and Finish as disabled, Cancel, Back, Next should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnHelp, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnCancel, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnBack, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext, "Visible", cmpEqual, true);
});

Then("I enter To Product", function (){
  let txtProductTo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ProductVersionControl.advancedLinkBoxProducts.txtLink;
  
  txtProductTo.Keys("^a[BS]");
  txtProductTo.Click();
  txtProductTo.SetText(toProduct);
  product = toProduct;
  txtProductTo.Keys("[Tab]");
});

Then("I select the Supply Site To created", function selectSupplySiteProductCopyOrTransfer(){
  let ddSupplySiteTo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_SiteTransfer_SupplySiteIDTo.LookupSearchCombo;
  
  ddSupplySiteTo.Click();
  ddSupplySiteTo.ClickItem(site);
  ddSupplySiteTo.Keys("[Tab]");
});

Then("I check the Copy checkbox", function checkCopy(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_Copy.chkInternal.ClickButton();
});

Then("I click Apply", function clickApplyCopyOrTransferProduct(){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ActiveButton_Apply.Click();
});

Then("I click OK for pop up stating {arg}", function (param1){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

Then("I click No to Close the wizard", function clickNoBackOrderWizard(){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

//Then("I click on Orders from folder list", function clickOrdersAPI(){
  //Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Orders");
//});



Then("quantity of Confirmed Backorders should be incremented for {arg}", function verifyConfirmedBackorderQuantity(productPar){
  openProductInformation(productPar);
  clickInventoryTab();
  clickOverwiewTab();
  verifyToProduct();
  clickSaveAndCloseForm();
  closeSearchBox();
});


When("I retrieve quantity of Confirmed Backorders for To product {arg}", function retrieveConfirmedBackorderQty(productPar){
  openProduct(productPar);
  clickInventoryTab();
  clickOverwiewTab();
  retrieveQtyToProd();
  clickSaveAndCloseForm();
  closeSearchBox();
});

Then("I search for transactions under Order Query", function searchProductOrderQuery(){
  enterProductToSearch(product);
  clickSearch();
});


function clickOverwiewTab(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Overview");
}

function retrieveQtyForProd(){
  let gridAllocations = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_2.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  for(let i = 0; i < gridAllocations.wRowCount; i++){
    let allocationType = gridAllocations.wValue(i, 0).OleValue;
    if(allocationType == "Confirmed Backorders"){
      let confirmedBackorders = gridAllocations.wValue(i, 1).OleValue;
      productQty = confirmedBackorders;
    }
  }
}

function retrieveQtyToProd(){
  let gridAllocations = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_2.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  for(let i = 0; i < gridAllocations.wRowCount; i++){
    let allocationType = gridAllocations.wValue(i, 0).OleValue;
    if(allocationType == "Confirmed Backorders"){
      let confirmedBackorders = gridAllocations.wValue(i, 1).OleValue;
      productQty = confirmedBackorders;
    }
  }
}


function verifyForProduct(){
  let gridAllocations = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_2.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  for(let i = 0; i < gridAllocations.wRowCount; i++){
    let allocationType = gridAllocations.wValue(i, 0).OleValue;
    if(allocationType == "Confirmed Backorders"){
      let backOrderQtyDisplayed = gridAllocations.wValue(i, 1).OleValue;
        if(aqObject.CompareProperty(backOrderQtyDisplayed, cmpGreater, forProductQty, true, 3)){
         Log.Checkpoint("Quantity of Confirmed Backorders is unchanged");
        }
        else{
         Log.Error("Quantity of Confirmed Backorders is changed");
        }
    } 
  }
}
function verifyToProduct(){
  let gridAllocations = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_2.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  for(let i = 0; i < gridAllocations.wRowCount; i++){
    let allocationType = gridAllocations.wValue(i, 0).OleValue;
    if(allocationType == "Confirmed Backorders"){
      let backOrderQtyDisplayed = gridAllocations.wValue(i, 1).OleValue;
        if(aqObject.CompareProperty(backOrderQtyDisplayed, cmpGreater, toProductQty, true, 3)){
         Log.Checkpoint("Quantity of Confirmed Backorders is Incremented");
        }
        else{
         Log.Error("Quantity of Confirmed Backorders is not Incremented");
        }
    } 
  }
}



function clickSearch(){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
}

Then("I retrieve the document reference", function retrieveDocumentReference(){
  let docRef = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 2).OleValue;
  documentReference = docRef;
});

Then("Order Quantity displayed should be correct", function verifyOrderQuantity_OrderQuery(){
  let gridOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridOrderLines.wRowCount;
  let i =0;
  
  for (i; i<records; i++)
  {
  let docRefOrderQuery = gridOrderLines.wValue(i, 8).OleValue;  
   if(docRefOrderQuery == documentReference)
   {
    var totalQty = 0;
    let qty = gridOrderLines.wValue(i, 12).OleValue;
    totalQty = totalQty + qty;
   }
  }
    
  if(aqObject.CompareProperty(backOrderQty, cmpEqual, totalQty, true, 3)){
    Log.Checkpoint("Order Quantity displayed is correct");
     }
  else{
    Log.Error("Order Quantity displayed is incorrect");
    }
});



When("I click All tab", function clickTabAll(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.ClickTab("All");
});

When("I click Edit icon", function clickEditBackorder(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_AllELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 3);
});

When("I click on the Customer icon in front of the Ship To field", function clickCustomerIcon(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Edit.PTBackOrderWizard_ReviewAndAction_Edit_ShipToLink.buttonImage.ClickButton();
  getCustomerName();
});

When("If customer has only one address Type, insert a second", function insertSecondCustomerAddress(){
  let gridAddressesPerson = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Contact_Tab.PTPersons_Contact_Tab.PTPerson_Contact_SubTabs.tabMain.PTPerson_Contact_SubTabs_Address.PTPerson_Contact_SubTabs_Addresses.PT_Persons_Contact_Addresses_PersonAddresses.AptifyControlBase_Fill_Panel.flexSubType;
  let gridAddressesCompany = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PTCompany_Contact_SubTabs.tabMain.PTCompany_Contact_SubTabs_Address.PTCompany_Contact_SubTypes_Addresses.PT_Companies_Contact_Addresses_CompanyAddresses.AptifyControlBase_Fill_Panel.flexSubType;
    if( gridAddressesPerson.Exists )
    {
      let records = gridAddressesPerson.BottomRow;
      if(records == 1 )
      {
        clickNewAddress();
        enterAddressType();
        enterAddress();
        clickOk();
      }
     clickSaveAndCloseForm(); 
    }
   else
     {
      let records = gridAddressesCompany.BottomRow;
      if(records == 1 )
      {
        clickNewAddress();
        enterAddressType();
        enterAddress();
        clickOk();
      }
     clickSaveAndCloseForm(); 
    }
   
});

When("I increase the Quantity by {arg}", function editBackorderQuantity(quantity){
  increasedQtyBy = quantity;
  let txtQuantity =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Edit.PTBackOrderWizard_ReviewAndAction_Edit_Quantity.txtInner;
  let existingQty = aqObject.GetPropertyValue(txtQuantity, "text");
  let newQty =  aqConvert.StrToInt(existingQty) + aqConvert.StrToInt(quantity) ;
  txtQuantity.Click();
  txtQuantity.ClickR();
  txtQuantity.PopupMenu.Click("Select All");
  txtQuantity.ClickR();
  txtQuantity.PopupMenu.Click("Cut")
  txtQuantity.Keys(newQty);
  txtQuantity.Keys("[Tab]");
});

When("I click on Apply", function clickApplyEdit(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Edit.PTBackOrderWizard_ReviewAndAction_Edit_Apply.Click();
});

When("I run Billing Wave Release", function runBillingWave(){
  let btnBillingWaveRelease = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_BillingWaveRelease.buttonImage;
  btnBillingWaveRelease.ClickButton();
  
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

When("I open the Invoice generated", function openInvoiceGenerated(){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let docRef = gridDocuments.wValue(0, 2).OleValue;
   docInvoice = docRef;

   let sFile = sFolder + docRef;
   aqFileSystem.CreateFolder(sFile);

   gridDocuments.DblClickCell(0, 2);
   Delay(5000);
   var invoice = Sys.Desktop.Picture();
   var invoicePath = aqString.Concat(sFile, "\\");
   invoice.SaveToFile(invoicePath + "PageTop.jpg" );
   
   Sys.Keys("[PageDown]");
   Delay(5000);
   var invoice = Sys.Desktop.Picture();
   var invoicePath = aqString.Concat(sFile, "\\");
   invoice.SaveToFile(invoicePath + "PageBottom.jpg" );
});

Then("inventory should be decreased by the increased quantity", function verifyAvailableInventory(){
  let inventoryDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
  avaialbleQty = inventoryDisplayed;
  if(aqObject.CompareProperty(inventoryDisplayed, cmpLess, availableInventory, true, 3)){
    Log.Checkpoint("Inventory is decreased");
     }
  else{
    Log.Error("Inventory is not decreased");
    }
  clickSaveAndCloseForm();  
});

Then("I select a Product {arg} to release", function selectProductBackorderWizard(product){
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_ProductID.txtLink;
  
  txtProduct.Click();
  txtProduct.SetText(product);
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

Then("I click on Blue plus icon to add Product", function clickProductBluePlus(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_AddProductToAdvancedSearch.buttonImage.ClickButton();
});

Then("I deselect an Order", function (){
 let gridProductSummary = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_213.PTBackOrderWizard_Details.PTBackOrderWizard_Details_DetailsELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
 let records = gridProductSummary.wRowCount;
 if(records > 1){
   gridProductSummary.ClickCell(0, 0);
 }
});

Then("I click All tab", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.ClickTab("All");
});

Then("I click Edit icon", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_All.PTBackOrderWizard_ReviewAndAction_AllELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 3);
});

Then("I decrease the Quantity by {arg}", function (quantity){
  decreasedQtyBy = quantity;
  let txtQuantity =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Edit.PTBackOrderWizard_ReviewAndAction_Edit_Quantity.txtInner;
  let existingQty = aqObject.GetPropertyValue(txtQuantity, "text");
  let newQty =  aqConvert.StrToInt(existingQty) - aqConvert.StrToInt(quantity) ;
  txtQuantity.Click();
  txtQuantity.ClickR();
  txtQuantity.PopupMenu.Click("Select All");
  txtQuantity.ClickR();
  txtQuantity.PopupMenu.Click("Cut")
  txtQuantity.Keys(newQty);
  txtQuantity.Keys("[Tab]");
});

Then("I open the Advice note generated", function openAdviceNoteGenerated(){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let docRef = gridDocuments.wValue(0, 2).OleValue;
  docInvoice = docRef;

   let sFile = sFolder + docRef;
   aqFileSystem.CreateFolder(sFile);

   gridDocuments.DblClickCell(0, 2);
   Delay(5000);
   var invoice = Sys.Desktop.Picture();
   var invoicePath = aqString.Concat(sFile, "\\");
   invoice.SaveToFile(invoicePath + "PageTop.jpg" );
   
   Sys.Keys("[PageDown]");
   
   Delay(5000);
   var invoice = Sys.Desktop.Picture();
   var invoicePath = aqString.Concat(sFile, "\\");
   invoice.SaveToFile(invoicePath + "PageBottom.jpg" );
});

Then("inventory should be increased by the decreased quantity", function verifyInventory(){
  let inventoryDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
  
  if(aqObject.CompareProperty(inventoryDisplayed, cmpGreater, avaialbleQty, true, 3)){
    Log.Checkpoint("Inventory is increased");
     }
  else{
    Log.Error("Inventory is not increased");
    }
  clickSaveAndCloseForm();  
});


Then("I click on Backorders from Order Release", function (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(385, 17);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(57, 13);
});


Then("I check Release checkbox", function checkReleaseCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Main.PTBackOrderWizard_ReviewAndAction_Release.chkInternal.ClickButton();
});

Then("I check Override Product Supply Status checkbox", function checkOverrideProductSupplyStatusCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Main.PTBackOrderWizard_ReviewAndAction_Main_OverrideProductSupplyStatus.chkInternal.ClickButton();
});

function getCustomerName()
{
 let companyNameDisplayed =  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_FullName.txtInner.get_Text();
 companyName = companyNameDisplayed;
}
function clickNewAddress()
{
  let newCompanyAddress = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PTCompany_Contact_SubTabs.tabMain.PTCompany_Contact_SubTabs_Address.PTCompany_Contact_SubTypes_Addresses.PT_Companies_Contact_Addresses_CompanyAddresses.zAptifyControlBase_Toolbars_Dock_Area_Top;
  let newPersonAddress = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Contact_Tab.PTPersons_Contact_Tab.PTPerson_Contact_SubTabs.tabMain.PTPerson_Contact_SubTabs_Address.PTPerson_Contact_SubTabs_Addresses.PT_Persons_Contact_Addresses_PersonAddresses.zAptifyControlBase_Toolbars_Dock_Area_Top;

  if( newPersonAddress.Exists )
  {
    let addressTypeDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PTCompany_Contact_SubTabs.tabMain.PTCompany_Contact_SubTabs_Address.PTCompany_Contact_SubTypes_Addresses.PT_Companies_Contact_Addresses_CompanyAddresses.AptifyControlBase_Fill_Panel.flexSubType.get_Item(0, 1).OleValue;
    addressType = addressTypeDisplayed;
    
    newPersonAddress.ClickItem("SubType|New");
  }
  else
  {
    let addressTypeDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PTCompany_Contact_SubTabs.tabMain.PTCompany_Contact_SubTabs_Address.PTCompany_Contact_SubTypes_Addresses.PT_Companies_Contact_Addresses_CompanyAddresses.AptifyControlBase_Fill_Panel.flexSubType.get_Item(1, 1).OleValue;
    addressType = addressTypeDisplayed;

    newCompanyAddress.ClickItem("SubType|New");
  }
}

function enterAddressType()
{
  let personAddressType = Aliases.Aptify_Shell.SubTypeTemplateForm.PersonAddress_AddressDetails.PersonAddress_AddressDetails_AddressID.lookupSearchBoxAddressType.LookupSearchCombo;
  let companyAddressType = Aliases.Aptify_Shell.SubTypeTemplateForm.CompanyAddress_AddressDetails.CompanyAddress_AddressDetails_PTAddressControl.lookupSearchBoxAddressType.LookupSearchCombo;
  
  if( personAddressType.Exists ){
    if( addressType == "Street Address" ){
      personAddressType.Click();
      personAddressType.ClickItem("Billing Address");
      personAddressType.Keys("[Tab]");
    }
    else if (addressType == "Home Address") {
      personAddressType.Click();
      personAddressType.ClickItem("Street Address");
      personAddressType.Keys("[Tab]");
    }
    else{
      personAddressType.Click();
      personAddressType.ClickItem("Street Address");
      personAddressType.Keys("[Tab]");
    }
  }
  
  else
  {
    if( addressType == "Street Address" ){
      companyAddressType.Click();
      companyAddressType.ClickItem("Billing Address");
      companyAddressType.Keys("[Tab]");
    }
    else if (addressType == "Home Address") {
      companyAddressType.Click();
      companyAddressType.ClickItem("Street Address");
      companyAddressType.Keys("[Tab]");
    }
    else{
      companyAddressType.Click();
      companyAddressType.ClickItem("Street Address");
      companyAddressType.Keys("[Tab]");
    }
  }
}

function enterAddress()
{
  let groupBoxPerson = Aliases.Aptify_Shell.SubTypeTemplateForm.PersonAddress_AddressDetails.PersonAddress_AddressDetails_AddressID.groupBox1;
  let groupBoxCompany = Aliases.Aptify_Shell.SubTypeTemplateForm.CompanyAddress_AddressDetails.CompanyAddress_AddressDetails_PTAddressControl.groupBox1;

  if(groupBoxPerson.Exists ){
    groupBoxPerson.aptifyTextBoxHouseNo.txtInner.Click();
    groupBoxPerson.aptifyTextBoxHouseNo.txtInner.SetText(7);
  
    groupBoxPerson.aptifyTextBox1Floor.txtInner.Click();
    groupBoxPerson.aptifyTextBox1Floor.txtInner.SetText("2nd Floor");
  
    groupBoxPerson.aptifyTextBoxHouseName.txtInner.Click();
    groupBoxPerson.aptifyTextBoxHouseName.txtInner.SetText("Phoenix");
  
    groupBoxPerson.aptifyTextBoxStreet.txtInner.Click();
    groupBoxPerson.aptifyTextBoxStreet.txtInner.SetText("St. Anne");
  
    groupBoxPerson.aptifyTextBoxPostalCode.txtInner.Click();
    groupBoxPerson.aptifyTextBoxPostalCode.txtInner.SetText("OA 98Z");
  }
  else
  {
    groupBoxCompany.aptifyTextBoxHouseNo.txtInner.Click();
    groupBoxCompany.aptifyTextBoxHouseNo.txtInner.SetText(7);
  
    groupBoxCompany.aptifyTextBox1Floor.txtInner.Click();
    groupBoxCompany.aptifyTextBox1Floor.txtInner.SetText("2nd Floor");
  
    groupBoxCompany.aptifyTextBoxHouseName.txtInner.Click();
    groupBoxCompany.aptifyTextBoxHouseName.txtInner.SetText("Phoenix");
  
    groupBoxCompany.aptifyTextBoxStreet.txtInner.Click();
    groupBoxCompany.aptifyTextBoxStreet.txtInner.SetText("St. Anne");
  
    groupBoxCompany.aptifyTextBoxPostalCode.txtInner.Click();
    groupBoxCompany.aptifyTextBoxPostalCode.txtInner.SetText("OA 98Z");
  }
}

function clickOk()
{
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
}

When("I open information panel for {arg}", function (productPar){
  openProductInformation(productPar);
  clickInventoryTab();
  retrieveAvailableInventory();
  clickSaveAndCloseForm();
});

When("I open product information panel for product {arg}", function (productPar){
  openProductInformation(productPar);
  productPar = product;
  clickInventoryTab();
});

Then("I click Apply button", function clickApplyEdits(){
  if(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.Exists){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_ActiveButton_Apply.Click();
  }
  else{
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Edit.PTBackOrderWizard_ReviewAndAction_Edit_Apply.Click();
  }
});

function enterProductToSearch(product){
 let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID.txtLink;
 
 txtProduct.Click();
 txtProduct.Keys("^a[BS]");
 txtProduct.SetText(product);
 orderPar = product;
 txtProduct.Keys("[Tab]");

 handleProductsGrid();
}

function enterProduct(){
 let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID.txtLink;
 
 txtProduct.Click();
 txtProduct.Keys("^a[BS]");
 txtProduct.SetText(product);
 orderPar = product;
 txtProduct.Keys("[Tab]");

 handleProductsGrid();
}


function enterCustomerToSearch(companyName){
  let gridCustomers = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomer = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  
  txtCustomer.Click();
  txtCustomer.SetText(companyName);
  txtCustomer.Keys("[Tab]");
 
  if( gridCustomers.Exists )
   {
    gridCustomers.DblClickCell(0, "Title");
   }
}

Then("I select a Contact card {arg}", function selectContactCard_EditBackorders(contactCard){
  let ddContactCard = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Edit.PTBackOrderWizard_ReviewAndAction_Edit_ShipToContactCardIDTo.LookupSearchCombo;
  
  ddContactCard.Click();
  ddContactCard.ClickItem(contactCard);
  ddContactCard.Keys("[Tab]");
});

Then("I retrieve Sale quantity from overview sub tab", function retrieveSales_Inventory(){
  clickOverwiewTab();
  retrieveSales();
  clickSaveAndCloseForm();
  closeSearchBox();
});

function retrieveSales()
{
  let gridDisposals = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i = 0;
  let records = gridDisposals.wRowCount;
  for(i;i<records;i++){
    if(gridDisposals.wValue(i,0).OleValue == "Sales"){
     var salesQty = gridDisposals.wValue(i, 1).OleValue;
     sales = salesQty;
    }
    else{
     var salesQty = 0; 
     sales = salesQty;
    }
  }
}

Then("Sale quantity should be increased", function verifySales_Inventory(){
  clickOverwiewTab();

  let gridDisposals = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i = 0;
  let records = gridDisposals.wRowCount;
  for(i;i<records;i++){
    if(gridDisposals.wValue(i,0).OleValue == "Sales"){  
  
  let salesQty = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 1).OleValue;
  if(aqObject.CompareProperty(salesQty, cmpGreater, sales, true, 3)){
    Log.Checkpoint("Sales quantity is increased");
     }
  else{
    Log.Error("Sales quantity is not increased");
    }
    
  }
 }   
  clickSaveAndCloseForm();
  closeSearchBox();  
});

Then("I refresh Documents section", function refreshDocuments(){
  Delay(300000);
  
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(75, 10);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(61, 173);
  
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(75, 10);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(61, 173);
});

Then("I search for the customer with new address inserted and product {arg}", function searchProductCustomerOrderQuery(product){
  enterProductToSearch(product)
  enterCustomerToSearch(companyName);
  clickSearch();
});

Then("I select a backorder line", function selectBackOrder_OrderQuery(){
  let gridOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let records = gridOrderLines.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  let orderDisplayed = gridOrderLines.wValue(i, 6).OleValue;  
  if(orderDisplayed == product)
   {
    let orderStatus = gridOrderLines.wValue(i, 27).OleValue;  
    if( orderStatus == "Open Order" ){
     gridOrderLines.ClickRowIndicator(i);
     break; 
    }
   }
  }
});

Then("I click on the Apply button", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Edit.PTBackOrderWizard_ReviewAndAction_Edit_Apply.Click();
});


When("I open information panel for product {arg}", function (productPar){
  let gridInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  openProductInformation(productPar);
  clickInventoryTab();
  retrieveAvailableInventory();
  if( gridInventory.wRowCount > 1  ){
  retrieveAvailableInventoryNewSite();
  }
});

When("I check current site status if Closed if not I set it to {arg}", function (siteStatus){
  let gridInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let siteStatusDisplayed = gridInventory.wValue(0, 4).OleValue;
  if( siteStatusDisplayed != siteStatus ){
    setSiteStatus(siteStatus);
  }
});

When("I add a new Inventory Site {arg}", function (sitePar){
  let gridInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  site = sitePar;
  let sites = gridInventory.wRowCount;
    if( sites <= 1){
    clickNewRecord();
    enterSite_Version(sitePar);
    setSupplyStatus();
    enterCurrentPacketSize();
    selectPickingLocation();
    clickSaveAndCloseForm();
    retrieveAvailableInventoryNewSite();
    }
   clickSaveAndCloseForm(); 
   closeForm();
});

When("I perform Goods In", function (){
  openGoodsIn();
  fillSettingsPage(site);
  ClickNextForm();
  performGoodsIn(product);
  
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.rowRow1ColumnValueDbnull.Drag(10, 9, -235, 100);

 enterToLocation();
 enterInventory();
 clickTransferButton();
 clickFinish();
 clickFinishForm()
 
 confirmTransactions()
});

function clickFinish(){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
}

function enterToLocation(){
  let txtToLocation = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_LinkedLocationItemID.txtLink;
  
  txtToLocation.Click();
  txtToLocation.SetText("XX1F1");
  txtToLocation.Keys("[Tab]");
}
function enterInventory(){
   let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionQuantityLoose.txtInner; 
   txtQtyLoose.SetText(1000);
   txtQtyLoose.Keys("[Tab]");

}
function clickTransferButton(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Active_Button_Transfer.Click();
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists){
   Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton(); 
  }
}

function confirmTransactions(){
 Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton5.ClickButton();
  let radGridView = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  let i = 0;
  if(records > 0)
  {
   for (i; i<records; i++)
    {
      if(radGridView.wValue(i,3).OleValue == "RAVE ROCKET Closed With Stock"){
        radGridView.ClickCell(i,0);
      }
    }
    Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(125, 17);
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
    Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();  
  }
  else
  {
    Log.Checkpoint("No pending transactions found");
  }  
}
Then("for first Order line the Order Line Status should be Backorder", function (){
  clickFirstTransaction();
  clickTransactionsTab();
  verifyLineItemStatus();
});

Then("for the second Order Line the Order Line Status should be Backorder Cancel and Backorder", function (){
  clickSearch();
  clickSecondTransaction();
  clickTransactionsTab();
  verifyOrderLineStatus();
});

Then("the Backorder quantity should be negative", function (){
  let backOrders = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(1, 10).OleValue;

  if(aqObject.CompareProperty(Math.sign(backOrders), cmpEqual, -1, true, 3)){
    Log.Checkpoint("Backorder quantity is negative");
     }
  else{
    Log.Error("Backorder quantity is not negative");
    }
});

Then("I open product information panel for {arg}", function (productPar){
  openProductInformation(productPar);
  clickInventoryTab();
});

Then("available inventory should be increased by Backorder quantity for original site", function (){
  let availableQty = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
  
  if(aqObject.CompareProperty(availableQty, cmpGreater, availableInventory, true, 3)){
    Log.Checkpoint("Available Inventory is increased");
     }
  else{
    Log.Error("Available Inventory is not increased");
    }
});

Then("available inventory should be decreased by Backorder quantity for new site", function (){
  let availableQty = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(1, 3).OleValue;
  
  if(aqObject.CompareProperty(availableQty, cmpLess, availableQtyNewInventory, true, 3)){
    Log.Checkpoint("Available Inventory is decreased");
     }
  else{
    Log.Error("Available Inventory is not decreased");
    }
});

function clickFirstTransaction()
{
  let gridOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i = 0;
  let records = gridOrderLines.wRowCount;
  for (i; i<records; i++)
  {
  let docRefOrderQuery = gridOrderLines.wValue(i, 8).OleValue;  
   if(docRefOrderQuery == documentReference1)
   {
     gridOrderLines.ClickRowIndicator(i);
   }
  }
 
}

function clickSecondTransaction()
{
  let gridOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i= 0;
  let records = gridOrderLines.wRowCount;
  for (i; i<records; i++)
  {
  let docRefOrderQuery = gridOrderLines.wValue(i, 8).OleValue;  
   if(docRefOrderQuery == documentReference2)
   {
     gridOrderLines.ClickRowIndicator(i);
     break;
   }
  }
}


function verifyLineItemStatus()
{
  let lineItemStatusDisplayed  = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 4).OleValue;
  if(aqObject.CompareProperty(lineItemStatusDisplayed, cmpEqual, "BackOrder", true, 3)){
    Log.Checkpoint("Order Line Status is Backorder");
     }
  else{
    Log.Error("Order Line Status is not Backorder");
    }
}

function verifyOrderLineStatus(){
  let gridTransactionOrderQuery = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let lineItemStatusDisplayed1  = gridTransactionOrderQuery.wValue(0, 4).OleValue;
  let lineItemStatusDisplayed2  = gridTransactionOrderQuery.wValue(1, 4).OleValue;
  
  if( (aqObject.CompareProperty(lineItemStatusDisplayed1, cmpEqual, "BackOrder", true, 3)) && (aqObject.CompareProperty(lineItemStatusDisplayed2, cmpEqual, "Backorder Cancel", true, 3)) )
    {
    Log.Checkpoint("Order Line Status displayed is correct");
     }
  else{
    Log.Error("Order Line Status displayed is incorrect");
    }
}

function retrieveAvailableInventory()
{
  let availableQty = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
  availableInventory = availableQty;
}

function performGoodsIn(product){
 let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1; 
  let txtProduct =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID.txtLink;
  txtProduct.Click();
  txtProduct.SetText(product);
  txtProduct.Keys("[Tab]");
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
  
 // let checkBoxMiscellaneousGoodsIn =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_MiscellaneousGoodsIn.chkInternal;
 // checkBoxMiscellaneousGoodsIn.ClickButton();
 
 // let popUpMsg =  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo;
 // popUpMsg.ClickButton();
  
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_LooseQty.txtInner; 
  txtQtyLoose.Click();
  txtQtyLoose.SetText(1000);
  txtQtyLoose.Keys("[Tab]");
  looseQty =  aqObject.GetPropertyValue(txtQtyLoose , "text");
  let availableQty = availableNewInventory + aqConvert.StrToInt(looseQty) ;
  availableQtyNewInventory = availableQty;
  
  let txtUnitWeight = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_UnitWeightValue.txtInner;
  txtUnitWeight.Click();
  txtUnitWeight.SetText(0.250);
  txtUnitWeight.Keys("[Tab]");
  
  let txtComment = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Comments.txtInner;
  txtComment.Click();
  txtComment.SetText("customComment");
  txtComment.Keys("[Tab]");
  
  let btnAdd = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Active_Button_Add;
  btnAdd.Click();
  if(Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.Exists)
  {
    Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.ClickButton();
  }
  
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();  
}

function clickFinishForm(){
   Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
}

function retrieveAvailableInventoryNewSite()
{
  let availableQty = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(1, 3).OleValue;
  availableNewInventory = availableQty;
}
function setSiteStatus(siteStatus){
  
 Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Supply Status");
 Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteStatusID.LookupSearchCombo.ClickItem(siteStatus);
 Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
    
}

function clickNewRecord()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(18, 19);
}

function enterSite_Version(sitePar)
{
  let ddSite = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteID.LookupSearchCombo;
  ddSite.Click();
  ddSite.ClickItem(sitePar);
  site = sitePar;
  ddSite.Keys("[Tab]");
  
  let ddVersion = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_VersionLinkDescription.LookupSearchCombo;
  ddVersion.Click();
  ddVersion.ClickItem("Main Market Edition");
  ddVersion.Keys("[Tab]");
}

function setSupplyStatus(){
  let ddSupplyStatus = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteStatusID.LookupSearchCombo;
  let msgBox = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne;
  
  ddSupplyStatus.Click();
  ddSupplyStatus.ClickItem("Open");
  if( msgBox.Exists ){
    msgBox.ClickButton();
  }
  ddSupplyStatus.Keys("[Tab]");
}

function enterCurrentPacketSize()
{
 let txtCurrentPacketSize =  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_CurrentPacketSize.txtInner.EmbeddableTextBoxWithUIPermissions;
 
 txtCurrentPacketSize.Click();
 txtCurrentPacketSize.SetText(5);
}

function selectPickingLocation(){
  let ddPickingLocation = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_DefaultPickingLocationID.txtLink;
  
  ddPickingLocation.Click();
  ddPickingLocation.SetText("XX1F1");
  ddPickingLocation.Keys("[Tab]");
}



Then("I retrieve the document references", function (){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let docRef1 = gridDocuments.wValue(0, 2).OleValue;
  documentReference1 = docRef1;
  
  let docRef2 = gridDocuments.wValue(1, 2).OleValue;
  documentReference2 = docRef2;
});

function openGoodsIn(){
 Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Inventory");
  
 Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton3.ClickButton();
}

function ClickNextForm(){
 Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
}
 
function fillSettingsPage(site){
  let ddSiteWarehouse = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_SiteWarehouseID.LookupSearchCombo;
  ddSiteWarehouse.Click();
  ddSiteWarehouse.ClickR();
  ddSiteWarehouse.PopupMenu.Click("Select All");
  ddSiteWarehouse.ClickR();
  ddSiteWarehouse.PopupMenu.Click("Cut");
  ddSiteWarehouse.Keys(site);
  ddSiteWarehouse.Keys("[Tab]");

  let txtReceivedDate = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_ReceivedDate.txtInner;
  txtReceivedDate.Click();
  txtReceivedDate.SetText("16/01/2020");
  
  let txtReference = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_Reference.txtInner;
  txtReference.Click();
  txtReference.SetText("customRef");
}

Then("Transfer or Copy frame and Delete icon should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_SiteTransfer_Group_Box_1.MainGroupBox, "WndCaption", cmpEqual, "Transfer or Copy");
  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products_ProductSummaryELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.HoverMouseCell(0, 2);
  NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.WaitProperty("Enabled", true, 6000);
  let cancelIcon = NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.wText;
  if(aqObject.CompareProperty(cancelIcon, cmpEqual, "Cancel", true,3)){
    Log.Checkpoint("Delete Icon is displayed");
     }
  else{
    Log.Error("Delete Icon is not displayed");
    }
});

Then("Release frame and Undo icon should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Main.PTBackOrderWizard_ReviewAndAction_Main_Group_Box_1.MainGroupBox, "WndCaption", cmpEqual, "Release");

  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_TabControl.tabMain.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products.PTBackOrderWizard_ReviewAndAction_TabControl_Tab_Products_ProductSummaryELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.HoverMouseCell(0, 3);
  NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.WaitProperty("Enabled", true, 6000);
  let undoIcon = NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.wText;
  if(aqObject.CompareProperty(undoIcon, cmpEqual, "Undo", true,3)){
    Log.Checkpoint("Undo Icon is displayed");
     }
  else{
    Log.Error("Undo Icon is not displayed");
    }
});

Then("I open the documents generated", function (){
   let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
   let DocumentRef1 = gridDocuments.wValue(0, 2).OleValue;
   let DocumentRef2 = gridDocuments.wValue(1, 2).OleValue; 
   
   var sFile = sFolder + DocumentRef1;
   aqFileSystem.CreateFolder(sFile);

   gridDocuments.DblClickCell(0, 2);
   Delay(5000);
   var invoice = Sys.Desktop.Picture();
   var invoicePath = aqString.Concat(sFile, "\\");
   invoice.SaveToFile(invoicePath + "PageTop.jpg" );
   
   Sys.Keys("[PageDown]");
   Delay(5000);
   var invoice = Sys.Desktop.Picture();
   var invoicePath = aqString.Concat(sFile, "\\");
   invoice.SaveToFile(invoicePath + "PageBottom.jpg" );
   
   Delay(5000);
   var sFile = sFolder + DocumentRef2;
   aqFileSystem.CreateFolder(sFile);

   gridDocuments.DblClickCell(1, 2);
   Delay(5000);
   var invoice = Sys.Desktop.Picture();
   var invoicePath = aqString.Concat(sFile, "\\");
   invoice.SaveToFile(invoicePath + "PageTop.jpg" );
   
   Sys.Keys("[PageDown]");
   Delay(5000);
   var invoice = Sys.Desktop.Picture();
   var invoicePath = aqString.Concat(sFile, "\\");
   invoice.SaveToFile(invoicePath + "PageBottom.jpg" );
});

When("I click on icon to the left of Ship To field", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_ShipToRoleLink.buttonImage.ClickButton();
});

Then("Create New Customer Wizard should be displayed", function verifyCustomerWizard(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm, "WndCaption", cmpEqual, "Create a new customer");
});

Then("I check the Create New Person checkbox", function createNewPeronCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CreateNewPerson.chkInternal.ClickButton();
});

Then("I select a Country {arg} and Type {arg}", function selectCountry_PersonType(country, type){
  let ddCountry = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Country.LookupSearchCombo;
  ddCountry.Click();
  ddCountry.ClickItem(country);
  ddCountry.Keys("[Tab]");
  
  let ddType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_PersonTypeID.LookupSearchCombo;
  ddType.Click();
  ddType.ClickItem(type);
  ddType.Keys("[Tab]");
});

Then("I enter Person name {arg}", function selectForenameFamilyNameeMail(forename){
  let anysize = 4;
  let charset = "abcdefghijklmnopqrstuvwxyz"; 
  randomPersonName="";
  for( let i=0; i < anysize; i++ )
  randomPersonName += charset[Math.floor(Math.random() * charset.length)];
  
  let randomNumber =  aqConvert.FloatToStr(Math.floor((Math.random() * 100) + 1));
  let email = aqString.concat(randomNumber,"@gmail.com") ;
  let randomEmail = aqString.Concat(aqString.ToLower(forename),(aqString.concat(randomPersonName,email)));
  
  let txtFirstName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Contact.PersonCustomerWizard.PersonCustomerWizard_PT_Group_Box_1.PTPersonNamesCustomerWizard.PTPersonNamesCustomerWizard_FirstName.txtInner;
  txtFirstName.Click();
  txtFirstName.EmbeddableTextBoxWithUIPermissions.SetText(forename);
  
  let familyName = randomPersonName.substring(0, 1).toUpperCase() + randomPersonName.substring(1);
  let txtFamilyName =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Contact.PersonCustomerWizard.PersonCustomerWizard_PT_Group_Box_1.PTPersonNamesCustomerWizard.PTPersonNamesCustomerWizard_FamilyName.txtInner;
  txtFamilyName.Click();
  txtFamilyName.EmbeddableTextBoxWithUIPermissions.SetText(familyName);
  
  let txtEmail = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_3.PTEmailAddressesCustomerWizard.PTEmailAddressesCustomerWizard_Email.txtInner;
  txtEmail.Click();
  txtEmail.SetText(randomEmail);
  txtEmail.Keys("[Tab]");
  
  let nameForeFamily = (aqString.concat(forename," "+familyName));
  companyName = (nameForeFamily+"\r\n");
});

Then("I click Next button", function clickGenericWizardFormNext(){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
});

Then("Address Details page should be displayed", function verifyAddressDetailsPage(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation, "Visible", cmpEqual, true);
});

Then("I enter {arg} in the House No, {arg} in Floor, {arg} in the Building field, {arg} in the Street Name", function enterAddress1(houseno, floor, buildingname, streetname){
  let txtHouseNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner;
  txtHouseNumber.Click();
  txtHouseNumber.SetText(houseno);
  
  let txtFloor =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner;
  txtFloor.Click();
  txtFloor.SetText(floor);
  
  let txtBuilding =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner;
  txtBuilding.Click();
  txtBuilding.SetText(buildingname);
  
  let txtStreetName =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner;
  txtStreetName.Click();
  txtStreetName.SetText(streetname);
  txtStreetName.Keys("[Tab]");
  
  let buildingFloor = (aqString.concat(buildingname," "+floor+"\r\n"));
  addressLine1 = buildingFloor;
  let houseStreet = (aqString.concat(houseno," "+streetname+"\r\n"));
  addressLine2 = houseStreet;
});

Then("I enter {arg} in the Town, {arg} in the County and a Postcode", function enterAddress2(town, county){
  let txtTown = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner;
  txtTown.Click();
  txtTown.SetText(town);
  addressLine3 = (town+"\r\n");
  
  let txtCounty =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner;
  txtCounty.Click();
  txtCounty.SetText(county);
  addressLine4 = (county+"\r\n");
  
  let randomStr1 =  aqConvert.FloatToStr(Math.floor((Math.random() * 100000) + 1));
  let txtPostcode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner;
  txtPostcode.Click();
  txtPostcode.EmbeddableTextBoxWithUIPermissions.SetText(randomStr1);
  addressLine5 = (randomStr1+"\r\n\r\n\r\n\r\n\r\n");
  txtPostcode.Keys("[Tab]");
});

Then("I click on Trading tab and set the Preferred Currency to {arg}", function setPreferredCurrency(currency){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.ClickTab("Trading");
  
  let txtPreferredCurrency = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_TabGroup.tabMain.Persons_Trading_OrderPreferences_Tab.Persons_Trading_OrderPreferences_Tab.Persons_Trading_OrderPreferences_Tab_PreferredCurrencyTypeID.LookupSearchCombo;
  txtPreferredCurrency.Click();
  txtPreferredCurrency.ClickItem(currency);
  txtPreferredCurrency.Keys("[Tab]");
});

Then("I click on Taxation sub tab and select the Country as {arg}", function selectTaxationCountry(country){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_TabGroup.tabMain.ClickTab("Taxation");
  
  let txtCountry = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_TabGroup.tabMain.Persons_Trading_Taxation_Tab.Persons_Trading_Taxation_Tab.Persons_Trading_Taxation_Tab_VATCountryID.LookupSearchCombo;
  txtCountry.Click();
  txtCountry.ClickItem(country);
  txtCountry.Keys("[Tab]");
});

Then("I create a new Account Profile as {arg}", function createAccountProfile(ledger){
  clickTabAccountProfiles();
  clickNew();
  enterLedgerAndFinish(ledger);
});

Then("new Company record should populate the Ship To, Bill To and End User Addresses", function (){
 let shipToAddress = aqConvert.VarToStr(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_ShipToNameAddress.PanelNameAndAddress.LabelName.get_Text());
 let billToAddress = aqConvert.VarToStr(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_BillToNameAddress.PanelNameAndAddress.LabelName.get_Text());
 let endUserAddress = aqConvert.VarToStr(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_LicenseeNameAddress.PanelNameAndAddress.LabelName.get_Text());
    
 let address1 = aqString.Concat(companyName,(aqString.concat(addressLine1, addressLine2)));
 let address2 = aqString.Concat(addressLine3 ,(aqString.concat(addressLine4 , addressLine5)));
 let address = aqString.concat(address1, address2);
 
  if((aqObject.CompareProperty(shipToAddress, cmpEqual, address, true,3)) && (aqObject.CompareProperty(billToAddress, cmpEqual, address, true,3)) && (aqObject.CompareProperty(endUserAddress, cmpEqual, address, true,3))){
    Log.Checkpoint("The Ship To, Bill To and End User Addresses are populated");
     }
    else{
    Log.Error("The Ship To, Bill To and End User Addresses are not populated");
    }
});


function clickTabAccountProfiles(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.ClickTab("Account Profiles");
}

function clickNew(){
   Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(13, 9);
}

function enterLedgerAndFinish(ledger){
  let ddLedger = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_363.PT_AccountsReceivableWizard.PT_AccountReceivableWizard_LedgerTypeID.LookupSearchCombo;
  ddLedger.Click();
  ddLedger.ClickItem(ledger);
  ddLedger.Keys("[Tab]");
  
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.Click();
}

Then("I check the Open on Finish checkbox", function openOnFinishCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonDisplay.chkInternal.ClickButton();
});

Then("I click Finish button", function clickGenericWizardFormFinish(){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.Click();
});

Then("I open the customer information panel", function openCustomerInformationPanel(){
  let gridCustomer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.Click();
 
  txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(companyName);
  
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( gridCustomer.Exists )
   {
    gridCustomer.DblClickCell(0, "Title");
   }
});

Then("I click on Identifiers tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Contact_Tab.PTPersons_Contact_Tab.PT_Persons_Contact_TopLeft_TabControl.tabMain.ClickTab("Identifiers");
});

Then("Account Number should have been allocated", function (){
  let accountNo = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Contact_Tab.PTPersons_Contact_Tab.PT_Persons_Contact_TopLeft_TabControl.tabMain.Persons_Contact_Identifiers.Persons_Contact_Identifiers.Persons_Contact_Identifiers_PersonIdentifiers.AptifyControlBase_Fill_Panel.flexSubType.get_Item(0, 3).OleValue;
  if(aqObject.CompareProperty(accountNo, cmpNotEqual, EmptyVariant, true,3)){
    Log.Checkpoint("Account Number has been allocated");
     }
  else{
    Log.Error("Account Number has not been allocated");
    }
});
 
Then("I enter Default PO Ref and click Apply", function enterDefaultoPo(){
  
  PORefInt = Project.Variables.POInt
  PORef = aqString.Concat("AUT", PORefInt)
  Project.Variables.POInt = Project.Variables.POInt+1
  Project.Variables.PORef = PORef
  
  let txtCodeRef = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSearch_CustomerLineRef.txtInner;
 
 txtCodeRef.Click();
 txtCodeRef.SetText(Project.Variables.PORef);
 Log.Message(Project.Variables.PORef);
 refCode = PORef;
 txtCodeRef.Keys("[Tab]");  

 Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_Order_Active_Button_ApplyPORef.Click();
});

Then("I select Order Process Type as {arg} and Order Type as {arg}", function selectOrderProcessOrderType(orderProcess, orderType){
  let ddOrderProcess = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderProcessTypeID.LookupSearchCombo;
  ddOrderProcess.Click();
  ddOrderProcess.ClickItem(orderProcess);
  ddOrderProcess.Keys("[Tab]");
  
  let ddOrderType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderTypeID.LookupSearchCombo;
  ddOrderType.Click();
  ddOrderType.ClickItem(orderType);
  ddOrderType.Keys("[Tab]");
});

Then("P\\/O Ref displayed should be as entered in the Default PO Ref", function verifyDefaultPoRef(){
  let poRefDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSearch_CustomerLineRef.txtInner.get_Text();

  if(aqObject.CompareProperty(refCode, cmpEqual, poRefDisplayed, true, 3))
  {
   Log.Checkpoint("P/O Ref is displayed as entered in the Default PO Ref");
  }
  else
  {
    Log.Error("P/O Ref is not displayed as entered in the Default PO Ref");
   }
});

Then("I search for records under Order Query", function searchRecordsOrderQuery(){
 // enterProductToSearch();
  enterCustomerToSearch();
  clickSearch();
});

Then("Order Type as {arg}, Order Status as {arg}, and Doc Ref {arg} should be displayed", function verifyOrderTypeStatusDocRef(orderTypePar, orderStatusPar, docRefPar){
  let orderType =  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderType.txtInner.get_Text();
  let orderStatus =  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderStatus.txtInner.get_Text();
  let docRef = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderProcessType.txtInner.get_Text();
  
  if( (aqObject.CompareProperty(orderType, cmpEqual, orderTypePar, true,3)) && (aqObject.CompareProperty(orderStatus, cmpEqual, orderStatusPar, true,3)) && (aqObject.CompareProperty(docRef, cmpEqual, docRefPar, true,3)) )
   {
    Log.Checkpoint("Order Type, Order Status or Doc Ref displayed are correct");
   }
  else{
      Log.Error("Order Type, Order Status or Doc Ref displayed are incorrect");
   } 
});

Then("Supply Value and Supply should be negative", function verifySupplyValue(){
  clickTransactionsTab();
  verifySupply();
});

function selectSeller(soldBy){
  let ddSoldBy = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_SoldByID.LookupSearchCombo;
 
  ddSoldBy.Click();
  ddSoldBy.ClickItem(soldBy);
  ddSoldBy.Keys("[Tab]");
}

/*function enterCustomerToSearch(){
  let gridCustomers = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomer = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  
  txtCustomer.Click();
  txtCustomer.SetText(company);
  txtCustomer.Keys("[Tab]");
 
  if( gridCustomers.Exists )
   {
    gridCustomers.DblClickCell(0, "Title");
   }
}*/



function clickTransactionsTab(){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.ClickTab("Transactions");
}

function verifySupply(){
  let gridTransactions = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRecords = gridTransactions.wRowCount;
  let i =0;
  for (i; i<totalRecords; i++)
  {
  let OrderId= gridTransactions.wValue(i, 34).OleValue; 
  if(orderIdDisplayed == OrderId)
  {
   let supplyValue = gridTransactions.wValue(i, 7).OleValue;
   let supply = gridTransactions.wValue(i, 9).OleValue;
   if( (aqObject.CompareProperty(Math.sign(supplyValue), cmpEqual, -1, true,3)) && (aqObject.CompareProperty(Math.sign(supply), cmpEqual, -1, true,3)) )
    {
      Log.Checkpoint("Supply Value and Supply are negative");
    }
   else{
     Log.Error("Supply Value and Supply are positive");
    }
  }
  }
}

Then("Order Date should be today, Currency Type should be {arg},and Billing Plan should be {arg}", function verifyOrderDateCurrencyBillingPlan(currencyTypePar, billingPlanPar){
  let OrderDate = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderDate.txtInner.get_Text();
  let CurrencyType  = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_CurrencyTypeID.LookupSearchCombo.get_Text();
  let BillingPlan = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_BillingPlanID.LookupSearchCombo.get_Text();
  
  if(aqObject.CompareProperty(OrderDate, cmpEqual, aqDateTime.Today(), true, 3)){
    Log.Checkpoint("Order Date is today's date");
     }
  else{
    Log.Error("Order Date is not today's date");
    }
    
  if(aqObject.CompareProperty(CurrencyType, cmpEqual, currencyTypePar, true, 3)){
    Log.Checkpoint("Currency Type is correct");
     }
  else{
    Log.Error("Currency Type is incorrect");
    }
    
    
  if(aqObject.CompareProperty(BillingPlan, cmpEqual, billingPlanPar, true, 3)){
    Log.Checkpoint("Billing Plan is correct");
     }
  else{
    Log.Error("Billing Plan is incorrect");
    } 
});

Then("I run Billing Wave Release", function runBillingWaveRelease(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_BillingWaveRelease.buttonImage.ClickButton();
  
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

Then("I enter P\\/O Reference {arg}, Quantity {arg}, seller {arg}", function enterPoRefQuantitySeller(poRefPar, quantityPar, soldBy){
  enterPOref(poRefPar)
  enterQuantity(quantityPar);
  selectSeller(soldBy);
});

Then("I select a Credit Reason {arg}", function enterCreditReason(creditReason){
  let ddCreditReason = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_PT_Group_Box_OrderTypeReasons.PTOrderItems_Detail_ReasonsForOrderType.PTOrderItems_Detail_ReaonsForOrderType_CreditReasonID.LookupSearchCombo;
  
  ddCreditReason.Click();
  ddCreditReason.ClickItem(creditReason);
  ddCreditReason.Keys("[Tab]");
});

Then("I select a Cancel Reason {arg}", function enterCancelReason(cancelReason){
  let ddCancelReason = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_PT_Group_Box_OrderTypeReasons.PTOrderItems_Detail_ReasonsForOrderType.PTOrderItems_Detail_ReaonsForOrderType_CancelReasonID.LookupSearchCombo;
  
  ddCancelReason.Click();
  ddCancelReason.ClickItem(cancelReason);
  ddCancelReason.Keys("[Tab]");
});

Then("Product name and Amount should be correctly displayed", function verifyProductAmount_Ledger(){
  let productDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 2).OleValue;
  let invoiceAmount = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 7).OleValue;

  if( (aqObject.CompareProperty(product, cmpEqual, productDisplayed, true, 3)) && (aqObject.CompareProperty(netValue , cmpEqual, invoiceAmount, true, 3)) )
    {
     Log.Checkpoint("Product and Amount displayed is correct");
    }
  else{
    Log.Error("Product or Amount displayed is incorrect");
    }
});


Then("I enter Quantity {arg} to credit", function enterQty(quantityPar){
  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  
  txtQuantity.Click();
  txtQuantity.SetText(quantityPar);
  quantity = quantityPar;
  txtQuantity.Keys("[Tab]");
});

Then("I select a Product {arg} to credit quantity {arg}", function (productPar, quantityPar){
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i;
  txtProduct.Click();
  txtProduct.SetText(productPar);
  product = productPar;
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {  
   if( gridProducts.wRowCount == 1 ){
     gridProducts.DblClickCell(0, "Title");
   }
   else{
     let records = gridProducts.wRowCount;
     for(i=0; i<records ; i++)
      {
        let supplyDisplayed = gridProducts.wValue(i, 5).OleValue;
        if(supplyDisplayed >= quantityPar)
        gridProducts.DblClickCell(i, "Title");
        break;
      }
    }

   }
});

Then("I retrieve the Net Value", function retrieveNetValue(){
 let netValueDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_TelerikGrid_CheckoutSummary.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(1, 6).OleValue;
 netValue = netValueDisplayed;
});


Then("Status bar above should display a message {arg}", function (param1){
 aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket_FormCaption.panel4Content.captionText, "WndCaption", cmpEqual, "Account Is On Hold");
});


Then("there should be an icon when hovered should indicate the line is held", function verifyHeldLine(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.HoverMouseCell(0, 10);
  NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.WaitProperty("Enabled", true, 6000);
  let heldIcon = NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.wText;
  let qtyHeld = aqString.concat(" "+OrderBasket.quantity," "+"Held")
  let qtyHeldDisplayed = heldIcon.split(".");

  if(aqObject.CompareProperty(qtyHeldDisplayed[1], cmpEqual, qtyHeld, true,3)){
    Log.Checkpoint("Line is Held");
     }
  else{
    Log.Error("Line is not Held");
    }
});

Then("available quantity should not be decreased", function verifyDecreasedQty(){
  let availableQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;

  if(aqObject.CompareProperty(availableQtyDisplayed, cmpEqual, OrderBasket.availableInventoryBefore, true, 3)){
    Log.Checkpoint("Available quantity has not decreased");
     }
  else{availableInventoryBefore

    Log.Error("Available quantity is decreased");
    }
});

Then("Line Item Status should be displayed as {arg}", function verifyLineItem(lineItemStatus){
  let gridOrderDetails = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRecords = gridOrderDetails.wRowCount;
  let i =0;
  for (i; i<totalRecords; i++)
  {
  let OrderId= gridOrderDetails.wValue(i, 33).OleValue; 
  if(OrderBasket.orderIdDisplayed == OrderId)
  {
   let LineItemStatusDisplayed = gridOrderDetails.wValue(i, 20).OleValue; 
   if(aqObject.CompareProperty(LineItemStatusDisplayed, cmpEqual, lineItemStatus, true, 3)){
    Log.Checkpoint("Line Item Status displayed is correct");
     }
    else{
    Log.Error("Line Item Status displayed is incorrect");
    }
  }
  
  }                    

});


Then("I check the Override Credit Status Check checkbox", function checkOverrideCreditStatusCheckCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_Order_OverrideCreditStatusCheck.chkInternal.ClickButton();
});

Then("Payment type should be On Account", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeID.LookupSearchCombo, "WndCaption", cmpEqual, "On Account");
});

Then("I select payment type {arg} and enter Cheque Number", function paymentByCheque(paymentType){
  selectPaymentType(paymentType);
  enterChequeNumber();
  clickApply();
});

function selectPaymentType(paymentType)
{
  let ddPaymentType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeID.LookupSearchCombo;
  
  ddPaymentType.Click();
  ddPaymentType.ClickItem(paymentType);
  ddPaymentType.Keys("[Tab]");
}



Then("I click on Toggle Zero Outstanding", function clickToggleZeroOutstanding(){
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(167, 14);
});

Then("Payment Reference and Base Value should be correctly displayed", function (){
  let gridLedger = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let paymentReferenceDisplayed = gridLedger.wValue(0, 4).OleValue;
  let ValueDisplayed = gridLedger.wValue(1, 8).OleValue;
  
  if( (aqObject.CompareProperty(paymentReferenceDisplayed, cmpEqual, chequeNumber, true, 3)) && (aqObject.CompareProperty(aqConvert.IntToStr(ValueDisplayed), cmpEqual , aqConvert.IntToStr(OrderBasket.TotalvalueOnCheckout), true, 3)) ){
    Log.Checkpoint("Payment Reference and Base Value displayed is correct");
     }
  else{
    Log.Error("Payment Reference and Base Value displayed is incorrect");
    }
});

Then("I click on the Document reference", function openDocumentInLedger(){
   let gridLedger = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
   let DocumentRef = gridLedger.wValue(1, 2).OleValue;


   let sFile = sFolder + DocumentRef;
   aqFileSystem.CreateFolder(sFile);

   gridLedger.ClickCell(1, 2);
   Delay(5000);
   var invoice = Sys.Desktop.Picture();
   var invoicePath = aqString.Concat(sFile, "\\");
   invoice.SaveToFile(invoicePath + "PageTop.jpg" );
   
   Sys.Keys("[PageDown]");
   Delay(5000);
   var invoice = Sys.Desktop.Picture();
   var invoicePath = aqString.Concat(sFile, "\\");
   invoice.SaveToFile(invoicePath + "PageBottom.jpg" );
});

When("I check Series Mode checkbox", function checkSeriesModeCheckbox(){
  let checkboxSeriesMode =   Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.fullSearch.ProductOTCSearching.ProductOTCSearching_SeriesMode.chkInternal;
  if( checkboxSeriesMode.wState == cbUnchecked  ){
    checkboxSeriesMode.ClickButton();
  }
});

When("I enter name in the search bar {arg}, {arg}", function enterTextToSearch(param1, param2){
   searchValue1 = param1;
   searchValue2 = param2;
   let txtSearch = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
   let productName = aqString.Concat(param1, " "+param2);
   txtSearch.Click();
   txtSearch.SetText(productName);
});



Then("data under title should begin with {arg}", function (param1){
  let title = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
  if(aqObject.CompareProperty(title, cmpContains, param1, true, 3)){
    Log.Checkpoint("Data displayed under title is correct");
    }
  else{
   Log.Error("Data displayed under title is incorrect");
   }
});

Then("columns like {arg} and {arg} should be displayed", function (identifier, seriesName){
  let columnIdentifier = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wColumn(4);
  let columnSeriesName = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wColumn(5) 
  if( (aqObject.CompareProperty(columnIdentifier, cmpEqual, identifier, true, 3)) && (aqObject.CompareProperty(columnSeriesName, cmpEqual, seriesName, true, 3)) ){
    Log.Checkpoint("Series Primary Identifier and Series Name columns are displayed");
    }
  else{
   Log.Error("Series Primary Identifier or Series Name columns are not displayed");
   }
});

When("I click on Search", function clickSearchButton(){
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
});

Then("Title column should be displayed", function (){
  let columnTitle = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wColumn(3);
  if( (aqObject.CompareProperty(columnTitle, cmpEqual, "Title", true, 3))){
    Log.Checkpoint("Title column is displayed");
    }
  else{
   Log.Error("Title column is not displayed");
   }
});

Then("Series Name column should be displayed with search string included", function (){
  let seriesNameDisplayed = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 5).OleValue;
  if(aqObject.CompareProperty(seriesNameDisplayed, cmpContains , searchValue1, false, 3) && (aqObject.CompareProperty(seriesNameDisplayed, cmpContains , searchValue2, false, 3)) ){
    Log.Checkpoint("Series Name column is displayed with search string included");
     }
  else{
    Log.Error("Series Name column is displayed without search string included");
    }
});

Then("I select Order Process Type as {arg}", function selectOrderProcessType(orderProcess){
  let ddOrderProcess = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderProcessTypeID.LookupSearchCombo;
  
  ddOrderProcess.Click();
  ddOrderProcess.ClickItem(orderProcess);
  ddOrderProcess.Keys("[Tab]"); 
}); 

Then("I add products in order basket and enter quantity {arg}", function addProducts_enterQty(quantityPar){
  selectPaperbackProduct();
  enterQuantity(quantityPar);
  clickAddButton();
  msgProductHasBeenOrdered();
  
  selectNYPWithStockProduct();
  enterQuantity(quantityPar);
  clickAddButton();
  msgProductHasBeenOrdered();

  selectNYPNoStockProduct();
  enterQuantity(quantityPar);
  clickAddButton();
  msgProductHasBeenOrdered();
 
  selectClosedWithStockProduct();
  enterQuantity(quantityPar);
  clickAddButton();
  msgProductHasBeenOrdered();
  
  selectTOSClosedProduct();
  enterQuantity(quantityPar);
  clickAddButton();
  msgProductHasBeenOrdered();
  
  selectOPOpenProduct();
  enterQuantity(quantityPar);
  clickAddButton();
  msgProductHasBeenOrdered();
  
  selectClosedNoStockProduct();
  enterQuantity(quantityPar);
  clickAddButton();
  msgProductHasBeenOrdered();
  
  selectOPClosedProduct();
  enterQuantity(quantityPar);
  clickAddButton();
  msgProductHasBeenOrdered();
  
  addProductsToArray();
});

 
function addProductsToArray(){
  let gridOrderBasket = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridOrderBasket.wRowCount;
  let i = 0;
  
  for (i; i < records; i++){
  arrayProducts[i] = gridOrderBasket.wValue(i, 8).OleValue;
  }
}


Then("all the products should be displayed in Order Basket as Supplied", function verifyProductsInOrderBasket(){
  let gridOrderBasket = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridOrderBasket.wRowCount;
  totalProducts = records;
  let i = 0;
  let j ;
  let passCount = 0;
  for(i; i<records; i++)
  {
    for(j = arrayProducts.length; j>0; j-- )
    {
      let productDisplayed = gridOrderBasket.wValue(i, 8).OleValue;
      if(productDisplayed == arrayProducts[j-1])
      {
         passCount +=1
      }
    }
  }
  
  if(passCount == records){
    Log.Checkpoint("All the products are displayed in Order Basket");
     }
  else{
    Log.Error("Not all the products are displayed in Order Basket");
    }
});


Then("I edit the orders and change the quantity to {arg}", function clickEditLine_enterQuantity(quantityPar){
  let gridOrderBasket = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridOrderBasket.wRowCount;
  let i = 0;
  for(i; i<records; i++)
  {
   gridOrderBasket.ClickCell(i, 0);
   enterQuantity(quantityPar);
   clickAddButton();
  }
});

Then("Order should not be posted to the Ledger", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  let failCount = 0;
  let i = 0
  for(i; i<records; i++){
    let docReference = radGridView.wValue(i, 2).OleValue;
    if(docReference != "0000000185Q"){
      failCount += 1
    }
  }
  
  if(failCount == records)
  {
    Log.Checkpoint("Order is not posted to the Ledger")
  }
  else
  {
    Log.Error("Order is posted to the Ledger")
  }
});

Then("Order Type should be Quotation", function (){
  let gridOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridOrderLines.wRowCount;
  let passCount = 0;
  
  for(let i = 0; i<records; i++){
    let docRefDisplayed = gridOrderLines.wValue(i, 8).OleValue;
    if(docRefDisplayed == OrderBasket.docInvoice){
       let orderTypeDisplayed = gridOrderLines.wValue(i, 22).OleValue;
       passCount +=1
    }
  }
  if(passCount == totalProducts){
    Log.Checkpoint("Order Type is Quotation for all the orders");
     }
    else{
    Log.Error("Order Type is not Quotation for all the orders");
    }
 
});

Then("Inventory should remain unchanged for all products in the order basket", function verifyInventoryForProducts(){
  clickFindProductButton();
  openPaperbackProductInformation();
  clickSaveAndCloseForm();
  closeSearchBox();
  
  clickFindProductButton();
  openNYPNoStockProductInformation();
  clickSaveAndCloseForm();
  closeSearchBox();
  
  clickFindProductButton();
  openNYPWithStockProductInformation();
  clickSaveAndCloseForm();
  closeSearchBox();
  
  clickFindProductButton();;
  openClosedWithStockProductInformation();
  clickSaveAndCloseForm();
  closeSearchBox();
  
  clickFindProductButton();
  openClosedNoStockProductInformation();
  clickSaveAndCloseForm();
  closeSearchBox();
  
  clickFindProductButton();
  openTOSClosedProductInformation();
  clickSaveAndCloseForm();
  closeSearchBox();
  
  clickFindProductButton();
  openOPOpenProductInformation();
  clickSaveAndCloseForm();
  closeSearchBox();
  
  clickFindProductButton();
  openOPClosedProductInformation();
  clickSaveAndCloseForm();
  closeSearchBox();
});

function selectPaperbackProduct()
{ 
  let lnkProductName =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  let gridProducts = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  lnkProductName.SetText("Amazing Jake and the Red Balloon");
  lnkProductName.Keys("[Tab]");
  let product = aqObject.GetPropertyValue(lnkProductName, "text");
  product1 = product;
  if(gridProducts.Exists)
  {
    gridProducts.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory1 = txtInventory;
}

function selectNYPNoStockProduct()
{
  let lnkProductName =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  let gridProducts = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  lnkProductName.SetText("RAVE NYP No Stock");
  lnkProductName.Keys("[Tab]");
  let product = aqObject.GetPropertyValue(lnkProductName, "text");
  product3 = product;
  if(gridProducts.Exists)
  {
    gridProducts.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory3 = txtInventory;
}
function selectNYPWithStockProduct()
{
  let lnkProductName =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  let gridProducts = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  lnkProductName.SetText("RAVE NYP With Stock");
  lnkProductName.Keys("[Tab]");
  let product = aqObject.GetPropertyValue(lnkProductName, "text");
  product2 = product;
  if(gridProducts.Exists)
  {
    gridProducts.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory2 = txtInventory;
}
function selectClosedWithStockProduct()
{
  let lnkProductName =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  let gridProducts = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  lnkProductName.SetText("RAVE Closed With Stock");
  lnkProductName.Keys("[Tab]");
  let product = aqObject.GetPropertyValue(lnkProductName, "text");
  product4 = product;
  if(gridProducts.Exists)
  {
    gridProducts.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory4 = txtInventory;
}
function selectClosedNoStockProduct()
{
  let lnkProductName =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  let gridProducts = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  lnkProductName.SetText("RAVE Closed No Stock");
  lnkProductName.Keys("[Tab]");
  let product = aqObject.GetPropertyValue(lnkProductName, "text");
  product7 = product;
  if(gridProducts.Exists)
  {
    gridProducts.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory7 = txtInventory;
}
function selectTOSClosedProduct()
{
  let lnkProductName =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  let gridProducts = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  lnkProductName.SetText("RAVE TOS Closed No Stock");
  lnkProductName.Keys("[Tab]");
  let product = aqObject.GetPropertyValue(lnkProductName, "text");
  product5 = product;
  if(gridProducts.Exists)
  {
    gridProducts.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory5 = txtInventory;
}
function selectOPOpenProduct()
{
  let lnkProductName =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  let gridProducts = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  lnkProductName.SetText("RAVE OP Open With Stock");
  lnkProductName.Keys("[Tab]");
  let product = aqObject.GetPropertyValue(lnkProductName, "text");
  product6 = product;
  if(gridProducts.Exists)
  {
    gridProducts.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory6 = txtInventory;
}
function selectOPClosedProduct()
{
  let lnkProductName =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  let gridProducts = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  lnkProductName.SetText("RAVE OP Closed With Stock");
  lnkProductName.Keys("[Tab]");
  let product = aqObject.GetPropertyValue(lnkProductName, "text");
  product8 = product;
  if(gridProducts.Exists)
  {
    gridProducts.DblClickCell(0, "Title");
  }
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  productInventory8 = txtInventory;
}


function clickAddButton(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();  
}

     
function clickFindProduct()
{
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  
}


function openPaperbackProductInformation()
{
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText("Amazing Jake and the Red Balloon");
  
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  
  if(productInventory1 == 0){
    productInventory1 = EmptyVariant;
  }
  let availableInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(availableInventory, cmpEqual, productInventory1, true, 3))
  {
    Log.Checkpoint("Inventory is unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
  
}

function openNYPNoStockProductInformation()
{
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText("RAVE NYP No Stock");
  
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory"); 

  if(productInventory3 == 0){
    productInventory3 = EmptyVariant;
  }  
  let availableInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(availableInventory, cmpEqual, productInventory3, true, 3))
  {
    Log.Checkpoint("Inventory is unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}
function openNYPWithStockProductInformation()
{
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText("RAVE NYP With Stock");
  
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");   

    
  if(productInventory2 == 0){
    productInventory2 = EmptyVariant;
  } 
  let availableInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(availableInventory, cmpEqual, productInventory2, true, 3))
  {
    Log.Checkpoint("Inventory is unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}
function openClosedWithStockProductInformation()
{
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText("RAVE Closed With Stock");
  
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");  
  
  if(productInventory4 == 0){
    productInventory4 = EmptyVariant;
  }
  let availableInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(availableInventory, cmpEqual, productInventory4, true, 3))
  {
    Log.Checkpoint("Inventory is unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}
function openClosedNoStockProductInformation()
{
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText("RAVE Closed No Stock");
  
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");

  if(productInventory7 == 0){
    productInventory7 = EmptyVariant;
  }
  let availableInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(availableInventory, cmpEqual, productInventory7, true, 3))
  {
    Log.Checkpoint("Inventory is unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}

function openTOSClosedProductInformation()
{
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText("RAVE TOS Closed No Stock");
  
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");

  if(productInventory5 == 0){
    productInventory5 = EmptyVariant;
  }
  let availableInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(availableInventory, cmpEqual, productInventory5, true, 3))
  {
    Log.Checkpoint("Inventory is unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}

function openOPOpenProductInformation()
{
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText("RAVE OP Open With Stock");
  
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  
  if(productInventory6 == 0){
    productInventory6 = EmptyVariant;
  }  
  let availableInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(availableInventory, cmpEqual, productInventory6, true, 3))
  {
    Log.Checkpoint("Inventory is unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}

function openOPClosedProductInformation()
{
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText("RAVE OP Closed With Stock");
  
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  
  if(productInventory8 == 0){
    productInventory8 = EmptyVariant;
  } 
  let availableInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Available").OleValue;
  if(aqObject.CompareProperty(availableInventory, cmpEqual, productInventory8, true, 3))
  {
    Log.Checkpoint("Inventory is unchanged");
  }
  else{
    Log.Error("Inventory has been downgraded");
  }
}

function closeSearchBox()
{
  if(Aliases.Aptify_Shell.SearchForm.Exists ){
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.cancelButton.ClickButton();
  }
}

Then("I close customer information panel", function closeInformationPanel(){
  clickSaveAndCloseForm();
  clickSaveAndCloseForm();
});


When("I search for transactions for Customer {arg}", function searchCustomer_OrderQuery(customer){
  let gridCustomers = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomer = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  
  txtCustomer.Click();
  txtCustomer.SetText(customer);
  txtCustomer.Keys("[Tab]");
 
  if( gridCustomers.Exists )
   {
    gridCustomers.DblClickCell(0, "Title");
   }
});

When("I select Order Process Type as {arg}", function selectOrderProcessType_OrderQuery(orderProcessType){
  let ddOrderProcessType = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_OrderProcessType.ucCombo;
  
  ddOrderProcessType.Click();
  ddOrderProcessType.ClickItem(orderProcessType);
  ddOrderProcessType.Keys("[Tab]");
});

When("I select Order Type as {arg}", function enterOrderType(orderType){
  ddOrderType = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_OrderType.ucCombo;
  
  ddOrderType.Click();
  ddOrderType.ClickItem(orderType);
  ddOrderType.Keys("[Tab]");
});

When("I click Search", function clickOnSearchButton(){
 clickSearch();
});

When("I select the Quotation order created", function selectQuotation(){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickRowIndicator(0);
  
  let PoRef = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_CustomerLinereference.txtInner.get_Text();
  poRefOrderQuery = PoRef;
});

When("I click on Release Quotes from Order Release tab", function clickReleaseQuotes_OrderRelease(){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(366, 21);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(56, 79);
});

Then("Pop-up window My Pending Basket should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessageGrid, "WndCaption", cmpEqual, "My pending baskets");
});

Then("I click refresh on my pending basket until the record is displayed", function refreshMyPendingBasket(){
  let gridPendingBasket = Aliases.Aptify_Shell.MessageGrid.listViewPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

  while( gridPendingBasket.wRowCount == 0 ){
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  }
});

Then("Open basket button should be enabled", function verifyOpenBasketButton(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessageGrid.Button1, "Enabled", cmpEqual, true);
});

Then("I click on Open Basket", function clickOpenBasket(){
  Aliases.Aptify_Shell.MessageGrid.Button1.ClickButton();
});

Then("I make payment", function makePayment(){
  let paymentType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeID.LookupSearchCombo.WndCaption;
  if(paymentType == "Check/Cheque"){
    enterChequeNumber();
    ClickApply();
  }
});

Then("I close open order query and my pending basket windows", function closeOrderQuery_PendingBasket(){
  Aliases.Aptify_Shell.MessageGrid.Close();
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});

Then("I search for transactions for Customer {arg}", function searchCustomerTransactions(customer){
  let gridCustomers = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomer = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  
  txtCustomer.Click();
  txtCustomer.SetText(customer);
  txtCustomer.Keys("[Tab]");
 
  if( gridCustomers.Exists )
   {
    gridCustomers.DblClickCell(0, "Title");
   }
});

Then("I select Order Type as {arg}", function selectOrderType_OrderQuery(orderType){
  ddOrderType = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_OrderType.ucCombo;
  
  ddOrderType.Click();
  ddOrderType.ClickItem(orderType);
  ddOrderType.Keys("[Tab]");
});

Then("I click Search", function (){
  clickSearch();
});

Then("Order value should match the Total Order value on checkout", function (){
  let orderValue = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_TotalItemValue.txtInner.get_Text();
  
  if(aqObject.CompareProperty(orderValue, cmpEqual, supplyValue, true, 3)){
    Log.Checkpoint("Order value matches the Total Order value on checkout");
     }
    else{
    Log.Error("Order value does not match the Total Order value on checkout");
    }
});

Then("Order Status should be Completed Order", function verifyOrderStatus(){
   let orderStatus = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderStatus.txtInner.get_Text();
     
    if(aqObject.CompareProperty(orderStatus, cmpEqual, "Completed Order", true, 3)){
    Log.Checkpoint("Order Status is Completed Order");
     }
    else{
    Log.Error("Order Status is not Completed Order");
    }
});

Then("Transactions tab should display quotation and invoice record", function (){
  let gridTransactions = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let orderProcessType1 = gridTransactions.wValue(0, "Order Process Type").OleValue;
  let orderProcessType2 = gridTransactions.wValue(1, "Order Process Type").OleValue;
  let passCount = 0; 
  
  for( let i = 0; i < gridTransactions.wRowCount; i++ ){
  if( ((orderProcessType1 == "Quotation") && (orderProcessType2 == "Invoice"))	|| 	((orderProcessType1 == "Invoice") && (orderProcessType2 == "Quotation"))  )
  {
    passCount += 1;
  }
  }
  
  if(passCount == 2)
  {
    Log.Checkpoint("Quotation and Inovice records are displayed");
  }
  else
  {
    Log.Error("Quotation or Inovice records are not displayed");
  }
   
});

Then("I select Order Process Type as {arg} under Order Query to clear filters", function selectOrderProcessOrderQuery(orderProcessType){
 let ddOrderProcessType = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_OrderProcessType.ucCombo;
  
  ddOrderProcessType.Click();
  ddOrderProcessType.ClickItem(orderProcessType);
  ddOrderProcessType.Keys("[Tab]");
});

Then("I click on the Transactions tab", function clickTransactionTab_OrderQuery(){
  clickTransactionsTab();
});

Then("I select the first row", function selectFirstTransaction(){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickRowIndicator(0);
});

Then("I select a pending order", function selectOrder_PendingBasket(){
  let gridPendingBasket = Aliases.Aptify_Shell.MessageGrid.listViewPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i = 0;
  let records = gridPendingBasket.wRowCount;
  for (i; i<records; i++)
  {
    let customerRef = gridPendingBasket.wValue(i, 3).OleValue;  
    if( customerRef == poRefOrderQuery){
     gridPendingBasket.ClickRowIndicator(i);
     break; 
    }
  }
});

Then("I select a Product {arg}", function (productPar){
  selectProduct(productPar)
});

function selectProduct(productPar){
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
 
  txtProduct.Click();
  txtProduct.SetText(productPar);
  product = productPar;
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
}

Then("I retrieve the Supply Value", function retrieveSupplyValue_OrderBasket(){
  let supplyValueDisplayed =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 12).OleValue;
  supplyValue = supplyValueDisplayed; 
});

Then("I select Order Process Type as {arg} under Order Query", function (orderProcessType){
  let ddOrderProcessType = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_OrderProcessType.ucCombo;
  
  ddOrderProcessType.Click();
  ddOrderProcessType.ClickItem(orderProcessType);
  ddOrderProcessType.Keys("[Tab]");
});

When("I enter Default PO Ref {arg} and uncheck the Merge Invoices where possible checkbox", function enterDefaultPoUncheckMergeInvoices(poRefPar){
  clickOrderAttributesTab();
  enterDefaultPo(poRefPar);
  applyDefaultPo();
  uncheckMergeInvoicesPossible();
  clickRedArrow();
});

Then("I select transaction type {arg},  Sale type {arg}, a Product {arg}", function selectTransactionTypeSaleProduct(transactionType, sale, productPar){
  selectTransactionType(transactionType);
  selectSale(sale);
  selectProduct(productPar);
});

Then("I enter Quantity {arg} and seller {arg}", function enterQtySeller(quantityPar, soldBy){
  enterQuantity(quantityPar);
  selectSeller(soldBy);
});

Then("I add the order to basket", function ClickAdd(){
  clickAdd();
  msgProductHasBeenOrdered();
});

Then("I checkout the order", function clickLeftArrowCheckout(){
  clickLeftArrow();
  clickCheckout();
});

Then("I click on New Order", function clickNewOrderButton(){
  if(Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_NewOrder.buttonImage.ClickButton();
});

Then("I enter Default PO Ref {arg} and uncheck the Merge Invoices where possible checkbox", function enterDefaultRefUncheckMergeInvoices(poRefPar){
  clickOrderAttributesTab();
  enterDefaultPo(poRefPar);
  applyDefaultPo();
  uncheckMergeInvoicesPossible();
  clickRedArrow();
});

Then("I navigate to open account profile {arg}", function gotoAccountProfile(profileNamePar){
  clickTradingTab();
  clickAccountProfilesTab();
  OpenAccountProfile(profileNamePar);
});

Then("I change the credit status to {arg}", function (creditStatus){
  changeCreditStatus(creditStatus);
  clickSaveAndCloseForm();    
  clickSaveAndCloseForm();
});

Then("I click on Stopped Orders tab", function clickStoppedOrdersTab(){
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.ClickTab("Stopped Orders");
});

Then("I select orders and click on Release Held Lines", function selectOrders_clickReleaseHeldLines(){
  let gridStoppedOrders = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Tabs_StoppedOrderTab.PTAccountsReceivables_Tabs_StoppedOrderTab.PTAccountsReceivables_Tabs_StockToOrderTab_Telerik_List_View_StoppedOrders.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridStoppedOrders.wRowCount;
 
  let i = 0;
  for (i; i < records; i++){
    gridStoppedOrders.ClickRowIndicatorR(i);
    arrayOrderId[i] = gridStoppedOrders.wValue(i, 26).OleValue;
    Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Tabs_StoppedOrderTab.PTAccountsReceivables_Tabs_StoppedOrderTab.PTAccountsReceivables_Tabs_StockToOrderTab_Telerik_List_View_StoppedOrders.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(183, 18);
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();  
    
  }
  Log.Message(arrayOrderId);
   clickSaveAndCloseForm();
   clickSaveAndCloseForm(); 
});

Then("I click Find an Order", function clickFindAnOrder(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
});

Then("I search for transactions for Customer under Order Query", function (){
  enterCustomer_OrderQuery(OrderBasket.company);
  clickSearch();
});

Then("Order Status as Completed Order should be displayed for each transaction", function verifyCompletedOrderStatus(){
  let gridOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridOrderLines.wRowCount;
  let i =0;
  let j;
  let passCount = 0;
  let failCount ;
  for (i; i<records; i++) 
   {
     for(j= 0; j < arrayOrderId.length; j++)
     {
       let orderIdDisplayed = gridOrderLines.wValue(i, 35).OleValue;  
       if(orderIdDisplayed == arrayOrderId[j])
       {
         
        let OrderStatusDisplayed = gridOrderLines.wValue(i, 27).OleValue; 
        if(aqObject.CompareProperty(OrderStatusDisplayed, cmpEqual, "Completed Order", true, 3))
          {
            passCount += 1
          }
        }  
     }      
   } 
   if( passCount == arrayOrderId.length )
    {
      Log.Checkpoint("Order Status is Completed Order for each transaction");
    }
        
   else 
    {
      Log.Error("Order Status is not Completed Order for each transaction");
    } 
});
function clickOrderAttributesTab(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.ClickTab("Order Attributes");
}
function enterDefaultPo(poRefPar){     
  let txtPoRef = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_CustomerReference.txtInner;
  
  txtPoRef.Click();
  txtPoRef.SetText(poRefPar);
  referenceCode = poRefPar;
}

function applyDefaultPo(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_Order_Active_Button_ApplyPORef.Click();
}

function uncheckMergeInvoicesPossible()
{
 Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_AllowOrderMerging.chkInternal.wState = cbUnchecked;
}

function clickRedArrow(){
  Sys.WaitProcess("Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton", 2000);
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.buttonImage.ClickButton();
}

function clickAdd(){                       
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
}

function msgProductHasBeenOrdered(){
  if(Aliases.Aptify_Shell.dlg.Exists){
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
    }
}

function clickLeftArrow(){     
  Sys.WaitProcess("Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton", 2000);  
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();
  if(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.Exists){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();    
  }
    
  
}

function clickCheckout(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();
}

function OpenAccountProfile(profileNamePar){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists ){
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  let profileName = gridProfiles.wValue(i, 0).OleValue;  
  if(profileNamePar == profileName)
  {
    gridProfiles.DblClickRowIndicator(i);
  }
}
}
  else{
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  let profileName = gridProfiles.wValue(i, 0).OleValue;  
  if(profileNamePar == profileName)
  {
    gridProfiles.DblClickRowIndicator(i);
  }
}
  }

}

function changeCreditStatus(creditStatus){
  let ddCreditStatus = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_Tabs_TopArea_CreditStatusID.LookupSearchCombo;
  
  ddCreditStatus.Click();
  ddCreditStatus.ClickItem(creditStatus);
  ddCreditStatus.Keys("[Tab]");
}

function clickSaveAndCloseForm(){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
}
function enterCustomer_OrderQuery(){
  let gridCustomers = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomer = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  
  txtCustomer.Click();
  txtCustomer.SetText(OrderBasket.company);
  txtCustomer.Keys("[Tab]");
 
  if( gridCustomers.Exists )
   {
    gridCustomers.DblClickCell(0, "Title");
   }
}
function enterCustomer(){
  let gridCustomers = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomer = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  
  txtCustomer.Click();
  txtCustomer.SetText(OrderBasket.customer);
  txtCustomer.Keys("[Tab]");
 
  if( gridCustomers.Exists )
   {
    gridCustomers.DblClickCell(0, "Title");
   }
}

function clickTradingTab(){
   if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Trading");
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.ClickTab("Trading");
  }
}
function clickAccountProfilesTab(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.ClickTab("Account Profiles");
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.ClickTab("Account Profiles");
  }
}
Then("P\\/O Ref should be displayed as entered in the Default PO Ref", function (){
  let poRefDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSearch_CustomerLineRef.txtInner.get_Text();

  if(aqObject.CompareProperty(referenceCode, cmpEqual, poRefDisplayed, true, 3))
  {
   Log.Checkpoint("P/O Ref is displayed as entered in the Default PO Ref");
  }
  else
  {
    Log.Error("P/O Ref is not displayed as entered in the Default PO Ref");
   }
});

When("I navigate to open account profile {arg}", function openAccountProfile(profileNamePar){
  clickTradingTab();
  clickAccountProfilesTab();
  OpenAccountProfile(profileNamePar);
});

When("I change the credit status to {arg}", function setCreditStatusAndClose(creditStatus){
  changeCreditStatus(creditStatus);
  clickSaveAndCloseForm();    
  clickSaveAndCloseForm();
});

When("I search for transactions for Customer under Order Query", function (){
  enterCustomer(OrderBasket.customer);
  clickSearch();
});

When("I uncheck all the checkboxes except Held lines and Search", function uncheckFiltersOrderQuery(){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Supplied.chkInternal.wState = cbUnchecked;
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Unsupplied.chkInternal.wState = cbUnchecked;
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Backordered.chkInternal.wState = cbUnchecked;
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_StandingOrderRelease.chkInternal.wState = cbUnchecked;
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_BackorderRelease.chkInternal.wState = cbUnchecked;
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Adjustments.chkInternal.wState = cbUnchecked;
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_ServiceBilling.chkInternal.wState = cbUnchecked;
});

When("I click on Release Held from Order Release tab", function clickReleaseHeld(){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(378, 17);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(70, 36);
});

When("I click refresh on my pending basket until the record is displayed", function refreshPendingBasket(){
  while( Aliases.Aptify_Shell.MessageGrid.listViewPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount == 0 ){
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  }
});

When("I click on Open Basket", function clickOnOpenBasket(){
  Aliases.Aptify_Shell.MessageGrid.Button1.ClickButton();
});

When("I make payment", function payment(){
  let paymentType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeID.LookupSearchCombo.WndCaption;
  if(paymentType == "Check/Cheque"){
    enterChequeNumber();
    clickApply();
  }
});

function enterChequeNumber()
{
  let randomChequeNumber =  aqConvert.FloatToStr(Math.floor((Math.random() * 1000000)));
  let txtChequeNumber = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_ChequeNumber.txtInner;
  txtChequeNumber.Click();
  txtChequeNumber.SetText(randomChequeNumber);
  chequeNumber = randomChequeNumber;
}

function clickApply(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_Active_Button_Apply.Click();
}

When("I close open order query and my pending basket windows", function closeOrderQueryAndPendingBasket(){
  Aliases.Aptify_Shell.MessageGrid.Close();
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});

When("I select a held order", function selectHeldOrder(){
  let gridOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let records = gridOrderLines.wRowCount;
  let i =0;
  let failCount = 0;
  for (i; i<records; i++)
  {
    
    let orderStatus = gridOrderLines.wValue(i, 27).OleValue;  
    if( orderStatus == "Held Order" ){
     let orderIdDisplayed =  gridOrderLines.wValue(i, 33).OleValue; 
     orderId = orderIdDisplayed;
     gridOrderLines.ClickRowIndicator(i);
     break; 
    }
    else{
       failCount +=1
       if(failCount == records ){
         Log.Error("There are no held orders");
       }
      
    }
  }
});

When("I select same held order selected above", function (){
  let gridOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let records = gridOrderLines.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
    let ordersIdDisplayed = gridOrderLines.wValue(i, 33).OleValue;
    if( ordersIdDisplayed = orderId ){
      gridOrderLines.ClickRowIndicator(i);
      break;
    }
  }
  
});

Then("I open information panel of the Product", function (){
  clickFindProductBtn();
  searchProductTitle(product);
  clickSearchBtn();
  handleProductsGrid();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});


When("I click Yes to message stating {arg}", function (param1){
  let msgPopUp = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo; 
  if(msgPopUp.Exists){
    msgPopUp.ClickButton;
  }
});

Then("Order Status as Completed Order should be displayed for the transaction", function checkOrderStatus(){
  let OrderStatusDisplayed = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderStatus.txtInner.get_Text();
  
  if(aqObject.CompareProperty(OrderStatusDisplayed, cmpEqual, "Completed Order", true, 3)){
    Log.Checkpoint("Order Status is Completed Order");
     }
  else{
    Log.Error("Order Status is not Completed Order");
    }
});

Then("I close the Order Query", function (){
  closeOrderQuery();
});

When("I click on Find Product", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
});

When("I select the Product to release", function (){
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_ProductID.txtLink;
  
  txtProduct.Click();
  txtProduct.SetText(product);
  backorderProduct = product;
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

Then("I open Product information panel", function (){
  clickFindProductBtn();
  searchForProduct(OrderBasket.product);
  clickSearchBtn();
  handleProductsGrid();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});

function searchForProduct(){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(OrderBasket.product);
  product = OrderBasket.product;
}

When("I open product information panel", function (){
  clickFindProductBtn();
  searchForProduct(OrderBasket.product);
  clickSearchBtn();
  handleProductsGrid();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});

When("I open Product information panel", function (){
  clickFindProductBtn();
  searchProductTitle(product);
  clickSearchBtn();
  handleProductsGrid();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});

Then("I select Product to release", function (){
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_ProductID.txtLink;
  
  txtProduct.Click();
  txtProduct.SetText(product);
  backorderProduct = product;
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

Then("I click on Apply", function (){
 if(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.Exists){
    Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer_ActiveButton_Apply.Click()
  }
  else{
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Edit.PTBackOrderWizard_ReviewAndAction_Edit_Apply.Click();
  }
});

Then("I click on Apply Button", function (){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Edit.PTBackOrderWizard_ReviewAndAction_Edit_Apply.Click();
});

Then("I select Supply Site To {arg}", function (site){
  let ddSupplySiteTo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_ProductCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_SiteTransfer_SupplySiteIDTo.LookupSearchCombo;
  
  ddSupplySiteTo.Click();
  ddSupplySiteTo.ClickItem(site);
  ddSupplySiteTo.Keys("[Tab]");
});

When("I enter the From product", function (){
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_ProductID.txtLink;
  
  txtProduct.Click();
  txtProduct.SetText(fromProduct);
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

Then("quantity of Confirmed Backorders should be incremented for To product {arg}", function verifyConfirmedBackorderQty(productPar){
  openProductInformation(productPar);
  clickInventoryTab();
  clickOverwiewTab();
  verifyCustomer();
  clickSaveAndCloseForm();
  closeSearchBox();
});

Then("quantity of Confirmed Backorders should be increased for the product", function (){
  openProductPanel(product);
  clickInventoryTab();
  clickOverwiewTab();
  verifyCustomer();
  clickSaveAndCloseForm();
  closeSearchBox();
});



Then("correct values should be displayed under Supply value and Total on Orders Id page", function (){
  let orderItemSettingsLayout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab;
  let supplyValue = orderItemSettingsLayout.PTOrderItems_Detail_General_Tab_TotalItemValue.txtInner.Text.OleValue;
  let totals = orderItemSettingsLayout.PTOrderItems_Detail_General_Tab_PT_UnboundTextBox_FullTotalValue.textBox1.Text.OleValue;
 // if(aqObject.CompareProperty(totalsSupplyValue, cmpEqual,aqString.SubString(supplyValue,1,1), true,3))
  if(aqObject.CompareProperty(aqConvert.IntToStr(totalsSupplyValue), cmpEqual,aqConvert.IntToStr(supplyValue), true,3))
  {
    Log.Checkpoint("Correct value is display under supply value on order id page")
  }
  else{
    Log.Error("Incorrect value is display under supply value on order id page")
  }
  if(aqObject.CompareProperty(aqConvert.IntToStr(totalsSupplyValue), cmpEqual,aqConvert.IntToStr(totals), true,3))
  {
    Log.Checkpoint("Correct value should be display under totals on order id page")
  }
  else{
    Log.Error("Incorrect value should be display under supply value on order id page")
  }
});

Then("created order should be Proforma", function checkpointVerifyOrderProforma (){
  let radGridViewDocumentSource = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmDocumentSource =  radGridViewDocumentSource.wValue(0, "Document Source").OleValue;
  if(aqObject.CompareProperty(clmDocumentSource, cmpEqual,"Order Proforma", true,3))
  {
    Log.Checkpoint("Order has been display as Proforma")
  }
  else{
    Log.Error("Order is not display as proforma")
  }
});

Then("I enter Document Reference in Find field", function docRefLedgerTab (){
  let txtDocumentRef = Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel.simpleSearchCtl.txtSearch;
  txtDocumentRef.Keys(documentReference);
  txtDocumentRef.Keys("[Enter]");
});

When("I open the Zero price product to verify details {arg}", function (searchProduct){
  clickFindProductBtn()
  serachProductToVerify(searchProduct);
  checkIdentifierBooksType();
  checkSubTypeForPaperBack()
  retrieveProductInformation();
  checkNOListPrices();
  clickInventoryTab();
  checkInventorySites()
  checkInventorySupplyStatus();
  checkAvailableInventory();
  clickSaveAndClose();
});

function checkNOListPrices()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Prices");
  let radGridViewPrices = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCount = radGridViewPrices.wRowCount;
  if(rowCount != 0)
  {
    Log.Error("Selected product has list prices");
  }
}

When("I open the Gratis product to verify details {arg}", function (searchProduct){
  clickFindProductBtn()
  serachProductToVerify(searchProduct);
  checkIdentifierBooksType();
  checkListPricesBooksType();
  checkSubTypeForPaperBack()
  retrieveProductInformation();
  clickInventoryTab();
  checkInventorySites()
  checkInventorySupplyStatus();
  checkAvailableInventory();
  checkGratisCheckbox();
  clickSaveAndClose();
});

function checkGratisCheckbox()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Fulfilment");
  let productFulfilment = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_Fulfilment_Tabs.tabMain.PT_Products_OTC_Fulfilment1.PT_Products_OTC_Fulfilment1;
  let checkBox = productFulfilment.PT_ProductsOTC_Fulfilment_GratisAllowed.chkInternal;
  let checkboxGratisAllowed = checkBox.wState;
  
  if(checkboxGratisAllowed != 1)
  {
    Log.Error("checkbox gratis allowed is not checked under fulfillment tab");
  }
  let checkboxGratisOnly = productFulfilment.PT_Products_OTC_Fulfilment1_IsGratisOnly.chkInternal.wState;
  
  if(checkboxGratisOnly != 1)
  {
    Log.Error("checkbox gratis only is not checked under fulfillment tab");
  }
}




Then("I select Inventory Overview tab", function (){
  clickInventoryTab();
  clickOverviewtab();
});

When("I select product on backorder wizard", function (){
  let lnkProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_ProductID.txtLink.EmbeddableTextBoxWithUIPermissions;
  lnkProduct.SetText(product);
  lnkProduct.Keys("[Enter]");
  let radgridviewBackorderWizard = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radgridviewBackorderWizard.Exists)
  {
    let rowCount = radgridviewBackorderWizard.wRowCount;
    for(let i =0;i<rowCount;i++)
    {
      if(product == radgridviewBackorderWizard.wValue(i,"Title").OleValue)
      {
        radgridviewBackorderWizard.DblClickCell(0, "Title");
      }
    }
  }
});



When("I select first product on backorder wizard", function (){
  let lnkProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_ProductID.txtLink.EmbeddableTextBoxWithUIPermissions;
  lnkProduct.SetText(product1);
  lnkProduct.Keys("[Enter]");
  let radgridviewBackorderWizard = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radgridviewBackorderWizard.Exists)
  {
    let rowCount = radgridviewBackorderWizard.wRowCount;
    for(let i =0;i<rowCount;i++)
    {
      if(product1 == radgridviewBackorderWizard.wValue(i,"Title").OleValue)
      {
        radgridviewBackorderWizard.DblClickCell(0, "Title");
      }
    }
  }
});

Then("I enter second product name", function (){
  let lnkProduct = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID.txtLink;
  lnkProduct.SetText(product2);
  title = product2;
  lnkProduct.Keys("[Enter]");
  let radgridviewOrderQuery = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radgridviewOrderQuery.Exists)
  {
    let rowCount = radgridviewOrderQuery.wRowCount;
    for(let i = 0;i<rowCount;i++)
    {
      if(product == radgridviewOrderQuery.wValue(i,"Title").OleValue)
      {
        radgridviewOrderQuery.DblClickCell(i, "Title");
      }
    }
  }
});

Then("I enter first product name", function (){
  let lnkProduct = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID.txtLink;
  lnkProduct.SetText(product1);
  title = product1;
  lnkProduct.Keys("[Enter]");
  let radgridviewOrderQuery = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radgridviewOrderQuery.Exists)
  {
    let rowCount = radgridviewOrderQuery.wRowCount;
    for(let i = 0;i<rowCount;i++)
    {
      if(product == radgridviewOrderQuery.wValue(i,"Title").OleValue)
      {
        radgridviewOrderQuery.DblClickCell(i, "Title");
      }
    }
  }
});

Then("I enter product name", function (){
  let lnkProduct = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID.txtLink;
  lnkProduct.SetText(product);
  title = product1;
  lnkProduct.Keys("[Enter]");
  let radgridviewOrderQuery = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radgridviewOrderQuery.Exists)
  {
    let rowCount = radgridviewOrderQuery.wRowCount;
    for(let i = 0;i<rowCount;i++)
    {
      if(product == radgridviewOrderQuery.wValue(i,"Title").OleValue)
      {
        radgridviewOrderQuery.DblClickCell(i, "Title");
      }
    }
  }
});

When("I retrieve document reference", function (){
  let radGridViewDocRef = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  clmDocumentRef = radGridViewDocRef.wValue(0, "Document Reference").OleValue;
  documentRef = clmDocumentRef;
});

Then("I retrieve both the document references", function (){
  let radGridViewDocRef = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  clmDocumentRef = radGridViewDocRef.wValue(0, "Document Reference").OleValue;
  clmDocumentRef1 = radGridViewDocRef.wValue(1, "Document Reference").OleValue;
  docRefToCustomer = clmDocumentRef;
  docRefFromCustomer = clmDocumentRef1;
});

Then("I enter Reference for first From Customer", function (){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  txtReference.SetText(docRefFromCustomer);
});

Then("I enter Reference for first To Customer", function (){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  txtReference.SetText(docRefToCustomer);
});

Then("Line Item Status for From Customer should be {arg}", function (lineItemStatus){
  let radGridViewBackordersNegative = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewBackordersNegative.wRowCount;
  for(let i = 0;i<totalRows;i++)
  {
  
    let clmDocRef = radGridViewBackordersNegative.wValue(i,"Doc Ref").OleValue;
    if(clmDocRef == docRefFromCustomer)
    {
    let clmLineItemStatus = radGridViewBackordersNegative.wValue(i,"Line Item Status").OleValue;
    if(aqObject.CompareProperty(clmLineItemStatus, cmpEqual,lineItemStatus))
    {
    Log.Checkpoint("Line Item Status is display correctly");
    }
    else{
    Log.Error("Incorrect line item status is display");
    }
    }
  }
});

Then("Line Item Status for To Customer should be {arg}", function (lineItemStatus){
  let radGridViewBackordersNegative = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewBackordersNegative.wRowCount;
  for(let i = 0;i<totalRows;i++)
  {
  
    let clmDocRef = radGridViewBackordersNegative.wValue(i,"Doc Ref").OleValue;
    if(clmDocRef == docRefToCustomer)
    {
    let clmLineItemStatus = radGridViewBackordersNegative.wValue(i,"Line Item Status").OleValue;
    if(aqObject.CompareProperty(clmLineItemStatus, cmpEqual,lineItemStatus))
    {
    Log.Checkpoint("Line Item Status is display correctly");
    }
    else{
    Log.Error("Incorrect line item status is display");
    }
    }
  }
});

Then("Backorders with Negative number for From Customer", function (){
  let radGridViewBackordersNegative = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewBackordersNegative.wRowCount;
  for(let i = 0;i<totalRows;i++)
  {
  
    let clmDocRef = radGridViewBackordersNegative.wValue(i,"Doc Ref").OleValue;
    let clmLineItemStatus = radGridViewBackordersNegative.wValue(i,"Line Item Status").OleValue;
    if(clmDocRef == docRefFromCustomer && clmLineItemStatus == "Backorder Cancel" )
    {
    let clmBackorderNo = radGridViewBackordersNegative.wValue(i, "Backorders").OleValue;
    if(aqObject.CompareProperty(clmBackorderNo, cmpLess,0, true,3))
    {
    Log.Checkpoint("Backorder value has been negative number");
    }
    else{
    Log.Error("Backorder value is positive number");
    }
    }
  }
});

Then("Backorders with Positive number for To Customer", function (){
  let radGridViewBackorders = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewBackorders.wRowCount;
  for(let i = 0;i<totalRows;i++)
  {
  
    let clmDocRef = radGridViewBackorders.wValue(i,"Doc Ref").OleValue;
    let clmLineItemStatus = radGridViewBackorders.wValue(i,"Line Item Status").OleValue;
    if(clmDocRef == docRefToCustomer && clmLineItemStatus == "Backorder" )
    {
    let clmBackorderNo = radGridViewBackorders.wValue(i, "Backorders").OleValue;
    if(aqObject.CompareProperty(clmBackorderNo, cmpLess,0, true,3))
    {
    Log.Checkpoint("Backorder value has been negative number");
    }
    else{
    Log.Error("Backorder value is positive number");
    }
    }
  }
});

Then("I retrieve document references for both the products", function (){
  let radGridViewDocRef = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  clmDocumentRef = radGridViewDocRef.wValue(0, "Document Reference").OleValue;
  clmDocumentRef1 = radGridViewDocRef.wValue(1, "Document Reference").OleValue;
  docRefFromProduct = clmDocumentRef;
  docRefToProduct = clmDocumentRef1;
});

Then("I enter Reference for first To Product", function (){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  txtReference.SetText(docRefToProduct);
});

Then("Line Item Status for To product should be {arg}", function (lineItemStatus){
  let radGridViewBackordersNegative = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewBackordersNegative.wRowCount;
  for(let i = 0;i<totalRows;i++)
  {
  
    let clmDocRef = radGridViewBackordersNegative.wValue(i,"Doc Ref").OleValue;
    if(clmDocRef = docRefToProduct)
    {
    let clmLineItemStatus = radGridViewBackordersNegative.wValue(i,"Line Item Status").OleValue;
    if(aqObject.CompareProperty(clmLineItemStatus, cmpEqual,lineItemStatus))
    {
    Log.Checkpoint("Line Item Status is display correctly");
    }
    else{
    Log.Error("Incorrect line item status is display");
    }
    }
  }
});

Then("I enter Reference for first From Product", function (){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  txtReference.SetText(docRefFromProduct);
});

Then("Line Item Status for From product should be {arg}", function (lineItemStatusdoc){
  let radGridViewBackordersNegative = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewBackordersNegative.wRowCount;
  for(let i = 0;i<totalRows;i++)
  {
  
    let clmDocRef = radGridViewBackordersNegative.wValue(i,"Doc Ref").OleValue;
    if(clmDocRef == docRefFromProduct)
    {
    let clmLineItemStatus = radGridViewBackordersNegative.wValue(i,"Line Item Status").OleValue;
    if(aqObject.CompareProperty(clmLineItemStatus, cmpEqual,lineItemStatusdoc))
    {
    Log.Checkpoint("Line Item Status is display correctly");
    }
    else{
    Log.Error("Incorrect line item status is display");
    }
    }
  }
});

Then("Backorders with Negative number for From Product", function (){
  let radGridViewBackordersNegative = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewBackordersNegative.wRowCount;
  for(let i = 0;i<totalRows;i++)
  {
  
    let clmDocRef = radGridViewBackordersNegative.wValue(i,"Doc Ref").OleValue;
    let clmLineItemStatus = radGridViewBackordersNegative.wValue(i,"Line Item Status").OleValue;
    if(clmDocRef = docRefFromProduct && clmLineItemStatus == "Backorder Cancel" )
    {
    let clmBackorderNo = radGridViewBackordersNegative.wValue(i, "Backorders").OleValue;
    if(aqObject.CompareProperty(clmBackorderNo, cmpLess,0, true,3))
    {
    Log.Checkpoint("Backorder value has been negative number");
    }
    else{
    Log.Error("Backorder value is positive number");
    }
    }
  }
});


When("I verify product {arg} to be used", function (productPar){
  clickFindProductButton();
  openProductInformationPanel(productPar);
  checkIdentifierReg();
  verifyInventoryReg();
  verifyCurrentlySoldCheckboxReg();
  checkPriceReg();
  clickSaveAndClose();
  closeFormReg();
});

function verifyCurrentlySoldCheckboxReg(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Fulfilment");
  if(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_Fulfilment_Tabs.tabMain.PT_Products_OTC_Fulfilment1.PT_Products_OTC_Fulfilment1.PT_ProductsOTC_Fulfilment_IsSold.chkInternal.wState == cbUnchecked){
   Log.Error("Currently Sold Checkbox is not checked");  
  }
}

function checkPriceReg(){
 Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Prices");
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i = 0;
  var passCount;
  let records = radGridView.wRowCount;
  if(records == 0){
    Log.Error("Default Price Set does not exist");
  }
  else{
   for(i;i<records;i++){
   if(radGridView.wValue(i, 13).OleValue == false){
    passCount +=1;  
   }
  }  
  if(passCount == records){
   Log.Error("Default Price Set does not exist"); 
  }
  
  }  
}


function closeFormReg(){
  if( Aliases.Aptify_Shell.SearchForm.Exists){
    Aliases.Aptify_Shell.SearchForm.Close();
  }
}
function openProductInformationPanel(productPar){
  let txtProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;

  let i = 0;
  
  txtProduct.Click();
  txtProduct.SetText(productPar);
  product = productPar;
  txtProduct.Keys("[Tab]");
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists )
  { 
  let grid = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  grid.DblClickCell(0,1);
 }
}

function checkIdentifierReg(){
  let identifier = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_PrimaryIdentifierLabel.txtInner.Text.OleValue;
  if(identifier == "")
  {
    Log.Error("Product does not have an Identifier")
  }
}

function verifyInventoryReg(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory")
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  if(records == 0){
    Log.Error("No Inventory Sites exist");
  }
  else if(radGridView.wValue(0, 3).OleValue < 0){
    Log.Error("No available quantity");
  }
  else if(radGridView.wValue(0, 4).OleValue == "Not Yet Published"){
    Log.Error("Supply Status is not Open");
  }
}

When("I verify the products to be added", function (){
  var quotationProducts = ["RAVE Closed With Stock", "Amazing Jake and the Red Balloon", "RAVE NYP No Stock", "RAVE NYP With Stock", "RAVE Closed No Stock", "RAVE TOS Closed No Stock", "RAVE OP Open With Stock", "RAVE OP Closed With Stock"] ;

  let i = 0;
  var j = 0;
  for(i;i<quotationProducts.length;i++){
   clickFindProductButton();
       
   let txtProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
   txtProduct.Click();
   txtProduct.SetText(quotationProducts[i]);
   txtProduct.Keys("[Tab]");
   Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
   if(Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists ){ 
    let grid = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
     grid.DblClickCell(0,1); 
    }
   checkIdentifierReg();
   checkInventoryReg();
   verifyCurrentlySoldCheckboxReg();
   checkPriceReg();
   clickSaveAndClose();
   closeFormReg();    
  }
});

function checkInventoryReg(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory")
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  if(records == 0){
    Log.Error("No Inventory Sites exist");
  }
}

function openQuotationProduct(){
  let txtProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;

  let i = 0;
  
  txtProduct.Click();
  txtProduct.SetText(quotationProducts[i]);
  txtProduct.Keys("[Tab]");
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( Aliases.Aptify_Shell.SearchForm.Exists )
  { 
  let grid = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = grid.wRowCount;
  for(i;i<records;i++){
   if(productPar == grid.wValue(i, 1).OleValue){
     grid.DblClickCell(i,1);
     break
   }
  }  
 }
}

Then("I select the Product", function (){
  enterProductName();
});

function enterProductName(){
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;

  let i = 0;
  
  txtProduct.Click();
  txtProduct.SetText(product);
  txtProduct.Keys("[Tab]");
  if( Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.Exists )
  { 
  let grid = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
     grid.DblClickCell(0,2);
 }
}

Then("I select the Product to credit quantity {arg}", function (quantityPar){
 let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i;
  txtProduct.Click();
  txtProduct.SetText(product);
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {  
   if( gridProducts.wRowCount == 1 ){
     gridProducts.DblClickCell(0, "Title");
   }
   else{
     let records = gridProducts.wRowCount;
     for(i=0; i<records ; i++)
      {
        Log.Message("Y");
        let supplyDisplayed = gridProducts.wValue(i, 5).OleValue;
        if(supplyDisplayed >= quantityPar){
        gridProducts.DblClickCell(i, "Title");
        break
        }
      }
    }

   }
});

When("I verify the product {arg}", function (productPar){
  clickFindProduct();
  openProduct(productPar);
  checkIdentifier();
  //checkConfirmedBackorders();
  clickSaveAndClose();
  closeForm();
});


When("I verify the backorder product {arg}", function (productPar){
  clickFindProductButton();
  openProductInformationPanel(productPar);
  checkIdentifierReg();
  verifyBackorderInventoryReg();
  verifyCurrentlySoldCheckboxReg();
  checkPriceReg();
  clickSaveAndClose();
  closeFormReg();
});

function verifyBackorderInventoryReg(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory")
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  if(records == 0){
    Log.Error("No Inventory Sites exist");
  }
  else if(radGridView.wValue(0, 4).OleValue == "Open" && radGridView.wValue(0, 3).OleValue > 0){
    Log.Error("Supply Status should be 'Not Yet Published'");
  } 
}

Then("I select transaction type {arg}, Sale type {arg}, and Product", function (transactionType, sale){
  selectTransactionType(transactionType);
  selectSale(sale);
  enterProductName();
});

When("I verify backorder product {arg}", function (productPar){
  clickFindProductButton();
  openProductInformationPanel(productPar);
  checkIdentifierReg();
  verifyingInventory();
  verifyCurrentlySoldCheckboxReg();
  checkPriceReg();
  clickSaveAndClose();
  closeFormReg();
});


Then("I search for the customer with new address inserted and product", function (){
  enterProduct();
  enterCustomerToSearch(companyName);
  clickSearch();
});

Then("I set the Credit Status to {arg}", function (status){
  clickTradingTab();
  clickAccountProfilesTab();
  openStreamlineSterlingLedger();
  setCreditStatus(status);
});

function openStreamlineSterlingLedger(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists ){
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  let profileName = gridProfiles.wValue(i, 0).OleValue;  
  if("Streamline Sterling" == profileName)
  {
    gridProfiles.DblClickRowIndicator(i);
  }
}
}
  else{
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  let profileName = gridProfiles.wValue(i, 0).OleValue;  
  if("Streamline Sterling" == profileName)
  {
    gridProfiles.DblClickRowIndicator(i);
  }
}
  }  
}

function setCreditStatus(status){
  let ddCreditStatus = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_Tabs_TopArea_CreditStatusID.LookupSearchCombo;

  ddCreditStatus.Click();
  ddCreditStatus.ClickItem(status);
}

Then("Order details displayed should be correct", function (){
  let productDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 2).OleValue;
  let valueDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 8).OleValue;
  
  if(aqObject.CompareProperty(product, cmpEqual, productDisplayed, true, 3)){
    Log.Checkpoint("Product is correctly displayed");
     }
  else{
    Log.Error("Product is not correctly displayed");
    }
    
  
  if(aqObject.CompareProperty(TotalvalueOnCheckout, cmpEqual, valueDisplayed, true, 3)){
    Log.Checkpoint("Total Value is correctly displayed");
     }
  else{
    Log.Error("Total Value is not correctly displayed");
    }
});

Then("I open product information", function (){
  clickFindProductButton();
  enterProd();
  clickSearchBtn();
  handleProductsGrid();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});

function enterProd(){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(product);
  txtSearch.Keys("[Tab]");
}

Then("I open the first product record", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  let ProductSearchingWizard = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let textBox = ProductSearchingWizard.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  textBox.Click();
  textBox.SetText(product1);
 
  textBox.Text.OleValue;
  
  let btnSearch = ProductSearchingWizard.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton
  btnSearch.ClickButton();
  
  let radGridViewSearchProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewSearchProduct.Exists)
  {
    let rowCount = radGridViewSearchProduct.wRowCount;
    for(let i=0;i<rowCount;i++)
    {
    if(product1 == radGridViewSearchProduct.wValue(i, "Title").OleValue)
    {
    radGridViewSearchProduct.DblClickCell(0, "Title");
    break;
    }
    }
    }
});

Then("I open the second product record", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  let ProductSearchingWizard = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let textBox = ProductSearchingWizard.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  textBox.Click();
  textBox.SetText(product2);
 
  textBox.Text.OleValue;
  
  let btnSearch = ProductSearchingWizard.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton
  btnSearch.ClickButton();
  
  let radGridViewSearchProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewSearchProduct.Exists)
  {
    let rowCount = radGridViewSearchProduct.wRowCount;
    for(let i=0;i<rowCount;i++)
    {
    if(product2 == radGridViewSearchProduct.wValue(i, "Title").OleValue)
    {
    radGridViewSearchProduct.DblClickCell(0, "Title");
    break;
    }
    }
    }
});


Then("I select an Address Type {arg}", function (addressType){
  let ddAddressType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer.PTBackOrderWizard_ReviewAndAction_CustomerCopyOrTransfer_ShipToContactCardIDTo.LookupSearchCombo;

  ddAddressType.Click();
  ddAddressType.ClickItem(addressType);
  ddAddressType.Keys("[Tab]");
});

Then("I Open the product record", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  let ProductSearchingWizard = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let textBox = ProductSearchingWizard.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  textBox.Click();
  textBox.Keys(product);
 
  textBox.Text.OleValue;
  
  let btnSearch = ProductSearchingWizard.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton
  btnSearch.ClickButton();
  
  let radGridViewSearchProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewSearchProduct.Exists)
  {
    let rowCount = radGridViewSearchProduct.wRowCount;
    for(let i=0;i<rowCount;i++)
    {
    if(product == radGridViewSearchProduct.wValue(i, "Title").OleValue)
    {
    radGridViewSearchProduct.DblClickCell(0, "Title");
    break;
    }
    }
    }
});


Then("I enter Default PO Ref {arg} and uncheck Merge Invoices where possible checkbox", function (poRefPar){
  clickOrderAttributesTab();
  enterDefaultPo(poRefPar);
  applyDefaultPo();
  uncheckMergeInvoicesPossible();
});

When("I enter Default PO Ref {arg} and uncheck Merge Invoices where possible checkbox", function (poRefPar){
  clickOrderAttributesTab();
  enterDefaultPo(poRefPar);
  applyDefaultPo();
  uncheckMergeInvoicesPossible();
});

Then("I select a Contact card", function (){
  let ddContactCard = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Edit.PTBackOrderWizard_ReviewAndAction_Edit_ShipToContactCardIDTo.LookupSearchCombo;
  let contactCard = aqObject.GetPropertyValue(ddContactCard, "Caption");
  if(contactCard == "edit test"){
   ddContactCard.Click();
   ddContactCard.ClickItem("account one (Customer)");
   ddContactCard.Keys("[Tab]");
  }
  else{
   ddContactCard.Click();
   ddContactCard.ClickItem("edit test");
   ddContactCard.Keys("[Tab]");    
  }
});

Then("I checkout", function (){
 clickCheckout();
});


When("I open customer record for {arg} to verify profile {arg}", function (customerName, correctProfile){
  clickFindCustomerBtn();
  serachCustomerName(customerName);
  clickTradingTab();
  clickAccountProfilesTab();
  checkStatusCreditLimit(correctProfile);
});

function clickFindCustomerBtn()
{
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.ClickButton();
}

function serachCustomerName(customerName)
{
  let radPanel = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams;
  let textBox = radPanel.quickSearch.quickSearchText;
  textBox.SetText(customerName);
  customer = customerName
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();

  let radGridView = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  if(radGridView.Exists)
  {
  let count = radGridView.wRowCount;
  for(let i=0;i<count;i++)
  {
  
  if(customerName == radGridView.wValue(i, "Name").OleValue)
  {
    Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(i, "Name");
    break;
  }
  }
  }
}

function checkStatusCreditLimit(correctProfile)
{
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists ){
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  let profileName = gridProfiles.wValue(i, 0).OleValue;  
  if(correctProfile == profileName)
  {
    let profileStatus = gridProfiles.wValue(i, 3).OleValue;  
    let profileCreditLimit = gridProfiles.wValue(i, 5).OleValue;  
    if((profileStatus != "Account Open")|| (profileCreditLimit <= "£0.00"))
  {
    Log.Error("Account status is not open and/or credit limit is less than zero");
  }
  }
}
}
  else{
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  let profileName = gridProfiles.wValue(i, 0).OleValue;  
  if(correctProfile == profileName)
  {
    let profileStatus = gridProfiles.wValue(i, 3).OleValue;  
    let profileCreditLimit = gridProfiles.wValue(i, 5).OleValue;  
    if((profileStatus != "Account Open")||(profileCreditLimit  <=  "0"))
  {
    Log.Error("Account status is not open and/or credit limit is less than zero");
  }
  }
}
  }
}

When("I enter a Company name {arg}", function (company){
  let txtCompanyName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner;
  txtCompanyName.Click();
  txtCompanyName.SetText(company);
  companyName = company;
  txtCompanyName.Keys("[Tab]");
});

Then("I change the credit status {arg}", function (creditStatus){

if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists ){
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  let clmStatus = gridProfiles.wValue(i, "Status").OleValue;  
  if(clmStatus != creditStatus)
  {
  
  gridProfiles.DblClickCell(i,"Status");

  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_Tabs_TopArea_CreditStatusID.LookupSearchCombo.keys(creditStatus);
  clickSaveAndClose();
  }
}
}
  else{
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  let clmStatus = gridProfiles.wValue(i, "Status").OleValue;  
  if(clmStatus != creditStatus)
  {
  
  gridProfiles.DblClickCell(i,"Status");

  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_Tabs_TopArea_CreditStatusID.LookupSearchCombo.keys(creditStatus);
  clickSaveAndClose();
  }
}
}

});

Then("I set credit limit of {arg}", function (creditLimit){
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  gridProfiles.DblClickCell(i,"Credit Limit");

  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_CreditLimit.txtInner.Keys(creditLimit);
  clickSaveAndClose();
  
  }
});

function verifyingInventory(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory")
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  if(records == 0){
    Log.Error("No Inventory Sites exist");
  }
  else if(radGridView.wValue(0, 4).OleValue == "Open" && radGridView.wValue(0, 3).OleValue > 0){
    Log.Error("Supply Status should be 'Not Yet Published'");
  } 
  else if(radGridView.wValue(0, 2).OleValue <= 0){
    Log.Error("Physical Inventory should be more than 0");
  }
}

When("I generate a P\\/O Ref", function getPORef() {
  PORefInt = Project.Variables.POInt
  PORef = aqString.Concat("AUT", PORefInt)
  Project.Variables.POInt = Project.Variables.POInt+1
  Project.Variables.PORef = PORef
  
});

Then("I search for the customer reference", function (){
  enterCustomerRef();
  clickSearch();
});

function enterCustomerRef(){
 let txtCustomerRef = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Reference.txtInner;
 
 txtCustomerRef.Click();
 txtCustomerRef.Keys("a^a");
 txtCustomerRef.SetText(Project.Variables.PORef);
 txtCustomerRef.Keys("[Tab]");
}

Then("I select a backorder line with the current Customer Reference", function selectBackOrder_OrderQuery_CustRef(){
  let gridOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let records = gridOrderLines.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  let orderDisplayed = gridOrderLines.wValue(i, 6).OleValue;  
  if(orderDisplayed == /*product*/"Amazing Jake and the Lost Weekend")
   {
    let orderCustomerRef = gridOrderLines.wValue(i, 17).OleValue;  
    if( orderCustomerRef == Project.Variables.PORef ){
     gridOrderLines.ClickRowIndicator(i);
     break; 
    }
   }
  }
});
