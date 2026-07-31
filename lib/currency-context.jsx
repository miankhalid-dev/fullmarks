"use client";

import { createContext, useContext, useMemo, useState } from "react";

const CURRENCIES = {
  GBP: { symbol: "£", rate: 1 },
  USD: { symbol: "$", rate: 1.27 },
  EUR: { symbol: "€", rate: 1.17 },
  INR: { symbol: "₹", rate: 105.4 },
  PKR: { symbol: "Rs", rate: 353.2 },
};

const CurrencyContext = createContext(null);

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("GBP");

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
      currencyOptions: Object.keys(CURRENCIES),
      formatPrice: (gbp) => {
        const c = CURRENCIES[currency];
        return c.symbol + (gbp * c.rate).toFixed(2);
      },
    }),
    [currency]
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
