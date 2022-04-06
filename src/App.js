import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientsPage from "./Components/Client/ClientsPage";
import ContractPage from "./Components/Contract/ContractPage";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import SettingsPage from "./Components/Settings/SettingsPage";
import EmployeesPage from "./Employee/EmployeesPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auftraege" element={<ContractPage/>} />
        <Route path="/kunden" element={<ClientsPage/>}/>
        <Route path="/mitarbeiter" element={<EmployeesPage/>}/>
        <Route path="/einstellungen" element={<SettingsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
