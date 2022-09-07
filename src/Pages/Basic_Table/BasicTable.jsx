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

      <div className=" bg-red-500 text-green-500">
        <DataTable value={products} responsiveLayout="scroll">
          <Column className="" field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default BasicTable;
