import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://businessguruerp.com/BG_API_NEW/PRODUCT_STOCK_DISPLAY.php", {
      method: "POST",
      body: new URLSearchParams({
        appKeyCodeKey: "1011",
        firmCodeKey: "3",
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.text())
      .then((html) => {
        const parsedData = JSON.parse(html).map((item) => ({
          productCode: item.Product_Code || "-",
          productName: item.Product_Name || "N/A",
          groupName: item.Group_Name || "N/A",
          rate: item.Selling_Rate || "0",
          stock: item.Stock || "0",
          tax: item.Tax || "0",
          discount: item.Discount || "0",
        }));
        setData(parsedData);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};
