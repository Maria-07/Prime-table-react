import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const BasicTable = () => {
  const [products, setProducts] = useState([]);

  //   Dynamicaly column Header
  const columns = [
    { field: "code", header: "Code" },
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "quantity", header: "Quantity" },
    { field: "price", header: "Price" },
  ];

  const dynamicColumns = columns.map((col, i) => {
    return <Column key={col.field} field={col.field} header={col.header} />;
  });

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((d) => {
        console.log(d.data);
        setProducts(d.data);
      });
  }, []);

  return (
    <div>
      <h1>Hi ! This is basic table</h1>

      <div className="my-10 p-10">
        <DataTable
          size="small"
          style={{ width: "70vw", margin: "auto" }}
          showGridlines
          value={products}
          sortable
          responsiveLayout="scroll"
        >
          {dynamicColumns}
        </DataTable>
      </div>
    </div>
  );
};

export default BasicTable;
