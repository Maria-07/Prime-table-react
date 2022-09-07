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
          headerStyle={{ textAlign: "center", color: "red", width: "5rem" }}
        >
          <Column
            headerStyle={{
              textAlign: "center",
              color: "red",
              width: "5rem",
              backgroundColor: "teal",
            }}
            field="code"
            header="Code"
            sortable
          ></Column>
          <Column field="name" header="Name" sortable></Column>
          <Column field="category" header="Category" sortable></Column>
          <Column
            headerStyle={{ textAlign: "center", color: "red", width: "5rem" }}
            field="quantity"
            header="Quantity"
            sortable
          ></Column>
          <Column
            field="price"
            header="Price"
            // if the currency need to format
            body={priceBodyTemplate}
            sortable
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Shorting;
