import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
const Shorting = () => {
  const [products, setProducts] = useState([]);

  //   data fetch
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((d) => {
        console.log(d.data);
        setProducts(d.data);
      });
  }, []);

  //   Dynamicaly column Header
  const columns = [
    { field: "code", header: "Code" },
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "quantity", header: "Quantity" },
    { field: "price", header: "Price" },
  ];

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column key={col.field} field={col.field} header={col.header} sortable />
    );
  });

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.price);
  };

  return (
    <div>
      <h1>Hi ! This is Shorting table</h1>
      <div className="my-10 p-10">
        {" "}
        <DataTable
          value={products}
          responsiveLayout="scroll"
          size="small"
          style={{ width: "70vw", margin: "auto", textAlign: "center" }}
          showGridlines
        >
          {dynamicColumns}
        </DataTable>
      </div>
    </div>
  );
};

export default Shorting;
