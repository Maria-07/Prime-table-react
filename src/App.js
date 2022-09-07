import logo from "./logo.svg";
import "./App.css";
import BasicTable from "./Pages/Basic_Table/BasicTable";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Shorting from "./Pages/Short_Filtering/Shorting";

function App() {
  return (
    <div className="App">
      <BasicTable></BasicTable>
      <Shorting></Shorting>
    </div>
  );
}

export default App;
