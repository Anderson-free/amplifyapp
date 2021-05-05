import { HashRouter, Route } from "react-router-dom";
import React from "react";
import { ChartsView } from "./swap_page/components/charts";

import { WalletProvider } from "./swap_page/context/wallet";
import { ConnectionProvider } from "./swap_page/utils/connection";
import { AccountsProvider } from "./swap_page/utils/accounts";
import { CurrencyPairProvider } from "./swap_page/utils/currencyPair";
import { MarketProvider } from "./swap_page/context/market";
import { PoolOverview } from "./swap_page/components/pool/view";
import { ExchangeView } from "./swap_page/components/exchange";

const Routes = () => {
  return (
    <>
      <HashRouter basename={"/"}>
        <ConnectionProvider>
          <WalletProvider>
            <AccountsProvider>
              <MarketProvider>
                <CurrencyPairProvider>
                  <ExchangeView />
                </CurrencyPairProvider>
              </MarketProvider>
            </AccountsProvider>
          </WalletProvider>
        </ConnectionProvider>
      </HashRouter>
    </>
  );
}
export default Routes
