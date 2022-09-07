import logo from "./logo.svg";
import "./App.css";
import BasicTable from "./Pages/Basic_Table/BasicTable";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <div className="App">
      <BasicTable></BasicTable>
    </div>
  );
}

export default App;
