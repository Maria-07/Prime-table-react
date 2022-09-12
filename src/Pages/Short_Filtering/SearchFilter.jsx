import React from "react";

const SearchFilter = () => {
  return (
    <div>
      <div className="card">
        <h5>Filter Row</h5>
        <p>Filters are displayed inline within a separate row.</p>
        <DataTable
          value={customers2}
          paginator
          className="p-datatable-customers"
          rows={10}
          dataKey="id"
          filters={filters2}
          filterDisplay="row"
          loading={loading2}
          responsiveLayout="scroll"
          globalFilterFields={[
            "name",
            "country.name",
            "representative.name",
            "status",
          ]}
          header={header2}
          emptyMessage="No customers found."
        >
          <Column
            field="name"
            header="Name"
            filter
            filterPlaceholder="Search by name"
            style={{ minWidth: "12rem" }}
          />
          <Column
            header="Country"
            filterField="country.name"
            style={{ minWidth: "12rem" }}
            body={countryBodyTemplate}
            filter
            filterPlaceholder="Search by country"
          />
          <Column
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
            field="status"
            header="Status"
            showFilterMenu={false}
            filterMenuStyle={{ width: "14rem" }}
            style={{ minWidth: "12rem" }}
            body={statusBodyTemplate}
            filter
            filterElement={statusRowFilterTemplate}
          />
          <Column
            field="verified"
            header="Verified"
            dataType="boolean"
            style={{ minWidth: "6rem" }}
            body={verifiedBodyTemplate}
            filter
            filterElement={verifiedRowFilterTemplate}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default SearchFilter;
