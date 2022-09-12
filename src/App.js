import "./App.css";
import BasicTable from "./Pages/Basic_Table/BasicTable";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Shorting from "./Pages/Short_Filtering/Shorting";
import Filter from "./Pages/Short_Filtering/Filter";
import MultiSelectFIlter from "./Pages/Short_Filtering/MultiSelectFIlter";
import ListView from "./Pages/ListView/ListView";

function App() {
  return (
    <div className="App">
      {/* <BasicTable></BasicTable>
      <Shorting></Shorting>
      <Filter></Filter> */}
      <MultiSelectFIlter></MultiSelectFIlter>
      {/* <ListView></ListView> */}
    </div>
  );
}

export default App;
