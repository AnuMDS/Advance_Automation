function Test1()
{
  var sdates = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries_View_Container_1.WinFormsObject("enbBrowser").WinFormsObject("EntityBrowser_Fill_Panel").WinFormsObject("SplitContainer1").WinFormsObject("SplitterPanel", "").WinFormsObject("lvwMain").wValue
  Log.Message(sdates)
  let formTemplateForm = Aliases.Aptify_Shell.FormTemplateForm;
  let pageTab = formTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.pagetabGeneral;
  pageTab.Click();
  pageTab.ClickR(13, 6);
  formTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.toolbar.buttonSaveRecord.ClickButton();
  formTemplateForm.titlebar.buttonClose.ClickButton();
  
  
}

function use(){
 Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Inventory");
 Log.Message(Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").WndCaption); 
 
 Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Customer Services");
  Log.Message(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.WinFormsObject("AptifyDashLayout", "", 3).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").WndCaption);
  
 Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Orders");
 Log.Message(Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 2).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").WndCaption); 
//
// Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Standing Order Administration");
//  Log.Message(Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 3).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").WndCaption); 
//
// Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Sales & Marketing");
//  Log.Message(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.WinFormsObject("AptifyDashLayout", "", 2).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").WndCaption);
}

function getCaption(){
    Log.Message(Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").WndCaption); 
 
  // Log.Message(Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 5).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").WndCaption); 
 
    Log.Message(Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 3).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").WndCaption); 
 
    Log.Message(Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 2).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").WndCaption); 
  
    Log.Message(Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 6).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").WndCaption);    
 
}


var orderDashboardCaption;
var inventoryDashboardCaption;
var customerServicesDashboardCaption;

function getInventoryDashboardCaption(){
  let dashboardCaption = Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").WndCaption;
  inventoryDashboardCaption = dashboardCaption;
}

//function getOrderDashboardCaption(){
  //let dashboardCaption = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblTitle.Value;
  //orderDashboardCaption = dashboardCaption;
  //Log.Message(dashboardCaption);
//}

//function getCustomerServicesDashboardCaption(){
  //let dashboardCaption = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblTitle.Caption;
 // customerServicesDashboardCaption = dashboardCaption;
  //Log.Message(customerServicesDashboardCaption);
//}

When("I check if Orders has default dashboard or set to default dashboard", function (){

  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Orders");

  let dashboardCaption1 = Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").Text.OleValue;
  Log.Message(dashboardCaption1);
  if(dashboardCaption1 == "advance> Order Management Dashboard"){
    Log.Checkpoint("Order dashboard displayed is Correct");
  }
  else{
    Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblOptions.Click();
    Sys.Process("Aptify Shell").Popup("Context").MenuItem("Switch Dashboard").Click();
    Aliases.Aptify_Shell.Popup("Switch Dashboard").MenuItem("advance> Order Management Dashboard").Click(); 
    
    Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager", 6000);
     
    Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblOptions").Click();
    Sys.Process("Aptify Shell").Popup("Context").MenuItem("Set as Default").Click();
  }
  
});



When("I check if Customer Services has default dashboard or set to default dashboard", function (){ 
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Customer Services");
  //getCustomerServicesDashboardCaption();
  let dashboardCaption = Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").Caption;
  customerServicesDashboardCaption = dashboardCaption;
  Log.Message(customerServicesDashboardCaption);

  if(customerServicesDashboardCaption == "advance> Customer Services"){
    Log.Checkpoint("Customer Services dashboard displayed is Correct");
  }
  else{
    Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblOptions.Click();
    Sys.Process("Aptify Shell").Popup("Context").MenuItem("Switch Dashboard").Click();  
    Aliases.Aptify_Shell.Popup("Switch Dashboard").MenuItem("advance> Customer Services").Click();  
    
    Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager", 6000);
    
    Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblOptions").Click();
    Sys.Process("Aptify Shell").Popup("Context").MenuItem("Set as Default").Click();
  }
});

When("I check if Inventory has default dashboard or set to default dashboard", function (){
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.outlineitemInventory.DblClick(69, 7);
  let lblInventory = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblTitle").WndCaption;

  if(lblInventory == "advance> Inventory Management")
  {
   Log.Checkpoint("Inventory dashboard displayed is Correct");
  }
  else{
    Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblOptions.Click();
    Sys.Process("Aptify Shell").Popup("Context").MenuItem("Switch Dashboard").Click();
    Aliases.Aptify_Shell.Popup("Switch Dashboard").MenuItem("advance> Inventory Management").Click(); 
    
    Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager", 6000);
     
    Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblOptions").Click();
    Sys.Process("Aptify Shell").Popup("Context").MenuItem("Set as Default").Click();
  
  
  }
});


When("I check if Sales & Marketing has default dashboard or set to default dashboard", function (){ 
 Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Sales & Marketing");
  if(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblTitle.WndCaption == "Sales & Marketing"){
    Log.Checkpoint("Sales & Marketing dashboard displayed is Correct");
  }
  else{
    Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblOptions.Click();
    Sys.Process("Aptify Shell").Popup("Context").MenuItem("Switch Dashboard").Click();  
    Aliases.Aptify_Shell.Popup("Switch Dashboard").MenuItem("Sales  Marketing").Click();  
    
    Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager", 6000);
    
    Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblOptions").Click();
    Sys.Process("Aptify Shell").Popup("Context").MenuItem("Set as Default").Click();
  }
});

When("I check if Standing Order Administration has default dashboard or set to default dashboard", function (){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Standing Order Administration");
    
  if(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblTitle.WndCaption == "Standing Orders"){
    Log.Checkpoint("Standing Orders dashboard displayed is Correct");
  }
  else{
    Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblOptions.Click();
    Sys.Process("Aptify Shell").Popup("Context").MenuItem("Switch Dashboard").Click();  
    Aliases.Aptify_Shell.Popup("Switch Dashboard").MenuItem("Standing Orders").Click();  
    
    Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager", 6000);
    
    Sys.Process("Aptify Shell").WinFormsObject("AptifyShellForm").WinFormsObject("pnlDisplay").WinFormsObject("DashboardManager").WinFormsObject("AptifyDashLayout", "", 1).WinFormsObject("pnlToolBar").WinFormsObject("lblOptions").Click();
    Sys.Process("Aptify Shell").Popup("Context").MenuItem("Set as Default").Click();
  } 
});
