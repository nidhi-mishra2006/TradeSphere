import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},

  openSellWindow: (uid) => {},
  closeSellWindow: () => {},

  holdingsUpdated: 0,
  refreshHoldings: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedHolding, setSelectedHolding] = useState(null);

  const [holdingsUpdated, setHoldingsUpdated] = useState(0);

  const handleRefreshHoldings = () => {
    setHoldingsUpdated((prev) => prev + 1);
  };

  // BUY WINDOW
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setIsSellWindowOpen(false);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // SELL WINDOW
  const handleOpenSellWindow = (holding) => {
    setIsSellWindowOpen(true);
    setIsBuyWindowOpen(false);
    setSelectedHolding(holding);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedHolding(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,

        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,

        holdingsUpdated: holdingsUpdated,
        refreshHoldings: handleRefreshHoldings,
      }}
    >
      {props.children}

      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}

      {isSellWindowOpen && <SellActionWindow holding={selectedHolding} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;


