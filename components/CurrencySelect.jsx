"use client";

import { useCurrency } from "@/lib/currency-context";

export default function CurrencySelect() {
  const { currency, setCurrency, currencyOptions } = useCurrency();

  return (
    <select
      className="currency-select"
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      aria-label="Currency"
    >
      {currencyOptions.map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </select>
  );
}
