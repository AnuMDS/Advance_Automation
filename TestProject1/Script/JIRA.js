var documentReference
var productTitle;
var txtRANNumber;
var creditDocumentReference, discount,defaultPrice;
var product, PoRef, quantity, customer, docCreditNote, docInvoice;
var dispatchTax, orderDispatchCharge, tax, price, productIdentifier, paymentValue, docAdviceNote, docProforma;
var accountStatus, creditLimit, customerIdentifier, company, totalQty, netValue, idCOI;
var sFolder = "\\booboo\\Handover_Bhanu\\IngentaCommercialApplication_New\\TestProject1\\Invoices\\";



Then("I Open Order Query and enter the document reference number", function (){
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
  let formTemplateLayout = aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria;
  let ultraTextEditor = formTemplateLayout.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  ultraTextEditor.SetText(documentReference);
  ultraTextEditor.Keys("[Tab]");
  let txtProduct = formTemplateLayout.OrderSearch_Form_ProductID.txtLink;
  txtProduct.Keys(productTitle);
  txtProduct.Keys("[Tab]")
  formTemplateLayout.OrderSearch_Form_SearchCriteria_Search.Click();
});

Then("I Select the transaction and click on Returns from Order actions", function (){
  clickReturnsFromOrderActions();
});


Then("I click on Apply and Confirm Returns", function (){
  clickApplyAndConfirmReturns();
});

Then("Returns Authorisation number \\(RAN) should be generated", function (){
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain;
  ultraTabControl.pagetabReturns.Click();
  let radGridView = ultraTabControl.PTOrderQueryTransactions_OrderSearch_Preview_ReturnRequests.PTOrderQueryTransactions_OrderSearch_Preview_ReturnRequests.PTOrderQueryTransactions_OrderSearch_Preview_ReturnRequests_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmReference = radGridView.wValue(0, "Reference").OleValue;
  if(clmReference != "")
    {
    Log.Checkpoint("RAN number is generated");
    }
    else{
    Log.Error("RAN number is not generated");
    }
});

Then("I retrieve RAN number", function (){
  clickReturns();
  retrieveRANNumber();
  //closeOpenWizard();
});

Then("I open Returns wizard from Inventory and enter RAN number", function (){
  clickOpenReturnsAndEnterRanNumber();
});

Then("I select product and qty", function (){
  enterProductAndQty(productTitle);
});

Then("I click on Add and Finish and Release", function (){
  clickAddAndFinish();
});

function clickAddAndFinish()
{
  let formTemplateLayout = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep;
  formTemplateLayout.PTInventoryGoodsInWizard_ReturnsStep_Active_Button_Add.Click(120, 17);
  formTemplateLayout.PTInventoryGoodsInWizard_ReturnsStep_CompleteButton.Click(86, 24);
}

Then("I click on Returns Auto Credit", function (){
  clickReturnsAutoCredit();
});

function clickReturnsAutoCredit()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  if(aptify_Shell.FormTemplateForm.titlebar.Exists)
  {
    aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  }
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton23.ClickButton();
}

Then("Credit note should be generated", function (){
  let clmDocumentSource = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let DocumentSource = clmDocumentSource.wValue(0, "Document Source").OleValue;
  
  if(aqObject.CompareProperty("Order Credit", cmpEqual,DocumentSource, true,3))
  {
   Log.Checkpoint("Credit note is generated");
  }
  else{
    Log.Error("Credit note is not generated");
  }
});

Then("I repeat the procedure three times", function (){
  adjustWindow();
  for(let i =0;i<3;i++)
  {
  clickReturnsFromOrderActions();
  clickApplyAndConfirmReturns();
  clickReturns();
  retrieveRANNumber();
  clickOpenReturnsAndEnterRanNumber();
  enterProductAndQty(productTitle);
  clickAddAndFinish();
  clickReturnsAutoCredit();
  clickOrdersFromFolderList();
  clickBillingWave();
  refreshDocuments();
  openCreditDocument();
  }
});

function openCreditDocument()
{
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let docRef = gridDocuments.wValue(0, 2).OleValue;
   docCreditNote = docRef;

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
}

function adjustWindow()
{
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.Drag(381, 96, 4, 85);
}

function clickOrdersFromFolderList()
{
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Orders");
}

function clickBillingWave()
{
  let aptifyDashLayout = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout;
  aptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_BillingWaveRelease.buttonImage.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
}

function refreshDocuments()
{
  Delay(60000);
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(25, 17);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(66, 188);
}

Then("I open order query to check credit amount", function (){
  closeOpenWizard();
  openOrderQueryToEnterRef(documentReference,productTitle);
  selectTransaction();
  selectTransactionsTab();
});

function selectTransaction()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  let splitterPanel = aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new;
  splitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,"Bill To Identifier")
}

function openOrderQueryToEnterRef(documentReference,productTitle)
{
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
  let formTemplateLayout = aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria;
  let ultraTextEditor = formTemplateLayout.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  ultraTextEditor.SetText(documentReference);
  ultraTextEditor.Keys("[Tab]");
  let txtProduct = formTemplateLayout.OrderSearch_Form_ProductID.txtLink;
  txtProduct.Keys(productTitle);
  txtProduct.Keys("[Tab]")
  formTemplateLayout.OrderSearch_Form_SearchCriteria_Search.Click();
}

Then("Every credit note should have same amount credited", function (){
  let radGridViewTransactionsTab = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCount = radGridViewTransactionsTab.wRowCount;
  let clmSupplyValue = radGridViewTransactionsTab.wValue(1,"Supply Value").OleValue;
  
  let clmSupplyValue1 = radGridViewTransactionsTab.wValue(2,"Supply Value").OleValue;
  let clmSupplyValue2 = radGridViewTransactionsTab.wValue(3,"Supply Value").OleValue;
  let clmSupplyValue3 = radGridViewTransactionsTab.wValue(4,"Supply Value").OleValue;
  
  if(clmSupplyValue == clmSupplyValue1 && clmSupplyValue == clmSupplyValue2 && clmSupplyValue == clmSupplyValue3)
  {
    Log.Checkpoint("Every credit note have same amount credited");
  }
  else{
    Log.Error("Every credit note have different amount credited");
  }
});

function clickRefreshFromTransactionsTab()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.diagramCommandbarmoreactions.Click(29, 13);
  aptify_Shell.RadDropDownMenu_new.menuitemRefresh.Click();
}



Then("I retrieve the document reference from orders dashboard", function (){
  let docRef = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 2).OleValue;
  documentReference = docRef;
});


Then("Credit amount should be display", function (){
  selectTransactionsTab();
  let radGridViewTransactionsTab = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions.PTOrderQueryTransactions_OrderSearch_Preview_Transactions_ListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCount = radGridViewTransactionsTab.wRowCount;
  let clmSupplyValue = radGridViewTransactionsTab.wValue(rowCount-1,"Supply Value").OleValue;
  
  if(clmSupplyValue != "")
  {
    Log.Checkpoint("Credit amount is generated");
  }
  else{
    Log.Error("Credit amount is not generated");
  }
});

function selectTransactionsTab()
{
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain;
  ultraTabControl.pagetabTransactions.Click();
}

function closeSearchCriteria()
{
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.Search_Criteria.Click(4, 8);
}
function clickReturnsFromOrderActions()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  let splitterPanel = aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new;
  splitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,"Bill To Identifier")
  splitterPanel.radCommandBar1.diagramOrderactionsdefaultgroup1.Click();
  aptify_Shell.RadDropDownMenu_new.menuitemReturns.Click();
}
function clickApplyAndConfirmReturns()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  let returnsAuthorizationWizard = aptify_Shell.GenericWizardForm;
  let returnsAuthorizationWizardStep1Layout = returnsAuthorizationWizard.WizPanels_456.PTReturnsAuthorisationStaging_Step1;
  returnsAuthorizationWizardStep1Layout.PTOrderItemReturnsWizard_Step1_Active_Button_Apply.Click();
  returnsAuthorizationWizardStep1Layout.PTOrderItemReturnsWizard_Step1_Active_Button_Authorize.Click();
  let tableLayoutPanel = aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1;
  tableLayoutPanel.btnOne.ClickButton();
  returnsAuthorizationWizard.titlebar.buttonClose.ClickButton();
  tableLayoutPanel.btnTwo.ClickButton();
}
function clickReturns()
{
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain;
  ultraTabControl.pagetabReturns.Click();
}
function retrieveRANNumber()
{
  let tabReturns = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain;
  let radGridView = tabReturns.PTOrderQueryTransactions_OrderSearch_Preview_ReturnRequests.PTOrderQueryTransactions_OrderSearch_Preview_ReturnRequests.PTOrderQueryTransactions_OrderSearch_Preview_ReturnRequests_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCount = radGridView.wRowCount;
  let clmReference = radGridView.wValue(rowCount-1, "Reference").OleValue;
  txtRANNumber = clmReference;
}
function closeOpenWizard()
{
  Aliases.Aptify_Shell.FormTemplateForm.Close();
}
function clickOpenReturnsAndEnterRanNumber()
{
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Inventory");
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton6.ClickButton();
  let txtRanNumber = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_ReturnsReference.txtInner;
  txtRanNumber.SetText(txtRANNumber);
  txtRanNumber.Keys("[Tab]");
}
function enterProductAndQty(productTitle)
{
  let aptify_Shell = Aliases.Aptify_Shell;
  let formTemplateLayout = aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep;
  let lnkProduct = formTemplateLayout.PTInventoryGoodsInWizard_ReturnsStep_ProductID.txtLink;

  lnkProduct.SetText(productTitle);
  lnkProduct.Keys("[Enter]");
  let radGridView = aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2_new.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridView.Exists)
  {
    radGridView.ClickCell(0,"Title");
  }
  let txtQty = formTemplateLayout.PTInventoryGoodsInWizard_ReturnsStep_GoodLoose.txtInner;
  txtQty.SetText("1");
  txtQty.Keys("[Tab]");
}

When("I retrieve product name", function (){
  let clmTitle = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Title").OleValue;
  productTitle = clmTitle;
});

//CreateCreditNote



When("I place an Order for the product {arg}", function (productPar){
  clickRedArrow();
  enterProduct(productPar);
  enterPORef();
  enterQuantity();
  clickAdd();
  clickLeftArrow();
  retrieveNetValue();
  makePayment()
});

function makePayment()
{
 let paymentType =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeID.LookupSearchCombo.get_Text();
  
 if(paymentType == "On Account"){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();  
 }
 else{
  let randomChequeNumber =  aqConvert.FloatToStr(Math.floor((Math.random() * 1000000)));
  let txtChequeNumber = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_ChequeNumber.txtInner;
  txtChequeNumber.Click();
  txtChequeNumber.SetText(randomChequeNumber);
  chequeNumber = randomChequeNumber;
  
Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_Active_Button_Apply.Click();    
Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();   
 }
}
function enterProduct(productPar){
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
}
function enterPORef(){
  let anysize = 2;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomCode ="";
  for( let i=0; i < anysize; i++ ){
  randomCode += charset[Math.floor(Math.random() * charset.length)];
  }
  let randomNum =  aqConvert.FloatToStr(Math.floor((Math.random() * 1000) + 1));
  let code = aqString.Concat(randomNum,randomCode);
   
 let txtCodeRef = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSearch_CustomerLineRef.txtInner;
 
 txtCodeRef.Click();
 txtCodeRef.SetText(code);
 PoRef = code;
 txtCodeRef.Keys("[Tab]");
}
function enterQuantity()
{
  let inventoryAvailable = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.get_Text();

  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  
  txtQuantity.Click();
  txtQuantity.SetText(inventoryAvailable);
  quantity = inventoryAvailable;
  txtQuantity.Keys("[Tab]");
}

function clickAdd(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_AddOrderItem.Click();
  if(Aliases.Aptify_Shell.dlg.Exists){
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
  }  
}
function clickLeftArrow(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();
}

function retrieveNetValue(){
  let TotalValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_NetValue.txtInner.get_Text();

  TotalvalueOnCheckout =  TotalValue;
}

Then("I select Credit Order Type as {arg}", function (creditType){
  let txtCreditType = Aliases.Aptify_Shell.WinFormsObject("OrderQueryCreditOrderTypeLayout", "Credit Order Type").WinFormsObject("PT.PTOrderQueryCreditOrderTypes.CreditEnter").WinFormsObject("PT.PTOrderQueryCreditOrderTypes.CreditEnter.OrderTypeID").WinFormsObject("LookupSearchCombo");
  txtCreditType.ClickItem(creditType);
  txtCreditType.Keys("[Tab]");
  
  Aliases.Aptify_Shell.WinFormsObject("OrderQueryCreditOrderTypeLayout", "Credit Order Type").WinFormsObject("PT.PTOrderQueryCreditOrderTypes.CreditEnter").WinFormsObject("PT.PTOrderQueryCreditOrderTypes.CreditEnter.ActiveButton.OK").Click();
});


Then("I click refresh on my pending basket", function (){
  let radGridView = Aliases.Aptify_Shell.MessageGrid.listViewPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  var i = 0;
  var j = 0;
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Sys.WaitProcess("Aliases.Aptify_Shell.MessageGrid", 8000);
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    let records = radGridView.wRowCount;

  for(i;i<records;i++){
    if(radGridView.wValue(i,3).OleValue == PoRef){
      radGridView.ClickRowIndicator(i);
    }
    else{
      Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    }
   } 
   
  for(j;j<records;j++){
    if(radGridView.wValue(j,3).OleValue == PoRef){
      radGridView.ClickRowIndicator(j);
    }
  }   
});

Then("I click Open Basket", function (){
  Aliases.Aptify_Shell.MessageGrid.Button1.ClickButton();
});

When("I open the document generated", function (){
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

When("I enter Document Reference and Search", function (){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.WinFormsObject("OrderSearch.Form.SearchCriteria.Reference").WinFormsObject("txtInner");
  txtReference.Keys(docInvoice);
  txtReference.Keys("[Tab]");
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
});

When("I click on the transaction", function (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickRowIndicator(0);
});

Then("This Transaction and Order Line Summary Value should be equal to Net Value", function (){
  let thisTransactionValue = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_TotalItemValue.txtInner.get_Text();
  let orderLineSummaryValue = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_TotalValue.txtInner.get_Text();
  
  if( (aqObject.CompareProperty(thisTransactionValue, cmpEqual, TotalvalueOnCheckout, true, 3)) && (aqObject.CompareProperty(orderLineSummaryValue, cmpEqual, TotalvalueOnCheckout, true, 3)) ){
    Log.Checkpoint("This Transaction and Order Line Summary Value is equal to Total Order Basket Value");
   }
  else{
    Log.Error("This Transaction and Order Line Summary Value is not equal to Total Order Basket Value");
   }
});
Then("I click on Credit from Order Actions", function (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(314, 17);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(82, 33);
});


function clickRedArrow(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.showSummaryButton.buttonImage.ClickButton();
}

Then("Credit Order Type window should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.WinFormsObject("OrderQueryCreditOrderTypeLayout", "Credit Order Type"), "Caption", cmpEqual, "Credit Order Type");
});

Then("Type should be Credit Note and Order Type as Normal Credit", function (){
 Sys.WaitProcess("Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket", 30000);
let valueType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderProcessTypeID.LookupSearchCombo.get_Text();

let valueOrderType =   Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderTypeID.LookupSearchCombo.get_Text();

  if( (aqObject.CompareProperty(valueType, cmpEqual, "Credit Note", true, 3)) && (aqObject.CompareProperty(valueOrderType, cmpEqual, "Normal Credit", true, 3)) ){
    Log.Checkpoint("Type as Credit Note and Order Type as Normal Credit is displayed");
   }
  else{
    Log.Error("Type as Credit Note and Order Type as Normal Credit is not displayed");
   }

});


Then("Customer, Product, Quantity, P\\/O ref should be correct", function (){
  let customerDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel_new.splitContainerDetails.SplitterPanel2.PTOrders_ProductSelection.PTOrders_ProductSelection_ShippingTo.WinFormsObject("txtInner").get_Text();  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let productDisplayed = radGridView.wValue(0, "Title").OleValue;
  let qtyDisplayed = radGridView.wValue(0, "Order Qty").OleValue; 
  let poRefDisplayed = radGridView.wValue(0, "P/O Ref").OleValue;
  if( (aqObject.CompareProperty(product, cmpEqual, productDisplayed, true, 3)) && (aqObject.CompareProperty(-(quantity), cmpEqual, qtyDisplayed, true, 3)) && (aqObject.CompareProperty(PoRef, cmpEqual, poRefDisplayed, true, 3)) && (aqObject.CompareProperty(customer, cmpEqual, customerDisplayed, true, 3)) ){
    Log.Checkpoint("Customer, Product, Quantity, P/O Ref displayed is Correct");
  }
  else{
    Log.Error("Customer, Product, Quantity, P/O Ref displayed is Incorrect");
  }
});

Then("Amount should be negative", function (){
  let supplyValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Supply Value").OleValue;
  if( (aqObject.CompareProperty((Math.sign(supplyValue)), cmpEqual, -1, true, 3)) ){
    Log.Checkpoint("Amount displayed is negative");
   }
  else{
    Log.Error("Amount displayed is not negative");
   }
});

Then("Order should not be displayed in My Pending Basket", function (){
  let radGridView = Aliases.Aptify_Shell.MessageGrid.listViewPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

 
  var i = 0;
  var passCount = 0;
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Sys.WaitProcess("Aliases.Aptify_Shell.MessageGrid", 8000);
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
   let records = radGridView.wRowCount;
  for(i;i<records;i++){
    if(( radGridView.wValue(i,3).OleValue == PoRef) || (records == 0) ){
      passCount +=1;
    } 
   }

   if( passCount == 1 ){
      Log.Error("Order is displayed in My Pending Basket");
    }
    else{
      Log.Checkpoint("Order is not displayed in My Pending Basket");
    }
       
});

When("I enter a customer {arg} in Ship To field", function (companyPar){
 let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1; 
 let txtCompany = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_ShipToRoleID.txtLink;
 
 txtCompany.Click();
 txtCompany.SetText(companyPar);
 customer = companyPar;
 txtCompany.Keys("[Tab]");
 if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

Then("I enter Document Reference and Search", function (){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.WinFormsObject("OrderSearch.Form.SearchCriteria.Reference").WinFormsObject("txtInner");
  txtReference.Keys(docInvoice);
  txtReference.Keys("[Tab]");
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
});

Then("I click on the transaction", function (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickRowIndicator(0);
});

Then("Order Type as Normal Credit and Order status as Completed Order should be displayed", function (){

  let orderType = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderType.txtInner.get_Text();
  let orderStatus = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderStatus.txtInner.get_Text();
  if( (aqObject.CompareProperty(orderType, cmpEqual, "Normal Credit", true, 3)) && (aqObject.CompareProperty(orderStatus, cmpEqual, "Completed Order", true, 3)) ){
    Log.Checkpoint("Order Type as Normal Credit and Order status as Completed Order is displayed");
   }
  else{
    Log.Error("Order Type as Normal Credit and Order status as Completed Order is not displayed");
   }
  
});

Then("Qty and Supply under This transaction should be negative", function (){
 let qty =  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.WinFormsObject("PTOrderQueryTransactions.OrderSearch.Preview.General.OrderedQty").WinFormsObject("txtInner").get_Text();
 let supply =  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.WinFormsObject("PTOrderQueryTransactions.OrderSearch.Preview.General.SuppliedQuantity").WinFormsObject("txtInner").get_Text();

   if( (aqObject.CompareProperty((Math.sign(qty)), cmpEqual, -1, true, 3)) && (aqObject.CompareProperty((Math.sign(supply)), cmpEqual, -1, true, 3)) ){
    Log.Checkpoint("Qty and Supply values under This transaction is negative");
   }
  else{
    Log.Error("Qty and Supply values under This transaction should be negative");
   }

   if( (aqObject.CompareProperty(qty, cmpEqual, -(quantity), true, 3)) && (aqObject.CompareProperty(supply, cmpEqual, -(quantity), true, 3)) ){
    Log.Checkpoint("Qty and Supply values displayed are Correct");
   }
  else{
    Log.Error("Qty and Supply values displayed are Incorrect");
   }    
});

Then("Doc Ref should be of format {arg}C Credit Note", function (param1){
  let docRef = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_DocumentReference.txtInner.get_Text();
  let orderProcessType = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderProcessType.txtInner.get_Text();

  if( (aqObject.CompareProperty(docRef, cmpEndsWith , "C", true, 3)) && (aqObject.CompareProperty(orderProcessType, cmpEqual, "Credit Note", true, 3)) ){
    Log.Checkpoint("Document Reference format is Correct");
   }
  else{
    Log.Error("Document Reference format is Incorrect");
   }
});

Then("Inventory should be reverted back to the product inventory", function (){
  clickFindProductBtn();
  searchProduct();
  clickSearchBtn();
  handleProductsGrid();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  let availableQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
  
  if( aqObject.CompareProperty(quantity, cmpEqual , availableQtyDisplayed, true, 3) ){
    Log.Checkpoint("Inventory is reverted back to product inventory");
   }
  else{
    Log.Error("Inventory is not reverted back to product inventory");
   }
     
   clickSaveAndClose();
   closeSearchForm();
});
function closeSearchForm(){
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }  
}
function clickSaveAndClose (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
}
function searchProduct(){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(product);
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

function clickFindProductBtn(){
   Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.Click();
}
function clickToggleZeroOutstanding(){
 Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(167, 14);  
}

Then("Credit and Invoice document types should be displayed in Ledger", function (){
  openCustomerInformation();
  clickTradingTab();
  clickAccountProfilesTab();
  openStreamlineSterlingLedger();
  clickLedgerTab();
  clickToggleZeroOutstanding();
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var i = 0;
  var j = 0;
  var passCount = 0;
  var pass = 0;
  for(i;i<radGridView.wRowCount;i++){
    if(radGridView.wValue(i,2).OleValue == docInvoice){
     passCount +=1;
     }
    }
   if(passCount == 1) {
     Log.Checkpoint("Invoice is displayed in the Ledger");
   }
    else{
      Log.Error("Invoice is not displayed in the Ledger");
    }

  for(j;j<radGridView.wRowCount;j++){
    if(radGridView.wValue(j,2).OleValue == docCreditNote){
     pass +=1;
     }
    }
    
   if(pass == 1) {
     Log.Checkpoint("Credit Note is displayed in the Ledger");
   }
    else{
      Log.Error("Credit Note is not displayed in the Ledger");
    }    
});

function openCustomerInformation(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.Click();
 
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(customer);
  
  clickSearchBtn();
  handleProductsGrid();  
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
function clickLedgerTab(){
 Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.ClickTab("Ledger");  
}

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

When("I open Invoice generated", function (){
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

Then("I open the Credit Note generated", function (){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let docRef = gridDocuments.wValue(0, 2).OleValue;
   docCreditNote = docRef;

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

Then("I enter Document Reference to Search", function (){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.WinFormsObject("OrderSearch.Form.SearchCriteria.Reference").WinFormsObject("txtInner");
  txtReference.Keys(docCreditNote);
  txtReference.Keys("[Tab]");
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
});


//COI_PrepaidNormalOrder

var dispatchTax, orderDispatchCharge, tax, price, productIdentifier, paymentValue, docInvoice;
var sFolder = "\\booboo\\Handover_Bhanu\\IngentaCommercialApplication_New\\TestProject1\\Invoices\\";

When("I verify the customer {arg} to be used", function (customer){
  openCustomerInfo(customer);
  clickTradingTab();
  clickAccountProfilesTab();
  verifyStreamlineSterlingLedger();
  getIdentifier();
});


function getIdentifier()
{
 if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists ){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.pagetabContact.Click();
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PT_Companies_Contact_TopLeft_TabControl.tabMain.pagetabIdentifiers.Click();
  let gridIdentifiers = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PT_Companies_Contact_TopLeft_TabControl.tabMain.Companies_Contact_Identifiers.Companies_Contact_Identifiers.Companies_Contact_Identifiers_CompanyIdentifiers.AptifyControlBase_Fill_Panel.flexSubType;
  let rows = gridIdentifiers.BottomRow;
  var i = 1;
  for(i;i<=rows;i++){
    var prime = gridIdentifiers.get_Item(i, 2).OleValue;
   if(prime = "True" ){
      var identifier = gridIdentifiers.get_Item(i, 3).OleValue;
      customerIdentifier = identifier;
      break;
   }
  }    
 }
 else{
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.pagetabContact.Click();
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Contact_Tab.PTPersons_Contact_Tab.PT_Persons_Contact_TopLeft_TabControl.tabMain.pagetabIdentifiers.Click();
  let gridIdentifiers = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Contact_Tab.PTPersons_Contact_Tab.PT_Persons_Contact_TopLeft_TabControl.tabMain.Persons_Contact_Identifiers.Persons_Contact_Identifiers.Persons_Contact_Identifiers_PersonIdentifiers.AptifyControlBase_Fill_Panel.flexSubType;
  let rows = gridIdentifiers.BottomRow;
  var i = 1;
  for(i;i<=rows;i++){
    var prime = gridIdentifiers.get_Item(i, 2).OleValue;
   if(prime = "True" ){
      var identifier = gridIdentifiers.get_Item(i, 3).OleValue;
      customerIdentifier = identifier;
      break;
   }
  }   
 }
}

function verifyStreamlineSterlingLedger(){
 if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists ){
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  var i =0;
  for (i; i<records; i++)
  {
  let profileName = gridProfiles.wValue(i, 0).OleValue;  
  if("Streamline Sterling" == profileName)
  {
    let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
    var status = radGridView.wValue(i,3).OleValue;
    accountStatus = status;
    var limit = radGridView.wValue(i,5).OleValue;
    creditLimit = limit;
     if(accountStatus != "Account Open" ){
      Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickRowIndicator(i);
       
      let ddCreditStatus = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_Tabs_TopArea_CreditStatusID.LookupSearchCombo;
      ddCreditStatus.Click();
      ddCreditStatus.ClickItem("Account Open");
      ddCreditStatus.Keys("[Tab]");
      }
     if(creditLimit <= 0){
      Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickRowIndicator(i);
       
      let txtCreditLimit = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_CreditLimit.txtInner;
      txtCreditLimit.Click();
      txtCreditLimit.SetText(10000);
      txtCreditLimit.Keys("[Tab]");
  }
  }
}
}
  else{
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  var i =0;
  for (i; i<records; i++)
  {
  let profileName = gridProfiles.wValue(i, 0).OleValue;  
 
  if("Streamline Sterling" == profileName)
  {

    let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
    var status = radGridView.wValue(i,3).OleValue;
    accountStatus = status;
    var limit = radGridView.wValue(i,5).OleValue;
    creditLimit = limit;     
    if(accountStatus != "Account Open" ){
      Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickRowIndicator(i);
       
      let ddCreditStatus = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_Tabs_TopArea_CreditStatusID.LookupSearchCombo;
      ddCreditStatus.Click();
      ddCreditStatus.ClickItem("Account Open");
      ddCreditStatus.Keys("[Tab]");
    }
    Log.Message(creditLimit)
    if(creditLimit <= 0){
      Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickRowIndicator(i);
      
      let txtCreditLimit = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_CreditLimit.txtInner;
      txtCreditLimit.Click();
      txtCreditLimit.SetText(10000);
      txtCreditLimit.Keys("[Tab]");
    }
  }
  }  
 

      
     }
} 
function openCustomerInfo(customer){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.Click();
 
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(customer);
  company = customer;
  
  clickSearchBtn();
  handleProductsGrid();  
}

When("I verify the product {arg} to order", function (productPar){
 clickFindProduct();
 openProduct(productPar);
 checkIdentifier();
 verifyUnitWeight();
 checkPrice();
 getProductPrice();
 verifyInventory(productPar);
 clickSaveAndClose();
});

function clickFindProduct()
{
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  
}
function openProduct(productPar){
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
  let records = grid.wRowCount;
  for(i;i<records;i++){
   if(productPar == grid.wValue(i, 1).OleValue){
     grid.DblClickCell(i,1);
     break
   }
  }  
 }
}
function checkPrice(){
 Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Prices");
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i = 0;
  var passCount;
  let records = radGridView.wRowCount;
  if(records == 0){
    setDefaultPrice();
  }
  else{
   for(i;i<records;i++){
   if(radGridView.wValue(i, 13).OleValue == false){
    passCount +=1;  
   }
  }  
  if(passCount == records){
   setDefaultPrice(); 
  }
  
  }  
}
function getProductPrice(){
  var radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var i = 0;
  var records = radGridView.wRowCount; 
  for(i;i<records;i++){
   if((radGridView.wValue(i, 1).OleValue == "GBP  ") && (radGridView.wValue(i, 13).OleValue == true)){
    var defaultValue = radGridView.wValue(i, 2).OleValue;
    defaultPrice = defaultValue;
   }
  }  
}
function checkIdentifier(){
  let identifier = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_PrimaryIdentifierLabel.txtInner.Text.OleValue;
  productIdentifier = identifier;
  if(identifier == "")
  {
    setIdentifier();
  }
}
function setIdentifier()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_General.Products_Tabs_General.Products_ProductDetails_PTproductIdentifiers.AptifyControlBase_Fill_Panel.flexSubType.ClickR();
  Aliases.Aptify_Shell.popupContext.menuitemNewCtrlN.Click();
  
  let ddIdentifierType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo;
  ddIdentifierType.ClickItem("ISBN 13");
  ddIdentifierType.Keys("[Tab]");
  
  let ddRange = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_OrganizationCodeAllocationsID.LookupSearchCombo;
  ddRange.ClickItem("ISBN 13 (Global)");
  ddRange.Keys("[Tab]");
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
}

function verifyInventory(productPar){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory")
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  if(records == 0){
    createInventorySite();
    goodsIn(productPar);
  }
  else if((radGridView.wValue(0, 3).OleValue <= 0) || (radGridView.wValue(0, 3).OleValue == EmptyVariant )){
   goodsIn(productPar);
  }
  else if(radGridView.wValue(0, 4).OleValue == "Not Yet Published"){
    setSupplyStatus();
  }

}

function goodsIn(productPar){
  openGoodsIn();
  fillSetingsPage();
  ClickNextForm();
  performGoodsIn(productPar);
  clickFinishForm();
}

function openGoodsIn(){
 Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory");
  
 Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton3.ClickButton();
}
function fillSetingsPage(){
  let ddSiteWarehouse = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_SiteWarehouseID.LookupSearchCombo;
  ddSiteWarehouse.Click();
  ddSiteWarehouse.ClickItem("Watford/Warehouse A");
  ddSiteWarehouse.Keys("[Tab]");
  
  let CurrentDate = aqDateTime.Today();
  let YesterdayDate = aqDateTime.AddDays(CurrentDate, -1);
  let txtReceivedDate = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_ReceivedDate.txtInner;
  txtReceivedDate.Click();
  txtReceivedDate.SetText(YesterdayDate);
  
  let txtReference = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_Reference.txtInner;
  txtReference.Click();
  txtReference.SetText("customRef");
}

function ClickNextForm(){
 Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
 }
 function performGoodsIn(product){
  let txtProduct =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID.txtLink;
  txtProduct.Click();
  txtProduct.SetText(product);
  txtProduct.Keys("[Tab]");
  
 if(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_MiscellaneousGoodsIn.chkInternal.wState == cbUnchecked){
     Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_MiscellaneousGoodsIn.chkInternal.ClickButton();
     Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
 }

  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_LooseQty.txtInner; 
  txtQtyLoose.Click();
  txtQtyLoose.SetText(100);
  txtQtyLoose.Keys("[Tab]");
  looseQty =  aqObject.GetPropertyValue(txtQtyLoose , "text");

  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Active_Button_Add.Click();

}
function clickFinishForm(){
   Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
}
function createInventorySite(){
  let gridInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

  let sites = gridInventory.wRowCount;
    if( sites == 0){
    clickNewRecord();
    enterSite_Version();
    setStatus();
    enterCurrentPacketSize();
    selectPickingLocation();
    clickSaveAndCloseForm();
    
    }
}
function setStatus(){
  let ddSiteStatus = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteStatusID.LookupSearchCombo;
    ddSiteStatus.Click();
    ddSiteStatus.ClickItem("Open");
}
function clickSaveAndCloseForm(){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
}

function clickNewRecord(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(18, 19);
}

function enterSite_Version()
{
  let ddSite = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteID.LookupSearchCombo;
  ddSite.Click();
  ddSite.ClickItem("Watford");
  ddSite.Keys("[Tab]");
  
  let ddVersion = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_VersionLinkDescription.LookupSearchCombo;
  ddVersion.Click();
  ddVersion.ClickItem("Main Market Edition");
  ddVersion.Keys("[Tab]");
}
function enterCurrentPacketSize()
{
 let txtCurrentPacketSize =  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_CurrentPacketSize.txtInner;
 
 txtCurrentPacketSize.Click();
 txtCurrentPacketSize.SetText(5);
}
function setSupplyStatus(){
  let gridInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let supplyStatus = gridInventory.wValue(0, 4).OleValue;
 
   if (supplyStatus != "Open")
  {
    gridInventory.DblClickCell(0, "Supply Status");
    let ddSiteStatus = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteStatusID.LookupSearchCombo;
    ddSiteStatus.Click();
    ddSiteStatus.ClickItem("Open");
    selectPickingLocation();
    clickSaveAndClose();
  }
}

function selectPickingLocation(){
  let txtPickingLocation = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_DefaultPickingLocationID.txtLink;
  if( txtPickingLocation.get_Text() == ""){
   txtPickingLocation.Click();
   txtPickingLocation.SetText("WAF3ZZZ");
   txtPickingLocation.Keys("[Tab]");
  }
}
When("I click on Customer and Order Interface Gateway and Create\\/Go to View", function (){
 // Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.outlineitemGatewayAdministration.DblClick();
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.outlineitemCustomerAndOrderInter.DblClick();
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.listitemAll.DblClick();
});

When("I click on New Record", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.radCommandBar1.diagramCommandbarnew.Click();
});

When("I enter Interface Action {arg}", function (interfaceAction){
  let txtInterfaceAction = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_InterfaceAction.txtInner;

  txtInterfaceAction.Click();
  txtInterfaceAction.SetText(interfaceAction);
  txtInterfaceAction.Keys("[Tab]");
});

When("I enter Transaction Source {arg}", function (transactionSource){
  let txtTransactionSource = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_TransactionSource.txtInner;
  
  txtTransactionSource.Click();
  txtTransactionSource.SetText(transactionSource);
  txtTransactionSource.Keys("[Tab]");  
});

When("I enter Transaction Reference", function (){
 let txtTransactionReference = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_TransactionReference.txtInner;
 let reference = aqConvert.FloatToStr(Math.floor((Math.random() * 100000) + 1));

  txtTransactionReference.Click();
  txtTransactionReference.SetText(reference);
  txtTransactionReference.Keys("[Tab]");
});

When("I enter Product Identifier", function (){
  let txtProductIdentifier = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_ProductIdentifier.txtInner;

  txtProductIdentifier.Click();
  txtProductIdentifier.SetText(productIdentifier);
  txtProductIdentifier.Keys("[Tab]");
});

When("I enter Quantity", function (){
  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Quantity.txtInner;
  let quantity = aqConvert.FloatToStr(Math.floor((Math.random() * 10) + 1));
  
  txtQuantity.Click();
  txtQuantity.SetText(quantity);
  txtQuantity.Keys("[Tab]");  
  let Qty = txtQuantity.get_Text();
  totalQty = Qty;
});

When("I enter Sale License {arg}", function (license){
  let txtSaleLicense = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_SaleLicense.txtInner;
  
  txtSaleLicense.Click();
  txtSaleLicense.SetText(license);
  txtSaleLicense.Keys("[Tab]");
});

When("I enter Customer Reference", function (){
  let txtCustomerReference = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_CustomerReference.txtInner;
  let customerReference = aqConvert.FloatToStr(Math.floor((Math.random() * 100000) + 1));
  
  txtCustomerReference.Click();
  txtCustomerReference.SetText(customerReference);
  txtCustomerReference.Keys("[Tab]");  
});

When("I enter Currency {arg}", function (currency){
  let txtCurrency = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Currency.txtInner;

  txtCurrency.Click();
  txtCurrency.SetText(currency);
  txtCurrency.Keys("[Tab]");
});

When("I enter Price", function (){
  let txtPrice = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Price.txtInner;
  //let pricePar = aqConvert.FloatToStr(Math.floor((Math.random() * 100) + 1));
  
  txtPrice.Click();
  txtPrice.SetText(defaultPrice);
  txtPrice.Keys("[Tab]");
  let priceDisplayed = txtPrice.get_Text();
  price = priceDisplayed;
  });

When("I enter Net Value", function (){
  let txtNetValue = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_NetValue.txtInner;
   
  let total = (aqConvert.StrToInt(price)*aqConvert.StrToInt(totalQty));
  let percantageCalculated = (aqConvert.StrToInt(total)*aqConvert.StrToInt(discount))/100;
  let discountCalculated = (aqConvert.StrToInt(total)- aqConvert.StrToInt(percantageCalculated));
  netValue = aqConvert.StrToInt(discountCalculated) ;
  txtNetValue.Click();
  txtNetValue.SetText(netValue);
  txtNetValue.Keys("[Tab]");
});

When("I enter Tax Value", function (){
  let txtTaxValue = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_TaxValue.txtInner;
  //let taxPar = aqConvert.FloatToStr(Math.floor((Math.random() * 10) + 1));
  
  txtTaxValue.Click();
  txtTaxValue.SetText(0);
  txtTaxValue.Keys("[Tab]");
  let taxDisplayed = txtTaxValue.get_Text();
  tax = taxDisplayed;  
});

When("I enter Order Despatch Charge", function (){
  let txtOrderDispatchCharge = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_OrderDispatchCharge.txtInner;
  let orderDispatchChargePar = aqConvert.FloatToStr(Math.floor((Math.random() * 10) + 1));
  
  txtOrderDispatchCharge.Click();
  txtOrderDispatchCharge.SetText(orderDispatchChargePar);
  txtOrderDispatchCharge.Keys("[Tab]");
  let orderDispatchChargeDisplayed = txtOrderDispatchCharge.get_Text();
  orderDispatchCharge = orderDispatchChargeDisplayed;
});

When("I enter Dispatch Tax Value", function (){
  let txtDispatchTaxValue = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_ShippingTaxValue.txtInner;
 // let dispatchTaxValue = aqConvert.FloatToStr(Math.floor((Math.random() * 10) + 1));
  
  txtDispatchTaxValue.Click();
  txtDispatchTaxValue.SetText(0);
  txtDispatchTaxValue.Keys("[Tab]");
  let dispatchTaxValueDisplayed = txtDispatchTaxValue.get_Text();
  dispatchTax = dispatchTaxValueDisplayed;
});

When("I check Is Pre paid", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General_IsPrePaid.chkInternal.wState = cbChecked;
});

When("I enter Payment Reference", function (){
  let txtPaymentReference = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General_PaymentReference.txtInner;
  let paymentReference = aqConvert.FloatToStr(Math.floor((Math.random() * 10000) + 1));

  txtPaymentReference.Click();
  txtPaymentReference.SetText(paymentReference);
  txtPaymentReference.Keys("[Tab]");  
});

When("I enter Payment Method {arg}", function (paymentMethod){
  let txtPaymentMethod = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General_PaymentMethod.txtInner;

  txtPaymentMethod.Click();
  txtPaymentMethod.SetText(paymentMethod);
  txtPaymentMethod.Keys("[Tab]");
});

When("I enter Payment Value", function (){
  let txtPaymentValue = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General_PaymentValue.txtInner;
  //let payment = aqConvert.FloatToStr(Math.floor((Math.random() * 10) + 1));
  
  txtPaymentValue.Click();
  txtPaymentValue.SetText(netValue+aqConvert.StrToInt(orderDispatchCharge));
  txtPaymentValue.Keys("[Tab]");
  let paymentValueDisplayed = txtPaymentValue.get_Text();
  paymentValue = paymentValueDisplayed;  
});

When("I enter Payment Currency {arg}", function (paymentCurrency){
  let txtPaymentCurrency = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General_PaymentCurrency.txtInner;

  txtPaymentCurrency.Click();
  txtPaymentCurrency.SetText(paymentCurrency);
  txtPaymentCurrency.Keys("[Tab]");  
});

When("I enter the Customer Identifier under Ship To tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.pagetabShipto.Click();
  let txtCustomerIdentifier =  Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_ShipTo.PTGatewayCustomerOrderInterface_Tabs_ShipTo.PTGatewayCustomerOrderInterface_CustomerIdentifier.txtInner;

   txtCustomerIdentifier.Click();
   txtCustomerIdentifier.SetText(customerIdentifier);
   txtCustomerIdentifier.Keys("[Tab]"); 
});

When("I enter Bill To Identifier under Bill To tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.pagetabBillto.Click();
  let txtCustomerIdentifier = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_BillTo.PTGatewayCustomerOrderInterface_Tabs_BillTo.PTGatewayCustomerOrderInterface_BillToIdentifier.txtInner;

   txtCustomerIdentifier.Click();
   txtCustomerIdentifier.SetText(customerIdentifier);
   txtCustomerIdentifier.Keys("[Tab]");    
});


function retrieveID()
{
  let id = aqString.SubString(Aliases.Aptify_Shell.FormTemplateForm.titlebar.Value , 41, 10);
  idCOI = id; 
}

When("I click on Run Customer Order Interface and Enter Gateway ID {arg}", function (param1){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Gateway Administration");
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton24.Click();


  Aliases.Aptify_Shell.VBInputBox.TextBox.Click();
  Aliases.Aptify_Shell.VBInputBox.TextBox.SetText("36");
  Aliases.Aptify_Shell.VBInputBox.OKButton.ClickButton();
  Sys.WaitProcess("Aliases.Aptify_Shell.dlg.btnOK", 10000);
  if(Aliases.Aptify_Shell.dlg.btnOK.Exists){
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
  }
  
});
function switchToGatewayCOI(){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Gateway Administration");
  let dashboardCaption = Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").Caption;
  
  if(dashboardCaption != "Gateway Customer Order Interface"){
    Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblOptions.Click();
    Sys.Process("Aptify Shell").Popup("Context").MenuItem("Switch Dashboard").Click();  
    Aliases.Aptify_Shell.Popup("Switch Dashboard").MenuItem("Gateway Customer Order Interface").Click();  
    
    Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager", 6000);
  } 
}
function switchToGatewayAdministrationDashboard(){
  Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").Refresh();
  
  let getDashboardCaption = Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").Caption;
Log.Message(getDashboardCaption);
  if(getDashboardCaption != "Gateway Administration"){
    Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblOptions.Click();
    Sys.Process("Aptify Shell").Popup("Context").MenuItem("Switch Dashboard").Click();  
    Aliases.Aptify_Shell.Popup("Switch Dashboard").MenuItem("Gateway Administration").Click();  
    
    Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager", 8000);
  } 
}
Then("I verify the Process tab of the COI record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.pagetabProcess.Click();  
 let isProcessed = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_Process.PTGatewayCustomerOrderInterface_Tabs_Process.PTGatewayCustomerOrderInterface_IsProcessed.chkInternal.wState;
 let isError = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_Process.PTGatewayCustomerOrderInterface_Tabs_Process.PTGatewayCustomerOrderInterface_IsError.chkInternal.wState;
 let txtError = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_Process.PTGatewayCustomerOrderInterface_Tabs_Process.PTGatewayCustomerOrderInterface_ErrorMessage.txtInner.get_Text();

 if((isError == cbUnchecked) && (isProcessed == cbChecked) && (txtError == "")){
   Log.Checkpoint("'Is Processed' is Checked and 'Is Error' is Unchecked");
 }
 else{
   Log.Error("'Is Processed' is not Checked or 'Is Error' is not Unchecked");

 }
});

Then("I open Invoice generated", function (){
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

Then("Invoice should be displayed in Ledger with correct details", function (){
  clickTradingTab();
  clickAccountProfilesTab();
  openStreamlineSterlingLedger();
  clickLedgerTab();
  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var i = 0;
 var outstandingValue = (aqConvert.StrToInt(netValue)-aqConvert.StrToInt(paymentValue));
  for(i;i<radGridView.wRowCount;i++){
    if(radGridView.wValue(i,2).OleValue == docInvoice){
      let valueDisplayed = radGridView.wValue(i,7).OleValue; 
      let balanceDisplayed = radGridView.wValue(i,8).OleValue;
      if(valueDisplayed == (aqConvert.StrToInt(netValue)+aqConvert.StrToInt(orderDispatchCharge)) && balanceDisplayed == (aqConvert.StrToInt(outstandingValue)+aqConvert.StrToInt(orderDispatchCharge))){
        Log.Checkpoint("Transaction details displayed are Correct");
      }
      else{
        Log.Error("Transaction details displayed are Incorrect");
      }
     }
    }
});


When("I click on Save and Close", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");  
  retrieveID(); 
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

When("I open the Record", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.listitemAll.Keys("^f");

  Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel.simpleSearchCtl.txtSearch.Keys(idCOI);
  Aliases.Aptify_Shell.SimpleFindDialog.SplitContainer1.SplitterPanel2.simpleSearchCtl.txtSearch.edit.button.ClickButton();
});


Then("I click on Save and Close", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

When("I click Customer and Order Interface Gateway and Create\\/Go to View", function (){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.outlineitemGatewayAdministration.DblClick();
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.outlineitemCustomerAndOrderInter.DblClick();
  if(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.listitemAll.Exists){
    Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.listitemAll.DblClick();  
  }
  else{    
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.zEntityBrowser_Toolbars_Dock_Area_Top.toolbar.buttonCreateView.ClickButton();
  Aliases.Aptify_Shell.ViewsDialog.ViewControl.TabView.TabGeneral.txtName.SetText("All");
  Aliases.Aptify_Shell.ViewsDialog.btnOK.ClickButton();
  }
});

//Amend
var reference1, reference2;


When("I create subscription product", function (){
  clickNewProductBtn();
  selectProductType()
  enterTitleOfProduct()
  enterTitlePrefix();
  enterImprintNameAndClickFinish()
  setIdentifierForSubscription()
  setDefaultPrice();
  checkCurrentlySold();
  //retrieveTitleOfProduct()
  createAutoBuildFromProduct();
  //openSubscriptionProduct(product);
  //clickFindProductBtn();
  //searchProductAndClickOnSearchBtn(product)
  //checkCurrentlySold();
  //clickSaveAndClose();
});

function retrieveTitleOfProduct()
{
  let txtTitle = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Subs_OTCProducts_Toparea.Subs_OTCProducts_Toparea_Title.txtInner.Text.OleValue;
  product = txtTitle;
}

function openSubscriptionProduct(product)
{
  clickFindProductBtn();
  searchProductAndClickOnSearchBtn(product)
  checkCurrentlySold();
  clickSaveAndClose();
}
function searchProductAndClickOnSearchBtn(product)
{
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radPanel = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams;
  let textBox = radPanel.quickSearch.quickSearchText.SetText(product)
  Log.Message(product);
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
  
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
}
function clickNewProductBtn()
{
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton9.Click();
}
function selectProductType()
{
  let productType = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Details_ProductDetails_ProductSubTypeID.LookupSearchCombo.ClickItem("Subscription (print)");
  productSubType = productType
}
function enterTitleOfProduct()
{
  let anysize = 4;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomProductName="";
  for( let i=0; i < anysize; i++ ){
  randomProductName += charset[Math.floor(Math.random() * charset.length)];
  }
  
  let txtWithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner;
  txtWithoutPrefix.Click();
  txtWithoutPrefix.Keys(randomProductName);
  product = randomProductName
}
function enterTitleOfEContentProduct()
{
  let anysize = 4;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomProductName="";
  for( let i=0; i < anysize; i++ ){
  randomProductName += charset[Math.floor(Math.random() * charset.length)];
  }
  
  let txtWithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner;
  txtWithoutPrefix.Click();
  txtWithoutPrefix.Keys(randomProductName);
}
function enterTitlePrefix()
{
  let txtTitlePrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitlePrefix.txtInner;
  txtTitlePrefix.Click();
  txtTitlePrefix.Keys("RAVE");
}
function enterImprintNameAndClickFinish()
{
  let lnkImprint = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProducts_Wizard_Organizations.txtLink;
  lnkImprint.Click();
  lnkImprint.Keys("Reef Books");
  lnkImprint.Keys("[Tab]");
  //organization = imprint;
  Aliases.Aptify_Shell.PTProductWizard.WizMain.btnFinish.ClickButton();
}
function setIdentifierForSubscription()
{
  let C1FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_General.Products_Tabs_General.Products_ProductDetails_PTproductIdentifiers.AptifyControlBase_Fill_Panel.flexSubType;
  C1FlexGrid.ClickR();
  C1FlexGrid.PopupMenu.Click("New");
  
  let ddIdentifierType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo;
  ddIdentifierType.Click();
  ddIdentifierType.ClickItem("ISSN - International Standard Serials Number");
  parIdentifierType = "ISSN - International Standard Serials Number";
  ddIdentifierType.Keys("[Tab]");
  
  let txtValue = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.ProductIdentifiers_MaskValue.maskedTextBox1;
  let value =  aqConvert.FloatToStr(Math.floor((Math.random() * 10000000000000) + 1));
  txtValue.Click();  
  txtValue.Keys("^a[BS]");
  txtValue.Keys(value);
  txtValue.Keys("[Tab]");
  let ISSN = aqObject.GetPropertyValue(txtValue, "Text");
  identifer = ISSN;   
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
  
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");
}
function setIdentifierForVolume()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.pagetabIdentifiers.Click();
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Identifiers.Products_Identifiers.PTProductIdentifiers.zAptifyControlBase_Toolbars_Dock_Area_Top.toolbar.buttonNew.ClickButton();

  
  let ddIdentifierType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo;
  ddIdentifierType.Click();
  ddIdentifierType.ClickItem("Volume/Issue");
  ddIdentifierType.Keys("[Tab]");
  
  let productIdentifiersLayout = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General;
  let maskedEdit = productIdentifiersLayout.PTProductIdentifiers_Tabs_General_EnumerationLevel1;
  let maskedTextBox = maskedEdit.maskedTextBox1;
  maskedTextBox.SetText("1234");
  maskedTextBox.Keys("[Tab]");
  maskedTextBox = productIdentifiersLayout.PTProductIdentifiers_Tabs_General_EnumerationLevel2.maskedTextBox1;
  maskedTextBox.SetText("002");
  maskedTextBox.Keys("[Tab]");
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
  
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");
}
function setDefaultPrice()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Prices");
  
  let currencyType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_CurrencyTypeID.LookupSearchCombo;
  currencyType.Click();
  currencyType.Keys("UK Sterling");
  currencyType.Keys("[Tab]");
  
  let txtPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_Price.txtInner;
  txtPrice.DblClick();
  txtPrice.Keys("[BS]");
  txtPrice.Keys(20);
  txtPrice.Keys("[Tab]");
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_Active_Button_Add.Click(25, 14);
}

function createAutoBuildFromProduct()
{
  clickSubscriptionTab()
  selectReleaseScheduleOption()
  clickAutoBuildFromProduct()
  enterEContentProductType()
  enterTitlePrefix()
  enterTitleOfEContentProduct()
  enterImprintNameAndClickFinish()
  clickSaveAndClose();
  //clickOKPopup();
  setDefaultPrice()
  //setIdentifierForVolume();
  checkCurrentlySold();
  clickSaveAndClose();
}
function selectReleaseScheduleOption()
{
  aptify_Shell = Aliases.Aptify_Shell;
  let ultraCombo = aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_OTC_Subscriptions.Products_OTC_Subscriptions.tabMain.Products_OTC_Subscription_General.Product_OTC_Subscription_GeneralTabLayout.Product_OTC_Subscription_GeneralTabLayout_ReleaseScheduleOptionID.LookupSearchCombo;
  ultraCombo.combobox.dropdownbuttonOpen.Click();
  aptify_Shell.DropDownForm.ComboDropDownControl.rowRow2.cellDescription.Click(153, 8);
  
  
}
function clickOKPopup()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.ClickButton();
  aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnThree.ClickButton();
}
function clickSubscriptionTab()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.pagetabSubscription.Click();
}
function clickAutoBuildFromProduct()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_OTC_Subscriptions.Products_OTC_Subscriptions.tabMain.Products_OTC_Subscription_General.Product_OTC_Subscription_GeneralTabLayout.Product_OTC_Subscription_GeneralTabLayout_AutoBuildfromID.lblLink.Click(96, 8);
}
function enterEContentProductType()
{
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Details_ProductDetails_ProductSubTypeID.LookupSearchCombo.ClickItem("Volume/Issue (Online)");
}

function checkCurrentlySold()
{
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  ultraTabControl.pagetabFulfilment.Click();
  ultraTabControl.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_FulfilmentItems.PT_Products_OTC_Fulfilment_Tabs.tabMain.PT_Products_OTC_Fulfilment1.PT_Products_OTC_Fulfilment1.PT_ProductsOTC_Fulfilment_IsSold.chkInternal.wState = cbChecked;
}

Then("I select radio button Subscriptions\\/Trials\\/IC", function (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_SearchOptions.Subscriptions_Trials_IC_SearchOption_SubsOnly_SUBS.ClickButton();
});

Then("I select the order line and click on Preview", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new;
  radGridView.panel4CaptionAndGrid.radGridView1.ClickCell(0,"Product Version");
  radGridView.radCommandBar1.diagramCommandbarpreview.Click(40, 16);
  radGridView.radCommandBar1.diagramCommandbarpreview.Click(40, 16);
});

Then("Order status should be Active Subscription", function (){
  let clmOrderStatus = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOQLPreview_Form.PTOQLPreview_TABS.tabMain.PTOQLPreview_TABS_Summary.PTOQLPreview_TABS_Summary.PTOQLPreview_TABS_Summary_OrderLicenseStatus.txtInner.Text.OleValue;
  if(clmOrderStatus, cmpEqual, "ActiveSubscription")
    {
    Log.Checkpoint("Order status is display as Active Subscription");
    }
    else{
    Log.Error("Order status is not display as Active Subscription");
    }
});

Then("I click on order overrides tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOQLPreview_Form.PTOQLPreview_TABS.tabMain.pagetabOrderOverrides.Click();
});

Then("I select Cancel Reason {arg}", function (cancelReason){
  formTemplateLayout = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOQLPreview_Form.PTOQLPreview_TABS.tabMain.PTOrderQueryLicenses_Form_Renewal_Overrides_Tab.PTOQLPreview_TABS_RenewalOverrides.PTOrderQueryLicenses_Renewal_Overrides_PT_Group_Box_RenewalOverrides.PTOrderItemLicenses_PreviewPaneRenewalOverrides.PreviewPaneRenewalOverrides_TABS.tabMain.PreviewPaneRenewalOverrides_TABS_Order.PreviewPaneRenewalOverrides_TABS_Orders;
  comboBox = formTemplateLayout.PTOrderItemLicenses_PreviewPaneRenewalOverrides_CancelReasonID.ucCombo.combobox;
  comboBox.Keys(cancelReason);
  formTemplateLayout.PTOrderItemLicenses_PreviewPaneRenewalOverrides_DateCancelled.txtInner.Keys("[Tab]");
});

Then("I enter Cancel Reference and click on Cancel Subscription", function (){
  let anysize = 4;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  cancelRef="";
  for( let i=0; i < anysize; i++ ){
  cancelRef += charset[Math.floor(Math.random() * charset.length)];
  }
  
  
  let formTemplateLayout = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOQLPreview_Form.PTOQLPreview_TABS.tabMain.PTOrderQueryLicenses_Form_Renewal_Overrides_Tab.PTOQLPreview_TABS_RenewalOverrides.PTOrderQueryLicenses_Renewal_Overrides_PT_Group_Box_RenewalOverrides.PTOrderItemLicenses_PreviewPaneRenewalOverrides.PreviewPaneRenewalOverrides_TABS.tabMain.PreviewPaneRenewalOverrides_TABS_Order.PreviewPaneRenewalOverrides_TABS_Orders;
  let txtCancelReason = formTemplateLayout.PTOrderItemLicenses_PreviewPaneRenewalOverrides_CancelReference.txtInner;
  txtCancelReason.SetText(cancelRef);
  formTemplateLayout.PTOrderItemLicenses_PreviewPaneRenewalOverrides_Active_Button_CancelOrReinstate.Click(86, 18);
});

Then("Publisher's message window should appear with message Organization Only Rule and click on Ok", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage.edit, "Text", cmpEqual, "Organization Only Rule");
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

Then("Order status should be updated to Lapsed", function (){
  adjustWindow();
  let clmOrderStatus = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.panel4CaptionAndGrid.radGridView1.wValue(0,"Order Status").OleValue;
  if(clmOrderStatus, cmpEqual, "Lapsed")
    {
    Log.Checkpoint("Order status is display as Lapsed");
    }
    else{
    Log.Error("Order status is not display as Lapsed");
    }
});

Then("I go to order actions and select Amend\\/Clone", function (){
  aptify_Shell = Aliases.Aptify_Shell;
  let radCommandBar = aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.radCommandBar1;
  radCommandBar.diagramOrderactionsdefaultgroup1.Click(38, 15);
  aptify_Shell.RadDropDownMenu_new.menuitemAmendClone.Click();
});

Then("Order Type should be Invoice and Order Type should be Normal Sale", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderProcessTypeID.LookupSearchCombo.combobox, "Value", cmpEqual, "Invoice");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderTypeID.LookupSearchCombo.combobox, "Value", cmpEqual, "Normal Sale");
});

Then("Two documents should be generated invoice and credit note", function (){
  let radGridViewDocumentNOte = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  let doc1 = radGridViewDocumentNOte.wValue(1, "Document Source").OleValue;
  let doc2 = radGridViewDocumentNOte.wValue(0, "Document Source").OleValue;
  if((doc2 == "Order Credit" || doc2 == "Order Invoice") && (doc1 == "Order Invoice" || doc1 == "Order Credit"))
    {
    Log.Checkpoint("Two documents are generated with invoice note and credit note");
    }
    else{
    Log.Error("Two documents are not generated with invoice note and credit note");
    }
});

Then("credit note document number should have suffix C", function (){
  let radGridViewDocument = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var i = 0;
    
    
    for(i;i<radGridViewDocument.wRowCount;i++){
    if(radGridViewDocument.wValue(i,"Document Source").OleValue == "Order Credit"){
   
      let valueDisplayed = radGridViewDocument.wValue(i,2).OleValue; 
    
      if(aqObject.CompareProperty(valueDisplayed, cmpEndsWith,"C"))
    {
        Log.Checkpoint("credit note document number contain suffix C");
        break;
      }
      else
      {
        Log.Error("credit note document number does not contain suffix C");
        break;
      }
     }
    }
    
});

Then("I retrieve both the document ref number", function (){
  
  let radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let ref1 = radGridView.wValue(1, "Document Reference").OleValue;
  reference1 = ref1;
  let ref2 = radGridView.wValue(0, "Document Reference").OleValue;
  reference2 = ref2;
});


Then("Credit and Invoice document type entries should display with correct details", function (){
  openCustomerInformation();
  clickTradingTab();
  clickAccountProfilesTab();
  openStreamlineSterlingLedger();
  clickLedgerTab();
  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let wRowCount = radGridView.wRowCount;
  var i = 0;
  var j = 0;

  for(i;i<radGridView.wRowCount;i++){
    if(radGridView.wValue(i,2).OleValue == reference1){
      let valueDisplayed = radGridView.wValue(i,7).OleValue; 
      let value = aqString.Remove(orderValue,0,1)
      if((valueDisplayed) == (-(value)) || (valueDisplayed) == (value))
    {
        
        Log.Checkpoint("Transaction details displayed are Correct");
      }
      else{
    
        Log.Error("Transaction details displayed are Incorrect");
      }
     }
    }
  for(j;j<radGridView.wRowCount;j++){
    if(radGridView.wValue(j,2).OleValue == reference2){
      let valueDisplayed = radGridView.wValue(j,7).OleValue; 
      ///let balanceDisplayed = radGridView.wValue(i,8).OleValue;
      let value = aqString.Remove(orderValue,0,1)
      if((valueDisplayed) == (-(value)) || (valueDisplayed) == (value)){
        Log.Message(aqConvert.StrToInt(orderValue))
        Log.Checkpoint("Transaction details displayed are Correct");
      }
      else{
        Log.Message(aqConvert.StrToInt(orderValue))
        Log.Error("Transaction details displayed are Incorrect");
      }
     }
    }
  
  
});

Then("I open order query to select radio button Subscriptions\\/Trials\\/IC and enter document reference number", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_SearchOptions.Subscriptions_Trials_IC_SearchOption_SubsOnly_SUBS.ClickButton();
  enterDocumentRefOrderQuery(documentReference);
  enterProductandClickSearchBtn(productTitle);
});


function enterDocumentRefOrderQuery()
{
  let ultraTextEditor = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  ultraTextEditor.SetText(documentReference);
  ultraTextEditor.Keys("[Tab]");
}
function enterProductandClickSearchBtn()
{
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID.txtLink;
  txtProduct.Keys(productTitle);
  txtProduct.Keys("[Tab]")
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
}


Then("Customer, Product, Quantity, P\\/O ref details should be correct", function (){
  let customerDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel_new.splitContainerDetails.SplitterPanel2.PTOrders_ProductSelection.PTOrders_ProductSelection_ShippingTo.WinFormsObject("txtInner").get_Text();  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let productDisplayed = radGridView.wValue(0, "Title").OleValue;
  let qtyDisplayed = radGridView.wValue(0, "Order Qty").OleValue; 
  let poRefDisplayed = radGridView.wValue(0, "P/O Ref").OleValue;
  if( (aqObject.CompareProperty(productTitle, cmpEqual, productDisplayed, true, 3)) && (aqObject.CompareProperty((quantity), cmpEqual, qtyDisplayed, true, 3)) && (aqObject.CompareProperty(PoRef, cmpEqual, poRefDisplayed, true, 3)) && (aqObject.CompareProperty(customer, cmpEqual, customerDisplayed, true, 3)) ){
    Log.Checkpoint("Customer, Product, Quantity, P/O Ref displayed is Correct");
  }
  else{
    Log.Error("Customer, Product, Quantity, P/O Ref displayed is Incorrect");
  }

});

Then("I retrieve order value", function (){
  let txtOrderValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_TotalDueValue.txtInner.Text.OleValue;
  orderValue = txtOrderValue;
  Log.Message(orderValue)
});

When("I select Product Name On Orders Id wizard", function (){
  let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  
  txtProduct.Click();
  txtProduct.SetText(product);
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

When("I enter P\\/O Reference, Quantity {arg}", function (qty){
  enterPORef();
  enterQtyOnOrdersId(qty);
});

function enterQtyOnOrdersId(qty)
{
  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  
  txtQuantity.SetText(qty);
  quantity = qty;
  //txtQuantity.Keys("[Tab]");
}

When("I retrieve order value", function (){
  let txtOrderValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_TotalDueValue.txtInner.Text.OleValue;
  orderValue = txtOrderValue;
});

When("I set Gateway Customer Order Interface as default Dashboard", function (){
  switchToGatewayCOI();
});

When("I place an order for the product {arg}", function (productPar){
  clickRedArrow();
  enterProduct(productPar);
  enterPORef();
  enterQty();
  clickAdd();
  clickLeftArrow();
  retrieveNetValue();
  clickCheckout();
});
function clickCheckout(){
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();
}
function enterQty()
{
  let inventoryAvailable = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.get_Text();
  quantity = inventoryAvailable;  
 
  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderedQuantity.txtInner;
  
  txtQuantity.Click();
  txtQuantity.SetText(1);
  txtQuantity.Keys("[Tab]");
}
When("I go to Prices tab of the product information", function (){
  clickFindProductBtn();
  searchProduct();
  clickSearchBtn();
  handleProductsGrid();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Prices");
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let i = 0;
  var passCount;
  let records = radGridView.wRowCount; 
  for(i;i<records;i++){
   if(radGridView.wValue(i, 13).OleValue == true){
    radGridView.DblClickRowIndicator(i);  
   }
  }
});

When("I change the value in Price field", function (){
  let txtPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Price.txtInner;
  
  let priceDisplayed = txtPrice.get_Text();
  price = priceDisplayed;
  
  txtPrice.Click();
  txtPrice.SetText(aqConvert.StrToInt(price)+5);
  txtPrice.Keys("[Tab]");
  
  clickSaveAndClose();
  clickSaveAndClose();
});

When("I click on Credit from Order Actions", function (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(314, 17);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(82, 33);
});

Then("Customer, Product, Quantity, P\\/O reference should be correct", function (){
  let customerDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel_new.splitContainerDetails.SplitterPanel2.PTOrders_ProductSelection.PTOrders_ProductSelection_ShippingTo.WinFormsObject("txtInner").get_Text();  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let productDisplayed = radGridView.wValue(0, "Title").OleValue;
  let qtyDisplayed = radGridView.wValue(0, "Order Qty").OleValue; 
  let poRefDisplayed = radGridView.wValue(0, "P/O Ref").OleValue;
  if( (aqObject.CompareProperty(product, cmpEqual, productDisplayed, true, 3)) && (aqObject.CompareProperty(-(1), cmpEqual, qtyDisplayed, true, 3)) && (aqObject.CompareProperty(PoRef, cmpEqual, poRefDisplayed, true, 3)) && (aqObject.CompareProperty(customer, cmpEqual, customerDisplayed, true, 3)) ){
    Log.Checkpoint("Customer, Product, Quantity, P/O Ref displayed is Correct");
  }
  else{
    Log.Error("Customer, Product, Quantity, P/O Ref displayed is Incorrect");
  }
});

Then("Credit details displayed should be correct", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let valueDisplayed = radGridView.wValue(0, 8).OleValue;
  let balanceDisplayed = radGridView.wValue(0, 9).OleValue;
  if( (aqObject.CompareProperty(valueDisplayed, cmpEqual, -(aqConvert.StrToInt(price)), true, 3)) && (aqObject.CompareProperty(balanceDisplayed, cmpEqual, -(aqConvert.StrToInt(price)), true, 3)) ){
    Log.Checkpoint("Credit details displayed are Correct");
   }
  else{
    Log.Error("Credit details displayed are Incorrect");
   }
});

Then("values of the original invoice should be displayed and not the updated\\/changed price", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var i = 0;
  var j = 0;
  var passCount = 0;
  var pass = 0;
  for(i;i<radGridView.wRowCount;i++){
    if(radGridView.wValue(i,2).OleValue == docInvoice){
     radGridView.ClickRowIndicator(i);
     let details = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
     var baseValue = details.wValue(0, 4).OleValue;   
    }
    }

  for(j;j<radGridView.wRowCount;j++){
    if(radGridView.wValue(j,2).OleValue == docCreditNote){
       var valueDisplayed = radGridView.wValue(j, 8).OleValue;
     }
    }
    
   if(aqObject.CompareProperty(valueDisplayed, cmpEqual, -(baseValue), true, 3)) {
     Log.Checkpoint("Original Invoice value is displayed and not updated");
   }
    else{
      Log.Error("Updated value is displayed and not Original Invoice value");
    }    
});

Then("I change account status to Open", function (){
  clickTradingTab();
  clickAccountProfilesTab();
  openStreamlineSterlingLedger();
  changeCreditStatus();
  clickSaveAndClose();
});

function changeCreditStatus(){
  let ddCreditStatus = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_Tabs_TopArea_CreditStatusID.LookupSearchCombo;
  
  ddCreditStatus.Click();
  ddCreditStatus.ClickItem("Account Open");
  ddCreditStatus.Keys("[Tab]");
}

Then("I click on Release Held from Order Release tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(378, 17);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(70, 36);
});

Then("I click Yes to message stating {arg}", function (param1){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});

Then("Order Release Type should be Invoice and Order Type should be Normal Sale", function (){
  let transactionType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderProcessTypeID.LookupSearchCombo.get_Text();
  let orderType =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_OrderTypeID.LookupSearchCombo.get_Text();
  
 if((transactionType == "Invoice") && (orderType == "Normal Sale")){
   Log.Checkpoint("Order Release Type is Invoice and Order Type is Normal Sale");
 }
 else{
   Log.Error("Order Release Type is not Invoice and/or Order Type is not Normal Sale");
 }  

});

Then("Customer, Product, Quantity and Supply Value should be correct", function (){
  let customerDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel_new.splitContainerDetails.SplitterPanel2.PTOrders_ProductSelection.PTOrders_ProductSelection_ShippingTo.WinFormsObject("txtInner").get_Text();  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let productDisplayed = radGridView.wValue(0, "Title").OleValue;
  let qtyDisplayed = radGridView.wValue(0, "Order Qty").OleValue; 
  let supplyDisplayed = radGridView.wValue(0, "Supply Value").OleValue;
  if( (aqObject.CompareProperty(product, cmpEqual, productDisplayed, true, 3)) && (aqObject.CompareProperty(totalQty, cmpEqual, qtyDisplayed, true, 3)) && (aqObject.CompareProperty(company, cmpEqual, customerDisplayed, true, 3)) ){
    Log.Checkpoint("Customer, Product, Quantity, Supply value displayed is Correct");
  }
  else{
    Log.Error("Customer, Product, Quantity, Supply value displayed is Incorrect");
  }
  
  
});

Then("Line \\/item Status should be Supply", function (){
  let radGridViewQueryTransactions = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.panel4CaptionAndGrid.radGridView1;
  let lineItemStatus = radGridViewQueryTransactions.wValue(0, 20).OleValue;
  if(aqObject.CompareProperty(lineItemStatus, cmpEqual, "Supply", true, 3))
  {
    Log.Checkpoint("Line Item Status is displayed as Supply");
  }
  else{
    Log.Error("Line Item Status is not displayed as Supply");
  }
});


Then("Order details displayed should be correct in the customer AR", function (){
  clickTradingTab();
  clickAccountProfilesTab();
  openStreamlineSterlingLedger();
  clickLedgerTab();
  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var i = 0;

  for(i;i<radGridView.wRowCount;i++){
    if(radGridView.wValue(i,2).OleValue == docInvoice){
      let valueDisplayed = radGridView.wValue(i,7).OleValue; 
      let balanceDisplayed = radGridView.wValue(i,8).OleValue;
      if(valueDisplayed == (netValue+aqConvert.StrToInt(orderDispatchCharge)) && balanceDisplayed == (netValue+aqConvert.StrToInt(orderDispatchCharge))){
        Log.Checkpoint("Order details displayed are Correct");
      }
      else{
        Log.Error("Order details displayed are Incorrect");
      }
     }
    }
    
});

Then("I open Advice Note generated", function (){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let docRef = gridDocuments.wValue(0, 2).OleValue;
   docAdviceNote = docRef;

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

Then("I enter the Advice Note Reference and Search", function (){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.WinFormsObject("OrderSearch.Form.SearchCriteria.Reference").WinFormsObject("txtInner");
  txtReference.Keys(docAdviceNote);
  txtReference.Keys("[Tab]");
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
});

Then("I enter the Invoice Reference and Search", function (){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.WinFormsObject("OrderSearch.Form.SearchCriteria.Reference").WinFormsObject("txtInner");
  txtReference.Keys(docInvoice);
  txtReference.Keys("[Tab]");
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
});

Then("Held quantity should be negative and Supply quantity should be correct", function (){
  let heldQty = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_HeldQuantity.txtInner.get_Text();
  let supplyQty = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_SuppliedQuantity.txtInner.get_Text(); 
  if(aqObject.CompareProperty(heldQty, cmpEqual, -(totalQty), true, 3))
  {
    Log.Checkpoint("Held quantity is Negative");
  }
  else{
    Log.Error("Held quantity is not Negative");
  }
  
  if(aqObject.CompareProperty(supplyQty, cmpEqual, totalQty, true, 3))
  {
    Log.Checkpoint("Supply quantity displayed is Correct");
  }
  else{
    Log.Error("Supply quantity displayed is Incorrect");
  }  
});

When("I uncheck Is Pre paid", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General_IsPrePaid.chkInternal.wState = cbChecked){
    Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General_IsPrePaid.chkInternal.wState = cbUnchecked;
  }
});

When("I uncheck Is AllowBackorders", function (){  
  if(Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_AllowBackorders.chkInternal.wState = cbChecked){
    Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_AllowBackorders.chkInternal.wState = cbUnchecked;
  }
});

When("I verify the customer {arg} with Account status as On Hold", function (customer){
  openCustomerInfo(customer);
  clickTradingTab();
  clickAccountProfilesTab();
  verifyAccountStatus();
  getIdentifier();
});

 
function verifyAccountStatus(){
 if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists ){
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  var i =0;
  for (i; i<records; i++)
  {
  let profileName = gridProfiles.wValue(i, 0).OleValue;  
  if("Streamline Sterling" == profileName)
  {
    let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
    var status = radGridView.wValue(i,3).OleValue;
    accountStatus = status;
    var limit = radGridView.wValue(i,5).OleValue;
    creditLimit = limit;
     if(accountStatus != "Stop\\On Hold" ){
      Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickRowIndicator(i);
       
      let ddCreditStatus = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_Tabs_TopArea_CreditStatusID.LookupSearchCombo;
      ddCreditStatus.Click();
      ddCreditStatus.ClickItem("Stop\\On Hold");
      ddCreditStatus.Keys("[Tab]");
      }
     if(creditLimit <= 0){
      Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickRowIndicator(i);
       
      let txtCreditLimit = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_CreditLimit.txtInner;
      txtCreditLimit.Click();
      txtCreditLimit.SetText(10000);
      txtCreditLimit.Keys("[Tab]");
      
      
  }
  closeAR();
  }
}

}
  else{
  let gridProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridProfiles.wRowCount;
  var i =0;
  for (i; i<records; i++)
  {
  let profileName = gridProfiles.wValue(i, 0).OleValue;  
 
  if("Streamline Sterling" == profileName)
  {

    let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
    var status = radGridView.wValue(i,3).OleValue;
    accountStatus = status;
    var limit = radGridView.wValue(i,5).OleValue;
    creditLimit = limit;     
    if(accountStatus != "Stop\\On Hold" ){
      Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickRowIndicator(i);
       
      let ddCreditStatus = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_Tabs_TopArea_CreditStatusID.LookupSearchCombo;
      ddCreditStatus.Click();
      ddCreditStatus.ClickItem("Stop\\On Hold");
      ddCreditStatus.Keys("[Tab]");
    }

    if(creditLimit <= 0){
      Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.Persons_Tabs_AccountProfiles.Persons_Tabs_Account_Profiles.Persons_Tabs_AccountProfiles_ELV_PersonAccounts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickRowIndicator(i);
      
      let txtCreditLimit = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_CreditLimit.txtInner;
      txtCreditLimit.Click();
      txtCreditLimit.SetText(10000);
      txtCreditLimit.Keys("[Tab]");
      
      
    }
    closeAR();
  }
  }  

     }
     
} 
function closeAR(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_grpKeyDetails.MainGroupBox.Account_Key_Details.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs_TopArea.PTAccountsReceivables_grpKeyDetails.MainGroupBox.Account_Key_Details.Click();
    Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");    
  }

}
Then("I Click on Find an Order", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
});


//partial credit

var multipleProducts = []
    multipleProducts.push("Amazing Jake and the Red Balloon","Amazing Jake and the Shaggy Dog","Amazing Jake and the Green Bay Packers")

var productTitle1, productTitle2,productTitle3,inventory1,inventory2,inventory3,documentCreditNote1,documentCreditNote2,totalOrderValue

When("I verify all the products", function (){
  let i = 0;
  var j = 0;
  for(i;i<multipleProducts.length;i++){
   clickFindProductButton();
       
   let txtProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
   txtProduct.Click();
   txtProduct.Keys(multipleProducts[i]);
   txtProduct.Keys("[Tab]");
   Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
   if(Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists ){ 
    let grid = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
     grid.DblClickCell(0,1); 
    }
  checkIdentifierBooksType();
  checkListPricesBooksType();
  checkCheckboxCurrentlySold();
  clickInventoryTab();
  checkInventorySupplyStatus();
  clickSaveAndClose();
  }
  
});

function clickFindProductButton()
{
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.Click();
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
function clickInventoryTab()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
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

When("I place order for all the products", function (){
  //clickRedArrow();
  enterPORef();
  enterQtyOnOrdersId("1");
  enterFirstProduct();
  clickAdd();
  
  enterSecondProduct();
  clickAdd();
  
  enterThirdProduct();
  clickAdd();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();
  retrieveTotalOrderValueForAllProducts();
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton(); 
});

function retrieveTotalOrderValueForAllProducts()
{
  let txtOrderValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_TotalDueValue.txtInner.Text.OleValue;
  totalOrderValue = txtOrderValue;

}
function enterFirstProduct()
{
  let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  
  txtProduct.Click();
  txtProduct.Keys(multipleProducts[0]);
  productTitle1 = multipleProducts[0]
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
   let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
   inventory1 = txtInventory;
}
function enterSecondProduct()
{
  let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  
  txtProduct.Click();
  txtProduct.Keys(multipleProducts[1]);
  productTitle2 = multipleProducts[1]
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
   let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
   inventory2 = txtInventory;
}
function enterThirdProduct()
{
  let gridProducts =  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.containerSearching.SearchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection.txtLink;
  
  txtProduct.Click();
  txtProduct.Keys(multipleProducts[2]);
  productTitle3 = multipleProducts[2]
  txtProduct.Keys("[Tab]");
  
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
   let txtInventory = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.PTOrders_ProductSelection_PTUnboundTextBox_Information.textBox1.Text.OleValue;
   inventory3 = txtInventory;
}

Then("I search the order and click on credit from Order actions", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
  enterDocumentRefOrderQuery(documentReference);
  enterCustomerNameOrderQuery();
  selectTransactionAndClickCredit();
});

function enterCustomerNameOrderQuery()
{
  let lnkcustomerName = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID.txtLink;
  lnkcustomerName.SetText(customer);
  lnkcustomerName.Keys("[Enter]");
  if(Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Owner Record ID");
  }
  lnkcustomerName.Keys("[Tab]");
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
}
function selectTransactionAndClickCredit()
{
  
  let splitterPanel = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new;
  let gridViewRowCount = splitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,1)
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(314, 17);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(82, 33);
}


Then("I select Order type {arg} and click on Ok button", function (orderType){
  //let aptify_Shell = Aliases.Aptify_Shell;
 // let ultraCombo = aptify_Shell.OrderQueryCreditOrderTypeLayout.PT_PTOrderQueryCreditOrderTypes_CreditEnter.PT_PTOrderQueryCreditOrderTypes_CreditEnter_OrderTypeID.LookupSearchCombo.clickItem(orderType);
  Aliases.Aptify_Shell.OrderQueryCreditOrderTypeLayout.PT_PTOrderQueryCreditOrderTypes_CreditEnter.PT_PTOrderQueryCreditOrderTypes_CreditEnter_ActiveButton_OK.Click();
});

Then("Type should be Credit Note and Order Type should be Normal Credit", function (){
  let productSelectionLayout = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection;
  let ddOrderProcessTypeId = productSelectionLayout.PTOrders_ProductSelection_OrderProcessTypeID.LookupSearchCombo.Text.OleValue;
  let ddOrderTypeId = productSelectionLayout.PTOrders_ProductSelection_OrderTypeID.LookupSearchCombo.Text.OleValue;
  
  if(ddOrderProcessTypeId, cmpEqual, "Credit Note")
    {
    Log.Checkpoint("Order Process Type Id is credit note");
    }
    else{
    Log.Error("Order Process Type Id is not credit note");
    }
    
  if(ddOrderTypeId, cmpEqual, "Normal Credit")
    {
    Log.Checkpoint("Order Type is normal credit");
    }
    else{
    Log.Error("Order Type is not normal credit");
    }
  
});

Then("I select credit from order actions for same order transaction line", function (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(314, 17);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(82, 33);
});

Then("Following message should be displayed for already credited product {arg}.", function (textDisplayed){
  aqObject.CheckProperty(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage, "Text", cmpEqual, textDisplayed);
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  
});

Then("I select rest of products for credit process", function (){
  adjustWindow();
  
  selectFirstTransactionAndClickCredit()
  selectOrderTypeAndClickOKBtn()
  refreshPendingBasketAndclickOpenBasket()
  clickLeftArrowAndCheckoutBtn();
  
  selectSecondTransactionAndClickCredit()
  selectOrderTypeAndClickOKBtn()
  refreshPendingBasketAndclickOpenBasket()
  clickLeftArrowAndCheckoutBtn();
  
  clickOrdersFromFolderList();
  clickBillingWave();
  refreshDocuments();
});
function clickLeftArrowAndCheckoutBtn()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel.PTOrders_ProductSelection.showSummaryButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton(); 
}

function selectFirstTransactionAndClickCredit()
{
  let splitterPanel = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new;
  let gridViewRowCount = splitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(1,1)
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(314, 17);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(82, 33);
}
function selectSecondTransactionAndClickCredit()
{
  let splitterPanel = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new;
  let gridViewRowCount = splitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(2,1)
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(314, 17);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(82, 33);
}
function selectOrderTypeAndClickOKBtn()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  let ultraCombo = aptify_Shell.OrderQueryCreditOrderTypeLayout.PT_PTOrderQueryCreditOrderTypes_CreditEnter.PT_PTOrderQueryCreditOrderTypes_CreditEnter_OrderTypeID.LookupSearchCombo.clickItem("Normal Credit");
  Aliases.Aptify_Shell.OrderQueryCreditOrderTypeLayout.PT_PTOrderQueryCreditOrderTypes_CreditEnter.PT_PTOrderQueryCreditOrderTypes_CreditEnter_ActiveButton_OK.Click(60, 12)
}
function refreshPendingBasketAndclickOpenBasket()
{
  let radGridView = Aliases.Aptify_Shell.MessageGrid.listViewPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  var i = 0;
  var j = 0;
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  Sys.WaitProcess("Aliases.Aptify_Shell.MessageGrid", 8000);
  Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
  for(i;i<records;i++){
    if(radGridView.wValue(i,3).OleValue == PoRef){
      radGridView.ClickRowIndicator(i);
    }
    else{
      Aliases.Aptify_Shell.MessageGrid.RefreshButton.buttonImage.ClickButton();
    }
   } 
   
  for(j;j<records;j++){
    if(radGridView.wValue(j,3).OleValue == PoRef){
      radGridView.ClickRowIndicator(j);
    }
  }   
  Aliases.Aptify_Shell.MessageGrid.Button1.ClickButton();
}

Then("I open credit documents generated", function (){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let docRef = gridDocuments.wValue(0, 2).OleValue;
   documentCreditNote1 = docRef;

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
   
   
   
  let docRef1 = gridDocuments.wValue(1, 2).OleValue;
   documentCreditNote2 = docRef;

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

Then("Credit Inventory should be reverted back to the product inventory", function (){
  clickFindProductBtn();
  searchFirstProduct();
  clickSearchBtn();
  handleProductsGrid();
  checkpointCreditInventory()
  clickSaveAndClose();
  closeSearchForm();
  
  clickFindProductBtn();
  searchSecondProduct()
  clickSearchBtn();
  handleProductsGrid();
  checkpointCreditInventoryForSecondProduct()
  clickSaveAndClose();
  closeSearchForm();
  
  clickFindProductBtn();
  searchThirdProduct();
  clickSearchBtn();
  handleProductsGrid();
  checkpointCreditInventoryForThirdProduct()
  clickSaveAndClose();
  closeSearchForm();
});

function searchFirstProduct()
{
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(productTitle1);
}
function checkpointCreditInventory()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  let availableQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
  
  if( aqObject.CompareProperty(inventory1, cmpEqual , availableQtyDisplayed, true, 3) ){
    Log.Checkpoint("Inventory is reverted back to product inventory");
   }
  else{
    Log.Error("Inventory is not reverted back to product inventory");
   }
}

function searchSecondProduct()
{
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(productTitle2);
}
function checkpointCreditInventoryForSecondProduct()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  let availableQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
  
  if(inventory2 ==  availableQtyDisplayed ){
    Log.Checkpoint("Inventory is reverted back to product inventory");
   }
  else{
    Log.Error("Inventory is not reverted back to product inventory");
   }
}
function searchThirdProduct()
{
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(productTitle3);
}
function checkpointCreditInventoryForThirdProduct()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  let availableQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
  
  if( aqObject.CompareProperty(inventory3, cmpEqual , availableQtyDisplayed, true, 3) ){
    Log.Checkpoint("Inventory is reverted back to product inventory");
   }
  else{
    Log.Error("Inventory is not reverted back to product inventory");
   }
}

Then("Credit document type entries should display with correct details", function (){
  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let wRowCount = radGridView.wRowCount;
  var i = 0;
  var j = 0;
 
  for(i;i<radGridView.wRowCount;i++){
    if(radGridView.wValue(i,2).OleValue == documentCreditNote1){
      let valueDisplayed = radGridView.wValue(i,7).OleValue; 

      if(aqObject.CompareProperty((valueDisplayed), cmpEqual,(orderValue)))
    {
        
        Log.Checkpoint("Transaction details displayed are Correct");
      }
      else{
    
        Log.Error("Transaction details displayed are Incorrect");
      }
     }
    }
  for(j;j<radGridView.wRowCount;j++){
    if(radGridView.wValue(j,2).OleValue == documentCreditNote2){
      let valueDisplayed = radGridView.wValue(j,7).OleValue; 
      ///let balanceDisplayed = radGridView.wValue(i,8).OleValue;
      
      if((valueDisplayed) == (orderValue)){
        Log.Checkpoint("Transaction details displayed are Correct");
      }
      else{
      
        Log.Error("Transaction details displayed are Incorrect");
      }
     }
    }
});

Then("Invoice document type entry should display with correct details", function (){
  openCustomerInformation();
  clickTradingTab();
  clickAccountProfilesTab();
  openStreamlineSterlingLedger();
  clickLedgerTab();
  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let wRowCount = radGridView.wRowCount;
  var i = 0;

  for(i;i<radGridView.wRowCount;i++){
    if(radGridView.wValue(i,2).OleValue == documentReference){
      let valueDisplayed = radGridView.wValue(i,7).OleValue; 
      if(aqObject.CompareProperty(aqConvert.IntToStr(valueDisplayed), cmpEqual,aqConvert.IntToStr(totalOrderValue)))
    {
        
        Log.Checkpoint("Transaction details displayed are Correct");
      }
      else{
    
        Log.Error("Transaction details displayed are Incorrect");
      }
     }
    }
});

Then("Quantity,Product,P\\/O ref,Customer details should be correct", function (){
  let customerDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel_new.splitContainerDetails.SplitterPanel2.PTOrders_ProductSelection.PTOrders_ProductSelection_ShippingTo.WinFormsObject("txtInner").get_Text();  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let productDisplayed = radGridView.wValue(0, "Title").OleValue;
  let qtyDisplayed = radGridView.wValue(0, "Order Qty").OleValue; 
  let poRefDisplayed = radGridView.wValue(0, "P/O Ref").OleValue;
  if( (aqObject.CompareProperty(productTitle3, cmpEqual, productDisplayed, true, 3)) && (aqObject.CompareProperty((-(quantity)), cmpEqual, qtyDisplayed, true, 3)) && (aqObject.CompareProperty(PoRef, cmpEqual, poRefDisplayed, true, 3)) && (aqObject.CompareProperty(customer, cmpEqual, customerDisplayed, true, 3)) ){
    Log.Checkpoint("Customer, Product, Quantity, P/O Ref displayed is Correct");
  }
  else{
    Log.Error("Customer, Product, Quantity, P/O Ref displayed is Incorrect");
  }
});

Then("I retrive supply value", function (){
  let clmSupplyValue = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2.splitContainerDetails.SplitterPanel2.splitContainerDetailLines.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Supply Value").OleValue;
  orderValue = clmSupplyValue;
  Log.Message(orderValue)
});

When("I enter Discount", function (){
  let txtDiscount = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Discount.txtInner;
  let randomDiscount =  aqConvert.FloatToStr(Math.floor((Math.random() * 10) + 1));
  txtDiscount.SetText(randomDiscount);
  txtDiscount.Keys("[Tab]");
  let discountValue = txtDiscount.get_Text(); 
  discount = discountValue;
});


//COI_ProcessAndPayProforma

When("I enter Transaction Type {arg}", function (transactionType){
  let txtTransactionType = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_TransactionType.txtInner;
  
  txtTransactionType.Click();
  txtTransactionType.SetText(transactionType);
  txtTransactionType.Keys("[Tab]");
});

Then("I open Proforma generated", function (){
  let gridDocuments = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let docRef = gridDocuments.wValue(0, 2).OleValue;
   docProforma = docRef;

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

Then("Order Status as Completed and Order Type as Proforma should be displayed", function (){
  let orderType = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderType.txtInner.get_Text();
  let orderStatus = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderStatus.txtInner.get_Text();

  if(aqObject.CompareProperty(orderType, cmpEqual, "Proforma", true, 3))
  {
    Log.Checkpoint("Order Type displayed is Correct");
  }
  else{
    Log.Error("Order Type displayed is Incorrect");
  }
  
  if(aqObject.CompareProperty(orderStatus, cmpEqual, "Completed Order", true, 3))
  {
    Log.Checkpoint("Order Status displayed is Correct");
  }
  else{
    Log.Error("Order Status displayed is Incorrect");
  }
});

Then("I click on Pay from Order Actions", function (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.radCommandBar1.diagramOrderactionsdefaultgroup1.Click(52, 12);
  Aliases.Aptify_Shell.RadDropDownMenu_new.menuitemPay.Click();
});

Then("Pay the order with any mode of payment", function (){
  let ddPaymentType = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentTypeID.LookupSearchCombo;

  if( ddPaymentType.Value = "On Account" ){
    Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();
  }
  else if(ddPaymentType.Value = "Check/Cheque"){
    let chequeNumber =  aqConvert.FloatToStr(Math.floor((Math.random() * 100000) + 1));
    let txtChequeNumber = Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PaymentActions.PTOrderPayments_OTCBasket_Cheque.PTOrderPayments_OTCBasket_Cheque_ChequeNumber.txtInner;
    txtChequeNumber.Keys(chequeNumber);
    
    Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab.PTOrders_Summary_Checkout_Tab_PT_Group_Box_PaymentOptionTemplate.PT_PTOrders_OTCBasket_CheckoutPayment.PT_PTOrders_OTCBasket_CheckoutPayment_PTIconButton_Checkout.buttonImage.ClickButton();
  }
});

Then("Supply quantity should be correct", function (){
  let supplyQty = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel_new.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_SuppliedQuantity.txtInner.get_Text(); 
  
  if(aqObject.CompareProperty(supplyQty, cmpEqual, totalQty, true, 3))
  {
    Log.Checkpoint("Supply quantity displayed is Correct");
  }
  else{
    Log.Error("Supply quantity displayed is Incorrect");
  } 
});

Then("Order Status as Completed and Order Type as Normal Sale should be displayed", function (){
  let orderType = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderType.txtInner.get_Text();
  let orderStatus = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel2.PTOrderQueryTransactions_OrderSearch_Preview_Form.PTOrderQueryTransactions_OrderSearch_Preview_Form_Tabs.tabMain.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General.PTOrderQueryTransactions_OrderSearch_Preview_General_OrderStatus.txtInner.get_Text();

  if(aqObject.CompareProperty(orderType, cmpEqual, "Normal Sale", true, 3))
  {
    Log.Checkpoint("Order Type displayed is Correct");
  }
  else{
    Log.Error("Order Type displayed is Incorrect");
  }
  
  if(aqObject.CompareProperty(orderStatus, cmpEqual, "Completed Order", true, 3))
  {
    Log.Checkpoint("Order Status displayed is Correct");
  }
  else{
    Log.Error("Order Status displayed is Incorrect");
  }  
});

Then("Change from Proforma to Invoice should be checked", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.OrderAmendAddressBookLayout.PTOrders_OrderAmendAddressBook.PTOrders_OrderAmend_ConvertProformaToInvoice.checkBox1, "wState", cmpEqual, 1);
  Aliases.Aptify_Shell.OrderAmendAddressBookLayout.PTOrders_OrderAmendAddressBook.PTOrders_OrderAmendAddressBook_Active_Button_OK.Click();  
});

Then("I enter the Proforma Reference and Search", function (){
  let txtReference = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.WinFormsObject("OrderSearch.Form.SearchCriteria.Reference").WinFormsObject("txtInner");
  txtReference.Keys(docProforma);
  txtReference.Keys("[Tab]");
  
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Search.Click();
});

Then("Order details should be correct in the customer AR", function (){
  clickTradingTab();
  clickAccountProfilesTab();
  openStreamlineSterlingLedger();
  clickLedgerTab();
  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var i = 0;

  for(i;i<radGridView.wRowCount;i++){
    if(radGridView.wValue(i,2).OleValue == docProforma){
      let valueDisplayed = radGridView.wValue(i,7).OleValue; 
      let balanceDisplayed = radGridView.wValue(i,8).OleValue;
      if(valueDisplayed == (netValue+aqConvert.StrToInt(orderDispatchCharge)) && balanceDisplayed == (netValue+aqConvert.StrToInt(orderDispatchCharge))){
        Log.Checkpoint("Order details displayed are Correct");
      }
      else{
        Log.Error("Order details displayed are Incorrect");
      }
     }
    }
});

function verifyUnitWeight()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.pagetabClassifications.Click();
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Classification.Products_Classification.Products_Classification_Tabs.tabMain.pagetabDimensions.Click();
 let gridDimensions =  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Classification.Products_Classification.Products_Classification_Tabs.tabMain.PTProducts_Dimensions.Products_Dimensions.Product_Dimensions_SubtypeView.AptifyControlBase_Fill_Panel.flexSubType; 
 var rowCount = gridDimensions.BottomRow;
 var passCount = 0;
 var i = 1;
 for(i;i<=rowCount;i++){
   let dimension = gridDimensions.get_Item(i,1);
   if(dimension != "Unit weight"){

    passCount += 1;
   }
 }  
   
 if(passCount == rowCount){
    Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Classification.Products_Classification.Products_Classification_Tabs.tabMain.PTProducts_Dimensions.Products_Dimensions.Product_Dimensions_SubtypeView.zAptifyControlBase_Toolbars_Dock_Area_Top.toolbar.buttonNew.ClickButton();

    let ddType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_TypeID.LookupSearchCombo;
    ddType.ClickItem("Unit weight");
    ddType.Keys("[Tab]");  
  
    let txtValue = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_Value.txtInner;
    txtValue.Keys(1);
  
    let ddOnixUnit = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_ONIXUnitID.LookupSearchCombo;
    ddOnixUnit.ClickItem("Kilograms");  
    ddOnixUnit.Keys("[Tab]");
    
    Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();   
 }
 
 var rowCount = gridDimensions.BottomRow;
 if(rowCount == -1){
    Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Classification.Products_Classification.Products_Classification_Tabs.tabMain.PTProducts_Dimensions.Products_Dimensions.Product_Dimensions_SubtypeView.zAptifyControlBase_Toolbars_Dock_Area_Top.toolbar.buttonNew.ClickButton();

    let ddType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_TypeID.LookupSearchCombo;
    ddType.ClickItem("Unit weight");
    ddType.Keys("[Tab]");  
  
    let txtValue = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_Value.txtInner;
    txtValue.Keys(1);
  
    let ddOnixUnit = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_ONIXUnitID.LookupSearchCombo;
    ddOnixUnit.ClickItem("Kilograms");  
    ddOnixUnit.Keys("[Tab]");   
 
    Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
 }
 
 
 
}

//quotation_COI

When("I enter Publisher Reference", function (){
  let layoutGatewayCustomerOrderInterface = Aliases.Aptify_Shell.FormTemplateForm.PTGatewayCustomerOrderInterface_Form.PTGatewayCustomerOrderInterface_Tabs.tabMain.PTGatewayCustomerOrderInterface_Tabs_General.PTGatewayCustomerOrderInterface_Tabs_General;
  let txtPublisherRef = layoutGatewayCustomerOrderInterface.PTGatewayCustomerOrderInterface_Tabs_General_PublisherReference.txtInner;
  txtPublisherRef.SetText(aqConvert.FloatToStr(Math.floor((Math.random() * 10) + 1)));
});

Then("Quotation should be generated with correct details", function (){
  
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

Then("on order query the order status should be Completed order and order type should be Quotation", function (){
  enterDetailsAndClickSearch()
  selectTransaction();
  checkpointOrderStatusAndOrderType();
});

function enterDetailsAndClickSearch()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
  let formTemplateLayout = aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria;
  let ultraTextEditor = formTemplateLayout.OrderSearch_Form_SearchCriteria_Reference.txtInner;
  ultraTextEditor.SetText(docInvoice);
  ultraTextEditor.Keys("[Tab]");
  let txtProduct = formTemplateLayout.OrderSearch_Form_ProductID.txtLink;
  txtProduct.Keys(product);
  txtProduct.Keys("[Tab]")
  formTemplateLayout.OrderSearch_Form_SearchCriteria_Search.Click();
}

function checkpointOrderStatusAndOrderType()
{
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmOrderType = radGridViewOrderLines.wValue(0, "Order Type").OleValue;
  var clmOrderStatus = radGridViewOrderLines.wValue(0, "Order Status").OleValue;
  if((aqObject.CompareProperty(clmOrderType, cmpEqual,"Quotation", true,3))&&(aqObject.CompareProperty(clmOrderStatus, cmpEqual,"Completed Order", true,3)))
  {
    Log.Checkpoint("Order Type and Order Status is correct")
  }
  else{
    Log.Error("Order Type and Order Status is not correct")
  }
}

Then("I click Release Quotes from order release", function (){
  Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(419, 14);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(84, 87);
});


Then("On order query the order status should be completed order and order type should be normal sale", function (){
  //closeOpenWizard();
  enterDetailsAndClickSearch()
  selectTransaction();
  checkpointOrderTypeAndOrderStatus();
});
function checkpointOrderTypeAndOrderStatus()
{
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmOrderType = radGridViewOrderLines.wValue(0, "Order Type").OleValue;
  var clmOrderStatus = radGridViewOrderLines.wValue(0, "Order Status").OleValue;
  if((aqObject.CompareProperty(clmOrderType, cmpEqual,"Normal Sale", true,3))&&(aqObject.CompareProperty(clmOrderStatus, cmpEqual,"Completed Order", true,3)))
  {
    Log.Checkpoint("Order Type and Order Status is correct")
  }
  else{
    Log.Error("Order Type and Order Status is not correct")
  }
}

Then("Order line status should be supply and correct supply quantity", function (){
  var radGridViewOrderLines = Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Bottom.panel4Content.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmLineItemStatus = radGridViewOrderLines.wValue(0, "Line Item Status").OleValue;
  var clmSupply = radGridViewOrderLines.wValue(0, "Supply").OleValue;
  if((aqObject.CompareProperty(clmLineItemStatus, cmpEqual,"Supply", true,3))&&(aqObject.CompareProperty(clmSupply, cmpEqual,totalQty, true,3)))
  {
    Log.Checkpoint("order line status and supply is correct")
  }
  else{
    Log.Error("order line status and supply is not correct")
  }
});

Then("On customer AR invoice document type entries should get added with correct details", function (customer){
  //closeOpenWizard();
  //openCustomerInformation(customer);
  clickTradingTab();
  clickAccountProfilesTab();
  openStreamlineSterlingLedger();
  clickLedgerTab();
  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTAccountsReceivables_Form.PTAccountsReceivables_Tabs.tabMain.PTAccountsReceivables_Form_PT_PTAccountsReceivables_Ledger_Tab.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger.PTAccountsReceivables_PT_PTAccountsReceivables_Ledger_PT_PairedGrids_InvoiceDetails.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var i = 0;

  for(i;i<radGridView.wRowCount;i++){
    if(radGridView.wValue(i,2).OleValue == docInvoice){
      let valueDisplayed = radGridView.wValue(i,7).OleValue; 
      let balanceDisplayed = radGridView.wValue(i,8).OleValue;
      if(valueDisplayed == (netValue+aqConvert.StrToInt(orderDispatchCharge)) && balanceDisplayed == (netValue+aqConvert.StrToInt(orderDispatchCharge))){
        Log.Checkpoint("Order details displayed are Correct");
      }
      else{
        Log.Error("Order details displayed are Incorrect");
      }
     }
    }
});

