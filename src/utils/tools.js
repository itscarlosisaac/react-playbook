export const Tools = {
  toPrice: (price) => {
    return Intl.NumberFormat("en-US", { 
      style:"currency", 
      currency:"USD",
      currencyDisplay: "narrowSymbol",
    }).format(price)
  }
}