var backorderValue;
var supplyValue
var heldValue1;
var heldValue2;
var product;
var sFolder = "\\booboo\\Handover_Bhanu\\IngentaCommercialApplication_New\\TestProject1\\Invoices\\";

When("I change account status {arg}", function (accountStatus){
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_Tabs_TopArea_CreditStatusID.LookupSearchCombo.ClickItem(accountStatus);
});

Then("Advice note should be generated for Held Orders", function (){
  var radGridViewDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmDocumentSource = radGridViewDocuments.wValue(0, "Document Source").OleValue;
  if(aqObject.CompareProperty(clmDocumentSource, cmpEqual,"Order Invoice Advice Note", true,3))
  {
    Log.Checkpoint("Advice note has been generated for held orders")
  }
  else{
    Log.Error("Advice note is not generated for held orders")
  }
});

Then("I open the Advice note generated for Held Orders", function (){
  var radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  
  var DocumentReference = radGridView.wValue(0, 2).OleValue;
  
  var sFolder = "C:\\Project\\IngentaCommercialApplication\\IngentaCommApp\\Invoice\\"
  var sFile = sFolder + DocumentReference
   aqFileSystem.CreateFolder(sFile);
   
  radGridView.DblClickCell(0, 2);
  Delay(7000);
  var referenceInvoice = Sys.Desktop.Picture();
  referenceInvoice.SaveToFile(sFile + "\\" + "FirstPage.jpg");
   
  Sys.Keys("[PageDown]");
   
  referenceInvoice.SaveToFile(sFile + "\\" + "SecondPage.jpg");
});



Then("I enter credit limit {arg}", function (creditLimit){
  var txtCreditLimit = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_CreditLimit.txtInner;
  txtCreditLimit.Keys(creditLimit);
});

Then("I click on shipping charges icon", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_TelerikGrid_CheckoutSummary.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 9);
});

Then("I select charge from the list offered on the checkout page", function (){
  
  var radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_Checkout_DispatchDetails.PT_PTOrders_OTCBasket_Checkout_DispatchDetails_Telerik_List_View_ChangeDispatch.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  if(radGridView.wValue(2, 0).OleValue != true)
  {
    radGridView.ClickCell(2,0);
  
  }
});

Then("I click Apply after selecting charge", function (){
  let orderBasketCheckoutDispatchChargeDetailsLayout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_Checkout_DispatchDetails;
  orderBasketCheckoutDispatchChargeDetailsLayout.PT_PTOrders_OTCBasket_Checkout_DispatchDetails_Active_Button_Apply.Click(64, 11);
  
});

Then("I click on Return To Checkout", function (){
  let orderBasketCheckoutDispatchChargeDetailsLayout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_Checkout_DispatchDetails;
  orderBasketCheckoutDispatchChargeDetailsLayout.PT_PTOrders_OTCBasket_Checkout_DispatchDetails_Active_Button_Cancel.Click(59, 13);
});



When("I retrieve total order value", function (){
  let value = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_TotalNetValue.textBox1.Text.OleValue;
  backorderValue = value;
});


Then("I select product to perform release backorder", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  closeTopSearchCriteria();
  radGridView.ClickRowIndicator(0);
  clickBackorderRelease();
  checkCheckBoxFromReleaseSection();
  clickBtnNextFromBackorder();
  checkCheckboxAndClickFinish();
  
});

Then("Order value for both the products should be correct", function (){
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var firstPrductOrderValue = radGridViewOrderLines.wValue(0, "Ordered Value").OleValue;
  var secondPrductOrderValue = radGridViewOrderLines.wValue(1, "Ordered Value").OleValue;
  
  var totalOrderValue = firstPrductOrderValue + secondPrductOrderValue
  if(aqObject.CompareProperty(aqConvert.IntToStr(totalOrderValue), cmpEqual,aqConvert.IntToStr(backorderValue), true,3))
  {
    Log.Checkpoint("Order value match with checkout page total value")
  }
  else{
    Log.Error("Order value is not match with checkout page total value")
  }
});

/*
Then("I change the account status {arg}", function (param1){
  var formTemplateForm = Aliases.Aptify_Shell.FormTemplateForm;
  var ultraTabControl = formTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain;
  ultraTabControl.ClickTab(3);
  var ultraTabControl2 = ultraTabControl.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain;
  ultraTabControl2.ClickTab(2);
  var radGridView = ultraTabControl2.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridView.DblClickCell(0, "Ledger");
  var ultraCombo = formTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_Tabs_TopArea_CreditStatusID.LookupSearchCombo;
  ultraCombo.ClickItem("Account Open");
  var ultraToolbarsDockArea = formTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top;
  ultraToolbarsDockArea.ClickItem("Data Form|Save Record and Close Form");
  radGridView.DblClickCell(1, "Ledger");
  ultraCombo.ClickItem("Account Open");
  ultraToolbarsDockArea.ClickItem("Data Form|Save Record and Close Form");
  radGridView.DblClickCell(2, "Ledger");
  ultraCombo.ClickItem("Account Open");
  ultraToolbarsDockArea.ClickItem("Data Form|Save Record and Close Form");
});

*/

When("I enter cheque Value", function (){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain;
  ultraTabControl.ClickTab(2);
  var orderBasketCheckoutPaymentLayout = ultraTabControl.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment;
  var txtTotalHeldValue = orderBasketCheckoutPaymentLayout.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_HeldTotalValue.textBox1.Text.OleValue
  orderBasketCheckoutPaymentLayout.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_Value.txtInner.Keys(txtTotalHeldValue)
});

When("I retrieve total order value for held order", function (){
  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let value1 = radGridView.wValue(0, "Supply Value").OleValue;
  let value2 = radGridView.wValue(1, "Supply Value").OleValue;
  heldValue1 = value1;
  heldValue2 = value2;
  
});

Then("Order status should be Held Order", function (){
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmOrderStatusFirstProduct = radGridViewOrderLines.wValue(0, "Order Status").OleValue;
  var clmOrderStatusSecondProduct = radGridViewOrderLines.wValue(1, "Order Status").OleValue;
  if((aqObject.CompareProperty(clmOrderStatusFirstProduct, cmpEqual,"Held Order", true,3))&&(aqObject.CompareProperty(clmOrderStatusSecondProduct, cmpEqual,"Held Order", true,3)))
  {
    Log.Checkpoint("Order Status for both the products are Held order")
  }
  else{
    Log.Error("Order Status for both the products are not Held order")
  }
});

Then("Invoice note should be generated for both the products", function (){
  var radGridViewDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmDocumentSource = radGridViewDocuments.wValue(0, "Document Source").OleValue;
  
  if(aqObject.CompareProperty(clmDocumentSource, cmpEqual,"Order Invoice", true,3))
  {
    Log.Checkpoint("Invoice note has been generated for held orders")
  }
  else{
    Log.Error("Invoice note is not generated for held orders")
  }
});

Then("Order status and Order value should be correct for backorder after releasing held orders", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
  var txtDocRef = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  txtDocRef.Keys(documentReference1);
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click(17, 10);
  
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var prductOrderValue = radGridViewOrderLines.wValue(0, "Ordered Value").OleValue;
  var clmLineItemStatus = radGridViewOrderLines.wValue(0, "Order Status").OleValue;
  
  if((aqObject.CompareProperty(clmLineItemStatus, cmpEqual,"Open Order", true,3))&&(aqObject.CompareProperty(aqConvert.IntToStr(prductOrderValue), cmpEqual,aqConvert.IntToStr(heldValue2), true,3)))
  {
    Log.Checkpoint("Order value and order status is correct")
  }
  else{
    Log.Error("Order value and order status is not correct")
  }
});

Then("I add inventory to backorder product", function (){
  clickInventoryFromFolderList();
  clickGoodsInFromInventory();
  enterDetailsGoodsInWizard();
});

function clickInventoryFromFolderList()
{
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Inventory");
}
function clickGoodsInFromInventory()
{
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton3.ClickButton();
}
function enterDetailsGoodsInWizard()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  let inventoryGoodsInWizard = Aliases.Aptify_Shell.GenericWizardForm;
  let wizardControl = Aliases.Aptify_Shell.GenericWizardForm.WizMain;
  wizardControl.btnNext.ClickButton();
  
  let inventoryGoodsInWizardLayout = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1;
  let lnkProduct = inventoryGoodsInWizardLayout.PTInventoryGoodsInWizard_Step1_ProductID.txtLink;
  lnkProduct.Keys(product);
  lnkProduct.Keys("[Enter]");
  let radGridView = aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2_new.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridView.Exists)
  {
    radGridView.DblClickCell(0,"Title")
  }
  
  let txtLooseQty = inventoryGoodsInWizardLayout.PTInventoryGoodsInWizard_Step1_LooseQty.txtInner;
  txtLooseQty.SetText("10");
  txtLooseQty.Keys("[Tab]");
  inventoryGoodsInWizardLayout.PTInventoryGoodsInWizard_Step1_Active_Button_Add.Click();
  wizardControl.btnFinish.ClickButton();
}

//held order

Then("I change the freight forwarder {arg}", function (freightForwarder){
   clickFindCustomer();
  enterCustomerName(customerName);
  clickDispatchMethods();
  changeFreightForwarder(freightForwarder);
  clickSaveAndClose();
});

function clickDispatchMethods()
{
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.Exists){
   Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Trading");
   Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.ClickTab("Despatch Methods");
  }
  else{
   Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.ClickTab("Trading"); 
   Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_TabGroup.tabMain.ClickTab("Dispatch Methods");
  }
}

function changeFreightForwarder(freightForwarder)
{
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.Exists){
   let txtFreightForwarder = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Tabs.PTCompanyDispatchMethods").WinFormsObject("Companies.Trading.DispatchMethods.Tab").WinFormsObject("Companies.Trading.DispatchMethods.Tab.FreightForwarderRoleID").WinFormsObject("txtLink");  
   txtFreightForwarder.Click();
   txtFreightForwarder.Keys("^a[BS]");
   txtFreightForwarder.Keys(freightForwarder);
   txtFreightForwarder.Keys("[Tab]");
  }
  else{
   let txtFreightForwarder = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_TabGroup.tabMain.WinFormsObject("Persons.Tabs.PTPersonDispatchMethods").WinFormsObject("Persons.Trading.DispatchMethods.Tab").WinFormsObject("Persons.Trading.DispatchMethods.Tab.FreightForwarderRoleID").WinFormsObject("txtLink");
   txtFreightForwarder.Click();
   txtFreightForwarder.Keys("^a[BS]");
   txtFreightForwarder.Keys(freightForwarder);
   txtFreightForwarder.Keys("[Tab]");
  }

}

Then("I release the held order for both the products", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  for(i;i<records;i++){
  radGridView.ClickRowIndicator(i);
  clickReleaseHeldOrder();
  clickBtnRefreshOpenBasket();
  clickBlueColurArrowForCheckout();
  applyShippingCharges();
  checkoutQuotationOrder();
  closeTopSearchCriteria();
  }
});

function clickReleaseHeldOrder()
{
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(416, 16);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(72, 37);
}
function applyShippingCharges()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_TelerikGrid_CheckoutSummary.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 9);
  
  var radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_Checkout_DispatchDetails.PT_PTOrders_OTCBasket_Checkout_DispatchDetails_Telerik_List_View_ChangeDispatch.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  if(radGridView.wValue(2, 0).OleValue != true)
  {
    radGridView.ClickCell(2,0);
  
  }
  
  let orderBasketCheckoutDispatchChargeDetailsLayout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_Checkout_DispatchDetails;
  orderBasketCheckoutDispatchChargeDetailsLayout.PT_PTOrders_OTCBasket_Checkout_DispatchDetails_Active_Button_Apply.Click(64, 11);

  orderBasketCheckoutDispatchChargeDetailsLayout.PT_PTOrders_OTCBasket_Checkout_DispatchDetails_Active_Button_Cancel.Click(59, 13);
}

Then("I retrieve the document references for both the products", function (){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let docRef1 = gridDocuments.wValue(0, 2).OleValue;
  documentReference1 = docRef1;
  
  let docRef2 = gridDocuments.wValue(1, 2).OleValue;
  documentReference2 = docRef2;
});

Then("Order value and Order status should be correct for first product", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
  var txtDocRef = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  txtDocRef.Keys(documentReference2);
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click(17, 10);
  
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var prductOrderValue = radGridViewOrderLines.wValue(0, "Ordered Value").OleValue;
  var clmLineItemStatus = radGridViewOrderLines.wValue(0, "Order Status").OleValue;
  
  if((aqObject.CompareProperty(clmLineItemStatus, cmpEqual,"Completed Order", true,3))&&(aqObject.CompareProperty(aqConvert.IntToStr(prductOrderValue), cmpEqual,aqConvert.IntToStr(heldValue1), true,3)))
  {
    Log.Checkpoint("Order value and order status is correct")
  }
  else{
    Log.Error("Order value and order status is not correct")
  }
});

Then("Order value and Order status should be correct for second product", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
  var txtDocRef = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  txtDocRef.Keys(documentReference1);
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click(17, 10);
  
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var prductOrderValue = radGridViewOrderLines.wValue(0, "Ordered Value").OleValue;
  var clmLineItemStatus = radGridViewOrderLines.wValue(0, "Order Status").OleValue;
  
  if((aqObject.CompareProperty(clmLineItemStatus, cmpEqual,"Completed Order", true,3))&&(aqObject.CompareProperty(aqConvert.IntToStr(prductOrderValue), cmpEqual,aqConvert.IntToStr(heldValue2), true,3)))
  {
    Log.Checkpoint("Order value and order status is correct")
  }
  else{
    Log.Error("Order value and order status is not correct")
  }
});

//only backorder

var customerName;
var documentRef;
var backorderValue;
var supplyValue;

When("I select Status {arg} under Information frame", function (status){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.PT_Persons_TopArea_StatusID.LookupSearchCombo.ClickItem(status);
  var txtName = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_FullName.txtInner.Text.OleValue;
  customerName = txtName;
});

When("I select Type {arg} under Information frame", function (type){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_CustomerTypeID.LookupSearchCombo.ClickItem(type);
});

When("I click on New button from Settings tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_Tab_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

When("I click on Dispatch methods tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_TabGroup.tabMain.ClickTab("Dispatch Methods");
});

When("I select Freight forwarder {arg}", function (param1){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain;
  ultraTabControl.ClickTab(3);
  var ultraTabControl2 = ultraTabControl.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain;
  ultraTabControl2.ClickTab(0);
  ultraTabControl = ultraTabControl2.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_TabGroup.tabMain;
  ultraTabControl.ClickTab(5);
  var ultraTextEditor = ultraTabControl.Persons_Tabs_PTPersonDispatchMethods.Persons_Trading_DispatchMethods_Tab.Persons_Trading_DispatchMethods_Tab_FreightForwarderRoleID.txtLink;
  ultraTextEditor.Click(91, 9);
  var embeddableTextBoxWithUIPermissions = ultraTextEditor.EmbeddableTextBoxWithUIPermissions;
  embeddableTextBoxWithUIPermissions.Click(51, 8);
  embeddableTextBoxWithUIPermissions.Click(35, 8);
  ultraTextEditor.Keys("European van services");
  embeddableTextBoxWithUIPermissions.Keys("[Tab]");
});

When("I save and close Person record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

When("I select charge from the list offered on the checkout page", function (){
  
  var radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_Checkout_DispatchDetails.PT_PTOrders_OTCBasket_Checkout_DispatchDetails_Telerik_List_View_ChangeDispatch.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  if(radGridView.wValue(2, 0).OleValue != true)
  {
    radGridView.ClickCell(2,0);
  }

});


When("I click Apply after selecting charge", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_Checkout_DispatchDetails.PT_PTOrders_OTCBasket_Checkout_DispatchDetails_Active_Button_Apply.Click();
});

When("I click on Return To Checkout", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_Checkout_DispatchDetails.PT_PTOrders_OTCBasket_Checkout_DispatchDetails_Active_Button_Cancel.Click();
  orderBasketCheckoutPaymentLayout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment;
  var txtValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_TotalNetValue.textBox1.Text.OleValue;
  backorderValue = txtValue;
  Log.Message(backorderValue);
  var txtNetValue = orderBasketCheckoutPaymentLayout.PT_PTOrders_OTCBasket_CheckoutPayment_NetValue.txtInner.Text.OleValue;
  supplyValue = txtNetValue;
  
});

When("I click Return To Checkout", function (){
  retrieveDespatchCharge();
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.WinFormsObject("PT.PTOrders.OTCBasket.Checkout.DispatchDetails").WinFormsObject("PT.PTOrders.OTCBasket.Checkout.DispatchDetails.Active Button.Cancel").Click();
});

When("I click on refresh button from Documents window", function (){
  Delay(70000)
  var aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(68, 16);
  aptify_Shell.RadDropDownMenu.Click(67, 184);
  var radGridViewDocumentsWindow = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var docRef = radGridViewDocumentsWindow.wValue(0, "Document Reference").OleValue;
  documentRef = docRef;
});


When("I enter document reference", function (){
  
  var txtDocRef = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  txtDocRef.Keys(documentRef);
});

When("I enter customer name", function (){
  var txtCustomer = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  txtCustomer.Keys(customerName);
});

When("I click on search button", function (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click(17, 10);
});


When("I select Organization", function (){
  var lnkOrganizationName = Aliases.Aptify_Shell.SubTypeTemplateForm.PTPersonTradingProfiles_Tabs_General.PTPersonTradingProfiles_OrganizationID.txtLink;
  lnkOrganizationName.Keys("reef books");
  lnkOrganizationName.Keys("[Tab]");
  var ddProfileID = Aliases.Aptify_Shell.SubTypeTemplateForm.PTPersonTradingProfiles_Tabs_General.PTPersonTradingProfiles_OrganizationTradingProfileID.LookupSearchCombo;
  ddProfileID.ClickItem("Private Individual");
  
  var panel = Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel;
  panel.cmdOkAndNew.ClickButton();
  
  lnkOrganizationName.Keys("alpha books");
  lnkOrganizationName.Keys("[Tab]");
  ddProfileID.ClickItem("Private Individual");
  
  panel.cmdOK.ClickButton();
});



Then("Order value should be correct", function (){
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var firstPrductOrderValue = radGridViewOrderLines.wValue(0, "Ordered Value").OleValue;
  var secondPrductOrderValue = radGridViewOrderLines.wValue(1, "Ordered Value").OleValue;
  var totalOrderValue = firstPrductOrderValue + secondPrductOrderValue
  if(aqObject.CompareProperty(aqConvert.IntToStr(totalOrderValue), cmpEqual,aqConvert.IntToStr(backorderValue), true,3))
  {
    Log.Checkpoint("Order value match with checkout page total value")
  }
  else{
    Log.Error("Order value is not match with checkout page total value")
  }
});

Then("I release backorder for both the products", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  for(i;i<records;i++){
  radGridView.ClickRowIndicator(i);
  clickBackorderRelease();
  checkCheckBoxFromReleaseSection();
  clickBtnNextFromBackorder();
  checkCheckboxAndClickFinish();
  closeTopSearchCriteria();
  }
});

function clickBackorderRelease()
{
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(387, 10);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(59, 15);
}
function checkCheckBoxFromReleaseSection()
{
  var formTemplateLayout = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Main;
  formTemplateLayout.PTBackOrderWizard_ReviewAndAction_Release.chkInternal.wState = cbChecked;
  formTemplateLayout.PTBackOrderWizard_ReviewAndAction_Main_OverrideProductSupplyStatus.chkInternal.wState = cbChecked;
}
function clickBtnNextFromBackorder()
{
  var wizardControl = Aliases.Aptify_Shell.GenericWizardForm.WizMain;
  wizardControl.btnNext.ClickButton();
}
function checkCheckboxAndClickFinish()
{
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_196.PTBackOrderWizard_ScheduleConfirm.PTBackOrderWizard_ScheduleConfirm_ReleaseToSeparateBillingWave.chkInternal.wState = cbChecked;
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
  var button = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne;
  button.ClickButton();
  button.ClickButton();
}


When("I create ledger {arg} for person record", function (ledger){
  
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.ClickTab(2);
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(6, 16);
  
  var ddLedger = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_363.PT_AccountsReceivableWizard.PT_AccountReceivableWizard_LedgerTypeID.LookupSearchCombo;
  ddLedger.Keys(ledger);
  ddLedger.Keys("[Tab]");
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

When("I enter customer name in Ship To field {arg}", function (CustomerName){
  var lnkShipTo = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_ShipToRoleID.txtLink;
  lnkShipTo.Keys(CustomerName);
  customerName = CustomerName
  lnkShipTo.Keys("[Tab]");
  var radGridView = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridView.Exists)
  {
    radGridView.DblClickCell(0, "Name");
  }
});

Then("Line Item status should be Backorder", function (){
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmLineItemStatusFirstProduct = radGridViewOrderLines.wValue(0, "Line Item Status").OleValue;
  var clmLineItemStatusSecondProduct = radGridViewOrderLines.wValue(1, "Line Item Status").OleValue;
  if((aqObject.CompareProperty(clmLineItemStatusFirstProduct, cmpEqual,"BackOrder", true,3))&&(aqObject.CompareProperty(clmLineItemStatusSecondProduct, cmpEqual,"BackOrder", true,3)))
  {
    Log.Checkpoint("Line Item Status for both the products are backorder")
  }
  else{
    Log.Error("Line Item Status for both the products are not backorder")
  }
});

When("I click on shipping charges icon", function (){
  
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_TelerikGrid_CheckoutSummary.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 9);
});



When("I enter Cheque number {arg}", function (chequeNumber){
  let txtChequeNumber = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_ChequeNumber.txtInner;
  txtChequeNumber.Keys(chequeNumber);
});

When("I select bank {arg}", function (bank){
  let ultraCombo = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_ClientBank.LookupSearchCombo;
  ultraCombo.ClickItem(bank);
  ultraCombo.Keys("[Enter]");
});

When("I click on Apply button from checkout window", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_Active_Button_Apply.Click(56, 12);
});

When("I open the Invoice note", function (){
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

When("I enter Default PO ref under order attributes tab {arg}", function (ref){
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain;
  ultraTabControl.pagetabOrderAttributes.Click();
  let orderBasketSummaryLayout = ultraTabControl.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order;
  let ultraTextEditor = orderBasketSummaryLayout.PTOrders_Summary_Order_Tab_CustomerReference.txtInner;
  ultraTextEditor.Keys(ref);
  orderBasketSummaryLayout.PTOrders_Summary_Order_Tab_Order_Active_Button_ApplyPORef.Click();

});

When("I click on red colour arrow", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.buttonImage.ClickButton();
});

When("I enter backorder product {arg}", function (productName){
  let lnkProductName = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  lnkProductName.Keys(productName);
  lnkProductName.Keys("[Tab]");
  product = productName
  let radGridViewProductOrderId = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  if(radGridViewProductOrderId.Exists)
  {
  let countRows = radGridViewProductOrderId.wRowCount;
  for(let i=0;i<countRows;i++)
  {
  if(productName == radGridViewProductOrderId.wValue(i, "Title").OleValue)
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(i, "Title");
    break;
  }
  }
  }
});

When("I click On Add button", function (){
  let btnAdd = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
  if(Aliases.Aptify_Shell.dlg.Exists)
  {
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
  }
});

When("I click on blue colour arrow", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();
  });

Then("Order status should be Completed order after release from backorders", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
  enterProductNameOnOrderQuery();
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmLineItemStatusFirstProduct = radGridViewOrderLines.wValue(0, "Order Status").OleValue;
  
  if(aqObject.CompareProperty(clmLineItemStatusFirstProduct, cmpEqual,"Completed Order", true,3))
  {
    Log.Checkpoint("Order Status for product is Completed order")
  }
  else{
    Log.Error("Order Status the product is not Completed order")
  }
});

function enterProductNameOnOrderQuery()
{
  let lnkProduct = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID.txtLink;

  lnkProduct.SetText(product);
  lnkProduct.Keys("[Enter]");
  let radGridView = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2_new.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridView.Exists)
  {
    radGridView.DblClickCell(0,"Title");
  }
  lnkProduct.Keys("[Tab]");
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click(17, 10);

}


Then("I click on Find Orders to enter document reference and click on search button", function (){
  
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
  var txtDocRef = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  txtDocRef.Keys(documentRef);
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click(17, 10);
});

Then("I open the invoice for first backorder product", function (){
  Delay(3000);
  var radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  
  var DocumentReference = radGridView.wValue(0, 2).OleValue;
  
  var sFolder = "C:\\Project\\IngentaCommercialApplication\\IngentaCommApp\\Invoice\\"
  var sFile = sFolder + DocumentReference
   aqFileSystem.CreateFolder(sFile);
   
  radGridView.DblClickCell(0, 2);
  Delay(7000);
  var referenceInvoice = Sys.Desktop.Picture();
  referenceInvoice.SaveToFile(sFile + "\\" + "FirstPage.jpg");
   
  Sys.Keys("[PageDown]");
   
  referenceInvoice.SaveToFile(sFile + "\\" + "SecondPage.jpg");
});

Then("I open the invoice for second backorder product", function (){
  Delay(3000);
  var radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  
  var DocumentReference = radGridView.wValue(1, 2).OleValue;
  
  var sFolder = "C:\\Project\\IngentaCommercialApplication\\IngentaCommApp\\Invoice\\"
  var sFile = sFolder + DocumentReference
   aqFileSystem.CreateFolder(sFile);
   
  radGridView.DblClickCell(1, 2);
  Delay(7000);
  var referenceInvoice = Sys.Desktop.Picture();
  referenceInvoice.SaveToFile(sFile + "\\" + "FirstPage.jpg");
   
  Sys.Keys("[PageDown]");
   
  referenceInvoice.SaveToFile(sFile + "\\" + "SecondPage.jpg");
});


//profroma


Then("Line Item status should be {arg} for Proforma order", function (lineItemStatus){
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmLineItemStatusFirstProduct = radGridViewOrderLines.wValue(0, "Line Item Status").OleValue;
  var clmLineItemStatusSecondProduct = radGridViewOrderLines.wValue(1, "Line Item Status").OleValue;
  if((aqObject.CompareProperty(clmLineItemStatusFirstProduct, cmpEqual,lineItemStatus, true,3))&&(aqObject.CompareProperty(clmLineItemStatusSecondProduct, cmpEqual,lineItemStatus, true,3)))
  {
    Log.Checkpoint("Line Item Status for both the products are Supply")
  }
  else{
    Log.Error("Line Item Status for both the products are not Supply")
  }
});

Then("Order value should be correct for Proforma order", function (){
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var firstPrductOrderValue = radGridViewOrderLines.wValue(0, "Ordered Value").OleValue;
  var secondPrductOrderValue = radGridViewOrderLines.wValue(1, "Ordered Value").OleValue;
  var totalOrderValue = firstPrductOrderValue + secondPrductOrderValue
  if(aqObject.CompareProperty(aqConvert.IntToStr(totalOrderValue), cmpEqual,aqConvert.IntToStr(supplyValue),true,3))
  {
    Log.Checkpoint("Order value match with checkout page total value")
  }
  else{
    Log.Error("Order value is not match with checkout page total value")
  }
});


Then("Order status should be converted to invoice", function (){
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmOrderStatusFirstProduct = radGridViewOrderLines.wValue(0, "Order Status").OleValue;
  var clmLOrderStatusSecondProduct = radGridViewOrderLines.wValue(1, "Order Status").OleValue;
  if((aqObject.CompareProperty(clmOrderStatusFirstProduct, cmpEqual,"Converted To Invoice", true,3))&&(aqObject.CompareProperty(clmLOrderStatusSecondProduct, cmpEqual,"Converted To Invoice", true,3)))
  {
    Log.Checkpoint("Order Status for both the products are converted to invoice after pay the proforma")
  }
  else{
    Log.Error("Order Status for both the products are not converted to invoice after pay the proforma")
  }
});

When("I enter supplied product {arg}", function (productName){
  let lnkProductName = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  lnkProductName.Keys(productName);
  lnkProductName.Keys("[Tab]");
  let radGridViewProductOrderId = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  if(radGridViewProductOrderId.Exists)
  {
  let countRows = radGridViewProductOrderId.wRowCount;
  for(let i=0;i<countRows;i++)
  {
  if(productName == radGridViewProductOrderId.wValue(i, "Title").OleValue)
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(i, "Title");
    break;
  }
  }
  }
});

Then("I pay the proforma for both the products", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  for(i;i<records;i++){
  radGridView.ClickRowIndicator(i);
  clickPayFromOrderActions();
  clickbtnFromOrderAmend();
  clickBtnRefreshOpenBasket();
  checkoutProformaOrder();
  closeTopSearchCriteria();
  }
});

function closeTopSearchCriteria()
{
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.Click(14, 9);
}
function clickPayFromOrderActions()
{
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(290, 17);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(48, 13);
}
function clickbtnFromOrderAmend()
{
  Aliases.Aptify_Shell.OrderAmendAddressBookLayout.PTOrders_OrderAmendAddressBook.PTOrders_OrderAmendAddressBook_Active_Button_OK.Click(88, 11);
}
function clickBtnRefreshOpenBasket()
{
  let radGridView = Aliases.Aptify_Shell.MessageGrid.listViewPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

  var i = 0;

  Sys.WaitProcess("Aliases.Aptify_Shell.MessageGrid", 10000);
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();

    Aliases.Aptify_Shell.MessageGrid.Button1.WaitProperty("Enabled", true, 10000);
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    Aliases.Aptify_Shell.MessageGrid.Button1.ClickButton();
}
function checkoutProformaOrder()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();
}

Then("Order status should be completed order for both the products", function (){
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmLineItemStatusFirstProduct = radGridViewOrderLines.wValue(0, "Order Status").OleValue;
  var clmLineItemStatusSecondProduct = radGridViewOrderLines.wValue(1, "Order Status").OleValue;
  if((aqObject.CompareProperty(clmLineItemStatusFirstProduct, cmpEqual,"Completed Order", true,3))&&(aqObject.CompareProperty(clmLineItemStatusSecondProduct, cmpEqual,"Completed Order", true,3)))
  {
    Log.Checkpoint("Order Status for both the products are Completed order")
  }
  else{
    Log.Error("Order Status for both the products are not Completed order")
  }
});



//quotation


Then("Line Item Status should be {arg} for quotation order", function (param1){
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmLineItemStatusFirstProduct = radGridViewOrderLines.wValue(0, "Line Item Status").OleValue;
  var clmLineItemStatusSecondProduct = radGridViewOrderLines.wValue(1, "Line Item Status").OleValue;
  if((aqObject.CompareProperty(clmLineItemStatusFirstProduct, cmpEqual,"Supply", true,3))&&(aqObject.CompareProperty(clmLineItemStatusSecondProduct, cmpEqual,"Supply", true,3)))
  {
    Log.Checkpoint("Line Item Status for both the products are Supply")
  }
  else{
    Log.Error("Line Item Status for both the products are not Supply")
  }
});

Then("Order value should be correct for quotation order", function (){
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var firstPrductOrderValue = radGridViewOrderLines.wValue(0, "Ordered Value").OleValue;
  var secondPrductOrderValue = radGridViewOrderLines.wValue(1, "Ordered Value").OleValue;
  var totalOrderValue = firstPrductOrderValue + secondPrductOrderValue
  if(aqObject.CompareProperty(aqConvert.IntToStr(totalOrderValue), cmpEqual,aqConvert.IntToStr(supplyValue),true,3))
  {
    Log.Checkpoint("Order value match with checkout page total value")
  }
  else{
    Log.Error("Order value is not match with checkout page total value")
  }
});

Then("I release quotation for both the products", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  for(i;i<records;i++){
  radGridView.ClickRowIndicator(i);
  clickReleaseQuotes();
  clickBtnRefreshOpenBasket();
  clickBlueColurArrowForCheckout();
  checkoutQuotationOrder();
  closeTopSearchCriteria();
  }
});

function clickBlueColurArrowForCheckout ()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();
}
function checkoutQuotationOrder()
{
  
  let orderBasketCheckoutPaymentLayout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment;
  orderBasketCheckoutPaymentLayout.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeID.LookupSearchCombo.ClickItem("Check/Cheque");
  
  let txtChequeNumber = orderBasketCheckoutPaymentLayout.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_ChequeNumber.txtInner;
  txtChequeNumber.Keys("Quotation12345");
  
  let splitContainer = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter;
  splitContainer.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_ClientBank.LookupSearchCombo.ClickItem("ABN");  
  orderBasketCheckoutPaymentLayout.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_Active_Button_Apply.Click(56, 12);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();
}

function clickReleaseQuotes()
{
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(419, 14);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(84, 87);
}

Then("Order Type should be quotation", function (){
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmOrderTypeFirstProduct = radGridViewOrderLines.wValue(0, "Order Type").OleValue;
  var clmOrderTypeSecondProduct = radGridViewOrderLines.wValue(1, "Order Type").OleValue;
  if((aqObject.CompareProperty(clmOrderTypeFirstProduct, cmpEqual,"Quotation", true,3))&&(aqObject.CompareProperty(clmOrderTypeSecondProduct, cmpEqual,"Quotation", true,3)))
  {
    Log.Checkpoint("Order Type for both the products is Quotation")
  }
  else{
    Log.Error("Order Type for both the products is not Quotation")
  }
});

When("I open the Quotation document", function (){
  var radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  
  var DocumentReference = radGridView.wValue(0, 2).OleValue;
  
  var sFolder = "C:\\Project\\IngentaCommercialApplication\\IngentaCommApp\\Invoice\\"
  var sFile = sFolder + DocumentReference
   aqFileSystem.CreateFolder(sFile);
   
  radGridView.DblClickCell(0, 2);
  Delay(7000);
  var referenceInvoice = Sys.Desktop.Picture();
  referenceInvoice.SaveToFile(sFile + "\\" + "FirstPage.jpg");
   
  Sys.Keys("[PageDown]");
   
  referenceInvoice.SaveToFile(sFile + "\\" + "SecondPage.jpg");
    
});

Then("I open the Invoice for first product", function (){
  var radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  
  var DocumentReference = radGridView.wValue(0, 2).OleValue;
  
  var sFolder = "C:\\Project\\IngentaCommercialApplication\\IngentaCommApp\\Invoice\\"
  var sFile = sFolder + DocumentReference
   aqFileSystem.CreateFolder(sFile);
   
  radGridView.DblClickCell(0, 2);
  Delay(7000);
  var referenceInvoice = Sys.Desktop.Picture();
  referenceInvoice.SaveToFile(sFile + "\\" + "FirstPage.jpg");
   
  Sys.Keys("[PageDown]");
   
  referenceInvoice.SaveToFile(sFile + "\\" + "SecondPage.jpg");
    
});

Then("I open the Invoice for second product", function (){
  var radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  
  var DocumentReference = radGridView.wValue(1, 2).OleValue;
  
  var sFolder = "C:\\Project\\IngentaCommercialApplication\\IngentaCommApp\\Invoice\\"
  var sFile = sFolder + DocumentReference
   aqFileSystem.CreateFolder(sFile);
   
  radGridView.DblClickCell(1, 2);
  Delay(7000);
  var referenceInvoice = Sys.Desktop.Picture();
  referenceInvoice.SaveToFile(sFile + "\\" + "FirstPage.jpg");
   
  Sys.Keys("[PageDown]");
   
  referenceInvoice.SaveToFile(sFile + "\\" + "SecondPage.jpg");
    
});

//When("I click Order Attributes tab", function (){
  //Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.ClickTab("Order Attributes");
//});

When("I enter Default PO Reference and click Apply", function (){
  var anysize = 3;
  var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomCode="";
  for( var i=0; i < anysize; i++ ){
  randomCode += charset[Math.floor(Math.random() * charset.length)];}
 
  let txtPoRef = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_CustomerReference.txtInner;
  txtPoRef.Click();
  txtPoRef.SetText(randomCode);
  txtPoRef.Keys("[Tab]");
  PoRef =  aqObject.GetPropertyValue(txtPoRef , "text");
  Log.Message(PoRef);
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_Order_Active_Button_ApplyPORef.Click();
});

When("I enter the product {arg} to Backorder", function (productPar){
  let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  
  txtProduct.Click();
  txtProduct.SetText(productPar);
  backOrderedProduct = productPar;
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

When("I click Add", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
    if(Aliases.Aptify_Shell.dlg.Exists){
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
    }
});

When("I enter the product {arg} to Supply", function (productPar){
  let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  
  txtProduct.Click();
  txtProduct.SetText(productPar);
  suppliedProduct = productPar;
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

When("I click on Shipping Charges icon", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_TelerikGrid_CheckoutSummary.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 9);
});

When("I select Dispatch Charge Details and Dispatch Method", function (){  
let dispatchCharge = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.WinFormsObject("PT.PTOrders.OTCBasket.Checkout.DispatchDetails").WinFormsObject("PT.PTOrders.OTCBasket.Checkout.DispatchDetails.DispatchDetails").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1").wValue(0, 7).OleValue;
if(dispatchCharge == EmptyVariant){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.WinFormsObject("PT.PTOrders.OTCBasket.Checkout.DispatchDetails").WinFormsObject("PT.PTOrders.OTCBasket.Checkout.DispatchDetails.Telerik List View.ChangeDispatch").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  let records = radGridView.wRowCount;
  let i = 0;
  let array = [];
  for(i; i<records; i++)
  {
    let charges = radGridView.wValue(i, 7).OleValue;
    array.push(charges);     
    let leastCharge = Math.min.apply(Math, array);    
    var pos = array.indexOf(leastCharge);
  }
   radGridView.ClickCell(pos,0);
}
  
});

When("I click Apply", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.WinFormsObject("PT.PTOrders.OTCBasket.Checkout.DispatchDetails").WinFormsObject("PT.PTOrders.OTCBasket.Checkout.DispatchDetails.Active Button.Apply").Click();
});


function retrieveDespatchCharge()
{
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.WinFormsObject("PT.PTOrders.OTCBasket.Checkout.DispatchDetails").WinFormsObject("PT.PTOrders.OTCBasket.Checkout.DispatchDetails.DispatchDetails").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
 
  let charge = radGridView.wValue(0, "Despatch Charge").OleValue;
  despatchCharge = charge;
}
When("I make payment via Cheque", function (){
  selectPaymentType();
  enterChequeNumber();
  clickApply();
});
function selectPaymentType()
{
  let ddPaymentType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeID.LookupSearchCombo;
  
  ddPaymentType.Click();
  ddPaymentType.ClickItem("Check/Cheque");
  ddPaymentType.Keys("[Tab]");
}
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
When("I retrieve Supply and Backordered Value", function (){
  let netSupplyValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_NetValue.txtInner.get_Text();
  supplyValue = netSupplyValue;

  let netBackorderValue = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTOrders.OrderBasket").WinFormsObject("Orders").WinFormsObject("splitContainerOuter").WinFormsObject("SplitterPanel", "", 2).WinFormsObject("panel4Summary").WinFormsObject("PTOrders.Summary").WinFormsObject("PTOrders.Summary.TabGroup").WinFormsObject("tabMain").WinFormsObject("PTOrders.Summary.Checkout.Tab").WinFormsObject("PTOrders.Summary.Checkout.Tab").WinFormsObject("PTOrders.Summary.Checkout.Tab.PT Group Box.PaymentOptionTemplate").WinFormsObject("PT.PTOrders.OTCBasket.CheckoutPayment").WinFormsObject("PT.PTOrders.OTCBasket.CheckoutPayment.BackorderValue").get_Text();
  backorderValue = netBackorderValue;
});

When("I click on Checkout", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();
});

When("I run Billing Wave", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_BillingWaveRelease.buttonImage.ClickButton();
  
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

When("I enter the Document Reference and Search", function (){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.WinFormsObject("OrderSearch.Form.SearchCriteria.Reference").WinFormsObject("txtInner");
  txtReference.Keys(docInvoice);
  txtReference.Keys("[Tab]");
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
});

When("I release the backorder", function (){
  selectBackorderedTransaction();
  clickOrderReleaseBackorders();
  clickRelease();
  clickOverrideProductSupplyStatus();
  clickNextForm();
  clickReleaseSeparateBillingWave();
  clickFinishForm();
  clickOk_JobProcessingDashboard();
  
});
function clickNextForm(){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
}

function clickFinishForm(){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
}
function selectBackorderedTransaction()
{
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  for(i;i<records;i++){
    if(radGridView.wValue(i,20).OleValue == "BackOrder"){
      radGridView.ClickRowIndicator(i);
    }
  }
}
function clickOverrideProductSupplyStatus(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Main.PTBackOrderWizard_ReviewAndAction_Main_OverrideProductSupplyStatus.chkInternal.ClickButton();
}
function clickOrderReleaseBackorders(){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(378, 15);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(48, 20);
}
function clickRelease(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Main.PTBackOrderWizard_ReviewAndAction_Release.chkInternal.wState = cbChecked;
}
function clickReleaseSeparateBillingWave(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_196.PTBackOrderWizard_ScheduleConfirm.PTBackOrderWizard_ScheduleConfirm_ReleaseToSeparateBillingWave.chkInternal.wState = cbChecked;
}
function clickOk_JobProcessingDashboard()
{
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
}
Then("Line Item Status should be Backorder and Supply", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  var j = 0;
  for(i;i<records;i++){ 
    if(radGridView.wValue(i,6).OleValue == backOrderedProduct){   
     let lineItemStatus= radGridView.wValue(i, 20).OleValue; 
     if(aqObject.CompareProperty(lineItemStatus, cmpEqual, "BackOrder", true, 3)){
      Log.Checkpoint("Line Item Status is Backorder");
     }
     else{
      Log.Error("Line Item Status is not Backorder");
	   }
    }
  }  

   for(j;j<records;j++){
    if(radGridView.wValue(j,6).OleValue == suppliedProduct){ 
      let lineItemStatus= radGridView.wValue(j, 20).OleValue;
     if(aqObject.CompareProperty(lineItemStatus, cmpEqual, "Supply", true, 3)){
      Log.Checkpoint("Line Item Status is Supply");
     }
     else{
      Log.Error("Line Item Status is not Supply");
	   }
    }
  } 
});

Then("Ordered Value displayed should be equal to Supply and Backordered Value", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  var j = 0;
  for(i;i<records;i++){ 
    if(radGridView.wValue(i,6).OleValue == backOrderedProduct){   
     let orderedValue= radGridView.wValue(i, 14).OleValue; 
     if(aqObject.CompareProperty(backorderValue, cmpEqual, orderedValue, true, 3)){
      Log.Checkpoint("Backordered Value displayed is Correct");
     }
     else{
      Log.Error("Backordered Value displayed is Incorrect");
	   }
    }
  }
  
   for(j;j<records;j++){
    if(radGridView.wValue(j,6).OleValue == suppliedProduct){ 
      let orderedValue= radGridView.wValue(j, 14).OleValue;
     if(aqObject.CompareProperty(supplyValue, cmpEqual, orderedValue, true, 3)){
      Log.Checkpoint("Supply Value displayed is Correct");
     }
     else{
      Log.Error("Supply Value displayed is Incorrect");
	   }
    }
  }  
});

When("I enter {arg} in Ship To field", function (companyPar){
 let txtCompany = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_ShipToRoleID.txtLink;
 
 txtCompany.Click();
 txtCompany.SetText(companyPar);
 company = companyPar;
 txtCompany.Keys("[Tab]");
 if(Aliases.Aptify_Shell.SearchForm.Exists){
   Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Name");
 }
});


When("I enter the product {arg} to deplete the stock", function (productPar){
  let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  
  txtProduct.Click();
  txtProduct.SetText(productPar);
  backOrderedProduct = productPar;
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   } 
});

function retrieveInventory()
{
  let stock = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.get_Text();
  availableInventory = stock;
}
When("I click on Find an Order", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
});

When("I enter quantity", function (){
  retrieveInventory();
  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  
  txtQuantity.Click();
  txtQuantity.SetText( aqConvert.StrToInt(availableInventory) + 10 );
  txtQuantity.Keys("[Tab]");
});

Then("Line Item Status should be Backorder for both the Products", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  for(i;i<records;i++){  
     let lineItemStatus= radGridView.wValue(i, 20).OleValue; 
     if(aqObject.CompareProperty(lineItemStatus, cmpEqual, "BackOrder", true, 3)){
      Log.Checkpoint("Line Item Status is Backorder");
     }
     else{
      Log.Error("Line Item Status is not Backorder");
	   }
  }
});

Then("Backordered Shipping Value should be equal to the Despatch Charge selected", function (){
   let shippingValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.WinFormsObject("PT.PTOrders.OTCBasket.CheckoutPayment.BackorderShippingValue").get_Text();

  if(aqObject.CompareProperty(shippingValue, cmpEqual, despatchCharge, true, 3)){
    Log.Checkpoint("Backordered Shipping Value is equal to the Despatch Charge selected");
  }
  else{
    Log.Error("Backordered Shipping Value is not equal to the Despatch Charge selected");
	}
});

function clickSearch(){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
}
Then("I release backorders", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  for(i;i<records;i++){
    if(radGridView.wValue(i,20).OleValue == "BackOrder"){
      radGridView.ClickRowIndicator(i);
        clickOrderReleaseBackorders();
        clickRelease();
        clickOverrideProductSupplyStatus();
        clickNextForm();
        clickReleaseSeparateBillingWave();
        clickFinishForm();
        clickOk_JobProcessingDashboard();
        clickSearch();
    }
  }
});

Then("I make payment via Cheque", function (){
  selectPaymentType();
  enterChequeNumber();
  clickApply();
});

Then("I click on Checkout", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();
});

Then("I run Billing Wave", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_BillingWaveRelease.buttonImage.ClickButton();
  
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});


//Then("I click on Find an Order", function (){
  //Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
//});

Then("I enter the Document Reference and Search", function (){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.WinFormsObject("OrderSearch.Form.SearchCriteria.Reference").WinFormsObject("txtInner");
  txtReference.Keys(docInvoice);
  txtReference.Keys("[Tab]");
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
});

Then("I open the Advice note created", function (){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i = 0;
  for(i;i<gridDocuments.wRowCount;i++){
    if((gridDocuments.wValue(i,3).OleValue == company) && (gridDocuments.wValue(i,4).OleValue == "Order Invoice Advice Note")){ 
      let docRef = gridDocuments.wValue(i, 2).OleValue;
      docInvoice = docRef;

      let sFile = sFolder + docRef;
      aqFileSystem.CreateFolder(sFile);

      gridDocuments.DblClickCell(i, 2);
      Delay(5000);
      var invoice = Sys.Desktop.Picture();
      var invoicePath = aqString.Concat(sFile, "\\");
      invoice.SaveToFile(invoicePath + "PageTop.jpg" );
   
      Sys.Keys("[PageDown]");
   
      Delay(5000);
      var invoice = Sys.Desktop.Picture();
      var invoicePath = aqString.Concat(sFile, "\\");
      invoice.SaveToFile(invoicePath + "PageBottom.jpg" );
      
      break;
    }
    
   }   
});

When("I enter product {arg} to goods in", function (productPar){
  let txtProduct =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID.txtLink;
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let formSearch = Aliases.Aptify_Shell.SearchForm;
   txtProduct.Click();
   txtProduct.SetText(productPar);
   productName = productPar;
   txtProduct.Keys("[Tab]");
    if( formSearch.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   } 
});

When("I check the Miscellaneous Goods In checkbox", function (){
  if(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_MiscellaneousGoodsIn.chkInternal.wState == 0){
    Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_MiscellaneousGoodsIn.chkInternal.ClickButton();
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  }
});

When("I enter loose packets {arg}", function (qtyLoosePar){
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_LooseQty.txtInner;
  
  txtQtyLoose.Click();
  txtQtyLoose.SetText(qtyLoosePar);
  qtyLoose = qtyLoosePar;
  txtQtyLoose.Keys("[Tab]");
});

When("I click on Add Button", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Active_Button_Add.Click();
  if(Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.Exists)
  {
    Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.ClickButton();
  }
});

When("I click on Goods In button", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton3.ClickButton();
});

When("I check Miscellaneous Goods In", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_MiscellaneousGoodsIn.chkInternal.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});

When("I enter quantity {arg}", function (quantityPar){
  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  
  txtQuantity.Click();
  txtQuantity.SetText(quantityPar);
  quantity = quantityPar;
  txtQuantity.Keys("[Tab]");
});

Then("I pay the Proforma", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  for(i;i<records;i++){
    radGridView.ClickRowIndicator(i);
     clickOrderActions_Pay();
     clickOk_ChangeProformaToInvoice();
     clickRefresh_OpenBasket();
     clickLeftArrow();
     selectPaymentType();
     enterChequeNumber();
     clickApply();
     clickCheckout();
     clickSearch();
  }
});
function clickCheckout(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();
}
function clickOrderActions_Pay(){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(287, 15);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(53, 9);
}
function clickOk_ChangeProformaToInvoice(){
  Aliases.Aptify_Shell.OrderAmendAddressBookLayout.PTOrders_OrderAmendAddressBook.PTOrders_OrderAmendAddressBook_Active_Button_OK.Click();
}

function clickRefresh_OpenBasket(){
  let radGridView = Aliases.Aptify_Shell.MessageGrid.listViewPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

  var i = 0;

  Sys.WaitProcess("Aliases.Aptify_Shell.MessageGrid", 10000);
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  let records = radGridView.wRowCount;
  for(i;i<records;i++){
    if(radGridView.wValue(i,3).OleValue == PoRef){
      radGridView.ClickRowIndicator(i);
      Aliases.Aptify_Shell.MessageGrid.Button1.WaitProperty("Enabled", true, 10000);
      Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
      Aliases.Aptify_Shell.MessageGrid.Button1.ClickButton();
    } 
  }    
}

function clickLeftArrow(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();
}
Then("Order status should be {arg}", function (param1){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  for(i;i<records;i++){
    radGridView.ClickRowIndicator(i);
   let orderStatus = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderStatus.txtInner.get_Text(); 
   if(aqObject.CompareProperty(orderStatus, cmpEqual, "Converted To Invoice", true, 3)){
    Log.Checkpoint("Order Status is 'Converted To Invoice'");
   }
   else{
    Log.Error("Order Status is not 'Converted To Invoice'");
	 }
    clickSearch();
  }  
});

Then("I open the Advice notes generated", function (){
let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
   
    let docRef = gridDocuments.wValue(0, 2).OleValue;
    documentReference1 = docRef;
      
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
    
    let documentRef = gridDocuments.wValue(1, 2).OleValue;
    documentReference2 = documentRef;
      
    let storeFile = sFolder + documentRef;
    aqFileSystem.CreateFolder(storeFile);
    
    gridDocuments.DblClickCell(1, 2);
    Delay(5000);
    var invoice = Sys.Desktop.Picture();
    var invoicePath = aqString.Concat(storeFile, "\\");
    invoice.SaveToFile(invoicePath + "PageTop.jpg" );
   
    Sys.Keys("[PageDown]");
   
    Delay(5000);
    var invoice = Sys.Desktop.Picture();
    var invoicePath = aqString.Concat(storeFile, "\\");
    invoice.SaveToFile(invoicePath + "PageBottom.jpg" );   
});

When("I select {arg} as Order Processs Type", function (orderProcess){
  let orderProcessType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderProcessTypeID.LookupSearchCombo;

  orderProcessType.Click();
  orderProcessType.ClickItem(orderProcess);
  orderProcessType.Keys("[Tab]");
});

Then("I release the backorders", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
        enterReference1AndSearch();
        radGridView.ClickRowIndicator(0);
        clickOrderReleaseBackorders();
        clickRelease();
        clickOverrideProductSupplyStatus();
        clickNextForm();
        clickReleaseSeparateBillingWave();
        clickFinishForm();
        clickOk_JobProcessingDashboard();
        
        clickClear();
        
        enterReference2AndSearch();
        radGridView.ClickRowIndicator(0);
        clickOrderReleaseBackorders();
        clickRelease();
        clickOverrideProductSupplyStatus();
        clickNextForm();
        clickReleaseSeparateBillingWave();
        clickFinishForm();
        clickOk_JobProcessingDashboard();
});
function enterReference1AndSearch(){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.WinFormsObject("OrderSearch.Form.SearchCriteria.Reference").WinFormsObject("txtInner");
  txtReference.Keys(documentReference1);
  txtReference.Keys("[Tab]");
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
}

function enterReference2AndSearch(){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.WinFormsObject("OrderSearch.Form.SearchCriteria.Reference").WinFormsObject("txtInner");
  txtReference.Keys(documentReference2);
  txtReference.Keys("[Tab]");
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
}

Then("I enter Customer name and Search", function (){
 clickClear();
  
 let txtCustomer =  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
 txtCustomer.SetText(company);
 txtCustomer.Keys("[Tab]");
 
 clickSearch();
});

function clickClear(){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.WinFormsObject("OrderSearch.Form.SearchCriteria.Clear").Click();
}

Then("Shipping Value should be equal to the Despatch Charge selected", function (){
  let shippingValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.WinFormsObject("PT.PTOrders.OTCBasket.CheckoutPayment.ShippingValue").get_Text();

  if(aqObject.CompareProperty(shippingValue, cmpEqual, despatchCharge, true, 3)){
    Log.Checkpoint("Shipping Value is equal to the Despatch Charge selected");
  }
  else{
    Log.Error("Shipping Value is not equal to the Despatch Charge selected");
	}
});

Then("I open the Proforma document generated", function (){
let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var i = 0;
  for(i;i<gridDocuments.wRowCount;i++){
      if((gridDocuments.wValue(i,3).OleValue == company) && (gridDocuments.wValue(i, 4).OleValue == "Order Proforma")){
      let docRef = gridDocuments.wValue(i, 2).OleValue;
      docInvoice = docRef;
  
      let sFile = sFolder + docRef;
      aqFileSystem.CreateFolder(sFile);

      gridDocuments.DblClickCell(i, 2);
      Delay(5000);
      var invoice = Sys.Desktop.Picture();
      var invoicePath = aqString.Concat(sFile, "\\");
      invoice.SaveToFile(invoicePath + "PageTop.jpg" );
   
      Sys.Keys("[PageDown]");
   
      Delay(5000);
      var invoice = Sys.Desktop.Picture();
      var invoicePath = aqString.Concat(sFile, "\\");
      invoice.SaveToFile(invoicePath + "PageBottom.jpg" );  
      
      break    
    }
    
  }
});

Then("Order status should be Completed Order", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
       enterReference1AndSearch();
       radGridView.ClickRowIndicator(0);
         
         let orderStatus1 = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderStatus.txtInner.get_Text(); 
          if(aqObject.CompareProperty(orderStatus1, cmpEqual, "Completed Order", true, 3)){
           Log.Checkpoint("Order status is 'Completed Order'");
          }
          else{
           Log.Error("Order status is not 'Completed Order'");
          }
          
      clickClear();
      enterReference2AndSearch();
      radGridView.ClickRowIndicator(0); 
        
          let orderStatus2 = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderStatus.txtInner.get_Text(); 
          if(aqObject.CompareProperty(orderStatus2, cmpEqual, "Completed Order", true, 3)){
           Log.Checkpoint("Order status is 'Completed Order'");
          }
          else{
           Log.Error("Order status is not 'Completed Order'");
          } 
});

When("I select {arg} as Order Type", function (orderType){
  let ddOrderType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderTypeID.LookupSearchCombo;
  
  ddOrderType.Click();
  ddOrderType.ClickItem(orderType);
  ddOrderType.Keys("[Tab]");
});
var arrayProducts = [];
When("I enter the product {arg}", function (productPar){
  let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  
  txtProduct.Click();
  txtProduct.SetText(productPar);
  productName = productPar;
  arrayProducts.push(productPar); 
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

Then("I open the Quotation generated", function (){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var i = 0;
  for(i;i<gridDocuments.wRowCount;i++){
      if((gridDocuments.wValue(i,3).OleValue == company) && (gridDocuments.wValue(i, 4).OleValue == "Order Quotation")){
      let docRef = gridDocuments.wValue(i, 2).OleValue;
      docInvoice = docRef;
  
      let sFile = sFolder + docRef;
      aqFileSystem.CreateFolder(sFile);

      gridDocuments.DblClickCell(i, 2);
      Delay(5000);
      var invoice = Sys.Desktop.Picture();
      var invoicePath = aqString.Concat(sFile, "\\");
      invoice.SaveToFile(invoicePath + "PageTop.jpg" );
   
      Sys.Keys("[PageDown]");
   
      Delay(5000);
      var invoice = Sys.Desktop.Picture();
      var invoicePath = aqString.Concat(sFile, "\\");
      invoice.SaveToFile(invoicePath + "PageBottom.jpg" );  
      
      break    
    }
    
  }
});

Then("I Release Quotes", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  for(i;i<records;i++){
    radGridView.ClickRowIndicator(i);
     clickOrderRelease_ReleaseQuotes();
     clickRefresh_OpenBasket();
     clickLeftArrow();
     selectPaymentType();
     enterChequeNumber();
     clickApply();
     clickCheckout();
     clickSearch();
  }
});

function clickOrderRelease_ReleaseQuotes(){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(366, 21);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(56, 79);
}
Then("I open the Invoices generated", function (){
let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
   
    let docRef = gridDocuments.wValue(0, 2).OleValue;
    documentReference1 = docRef;
      
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
    
    let documentRef = gridDocuments.wValue(1, 2).OleValue;
    documentReference2 = documentRef;
      
    let storeFile = sFolder + documentRef;
    aqFileSystem.CreateFolder(storeFile);
    
    gridDocuments.DblClickCell(1, 2);
    Delay(5000);
    var invoice = Sys.Desktop.Picture();
    var invoicePath = aqString.Concat(storeFile, "\\");
    invoice.SaveToFile(invoicePath + "PageTop.jpg" );
   
    Sys.Keys("[PageDown]");
   
    Delay(5000);
    var invoice = Sys.Desktop.Picture();
    var invoicePath = aqString.Concat(storeFile, "\\");
    invoice.SaveToFile(invoicePath + "PageBottom.jpg" ); 
});

Then("Supply Value displayed should be equal to the value on Checkout", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

  let supplyValue1 = radGridView.wValue(0, "Supply Value").OleValue;
  let supplyValue2 = radGridView.wValue(1, "Supply Value").OleValue;

  if((aqObject.CompareProperty(product1SupplyValue, cmpEqual, supplyValue1, true, 3)) && (aqObject.CompareProperty(product2SupplyValue, cmpEqual, supplyValue2, true, 3))){
    Log.Checkpoint("Supply Value displayed is equal to the value on Checkout for both the Products");
     }
  else{
    Log.Error("Supply Value displayed is not equal to the value on Checkout for both the Products");
	}  
  
  
  
});

function clickTransactionsTab(){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.ClickTab("Transactions");
}

Then("Quotation and Invoice process types should be displayed in Transactions tab", function (){ 
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  let passCount = 0;
  let count = 0;
  var i = 0;
  var j = 0;
for(j;j<records;j++){
 radGridView.ClickRowIndicator(j);
 clickTransactionsTab();
 
	let gridTransactions = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
	if(gridTransactions.wRowCount> 1){
		let orderProcessType1 = gridTransactions.wValue(0, "Order Process Type").OleValue;
		let orderProcessType2 = gridTransactions.wValue(1, "Order Process Type").OleValue;
			if( (orderProcessType1 == "Quotation") && (orderProcessType2 == "Invoice")){
				count += 1;
			}
			else if((orderProcessType1 == "Invoice") && (orderProcessType2 == "Quotation")){
				passCount += 1;
			}
  
			if(passCount == 1 || count == 1){
				Log.Checkpoint("Quotation and Inovice records are displayed");
			}
			else{
				Log.Error("Quotation or Inovice records are not displayed");
			}
			clickSearch(); 
	}	
	else{
		let orderProcessType1 = gridTransactions.wValue(0, "Order Process Type").OleValue;
		Log.Error("Quotation or Inovice record is not displayed");
		clickSearch(); 
	}
}  
 
});

When("I click on Left arrow", function (){
  retrieveSupplyValue();
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();
  Sys.WaitProcess("Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton", 2000);    
  if(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.Exists){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();    
  }
});

function retrieveSupplyValue()
{
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
    let supplyValue1 =  radGridView.wValue(0, "Supply Value").OleValue;
    product1SupplyValue = supplyValue1;
    let supplyValue2 =  radGridView.wValue(1, "Supply Value").OleValue;
    product2SupplyValue = supplyValue2;
}

Then("I open the Advice Note generated", function (){
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

Then("I change the Freight Forwarder to {arg}", function (freightForwarder){
  clickCustomerServices();
  clickFindCustomer();
  enterCompanyName(company);
  clickSearchBtn();
  handleProductsGrid();
  openDespatchMethods();
  editFreightForwarder(freightForwarder);  
  clickSaveAndClose();
});

function handleProductsGrid(){
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
}

function clickCustomerServices(){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Customer Services");
}
function clickFindCustomer(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.ClickButton();
}
function enterCompanyName(customer){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(customer);
  company = customer;
}
function enterCompany(company){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(company);
}
function openDespatchMethods()
{
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.Exists){
   Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Trading");
   Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.ClickTab("Despatch Methods");
  }
  else{
   Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.ClickTab("Trading"); 
   Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_TabGroup.tabMain.ClickTab("Dispatch Methods");
  }
}

function editFreightForwarder(freightForwarder){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.Exists){
   let txtFreightForwarder = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Tabs.PTCompanyDispatchMethods").WinFormsObject("Companies.Trading.DispatchMethods.Tab").WinFormsObject("Companies.Trading.DispatchMethods.Tab.FreightForwarderRoleID").WinFormsObject("txtLink");  
   txtFreightForwarder.Click();
   txtFreightForwarder.Keys("^a[BS]");
   txtFreightForwarder.SetText(freightForwarder);
   txtFreightForwarder.Keys("[Tab]");
  }
  else{
   let txtFreightForwarder = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_TabGroup.tabMain.WinFormsObject("Persons.Tabs.PTPersonDispatchMethods").WinFormsObject("Persons.Trading.DispatchMethods.Tab").WinFormsObject("Persons.Trading.DispatchMethods.Tab.FreightForwarderRoleID").WinFormsObject("txtLink");
   txtFreightForwarder.Click();
   txtFreightForwarder.Keys("^a[BS]");
   txtFreightForwarder.SetText(freightForwarder);
   txtFreightForwarder.Keys("[Tab]");
  }
}

When("I set Credit Status to {arg}", function (creditStatus){
  clickFindCustomer();
  enterCompanyName();
  clickSearchBtn();
  openStreamlineSterlingAccountProfile();
  setCreditStatus(creditStatus);
  clickSaveAndClose();
  clickSaveAndClose();
});

When("I check Override Credit Status Check checkbox", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_Order_OverrideCreditStatusCheck.chkInternal.ClickButton();
});

function openStreamlineSterlingAccountProfile(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Trading");
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.ClickTab("Trading");
  }
  
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.ClickTab("Account Profiles");
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.ClickTab("Account Profiles");
  }
  
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists){
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

function setCreditStatus(creditStatus){
  let ddCreditStatus = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_Tabs_TopArea_CreditStatusID.LookupSearchCombo;
  
  ddCreditStatus.Click();
  ddCreditStatus.ClickItem(creditStatus);
  ddCreditStatus.Keys("[Tab]");  
}

Then("I open the Ledger", function (){
  clickCustomerServices();
  clickFindCustomer();
  enterCompany(company);
  clickSearchBtn();
  handleProductsGrid();
  clickTradingTab();
  clickAccountProfilesTab();
  openStreamlineSterlingAccountProfile();
  clickLedgerTab();
  clickToggleZeroOutstanding();
  selectRecord();
});

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
function clickLedgerTab(){
 Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.ClickTab("Ledger");  
}
function clickToggleZeroOutstanding(){
Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(167, 14);  
}

function selectRecord(){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i = 0;
  for(i;i< radGridView.wRowCount;i++ ){
    let documentReference = radGridView.wValue(i, 2).OleValue;
    if(documentReference == docInvoice){
      radGridView.ClickRowIndicator(i);
    }
  }
  
}

Then("I retrieve Total Order Value", function (){
  let value = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_Total.textBox1.get_Text();
  totalOrderValue = value;
});

Then("products should be correctly displayed", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i = 0;
  let j = 0;
  let count = 0;
  let passCount = 0;
  let product1 = radGridView.wValue(0, 2).OleValue;
  let product2 = radGridView.wValue(1, 2).OleValue;

    for(j;j<arrayProducts.length;j++){
  		if( (product1 == arrayProducts[j] ) && (product2 == arrayProducts[j+1] )){
				count += 1;
			}
			else if((product1 == arrayProducts[j+1]) && (product2 == arrayProducts[j])){
				passCount += 1;
			}
    }
			if(passCount == 1 || count == 1){
				Log.Checkpoint("Products displayed are Correct");
			}
			else{
				Log.Error("Products displayed are Incorrect");
			} 
});

Then("Value displayed should be correct", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i = 0;
  for(i;i< radGridView.wRowCount;i++ ){
    let documentReference = radGridView.wValue(i, 2).OleValue;
    if(documentReference == docInvoice){
        let gridLedger = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
        var ValueDisplayed = gridLedger.wValue(i, 8).OleValue;
    }
  }

  if(aqObject.CompareProperty( aqConvert.IntToStr(ValueDisplayed), cmpEqual, aqConvert.IntToStr(aqString.SubString(totalOrderValue, 1, 10)), true, 3)){
    Log.Checkpoint("Order Value displayed is Correct");
     }
  else{
    Log.Error("Order Value displayed is Incorrect");
    }
});

Then("I set Credit Status to {arg}", function (creditStatus){
  setCreditStatus(creditStatus);
  clickSaveAndClose();
  clickSaveAndClose();
});

Then("Line Item Status should be Backorder", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  var passCount = 0;
  for(i;i<records;i++){ 
    let lineItemStatus= radGridView.wValue(i, 20).OleValue;
    if(lineItemStatus == "BackOrder"){ 
      passCount += 1;
    }
   }  
   
  if(passCount == 2) {
      Log.Checkpoint("Line Item Status is Backorder for both the Products");
  }
  else{
      Log.Error("Line Item Status is not Backorder for both Products");
	}
});

Then("Held Shipping Value should be equal to the Despatch Charge selected", function (){
  let shippingValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.WinFormsObject("PT.PTOrders.OTCBasket.CheckoutPayment.PT UnboundTextBox.HeldShippingValue").WinFormsObject("textBox1").get_Text();

  if(aqObject.CompareProperty(shippingValue, cmpEqual, despatchCharge, true, 3)){
    Log.Checkpoint("Held Shipping Value is equal to the Despatch Charge selected");
  }
  else{
    Log.Error("Held Shipping Value is not equal to the Despatch Charge selected");
	}  
});

Then("I release Held Order", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

      radGridView.ClickRowIndicator(0);
      clickReleaseHeld_OrderRelease();
      clickRefresh_OpenBasket();
      clickLeftArrow();
      selectPaymentType();
      enterChequeNumber();
      clickApply();
      clickCheckout();
      clickSearch();
      
      radGridView.ClickRowIndicator(0);
      clickReleaseHeld_OrderRelease();
      clickRefresh_OpenBasket();
      clickLeftArrow();
      selectPaymentType();
      enterChequeNumber();
      clickApply();
      clickCheckout();
});

function clickReleaseHeld_OrderRelease(){ 
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(402, 11);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(70, 35);
}

Then("Line Item Status should be Hold", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  var passCount = 0;
  for(i;i<records;i++){ 
    let lineItemStatus= radGridView.wValue(i, 20).OleValue;
    if(lineItemStatus == "Hold"){ 
      passCount += 1;
    }
   }  
   
  if(passCount == 2) {
      Log.Checkpoint("Line Item Status is Hold for both the Products");
  }
  else{
      Log.Error("Line Item Status is not Hold for both Products");
	}
});

When("I set Credit Status to {arg} for company {arg}", function (creditStatus, customer){
  clickFindCustomer();
  enterCompanyName(customer);
  clickSearchBtn();
  openStreamlineSterlingAccountProfile();
  setCreditStatus(creditStatus);
  clickSaveAndClose();
  clickSaveAndClose();
});

function clickSaveAndClose (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
}

function clickSearchBtn(){
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
}

When("I enter the company in Ship To field", function (){
 let txtCompany = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_ShipToRoleID.txtLink;
 
 txtCompany.Click();
 txtCompany.SetText(company);
 txtCompany.Keys("[Tab]");
 if(Aliases.Aptify_Shell.SearchForm.Exists){
   Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Name");
 }
});

Then("I change Credit Status to {arg}", function (creditStatus){
  clickFindCustomer();
  enterCompany(company);
  clickSearchBtn();
  openStreamlineSterlingAccountProfile();
  setCreditStatus(creditStatus);
  clickSaveAndClose();
  clickSaveAndClose();
});

Then("I open the Invoice", function (){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i = 0;
  for(i;i<gridDocuments.wRowCount;i++){
    if(gridDocuments.wValue(i,3).OleValue == company){
        let docRef = gridDocuments.wValue(i, 2).OleValue;
        docInvoice = docRef;
  
      let sFile = sFolder + docRef;
      aqFileSystem.CreateFolder(sFile);

      gridDocuments.DblClickCell(i, 2);
      Delay(5000);
      var invoice = Sys.Desktop.Picture();
      var invoicePath = aqString.Concat(sFile, "\\");
      invoice.SaveToFile(invoicePath + "PageTop.jpg" );
   
      Sys.Keys("[PageDown]");
   
      Delay(5000);
      var invoice = Sys.Desktop.Picture();
      var invoicePath = aqString.Concat(sFile, "\\");
      invoice.SaveToFile(invoicePath + "PageBottom.jpg" );      
    }
    break
  }
 
});


When("I select {arg} as Order Process Type", function (orderProcess){
  let ddOrderProcess = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderProcessTypeID.LookupSearchCombo;
  
  ddOrderProcess.Click();
  ddOrderProcess.ClickItem(orderProcess);
  ddOrderProcess.Keys("[Tab]");
});

Then("I open the Invoice note", function (){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i = 0;
  for(i;i<gridDocuments.wRowCount;i++){
    if(gridDocuments.wValue(i,3).OleValue == company){
        let docRef = gridDocuments.wValue(i, 2).OleValue;
        docInvoice = docRef;
  
      let sFile = sFolder + docRef;
      aqFileSystem.CreateFolder(sFile);

      gridDocuments.DblClickCell(i, 2);
      Delay(5000);
      var invoice = Sys.Desktop.Picture();
      var invoicePath = aqString.Concat(sFile, "\\");
      invoice.SaveToFile(invoicePath + "PageTop.jpg" );
   
      Sys.Keys("[PageDown]");
   
      Delay(5000);
      var invoice = Sys.Desktop.Picture();
      var invoicePath = aqString.Concat(sFile, "\\");
      invoice.SaveToFile(invoicePath + "PageBottom.jpg" );      
    }
    break
  }
});

When("I click on Find Orders from Orders homepage", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
});

When("I open customer record {arg} to set account status {arg}", function (customerName, accountStatus){
  clickFindCustomer();
  enterCustomerName(customerName);
  clickTradingTab();
  clickAccountProfilesTab();
  setCustomerStatus(accountStatus);
  clickSaveAndClose();
});

function checkCreditLimit()
{
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists ){
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  
    let creditLimit = gridProfiles.wValue(i, 5).OleValue;  
     
    if(creditLimit == "0")
  {
    gridProfiles.DblClickCell(i,"Credit Limit");
    Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_CreditLimit.txtInner.Keys("50000")
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
  
    let creditLimit = gridProfiles.wValue(i, 5).OleValue;  
     
    if(creditLimit == "0")
  {
    gridProfiles.DblClickCell(i,"Credit Limit");
    Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_CreditLimit.txtInner.Keys("50000")
    clickSaveAndClose();
  }
  }
}
}

Then("I change the account status {arg}", function (accountStatus){
  clickFindCustomer();
  enterCustomerName(customerName);
  clickTradingTab();
  clickAccountProfilesTab();
  setCustomerStatus(accountStatus);
  clickSaveAndClose();

});


function enterCustomerName(customerName)
{
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.ClickButton();
  let splitContainer = aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radPanel = splitContainer.SplitterPanel2.searchParameters.radPanelParams;
  let textBox = radPanel.quickSearch.quickSearchText;
  textBox.Keys(customerName);
  radPanel.switchPanel.searchButton.ClickButton();
  let radGridView = splitContainer.SplitterPanel2_new.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridView.Exists)
  {
    radGridView.DblClickCell(0,"Title");
  }
}

function setCustomerStatus(accountStatus)
{
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists ){
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  
    let profileStatus = gridProfiles.wValue(i, 3).OleValue;  
     
    if(profileStatus != accountStatus)
  {
    gridProfiles.DblClickCell(i,"Status");
    Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_Tabs_TopArea_CreditStatusID.LookupSearchCombo.keys(accountStatus);
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
  
    let profileStatus = gridProfiles.wValue(i, 3).OleValue;  
     
    if(profileStatus != accountStatus)
  {
    gridProfiles.DblClickCell(i,"Status");
    Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_Tabs_TopArea_CreditStatusID.LookupSearchCombo.keys(accountStatus);
    clickSaveAndClose();
  }
  }
}
  
}

