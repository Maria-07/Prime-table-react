import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../index.css";
import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";
import "./DataTableDemo.css";

const MultiSelectFIlter = () => {
  const [customers2, setCustomers2] = useState(null);
  const [filters1, setFilters1] = useState(null);
  const [filters2, setFilters2] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const [loading2, setLoading2] = useState(true);
  const representatives = [
    { name: "Amy Elsner", image: "amyelsner.png" },
    { name: "Anna Fali", image: "annafali.png" },
    { name: "Asiya Javayant", image: "asiyajavayant.png" },
    { name: "Bernardo Dominic", image: "bernardodominic.png" },
    { name: "Elwin Sharvill", image: "elwinsharvill.png" },
    { name: "Ioni Bowcher", image: "ionibowcher.png" },
    { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
    { name: "Onyama Limba", image: "onyamalimba.png" },
    { name: "Stephen Shaw", image: "stephenshaw.png" },
    { name: "XuXue Feng", image: "xuxuefeng.png" },
  ];
  const representatives2 = [
    { name: "Cammy Albares" },
    { name: "Mattie Poquette" },
  ];

  const statusOption = [
    {
      status: "new",
    },
    {
      status: "negotiation",
    },
    {
      status: "unqualified",
    },
    {
      status: "qualified",
    },
    {
      status: "renewal",
    },
  ];

  //   data fetch
  useEffect(() => {
    fetch("MultiSelect.json")
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setCustomers2(getCustomers(d));
        setLoading2(false);
      });
  }, []);

  console.log("customers2", customers2);

  const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
      d.date = new Date(d.date);
      return d;
    });
  };

  const representativeBodyTemplate = (rowData) => {
    const representative = rowData.representative;
    return (
      <React.Fragment>
        <img
          alt={representative.name}
          src={`images/avatar/${representative.image}`}
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          width={32}
          style={{ verticalAlign: "middle" }}
        />
        <span className="image-text">{representative.name}</span>
      </React.Fragment>
    );
  };
  const representativeBodyTemplate2 = (rowData) => {
    const representative = rowData.representatives2;
    console.log("rowdata", rowData.representative.name);
    return (
      <React.Fragment>
        <div>{rowData.representative.name}</div>
      </React.Fragment>
    );
  };

  // -----------------------------------------------------------------STatus--------------
  const StatusBody = (rowData) => {
    // console.log(rowData);
    // console.log("rowdata", rowData.status);
    return (
      <React.Fragment>
        <div>{rowData.status}</div>
      </React.Fragment>
    );
  };

  // -----------------------------------------------------------------STatus--------------

  const representativesItemTemplate = (option) => {
    return (
      <div className="p-multiselect-representative-option">
        <img
          alt={option.name}
          src={`images/avatar/${option.image}`}
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          width={32}
          style={{ verticalAlign: "middle" }}
        />
        <span className="image-text">{option.name}</span>
      </div>
    );
  };
  const representativesItemTemplate2 = (option) => {
    return (
      <div className="p-multiselect-representative-option">
        <span className="image-text">{option.name}</span>
      </div>
    );
  };

  // -----------------------------------------------------------------STatus--------------

  const StatusItemTemplate = (option) => {
    console.log(option);
    return (
      <div className="p-multiselect-representative-option">
        <span className="image-text">{option.status}</span>
      </div>
    );
  };

  const StatusRowFilterTemplate = (options) => {
    // console.log("option =", options);
    return (
      <MultiSelect
        value={options.value}
        options={statusOption}
        itemTemplate={StatusItemTemplate}
        onChange={(e) => options.filterApplyCallback(e.value)}
        optionLabel="name"
        placeholder="Any"
        className="p-column-filter"
        maxSelectedLabels={1}
      />
    );
  };

  // -----------------------------------------------------------------STatus--------------

  const representativeRowFilterTemplate = (options) => {
    // console.log("option =", options);
    return (
      <MultiSelect
        value={options.value}
        options={representatives}
        itemTemplate={representativesItemTemplate}
        onChange={(e) => options.filterApplyCallback(e.value)}
        optionLabel="name"
        placeholder="Any"
        className="p-column-filter"
        maxSelectedLabels={1}
      />
    );
  };
  const representativeRowFilterTemplate2 = (options) => {
    // console.log("option vcv", options.value);
    return (
      <MultiSelect
        value={options.value}
        options={representatives2}
        itemTemplate={representativesItemTemplate2}
        onChange={(e) => options.filterApplyCallback(e.value)}
        optionLabel="name"
        placeholder="Any"
        className="p-column-filter"
        maxSelectedLabels={1}
      />
    );
  };

  return (
    <div className="">
      <h1>Hi ! This is basic table</h1>
      <div className="my-10 p-10">
        <DataTable
          value={customers2}
          className="p-datatable-customers"
          dataKey="id"
          filters={filters2}
          responsiveLayout="scroll"
          filterDisplay="row"
          emptyMessage="No customers found."
        >
          <Column
            sortable
            header="Agent"
            filterField="representative"
            showFilterMenu={false}
            filterMenuStyle={{ width: "14rem" }}
            style={{ minWidth: "14rem" }}
            body={representativeBodyTemplate}
            filter
            filterElement={representativeRowFilterTemplate}
          />
          <Column
            sortable
            header="Status"
            filterField="status"
            showFilterMenu={false}
            filterMenuStyle={{ width: "14rem" }}
            style={{ minWidth: "14rem" }}
            body={StatusBody}
            filter
            filterElement={StatusRowFilterTemplate}
          />
          {/* <Column
            sortable
            field="name"
            header="Name"
            filterField="name"
            showFilterMenu={false}
            filterMenuStyle={{ width: "14rem" }}
            style={{ minWidth: "14rem" }}
            body={representativeBodyTemplate2}
            filter
            filterElement={representativeRowFilterTemplate2}
          /> */}
        </DataTable>
      </div>
    </div>
  );
};

export default MultiSelectFIlter;
