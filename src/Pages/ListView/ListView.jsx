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

const ListView = () => {
  const [ListData, setListData] = useState([]);
  //   console.log("List Data", ListData);
  const [loading2, setLoading2] = useState(true);

  const [filters, setFilters] = useState({
    Patients: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    Status: { value: null, matchMode: FilterMatchMode.IN },
    pos: { value: null, matchMode: FilterMatchMode.IN },
  });

  const filterOption = [
    { Status: "hold" },
    { Status: "Scheduled" },
    { Status: "Rendered" },
  ];
  const posfilterOption = [
    { pos: "telehealth" },
    { pos: "office" },
    { pos: "School" },
  ];

  //   fetch data
  useEffect(() => {
    fetch("ListViewData.json")
      .then((res) => res.json())
      .then((d) => {
        setListData(d);
        setLoading2(false);
      });
  }, []);

  const StatusRepresentativeBodyTemplate = (rowData) => {
    // console.log("rowData", rowData.Status);
    return <React.Fragment>{rowData.Status}</React.Fragment>;
  };
  const PosRepresentativeBodyTemplate = (rowData) => {
    // console.log("rowData", rowData.Status);
    return <React.Fragment>{rowData.pos}</React.Fragment>;
  };

  const representativesItemTemplate = (option) => {
    // console.log("option =", option.Status);
    return (
      <div className="p-multiselect-representative-option">{option.Status}</div>
    );
  };
  const PosRepresentativesItemTemplate = (option) => {
    // console.log("option =", option.Status);
    return (
      <div className="p-multiselect-representative-option">{option.pos}</div>
    );
  };

  const representativeRowFilterTemplate = (options) => {
    console.log("1. option =", options.value);
    return (
      <MultiSelect
        value={options.value}
        options={filterOption}
        itemTemplate={representativesItemTemplate}
        onChange={(e) => {
          options.filterApplyCallback(e.value);
        }}
        optionLabel="Status"
        placeholder="Any"
        className="p-column-filter"
        maxSelectedLabels={1}
      />
    );
  };
  const posRepresentativeRowFilterTemplate = (options) => {
    console.log("2. option =", options);
    return (
      <MultiSelect
        value={options.value}
        options={posfilterOption}
        itemTemplate={PosRepresentativesItemTemplate}
        onChange={(e) => options.filterApplyCallback(e.value)}
        optionLabel="pos"
        placeholder="Any"
        className="p-column-filter"
        maxSelectedLabels={1}
      />
    );
  };

  return (
    <div>
      <h1>Hi ! This is List View Part</h1>
      <div className="my-10 p-10">
        <DataTable
          value={ListData}
          className="p-datatable-customers"
          dataKey="id"
          filters={filters}
          responsiveLayout="scroll"
          filterDisplay="row"
          emptyMessage="No customers found."
        >
          <Column
            field="Status"
            sortable
            header="Status"
            filterField="Status"
            showFilterMenu={false}
            filterMenuStyle={{ width: "14rem" }}
            style={{ minWidth: "14rem" }}
            body={StatusRepresentativeBodyTemplate}
            filter
            filterElement={representativeRowFilterTemplate}
          />
          <Column
            field="pos"
            sortable
            header="pos"
            filterField="pos"
            showFilterMenu={false}
            filterMenuStyle={{ width: "14rem" }}
            style={{ minWidth: "14rem" }}
            body={PosRepresentativeBodyTemplate}
            filter
            filterElement={posRepresentativeRowFilterTemplate}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default ListView;
