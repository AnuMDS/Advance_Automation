var sale, quantity, product, refCode, company;
var sundryChargeType,sundryCharge;
var charge, itemTax, totalValue;
var linkedOrderSundryCharge;
var promotionCode, orderIdDisplayed, customer;
var imprint, author, productType, pubDate;
var product1, product2;
var TotalvalueOnCheckout1, TotalvalueOnCheckout2;
var availableInventoryBefore1, availableInventoryBefore2;
var packets, qtyLoose, packetSize;
var availableQtyBefore;
var availableInventoryBefore, TotalvalueOnCheckout, price;
var DocumentRef, backorderProduct, backorderCustomer;
var withoutPrefix, titlePrefix, firstAvailableQty, secondAvailableQty;
var docInvoice;
var balanceQty1,balanceQty2;
var parAvailableQty;
var txtCustomerName,txtSupplyStatus,paramValue,orderID,availableInventory
var parIdentifier,parType,parTitle,orderQty,txtOrderQty
var clmBalanceQty,paramTotals,DocumentRef
var paramAccountNo,paramEmail,paramClmAvailable
var textBoxInventory,txtProduct,totalsSupplyValue
var PORef
var code;

var sFolder = "\\booboo\\Handover_Bhanu\\IngentaCommercialApplication_New\\TestProject1\\Invoices\\";

When("I click on New Order button", function clickNewOrder(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton8.ClickButton();
});

When("I enter a company {arg} in Ship To field", function enterShipToCompany(companyPar){
 let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1; 
 let txtCompany = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_ShipToRoleID.txtLink;
 
 txtCompany.Click();
 txtCompany.SetText(companyPar);
 company = companyPar;
 txtCompany.Keys("[Tab]");
 if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

When("I click on Red Arrow", function clickRedArrow(){
  Sys.WaitProcess("Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton", 2000);  
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.buttonImage.ClickButton();
  if(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.Exists){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.buttonImage.ClickButton();    
  }
});

When("I select a transaction type {arg}", function selectOrderProcessType(transactionType){
 let ddTransactionType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderProcessTypeID.LookupSearchCombo;
  
 ddTransactionType.Click();
 ddTransactionType.ClickItem(transactionType);
 ddTransactionType.Keys("[Tab]");
});

When("I select a Sale type {arg}", function selectOrderType(salePar){
 let ddSale =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderTypeID.LookupSearchCombo;
 
 ddSale.Click();
 ddSale.ClickItem(salePar);
 sale = salePar;
 ddSale.Keys("[Tab]");
});

When("I enter P\\/O Reference", function enterReference(){
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
});

When("I select a seller {arg} in Sold By field", function (soldBy){
 let ddSoldBy = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_SoldByID.LookupSearchCombo;
 
 ddSoldBy.Click();
 ddSoldBy.ClickItem(soldBy);
 ddSoldBy.Keys("[Tab]");
});

Then("product should be displayed below with all the information submitted", function verifyOrderBasket(){
  let gridOrderBasket = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let productDisplayed = gridOrderBasket.wValue(0, 8).OleValue;
  let qtyDisplayed = gridOrderBasket.wValue(0, 11).OleValue;
  let refDisplayed = gridOrderBasket.wValue(0, 14).OleValue;
  let orderTypeDisplayed = gridOrderBasket.wValue(0, 16).OleValue;
 
  if( (aqObject.CompareProperty(productDisplayed, cmpEqual, product, true,3)) && (aqObject.CompareProperty(qtyDisplayed, cmpEqual, quantity, true,3)) && (aqObject.CompareProperty(refDisplayed, cmpEqual, refCode, true,3)) && (aqObject.CompareProperty(orderTypeDisplayed, cmpEqual, sale, true,3))){
    Log.Checkpoint("Product Details are correctly displayed in Order Basket");
     }
  else{
    Log.Error("Product Details are not correctly displayed in Order Basket");
    }
});

Then("Orders ID should be displayed with unique value on top of the page", function verifyOrderId(){
 let orderID =  Aliases.Aptify_Shell.FormTemplateForm.WndCaption.split(" ");
 
 if((aqObject.CompareProperty(orderID[2], cmpGreater, 0, true,3))){
    Log.Checkpoint("Order ID is displayed");
     }
 else{
    Log.Error("Orders ID is not displayed");
    }
});

Then("buttons like Edit Line, Delete Line, Add\\/Edit Sundry Charge to Order Line should be displayed", function verifyOrderBasketButtons(){
  let gridOrderBasket = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  gridOrderBasket.HoverMouseCell(0, 0);
  let editLine = NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.wText;
  aqObject.CompareProperty(editLine, cmpEqual, "Edit Line", true,3);
  NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.WaitProperty("Enabled", false, 6000);
  
  gridOrderBasket.HoverMouseCell(0, 1);
  NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.WaitProperty("Enabled", true, 6000);
  let deleteLine = NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.wText;
  aqObject.CompareProperty(deleteLine, cmpEqual, "Delete Line", true,3);
  NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.WaitProperty("Enabled", false, 6000);
  
  gridOrderBasket.HoverMouseCell(0, 2);
  NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.WaitProperty("Enabled", true, 6000);
  let addEditSundry = NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.wText;
  aqObject.CompareProperty(addEditSundry, cmpEqual, "Add\\Edit Sundry Charge To Order Line", true,3); 
  NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.WaitProperty("Enabled", false, 6000);
  
  if((aqObject.CompareProperty(editLine, cmpEqual, "Edit Line", true,3)) && (aqObject.CompareProperty(deleteLine, cmpEqual, "Delete Line", true,3)) && (aqObject.CompareProperty(addEditSundry, cmpEqual, "Add\\Edit Sundry Charge To Order Line", true,3)) ){
    Log.Checkpoint("Edit Line, Delete Line, Add\\/Edit Sundry Charge to Order Line buttons are displayed");
     }
    else{
    Log.Error("Edit Line, Delete Line, Add\\/Edit Sundry Charge to Order Line buttons are not displayed");
    }
});

Then("buttons like Order Line Promotions, Order Line OK should be displayed", function validateOrderBasketButtons(){
  let gridOrderBasket = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  gridOrderBasket.HoverMouseCell(0, 4);
  NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.WaitProperty("Enabled", true, 6000);
  NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.Activate();
  let orderLineOK = NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.wText;
  aqObject.CompareProperty(orderLineOK, cmpEqual, "Order Line OK", true,3);
  NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.WaitProperty("Enabled", false, 6000);
  
  gridOrderBasket.HoverMouseCell(0, 3);
  NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.WaitProperty("Enabled", true, 6000);
  let orderLine = NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.wText; 
  aqObject.CompareProperty(orderLine, cmpEqual, "Order Line Promotions", true,3);
  NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.WaitProperty("Enabled", false, 6000);

  if( (aqObject.CompareProperty(orderLineOK, cmpEqual, "Order Line OK", true,3)) && (aqObject.CompareProperty(orderLine, cmpEqual, "Order Line Promotions", true,3)) ){
    Log.Checkpoint("Order Line Promotions, Order Line OK buttons are displayed");
     }
    else{
    Log.Error("Order Line Promotions, Order Line OK buttons are not displayed");
    }
});

When("I select a Product {arg} to Order", function selectProductToOrder(productPar){
  let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  
  txtProduct.Click();
  txtProduct.SetText(productPar);
  product = productPar;
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

When("I enter Quantity {arg} to Order", function enterQty(quantityPar){
  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  
  txtQuantity.Click();
  txtQuantity.SetText(quantityPar);
  quantity = quantityPar;
  txtQuantity.Keys("[Tab]");
});

When("I click on Add button to create Order", function clickAddBtn(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
});


When("I click on Delete Line icon", function clickDeleteLineIcon(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 1);
  if(Aliases.Aptify_Shell.LocalizedMsgBox.Exists){
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  }
});

Then("record should be deleted from the open order basket", function verifyRecordDeleted(productPar){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(aqObject.CheckProperty(radGridView, "wRowCount", cmpEqual, 0)){
    Log.Checkpoint("Order is deleted from the basket");
     }
    else{
    Log.Error("Order is not deleted from the basket");
    }
});




When("I click on Add\\/ Edit Sundry Charge to Order Line icon", function clickAddEditSundryChargeToOrderLine(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 2);
});

When("I select a Sundry Charge Type {arg}", function (sundryChargeTypePar){
 let ddSundryChargeType =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PT_Group_Box_SundryCharges.PTOrderSundryCharges_OrderBasketHeader.PTOrderSundryCharges_OrderBasketHeader_SundryChargeTypeID.LookupSearchCombo;
 
 ddSundryChargeType.Click();
 ddSundryChargeType.ClickItem(sundryChargeTypePar);
 sundryChargeType = sundryChargeTypePar;
 ddSundryChargeType.Keys("[Tab]");
});

When("I select a Invoice Group {arg}", function selectInvoiceGroup(invoiceGrp){
 let ddInvoiceGrp =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PT_Group_Box_SundryCharges.PTOrderSundryCharges_OrderBasketHeader.PTOrderSundryCharges_OrderBasketHeader_InvoiceGroupID.LookupSearchCombo;
 
 ddInvoiceGrp.Click();
 ddInvoiceGrp.ClickItem(invoiceGrp);
 ddInvoiceGrp.Keys("[Tab]");
});

When("I select a Organisation {arg}", function selectOrganization(org){
  let ddOrg =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PT_Group_Box_SundryCharges.PTOrderSundryCharges_OrderBasketHeader.PTOrderSundryCharges_OrderBasketHeader_OrganizationID.LookupSearchCombo;
  
  ddOrg.Click();
  ddOrg.ClickItem(org);
  ddOrg.Keys("[Tab]");
});

When("I enter a Charge Value {arg}", function enterChargeValue(chargePar){
 let txtCharge =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PT_Group_Box_SundryCharges.PTOrderSundryCharges_OrderBasketHeader.PTOrderSundryCharges_OrderBasketHeader_ChargeValue.txtInner;
 
 txtCharge.Click();
 txtCharge.SetText(chargePar);
 charge = chargePar;
});

When("I click Save button", function clickSave(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
});

Then("details should be displayed below with all the information submitted", function verifySundryCharges(){
  let gridSundryCharges = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel2.PTOrderItems_TempTab.PTOrderItems_TempTab_PT_Group_Box_1.PTOrderSummaryTabs.PTOrderSummaryTabs_Tabs.tabMain.PTOrders_Form_Sundry_Charges_Tab.PTOrders_Sundry_Charges.PTOrderBasket_OrderSummary_ListViewSundryCharges.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let sundryChargeTypeDisplayed = gridSundryCharges.wValue(0, 4).OleValue;
  let chargeValueDisplayed = gridSundryCharges.wValue(0, 6).OleValue;
  let itemTaxValueDisplayed = gridSundryCharges.wValue(0, 7).OleValue;
  let totalValueDisplayed = gridSundryCharges.wValue(0, 8).OleValue;
  
  if(aqObject.CompareProperty(sundryChargeType, cmpEqual, sundryChargeTypeDisplayed, 3)){
    Log.Checkpoint("Sundry Charge Type is correctly displayed");
     }
    else{
    Log.Error("Sundry Charge Type is not correctly displayed");
    }
    
    
  if(aqObject.CompareProperty(charge, cmpEqual, chargeValueDisplayed, 3)){
    Log.Checkpoint("Charge Value is correctly displayed");
     }
    else{
    Log.Error("Charge Value is not correctly displayed");
    }
    
    
  if(aqObject.CompareProperty(totalValueDisplayed, cmpEqual, charge+itemTaxValueDisplayed, 3)){
    Log.Checkpoint("Total Value is correctly displayed");
     }
    else{
    Log.Error("Total Value is not correctly displayed");
    }    
});

When("I click Ok for pop up stating {arg}", function (param1){
  if(Aliases.Aptify_Shell.dlg.Exists){
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
  }
});


When("I open the record displayed under Sundry Charges tab", function openSundryChargeRecord(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel2.PTOrderItems_TempTab.PTOrderItems_TempTab_PT_Group_Box_1.PTOrderSummaryTabs.PTOrderSummaryTabs_Tabs.tabMain.PTOrders_Form_Sundry_Charges_Tab.PTOrders_Sundry_Charges.PTOrderBasket_OrderSummary_ListViewSundryCharges.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickRowIndicator(0);
});

When("I enter sum of Charge Value and Item Tax Value in Total Value", function enterTotalValue(){
  let txtTotalValue =  Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_TotalValue.txtInner;
  
  txtTotalValue.Click();
  txtTotalValue.SetText(charge+itemTax);
  totalValue = charge+itemTax;
});

When("I enter an Organisation {arg}", function selectSundryCharges_Organization(organisation){
  let txtOrganisation = Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_OrganizationID.txtLink;
  
  txtOrganisation.Click();
  txtOrganisation.SetText(organisation);
  txtOrganisation.Keys("[Tab]");
});

When("I enter Order Batch Code {arg}", function enterOrderBatchCode(orderBatchCode){
  let txtOrderBatchCode = Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_OrderBatchCodeID.txtLink;
  
  txtOrderBatchCode.Click();
  txtOrderBatchCode.SetText(orderBatchCode);
  txtOrderBatchCode.Keys("[Tab]");
});

When("I enter a Partition Date {arg}", function enterPartitionDate(partitionDate){
  let txtDate =  Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_PartitionDate.txtInner;
  
  txtDate.Click();
  txtDate.SetText(partitionDate);
});

When("I select a Linked Order Sundry Charge {arg}", function selectLinkedOrderSundryCharge(linkedOrderSundryChargePar){
  let txtLinkedOrderSundryCharge = Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_LinkedOrderSundryChargeID.txtLink;
  
  txtLinkedOrderSundryCharge.Click();
  txtLinkedOrderSundryCharge.SetText(linkedOrderSundryChargePar);
  linkedOrderSundryCharge = linkedOrderSundryChargePar;
  txtLinkedOrderSundryCharge.Keys("[Tab]");
});

When("I click on Save Record and Close Form", function (){
  clickSaveAndClose();
});

Then("details should be displayed under Sundry Charges tab as submitted", function verifySundryChargeValues(){
  let gridSundryCharges = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel2.PTOrderItems_TempTab.PTOrderItems_TempTab_PT_Group_Box_1.PTOrderSummaryTabs.PTOrderSummaryTabs_Tabs.tabMain.PTOrders_Form_Sundry_Charges_Tab.PTOrders_Sundry_Charges.PTOrderBasket_OrderSummary_ListViewSundryCharges.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let chargeValueDisplayed = gridSundryCharges.wValue(0, 6).OleValue;
  let itemTaxValueDisplayed = gridSundryCharges.wValue(0, 7).OleValue;
  let totalValueDisplayed = gridSundryCharges.wValue(0, 8).OleValue;
  
  if(aqObject.CompareProperty(charge, cmpEqual, chargeValueDisplayed, 3)){
    Log.Checkpoint("Charge Value is correcly displayed");
     }
  else{
    Log.Error("Charge Value is not correcly displayed");
    }
    
    
  if(aqObject.CompareProperty(itemTax, cmpEqual, itemTaxValueDisplayed, 3)){
    Log.Checkpoint("Item Tax is correcly displayed");
     }
  else{
    Log.Error("Item Tax is not correcly displayed");
    }
    
    
  if(aqObject.CompareProperty(totalValue, cmpEqual, totalValueDisplayed, 3)){
    Log.Checkpoint("Total Value is correcly displayed");
     }
  else{
    Log.Error("Total Value is not correcly displayed");
    }
}); 

Then("I open the record displayed under Sundry Charges tab", function (){
   Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel2.PTOrderItems_TempTab.PTOrderItems_TempTab_PT_Group_Box_1.PTOrderSummaryTabs.PTOrderSummaryTabs_Tabs.tabMain.PTOrders_Form_Sundry_Charges_Tab.PTOrders_Sundry_Charges.PTOrderBasket_OrderSummary_ListViewSundryCharges.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickRowIndicator(0);
});


Then("I enter a Item Tax Value {arg}", function enterItemTax(itemTaxPar){
  let txtItemTax = Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_TAXValue.txtInner;
 
  txtItemTax.Click();
  txtItemTax.SetText(itemTaxPar);
  itemTax = itemTaxPar;
});

Then("I enter sum of Charge Value and Item Tax Value in Total Value", function enterSundryCharges_TotalValue(){
  let txtTotalValue =  Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_TotalValue.txtInner;
  
  txtTotalValue.Click();
  txtTotalValue.SetText(charge+itemTax);
  totalValue = charge+itemTax
});

Then("I enter an Organisation {arg}", function (organisation){
  let txtOrganisation = Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_OrganizationID.txtLink;
  
  txtOrganisation.Click();
  txtOrganisation.SetText(organisation);
  txtOrganisation.Keys("[Tab]");
});

Then("I enter Order Batch Code {arg}", function enterSundryCharges_OrderBatchCode(orderBatchCode){
  let txtOrderBatchCode = Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_OrderBatchCodeID.txtLink;
  
  txtOrderBatchCode.Click();
  txtOrderBatchCode.SetText(orderBatchCode);
  txtOrderBatchCode.Keys("[Tab]");
});

Then("I enter a Partition Date {arg}", function enterSundryCharges_PartitionDate(partitionDate){
  let txtDate =  Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_PartitionDate.txtInner;
  
  txtDate.Click();
  txtDate.SetText(partitionDate);
});

Then("I select a Linked Order Sundry Charge {arg}", function selectLinkedOrderSundryCharges(linkedOrderSundryCharge){
  let txtLinkedOrderSundryCharge = Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_LinkedOrderSundryChargeID.txtLink;
  
  txtLinkedOrderSundryCharge.Click();
  txtLinkedOrderSundryCharge.SetText(linkedOrderSundryCharge);
  txtLinkedOrderSundryCharge.Keys("[Tab]");
});


Then("I click on Delete Line icon under Sundry Charges tab", function clickDelete_SundryChargeTab(){
  let gridSundryCharges = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel2.PTOrderItems_TempTab.PTOrderItems_TempTab_PT_Group_Box_1.PTOrderSummaryTabs.PTOrderSummaryTabs_Tabs.tabMain.PTOrders_Form_Sundry_Charges_Tab.PTOrders_Sundry_Charges.PTOrderBasket_OrderSummary_ListViewSundryCharges.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 1);
});

Then("record should be deleted from Sundry Charges tab", function (){
  let gridSundryCharges = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel2.PTOrderItems_TempTab.PTOrderItems_TempTab_PT_Group_Box_1.PTOrderSummaryTabs.PTOrderSummaryTabs_Tabs.tabMain.PTOrders_Form_Sundry_Charges_Tab.PTOrders_Sundry_Charges.PTOrderBasket_OrderSummary_ListViewSundryCharges.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(aqObject.CheckProperty(gridSundryCharges , "wRowCount", cmpEqual, 0)){
    Log.Checkpoint("Order is deleted from the Sundry Charges tab");
     }
  else{
    Log.Error("Order is not deleted from the Sundry Charges tab");
    }
});

Then("I close the Order window", function closeOrderWindow(){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});

When("I enter a Charge Value {arg} in Order Sundry Charges", function (chargePar){
  let txtCharge = Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_ChargeValue.txtInner;
    
  txtCharge.Click();
  txtCharge.SetText(chargePar);
  charge = chargePar;
});


When("I enter a Item Tax Value {arg} in Order Sundry Charges", function (itemTaxPar){
  let txtItemTax = Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_TAXValue.txtInner;
  
  txtItemTax.Click();
  txtItemTax.SetText(itemTaxPar);
  itemTax = itemTaxPar;
});

Then("I enter a Charge Value {arg} in Order Sundry Charges", function (chargePar){
  let txtCharge = Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_ChargeValue.txtInner;
    
  txtCharge.Click();
  txtCharge.SetText(chargePar);
  charge = chargePar;
});

Then("I enter a Item Tax Value {arg} in Order Sundry Charges", function (itemTaxPar){
  let txtItemTax = Aliases.Aptify_Shell.FormTemplateForm.PTOrderSundryCharges_Form.PTOrderSundryCharges_Tabs.tabMain.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_Tabs_General.PTOrderSundryCharges_TAXValue.txtInner;
  
  txtItemTax.Click();
  txtItemTax.SetText(itemTaxPar);
  itemTax = itemTaxPar;
});

When("I click on Left facing arrow", function clickLeftArrow(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();
});

When("I click on Promotions", function clickTabPromotions (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.ClickTab("Promotions");
});

When("I enter a Promotion Code {arg}", function enterPromotionCode(promotionCodePar){
  let txtPromotionCode = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Form_Promotions_Tab.PTOrders_Promotions.PTOrders_Promotions_PT_UnboundTextBox_PromotionCode.textBox1;
  
  txtPromotionCode.Click();
  txtPromotionCode.SetText(promotionCodePar);
  promotionCode = promotionCodePar;
});

When("I select a promotion code", function selectPromotionCode(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Form_Promotions_Tab.PTOrders_Promotions.PTOrders_Promotions_Telerik_List_View_Promotions.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickRowIndicator(0);
});

When("I click on Apply Promotion button", function clickApplyPromotion(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Form_Promotions_Tab.PTOrders_Promotions.PTOrders_Promotions_Active_Button_ApplyPromotion.Click();
});

When("I click on Right facing arrow", function clickRightArrow(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.buttonImage.ClickButton();
});

When("I click on Yes button to Confirmation message", function (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});

When("I click on Order Line Promotions icon", function clickOrderLinePromotionsIcon(){
 Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 3);
});


Then("Promotion code submitted should be displayed", function verifyPromotionCodeSelected(){
  let codeDisplayed = Aliases.Aptify_Shell.MessageGrid.listViewPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 0).OleValue;
  
  if(aqObject.CompareProperty(codeDisplayed, cmpEqual, promotionCode, 3)){
    Log.Checkpoint("Promotion code submitted is correctly displayed");
     }
  else{
    Log.Error("Promotion code submitted is not correctly displayed");
    }
});

Then("I click OK button for pop up stating {arg}", function (param1){
  Aliases.Aptify_Shell.MessageGrid.Button1.ClickButton();
});

Then("I click on Left facing arrow", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();
  Sys.WaitProcess("Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton", 2000);    
  if(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.Exists){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();    
  }
});

Then("Check out page should be displayed to confirm and place the order", function verifyCheckOutPage(){
  let btnCheckout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage;
  
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab, "Visible", cmpEqual, true)){
    Log.Checkpoint("Checkout page is Visible");
     }
  else{
    Log.Error("Checkout page is not Visible");
    }
    
    
  if(aqObject.CheckProperty(btnCheckout, "Enabled", cmpEqual, true)){
    Log.Checkpoint("Checkout button is Enabled");
     }
  else{
    Log.Error("Checkout button is Disabled");
    }
});

When("I click on Search button for promotions", function cickPromotionSearch(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Form_Promotions_Tab.PTOrders_Promotions.PTOrders_Promotions_Active_Button_Search.Click();
});


When("I select a Payment type {arg}", function selectPaymentType(paymentType){
  let ddPaymentType =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeID.LookupSearchCombo;
  
  ddPaymentType.Click();
  ddPaymentType.ClickItem(paymentType);
  ddPaymentType.Keys("[Tab]");
});

Then("all the fields should be read only/disabled", function verifyValuesOnCheckout(){ 
  verifyBackorderValue();
  verifyHeldNetValue();
  verifyNetValue();
  verifyTotalNetValue();
});

Then("Checkout button should be enabled", function verifyCheckoutBtn(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage, "Enabled", cmpEqual, true);
});

Then("Total Outstanding Value should display an amount", function verifyTotalOutstandingValue(){
  let totalOutstandingValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTUnboundTextBox_TotalUnpaid.textBox1;
  let valueDisplayed = totalOutstandingValue.get_Text();
  
  if(aqObject.CompareProperty(valueDisplayed, cmpGreater, 0 ,true, 3)){
    Log.Checkpoint("Total Outstanding Value is displayed");
     }
    else{
    Log.Error("Total Outstanding Value is not displayed");
    }
});

function verifyNetValue(){
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_NetValue.txtInner, "ReadOnly", cmpEqual, true)){
    Log.Checkpoint("Net Value field is ReadOnly");
     }
    else{
    Log.Error("Net Value field is not ReadOnly");
    }
}

function verifyBackorderValue(){
  if( aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_BackorderValue.txtInner, "ReadOnly", cmpEqual, true)){
    Log.Checkpoint("Backorder Value field is ReadOnly");
     }
    else{
    Log.Error("Backorder Value field is not ReadOnly");
    }
}

function verifyHeldNetValue(){
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_HeldNetValue.textBox1, "Enabled", cmpEqual, false)){
    Log.Checkpoint("Held Net Value field is disabled");
     }
    else{
    Log.Error("Held Net Value field is enabled");
    }
}

function verifyTotalNetValue(){
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_TotalNetValue.textBox1, "Enabled", cmpEqual, false)){
    Log.Checkpoint("Total Net Value field is disabled");
     }
    else{
    Log.Error("Total Net Value field is enabled");
    }
}


When("I click on New Product", function clickNewProduct(){
   Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton9.ClickButton();
});


When("I select a Dimension Group {arg}", function selectDimensionGroup(dimensionGroup){
  let txtDimensionGroup = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_PTProductDimensions_DimensionGroupID.txtLink;
  
  txtDimensionGroup.Click();
  txtDimensionGroup.SetText(dimensionGroup);
});

When("I click on Yes button to apply Dimension Group", function clickYes_ApplyDimension(){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});

When("I enter an Author {arg}", function enterAuthor(authorPar){
  let txtAuthor = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_Authors.txtInner;
  
  txtAuthor.Click();
  txtAuthor.SetText(authorPar);
  author = authorPar;
});

When("I click on New button in Dimensions List View", function clickNewDimension(){
 Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_Dimensions_SubtypeView.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

When("I select a Type {arg}", function selectDimensionType(dimensionTypePar){
  let ddDimensionType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_TypeID.LookupSearchCombo;
  
  ddDimensionType.Click();
  ddDimensionType.ClickItem(dimensionTypePar);
  ddDimensionType.Keys("[Tab]");
});

When("I enter a numeric value {arg}", function enterDimensionValue(dimensionValuePar){
  let txtDimensionValue = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_Value.txtInner;
  
  txtDimensionValue.Click();
  txtDimensionValue.SetText(dimensionValuePar);
});

When("I select a Unit {arg}", function selectDimensionUnit(dimensionUnit){
  let ddDimensionUnit = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_ONIXUnitID.LookupSearchCombo;
  
  ddDimensionUnit.Click();
  ddDimensionUnit.ClickItem(dimensionUnit);
  ddDimensionUnit.Keys("[Tab]");
});

When("I click on New button in Identifiers List view", function clickNewIdentifiers(){
 Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

When("I select an Identifier Type {arg}", function selectIdentifierType(identifierTypePar){
  let ddIdentifierType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo;
  
  ddIdentifierType.Click();
  ddIdentifierType.ClickItem(identifierTypePar); 
  ddIdentifierType.Keys("[Tab]");
});

When("I select a range {arg}", function selectRange(range){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_OrganizationCodeAllocationsID.LookupSearchCombo.ClickItem(range);
});

When("I click on Ok  button", function clickOK(){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

When("I enter a Pub Date {arg}", function selectPubDate(pubDatePar){
  let datePub = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_PublicationDate.txtInner;
  
  datePub.Click();
  datePub.SetText(pubDatePar);
  pubDate = pubDatePar;
});

When("I enter a Copyright Year {arg}", function enterCopyrightYear(copyrightYear){
  let txtCopyrightYear = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_xCopyrightYear.txtInner;
  
  txtCopyrightYear.Click();
  txtCopyrightYear.SetText(copyrightYear);
});

When("I select a Product Discount Type {arg}", function selectProducDiscount(discount){
  let ddDiscount = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_ProductDiscountID.LookupSearchCombo;
  
  ddDiscount.Click();
  ddDiscount.ClickItem(discount); 
  ddDiscount.Keys("[Tab]");
});

When("I select a Fulfilment Product Type {arg}", function selectFulfilmentProductType(fulfilmentProductType){
  let ddFulfilmentProductType = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_FulfilmentProductTypeID.LookupSearchCombo;
  
  ddFulfilmentProductType.Click();
  ddFulfilmentProductType.ClickItem(fulfilmentProductType);
  ddFulfilmentProductType.Keys("[Tab]");
});

When("I select a Inventory  Site {arg}", function selectInventorySite(inventorySites){
 if( Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_InventorySitesID.dropDownMultiSelect.Text == "Not Selected"){
   Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_InventorySitesID.dropDownMultiSelect.Click();
   Aliases.Aptify_Shell.DropDownPopupForm.treeInner.CheckItem(inventorySites, true);
  } 
});


Then("I click on Fulfilment tab", function clickFulfilmentTab(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Fulfilment");
});

Then("I check the Gratis Only checkbox", function checkGratisOnlyCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_Fulfilment_Tabs.tabMain.PT_Products_OTC_Fulfilment1.PT_Products_OTC_Fulfilment1.PT_Products_OTC_Fulfilment1_IsGratisOnly.chkInternal.ClickButton();
});

Then("I click on Prices tab", function clickPricesTab(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Prices");
});

Then("I create a default price set", function createDefaultPriceSet(){
  ClickPricesTab();
  ClickNewRecord();
  enterPriceSetInformation();
  clickSaveAndClose();
  verifyDefaultPriceSet();
});

Then("checkboxes Gratis Only and Gratis Allowed should be checked", function verifyGratisOnlyGratisAllowedCheckboxes(){
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_Fulfilment_Tabs.tabMain.PT_Products_OTC_Fulfilment1.PT_Products_OTC_Fulfilment1.PT_Products_OTC_Fulfilment1_IsGratisOnly.chkInternal, "Checked", cmpEqual, true)){
    Log.Checkpoint("Gratis Only checkbox is checked");
     }
  else{
    Log.Error("Gratis Only checkbox is not checked");
    }
    
    
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_Fulfilment_Tabs.tabMain.PT_Products_OTC_Fulfilment1.PT_Products_OTC_Fulfilment1.PT_ProductsOTC_Fulfilment_GratisAllowed.chkInternal, "Checked", cmpEqual, true)){
    Log.Checkpoint("Gratis Allowed checkbox is checked");
     }
  else{
    Log.Error("Gratis Allowed checkbox is not checked");
    }  
});


function ClickNewRecord(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(13, 18);
}
function enterPriceSetInformation(){
  let wdwPriceInformation = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General;

  let ddPriceType = wdwPriceInformation.PTProductPrices_Tabs_General_PriceTypeID.LookupSearchCombo;
  ddPriceType.ClickItem("Standard Price" );
  ddPriceType.Keys("[Tab]");
  
  let ddPriceName = wdwPriceInformation.PTProductPrices_Tabs_General_PriceNameID.LookupSearchCombo;
  ddPriceName.ClickItem("Standard Price");
  ddPriceName.Keys("[Tab]");
  
  let ddLicense = wdwPriceInformation.PTProductPrices_Tabs_General_LicenseID.LookupSearchCombo; 
  ddLicense.ClickItem("Sale");
  ddLicense.Keys("[Tab]");
  
  let ddCurrencyType = wdwPriceInformation.PTProductPrices_Tabs_General_CurrencyTypeID.LookupSearchCombo;
  ddCurrencyType.ClickItem("UK Sterling");
  ddCurrencyType.Keys("[Tab]");
  
  let txtPrice = wdwPriceInformation.PTProductPrices_Price.txtInner;
  txtPrice.Click();
  txtPrice.SetText(20);
  
  let txtRenewPrice = wdwPriceInformation.PTProductPrices_RenewPrice.txtInner;
  txtRenewPrice.Click();
  txtRenewPrice.SetText(30);
  
 // let txtFromDate =  wdwPriceInformation.PTProductPrices_StartDate.txtInner;
 // txtFromDate.Click();
 // txtFromDate.SetText("18/05/2020");
  
  let txtToDate =  wdwPriceInformation.PTProductPrices_EndDate.txtInner;
  txtToDate.Click();
  txtToDate.SetText(aqDateTime.AddDays(aqDateTime.Today(), 5));
  
  wdwPriceInformation.PTProductPrices_IsDefault.chkInternal.ClickButton();
  
  wdwPriceInformation.PTProductPrices_Tabs_General_IsApproved.chkInternal.ClickButton(); 
}


function clickSaveAndClose (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
 if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton(); 
 }
}


function verifyDefaultPriceSet(){
  let defaultPriceSet = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 13).OleValue;
  
  if(  aqObject.CompareProperty(defaultPriceSet, cmpEqual, true, true, 3)){
    Log.Checkpoint("Default Price set is created");
   }
  else{
    Log.Error("Default Price set is not created");
	 }
}

When("I click on Apply button to Dimension Group", function clickApplyDimension(){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_PTProductDimensions_Apply.Click();
});


When("I select {arg} from Product Type", function (productTypePar){
  let ddProductType = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Details_ProductDetails_ProductSubTypeID.LookupSearchCombo;
 
 ddProductType.Click();
 ddProductType.ClickItem(productTypePar);
 productType = productTypePar;
});

When("I enter Title Prefix", function enterTitlePrefix(){
  let txtTitlePrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitlePrefix.txtInner;
  
  txtTitlePrefix.Click();
  txtTitlePrefix.SetText("RAVE");
  titlePrefix = "RAVE";
});

When("I click on the Next button", function clickNext_PTProductWizard(){
 Aliases.Aptify_Shell.PTProductWizard.WizMain.btnNext.ClickButton();
});

When("I click on the Finish button", function clickFinish_PTProductWizard(){
 Aliases.Aptify_Shell.PTProductWizard.WizMain.btnFinish.ClickButton();
});

Then("new product is created with all the information submitted", function verifyProductCreated(){
  verifyAuthor();
  verifyOrganization();
  verifyProductTitle();
  verifyProductType();
  verifyPubDate();
});

function verifyAuthor(){
  let authorDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_General_Authors.txtInner.get_Text();
  if(aqObject.CompareProperty(author, cmpEqual, authorDisplayed, 3)){
    Log.Checkpoint("Author is displayed correctly");
     }
  else{
    Log.Error("Author is not displayed correctly");
    }
}

function verifyProductType(){
  let productTypeDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_ResourceType.txtInner.get_Text();
  if(aqObject.CompareProperty(productType, cmpEqual, productTypeDisplayed, 3)){
    Log.Checkpoint("Product Type is displayed correctly");
     }
  else{
    Log.Error("Product Type is not displayed correctly");
    }
}

function verifyOrganization(){
  let organizationDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Organizations.LookupSearchCombo.get_Text();
  if(aqObject.CompareProperty(imprint , cmpEqual, organizationDisplayed, 3)){
    Log.Checkpoint("Organization is displayed correctly");
     }
  else{
    Log.Error("Organization is not displayed correctly");
    }
}

function verifyProductTitle(){
  let titleDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Title.txtInner.get_Text();
  let productTitle = aqString.Concat(titlePrefix," "+withoutPrefix);
  if(aqObject.CompareProperty(productTitle, cmpEqual, titleDisplayed, 3)){
    Log.Checkpoint("Product Title is displayed correctly");
     }
  else{
    Log.Error("Product Title is not displayed correctly");
    }
}

function verifyPubDate(){
  let pubDateDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Field_PubDate.txtInner.get_Text();
  if(aqObject.CompareProperty(pubDate, cmpEqual, pubDateDisplayed, 3)){
    Log.Checkpoint("Pub Date is displayed correctly");
     }
  else{
    Log.Error("Pub Date is not displayed correctly");
    }
}

  
When("I select a License ID {arg}", function selectLicense(licenseID){
  let ddLicenseID = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_LicenseID.LookupSearchCombo;
  
  ddLicenseID.Click();
  ddLicenseID.ClickItem(licenseID);
  ddLicenseID.Keys("[Tab]");
});

When("I select a Order Category {arg}", function selectOrderCategory(orderCategory){
  let ddOrderCategory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_OrderCategoryID.LookupSearchCombo;
  
  ddOrderCategory.Click();
  ddOrderCategory.ClickItem(orderCategory);
  ddOrderCategory.Keys("[Tab]");
});

When("I enter a Publisher Ref {arg}", function enterPublisherReference(publisherReference){
  let txtPublisherReference = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_PublisherLineReference.txtInner;
  
  txtPublisherReference.Click();
  txtPublisherReference.SetText(publisherReference);
});

When("I select a Gratis Reason {arg}", function selectGratisReason(gratisReason){
  let ddGratisReason =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_PT_Group_Box_OrderTypeReasons.PTOrderItems_Detail_ReasonsForOrderType.PTOrderItems_Detail_ReaonsForOrderType_GratisReasonID.LookupSearchCombo;
   
  ddGratisReason.Click();
  ddGratisReason.ClickItem(gratisReason);
  ddGratisReason.Keys("[Tab]"); 
});

Then("Checkout page should be displayed without payment method", function verifyCheckout_PaymentMethod(){
  //let paymentType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeID;
  //let tabCheckout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab;
  
  //aqObject.CheckProperty(tabCheckout, "Visible", cmpEqual, true)
  //if(!paymentType.Exists){
   //Log.Checkpoint("Payment method does not exist");
   //}
  //else{
   //Log.Error("Payment method exists")
   //}
    let paymentType = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTOrders.OrderBasket").WinFormsObject("Orders").WinFormsObject("splitContainerOuter").WinFormsObject("SplitterPanel", "", 2).WinFormsObject("panel4Summary").WinFormsObject("PTOrders.Summary").WinFormsObject("PTOrders.Summary.TabGroup").WinFormsObject("tabMain").WinFormsObject("PTOrders.Summary.Checkout.Tab").WinFormsObject("PTOrders.Summary.Checkout.Tab").WinFormsObject("PTOrders.Summary.Checkout.Tab.PT Group Box.PaymentOptionTemplate").WinFormsObject("PT.PTOrders.OTCBasket.CheckoutPayment").WinFormsObject("PT.PTOrders.OTCBasket.CheckoutPayment.PaymentTypeID").WinFormsObject("LookupSearchCombo");
  let tabCheckout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab;
  
  aqObject.CheckProperty(tabCheckout, "Visible", cmpEqual, true)
 
  if(paymentType.Visible){
   Log.Error("Payment method exists");
  }
  else{
    Log.Checkpoint("Payment method does not exist");
  }
    
});

When("I click on New Order", function clickNewOrderAPI(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_NewOrder.buttonImage.ClickButton();
});

Then("Invoice note should be displayed in Documents window as {arg}", function verifyInvoiceNoteGenerated(note){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let DocumentSource = gridDocuments.wValue(0, 4).OleValue;
  let DocumentProduced = gridDocuments.wValue(0, 5).OleValue;
  let DocumentAttached = gridDocuments.wValue(0, 6).OleValue;
  
  if( (aqObject.CompareProperty(DocumentSource, cmpEqual, note, 3)) && (aqObject.CompareProperty(DocumentProduced, cmpEqual, true, 3)) && ( aqObject.CompareProperty(DocumentAttached, cmpEqual, true, 3)) ){
    Log.Checkpoint("Invoice note is displayed");
     }
  else{
    Log.Error("Invoice note is not displayed");
    }
});

Then("I click Checkout button", function clickCheckout(){
  let windowTitle =  aqObject.GetPropertyValue(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption");
  let orderId = ( aqString.SubString(windowTitle , 11, 6) ); 
  orderIdDisplayed = orderId;
  
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();
});


Then("Order Date should be today, Order Process Type should be {arg},", function verifyOrderDate_OrderProcessType(orderProcessTypePar){
  let OrderDate = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderDate.txtInner.get_Text();
  let OrderProcessType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderProcessTypeID.LookupSearchCombo.get_Text();
  
  if(aqObject.CompareProperty(OrderDate, cmpEqual, aqDateTime.Today(), true, 3)){
    Log.Checkpoint("Order Date is today's date");
     }
  else{
    Log.Error("Order Date is not today's date");
    }
    
  if(aqObject.CompareProperty(OrderProcessType, cmpEqual, orderProcessTypePar, true, 3)){
    Log.Checkpoint("Order Process Type is correct");
     }
  else{
    Log.Error("Order Process Type is incorrect");
    }
});

Then("Order Type should be {arg}, Currency Type should be {arg}, Billing Plan should be {arg}", function verifyOrderTypeCurrencyTypeBillingPlan(orderTypePar, currencyTypePar, billingPlanPar){
  let OrderType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderTypeID.LookupSearchCombo.get_Text();
  let CurrencyType  = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_CurrencyTypeID.LookupSearchCombo.get_Text();
  let BillingPlan = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_BillingPlanID.LookupSearchCombo.get_Text();
  
  if(aqObject.CompareProperty(OrderType, cmpEqual, orderTypePar, true, 3)){
    Log.Checkpoint("Order Type is correct");
     }
  else{
    Log.Error("Order Type is incorrect");
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

Then("I enter Quantity {arg} to Order", function enterOrderQuantity(quantityPar){
  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  
  txtQuantity.Click();
  txtQuantity.SetText(quantityPar);
  txtQuantity.Keys("[Tab]");
});

Then("Order details should be correctly displayed", function verifyOrderDetails(){
  let productDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 2).OleValue;
  let invoiceAmount = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 7).OleValue;

  if(aqObject.CompareProperty(product , cmpEqual, productDisplayed, true, 3)){
    Log.Checkpoint("Product is correctly displayed");
     }
  else{
    Log.Error("Product is not correctly displayed");
    }
    
  if(aqObject.CompareProperty(TotalvalueOnCheckout, cmpEqual, invoiceAmount, true, 3)){
    Log.Checkpoint("Amount is correctly displayed");
     }
   else{
    Log.Error("Amount is not correctly displayed");
    }
});


Then("Information Text should be displayed under Ship To field", function verifyInformationText(){
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_PT_UnboundTextBox_ShipToMessage.textBox1, "Visible", cmpEqual, true)){
    Log.Checkpoint("Information Text is displayed");
     }
  else{
    Log.Error("Information Text is not displayed");
    }
});

Then("I click on Texts sub tab", function clickTabText(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.ClickTab("Texts");
});

Then("Document, Warehouse, Label and Footnote Texts should not be empty", function verifyDocumentWarehouseLabelFootnoteTexts(){
  let DocumentText = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_TextIds_Tab.PTOrders_Summary_Order_TextIds_Tab.PTOrders_Summary_Order_TextIds_Tab_PTLookupTextControl_DocumentTextID.aptifyTextBoxAddText.txtInner.get_Text();
  let WarehouseText = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_TextIds_Tab.PTOrders_Summary_Order_TextIds_Tab.PTOrders_Summary_Order_TextIds_Tab_PTLookupTextControl_WarehouseTextID.aptifyTextBoxAddText.txtInner.get_Text();
  let LabelText = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_TextIds_Tab.PTOrders_Summary_Order_TextIds_Tab.PTOrders_Summary_Order_TextIds_Tab_PTLookupTextControl_LabelTextID.aptifyTextBoxAddText.txtInner.get_Text();
  let FootnoteText = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_TextIds_Tab.PTOrders_Summary_Order_TextIds_Tab.PTOrders_Summary_Order_TextIds_Tab_PTLookupTextControl_FootnoteTextID.aptifyTextBoxAddText.txtInner.get_Text();

  if( (aqObject.CompareProperty(DocumentText, cmpNotEqual, EmptyVariant, true, 3)) && (aqObject.CompareProperty(WarehouseText, cmpNotEqual, EmptyVariant, true, 3)) && (aqObject.CompareProperty(LabelText, cmpNotEqual, EmptyVariant, true, 3)) && (aqObject.CompareProperty(FootnoteText, cmpNotEqual, EmptyVariant, true, 3)) ){
    Log.Checkpoint("Document, Warehouse, Label or Footnote Texts are not empty");
     }
  else{
    Log.Error("Document, Warehouse, Label or Footnote Texts are empty");
    }
});

Then("I check Custom text checkbox", function checkCustomTextCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_TextIds_Tab.PTOrders_Summary_Order_TextIds_Tab.PTOrders_Summary_Order_TextIds_Tab_PTLookupTextControl_DocumentTextID.aptifyCheckBoxEnabled.chkInternal.ClickButton();
});

Then("I change the text in Document Text to {arg}", function enterDocumentText(docText){
  let txtDocumentBaseText = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_TextIds_Tab.PTOrders_Summary_Order_TextIds_Tab.PTOrders_Summary_Order_TextIds_Tab_PTLookupTextControl_DocumentTextID.aptifyTextBoxAddText.txtInner;
  
  txtDocumentBaseText.Click();
  txtDocumentBaseText.SetText(docText);
  txtDocumentBaseText.Keys("[Tab]");
});

Then("Order details should be correctly displayed for first customer", function (){
  let productDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 2).OleValue;
  let valueDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 8).OleValue;
  
  if(aqObject.CompareProperty(product1 , cmpEqual, productDisplayed, true, 3)){
    Log.Checkpoint("Product is correctly displayed");
     }
  else{
    Log.Error("Product is not correctly displayed");
    }
    
  
  if(aqObject.CompareProperty(TotalvalueOnCheckout1 , cmpEqual, valueDisplayed, true, 3)){
    Log.Checkpoint("Total Value is correctly displayed");
     }
  else{
    Log.Error("Total Value is not correctly displayed");
    }
});

Then("Order details should be correctly displayed for second customer", function (){
  let productDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 2).OleValue;
  let valueDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 8).OleValue;

  if(aqObject.CompareProperty(product2, cmpEqual, productDisplayed, true, 3)){
    Log.Checkpoint("Product is correctly displayed");
     }
  else{
    Log.Error("Product is not correctly displayed");
    }
    
  
  if(aqObject.CompareProperty(TotalvalueOnCheckout2, cmpEqual, valueDisplayed, true, 3)){
    Log.Checkpoint("Total Value is correctly displayed");
     }
  else{
    Log.Error("Total Value is not correctly displayed");
    }
});


Then("I hover over Green $ icon", function hover$Icon(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.HoverMouseCell(0, 2);
});

Then("hover tip should be {arg}", function (param1){
  let addEditSundryCharge = NameMapping.Sys.Aptify_Shell.ToolTipNativeWindow.wText;
  
  if(aqObject.CompareProperty(addEditSundryCharge, cmpEqual, "Add\\Edit Sundry Charge To Order Line", true, 3)){
    Log.Checkpoint("Hover tip is correct");
     }
  else{
    Log.Error("Hover tip is incorrect");
    }
});

Then("I click on Add\\/ Edit Sundry Charge to Order Line icon", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 2);
});

Then("Product selection page should be Unfocused and Enter Sundry Charges page should be Enabled", function (){
  let formEnterSundryCharge = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PT_Group_Box_SundryCharges.PTOrderSundryCharges_OrderBasketHeader.PTOrderSundryCharges_OrderBasketHeader_Group_Box_1.MainGroupBox;
  let formProductSelection = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_Group_Box_1.MainGroupBox;

  if(aqObject.CheckProperty(formProductSelection, "Focused", cmpEqual, false)){
    Log.Checkpoint("Product selection page is Unfocused");
     }
  else{
    Log.Error("Product selection page is focused");
    }
    
  if(aqObject.CheckProperty(formEnterSundryCharge, "Enabled", cmpEqual, true)){
    Log.Checkpoint("Enter Sundry Charges page is Enabled");
     }
  else{
    Log.Error("Enter Sundry Charges page is Disabled");
    }  
});

Then("I select a Sundry Charge Type {arg}", function enterSundryChargeType(sundryChargeTypePar){
  let ddSundryChargeType =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PT_Group_Box_SundryCharges.PTOrderSundryCharges_OrderBasketHeader.PTOrderSundryCharges_OrderBasketHeader_SundryChargeTypeID.LookupSearchCombo;
 
  ddSundryChargeType.Click();
  ddSundryChargeType.ClickItem(sundryChargeTypePar);
  ddSundryChargeType.Keys("[Tab]");

  let sundryChargeValue =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PT_Group_Box_SundryCharges.PTOrderSundryCharges_OrderBasketHeader.PTOrderSundryCharges_OrderBasketHeader_ChargeValue.txtInner.get_Text();
  sundryCharge = sundryChargeValue;
});

Then("columns like Supply, Backordered, Held, Totals should be displayed", function verifySupplyBackorderedHeldTotals(){
  let Supply = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_CultureLabel_1;
  let Backordered = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_CultureLabel_2;
  let Held = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_CultureLabel_Held;
  let Totals = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_CultureLabel_3;
  
  if( (aqObject.CheckProperty(Supply, "Visible", cmpEqual, true)) && (aqObject.CheckProperty(Backordered, "Visible", cmpEqual, true)) && (aqObject.CheckProperty(Held, "Visible", cmpEqual, true)) && (aqObject.CheckProperty(Totals, "Visible", cmpEqual, true))  ){
    Log.Checkpoint("Supply, Backordered, Held, or Totals columns is displayed");
     }
  else{
    Log.Error("Supply, Backordered, Held, or Totals columns is not displayed");
    }
});

Then("Sundry Charge should be correctly displayed", function verifySundryCharge(){
   let SundryChargeDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_SundryValue.txtInner.get_Text();
   
   if(aqObject.CompareProperty(SundryChargeDisplayed, cmpEqual, sundryCharge, true, 3)){
    Log.Checkpoint("Sundry Charge is correctly displayed");
     }
   else{
    Log.Error("Sundry Charge is not correctly displayed");
    }
});

Then("Order details should be correctly displayed below", function (){
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

Then("I open the product information panel for {arg}", function (productName){
  clickFindProductBtn();
  enterSearchText(productName);
  clickSearchBtn();
  handleProductsGrid();
   
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});


When("I click on Sets Make & Break", function clickSetsMakeBreakAPI(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton10.ClickButton();
});

When("I enter a set in Product {arg}", function enterProductSet(productPar){
  let txtProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_PTProductVersionControl_1.advancedLinkBoxProducts.txtLink;

  txtProduct.Click();
  txtProduct.SetText(productPar);
  product = productPar;
  txtProduct.Keys("[Tab]");
  if( Aliases.Aptify_Shell.SearchForm.Exists )
   {
    Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(1, "Title");
   }
});

When("I select the checkbox Confirm Sets Made Up", function checkConfirmSetsMadeUp(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_ConfirmSetsMade.chkInternal.wState = cbChecked;
});

When("I select the transaction", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_Telerik_List_View_SetMakeupAllocation.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickRowIndicator(0);
});

When("I enter Packets {arg} to make sets", function enterPacketsForSets(packetsPar){
  let txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.PTInventorySetsMakeAndBreak_Step3_HeaderPackets.txtInner;
  
  txtPackets.Click();
  txtPackets.SetText(packetsPar);
  packets = packetsPar;
});

When("I enter Qty Loose {arg} to make sets", function enterQtyLooseForSets(qtyLoosePar){
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.PTInventorySetsMakeAndBreak_Step3_HeaderLoose.txtInner;
  
  txtQtyLoose.Click();
  txtQtyLoose.SetText(qtyLoosePar);
  qtyLoose = qtyLoosePar;
});

When("I select the products listed", function (){
  let radGridView = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  let i = 0;
  
  for (i; i<records; i++)
  {
   radGridView.ClickCell(i,0);
  } 
});

When("I click on Confirm Sets Madeup", function clickConfirmSetsMadeUp(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.PTInventorySetsMakeAndBreak_Step3_Active_Button_ConfirmSets.Click();
});

When("I click OK to confirm the transaction", function (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

Then("I click on Finish", function clickFinish(){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

When("I click Manage Inventory sub tab", function clickSubtabManageInventory(){
   Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Manage Inventory");
});

Then("I select the recent transaction", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 0);
});

Then("I click on Loose to Forward", function clickLooseToForward(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(188, 18);
});

When("I click Ok to message stating {arg}", function (param1){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

Then("I click Overview sub tab", function clickSubtabOverview(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Overview");
  let msgBox = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne;
  if(msgBox.Exists){
    msgBox.ClickButton();
  }
});


When("I enter size {arg} to make sets", function enterSizeForSets(packetSizePar){
  let txtPacketSize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.PTInventorySetsMakeAndBreak_Step3_HeaderPacketSize.txtInner;
  if ( txtPacketSize.Enabled == true ){
  txtPacketSize.Click();
  txtPacketSize.SetText(packetSizePar);
  packetSize = packetSizePar;
  }
});


Then("I click on Finish button to close Confirm Transactions window", function closeConfirmTransactionsPage(){
  let gridConfirmTransactions = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(gridConfirmTransactions.Exists){
   Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
   }
});

Then("Made into Sets and Disposal Qty should be displayed", function verifyMadeIntoSetsAndDisposalQty(){
  let gridDisposal = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let passCount = 0;
  for( let i = 0; i< gridDisposal.wRowCount; i++ ){ 
    let rowName = gridDisposal.wValue(i, "Disposal Type").OleValue;
    let rowValue =  gridDisposal.wValue(i, "Disposal Qty").OleValue;
    if((rowName == "Made into Sets") && (rowValue != EmptyVariant))
    {
      passCount =+ 1;
     
    }
  }  
  
  if(passCount == 1){
    Log.Checkpoint("Made into Sets and Disposal Qty is displayed");
  }
  else{
    Log.Error("Made into Sets and Disposal Qty is not displayed");
  }

});

Then("confirmed products should be cleared from all transactions", function verifyConfirmedTransactions(){
  let gridConfirmTransactions = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(gridConfirmTransactions.Exists){
    if(aqObject.CheckProperty(gridConfirmTransactions, "wRowCount", cmpEqual, 0)){
    Log.Checkpoint("All transactions are confirmed");
     }
    else{
    Log.Error("Not all transactions are confirmed");
    }
   
   }
});

Then("Product set should be displayed in the list below", function verifyProductSet(){ 
  let radGridView = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  let productSetDisplayed = radGridView.wValue(i, "Title").OleValue;  
  if(product == productSetDisplayed )
  {
    if(aqObject.CompareProperty(product, cmpEqual, productSetDisplayed, true,3)){
    Log.Checkpoint("Product set is displayed in the list");
     }
    else{
    Log.Error("Product set is not displayed in the list");
    }
    
  }
}

});

Then("I open customer information panel", function openCustomerInformation(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.ClickButton();
 
  searchCompany(company)
  clickSearchBtn();
  handleProductsGrid();
});


Then("The Ship To, Bill To and End User Addresses should be similar", function verifyShipBillToEndUserAddress(){
  let shipToAddress = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_ShipToNameAddress.PanelNameAndAddress.LabelName.get_Text();
  let billToAddress = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_BillToNameAddress.PanelNameAndAddress.LabelName.get_Text();
  let endUserAddress = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_LicenseeNameAddress.PanelNameAndAddress.LabelName.get_Text();
  
  if( (aqObject.CompareProperty(shipToAddress, cmpEqual, billToAddress, true,3)) && (aqObject.CompareProperty(billToAddress, cmpEqual, endUserAddress, true,3)) ){
    Log.Checkpoint("Ship To, Bill To and End User Addresses are similar");
     }
  else{
    Log.Error("Ship To, Bill To and End User Addresses are different");
    }
});

Then("Account Number,Telephone Number and Email Address should be displayed", function verifyAccountNumTelephoneEmail(){
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_ShipToIdentifierTypeValue, "Visible", cmpEqual, true)){
    Log.Checkpoint("Account Number is displayed");
     }
  else{
    Log.Error("Account Number is not displayed");
    }
    
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_ShipToNameAddress.LabelEmail, "Visible", cmpEqual, true)){
    Log.Checkpoint("Email address is displayed");
     }
  else{
    Log.Error("Email address is not displayed");
    }
    
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_ShipToNameAddress.PictureBoxTelephone, "Visible", cmpEqual, true)){
    Log.Checkpoint("Telephone Number is displayed");
     }
  else{
    Log.Error("Telephone Number is not displayed");
    }    
});

Then("I click Order Attributes tab", function clickTabOrderAttributes(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.ClickTab("Order Attributes");
});

Then("I set Release Priority to {arg}", function setReleasePriority(releasePriority){
  let ddReleasePriority = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderReleasePriorityID.LookupSearchCombo;
  
  ddReleasePriority.Click();
  ddReleasePriority.ClickItem(releasePriority);
  ddReleasePriority.Keys("[Tab]");
});

Then("I click on Red Arrow", function (){
  Sys.WaitProcess("Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton", 2000);  
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.buttonImage.ClickButton();
  if(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.Exists){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.buttonImage.ClickButton();    
  }
});

Then("I click on Add button to create Order", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
});

Then("I click Ok for pop up stating {arg}", function (param1){
  if(Aliases.Aptify_Shell.dlg.Exists){
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
    }
});

Then("I click on Edit Line icon", function clickEditLineIcon(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 0);
});

Then("Configuration, Valuation, Supply Status, Net, sections should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Valuation.MainGroupBox, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_SupplyStatus.MainGroupBox, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Net.MainGroupBox, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Configure.MainGroupBox, "Visible", cmpEqual, true);
});

Then("Backorders, Held, Totals sections should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Backorder.MainGroupBox, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Held.MainGroupBox, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Totals.MainGroupBox, "Visible", cmpEqual, true);
});

Then("I click Save button", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
});

Then("I click Trading tab", function clickTabTrading(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Trading");
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.ClickTab("Trading");
  }
});

Then("I click Account Profiles sub tab", function clickTabAccountProfiles(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.ClickTab("Account Profiles");
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.ClickTab("Account Profiles");
  }
});


Then("I click on recent Order", function (){
  let gridInvoices = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridInvoices.wRowCount;
  let i = 0;
  let array = [];
  for(i; i<records; i++)
  {
    let arr = gridInvoices.wValue(i, 18).OleValue;
    array.push(arr);     
    let largest = Math.max.apply(Math, array);    
    var pos = array.indexOf(largest);
  }
  gridInvoices.ClickRowIndicator(0, pos);
});

Then("Order should be correctly displayed", function (){
  let productDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 2).OleValue;
  let valueDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 8).OleValue;

  if(aqObject.CompareProperty(productDisplayed, cmpEqual, product, true, 3)){
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

Then("I open account profile {arg}", function openAccountProfile(profileNamePar){
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
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
});

Then("I click on the link to Invoice", function openAndSaveInvoice(){
   let gridInvoices = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
   let DocumentRef = gridInvoices.wValue(0, 2).OleValue;
 
   
   let sFile = sFolder + DocumentRef;
   aqFileSystem.CreateFolder(sFile);

   gridInvoices.ClickCell(0, 2);
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

Then("I retrieve the Total Value", function retrieveTotalValue(){
  let TotalvalueDisplayed =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_Total.textBox1.get_Text();
  let TotalValue = aqString.SubString(TotalvalueDisplayed, 1, 20);
  TotalvalueOnCheckout =  TotalValue;
});


Then("I refresh the page", function refreshAccountsReceivables(){
  Delay(60000);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(55, 19);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(57, 151);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(55, 19);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(57, 151);
});

Then("I select transaction type {arg}, Sale type {arg}, a Product {arg}", function selectTransactionTypeSaleProduct(transactionType, sale, productPar){
  selectTransactionType(transactionType);
  selectSale(sale);
  selectProduct(productPar);
});

Then("I enter P\\/O Reference, Quantity {arg}, seller {arg}", function enterPoRefQtySeller(quantityPar, soldBy){
  enterPOref();
  enterQuantity(quantityPar);
  selectSeller(soldBy);
  
  let availableInventoryDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.get_Text();
  availableInventoryBefore = availableInventoryDisplayed;
});

Then("available quantity should be decreased", function verifyAvailableQty(){
  let availableQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;

  if(aqObject.CompareProperty(availableQtyDisplayed, cmpLess, availableInventoryBefore, true, 3)){
    Log.Checkpoint("Available quantity is decreased");
     }
  else{
    Log.Error("Available quantity is not decreased");
    }
});

function selectSeller(soldBy){
  let ddSoldBy = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_SoldByID.LookupSearchCombo;
 
  ddSoldBy.Click();
  ddSoldBy.ClickItem(soldBy);
  ddSoldBy.Keys("[Tab]");
}

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


function enterQuantity(quantityPar){
  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  
  txtQuantity.Click();
  txtQuantity.SetText(quantityPar);
  quantity = quantityPar;
}

Then("Supply Information as {arg} should be displayed", function verifySupplyInformation(supplyInfo){
  let supplyInfoDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 19).OleValue;
  
  if(aqObject.CompareProperty(supplyInfoDisplayed, cmpEqual, supplyInfo, true,3)){
    Log.Checkpoint("Supply Information is correctly displayed");
     }
  else{
    Log.Error("Supply Information is not correctly displayed");
    }
});

Then("I click on Find Orders", function clickFindOrders(){
  if(Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.ClickButton();
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton12.ClickButton()
});

Then("I enter Customer", function enterCustomer(){
  let gridCustomers = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomer = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  
  txtCustomer.Click();
  txtCustomer.SetText(company);
  txtCustomer.Keys("[Tab]");
 
  if( gridCustomers.Exists )
   {
    gridCustomers.DblClickCell(0, "Title");
   }
});

Then("I enter Product", function enterProduct(){
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID.txtLink;
 
 txtProduct.Click();
 txtProduct.SetText(product);
 txtProduct.Keys("[Tab]");
 
 if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

Then("I click on Search button", function clickSearch(){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
});

Then("Line Item Status should be displayed as Backorder", function verifyLineItemStatus(){
  let gridOrderDetails = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRecords = gridOrderDetails.wRowCount;
  let i =0;
  for (i; i<totalRecords; i++)
  {
  let OrderId= gridOrderDetails.wValue(i, 33).OleValue; 
  if(orderIdDisplayed == OrderId)
  {
   let LineItemStatusDisplayed = gridOrderDetails.wValue(i, 20).OleValue; 
   if(aqObject.CompareProperty(LineItemStatusDisplayed, cmpEqual, "BackOrder", true, 3)){
    Log.Checkpoint("Line Item Status is BackOrder");
     }
    else{
    Log.Error("Line Item Status is not BackOrder");
    }
  }
  }                    
});

Then("I click on the record for Summary", function (){
  let gridOrderDetails = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRecords = gridOrderDetails.wRowCount;
  let i =0;
  for (i; i<totalRecords; i++)
  {
  let OrderId= gridOrderDetails.wValue(i, 33).OleValue; 
  if(orderIdDisplayed == OrderId)
  {
   gridOrderDetails.ClickRowIndicator(i);
  }
  }
});

Then("Supply for This transaction and Order Line Summary should be {arg}", function verifySupplyAndOrderLineSummary(param1){
  let SuppliedQty = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_SuppliedQuantity.txtInner.get_Text();
  let TotalSuppliedQty =  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_TotalSupplied.txtInner.get_Text();
  
  if(aqObject.CompareProperty(SuppliedQty, cmpEqual, 0, true, 3)){
    Log.Checkpoint("Supply Qty is 0");
     }
  else{
    Log.Error("Supply Qty is not 0");
    }
    
  if(aqObject.CompareProperty(TotalSuppliedQty, cmpEqual, 0, true, 3)){
    Log.Checkpoint("Order Line Summary is 0");
     }
  else{
    Log.Error("Order Line Summary is not 0");
    }  
});

Then("I click on Calculate button", function clickCalculateBtn(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_Active_Button_PriceCalculate.Exists){
   Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_Active_Button_PriceCalculate.Click(); 
  }
});


When("I click Trading tab from companies record", function clickTradingTab(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Trading");
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.ClickTab("Trading");
  }
});

When("I uncheck the Orders Allowed checkbox", function uncheckOrdersAllowedCheckbox(){
if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists){  
 Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.Companies_Trading_OrderPreferences_Tab.Companies_Trading_OrderPreferences_Tab.Companies_Trading_OrderPreferences_Tab_OrdersAllowed.chkInternal.ClickButton();
}
else{
Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_TabGroup.tabMain.Persons_Trading_OrderPreferences_Tab.Persons_Trading_OrderPreferences_Tab.Persons_Trading_OrderPreferences_Tab_OrdersAllowed.chkInternal.wState = cbUnchecked;  
}
});

Then("message stating {arg} should be displayed", function (message){
  let messageDisplayed = Aliases.Aptify_Shell.MessagePopup.messagePanel.message.get_Text();
  let trimMessage = aqString.Trim(messageDisplayed, aqString.stLeading);
  if(aqObject.CompareProperty(trimMessage, cmpEqual, message, true, 3)){
    Log.Checkpoint("Message states 'Orders Are Not Allowed For This Account' ");
     }
    else{
    Log.Error("Message does not state 'Orders Are Not Allowed For This Account'");
    }
});

Then("I enter a company {arg} in Ship To field", function enterShipTo(companyPar){
  let txtCompany = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_ShipToRoleID.txtLink;
  txtCompany.Keys("^a[BS]");
  txtCompany.Keys("[Tab]");
  txtCompany.Click();
  txtCompany.SetText(companyPar);
  company = companyPar;
  txtCompany.Keys("[Tab]");
});

Then("I click on New Order button", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton8.ClickButton();
});

Then("I open a correct profile {arg}", function openAccountProfile_companyPerson(profileNamePar){
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

});

Then("I uncheck the Order Allowed checkbox", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.Companies_Trading_OrderPreferences_Tab.Companies_Trading_OrderPreferences_Tab.Companies_Trading_OrderPreferences_Tab_OrdersAllowed.chkInternal.ClickButton();
});

Then("I select transaction type {arg}, Sale type {arg} and a second Product {arg}", function (transactionType, sale, productPar2){
  selectTransactionType(transactionType);
  selectSale(sale);
  selectSecondProduct(productPar2);
});

function selectSale(sale){
  let ddSale =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderTypeID.LookupSearchCombo;
 
  ddSale.Click();
  ddSale.ClickItem(sale);
  ddSale.Keys("[Tab]");
}


function selectFirstProduct(productPar1){
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
 
  txtProduct.Click();
  txtProduct.SetText(productPar1);
  product1 = productPar1;
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
}
function selectSecondProduct(productPar2){
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
 
  txtProduct.Click();
  txtProduct.SetText(productPar2);
  product2 = productPar2;
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
}

Then("Order details should be correctly displayed for second product", function (){
  let productDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 2).OleValue;
  let valueDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 8).OleValue;

  if(aqObject.CompareProperty(productDisplayed, cmpEqual, product2, true, 3)){
    Log.Checkpoint("Product is correctly displayed");
     }
  else{
    Log.Error("Product is not correctly displayed");
    }
    
  
  if(aqObject.CompareProperty(TotalvalueOnCheckout2, cmpEqual, valueDisplayed, true, 3)){
    Log.Checkpoint("Total Value is correctly displayed");
     }
  else{
    Log.Error("Total Value is not correctly displayed");
    }
  
});

Then("Order details should be correctly displayed for first product", function (){
  let productDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 2).OleValue;
  let valueDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 8).OleValue;

  if(aqObject.CompareProperty(productDisplayed, cmpEqual, product1, true, 3)){
    Log.Checkpoint("Product is correctly displayed");
     }
  else{
    Log.Error("Product is not correctly displayed");
    }
    
  
  if(aqObject.CompareProperty(TotalvalueOnCheckout1, cmpEqual, valueDisplayed, true, 3)){
    Log.Checkpoint("Total Value is correctly displayed");
     }
  else{
    Log.Error("Total Value is not correctly displayed");
    }
});

Then("I retrieve the Total Value for first product", function (){
  let TotalvalueDisplayed =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_Total.textBox1.get_Text();
  let TotalValue = aqString.SubString(TotalvalueDisplayed, 1, 10);
  TotalvalueOnCheckout1 =  TotalValue;
});

Then("I retrieve the Total Value for second product", function (){
  let TotalvalueDisplayed =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_Total.textBox1.get_Text();
  let TotalValue = aqString.SubString(TotalvalueDisplayed, 1, 10);
  TotalvalueOnCheckout2 =  TotalValue;
});


Then("I select transaction type {arg}, Sale type {arg}, first Product {arg}", function (transactionType, sale, productPar1){
  selectTransactionType(transactionType);
  selectSale(sale);
  selectFirstProduct(productPar1);
});

Then("I enter P\\/O Reference, Quantity {arg}, seller {arg} for first product", function (quantity, soldBy){
  enterPOref();
  enterQuantity(quantity);
  selectSeller(soldBy);
  
  let availableInventoryDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.get_Text();
  availableInventoryBefore1 = availableInventoryDisplayed;
});

Then("I enter P\\/O Reference code {arg}, Quantity {arg}, seller {arg} for second product", function (poRefPar, quantity, soldBy){
  enterPOref(poRefPar);
  enterQuantity(quantity);
  selectSeller(soldBy);
  
  let availableInventoryDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.get_Text();
  availableInventoryBefore2 = availableInventoryDisplayed;
});

function enterPOref(){
  
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

Then("available quantity should be decreased for first product", function (){
  let availableQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;

  if(aqObject.CompareProperty(availableQtyDisplayed, cmpLess, availableInventoryBefore1, true, 3)){
    Log.Checkpoint("Available quantity is decreased");
     }
  else{
    Log.Error("Available quantity is not decreased");
    }
  
});

Then("available quantity should be decreased for second product", function verifyDecreasedAvailableQty(){
  let availableQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;

  if(aqObject.CompareProperty(availableQtyDisplayed, cmpLess, availableInventoryBefore2, true, 3)){
    Log.Checkpoint("Available quantity is decreased");
     }
  else{
    Log.Error("Available quantity is not decreased");
    }
});
 
When("I open customer information panel for {arg}", function (customerName){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.Click();
 
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(customerName);
  customer = customerName;
  
  clickSearchBtn();
  handleProductsGrid();
});


When("I click on Backorders", function clickBackorders(){
  Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm", 10000);
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.ExpandItem("advance> Home|Orders");
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Orders|Back Orders");
});

When("I click on Backorder Wizard", function clickBackorderWizard(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(163, 18);
});

When("I click on Blue plus icon to add Product", function clickProductBluePlus(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_AddProductToAdvancedSearch.buttonImage.ClickButton();
});

When("I click on Blue plus icon to add Customer", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_AddCustomerToAdvancedSearch.buttonImage.ClickButton();
});

When("I click on Blue plus icon to add Reference", function clickReferenceBluePlus(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_AddCustomerReferenceToAdvancedSearch.buttonImage.ClickButton();
});

When("I click on Blue plus icon to add Customer Type", function clickCustomerBluePlus(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_AddCustTypeToAdvancedSearch.buttonImage.ClickButton();
});

When("I select Summary By Customer radio button", function selectSummaryByCustomer(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_GroupedOptions_SummaryOption.Summary_By_Customer.ClickButton();
});

When("I enter a Order Date from {arg} and To {arg}", function enterToAndFromOrderDate(ordateFrom, ordateTo){
  let txtOrdateFrom = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_OrderDateFrom.txtInner;
  
  txtOrdateFrom.Click();
  txtOrdateFrom.SetText(ordateFrom);
  txtOrdateFrom.Keys("[Tab]");
  
  let txtOrdateTo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_OrderDateTo.txtInner;
  
  txtOrdateTo.Click();
  txtOrdateTo.SetText(ordateTo);
  txtOrdateTo.Keys("[Tab]");
});

When("I enter a Inv Date From {arg} and To {arg}", function enterToAndFromInvoiceDate(invFrom, invTo){
  let txtInvFrom = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_InvoiceDateFrom.txtInner;
  
  txtInvFrom.Click();
  txtInvFrom.SetText(invFrom);
  txtInvFrom.Keys("[Tab]");
  
  let txtInvTo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_InvoiceDateTo.txtInner;
  
  txtInvTo.Click();
  txtInvTo.SetText(invTo);
  txtInvTo.Keys("[Tab]");
});

When("I enter a Qty From {arg} and To {arg}", function enterToAndFromQty(qtyFrom, qtyTo){
  let txtQtyFrom = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_BackOrderQuantityFrom.txtInner;
  
  txtQtyFrom.Click();
  txtQtyFrom.SetText(qtyFrom);
  txtQtyFrom.Keys("[Tab]");
  
  let txtQtyTo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_BackOrderQuantityTo.txtInner;
  
  txtQtyTo.Click();
  txtQtyTo.SetText(qtyTo);
  txtQtyTo.Keys("[Tab]");
});

When("I select a Order Type {arg}", function selectOrderTypeBackOrderWizard(orderType){
  let txtOrderType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_OrderType.LookupSearchCombo;
  
  txtOrderType.Click();
  txtOrderType.ClickItem(orderType);
  txtOrderType.Keys("[Tab]");
});

When("I check the Include Gratis checkbox", function checkIncludeGratisCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_IncludeGratis.chkInternal.ClickButton();
});

When("I select Supply site {arg}", function selectSupplySite(supplySite){
   let txtSupplySite = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_SupplySiteID.LookupSearchCombo;
   
   txtSupplySite.Click();
   txtSupplySite.ClickItem(supplySite);
   txtSupplySite.Keys("[Tab]");
});

When("I click Next button", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
  Delay(2000);
});

When("I check Release checkbox", function checkReleaseCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Main.PTBackOrderWizard_ReviewAndAction_Release.chkInternal.ClickButton();
});

When("I check Override Product Supply Status checkbox", function checkOverrideProductSupplyStatus(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_195.PTBackOrderWizard_ReviewAndAction.PTBackOrderWizard_ReviewAndAction_AdvanceGroupBoxActions.PTBackOrderWizard_ReviewAndAction_Main.PTBackOrderWizard_ReviewAndAction_Main_OverrideProductSupplyStatus.chkInternal.ClickButton();
});

When("I check Release to separate Billing wave checkbox", function checkReleaseToSeparateBillingWave(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_196.PTBackOrderWizard_ScheduleConfirm.PTBackOrderWizard_ScheduleConfirm_ReleaseToSeparateBillingWave.chkInternal.ClickButton();
});

When("I click Finish button", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

When("I click OK for pop up stating {arg}", function (param1){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

When("I click No to Close the wizard", function closeBackOrderWizard(){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

When("I click Billing Wave Release", function runBillingWaveRelease(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_BillingWaveRelease.buttonImage.ClickButton();

  if(Aliases.Aptify_Shell.LocalizedMsgBox.Exists){
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
});

When("I click on {arg} view", function (view){
   Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem(view);
});

When("I select a Product {arg} to release", function enterProductBackOrderWizard(product){
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

When("I enter a Reference {arg} to release", function enterReferenceBackOrderWizard(reference){
  let txtReference = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_CustomerReference.txtInner;
  
  txtReference.Click();
  txtReference.SetText(reference);
  txtReference.Keys("[Tab]");
});

When("I enter a Customer Type {arg} to release", function enterCustomerType(customerType){
  let gridCustomers = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomerType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_CustomerTypeID.txtLink;
  
  txtCustomerType.Click();
  txtCustomerType.SetText(customerType);
  txtCustomerType.Keys("[Tab]");
  
  if( gridCustomers.Exists )
   {
    gridCustomers.DblClickCell(0, "Title");
   }
});

When("I select a Customer {arg} to release", function selectCustomerBackOrderWizard(customer){
  let gridCustomers = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomer = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_CustomerID.txtLink;
  
  txtCustomer.Click();
  txtCustomer.SetText(customer);
  backorderCustomer = customer;
  txtCustomer.Keys("[Tab]");
  
  if( gridCustomers.Exists )
   {
    gridCustomers.DblClickCell(0, "Title");
   }
});

When("I click on Orders from folder list", function (){
  //Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Orders");
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItemXY("advance> Home|Orders", 45, 10);
});

When("I select the record from Product Summary", function (){
  Delay(3000);
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_211.PTBackOrderWizard_ProductSummary.PTBackOrderWizard_ProductSummary_ProductSummaryELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickRowIndicator(0);
});

When("I click on Find Orders", function clickFindOrdersBtn(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton12.ClickButton();
});

When("I enter Customer", function (){
  let gridCustomers = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomer = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  
  txtCustomer.Click();
  txtCustomer.SetText(backorderCustomer);
  txtCustomer.Keys("[Tab]");
 
  if( gridCustomers.Exists )
   {
    gridCustomers.DblClickCell(0, "Title");
   }
});

When("I enter Product", function (){
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID.txtLink;
 
 txtProduct.Click();
 txtProduct.SetText(backorderProduct);
 txtProduct.Keys("[Tab]");
 
 if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

When("I click on the record for Summary", function (){
  let gridOrderDetails = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridOrderDetails.wRowCount;
  let i = 0;
  let array = [];
  for(i; i<records; i++)
  {
    let arr = gridOrderDetails.wValue(i, 35).OleValue;
    array.push(arr);     
    let largest = Math.max.apply(Math, array);    
    var pos = array.indexOf(largest);
  }
  gridOrderDetails.ClickRowIndicator(0, pos);
});

When("I select the record from Backorder Details", function (){
  Delay(3000);
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_213.PTBackOrderWizard_Details.PTBackOrderWizard_Details_DetailsELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickRowIndicator(0);
});

When("I click on Search button to search order", function (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
});

When("I click refresh on Documents", function refreshDocumentsSection(){
  Delay(60000);
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(75, 10);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(61, 173);
  
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(75, 10);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(61, 173);
  
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(75, 10);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(61, 173);
  
  Delay(12000);
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(75, 10);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(61, 173);
  
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(75, 10);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(61, 173);

  let DocumentRefDisplayed = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 2).OleValue;
  DocumentRef = DocumentRefDisplayed; 
});

Then("Order Type as {arg} and Order Status as {arg} should be displayed", function verifyOrderTypeAndStatus(orderTypePar, orderStatusPar){
   let tabSummary = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General;
  
   let orderType = tabSummary.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderType.txtInner.get_Text();
   let orderStatus = tabSummary.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderStatus.txtInner.get_Text();
     
    if(aqObject.CompareProperty(orderType, cmpEqual, orderTypePar, true, 3)){
    Log.Checkpoint("Order Type is Advice Note");
     }
    else{
    Log.Error("Order Type is not Advice Note");
    }
  
  
    if(aqObject.CompareProperty(orderStatus, cmpEqual, orderStatusPar, true, 3)){
    Log.Checkpoint("Order Status is Open Order");
     }
    else{
    Log.Error("Order Status is not Open Order");
     }  
});

Then("I open product information panel", function (){
  clickFindProductBtn();
  searchProduct(product);
  clickSearchBtn();
  handleProductsGrid();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});


When("I set inventory site Supply Status to {arg}", function (status){
  clickInventoryTab();
  SetSupplyStatus(status);
});

Then("Supply Status should be set to {arg}", function verifySupplyStatus(status){
  let supplyStatus = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 4).OleValue;
  
  if(aqObject.CompareProperty(status, cmpEqual, supplyStatus, true, 3)){
    Log.Checkpoint("Supply Status is Open");
     }
  else{
    Log.Error("Supply Status is not open");
    }
});

Then("I create a price set of Currency Type {arg} and Price {arg}", function (currency, pricePar){
  ClickPricesTab();
  ClickNew();
  enterInformation(currency, pricePar);
  clickSaveAndClose();
});

Then("price set should be displayed with information submitted", function (){
  let gridPrices = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let priceDisplayed = gridPrices.wValue(0, 2).OleValue;
  let renewPriceDisplayed = gridPrices.wValue(0, 3).OleValue;
  
  if(aqObject.CompareProperty(price, cmpEqual, priceDisplayed, true, 3)){
    Log.Checkpoint("Price is correctly displayed");
     }
  else{
    Log.Error("Price is not correctly displayed");
    }
    
  if(aqObject.CompareProperty(price, cmpEqual, renewPriceDisplayed, true, 3)){
    Log.Checkpoint("Renew Price is correctly displayed");
     }
  else{
    Log.Error("Renew Price is not correctly displayed");
    }
});

When("select a picking location {arg}", function (pickingLocation){
  selectPickingLocation(pickingLocation);
  clickSaveAndClose();
});


function clickInventoryTab(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
}

function SetSupplyStatus(status)
{
  let gridInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  gridInventory.DblClickRowIndicator(0);
  let ddSiteStatus = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteStatusID.LookupSearchCombo;
  ddSiteStatus.Click();
  ddSiteStatus.ClickItem(status);
}

function selectPickingLocation(pickingLocation){
  let txtPickingLocation = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_DefaultPickingLocationID.txtLink;
  txtPickingLocation.Click();
  txtPickingLocation.SetText(pickingLocation);
  txtPickingLocation.Keys("[Tab]");
 } 
 
function ClickPricesTab(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Prices");
}

function ClickNew(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(13, 18);
}
function enterInformation(currency, pricePar){
  let ddPriceType = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_PriceTypeID.LookupSearchCombo;
  ddPriceType.ClickItem("Standard Price");
  ddPriceType.Keys("[Tab]");
  
  let ddPriceName = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_PriceNameID.LookupSearchCombo;
  ddPriceName.ClickItem("Contract Price");
  ddPriceName.Keys("[Tab]");
  
  let ddLicense = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_LicenseID.LookupSearchCombo; 
  ddLicense.ClickItem("Sale");
  ddLicense.Keys("[Tab]");
  
  let ddCurrencyType = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_CurrencyTypeID.LookupSearchCombo;
  ddCurrencyType.ClickItem(currency);
  ddCurrencyType.Keys("[Tab]");
  
  let txtPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Price.txtInner;
  txtPrice.Click();
  txtPrice.SetText(pricePar);
  price = pricePar;
  
 // let txtRenewPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_RenewPrice.txtInner;
 // txtRenewPrice.Click();
 // txtRenewPrice.SetText(70);
  
  let txtToDate =  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_EndDate.txtInner;
  txtToDate.Click();
  txtToDate.SetText(aqDateTime.AddDays(aqDateTime.Today(), 3));
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_IsDefault.chkInternal.ClickButton();
}

When("I select Bundle type {arg}", function selectBundleType(bundleType){
   let ddBundleType = Aliases.Aptify_Shell.PTProductWizard.WizPanels_403.PTProducts_OTC_BundlingProfile1.PT_PTProducts_BundlingProfile1_BundleTypeID.LookupSearchCombo;
   
   ddBundleType.Click();
   ddBundleType.ClickItem(bundleType);
   ddBundleType.Keys("[Tab]");
});

When("I select Default License {arg}", function selectDefaultLicense(license){
   let ddLicense = Aliases.Aptify_Shell.PTProductWizard.WizPanels_403.PTProducts_OTC_BundlingProfile1.PT_PTProducts_BundlingProfile1_DefaultLicenseID.LookupSearchCombo;

   ddLicense.Click();
   ddLicense.ClickItem(license);
   ddLicense.Keys("[Tab]");
});

Then("new bundle is created with all the information submitted", function verifyNewBundleDetails(){
  let titleDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea.Group_PT_Products_Toparea_Title.txtInner.get_Text();
  let imprintDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea.Group_PT_Products_Toparea_Organizations.LookupSearchCombo.get_Text();
  let productTypeDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea.Group_PT_Products_Toparea_ResourceType.txtInner.get_Text();
  
  let productTitle = aqString.Concat(titlePrefix ," "+withoutPrefix);

  if(aqObject.CompareProperty(productTitle, cmpEqual, titleDisplayed, 3)){
    Log.Checkpoint("Product Title is correct");
     }
  else{
    Log.Error("Product Title is incorrect");
    }
    
    
  if(aqObject.CompareProperty(imprint, cmpEqual, imprintDisplayed, 3)){
    Log.Checkpoint("Organization is correct");
     }
  else{
    Log.Error("Organization is incorrect");
    }
    
    
  if(aqObject.CompareProperty(productType, cmpEqual, productTypeDisplayed, 3)){
    Log.Checkpoint("Product Type is correct");
     }
  else{
    Log.Error("Product Type is incorrect");
    }    
});

Then("I set inventory site Supply Status to {arg}", function setSupplyStatus(status){
  clickInventoryTab();
  SetSupplyStatus(status);
});

Then("select a picking location {arg}", function selectPickingLocationAndSave(pickingLocation){
  selectPickingLocation(pickingLocation);
  clickSaveAndClose();
});

Then("I add Dimension of type {arg}, value {arg} and unit {arg}", function createDimension(dimensionTypePar, dimensionValuePar, dimensionUnit){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Classifications");
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Classification.Products_Classification.Products_Classification_Tabs.tabMain.ClickTab("Dimensions");
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Classification.Products_Classification.Products_Classification_Tabs.tabMain.PTProducts_Dimensions.Products_Dimensions.Product_Dimensions_SubtypeView.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");

  let ddDimensionType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_TypeID.LookupSearchCombo;
  ddDimensionType.Click();
  ddDimensionType.ClickItem(dimensionTypePar);
  ddDimensionType.Keys("[Tab]");
  
  let txtDimensionValue = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_Value.txtInner;
  txtDimensionValue.Click();
  txtDimensionValue.SetText(dimensionValuePar);
  
  let ddDimensionUnit = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_ONIXUnitID.LookupSearchCombo;
  ddDimensionUnit.Click();
  ddDimensionUnit.ClickItem(dimensionUnit);
  ddDimensionUnit.Keys("[Tab]");

  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("I add Identifier of type {arg} and range {arg}", function createIdentifier(identifierType, range){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Details");

  let gridIdentifiers = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_General.Products_Tabs_General.Products_ProductDetails_PTproductIdentifiers.AptifyControlBase_Fill_Panel.flexSubType;
  gridIdentifiers.ClickR();
  gridIdentifiers.PopupMenu.Click("New");
  
  let ddIdentifierType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo;
  ddIdentifierType.Click();
  ddIdentifierType.ClickItem(identifierType); 
  ddIdentifierType.Keys("[Tab]");
  
  let ddRange = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_OrganizationCodeAllocationsID.LookupSearchCombo;
  ddRange.Click();
  ddRange.ClickItem(range);
  ddRange.Keys("[Tab]");
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("I click Bundles tab", function clickTabBundle(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Bundles");
});

Then("I enter a product {arg} in Search field", function (productPar){
  let txtSearch = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Products_Search.Products_Search_PTSearchParams.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.quickSearch.quickSearchText;
  
  txtSearch.Click();
  txtSearch.SetText(productPar);
  product = productPar;
});

Then("I enter product {arg} in Search field", function (productPar){
  let txtSearch = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Products_Search.Products_Search_PTSearchParams.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.quickSearch.quickSearchText;
  
  txtSearch.Click();
  txtSearch.SetText(productPar);
  product1 = productPar;
});

Then("I click on Search", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Products_Search.Products_Search_PTSearchParams.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
});

Then("I drag the first product to Bundle Control frame", function dragFirstProductToBundleControlFrame(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Products_Search.Products_Search_PTSearchParams.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Drag(77, 27, -248, -37);
});

Then("I drag the second product to Bundle Control frame", function dragSecondProductToBundleControlFrame(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Products_Search.Products_Search_PTSearchParams.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Drag(77, 27, -248, -37);
});

Then("I click on the first product", function (){
   Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel2.panel4Tree.radTreeView.ClickItem("[0]|[0]");  
});

Then("I enter Quantity {arg}", function (quantity){
  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Bundles_ProductParts_Form.Bundles_ProductParts_Tabs.tabMain.Bundles_ProductParts_Form_Component_Tab.PT_ProductParts_Item.PT_ProductParts_Quantity.txtInner;
  
  txtQuantity.Click();
  txtQuantity.SetText(quantity);
});

Then("I enter Revenue {arg}", function enterRevenue(revenue){
  let txtRevenue = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Bundles_ProductParts_Form.Bundles_ProductParts_Tabs.tabMain.Bundles_ProductParts_Form_Component_Tab.PT_ProductParts_Item.PT_ProductParts_PctOfRev.txtInner;
  
  txtRevenue.Click();
  txtRevenue.SetText(revenue);
});

Then("I click on the second product", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel2.panel4Tree.radTreeView.ClickItem("[0]|[1]");
});

Then("I click on the bundle", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel2.panel4Tree.radTreeView.ClickItem("[0]");
});

Then("I click on Recalculate button", function clickRecalculateBtn(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PT_ProductParts_Overview.PT_ProductParts_Summary_Recalculate.Click(66, 6);
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});

Then("I click on Inventory", function clickInventory(){
  //Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Inventory");
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Inventory");
});

Then("I click on Goods In", function clickGoodsIn(){
  if(Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton3.ClickButton();
  
});

Then("I select a Site\\/Warehouse {arg}", function enterSiteWarehouseGoosIn(siteWarehouse){
  let ddSiteWarehouse = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_SiteWarehouseID.LookupSearchCombo;
  
  ddSiteWarehouse.Click();
  ddSiteWarehouse.ClickItem(siteWarehouse);
  ddSiteWarehouse.Keys("[Tab]");;
});

Then("I select a before date {arg} from Received Date", function enterReceivedDateGoodsIn(receivedDate){
  let txtReceivedDate = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_ReceivedDate.txtInner;
  
  txtReceivedDate.Click();
  txtReceivedDate.SetText(receivedDate);
});

Then("I enter a message {arg} in Reference", function enterReferenceGoodsIn(reference){
  let txtReference = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_Reference.txtInner;
  
  txtReference.Click();
  txtReference.SetText(reference);
});

Then("I select a product {arg} in Received section", function selectProductGoodsIn(productPar){
  let txtProduct =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID.txtLink;
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

   txtProduct.Click();
   txtProduct.SetText(productPar);
   product = productPar;
   txtProduct.Keys("[Tab]");
    if( Aliases.Aptify_Shell.SearchForm.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   } 
});

Then("I enter first product in Received section", function selectGoodsInProduct(){
  let txtProduct =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID.txtLink;
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

   txtProduct.Click();
   txtProduct.SetText(product1);
   txtProduct.Keys("[Tab]");
    if( Aliases.Aptify_Shell.SearchForm.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   } 
});

Then("I enter second product in Received section", function (){
  let txtProduct =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID.txtLink;
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

   txtProduct.Click();
   txtProduct.SetText(product2);
   txtProduct.Keys("[Tab]");
    if( Aliases.Aptify_Shell.SearchForm.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   } 
});


Then("I enter Size {arg}", function enterSize(sizePar){
  let txtSize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PacketSize.txtInner;
   
  txtSize.Click();
  txtSize.SetText(sizePar);
  txtSize.Keys("[Tab]");
});

Then("I enter number of loose packets {arg}", function enterQtyLoose(qtyLoosePar){
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_LooseQty.txtInner;
  
  txtQtyLoose.Click();
  txtQtyLoose.SetText(qtyLoosePar);
  qtyLoose = qtyLoosePar;
  txtQtyLoose.Keys("[Tab]");
});

Then("I select the two products", function (){
  let gridStockManager = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  gridStockManager.ClickCell(0, 0);
  gridStockManager.ClickCell(1, 0);
});

Then("I click on Loose to Forward icon", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(186, 16);
});

Then("I click Ok to message stating {arg}", function (param1){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

Then("physical inventory displayed should be correct", function verifyPhysicalInventory(){
  let physicalQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 2).OleValue;
 
  if(aqObject.CompareProperty(physicalQtyDisplayed, cmpEqual, qtyLoose, 3)){
    Log.Checkpoint("Physical Inventory is correct");
     }
  else{
    Log.Error("Physical Inventory is incorrect");
    }
});

Then("I click Manage Inventory sub tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Manage Inventory");
});

Then("I confirm all the pending transactions", function confirmPendingTransactions(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 1);
  
  let radGridView = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let i = 0;
  if(radGridView.Exists){
    let records = radGridView.wRowCount;
  for (i; i<records; i++)
  {
   radGridView.ClickCell(i,0);
  }
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(125, 17);
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton()
  }
});

Then("I click on Add button to add goods", function clickAddGoodsIn(){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Active_Button_Add.Click();
});

 
When("I select transaction type {arg},  Sale type {arg}, a Product {arg}", function selectTransactionSaleProduct(transactionType, sale, productPar){
 selectTransactionType(transactionType);
 selectSale(sale);
 selectProduct(productPar);
});

When("I enter P\\/O Reference, Quantity {arg}, seller {arg}", function enterPoRefQuantitySeller(quantity, soldBy){
  enterPOref();
  enterQuantity(quantity);
  selectSeller(soldBy);
});

When("I select a Sundry Charge Type {arg}, Invoice Group {arg}, Organisation {arg}", function selectSundryChargeInvoiceGrpOrg(sundryChargeType, invoiceGrp, org){
  selectSundryChargeType(sundryChargeType);
  selectInvoiceGrp(invoiceGrp);
  selectOrganisation(org);
});

When("I click Checkout button", function retrieveOrderIdClickCheckout(){
  let windowTitle =  aqObject.GetPropertyValue(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption");
  let orderId = ( aqString.SubString(windowTitle , 11, 6) ); 
  orderIdDisplayed = orderId;
  
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();
});

When("I click refresh on My open basket", function refreshMyOpenBasket(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea4.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(87, 15);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(58, 182);
});

Then("order should be displayed under Recent Orders window", function verifyRecentOrders(){
  let orderIdRecentOrders = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 25).OleValue;
  
  if(aqObject.CompareProperty(orderIdDisplayed, cmpEqual, orderIdRecentOrders, 3)){
    Log.Checkpoint("Order is displayed under Recent Orders window");
     }
  else{
    Log.Error("Order is not displayed under Recent Orders window");
    }
});

Then("I click Billing Wave Release", function runBillingWave(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_BillingWaveRelease.buttonImage.ClickButton();
  if(Aliases.Aptify_Shell.LocalizedMsgBox.Exists){
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
});

function selectTransactionType(transactionType){
  let ddTransactionType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderProcessTypeID.LookupSearchCombo;
  
  ddTransactionType.Click();
  ddTransactionType.ClickItem(transactionType);
  ddTransactionType.Keys("[Tab]");
}

function selectSundryChargeType(sundryChargeType){
  let ddSundryChargeType =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PT_Group_Box_SundryCharges.PTOrderSundryCharges_OrderBasketHeader.PTOrderSundryCharges_OrderBasketHeader_SundryChargeTypeID.LookupSearchCombo;
 
  ddSundryChargeType.Click();
  ddSundryChargeType.ClickItem(sundryChargeType);
  ddSundryChargeType.Keys("[Tab]");
} 

function selectInvoiceGrp(invoiceGrp){
  let ddInvoiceGrp =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PT_Group_Box_SundryCharges.PTOrderSundryCharges_OrderBasketHeader.PTOrderSundryCharges_OrderBasketHeader_InvoiceGroupID.LookupSearchCombo;
 
  ddInvoiceGrp.Click();
  ddInvoiceGrp.ClickItem(invoiceGrp);
  ddInvoiceGrp.Keys("[Tab]");
}

function selectOrganisation(org){
  let ddOrg =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PT_Group_Box_SundryCharges.PTOrderSundryCharges_OrderBasketHeader.PTOrderSundryCharges_OrderBasketHeader_OrganizationID.LookupSearchCombo;
  
  ddOrg.Click();
  ddOrg.ClickItem(org);
  ddOrg.Keys("[Tab]");
}


When("I enter Quantity {arg}, seller {arg}", function enterQuantitySeller(quantity, soldBy){
  enterQuantity(quantity);
  selectSeller(soldBy);
});

Then("I click refresh on Recent Orders", function refreshRecentOrders(){
  Delay(15000);
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(81, 14);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(45, 178);
});

Then("Invoice note should be displayed in Documents window", function verifyInvoiceGenerated(){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let DocumentSource = gridDocuments.wValue(0, 4).OleValue;
  let DocumentProduced = gridDocuments.wValue(0, 5).OleValue;
  let DocumentAttached = gridDocuments.wValue(0, 6).OleValue;
  
  if( (aqObject.CompareProperty(DocumentSource, cmpEqual, "Order Invoice", 3)) && (aqObject.CompareProperty(DocumentProduced, cmpEqual, true, 3)) && (aqObject.CompareProperty(DocumentAttached, cmpEqual, true, 3)) ){
    Log.Checkpoint("Invoice note is displayed in Documents window");
     }
  else{
    Log.Error("Invoice note is not displayed in Documents window");
    }
});

Then("I open the Invoice generated", function openInvoiceAndSave(){
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

Then("I click refresh on Documents", function refreshDocuments(){
  let buttonOtherActions = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1;
  Delay(60000);
  buttonOtherActions.Click(58, 13);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(43, 184);
    
  buttonOtherActions.Click(58, 13);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(43, 184);
    
  buttonOtherActions.Click(58, 13);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(43, 184);
    
  Delay(15000);
  
  buttonOtherActions.Click(58, 13);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(43, 184);

  buttonOtherActions.Click(58, 13);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(43, 184);
  
  buttonOtherActions.Click(58, 13);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(43, 184);
    
  buttonOtherActions.Click(58, 13);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(43, 184);
    
});

function enterSearchText(productName){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(productName);
}

function searchCompany(company){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(company);
}

function searchProduct(product){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(product);
}

function searchProduct1(product1){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(product1);
}

function searchProduct2(product2){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(product2);
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
function handleProductsGridforset(){
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(1, "Title");
   }
}

function clickFindProductBtn(){
   Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.Click();
}

Then("I click Save Record and Close Form", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

When("I enter Without Prefix", function enterWithoutPrefix(){
  let anysize = 4;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomWithoutPrefix="";
  for( let i=0; i < anysize; i++ ){
  randomWithoutPrefix += charset[Math.floor(Math.random() * charset.length)];
  }  
  
  let txtWithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner;
  txtWithoutPrefix.Click();
  txtWithoutPrefix.Keys(randomWithoutPrefix);
  withoutPrefix = randomWithoutPrefix;;
});

When("I enter {arg} in Organization field", function (organization){
  let txtImprint = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProducts_Wizard_Organizations.txtLink;
  txtImprint.Click();
  txtImprint.Keys(organization);
  txtImprint.Keys("[Tab]");
  imprint = organization;
});

When("I click on Ok button", function (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

When("I click on Manage Backorders", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton13.ClickButton();
});


Then("I click on Ledger tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.ClickTab("Ledger");
});

Then("I open customer information panel for {arg}", function (customerName){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.Click();
 
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(customerName);
  customer = customerName;
  
  clickSearchBtn();
  handleProductsGrid();
});

Then("I open product information panel for product {arg}", function (product){
  clickFindProductBtn();
  searchProduct(product);
  clickSearchBtn();
  handleProductsGrid();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});


Then("I open product set information panel", function (){
  clickFindProductBtn();
  searchProduct(product);
  clickSearchBtn();
  handleProductsGridforset();
  retrieveProducts();
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});

function retrieveProducts()
{
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PT_ProductParts_Overview.PT_ProductParts_Overview_Telerik_List_View_BundleOverviewParts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let productFirst = radGridView.wValue(0, "Sub Product").OleValue;
  product1 = productFirst;
  let productSecond = radGridView.wValue(1, "Sub Product").OleValue;
  product2 = productSecond;
}


Then("I open information panel for product in Set", function (){
  var i = 0;
  var j ;

  for(i; i<records; i++)
  {
    for(j = arrayProducts.length; j>0; j-- )
    {
    clickFindProductBtn();
    searchProduct(arrayProducts[j-1]);
    clickSearchBtn();
    handleProductsGrid();
  
    Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
    }
  } 
});

Then("I open information panel for first product in Set", function (){
    closeForm();
    clickFindProductBtn();
    searchProduct(product1);
    clickSearchBtn();
    handleProductsGrid();
  
    Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});

Then("I open information panel for second product in Set", function (){
    clickFindProductBtn();
    searchProduct(product2);
    clickSearchBtn();
    handleProductsGrid();
  
    Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});

When("I select transaction type {arg}, Sale type {arg}, a Product {arg}", function (transactionType, sale, productPar){
  selectTransactionType(transactionType);
  selectSale(sale);
  selectProduct(productPar);
});

Then("order should not be displayed in open basket", function (){
  let gridOpenBasket = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea4.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var totalRecords = gridOpenBasket.wRowCount;
  var i =0;
  var isValueMatched = false;

  for (i; i<totalRecords; i++)
  {
  var orderId = gridOpenBasket.wValue(i, 22).OleValue
  if(orderId == orderIdDisplayed)
  {
  isValueMatched = true;
  break;
  }
  }

  if(isValueMatched){
  Log.Error("Order has not been checked out");
  }else{
  Log.Checkpoint("Order has been checked out");
  }
});

Then("I enter first product {arg} in Search field", function (productPar){
  let txtSearch = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Products_Search.Products_Search_PTSearchParams.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.quickSearch.quickSearchText;
  
  txtSearch.Click();
  txtSearch.SetText(productPar);
  product1 = productPar;
});

Then("I enter second product {arg} in Search field", function (productPar){
  let txtSearch = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Products_Search.Products_Search_PTSearchParams.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams.quickSearch.quickSearchText;
  
  txtSearch.Click();
  txtSearch.SetText(productPar);
  product2 = productPar;
});


Then("I open information panel for first product", function (){
  clickFindProductBtn();
  searchProduct1(product1);
  clickSearchBtn();
  handleProductsGrid();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});

Then("I open information panel for second product", function (){
  clickFindProductBtn();
  searchProduct2(product2)
  clickSearchBtn();
  handleProductsGrid();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});


When("I check the checkbox Move Inventory to Make Sets", function checkboxMoveInventoryToMakeSets (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_MoveComponentsToSetMaking.chkInternal.wState = cbChecked;
});

When("I select product in the frame", function selectProductSetsMakeAndBreakWizard (){
  let radGridViewSetsMake = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_Telerik_List_View_SetMakeupAllocation.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCountSetsMake = radGridViewSetsMake.wRowCount;
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_Telerik_List_View_SetMakeupAllocation.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(rowCountSetsMake-1, "UserName");
});

When("I check the checkboxs beside the product name in the frame right side", function checkCheckboxesMOveInventoryToMakeSets (){
  let rcwindow1 = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_194.PTInventorySetsMakeAndBreakWizard_Step2.PTInventorySetsMakeAndBreakWizard_Step2_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTInventorySetsMakeAndBreak_Step2_TopNodeELV.PTInventorySetsMakeAndBreak_TopNodeELV_TelerikListView_TopNode.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.RowCount;
  let radGridViewMoveInventoryToMakeSets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_194.PTInventorySetsMakeAndBreakWizard_Step2.PTInventorySetsMakeAndBreakWizard_Step2_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTInventorySetsMakeAndBreak_Step2_TopNodeELV.PTInventorySetsMakeAndBreak_TopNodeELV_TelerikListView_TopNode.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  for (i=0; i<rcwindow1;i++){
  radGridViewMoveInventoryToMakeSets.ClickCell(i,0);
  }
  Delay(1000);
  
});

When("I check the checkboxes to select", function checkCheckboxesToSelect (){
  let rcwindow =Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.RowCount;
  let radGridViewCheckCheckbox = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  for (i=0;i < rcwindow ;i++) {
  radGridViewCheckCheckbox.ClickCell(i,0);
  }
  
});

When("I click on Finish to close the wizard", function clickFinishBtn (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

Then("Inventory Movement should be successfully done", function checkpointInventoryMovementDone (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top, "Visible", cmpEqual, true);
});

Then("I search for the product {arg}", function searchProductToClickPhysicalInventoryTab (product){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  let ProductSearchingWizard = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let textBox = ProductSearchingWizard.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  textBox.Click();
  textBox.SetText(product);
  textBox.Text.OleValue;
  
  let btnSearch = ProductSearchingWizard.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton
  btnSearch.ClickButton();
  
  let radGridViewSearchProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewSearchProduct.Exists)
  {
      radGridViewSearchProduct.DblClickCell(0, "Title");
  }
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  ultraTabControl.ClickTab("Inventory");
  
});

When("I click on Next button from Inventory Sets Make and Break window", function clickNextBtnSetsMakeAndBreak (){
  let button = Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext;
  button.ClickButton();
});



//backorder

Then("Order should be processed successfully", function checkpointOrderProcessedSuccessfully (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1, "wRowCount", cmpEqual, 1);
});

Then("I enter P\\/O Refrence", function enterReferenceOrdersIdWizard (){
  PORefInt = Project.Variables.POInt
  PORef = aqString.Concat("AUT", PORefInt)
  Project.Variables.POInt = Project.Variables.POInt+1
  Project.Variables.PORef = PORef
  
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSearch_CustomerLineRef.txtInner;
  txtReference.Keys(Project.Variables.PORef);
  refCode = Project.Variables.PORef
  txtReference.Keys("[Tab]");
  
});

Then("I enter Qty {arg}", function enterQtyOrdersIdWizard (orderQty){
  let txtOrderQty = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  txtOrderQty.Keys(orderQty);
});

Then("I select Seller Information Sold By {arg}", function selectSellerInformation (sellerInfo){
  let ddSoldBy = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.splitContainerDetails.SplitterPanel2.PTOrders_ProductSelection.PTOrders_ProductSelection_SoldByID.LookupSearchCombo;
  ddSoldBy.ClickItem(sellerInfo);
});

Then("I click on Brown pencil icon to edit the order line", function clickBrownPencilIcon (){
  let radGridViewOrderBasket = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let orderQuantity = radGridViewOrderBasket.wValue(0,"Order Qty").OleValue;
  orderQty = orderQuantity  
  radGridViewOrderBasket.ClickCell(0, 0);
  let dlg = Aliases.Aptify_Shell.dlg;
  if(dlg.Exists)
  {
    dlg.btnOK.ClickButton();
  }
  
  
});

Then("I change the quantity of the product in the input field Quantity {arg}", function changeQtyFromEditPage (orderQty){
  let wizardProductId =  Aliases.Aptify_Shell.FormTemplateForm; 
  let wdwTitle =  aqObject.GetPropertyValue(wizardProductId , "WndCaption");
  let orderId = ( aqString.SubString(wdwTitle, 11, 16) );  
  orderID = orderId;
  
  
  let txtOrderQty = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  txtOrderQty.Keys("^a [Clear]");
  txtOrderQty.SetText(orderQty);
  txtOrderQty.Keys("[Tab]");
  
  
  let txtValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_PT_UnboundTextBox_SummaryTotalValue.textBox1.Text.OleValue;
  paramValue = txtValue;
  
});

Then("I click on blue colour left arrow icon on the top right hand side of the window", function clickBlueColourArrowIcon (){
  let radGridViewSupplyValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmSupplyValue = radGridViewSupplyValue.wValue(0, "Supply Value").OleValue;
  txtSupplyStatus = clmSupplyValue;
  
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();
});


Then("I select Payment Type {arg}", function selectPaymentTypefromCheckoutTab (paymentType){
  let orderBasketCheckoutPaymentLayout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment;
  orderBasketCheckoutPaymentLayout.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeID.LookupSearchCombo.ClickItem(paymentType);
});

Then("I click on Checkout button", function clickCheckoutBtnFromCheckoutTab (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();
});

Then("Advice note should be displayed in Documents window", function AdviceNoteDisplyUnderDocumentsWindow (){
  let radGridViewDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmDocumentSource = radGridViewDocuments.wValue(0, "Document Source").OleValue;
  
  if(aqObject.CompareProperty("Order Invoice Advice Note", cmpEqual,clmDocumentSource, true,3))
  {
    Log.Checkpoint("Advice note has been display");
     }
    else{
    Log.Error("Advice note is not display");
    }
  Delay(3000);
});

Then("On Order Query Page Order should be displayed as Backorder", function checkpointOrderDisplaysAsBackorder (){
  Delay(2000);
  let radGridViewOrderQueryPage = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridViewOrderQueryPage.ClickCell(0,"Line Item Status");
  let clmLineItemStatus = radGridViewOrderQueryPage.wValue(0, "Line Item Status").OleValue;
  
  if(aqObject.CompareProperty("BackOrder", cmpEqual,clmLineItemStatus, true,3))
  {
    Log.Checkpoint("Order has been display as backorder");
     }
    else{
    Log.Error("Order is not backorder");
    }
});



Then("I close the Order Query Page", function cloeOrderQueryPage (){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});


When("I click on New Order from folder list", function clickNewOrderFromCS (){
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton8.ClickButton();
});

Then("I click on Find Order from Customer services tab", function clickFindOrderFromCS (){
  Delay(3000);
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton12.ClickButton();
});

Then("Record should be deleted from the My Open Baskets window", function checkpointRecordDeletedFromOpenBasketWindow (){
  let radGridViewMyOpenBasket = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea4.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRecords = radGridViewMyOpenBasket.wRowCount;
  let i =0;
  let isValueMatched = false;

  for (i; i<totalRecords; i++)
  {
  let orderId = radGridViewMyOpenBasket.wValue(i, 22).OleValue
  if(orderId == orderID)
  {
  isValueMatched = true;
  break;
  }
  }

  if(isValueMatched){
  Log.Error("Order has not been checked out");
  }else{
  Log.Checkpoint("Order has been checked out");
  }
});


Then("Inventory should be Zero or less than Zero", function checkpointOrderBackOrderOrNot (){
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  if(txtInventory ==0 || txtInventory <0)
  {
    Log.Checkpoint("Order is BackOrder");
  }
  else
  {
    Log.Error("Order is not backorder")
  }
});

Then("I open the document generated", function openDocumentGenerated (){
  let radGridViewDocumentGenerated = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  
  let DocumentReference = radGridViewDocumentGenerated.wValue(0, 2).OleValue;
  
  let sFolder = "C:\\Project\\IngentaCommercialApplication\\IngentaCommApp\\Invoice\\"
  let sFile = sFolder + DocumentReference
   aqFileSystem.CreateFolder(sFile);
   
  radGridViewDocumentGenerated.DblClickCell(0, 2);
  Delay(7000);
  let referenceAdvance = Sys.Desktop.Picture();
  referenceAdvance.SaveToFile(sFile + "\\" + "FirstPage.jpg");
   
  Sys.Keys("[PageDown]");
   
  referenceAdvance.SaveToFile(sFile + "\\" + "SecondPage.jpg");
});

When("I enter Qty under Orders Id wizard", function enterQtySameASAvailableInventory (){
  let txtOrderQty = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  txtOrderQty.Keys(availableInventory);
});

When("I enter same product again to check the inventory", function enterSameProdUnderOrdersIdPage (){
  let lnkProductName = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  lnkProductName.Keys(product);
  lnkProductName.Keys("[Tab]");
  
  let radGridViewProductOrderId = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewProductOrderId.Exists)
  {
  let countRows = radGridViewProductOrderId.wRowCount;
  for(let i=0;i<countRows;i++)
  {
  if(product == radGridViewProductOrderId.wValue(i, "Title").OleValue)
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(i, "Title");
    break;
  }
  }
  }
});

//edit

When("I enter Company Name in Ship To {arg}", function enterCompanyNameShipTo (customerName){
  let lnkShipTo = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_ShipToRoleID.txtLink;
  lnkShipTo.Keys(customerName);
  lnkShipTo.Keys("[Tab]");
  let radGridViewCompanyShipTo = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewCompanyShipTo.Exists)
  {
    radGridViewCompanyShipTo.DblClickCell(0, "Name");
  }
  
});

When("I click on Red colour Arrow", function clickRedColourArrow (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.buttonImage.ClickButton();
});

When("I enter Product Name On Order Id wizard {arg}", function enterProductNameOrdersId (prodName){
  
  let lnkProductName = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  lnkProductName.Keys(prodName);
  lnkProductName.Keys("[Tab]");
  productName = prodName
  let radGridViewProductOrderId = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  if(radGridViewProductOrderId.Exists)
  {
    radGridViewProductOrderId.DblClickCell(0, "Title");
  }
});


When("I enter Qty {arg}", function enterQtyOrdersId (orderQty){
  let txtOrderQty = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  txtOrderQty.Keys(orderQty);
});

When("I select Seller Information Sold By {arg}", function (sellerInfo){
  let ddSoldBy = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_SoldByID.LookupSearchCombo;
  ddSoldBy.ClickItem(sellerInfo);
});

When("I click on Brown pencil icon to edit the order line", function clickEditIcon (){
  let radGridViewOrderBasket = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let orderQuantity = radGridViewOrderBasket.wValue(0,"Order Qty").OleValue;
  orderQty = orderQuantity  
  radGridViewOrderBasket.ClickCell(0, 0);

});

When("I change the quantity of the product in the input field Quantity {arg}", function changeQtyInQuantityField (orderQty){
  let wizardProductId =  Aliases.Aptify_Shell.FormTemplateForm; 
  let wdwTitle =  aqObject.GetPropertyValue(wizardProductId , "WndCaption");
  let orderId = ( aqString.SubString(wdwTitle, 11, 16) );  
  orderID = orderId;
  
  
  let txtOrderQty = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  txtOrderQty.Keys("^a [Clear]");
  txtOrderQty.SetText(orderQty);
  txtOrderQty.Keys("[Tab]");
});

Then("Orders Id should be displayed top of the window", function checkpointOrdersIdDisplay (){
  aqObject.CompareProperty(orderID, cmpGreater,0 , true,3);
});

Then("on top of the window Highlighted information as {arg} should be displayed", function checkpointHighlightedInfoDisply (captionText){
  let str1 = "Currently Editing ISBN 13" + " " + ":" + " ";
  let strIdentifier = aqString.Concat(str1,parIdentifier);
  
  let str2 = " " + "-" + " " + " " + "-" + " ";
  let strTitle = aqString.Concat(str2,parTitle);
  
  let str3 = " " + "-" + " " + "(" ;
  let strType = aqString.Concat(str3,parType);
  
  let str4 = ")" + " ";
  
  let strFirst = aqString.Concat(strIdentifier,strTitle);
  
  let strSecond = aqString.Concat(strType,str4);
  
  let strCaption = aqString.Concat(strFirst,strSecond);
  Log.Message(strCaption);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket_FormCaption.panel4Content.captionText, "Text", cmpEqual, strCaption);
  
  if(aqObject.CompareProperty(captionText, cmpEqual, strCaption, true,3))
  {
    Log.Checkpoint("Caption Text has been same");
     }
    else{
    Log.Error("Caption Text is not same");
    }
});

Then("Fields Type,Shipping To,Billing To should be disabled", function checkpointBillingToDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderProcessTypeID.comboLinkLabel, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_ShippingTo, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_BillingTo, "Enabled", cmpEqual, false);
}); 

Then("From Please Select a Product section Quantity and Sold By fields should be Enabled", function checkpointQtySoldByDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_SoldByID, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity, "Enabled", cmpEqual, true);
});

Then("From Please Select a Product section Product, P\\/O Ref, Inventory fields should be Disabled", function checkpointPORefDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSearch_CustomerLineRef, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information, "Enabled", cmpEqual, false);
});

Then("Save button should be Enabled", function checkpointSaveBtnEbabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem, "Enabled", cmpEqual, true);
});

Then("From Product Summary section all the fields should be disabled", function checkpointProductSummaryFields (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrders_ProductSelection_PT_Group_Box_ProductDetails.PTProducts_Orders_ProductDetail_General.PTProducts_Orders_ProductQuery_PublicationDate, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrders_ProductSelection_PT_Group_Box_ProductDetails.PTProducts_Orders_ProductDetail_General.PTProducts_Orders_ProductQuery_ProductSubType, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrders_ProductSelection_PT_Group_Box_ProductDetails.PTProducts_Orders_ProductDetail_General.PTProducts_Orders_ProductDetail_Books_Publisher, "Enabled", cmpEqual, true);
});

Then("Settings tab should be display", function checkpointSettingTabDisplay (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab, "Visible", cmpEqual, true);
});

Then("{arg}, {arg}, {arg} tabs should be visible", function checkpointTabsVisible (tab1, tab2, tab3){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain;
  var tabOverrides = ultraTabControl.wTabCaption(1);
  
  var tabNotes = ultraTabControl.wTabCaption(2);
  
  var tabTexts = ultraTabControl.wTabCaption(3);
  
  if(aqObject.CompareProperty(tabOverrides, cmpEqual,tab1, true,3))
  {
    Log.Checkpoint("Overrides tab should be display")
  }
  else
  {
    Log.Error("Overrides tab is not display")
  }
  if(aqObject.CompareProperty(tabNotes, cmpEqual,tab2, true,3))
  {
    Log.Checkpoint("Notes tab should be display")
  }
  else
  {
    Log.Error("Notes tab is not display")
  }
  if(aqObject.CompareProperty(tabTexts, cmpEqual,tab3, true,3))
  {
    Log.Checkpoint("Texts tab should be display")
  }
  else
  {
    Log.Error("Texts tab is not display")
  }


});

Then("From Configure section under Settings tab License ID, Order Category, Publisher Ref should be Enabled", function checkpointConfigureSection (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_LicenseID, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_OrderCategoryID, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_PublisherLineReference, "Enabled", cmpEqual, true);
});

Then("From Valuation section Published Price, Disc, Add{arg} Disc, Offer Disc and Net Price fields should be Enabled", function checkpointValuationSection (param1){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Price, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_DiscountPercentage, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_AdditionalDiscountPercentage, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_OfferDiscountPercentage, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_NetPrice, "Enabled", cmpEqual, true);
});

Then("Published price should be displayed with Dollar icon, Disc should be displayed with Product icon", function checkpointPublishedPrice (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_PTIconButton_ShowPrices.buttonImage, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_PTIconButton_ShowDiscounts.buttonImage, "Visible", cmpEqual, true);
});

Then("Add{arg} Disc, Offer Disc and Net Price fields should be displayed with checkbox", function checkpointFieldsWithCheckbox (param1){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_IsAdditionalDiscountByPercentage.chkInternal, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_IsOfferDiscountByPercentage.chkInternal, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_IsNetPriceOverridden.chkInternal, "Visible", cmpEqual, true);
});

Then("From Supply Status section Supply, Backorders, Not Supp. and Held fields should be Disabled", function checkpointSupplyStatusSectionDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_SuppliedQuantity, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_BackOrderedQuantity.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_UnsuppliedQuantity.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_HeldQuantity, "Enabled", cmpEqual, false);
});

Then("From Supply Status section checkbox Is Gratis should be Disabled", function checkpointIsGratisDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_IsGratis.chkInternal, "Enabled", cmpEqual, false);
});

Then("From Net section only Net Value field should be Enabled and Tax Value, Supply Value should be Disabled", function checkpointNetSectionFieldsDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_NetValue.txtInner, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_TaxValue, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_TotalItemValue, "Enabled", cmpEqual, false);
});

Then("From Backorders section all the fields should be Disabled", function checkpointBackordersSectionFieldsDiabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_BackorderedValue.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_BackOrderTaxValue.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_PT_UnboundTextBox_BackorderTotalValue.textBox1, "Enabled", cmpEqual, false);
});

Then("From Held section all the fields should be Disabled", function checkpointHeldSectionFieldsDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_HeldValue.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_HeldShippingValue.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_HeldTaxValue.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_HeldTotalValue.txtInner, "Enabled", cmpEqual, false);
});

Then("From Total section Value, Tax, Total fields should be Enabled and Received field should be Disabled", function checkpointTotalSectionFieldsDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_PT_UnboundTextBox_SummaryTotalValue, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_PT_UnboundTextBox_TotalTaxValue, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_PT_UnboundTextBox_FullTotalValue, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_ReceivedPayment, "Enabled", cmpEqual, false);
});

Then("Checkbox Activate License should be visible at the bottom of the list", function checkpointActivateLicenseVisible (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_LicenseActivationOverride.chkInternal, "Enabled", cmpEqual, false);
});

Then("I click on Save button from Please Select a Product section", function clickSaveBtnFromPleaseSelectProduct (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
  if(Aliases.Aptify_Shell.dlg.Exists)
  {
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
  }
  let radGridViewQtyAndSupplyValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmOrderQty = radGridViewQtyAndSupplyValue.wValue(0, "Order Qty").OleValue;
  let clmSupplyValue = radGridViewQtyAndSupplyValue.wValue(0, "Supply Value").OleValue;
  txtOrderQty = clmOrderQty;
  txtSupplyStatus = clmSupplyValue;
}); 

Then("Editing page should be closed after clicking Save without any error", function checkpointEditingPageClosed (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1, "WndCaption", cmpEqual, "radGridView1");
});


Then("Order Qty field should be updated", function checkpointOrderQtyUpdated(){
  Delay(3000);
  let radGridViewCheckOrderQty = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmOrderQty = radGridViewCheckOrderQty.wValue(0, "Order Qty").OleValue;
 
  if(aqObject.CompareProperty(orderQty, cmpNotEqual,clmOrderQty, true,3))
  {
    Log.Checkpoint("Order Qty is upadted")
  }
  else{
    Log.Error("Order Qty remains same after performing actions")
  }

  
});


When("I click on Add Button to displayed product in the section below with correct information", function clickAddBtnFromOrdersId (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
  if(Aliases.Aptify_Shell.dlg.Exists)
  {
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
  }
  
});

Then("I click on Green Circle icon from Action Buttons to check the status of Order Line", function clickGreenCircleIcon (){
  let btnOrderLineOK = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  btnOrderLineOK.ClickCell(0, 4);
 }); 

Then("confirmation message should pop up stating {arg}", function checkpointConfirmationMsgDisplay (Text){
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessagePopup.messagePanel.message, "Text", cmpEqual, "Details Are Complete");
  if(aqObject.CompareProperty(Text, cmpEqual,"Details Are Complete", true,3))
  {
    Log.Checkpoint("Confirmation message is display")
  }
  else
  {
    Log.error("Confirmation message is not display")
  }
  
});


//european non vat

Then("I search for the customer {arg}", function enterCustomerNameFindOrders (customerName){
   Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.ClickButton();
  let radPanel = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams;
  let textBox = radPanel.quickSearch.quickSearchText;
  textBox.SetText(customerName);
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
 
});

Then("Vat should be displayed under Ledger tab", function checkpointVatDisplay (){
  let radGridViewLedger = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmTaxValue = radGridViewLedger.wValue(0,"Tax Value").OleValue;
   if(aqObject.CompareProperty(clmTaxValue, cmpGreater,0, true,3))
  {
    Log.Checkpoint("Vat is display under ledger tab")
  }
  else{
    Log.Error("No vat is display under ledger tab")
  }
});

Then("value should be displayed under Euro Ledger", function checkpointValueDisplayUnderEuroLedger (){
  let radGridViewValueUnderEuroLedger = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridViewValueUnderEuroLedger.ClickCell(0,"Document Type")
  let clmValue = radGridViewValueUnderEuroLedger.wValue(0, "Value").OleValue;
  
  if(aqObject.CompareProperty(aqConvert.IntToStr(clmValue), cmpEqual,aqConvert.IntToStr(TotalvalueOnCheckout), true,3))
  {
    Log.Checkpoint("Correct value is display under Ledger tab")
  }
  else{
  Log.Error("Correct value is not display under ledger tab")
    }
});

Then("The values should be displayed in the Supply column and the Totals", function checkpointValueUnderSupplyClmAndTotals (){
  let txtNetValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_NetValue.txtInner.Text.OleValue;
  let txtTotals = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_TotalNetValue.textBox1.Text.OleValue;
  let txtOrderTotals = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_Total.textBox1.Text.OleValue;
  paramTotals = txtOrderTotals;
 
  if(aqObject.CompareProperty(txtNetValue, cmpEqual,paramValue, true,3))
  {
    Log.Checkpoint("Correct value is display under supply column")
  }
  else{
    Log.Error("Correct value is not display under supply column")
  }
  if(aqObject.CompareProperty(txtTotals, cmpEqual,paramValue, true,3))
  {
    Log.Checkpoint("Correct value should be display under Totals column")
  }
  else{
  Log.Error("Correct value is not display under Totals column");
  }
  
});

Then("I close all the records", function closeAllOpenRecords (){
  let aptify_Shell = Aliases.Aptify_Shell;
  let ultraToolbarsDockArea = Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top;
  ultraToolbarsDockArea.ClickItem("Data Form|Save Record and Close Form");
  ultraToolbarsDockArea.ClickItem("Data Form|Save Record and Close Form");
  let searchForm = Aliases.Aptify_Shell.SearchForm;
  
  if(searchForm.Exists)
  {
    searchForm.Close();
  }
  
});


//european

Then("Order Date should be Today\'s date and Order Process Type should be {arg}", function checkpointOrderDateOrderProcessType (OrderProcessType){
  let txtOrderDate = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderDate.txtInner.Text.OleValue;

  let ddOrderProcessType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderProcessTypeID.Text.OleValue;
  
  if(aqObject.CompareProperty(txtOrderDate, cmpEqual,aqDateTime.Today(),true,3))
  {
    Log.Checkpoint("Order Date is Today's date");
  }
  else
  {
    Log.Error("Order date is not Today's date");
  }
  
  
  if(aqObject.CompareProperty(ddOrderProcessType, cmpEqual,OrderProcessType,true,3))
  {
    Log.Checkpoint("Order process type is display")
  }
  else{
    Log.Error("Order process type is not display")
  }
  


});

Then("Order Type should be {arg} and The Currency Type should be {arg}", function checkpointOrdertypeCurrencyType (OrderType, CurrencyType){
  let ddOrderType =Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderTypeID.LookupSearchCombo.Text.OleValue;
  let ddCurrencyType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_CurrencyTypeID.LookupSearchCombo.Text.OleValue;
  if(aqObject.CompareProperty(ddOrderType, cmpEqual,OrderType, true,3))
  {
    Log.Checkpoint("Order Type should be display");
  }
  else{
    Log.Error("Order type is not display");
  }
  
  if(aqObject.CompareProperty(ddCurrencyType, cmpEqual,CurrencyType, true,3))
  {
    Log.Checkpoint("Currency Type should be display");
  }
  else{
    Log.Error("Currency type is not display");
  }
});

Then("Billing Plan should be {arg}", function checkpointBillingPlan (billingPlan){
  let ddBillingPlan = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_BillingPlanID.LookupSearchCombo.Text.OleValue;
  
  if(aqObject.CompareProperty(ddBillingPlan, cmpEqual,billingPlan, true,3))
  {
    Log.Checkpoint("Billing plan is display");
  }
  else{
    Log.Error("Billing plan is not display");
  }
});

Then("Settings tab should have focus", function checkpointSettingTabFocus (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab, "Visible", cmpEqual, true);
});


Then("Frames for Configure,Valuation,Supply Status,Net,Backorders,Held,Totals should be displayed", function checkpointFramesDisplay (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Valuation, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Configure, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_SupplyStatus, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Net, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Backorder, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Held, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab_Group_Box_Totals, "Visible", cmpEqual, true);
});

Then("The values should be correctly displayed in the Supply Column and the Totals", function checkpointCorrectValuesDisplay (){
  let clmTotals = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_Total.textBox1.Text.OleValue;
  let clmSupply = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_TotalDueValue.txtInner.Text.OleValue;
  paramTotals = clmTotals;
  
  
  if(aqObject.CompareProperty(aqString.SubString(clmSupply,1,20), cmpEqual,txtSupplyStatus, true,3))
  {
    Log.Checkpoint("values are correctly display under supply status");
  }
  else{
    Log.Error("values are not correctly display under supply status");
  }
  if(aqObject.CompareProperty(aqString.SubString(clmTotals,1,20), cmpEqual,txtSupplyStatus, true,3))
  
  {
    Log.Checkpoint("values are correctly display under Totals");
  }
  else{
    Log.Error("values are not correctly display under Totals");
  }
  
  
});

Then("Correct value should be displayed under Euro Ledger", function chcekpointCorrectValuesDisplayUnderEuroLoedger (){
  let radGridViewCorrectValueUnderEuroLedger = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridViewCorrectValueUnderEuroLedger.ClickCell(0,"Document Type");  
  let clmValue = radGridViewCorrectValueUnderEuroLedger.wValue(0, "Value").OleValue;
  
  if(aqObject.CompareProperty(aqConvert.IntToStr(clmValue), cmpEqual,aqConvert.IntToStr(TotalvalueOnCheckout), true,3))
  {
    Log.Checkpoint("Correct value is display under ledger tab")
  }
  else{
    Log.Error("correct value is not display under ledger tab")
  }
  
});

Then("values should be correctly displayed under Supply value and Total on Orders Id page", function ValuesDisplayUnderOrdersIdPage (){
  
  let orderItemSettingsLayout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_CollapsibleGroupBox_ProductSummary.panel4Content.PTOrders_ProductSelection_ProductDetailsPanel.PTOrderItems_Detail_TabGroup.tabMain.PTOrderItems_Detail_General_Tab.PTOrderItems_Detail_General_Tab;
  let supplyValue = orderItemSettingsLayout.PTOrderItems_Detail_General_Tab_TotalItemValue.txtInner.Text.OleValue;
  let totals = orderItemSettingsLayout.PTOrderItems_Detail_General_Tab_PT_UnboundTextBox_FullTotalValue.textBox1.Text.OleValue;
  
  if(aqObject.CompareProperty(aqConvert.IntToStr(supplyValue), cmpEqual,aqConvert.IntToStr(totalsSupplyValue), true,3))
  {
    Log.Checkpoint("Correct value is display under supply value on order id page")
  }
  else{
    Log.Error("Incorrect value is display under supply value on order id page")
  }
  
  if(aqObject.CompareProperty(aqConvert.IntToStr(totals), cmpEqual,aqConvert.IntToStr(totalsSupplyValue), true,3))
  {
    Log.Checkpoint("Correct value is display under totals on order id page")
  }
  else{
    Log.Error("Incorrect value is display under supply value on order id page")
  }
});

Then("No Vat should be displayed under Ledger tab", function checkpointNoVatDisplay (){
  let radGridViewLedger = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmTaxValue = radGridViewLedger.wValue(0,"Tax Value").OleValue;
   if(aqObject.CompareProperty(clmTaxValue, cmpEqual,0, true,3))
  {
    Log.Checkpoint("Vat is display under ledger tab")
  }
  else{
    Log.Error("No vat is display under ledger tab")
  }
});

//orderswithOneproduct

When("I click on blue colour left arrow icon on the top right hand side of the window", function clickBlueColourLeftArrowIcon()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();
});

When("I select Payment Type {arg}", function selectPaymentTypeCheckoutPaymentLayout (paymentType){
  let orderBasketCheckoutPaymentLayout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment;
  orderBasketCheckoutPaymentLayout.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeID.LookupSearchCombo.ClickItem(paymentType);
  
});

When("I click on Checkout button", function clickCheckoutFromCheckoutPaymentLayout (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();
});

Then("I click on Refresh button from the action list icon in the window Recent Orders", function clickRefreshBtnFromRecentOrders (){
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(108, 14);
  aptify_Shell.RadDropDownMenu.Click(58, 178);
});



Then("I click on Refresh button from the action list icon in the window Documents", function clickRefreshWindowDocuments (){
  Delay(80000);
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(71, 15);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(43, 180);
  let radGridViewDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  clmDocumentRef = radGridViewDocuments.wValue(0, "Document Reference").OleValue;
  DocumentRef = clmDocumentRef;
});

Then("current order with Order Qty as {arg}, Bill to Name as {arg} should be displayed in the recent orders", function checkpointOrderQtyBillTo (orderQty, billToName){
  let radGridViewRecentOrders = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmOrderQty = radGridViewRecentOrders.wValue(0, "Ordered Qty").OleValue;
  let clmBillToName = radGridViewRecentOrders.wValue(0, "Bill-To Name").OleValue;

  if(aqObject.CompareProperty(clmBillToName, cmpEqual,billToName, true,3))
  {
   Log.Checkpoint("Both the values are equal");
  }
  else{
    Log.Error("Not equal");
  }
  
  if(aqObject.CompareProperty(clmOrderQty, cmpEqual,orderQty, true,3))
  {
   Log.Checkpoint("Both the values are equal");
  }
  else{
    Log.Error("Not equal");
  }
});

Then("Invoice note should be present in Documents window", function checkpointInvoiceNoteDisplay (){
  let clmDocumentSource = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let DocumentSource = clmDocumentSource.wValue(0, "Document Source").OleValue;
  
  if(aqObject.CompareProperty("Order Invoice", cmpEqual,DocumentSource, true,3))
  {
   Log.Checkpoint("Invoice document generated");
  }
  else{
    Log.Error("Invoice document is not generated");
  }
  
});

Then("Document Produced and Document Attached both the columns should be checked to generate relevant documents", function checkpointDocAttachedAndDocProducedChecked (){
  let radGridViewDocumentProduced = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmDocument = radGridViewDocumentProduced.wValue(0, "Document Produced").OleValue;
  
  clmDocumentAttached = radGridViewDocumentProduced.wValue(0, "Document Attached").OleValue;
   if(aqObject.CompareProperty(clmDocumentAttached, cmpEqual, true,3))
  {
   Log.Checkpoint("column Document Attached is checked");
  }
  else{
    Log.Error("column Document Attached is not checked");
  }
  if(aqObject.CompareProperty(clmDocument, cmpEqual, true,3))
  {
   Log.Checkpoint("column Document Poduced is checked");
  }
  else{
    Log.Error("column Document Produced is not checked");
  }
});

//overseas

Then("The Ship To, Bill To, User Addresses should be populated with the same street address", function checkpointFieldsDisplayWithSameStreetAdd (){
  let txtbillTo = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_ShipToNameAddress.PanelNameAndAddress.LabelName.Text.OleValue;
  let txtshipTo = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_BillToNameAddress.PanelNameAndAddress.LabelName.Text.OleValue;
  let txtendTo = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_LicenseeNameAddress.PanelNameAndAddress.LabelName.Text.OleValue;
  if((aqObject.CompareProperty(txtshipTo, cmpEqual,txtbillTo, true,3)) && (aqObject.CompareProperty(txtbillTo, cmpEqual,txtendTo, true,3)))
  {
    Log.Checkpoint("Ship To, Bill To, User Addresses should be populated with the same street address");
  }
  else{
    Log.Error("Ship To, Bill To, User Addresses populated with the different street address")
  }

});

Then("Account Number, Telephone Number and Email Address should be correctly displayed", function checkpointAccNoTelephoneAndEmailDisplay (){
  
  let textTelephoneNumber = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_ShipToNameAddress.LabelTelephoneNumber;
  if(textTelephoneNumber.Exists)
  {
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_ShipToNameAddress.LabelTelephoneNumber, "Visible", cmpEqual, true);
  }
  let textEmail =Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_ShipToNameAddress.LabelEmail;
  if(textEmail.Exists)
  {
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_ShipToNameAddress.LabelEmail, "Visible", cmpEqual, true);
   }
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_ShipToIdentifierTypeValue, "Visible", cmpEqual, true);
}); 

Then("I click on Order attributes tab", function clickOrderAttributesTab (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.ClickTab("Order Attributes");
});

Then("I change the Release Priority to {arg}", function changeReleasePriority (releasePriority){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_OrderReleasePriorityID.LookupSearchCombo.ClickItem(releasePriority);
  Delay(3000);
});

Then("I click on the red arrow", function clickRedArrowOrderBasket (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.buttonImage.ClickButton();
});

Then("I enter Product Name On Order Id wizard {arg}", function enterProductNameOrdersIdWizard (product){
  
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

Then("I click on Add Item", function clickAddItem (){
  let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
  textBoxInventory = txtInventory;
  
  
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
  if(Aliases.Aptify_Shell.dlg.Exists)
  {
   Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
  }
  let supplyValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Supply Value").OleValue;
  totalsSupplyValue = supplyValue;
});



Then("There should be Columns for Values, Supply, Backordered, Held, Totals", function checkpointColumnsDisplay (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_CultureLabel_1.Label, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_CultureLabel_2.Label, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_CultureLabel_Held.Label, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_CultureLabel_3.Label, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_NetValue.lblInner, "Visible", cmpEqual, true);
});

Then("The values should be correctly displayed in the Supply Column and the Totals should be correct", function checkpointValuesInSupplyColumnAndTotals (){
  
  let clmTotals =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_TotalNetValue.textBox1.Text.OleValue;
  let clmSupply = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_NetValue.txtInner.Text.OleValue;
  if(aqObject.CompareProperty(aqConvert.IntToStr(clmSupply), cmpEqual,aqConvert.IntToStr(txtSupplyStatus), true,3))
  {
    Log.Checkpoint("Correct value is display under Supply column")
  }
  else{
  Log.Error("Correct value is not display under Supply column")
  }
  if(aqObject.CompareProperty(aqConvert.IntToStr(clmTotals), cmpEqual,aqConvert.IntToStr(txtSupplyStatus), true,3))
  {
    Log.Checkpoint("Correct value is display under Totals column")
  }
  else{
  Log.Error("Correct value is not display under Totals column")
  
  }
  
});



Then("I Select the Order Item, in the lower grid click on the link to the Invoice", function saveInvoiceRecord (){
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

Then("Inventory should be correctly downgraded", function checkpointInventoryDowngraded (){
  
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  let radGridViewInventory = ultraTabControl.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

  let clmAvailable = radGridViewInventory.wValue(0, "Available").OleValue;
  
  if(aqObject.CompareProperty(clmAvailable, cmpLess,textBoxInventory, true,3))
  {
    Log.Checkpoint("Inventory has been changed");
  }
  else
  {
    Log.Error("Inventory is not changed")
  }
});


Then("I click on Billing Wave Release button", function clickBillingWaveReleaseOrdersTab (){
  let aptifyDashLayout = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout;
  aptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_BillingWaveRelease.buttonImage.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

Then("I click on refresh button from Documents window", function clickRefreshDocumentsWindow (){
  Delay(60000);
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(25, 17);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(66, 188);
});



Then("I search for the company {arg}", function searchCompanyFromCS (companyName){
  
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.ClickButton();
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radPanel = splitContainer.SplitterPanel2.searchParameters.radPanelParams;
  let textBox = radPanel.quickSearch.quickSearchText;
  
  textBox.SetText(companyName);
  radPanel.switchPanel.searchButton.ClickButton();
  var radGridViewCompany = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewCompany.Exists)
  {
    radGridViewCompany.DblClickCell(0, "Name");
  }
});



Then("I click on Ledger tab from account receivables", function clickLedgerTab (){
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain;
  ultraTabControl.ClickTab("Ledger");
  Delay(70000);
  ultraTabControl.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(81, 20);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(72, 158);
});

Then("I open correct profile {arg}", function openCorrectProfile (correctProfile){
  
  let radGridViewAccountProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRows = radGridViewAccountProfiles.wRowCount;
  for(let i=0;i<totalRows;i++)
  {
    let profile = radGridViewAccountProfiles.wValue(i,"Ledger").OleValue;
    if(profile == correctProfile)
    {
      radGridViewAccountProfiles.DblClickCell(i,"Ledger")
    }
  }
});

Then("I open correct profile of person record {arg}", function openpersonCorrectProfile (correctProfilePerson){
   let radGridViewPersonsRecord = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
   let rowCountPersonsRecord = radGridViewPersonsRecord.wRowCount;
   for(let i=0;i<rowCountPersonsRecord;i++)
   {
      let profilePerson = radGridViewPersonsRecord.wValue(i,"Ledger").OleValue;
      if(profilePerson == correctProfilePerson)
     {
      radGridViewPersonsRecord.DblClickCell(i,"Ledger");
     }
  }
});



Then("I click on Save Record and Close Form button to close the record", function  (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.Exists)
  
  {
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
});

//pending


When("I click on Save button from Please Select a Product section", function clickSaveBtn (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
});

When("I close the window", function closeWindow (){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});



When("I click on Refresh button from the action list icon in the window My Open Basket", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea4.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(110, 14);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(47, 182);
});

Then("current order with Order Qty as {arg}, Bill to Name as {arg} should be displayed in the result page", function (orderQty, billToName){
  let radGridViewOrderDisplay = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea4.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmOrderQty = radGridViewOrderDisplay.wValue(0, "Ordered Qty").OleValue;
  let clmBillToName = radGridViewOrderDisplay.wValue(0, "Bill-To Name").OleValue;
  
  if(aqObject.CompareProperty(orderQty, cmpEqual,clmOrderQty, true,3))
  {
    Log.Checkpoint("Both the values are equal");
  }
  else{
    Log.Error("Not equal");
  }
  
  
  if(aqObject.CompareProperty(billToName, cmpEqual,clmBillToName, true,3))
  {
    Log.Checkpoint("Both the values are equal");
  }
  else{
    Log.Error("Not equal");
  }
  Delay(2000);
});

Then("I double click the order details", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea4.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Order Date");
});

Then("Order Basket window should be reopened and Enabled", function (){
  let wizardProductId =  Aliases.Aptify_Shell.FormTemplateForm; 
  let wdwTitle =  aqObject.GetPropertyValue(wizardProductId , "WndCaption");
  let wdwId = ( aqString.SubString(wdwTitle, 11, 16) );
  
  if(aqObject.CompareProperty(wdwId, cmpEqual,orderID,true,3))
  {
    Log.Checkpoint("Order Id is display")
  }
  else{
    Log.Error("Order Id is not display")
  }

  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity, "Enabled", cmpEqual, true);
  Delay(3000);
});

Then("I click on red cross icon to delete the order line", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 1);
});

Then("I click Yes in the pop up warning messsage window", function (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});

Then("I close the window", function (){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});



Then("I click on Refresh button from the action list icon in the window My Open Basket", function clickRefreshMyOpenBasketWindow (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea4.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(110, 14);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(47, 182);
});


Then("confirmation message should Pop up stating {arg}", function checkpointVerifyPopupText (popupText){
  aqObject.CheckProperty(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage, "Text", cmpEqual, popupText);
});

Then("record should be deleted from Orders Id wizard", function checkpointRecordDeletedFromOrdersId (){
  Delay(2000);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1, "wRowCount", cmpEqual, 0);
});

Then("Pop up message should be displayed as {arg}", function checkpointVerifyWindowCationText (popupText){
  aqObject.CheckProperty(Aliases.Aptify_Shell.dlg.Static, "WndCaption", cmpEqual, popupText);
}); 

Then("I click Yes in the pop up warning messsage to close the window", function clickYesFromPopup (){
  Aliases.Aptify_Shell.dlg.btnYes.ClickButton();
});


//promotions



When("I click on All Campaigns", function clickAllCampaigns (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("All Campaigns", 0);
});

When("I enter {arg} in Search Campaigns", function searchCampaignName (campaignName){
  let hostedTextBoxBase = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.HostedTextBoxBase;
  hostedTextBoxBase.Click();
  hostedTextBoxBase.SetText(campaignName);
  hostedTextBoxBase.Keys("[Enter]");
});

When("I click on Node Promotions", function clickNodePromotions (){
  Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Tabs.tabMain.PTCampaigns_Tabs_Promotions.PTCampaigns_Tabs_Promotions.PTCampaigns_Form_CampaignTreeViewStandard.splitContainer1.SplitterPanel.TreeViewControl.ClickItem("|MXC Sports Campaign|Promotions");
});

When("I open Promotion record {arg}", function openPromotionRecord (param1){
  let radGridViewPromotionRecord = Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Tabs.tabMain.PTCampaigns_Tabs_Promotions.PTCampaigns_Tabs_Promotions.PTCampaigns_Form_CampaignTreeViewStandard.splitContainer1.SplitterPanel2.PTCampaigns_PromotionsLists.PTCampaigns_PromotionsLists_PromotionsListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridViewPromotionRecord.DblClickCell(1, "Name");
  
  let txtCode = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TopArea.PTPromotions_Form_Code.txtInner.Text.OleValue;
  code = txtCode;
});

When("I click on Promotions tab", function clickPromotionsTab (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.ClickTab("Promotions");
});

When("I enter a Promotion Code", function enterPromotionCodeOrderBasket (){
  let textBox = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Form_Promotions_Tab.PTOrders_Promotions.PTOrders_Promotions_PT_UnboundTextBox_PromotionCode.textBox1;
  textBox.Click();
  textBox.Keys(code);
});



//When("I select a promotion code", function selectEnterPromotionCode (){
  //Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Form_Promotions_Tab.PTOrders_Promotions.PTOrders_Promotions_Telerik_List_View_Promotions.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, "Offer Type");
//});


When("I click on Apply Promotion", function clickApplyPromotionOrderBasket (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Form_Promotions_Tab.PTOrders_Promotions.PTOrders_Promotions_Active_Button_ApplyPromotion.Click();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});

When("I click on blue colour right facing arrow", function clickBlueColourArrowPromotions (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.buttonImage.ClickButton();
});

When("I click on Order Line Promotions icon from action buttons in the order line", function clickOrderLinePromotionsIconOrderBasket  (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 3);
  Aliases.Aptify_Shell.MessageGrid.Button1.ClickButton();
});

When("I click on Billing Wave Release", function runBillingWaveReleaseOrders (){

  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_BillingWaveRelease.buttonImage.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

When("I click on Refresh button from the action list icon in the window Documents", function (){
  Delay(60000);
  let radCommandBarRefreshBtnFromDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1;
  radCommandBarRefreshBtnFromDocuments.Click(89, 13);
  let radDropDownMenu = Aliases.Aptify_Shell.RadDropDownMenu;
  radDropDownMenu.Click(78, 187);
});


//reserve

When("I select set product", function (){
  let aptify_Shell = Aliases.Aptify_Shell;
  let lnkProduct = aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_PTProductVersionControl_1.advancedLinkBoxProducts.txtLink;
  lnkProduct.SetText(product);
  lnkProduct.Keys("[Tab]");
  if(aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists)
  {
    let radGridView = aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
    let rowCount = radGridView.wRowCount;
    for(let i=0 ;i<rowCount;i++)
    {
      if(product == radGridView.wValue(i, "Title").OleValue)
      {
     radGridView.DblClickCell(i,"Title");
     break
      }
    }
  }

});

Then("I search for the set product", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
   
  aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  splitContainer = aptify_Shell.SearchForm.searchControl.splitContainer1;
  radPanel = splitContainer.SplitterPanel2.searchParameters.radPanelParams;
  textBox = radPanel.quickSearch.quickSearchText;
  
  textBox.SetText(product);
  radPanel.switchPanel.searchButton.ClickButton();
  let rad = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(rad.Exists)
  {
  let count = rad.wRowCount;
  for(let i=0;i<count;i++)
  {
  if(product == rad.wValue(i, "Title").OleValue)
  {
    splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(i, "Title");
    break;
  }
  }
  }
});

When("I search for the set product", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
   
  aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  splitContainer = aptify_Shell.SearchForm.searchControl.splitContainer1;
  radPanel = splitContainer.SplitterPanel2.searchParameters.radPanelParams;
  textBox = radPanel.quickSearch.quickSearchText;
  
  textBox.SetText(product);
  radPanel.switchPanel.searchButton.ClickButton();
  let rad = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(rad.Exists)
  {
  let count = rad.wRowCount;
  for(let i=0;i<count;i++)
  {
  if(product == rad.wValue(i, "Title").OleValue)
  {
    splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(i, "Title");
    break;
  }
  }
  }
});

When("I click on Manage inventory tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  let ultraTabControl2 = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain;
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Manage Inventory");
  let radGridViewManageInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailableQty = radGridViewManageInventory.wValue(0,"Available Qty").OleValue;
  parAvailableQty = clmAvailableQty;
});




When("I click on Sets Make & Break button", function clickSetsMakeAndBreakBtn (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton10.DblClick();
});

When("I select Product {arg} under Inventory Sets Make and Break window", function selectProductUnderSetsMakeAndBreak (setProduct){
  let txtsetProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_PTProductVersionControl_1.advancedLinkBoxProducts.txtLink;
  txtsetProduct.SetText(setProduct);
  txtsetProduct.Keys("[Enter]");
  txtsetProduct.Keys("[Tab]");
  //let radGridViewProductSetsMakeBreak = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
   Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Title");
  }
  
  
});

When("I check the checkbox Reserve Inventory To Make Sets", function checkReserverInventoryToMakeSets (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_ReserveComponentStock.chkInternal.wState = cbChecked;
});

When("I enter Sets Required {arg}", function enterSetsRequired (setsRequired){
  let txtSetsRequired = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_SetsRequired.txtInner;
  txtSetsRequired.SetText(setsRequired);
  txtSetsRequired.Keys("[Tab]");
});

When("I click on Finish Button", function (){
  
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
  
});

When("I click on OK button from popup window", function clickOKBtnFromPopup (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

When("I search for the first paperBack Product", function searchFirstPaperbackProd (){
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  let splitContainer = aptify_Shell.SearchForm.searchControl.splitContainer1;
  radPanel = splitContainer.SplitterPanel2.searchParameters.radPanelParams;
  radPanel.quickSearch.quickSearchText.SetText(bundleSectionProduct1);
  radPanel.switchPanel.searchButton.ClickButton();
  if(splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists)
  {
    splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Title");
  }
  
});



Then("Available Inventory should be less than the Physical Inventory", function checkpointAvailableAndPhysicalInventory (){
  let radGridViewInventoryProdPanel = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailableQty  = radGridViewInventoryProdPanel.wValue(0, "Available").OleValue;
  let clmPhysicalQty  = radGridViewInventoryProdPanel.wValue(0, "Physical").OleValue;
  
  if(aqObject.CompareProperty(clmAvailableQty, cmpLess,clmPhysicalQty, true,3))
  {
    Log.Checkpoint("Available Inventory is less Physical Inventory")
  }
  else{
    Log.Error("Inventory does not chnage after performing actions");
  }

  
  let balanceQty = clmPhysicalQty - clmAvailableQty;
  clmBalanceQty = balanceQty;
  Delay(3000);
});

Then("I click on Overview tab from product information panel", function clickOverViewFromInventory (){
  let tabInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain;
  tabInventory.ClickTab("Overview");
});



Then("I search for the second paperBack Product", function searchSecondPaperBackProd (){
  
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  let splitContainer = aptify_Shell.SearchForm.searchControl.splitContainer1;
  radPanel = splitContainer.SplitterPanel2.searchParameters.radPanelParams;
  radPanel.quickSearch.quickSearchText.SetText(bundleSectionProduct2);
  radPanel.switchPanel.searchButton.ClickButton();
  if(splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists)
  {
    splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Title");
  }
});


Then("I search for the Set Product {arg}", function searchSetProduct (setProduct){
  
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  let radPanel = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams;
  radPanel.quickSearch.quickSearchText.SetText(setProduct);
  radPanel.switchPanel.searchButton.ClickButton();
  if (Aliases.Aptify_Shell.SearchForm.Exists) {
    Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Title");
  }
});

Then("Inventory should be displayed under Set Product matching transaction", function checkpointNOInventoryForSetProd (){
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  let radGridViewInventorySetProduct = ultraTabControl.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailable = radGridViewInventorySetProduct.wValue(0, "Available").OleValue;
  let clmPhysical = radGridViewInventorySetProduct.wValue(0, "Physical").OleValue;
  
  if(aqObject.CompareProperty(clmAvailable, cmpNotEqual, EmptyVariant , true,3))
  {
    Log.Checkpoint("Available Qty is not null")
    
  }
  else
  {
    Log.Error("Available Qty is null")
  }
  
  if(aqObject.CompareProperty(clmPhysical, cmpNotEqual, EmptyVariant , true,3))
  {
    Log.Checkpoint("Physical Qty is not null")
    
  }
  else
  {
    Log.Error("physical Qty is null")
  }
});

Then("Awating Set Made-up should be displayed", function checkpointAwaitingSetMadeUp (){
  let radGridViewSetMade = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_2.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let AwaitingSetMadeUp = radGridViewSetMade.wValue(0,"Balance Qty");
  
  if(aqObject.CompareProperty(AwaitingSetMadeUp, cmpEqual,clmBalanceQty, true,3))
  {
    Log.Checkpoint("Awaiting set madeup is equal to balance qty")
    
  }
  else
  {
    Log.Error("Awaiting set madeup is not equal to balance qty")
  }
});

When("I click on Inventory tab from Product Information Panel", function clickInvnetoryTab (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});

Then("I click on Inventory tab from Product Information Panel", function (){
   Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});

Then("I close the Product Information Panel", function closeProdInfoPanel (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

//setPrice


Then("I enter Customer Name {arg}", function enterCustomerNameUnderOrderSearch (customerName){
  let lnkcustomerName = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  lnkcustomerName.SetText(customerName);
  txtCustomerName = customerName;
  lnkcustomerName.Keys("[Enter]");
  if(Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Owner Record ID");
  }
  lnkcustomerName.Keys("[Tab]");
});

Then("Order details should be correctly displayed on Order Query page", function checkpointOrderDispalyUnderOrderQueryPage (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmShipToName = radGridView.wValue(0, "Ship-To Name").OleValue;
  let clmTitle = radGridView.wValue(0, "Title").OleValue;
  if(aqObject.CompareProperty(clmShipToName, cmpEqual,txtCustomerName, true,3))
  {
    Log.Checkpoint("Same Customer Name is display");
  }
  else{
    Log.Error("Customer Names are different");
  }
  if(aqObject.CompareProperty(clmTitle, cmpEqual,product, true,3))
  {
    Log.Checkpoint("Same Product Name is display");
  }
  else{
    Log.Error("Product Names are different");
  }
});



Then("Order Type as {arg} should be displayed", function checkpointOrderTypeDisplayFindOrders (orderType){
  let txtOrderType = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderType.txtInner.Text.OleValue;
  aqObject.CompareProperty(txtOrderType, cmpEqual,orderType, true,3);
  if(txtOrderType == orderType)
  {
    Log.Checkpoint("Order Type value has equal");
  }
  else{
    Log.Error("Order Type values are different");
  
  }
});

Then("Order Status as {arg} should be displayed", function checkpointOrderStatusDisplay (orderStatus){
  let txtOrderStatus = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderStatus.txtInner.Text.OleValue;
  if(txtOrderStatus == orderStatus)
  {
    Log.Checkpoint("Order Status value has equal");
  }
  else{
    Log.Error("Order Status values are different");
  }
});

Then("Document reference should be displayed under summary tab", function  (){
  let txtDocReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_DocumentReference.txtInner.Text.OleValue;
 
  if(aqObject.CompareProperty(txtDocReference, cmpNotEqual,EmptyVariant, true,3))
  {
    Log.Checkpoint("Document Reference is present");
  }
  else{
    Log.Error("Document Reference is empty");
  }
});

Then("Physical and Available column data should be Empty", function checkpointAvailablePhysicalDataBlank (){
  let radGridViewInventoryProdPanel = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

  let clmPhysical = radGridViewInventoryProdPanel.wValue(0, "Physical").OleValue;
  
  let clmAvailable = radGridViewInventoryProdPanel.wValue(0, "Available").OleValue;
  
  if(aqObject.CompareProperty(clmPhysical, cmpEqual,EmptyVariant, true,3))
  {
    Log.Checkpoint("Physical quantity is null");
  }
  else{
    Log.Error("Physical quantity is not null");
  }
  if(aqObject.CompareProperty(clmAvailable, cmpEqual,EmptyVariant, true,3))
  {
    Log.Checkpoint("Available quantity is null");
  }
  else{
    Log.Error("Available quantity is not null");
  }
  
  
});

Then("I click on Find Orders from folder list", function clickFindOrdersFromCS (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton12.ClickButton();
});

Then("The values should be correctly displayed under Backordered and Totals column", function checkpointBackorderAndToatlsValueDisplay (){
  let orderBasketCheckoutPaymentLayout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment;
  let txtBackorderValue = orderBasketCheckoutPaymentLayout.PT_PTOrders_OTCBasket_CheckoutPayment_BackorderValue2.txtInner.Text.OleValue;
  let txtTotalValue = orderBasketCheckoutPaymentLayout.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_TotalNetValue.textBox1.Text.OleValue;
  
  if(aqObject.CompareProperty(aqConvert.IntToStr(txtBackorderValue), cmpEqual,aqConvert.IntToStr(totalsSupplyValue), true,3))
  
  {
    Log.Checkpoint("Backorder column value equals to SupplyStatus value");
  }
  else{
    Log.Error("Values are different");
  }
  if(aqObject.CompareProperty(aqConvert.IntToStr(txtTotalValue), cmpEqual,aqConvert.IntToStr(totalsSupplyValue), true,3))
  
  {
    Log.Checkpoint("Total value equals to SupplyStatus value");
  }
  else{
    Log.Error("Values are different");
  }
  
});


  
 

Then("I close the search form", function closeSearchForm (){
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }
  
});

Then("Available Inventory should be decreased", function checkpointAvailableInventoryDecreased (){
  Delay(2000);
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  let radGridViewAvailableInventory = ultraTabControl.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

  let clmAvailable = radGridViewAvailableInventory.wValue(0, "Available").OleValue;

  if(aqObject.CompareProperty(clmAvailable, cmpNotMatches,textBoxInventory))
  {
    Log.Checkpoint("Available Quantity has been decreased");
  }
  else{
    Log.Error("Available Quantity is equal");
  }
});

//subscription

Then("correct value should be posted to the Sterling Ledger", function checkpointCorrectValueUnderSterlingLedger (){
  let radGridViewCorrectValueUnderLedger = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmValue = radGridViewCorrectValueUnderLedger.wValue(0, "Value").OleValue;
  
  if(aqObject.CompareProperty(aqConvert.IntToStr(clmValue), cmpEqual,aqConvert.IntToStr(TotalvalueOnCheckout), true,3))
  {
    Log.Checkpoint("Correct value is display under ledger tab");
  }
  else
  {
    Log.Error("Correct value is not display under ledger tab")
  }

});

Then("values should be correctly display on checkout page", function (){
  let clmTotals = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PT_UnboundTextBox_Total.textBox1.Text.OleValue;
   if(aqObject.CompareProperty(clmTotals, cmpEqual,txtSupplyStatus))
  {
    Log.Checkpoint("Correct value is display under Totals column")
  }
  else{
  Log.Error("Correct value is not display under Totals column")
  }
});

//BreakTheSetMadeUp

When("I check the checkbox Reserve Inventory To Make Sets in the section Sets Break", function checkReserveInventorySetsBreak (){
  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_UnReserveComponentStock.chkInternal.wState = cbChecked;
});

When("I enter valid number in Sets To Break less than the number shown in You can Break field", function enterSetsToBreak (){
  let txtYouCanBreak = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_MaxAllocatedSetsToBreak.txtInner.Text.OleValue;
  let txtSetsToBreak = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_SetsToBreak.txtInner;
  
  if(txtYouCanBreak == 1)
  {
    txtSetsToBreak.SetText(txtYouCanBreak);
  }
  else if (txtYouCanBreak ==0){
    Log.Error("There are no sets made to Break!")
    }
  else{
    txtSetsToBreak.SetText(txtYouCanBreak-1);
  }
  txtSetsToBreak.Keys("[Tab]");
  
});

When("I click on Finish button to confirm the transaction", function clickFinishBtnSetsBreak (){
  
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

When("I check the checkbox Move Sets To Break", function checkMoveSetsToBreak (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_MoveComponentsToSetBreaking.chkInternal.wState = cbChecked;
});

When("I check the checkbox Confirm Sets Broken", function checkConfirmSetsBroken (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_ConfirmSetsBroken.chkInternal.wState = cbChecked;
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_ConfirmSetsBroken.chkInternal.wState = cbChecked;
});

When("I enter valid number in Total Sets Broken less than the number shown in sets to break field", function  enterTotalSetsBroken (){
  let productInventoryTreeLayout = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3;
  let txtsetsToBreak = productInventoryTreeLayout.PTInventorySetsMakeAndBreak_Step3_SetsToBreak.txtInner.Text.OleValue;
  let txtTotalSetsBroken = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.PTInventorySetsMakeAndBreak_Step3_TotalSetsBroken;
  
  if(txtsetsToBreak == 1)
  {
    txtTotalSetsBroken.Keys(txtsetsToBreak)
  }
  else{
    txtTotalSetsBroken.Keys(txtsetsToBreak-1)
  }
  txtTotalSetsBroken.Keys("[Tab]");
});

When("I click on the button Confirm Sets", function clickConfirmSetsBtn (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.PTInventorySetsMakeAndBreak_Step3_Active_Button_ConfirmSets.Click(68, 8);
  
});

When("I click Ok on the pop-up confirmation message box", function clickOKFromPopupMsg (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists)
  {
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
});

When("I click on Finish to confirm the transaction", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

When("I select product from tree view on left side panel", function selectProductFromTreeView (){
  let splitContainer = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer;
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, "Title");
  splitContainer.SplitterPanel.panel4Tree.radTreeView.ClickItem("Watford|Warehouse A|Forward|Set Makeup|[0]");
  
});

When("I check the checkbox to select the row in the right side frame", function checkCheckboxToSelectRow (){
  let radGridViewManageInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCount = radGridViewManageInventory.wRowCount;
  for(let i =0;i<rowCount;i++)
  {
  let clmAvailableQty = radGridViewManageInventory.wValue(i,"Available Qty").OleValue;
  if(clmAvailableQty > 0)
  {
    radGridViewManageInventory.ClickCell(i, 0);
  }
  }

});

When("I click on Loose To Forward action button above the frame", function clickLooseToForwardFromSetProductPanel (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(189, 16);
});

When("I go to Forward location in the tree view above Set make up location and click to select the location", function selectForwardLocationFromTreeView (){
  let radTreeViewLocation = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panel4Tree.radTreeView;
  radTreeViewLocation.ClickItem("Watford|Warehouse A|Forward");
});

When("I click on the red alert triangle in the row displayed on right side panel", function clickRedAlertTriangle (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, 1);
});

When("I check the checkbox to select the unconfirmed transaction row on the pop up Confirm Inventory Movements wizard", function checkCheckboxToConfirmTransaction (){
  let rowcounthere = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  for(i=0; i<rowcounthere; i++){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(i,0);
  }
});

When("I click on Confirm button above to perform the transaction", function clickConfirmBtnToConfirmTransaction (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(118, 12);
});

When("I click OK on the confirmation popup message box", function clickOKBtnFromConfirmWindow (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

Then("Set break should be performed without errors", function checkpointSetsBreakWithoutErrors (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top, "Visible", cmpEqual, true);
});

When("I select the listed product in the frame", function selectListedPoductInFrame (){
  let totalRows = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_Telerik_List_View_SetBreakAllocation.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_Telerik_List_View_SetBreakAllocation.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(totalRows-1, "Header Name");
});

When("I select product from the list", function selectProductFromListSetsBreak (){
  let totalRowsSetsBreak = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_Telerik_List_View_SetBreakAllocation.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_Telerik_List_View_SetBreakAllocation.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(totalRowsSetsBreak-1, "UserName");
  
});

When("I check the checkboxs beside the product name", function checkCheckboxesBesideProductName (){
  let totalRows = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_194.PTInventorySetsMakeAndBreakWizard_Step2.PTInventorySetsMakeAndBreakWizard_Step2_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTInventorySetsMakeAndBreak_Step2_TopNodeELV.PTInventorySetsMakeAndBreak_TopNodeELV_TelerikListView_TopNode.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  for (i=0; i<totalRows; i++)
  {
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_194.PTInventorySetsMakeAndBreakWizard_Step2.PTInventorySetsMakeAndBreakWizard_Step2_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTInventorySetsMakeAndBreak_Step2_TopNodeELV.PTInventorySetsMakeAndBreak_TopNodeELV_TelerikListView_TopNode.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(i,0);
  }
});

When("I open the product {arg} and go to the Manage Inventory under Inventory tab", function openProductToGoToManageInventory (product){
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  let splitContainer = aptify_Shell.SearchForm.searchControl.splitContainer1;
  radPanel = splitContainer.SplitterPanel2.searchParameters.radPanelParams;
  radPanel.quickSearch.quickSearchText.SetText(paperBackProduct2);
  radPanel.switchPanel.searchButton.ClickButton();
  if(splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists)
  {
    splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Title");
  }
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  let ultraTabControl2 = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain;
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Manage Inventory");
  let radGridViewManageInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailableQty = radGridViewManageInventory.wValue(0,"Available Qty").OleValue;
  parAvailableQty = clmAvailableQty;
  
});

Then("Product information panel should be updated with all pending confirmations cleared", function updatedAllPendingTransactions (){
   aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1, "wRowCount", cmpEqual, 0);
});

Then("Manage Inventory tab should be display the actions performed", function checkpointVerifyManageInventoryTab (){
  let radGridViewQtyUnderManageInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailabelQty = radGridViewQtyUnderManageInventory.wValue(0, "Available Qty").OleValue;
  
  
  if(aqObject.CompareProperty(clmAvailabelQty, cmpNotEqual,parAvailableQty, true,3))
  {
    Log.Checkpoint("available Qty has been change");
     }
    else{
    Log.Error("available qty remains same");
    }
    
});

Then("I click Save and close the record to save the record and close the form", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
  Aliases.Aptify_Shell.SearchForm.Close();
});

Then("I click Finish button to confirm the transaction and close the wizard", function clickFinishToConfirmTransactionAndCloseRecord (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

Then("I click on Other Actions and click on Refresh icon", function clickOtherActionsAndRefresh (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(77, 17);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(50, 137);
});

When("I select Product {arg} under Inventory Sets Make and Break", function selectSetProductToBreakTheSets (setproduct){
  
  let selectProductSetsMake = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_PTProductVersionControl_1.advancedLinkBoxProducts.txtLink;
  selectProductSetsMake.Keys(setproduct);
  selectProductSetsMake.Keys("[Enter]");
  if(Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists)
  {
      Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(1, "Title");
  }
});

When("I check the checkboxes to select product", function checkCheckboxesToSetsBreak (){

  let totalRows = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  for (i=0; i<totalRows; i++)
  {
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(i,0);
  }
});


When("I select Product {arg}", function (setProduct){
  
  let lnkSetProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_PTProductVersionControl_1.advancedLinkBoxProducts.txtLink;
  
  lnkSetProduct.SetText(setProduct);
  lnkSetProduct.Keys("[Enter]");
  if(aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(1, "Title");
  }
  
});

var products = [];
var availableQty = [];


When("I retrieve the available quantity", function (){
  let availableQtyBefore = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
  availableQty.push(availableQtyBefore);
  clickSaveAndClose();
});

Then("available quantity should be decreased for both the products", function (){
        clickFindProduct();
        let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
        txtSearch.Click();
        txtSearch.SetText(products[0]);
        clickSearchBtn();
        handleProductsGrid();
        clickInventoryTab();
        
        let availableQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;

        if(aqObject.CompareProperty(availableQtyDisplayed, cmpLess, firstAvailableQty, true, 3)){
         Log.Checkpoint("Available quantity is decreased");
        }
        else{
          Log.Error("Available quantity is not decreased");
        }
        clickSaveAndClose();
     
        clickFindProduct();
        txtSearch.Click();
        txtSearch.SetText(products[1]);
        clickSearchBtn();
        handleProductsGrid();
        clickInventoryTab();
        
        let availableQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;

        if(aqObject.CompareProperty(availableQuantity, cmpLess, secondAvailableQty, true, 3)){
         Log.Checkpoint("Available quantity is decreased");
        }
        else{
          Log.Error("Available quantity is not decreased");
        }
        clickSaveAndClose();    
});

function openProductInformation(productPar){
  clickFindProduct();
  searchProductTitle(productPar);
  clickSearchBtn();
  handleProductsGrid();  
}

function clickFindProduct()
{
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  
}
function searchProductTitle(productPar){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(productPar);
}

When("I verify the product {arg} to use", function (productPar){
  clickFindProduct();
  openProduct(productPar);
  verifySubType();
  verifyIdentifier();
  verifyBundlesTab();
  verifyInventorySites();
  clickSaveAndClose();
  closeForm();
});

function closeForm(){
  if( Aliases.Aptify_Shell.SearchForm.Exists){
    Aliases.Aptify_Shell.SearchForm.Close();
  }
}

When("I enter site\\/warehouse under inventory section {arg}", function (site){
  let ddSite = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_SiteWarehouseID.LookupSearchCombo;
 
  ddSite.Click();
  ddSite.ClickItem(site);
  ddSite.Keys("[Tab]");
});

When("I enter the Set in Product field", function (){
  let txtProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_PTProductVersionControl_1.advancedLinkBoxProducts.txtLink;

  let i = 0;
  
  txtProduct.Click();
  txtProduct.Keys(product);
  txtProduct.Keys("[Tab]");
  if( Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists )
  { 
  let grid = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = grid.wRowCount;
  for(i;i<records;i++){
   if(product == grid.wValue(i, "Title").OleValue){
     grid.DblClickCell(i,"Title");
     break
   }
  }  
 }
});

When("I enter Packets or Qty Loose to make sets", function (){
 let size = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.PTInventorySetsMakeAndBreak_Step3_HeaderPacketSize.txtInner.get_Text();
 let sets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.PTInventorySetsMakeAndBreak_Step3_SetsRequired.txtInner.get_Text();

 let totalPackets;
 if(size>0){
  totalPackets = sets/size; 
  let txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.PTInventorySetsMakeAndBreak_Step3_HeaderPackets.txtInner;
  txtPackets.Click();
  txtPackets.SetText(Math.floor(totalPackets-1));
  txtPackets.Keys("[Tab]");
  packets = totalPackets; 
  let packs = (totalPackets-1)*size;
  let remainder = sets - packs;
  if(remainder>0){
    let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.PTInventorySetsMakeAndBreak_Step3_HeaderLoose.txtInner;
  
    txtQtyLoose.Click();
    txtQtyLoose.SetText(remainder);
    qtyLoose = remainder; 
    txtQtyLoose.Keys("[Tab]");
  }
 }
 else{
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_228.PTInventorySetsMakeAndBreak_Step3.PTInventorySetsMakeAndBreak_Step3_HeaderLoose.txtInner;
  
  txtQtyLoose.Click();
  txtQtyLoose.SetText(sets-1);
  qtyLoose = sets; 
  txtQtyLoose.Keys("[Tab]");
 }
});
  
function openProduct(productPar){
  let txtProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  let grid = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
 
  let i = 0;
  
  txtProduct.Click();
  txtProduct.SetText(productPar);
  product = productPar;
  txtProduct.Keys("[Tab]");
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( grid.Exists )
  { 
  let records = grid.wRowCount;
  for(i;i<records;i++){
   if(productPar == grid.wValue(i, 1).OleValue){
     grid.DblClickCell(i,1);
     break
   }
  }  
 }
 }


function verifySubType()
{
  let subType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea.Group_PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  if(subType == "Set - Stock from Components"){
    Log.Error("Product Sub Type should be Set - Stock From Set")
  }
}

function verifyIdentifier(){
  let identifier = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea.Group_PT_Products_Toparea_PrimaryIdentifierLabel.txtInner.Text.OleValue;
  if(identifier == EmptyVariant)
  {
    Log.Error("Product does not have an Identifier")
  }
}

function verifySetComponentsSubType()
{
  let subType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea.Group_PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  if(subType != "Set - Stock from Components"){
    Log.Error("Product Sub Type should be Set - Stock from Components")
  }
}

function verifySetInventory(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory")
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  if(records == 0){
    Log.Error("No Inventory Sites exist");
  }
  else if(radGridView.wValue(0, 4).OleValue != "Open" ){
      Log.Error("Supply Status should be Open");
    } 
    
  if(radGridView.wValue(0, "Physical").OleValue != null && radGridView.wValue(0, "Available").OleValue != null)  {
    Log.Error("Stock should be null");
  }
}

function verifyInventoryNYP(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory")
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  if(records == 0){
    Log.Error("No Inventory Sites exist");
  }
  else if(radGridView.wValue(0, 4).OleValue == "Open" ){
      Log.Error("Supply Status should be 'Not Yet Published'");
    }  
}

function verifyBundlesTab(){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PT_ProductParts_Overview.PT_ProductParts_Overview_Telerik_List_View_BundleOverviewParts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  if(records == 0){
    Log.Error("No products in the Set");
  }
  else if(records<2){
    Log.Error("There should be atleast 2 products in the Set");
  }
}

function verifyInventorySites(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory")
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  if(records == 0){
    Log.Error("No Inventory Sites exist");
  }
  else{
    if(radGridView.wValue(0, 7).OleValue == EmptyVariant){
      Log.Error("Default Picking Location should not be empty");
    }
  }
}






When("I verify the product {arg} to be used", function (productPar){
  clickFindProduct();
  openProduct(productPar);
  verifyingIdentifier();
  checkInventory();
  checkPrice();
  verifyCurrentlySoldCheckbox();
  clickSaveAndClose();
  closeForm();
});

When("I select the Product to Order", function (){
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;

  let i = 0;
  
  txtProduct.Click();
  txtProduct.SetText(product);
  txtProduct.Keys("[Tab]");
  if( Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.Exists )
  { 
  let grid = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = grid.wRowCount;
  for(i;i<records;i++){
   if(product == grid.wValue(i, 2).OleValue){
     grid.DblClickCell(i,2);
     break
   }
  }  
 }
});

function verifyInventory(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory")
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  if(records == 0){
    Log.Error("No Inventory Sites exist");
  }
}

function verifyingIdentifier(){
  let identifier = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_PrimaryIdentifierLabel.txtInner.Text.OleValue;
  if(identifier == "")
  {
    Log.Error("Product does not have an Identifier")
  }
}

When("I verify the gratis product {arg} to be used", function (productPar){
  clickFindProduct();
  openProduct(productPar);
  verifyingIdentifier();
  verifyInventory();
  checkGratisAllowed();
  clickSaveAndClose();
  closeForm();
});

function checkGratisAllowed(){
 Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Fulfilment");
  
 if(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_Fulfilment_Tabs.tabMain.PT_Products_OTC_Fulfilment1.PT_Products_OTC_Fulfilment1.PT_Products_OTC_Fulfilment1_IsGratisOnly.chkInternal.wState == cbUnchecked){
   Log.Error("Gratis Only is not Checked");
 }
 
 if(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_Fulfilment_Tabs.tabMain.PT_Products_OTC_Fulfilment1.PT_Products_OTC_Fulfilment1.PT_ProductsOTC_Fulfilment_GratisAllowed.chkInternal.wState == cbUnchecked ){
   Log.Error("Gratis Allowed is not Checked");
 }
 
  if(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_Fulfilment_Tabs.tabMain.PT_Products_OTC_Fulfilment1.PT_Products_OTC_Fulfilment1.PT_ProductsOTC_Fulfilment_IsSold.chkInternal.wState == cbUnchecked){
   Log.Error("Currently Sold Checkbox is not checked");  
  } 
}

Then("I select transaction type {arg}, Sale type {arg}, and the Product", function (transactionType, sale){
  selectTransactionType(transactionType);
  selectSale(sale);
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
  let records = grid.wRowCount;
  for(i;i<records;i++){
   if(product == grid.wValue(i, 2).OleValue){
     grid.DblClickCell(i,2);
     break
   }
  }  
 }
}

When("I open set product {arg}", function (setProduct){
  openSetProduct(setProduct);
  checkSubType();
  checkIdentifier();
  checkBundlesTab();
  checkInventorySites();
});


function openSetProduct(setProduct)
{
  aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  splitContainer = aptify_Shell.SearchForm.searchControl.splitContainer1;
  radPanel = splitContainer.SplitterPanel2.searchParameters.radPanelParams;
  textBox = radPanel.quickSearch.quickSearchText;
  
  textBox.SetText(setProduct);
  product = setProduct
  radPanel.switchPanel.searchButton.ClickButton();
  let rad = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let count = rad.wRowCount;
  if(rad.Exists)
 {
  for(let i=0;i<count;i++)
  {
  if(setProduct == rad.wValue(i, "Title").OleValue)
  {
    splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(i, "Title");
  }
  }
  }
}

function checkSubType()
{
  let txtSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea.Group_PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  if(txtSubType == "Set - Stock from Components")
  {
    Log.Error("Product sub type is stock from components")
  }
}

function checkIdentifier()
{
  let txtIdentifier = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea.Group_PT_Products_Toparea_PrimaryIdentifierLabel.txtInner.Text.OleValue;
  if(txtIdentifier == "")
  {
    Log.Error("Selected product identifier value is blank")
  }
}

function checkBundlesTab()
{
  let splitContainer = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer;
  let radgridviewBundles = splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PT_ProductParts_Overview.PT_ProductParts_Overview_Telerik_List_View_BundleOverviewParts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowcountBundles = radgridviewBundles.wRowCount
  if(rowcountBundles == 0)
  {
    Log.Error("first add two products under bundle contents section");
  }
  let firstProduct = radgridviewBundles.wValue(rowcountBundles-1,"Sub Product").OleValue;
  let secondProduct = radgridviewBundles.wValue(rowcountBundles-2,"Sub Product").OleValue;
  bundleSectionProduct1 = firstProduct
  bundleSectionProduct2 = secondProduct
}

function checkInventorySites()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Inventory Sites");
  let radgridviewInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowcountInventory = radgridviewInventory.wRowCount;
  if(rowcountInventory == 0)
  {
    Log.Error("Inventory site is not display.Create watford Inventory site");
  }
}

When("I search the product to verify details {arg}", function searchProductToCheckInventory (searchProduct){
  clickFindProductBtn()
  serachProductToVerify(searchProduct);
  checkIdentifierBooksType();
  checkListPricesBooksType();
  clickInventoryTab();
  checkInventorySites();
  checkSupplyStatusBackorder();
  clickSaveAndClose();
});

When("I open backorder product to verify details {arg}", function (searchProduct){
  clickFindProductBtn();
  serachProductToVerify(searchProduct);
  checkIdentifierBooksType();
  checkListPricesBooksType();
  clickInventoryTab();
  checkInventorySites();
  checkSupplyStatusBackorder();
  checkPhysicalInventoryForReleaseBackorder()
  clickSaveAndClose();
});

function checkPhysicalInventoryForReleaseBackorder()
{
  let radGridViewInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmPhysicalQty = radGridViewInventory.wValue(0, "Physical").OleValue;

  if(clmPhysicalQty = 0 || clmPhysicalQty == "")
  {
    Log.Error("selected product from the list don't have physical quantity")
  }
}

function serachProductToVerify(searchProduct)
{
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radPanel = splitContainer.SplitterPanel2.searchParameters.radPanelParams;
  radPanel.quickSearch.quickSearchText.Keys(searchProduct);
  product = searchProduct;
  radPanel.switchPanel.searchButton.ClickButton();
  
  let radGridView = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridView.Exists)
  {
    let countRows = radGridView.wRowCount;
    for(let i=0;i<countRows;i++)
    {
      if(product == radGridView.wValue(i,"Title").OleValue)
      {
        radGridView.DblClickCell(i,"Title");
    }
  }
}


}

function checkIdentifierBooksType()
{
  let txtIdentifier = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_PrimaryIdentifierLabel.txtInner.Text.OleValue;
  if(txtIdentifier == "")
  {
    Log.Error("Add identifier to the selected product")
  }
}

function checkListPricesBooksType()
{
  let txtListPrices = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Field_ListPricesDisplay.txtInner.Text.OleValue;
  if(txtListPrices  == "")
  {
    Log.Error("Add list prices to the selected product");
  }
}



function checkSupplyStatusBackorder()
{
  let radGridViewInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailableQty = radGridViewInventory.wValue(0, "Available").OleValue;
  availableInventory = clmAvailableQty;
  let clmSupplyStatus = radGridViewInventory.wValue(0, "Supply Status").OleValue;
  if(clmAvailableQty > 0 && clmSupplyStatus == "Open")
  {
    Log.Error("selected product from the list that is not Backorder")
  }
}



When("I open the product to verify details {arg}", function searchProductToCheckTypeTitleAndIdentifier (searchProduct){
  clickFindProductBtn()
  serachProductToVerify(searchProduct);
  checkIdentifierBooksType();
  checkListPricesBooksType();
  checkSubTypeForPaperBack()
  checkCheckboxCurrentlySold();
  retrieveProductInformation();
  clickInventoryTab();
  checkInventorySites()
  checkInventorySupplyStatus();
  checkAvailableInventory();
  clickSaveAndClose();
});

function retrieveProductInformation()
{
   let productTopAreaGeneralLayout = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General;
  let txtIdentifier = productTopAreaGeneralLayout.PT_Products_Toparea_PrimaryIdentifierLabel.txtInner.Text.OleValue;
  let txtType = productTopAreaGeneralLayout.PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  let txtTitle = productTopAreaGeneralLayout.PT_Products_Toparea_Title.txtInner.Text.OleValue;
  parIdentifier = txtIdentifier;
  parType = txtType;
  parTitle = txtTitle;
}

function checkAvailableInventory()
{
  let radGridViewInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailableQty = radGridViewInventory.wValue(0, "Available").OleValue;
  availableInventory = clmAvailableQty;
  if(clmAvailableQty <= 0 || clmAvailableQty == "")
  {
    Log.Error("selected product from the list that is Backorder")
  }
}

function checkInventorySupplyStatus()
{
  let radGridViewInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmSupplyStatus = radGridViewInventory.wValue(0, "Supply Status").OleValue;

  if(clmSupplyStatus != "Open")
  {
    Log.Error("selected product supply status is not Open");
  }
}

When("I open the product to verify details for dvd product {arg}", function (searchProduct){
  clickFindProductBtn()
  serachProductToVerify(searchProduct);
  checkIdentifierBooksType();
  checkListPricesBooksType();
  checkSubTypeDvd();
  retrieveProductInformation();
  clickInventoryTab();
  checkInventorySites();
  checkInventorySupplyStatus();
  checkAvailableInventory();
  clickSaveAndClose();
});

function checkSubTypeDvd()
{
  let productTopAreaGeneralLayout = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General;
  let txtType = productTopAreaGeneralLayout.PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  if(txtType != "DVD")
  {
    Log.Error("Product sub type is not dvd product");
  }
}


Then("I enter product on Orders Id wizard", function (){
  let lnkProductName = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  lnkProductName.Keys(product);
  lnkProductName.Keys("[Tab]");
  productName = product
  
  let radGridViewProductOrderId = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  if(radGridViewProductOrderId.Exists)
  {
  let countRows = radGridViewProductOrderId.wRowCount;
  for(let i=0;i<countRows;i++)
  {
  if(product == radGridViewProductOrderId.wValue(i, "Title").OleValue)
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(i, "Title");
    break;
  }
  }
  }
});

When("I verify the details for Set stock from components product {arg}", function (searchProduct){
  clickFindProductBtn()
  serachProductToVerify(searchProduct);
  checkProductsInStockFromComponents();
  retrieveProductsStockFromomponents();
  checkStockFromComponentsIdentifier();
  checkSubTypeStockFromComponents();
  checkCheckboxCurrentlySold();
  clickInventoryTab();
  checkInventorySites();
  checkCheckboxAllowBackorders()
  checkSupplyStatusBackorder();
  checkAnswerCode();
  clickSaveAndClose();
});

function checkProductsInStockFromComponents()
{
  let radGridViewBundlesTab = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PT_ProductParts_Overview.PT_ProductParts_Overview_Telerik_List_View_BundleOverviewParts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCountBundlesTab = radGridViewBundlesTab.wRowCount;
  if(rowCountBundlesTab == 1)
  {
    Log.Error("More than one product is required for stock from components type")
  }
}

function retrieveProductsStockFromomponents()
{
  let radGridViewBundlesTab = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PT_ProductParts_Overview.PT_ProductParts_Overview_Telerik_List_View_BundleOverviewParts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCountBundlesTab = radGridViewBundlesTab.wRowCount;
  let productDisplay1 = radGridViewBundlesTab.wValue(rowCountBundlesTab-1,"Sub Product").OleValue;
  product1 = productDisplay1;
  let productDisplay2 = radGridViewBundlesTab.wValue(rowCountBundlesTab-2,"Sub Product").OleValue;
  product2 = productDisplay2;
}

function checkStockFromComponentsIdentifier()
{
  let productTopAreaGeneralLayout = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea;
  let txtIdentifierComponents = productTopAreaGeneralLayout.Group_PT_Products_Toparea_PrimaryIdentifierLabel.txtInner.Text.OleValue;
  if(txtIdentifierComponents ==  "")
  {
    Log.Error("selected product Identifier is blank");
  }
}

function checkSubTypeStockFromComponents()
{
  
  let txtType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea.Group_PT_Products_Toparea_ResourceType.txtInner.Text.Olevalue;
  if(txtType != "Set - Stock from Components")
  {
    Log.Error("Product sub type is not set stock from components");
  }
}


function checkCheckboxCurrentlySold()
{
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  ultraTabControl.ClickTab("Fulfilment");
  let checkboxCurrentlySold = ultraTabControl.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_Fulfilment_Tabs.tabMain.PT_Products_OTC_Fulfilment1.PT_Products_OTC_Fulfilment1.PT_ProductsOTC_Fulfilment_IsSold.CheckState;
  if(checkboxCurrentlySold != "Checked")
  {
    Log.Error("Currently sold checkbox is not checked")
  }
}

function checkCheckboxAllowBackorders()
{
  let radGridViewInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAllowbackorders = radGridViewInventory.wValue(0, "Allow Backorders").OleValue;
  if(clmAllowbackorders == "false")
  {
    Log.Error("Allow Backorders checkbox is not checked");
  }
}

function checkAnswerCode()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.pagetabDetails.Click();
  ultraTabControl = aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain;
  let C1FlexGrid = ultraTabControl.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType;
  ultraTabControl.ClickTab("Product Versions");
  C1FlexGrid.rowRow1.cellRow1Column1.DblClick();
  aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.ClickTab("Fulfilment");
  let ddAnswerCode = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PT_ProductVersions_Lookup_AnswerCode.LookupSearchCombo.Text.OleValue;

  if(ddAnswerCode != "Temporarily Out of Stock")
  {
    Log.Error("selected product answer code is not TOS");
  }
  let subTypeTemplateForm = Aliases.Aptify_Shell.SubTypeTemplateForm;
  subTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
  
}

When("I retrieve product name from Promotions Id wizard", function (){
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain;
  ultraTabControl.ClickTab("Qualification");
  let lnkProduct = ultraTabControl.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_QualificationTabControl.tabMain.PTPromotions_Form_QualifiersTabs_Products.PTPromotions_Form_QualifiersTabs_ProductsTemplate.PTPromotions_Form_QualifiersTabs_ProductsTemplate_ProductVersionControl.advancedLinkBoxProducts.txtLink.Text.OleValue;
  product = lnkProduct;
});

Then("I open the product record", function (){
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

Then("I open the product record {arg}", function openProductRecord (productName){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  let ProductSearchingWizard = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let textBox = ProductSearchingWizard.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  textBox.Click();
  textBox.SetText(productName);
 
  textBox.Text.OleValue;
  
  let btnSearch = ProductSearchingWizard.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton
  btnSearch.ClickButton();
  
  let radGridViewSearchProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewSearchProduct.Exists)
  {
      radGridViewSearchProduct.DblClickCell(0, "Title");
  }
});

When("I verify the details for product {arg}", function (searchProduct){
  clickFindProductBtn()
  serachProductToVerify(searchProduct);
  checkIdentifierBooksType();
  checkListPricesBooksType();
  checkSubTypeForPaperBack();
  retrieveProductInformation();
  checkAnswerCode();
  checkCheckboxCurrentlySold
  clickInventoryTab();
  checkInventorySites();
  checkCheckboxAllowBackorders()
  checkInventorySupplyStatus();
  checkAvailableInventory();
  clickSaveAndClose();
});

function checkSubTypeForPaperBack()
{
  let productTopAreaGeneralLayout = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General;
  let txtType = productTopAreaGeneralLayout.PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  if(txtType != "Book- Paperback")
  {
    Log.Error("Product sub type is not book paperback");
  }
}

When("I enter Product Name On Orders Id wizard", function (){
  let lnkProductName = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  lnkProductName.Keys(product);
  lnkProductName.Keys("[Tab]");
  
  let radGridViewProductOrderId = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  if(radGridViewProductOrderId.Exists)
  {
  let countRows = radGridViewProductOrderId.wRowCount;
  for(let i=0;i<countRows;i++)
  {
  if(product == radGridViewProductOrderId.wValue(i, "Title").OleValue)
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(i, "Title");
    break;
  }
  }
  }
});

When("I verify the product to use {arg}", function (productPar){
  clickFindProduct();
  openProduct(productPar);
  checkIdentifier();
  checkInventory();
  verifyCurrentlySoldCheckbox();
  checkPrice();
  clickSaveAndClose();
  closeForm();
});

function checkInventory(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory")
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  if(records == 0){
    Log.Error("No Inventory Sites exist");
  }
  else if(radGridView.wValue(0, 3).OleValue <= 0){
    Log.Error("No available quantity");
  }
  else if(radGridView.wValue(0, 4).OleValue == "Not Yet Published"){
    Log.Error("Supply Status is not Open");
  }
}

function verifyCurrentlySoldCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Fulfilment");
  if(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_Fulfilment_Tabs.tabMain.PT_Products_OTC_Fulfilment1.PT_Products_OTC_Fulfilment1.PT_ProductsOTC_Fulfilment_IsSold.chkInternal.wState == cbUnchecked){
   Log.Error("Currently Sold Checkbox is not checked");  
  }
}

function checkPrice(){
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

When("I verify set {arg} to use", function (productPar){
  clickFindProduct();
  openProduct(productPar);
  retrieveComponents();
  verifySetComponentsSubType();
  verifyIdentifier();
  verifyBundlesTab();
  checkPrice();
  verifyCurrentlySoldCheckbox();
  verifyAnswerCode();
  verifyInventoryNYP();
  clickSaveAndClose();
  closeForm();
});

function verifyAnswerCode()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Details");
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.ClickTab("Product Versions");
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|Open");
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.ClickTab("Fulfilment");
  
  
 if( Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PT_ProductVersions_Lookup_AnswerCode.LookupSearchCombo.WndCaption != "Temporarily Out of Stock"  ){
   Log.Error("Answer Code should be 'Temporarily Out of Stock'");
 }
}
 
function retrieveComponents(){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PT_ProductParts_Overview.PT_ProductParts_Overview_Telerik_List_View_BundleOverviewParts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let component1 = radGridView.wValue(0, "Sub Product").OleValue;
  firstComponent = component1;
  let component2 = radGridView.wValue(1, "Sub Product").OleValue;
  secondComponent = component2;
  
  products.push(component1);
  productPar = product;
  products.push(component2);
  productPar = product;
}

When("I open first component to retrieve Available Qty", function (){
  clickFindProduct();
  openFirstComponent();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  
  retrieveAvailableQty1();
  
  clickSaveAndClose();
  closeForm();
});

When("I open second component to retrieve Available Qty", function (){
  clickFindProduct();
  openSecondComponent();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  
  retrieveAvailableQty2();
  
  clickSaveAndClose();
  closeForm();
});


function openFirstComponent(){
  let txtProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;

  let i = 0;
  
  txtProduct.Click();
  txtProduct.SetText(firstComponent);
  txtProduct.Keys("[Tab]");
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( Aliases.Aptify_Shell.SearchForm.Exists )
  { 
  let grid = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = grid.wRowCount;
  for(i;i<records;i++){
   if(firstComponent == grid.wValue(i, 1).OleValue){
     grid.DblClickCell(i,1);
     break
   }
  }  
 }
}

function openSecondComponent(){
  let txtProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;

  let i = 0;
  
  txtProduct.Click();
  txtProduct.SetText(secondComponent);
  txtProduct.Keys("[Tab]");
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( Aliases.Aptify_Shell.SearchForm.Exists )
  { 
  let grid = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = grid.wRowCount;
  for(i;i<records;i++){
   if(secondComponent == grid.wValue(i, 1).OleValue){
     grid.DblClickCell(i,1);
     break
   }
  }  
 }
}

function retrieveAvailableQty1(){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let availableInventory = radGridView.wValue(0, "Available").OleValue;
  firstAvailableQty = availableInventory;
}

function retrieveAvailableQty2(){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let availableInventory = radGridView.wValue(0, "Available").OleValue;
  secondAvailableQty = availableInventory;
}

Then("I enter P\\/O Reference, Quantity {arg}", function (quantityPar){
  enterPOref();
  enterQuantity(quantityPar);
  
  let availableInventoryDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.get_Text();
  availableInventoryBefore = availableInventoryDisplayed;
});

When("I verify the set {arg} to use", function (productPar){
  clickFindProduct();
  openProduct(productPar);
  retrieveComponents();
  verifySetComponentsSubType();
  verifyIdentifier();
  verifyBundlesTab();
  verifySetInventory();
  clickSaveAndClose();
  closeForm();
});

Then("I click on Find an Order", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
    Aliases.Aptify_Shell.dlg.btnYes.ClickButton();
  }
Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
});

Then("Order information should be correctly displayed", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let customerDisplayed = radGridView.wValue(0, "Ship-To Name").OleValue;
  let productDisplayed = radGridView.wValue(0, "Title").OleValue;
  if(aqObject.CompareProperty(customerDisplayed, cmpEqual, company, true,3))
  {
    Log.Checkpoint("Customer displayed is correct");
  }
  else{
    Log.Error("Customer displayed is incorrect");
  }
  if(aqObject.CompareProperty(productDisplayed, cmpEqual, product, true,3))
  {
    Log.Checkpoint("Product displayed is correct");
  }
  else{
    Log.Error("Product displayed is incorrect");
  }
});

Then("I open the set", function (){
  clickFindProductBtn();
  enterSet();
  clickSearchBtn();
  handleProductsGrid();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});

Then("Physical and Available quantity should be Null", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

  let physicalQty = radGridView.wValue(0, "Physical").OleValue;
  let availableQty = radGridView.wValue(0, "Available").OleValue;
  
  if(aqObject.CompareProperty(physicalQty, cmpEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Physical quantity is Null");
  }
  else{
    Log.Error("Physical quantity is not Null");
  }
  if(aqObject.CompareProperty(availableQty, cmpEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Available quantity is Null");
  }
  else{
    Log.Error("Available quantity is not Null");
  }
});

function enterSet(){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(product);
}
Then("I open product information panel for first component", function (){
  clickFindProduct();
  openFirstComponent();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});

Then("Available quantity should be downgraded", function (){
  let availableQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;

  if(aqObject.CompareProperty(availableQtyDisplayed, cmpLess, firstAvailableQty, true, 3)){
    Log.Checkpoint("Available quantity is decreased");
     }
  else{
    Log.Error("Available quantity is not decreased");
    }
});

Then("I open product information panel for second component", function (){
  clickFindProduct();
  openSecondComponent();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});

Then("available quantity should be downgraded", function (){
  let availableQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;

  if(aqObject.CompareProperty(availableQtyDisplayed, cmpLess, secondAvailableQty, true, 3)){
    Log.Checkpoint("Available quantity is decreased");
     }
  else{
    Log.Error("Available quantity is not decreased");
    }
});

When("I verify the product {arg} to backorder", function (productPar){
  clickFindProduct();
  openProduct(productPar);
  verifyingIdentifier();
  verifyBackorderInventory();
  verifyCurrentlySoldCheckbox();
  checkPrice();
  clickSaveAndClose();
  closeForm();
});

function verifyBackorderInventory(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory")
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  if(records == 0){
    Log.Error("No Inventory Sites exist");
  }
  else if((radGridView.wValue(0, 4).OleValue != "Not Yet Published") && (radGridView.wValue(0, 3).OleValue > 0) ){
    Log.Error("Supply Status should be 'Not Yet Published'");
  }  
}

function checkSupplyStatusNyp()
{
  let radGridViewInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmSupplyStatus = radGridViewInventory.wValue(0, "Supply Status").OleValue;

  if(clmSupplyStatus != "Not Yet Published")
  {
    Log.Error("selected product supply status is not Nyp");
  }
}

function checkNoStock()
{
  let radGridViewInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailableQty = radGridViewInventory.wValue(0, "Available").OleValue;
  availableInventory = clmAvailableQty;
  if(clmAvailableQty != "")
  {
    Log.Error("selected product from the list has stock")
  }
}

function checkAvailableStock()
{
  let radGridViewInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailableQty = radGridViewInventory.wValue(0, "Available").OleValue;
  availableInventory = clmAvailableQty;
  if(clmAvailableQty <= 0 || clmAvailableQty == "")
  {
    Log.Error("selected product from the list has no stock")
  }
}

function checkSupplyStatusClosed()
{
  let radGridViewInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmSupplyStatus = radGridViewInventory.wValue(0, "Supply Status").OleValue;

  if(clmSupplyStatus != "Closed")
  {
    Log.Error("selected product supply status is not Closed");
  }
}

function checkAnswerCodeOP()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  let ultraTabControl = aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain;
  ultraTabControl.ClickTab("Product Versions");
  let flexsubType = ultraTabControl.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType;
  let rows = flexsubType.Rows;
  for(let i = 0;i<rows;i++)
  {
    let versionType = flexsubType.get_Item(i,1).OleValue;

    if(versionType == "Main Market Version")
    {
      ultraTabControl.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType.DblClick(i,1);
      ultraTabControl = aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain;
      ultraTabControl.ClickTab("Fulfilment");
      let ddAnswerCode = ultraTabControl.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PT_ProductVersions_Lookup_AnswerCode.LookupSearchCombo.Text.OleValue;
      if(ddAnswerCode != "Out of Print")
      {
       Log.Error("selected product answer code is not OP");
      }
    }
  }
}

function checkAnswerCodeNYP()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  let ultraTabControl = aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain;
  ultraTabControl.ClickTab("Product Versions");
  let flexsubType = ultraTabControl.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType;
  let rows = flexsubType.Rows;
  for(let i = 0;i<rows;i++)
  {
    let versionType = flexsubType.get_Item(i,1).OleValue;

    if(versionType == "Main Market Version")
    {
      ultraTabControl.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType.DblClick(i,1);
      ultraTabControl = aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain;
      ultraTabControl.ClickTab("Fulfilment");
      let ddAnswerCode = ultraTabControl.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PT_ProductVersions_Lookup_AnswerCode.LookupSearchCombo.Text.OleValue;
      if(ddAnswerCode != "Not Yet Published")
      {
       Log.Error("selected product answer code is not NYP");
      }
    }
  }
}

function clickDetailsTab()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Details")
}

When("I open product to verify details {arg}", function (searchProduct){
  clickFindProductBtn()
  serachProductToVerify(searchProduct);
  checkIdentifierBooksType();
  checkListPricesBooksType();
  clickInventoryTab();
  checkInventorySites()
  checkInventorySupplyStatus();
  checkAvailableInventory();
  clickSaveAndClose();
});


//single and multiple deliveries
When("I verify the supplier order and delivery record for {arg}", function (searchProduct){
  clickFindProductBtn()
  serachProductToVerify(searchProduct);
  checkIdentifierBooksType();
  checkListPricesBooksType();
  //retrieveProductInformation();
  clickInventoryTab();
  checkSupplierOrders();
  checkInventorySites()
  checkInventorySupplyStatus();
  checkAvailableInventory();
  //clickSaveAndClose();
});

function checkSupplierOrders()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Supplier Orders");
  let radGridViewSupplierOrders = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowcountSupplierOrders = radGridViewSupplierOrders.wRowCount;
  if(rowcountSupplierOrders == 0)
  {
    Log.Error("Supplier Orders are not created");
  }
}

function checkSupplierOrdersForMultipleDeliveries()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Supplier Orders");
  let radGridViewSupplierOrders = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowcountSupplierOrders = radGridViewSupplierOrders.wRowCount;
  if(rowcountSupplierOrders  < 2)
  {
    Log.Error("Two Supplier Orders are required");
  }
}

When("I verify the supplier order for {arg}", function (searchProduct){
  clickFindProductBtn()
  serachProductToVerify(searchProduct);
  checkIdentifierBooksType();
  checkListPricesBooksType();
  clickInventoryTab();
  checkSupplierOrdersForMultipleDeliveries();
  checkInventorySites()
  checkInventorySupplyStatus();
  checkAvailableInventory();
});

When("I enter Company name {arg}", function (company){
  let txtCompanyName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner;
  txtCompanyName.Click();
  txtCompanyName.EmbeddableTextBoxWithUIPermissions.SetText(company);
  companyName = company;
  txtCompanyName.Keys("[Tab]");
});

When("I enter Company details", function (){
  let txtWebsiteType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_WebsiteTypeID.LookupSearchCombo;
  txtWebsiteType.Click();
  txtWebsiteType.ClickItem("Old");
  txtWebsiteType.Keys("[Tab]");
  
  let string1 = "WWW." ;
  let string2 = ".COM"
  let website = aqString.Concat(string1,(aqString.concat(aqString.Replace(companyName, " ", ""),string2))); 
  
  let txtWebsite = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_Website.txtInner;
  txtWebsite.Click();
  txtWebsite.Keys(website);
  txtWebsite.Keys("[Tab]");
  
  let randomNumber =  aqConvert.FloatToStr(Math.floor((Math.random() * 100) + 1));
  let email = aqString.concat(randomNumber,"@gmail.com") ;
  let randomEmail = aqString.Concat(aqString.ToLower(aqString.Replace(companyName, " ", "")), email);
  
  let txtEmail = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_6.PTCompanyEmailAddressesCustomerWizard.PTCompanyEmailAddressesCustomerWizard_Email.txtInner;
  txtEmail.Click();
  txtEmail.SetText(randomEmail);
  txtEmail.Keys("[Tab]");
  
  let txtAreaCode =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_AreaCode.txtInner;
  txtAreaCode.Click();
  txtAreaCode.SetText(0101);
  txtAreaCode.Keys("[Tab]");
  
  let txtNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_Phone.txtInner;
  let number = aqConvert.FloatToStr(Math.floor((Math.random() * 10000000000) + 1));
  txtNumber.Click();
  txtNumber.SetText(number);
  txtNumber.Keys("[Tab]");
  
  let txtExt =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_PhoneExtension.txtInner;
  txtExt.Click();  
  txtExt.SetText(123);
  txtExt.Keys("[Tab]");
});

When("I enter Address", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
  
  let txtHouseNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner;
  txtHouseNumber.Click();
  txtHouseNumber.SetText(29);
  txtHouseNumber.Keys("[Tab]");
  
  let txtFloor =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner;
  txtFloor.SetText("5th Floor");
  txtFloor.Keys("[Tab]");
  
  let txtBuilding =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner;
  txtBuilding.SetText("The Shard");
  txtBuilding.Keys("[Tab]");
  
  let txtStreetName =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner;
  txtStreetName.SetText("Abbey");
  txtStreetName.Keys("[Tab]");
  
  let txtDistrict = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner;
  txtDistrict.SetText("Brent");
  txtDistrict.Keys("[Tab]");
  
  let txtTown = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner;
  txtTown.SetText("Oxford");
  txtTown.Keys("[Tab]");
  
  let txtCounty =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner;
  txtCounty.SetText("Shropshire");
  txtCounty.Keys("[Tab]");
  
  let randomStr1 =  aqConvert.FloatToStr(Math.floor((Math.random() * 100000) + 1));
  let txtPostcode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner;
  txtPostcode.SetText(randomStr1);
  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDisplay.chkInternal.wState = cbChecked;

  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();  
});

When("I check Open on Finish checkbox", function (){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDisplay.chkInternal.wState = cbChecked;
});

When("I add Standard Document, Warehouse, Label, Footnote and Information Message", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Trading");
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.ClickTab("Order Preferences (cont.)");
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").ClickTab("Texts");
  
  selectDocument();
  selectWarehouse();
  selectLabel();
  selectFootnote();
  selectInformationMessage();
});

When("I enter Standard Document, Warehouse, Label, Footnote and Information Message", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Trading");
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.ClickTab("Order Preferences (cont.)");
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").ClickTab("Texts");
  
  enterDocument();
  enterWarehouse();
  enterLabel();
  enterFootnote();
  enterInformationMessage();
});

function selectDocument(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbChecked ){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbUnchecked;
  }
  
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyLinkBoxSearch").WinFormsObject("txtLink").Click(504, 4);
  Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel.simpleSearchCtl.txtSearch.wButtonsRight(0).Click();
  Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel_new.elvFind.EntityListView_Fill_Panel.SplitContainer1.SplitterPanel.fgMain.DblClick(146, 32);
}

function enterDocument(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState == cbUnchecked ){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbChecked;
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbUnchecked;
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbChecked;
  }
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyTextBoxAddText").WinFormsObject("txtInner").Keys("DummyDocument")
}

function selectInformationMessage(){
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").ClickTab("Information Message");
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbChecked ){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbUnchecked;
  }  

  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyLinkBoxSearch").WinFormsObject("txtLink").Click(497, 7);
  Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel.simpleSearchCtl.txtSearch.wButtonsRight(0).Click();
  Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel_new.elvFind.EntityListView_Fill_Panel.SplitContainer1.SplitterPanel.fgMain.DblClick(147, 33);
}

function enterInformationMessage(){
   Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").ClickTab("Information Message");
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState == cbUnchecked  ){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbChecked;
  }  
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbUnchecked;
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbChecked;
  }
Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.InformationMessage.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyTextBoxAddText").WinFormsObject("txtInner").Keys("dummyInformation");
}

function selectWarehouse(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").ClickTab("Warehouse");
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbChecked){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbUnchecked;
  }   
   
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyLinkBoxSearch").WinFormsObject("txtLink").Click(502, 10);
  Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel.simpleSearchCtl.txtSearch.wButtonsRight(0).Click();
  Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel_new.elvFind.EntityListView_Fill_Panel.SplitContainer1.SplitterPanel.fgMain.DblClick(137, 33);
 
}

function enterWarehouse(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").ClickTab("Warehouse");
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState == cbUnchecked  ){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbChecked;
  } 
   else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbUnchecked;
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbChecked;
  }   
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Warehouse.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyTextBoxAddText").WinFormsObject("txtInner").Keys("dummyWarehouse"); 
}

function selectLabel(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").ClickTab("Label");
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbChecked){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbUnchecked;
  }
  
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyLinkBoxSearch").WinFormsObject("txtLink").Click(499, 10);
  Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel.simpleSearchCtl.txtSearch.wButtonsRight(0).Click();
  Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel_new.elvFind.EntityListView_Fill_Panel.SplitContainer1.SplitterPanel.fgMain.DblClick(79, 26);
}

function enterLabel(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").ClickTab("Label");
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState == cbUnchecked ){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbChecked;
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbUnchecked;
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbChecked;
  }  
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Label.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyTextBoxAddText").WinFormsObject("txtInner").Keys("dummyLabel");
}

function selectFootnote()
{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").ClickTab("Footnote");
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState == cbChecked ){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbUnchecked;
  }

  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyLinkBoxSearch").WinFormsObject("txtLink").Click(503, 6);
 
  Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel.simpleSearchCtl.txtSearch.wButtonsRight(0).Click();
  Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel_new.elvFind.EntityListView_Fill_Panel.SplitContainer1.SplitterPanel.fgMain.DblClick(295, 33);
}

function enterFootnote()
{
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").ClickTab("Footnote");
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState == cbUnchecked ){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbChecked;
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbUnchecked;
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Documents.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyCheckBoxEnabled").WinFormsObject("chkInternal").wState = cbChecked;
  }
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Texts.Tab").WinFormsObject("tabMain").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab").WinFormsObject("Companies.Trading.OrderPreferences2.Footnote.Tab.PTDocumentTextControl.1").WinFormsObject("aptifyTextBoxAddText").WinFormsObject("txtInner").Keys("dummyFootnote");
}

When("I verify the details for Subscription product {arg}", function (searchProduct){
  clickFindProductBtn()
  serachProductToVerify(searchProduct);
  checkIdentifierSubscription();
  checkListPricesSubscription();
  chekSubTypeSubscription();
  checkCheckboxCurrentlySold();
  clickSaveAndClose();
});

function chekSubTypeSubscription()
{
  let txtSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Subs_OTCProducts_Toparea.Subs_OTCProducts_Toparea_ResourceType.txtInner.Text.OleValue;
  if(txtSubType != "Subscription (print)")
  {
    Log.Error("product sub type is not  subscription");
  }
}

function checkIdentifierSubscription()
{
  let productTopAreaGeneralLayout = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Subs_OTCProducts_Toparea;
  let txtIdentifierSubscription = productTopAreaGeneralLayout.Subs_OTCProducts_Toparea_PrimaryIdentifierLabel.txtInner.Text.OleValue;
  if(txtIdentifierSubscription == "")
  {
    Log.Error("product Identifier is empty field");
  }
  
}

function checkListPricesSubscription()
{
  let productTopAreaGeneralLayout = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Subs_OTCProducts_Toparea;
  let txtIdentifierSubscription = productTopAreaGeneralLayout.Subs_OTCProducts_Toparea_Field_ListPricesDisplay.txtInner.Text.OleValue;
  if(txtIdentifierSubscription == "")
  {
    Log.Error("Default list prices is mandatory");
  }
}

When("I enter Address details", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
  
  let txtHouseNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner;
  txtHouseNumber.Click();
  txtHouseNumber.SetText(29);
  txtHouseNumber.Keys("[Tab]");
  
  let txtFloor =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner;
  txtFloor.SetText("5th Floor");
  txtFloor.Keys("[Tab]");
  
  let txtBuilding =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner;
  txtBuilding.SetText("Willis");
  txtBuilding.Keys("[Tab]");
  
  let txtStreetName =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner;
  txtStreetName.SetText("Trout Way");
  txtStreetName.Keys("[Tab]");
  
  let txtDistrict = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner;
  txtDistrict.SetText("Arizona");
  txtDistrict.Keys("[Tab]");
  
  let txtTown = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner;
  txtTown.SetText("Taos");
  txtTown.Keys("[Tab]");
  
  let ddState = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.WinFormsObject("aptifyDataComboBoxStates").WinFormsObject("ucCombo");
  ddState.Click();
  ddState.ClickItem("VI        ");
  ddState.Keys("[Tab]");
  
  let txtPostcode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner;
  txtPostcode.Click();
  txtPostcode.Keys(10001);
  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.WinFormsObject("buttonVerifyTaxArea").ClickButton();
  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDisplay.chkInternal.wState = cbChecked;

  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton(); 
});

Then("I Check the Order Allowed checkbox", function (){
if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists){  
 Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.Companies_Trading_OrderPreferences_Tab.Companies_Trading_OrderPreferences_Tab.Companies_Trading_OrderPreferences_Tab_OrdersAllowed.chkInternal.ClickButton();
}
else{
Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_TabGroup.tabMain.Persons_Trading_OrderPreferences_Tab.Persons_Trading_OrderPreferences_Tab.Persons_Trading_OrderPreferences_Tab_OrdersAllowed.chkInternal.wState = cbChecked;  
}});

When("I enter Product name {arg}", function (productName){
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



When("I enter partial name of the Products {arg}", function (product){
  let i = 0;
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  txtProduct.Click();
  txtProduct.SetText(product);
  txtProduct.Keys("[Tab]");
  if( Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.Exists )
  { 
  let grid = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = grid.wRowCount;
  for(i;i<4;i++){
   if(grid.wValue(i, 3).OleValue != ""){
     selectedProducts.push(grid.wValue(i, 2).OleValue);
     grid.ClickCell(i, 0);
   }
  }  
 }
});

When("I click on Add Selected", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel_new.splitContainerDetails.SplitterPanel.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.WinFormsObject("radCommandBar1").Click(142, 17);
  if(Aliases.Aptify_Shell.dlg.Exists){
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
    }
});

var orderBasket = [];
var selectedProducts = [];

Then("all products selected should be displayed in the Order Basket", function (){
  let gridOrderBasket = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridOrderBasket.wRowCount;
  let i = 0;
  let j ;
  let passCount = 0;
  for(i; i<records; i++)
  {
    for(j = selectedProducts.length; j>0; j-- )
    {
      let productDisplayed = gridOrderBasket.wValue(i, 8).OleValue;
      if(productDisplayed == selectedProducts[j-1])
      {
         passCount +=1
      }
    }
  }
  
  if(passCount == records){
    Log.Checkpoint("Selected products are displayed in Order Basket");
     }
  else{
    Log.Error("Selected products are not displayed in Order Basket");
    } 
});


When("I click Order Attributes tab", function (){
Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.ClickTab("Order Attributes");
});

When("I enter Default PO Ref and click Apply", function (){
  let randomCode =  aqConvert.FloatToStr(Math.floor((Math.random() * 100) + 1));
  let anysize = 2;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomName="";
  for( let i=0; i < anysize; i++ ){
  randomName += charset[Math.floor(Math.random() * charset.length)];
  }
  
  let poRef = (aqString.concat(randomName,randomCode));  
  let txtPoRef = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_CustomerReference.txtInner;
  
  txtPoRef.Click();
  txtPoRef.SetText(poRef);

  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Order_Tab.PTOrders_Summary_Order_Tab.tabMain.PTOrders_Summary_Order_Tab_General.PTOrders_Summary_Order_Tab_Order.PTOrders_Summary_Order_Tab_Order_Active_Button_ApplyPORef.Click();
});

When("I click on Campaigns from dashboard", function (){
  let ultraTreeCampaign = Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain;
  ultraTreeCampaign.outlineitemPromotions.MouseWheel(-1);
  ultraTreeCampaign.outlineitemConsortiaContracts.MouseWheel(-4);
  ultraTreeCampaign.outlineitemCampaigns.DblClick();
});

Then("I open first product", function (){
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
      radGridViewSearchProduct.DblClickCell(0, "Title");
  }
});

Then("I open second product", function (){
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
      radGridViewSearchProduct.DblClickCell(0, "Title");
  }
});

When("I enter the generated P\\/O Reference", function enterPORef(){
  
 let txtCodeRef = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSearch_CustomerLineRef.txtInner;
 
 txtCodeRef.Click();
 txtCodeRef.SetText(Project.Variables.PORef);
 Log.Message(Project.Variables.PORef);
 refCode = PORef;
 txtCodeRef.Keys("[Tab]");
});

When("I retrieve the picking location for {arg}", function (productPar){
  clickFindProduct();
  openProduct(productPar);
  checkInventoryLocation();
  clickSaveAndClose();
  closeForm();
});

function checkInventoryLocation(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory")
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  Project.Variables.inventoryLocation = radGridView.wValue(0, 7);
}




