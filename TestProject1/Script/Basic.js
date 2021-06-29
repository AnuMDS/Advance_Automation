  
Given("I am logged in Ingenta Commercial Application", function Login(){
 // VideoRecorder.Start();

  TestedApps.Advance_Startup_TS_7.Run();

  Aliases.Advance_Startup_TS_7.LoginForm.gbTrusted.txtUserName.Click();

  Aliases.Advance_Startup_TS_7.LoginForm.gbTrusted.txtUserName.SetText("Test_User");

  Aliases.Advance_Startup_TS_7.LoginForm.gbTrusted.txtPassword.Click();
 
  Aliases.Advance_Startup_TS_7.LoginForm.gbTrusted.txtPassword.SetText(Project.Variables.Password);

  Aliases.Advance_Startup_TS_7.LoginForm.cmdOK.ClickButton();
  
  Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm", 30000);
  Aliases.Aptify_Shell.AptifyShellForm.Maximize();
 
});

Given("I am logged into Ingenta Commercial Application as Admin", function (){
 // VideoRecorder.Start();

  TestedApps.Advance_Startup_TS_7.Run();

  Aliases.Advance_Startup_TS_7.LoginForm.gbTrusted.txtUserName.Click();

  Aliases.Advance_Startup_TS_7.LoginForm.gbTrusted.txtUserName.SetText("Autotest_Admin1");

  Aliases.Advance_Startup_TS_7.LoginForm.gbTrusted.txtPassword.Click();
 
  Aliases.Advance_Startup_TS_7.LoginForm.gbTrusted.txtPassword.SetText(Project.Variables.AdminPassword);

  Aliases.Advance_Startup_TS_7.LoginForm.cmdOK.ClickButton();
  
  Sys.WaitProcess("Aliases.Aptify_Shell.dlg", 10000);
  if(Aliases.Aptify_Shell.dlg.Exists){
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
  }
    
  Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm", 30000);
  if(Aliases.Aptify_Shell.dlg.Exists){
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.Maximize();
});

AfterScenario(function (scenario){
 Sys.Process("Aptify Shell").Terminate();
// VideoRecorder.Stop();
})

When("I click on Gateway Administration", function (){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Gateway Administration");
});

Then("I click on Orders", function clickOrders(){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Orders");
  Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard", 5000);
});

When("I click on Orders", function (){
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItemXY("advance> Home|Orders", 58, 7);
});

When("I click on Sales & Marketing", function clickSalesAndMarketing(){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Sales & Marketing");
});

When("I click on Customer Management", function clickCustomerManagement(){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Customer Management");
});

When("I click on Product Management", function clickProductManagement(){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Product Management");
});

When("I click on Customer Service", function clickCustomerService (){
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Customer Services");
});

Then("I click on Customer Service", function (){
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Customer Services");
});

Then("I Click on Orders", function (){
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Orders");
});

When("I click on Inventory", function (){
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Inventory");
});

Then("I navigate to Orders Homepage", function (){
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.Close();
  }
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Orders");
});

When("I click on Inventory Lookups", function (){
Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Inventory Lookups");
});

When("I click on Standing Order Administration from folder list", function (){
  let standingOrderAdm = Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Standing Order Administration")
});

When("I click on Product Lookups from folder list", function (){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Product Lookups")
});

When("I click on Standing Order Administration", function (){
 Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Standing Order Administration");
});

When("I click Accounts Receivable Administration", function (){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.outlineitemAccountsReceivableAdm.Click();
});

Given("I am logged in Ingenta Commercial Application as Admin", function (){
 // VideoRecorder.Start();

  TestedApps.Advance_Startup_TS_7.Run();

  Aliases.Advance_Startup_TS_7.LoginForm.gbTrusted.txtUserName.Click();

  Aliases.Advance_Startup_TS_7.LoginForm.gbTrusted.txtUserName.SetText("Autotest_Admin1");

  Aliases.Advance_Startup_TS_7.LoginForm.gbTrusted.txtPassword.Click();
 
  Aliases.Advance_Startup_TS_7.LoginForm.gbTrusted.txtPassword.SetText("T3stT3stT3st");

  Aliases.Advance_Startup_TS_7.LoginForm.cmdOK.ClickButton();
    if(Aliases.Aptify_Shell.dlg.Exists){
    Aliases.Aptify_Shell.dlg.btnOK.ClickButton();
  }
  Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm", 30000);
  Aliases.Aptify_Shell.AptifyShellForm.Maximize();
});

