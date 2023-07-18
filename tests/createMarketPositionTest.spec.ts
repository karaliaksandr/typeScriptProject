import { test, expect } from "@playwright/test";
import { LoginPage } from '../pages/login_page/login-page';
import { AddDepositPage } from "../pages/left_menu/supplementary_menu/supplementary-items/deposit/add-deposit-page";
import { LeftMenuPage } from "../pages/left_menu/left_menu";

import { PositionsPage } from "../pages/trade_watch/trade-watch-tabs/positions-tab";
import { TradeWatchPage } from "../pages/trade_watch/trade-watch";
import { MarketOrderPage } from "../pages/trade_watch/order/new-market-order";

test("Create market position test", async ({page}) =>{
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.clickLogIn();
    await loginPage.loginForUser("email", "password");

    const leftMenuPage = new LeftMenuPage(page);
    await leftMenuPage.expandMenu();
    
    const suppMenu = leftMenuPage.getSupplementaryMenu();
    const addDeposit = await suppMenu.openSuppMenuItem(new AddDepositPage(page));

    const isAddDepositTabSelected = await addDeposit.addDepositTabSelected();
    console.log('Is Add Deposit tab selected:', isAddDepositTabSelected);
    await addDeposit.editDepositAmount("1000000");
    await addDeposit.clickOnSubmitButton();
    await addDeposit.closeDeposit();

    const tradeWatch = new TradeWatchPage(page);
    await tradeWatch.ensureTradeWatchPanelOpen();
    const positionTab = await tradeWatch.switchToTab(new PositionsPage(page));

    const orderPage = positionTab.clickOrderButton(new MarketOrderPage(page));
});