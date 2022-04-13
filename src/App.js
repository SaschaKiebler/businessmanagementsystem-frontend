import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientsPage from "./Components/Client/ClientsPage";
import ContractOverviewPage from "./Components/Contract/ContractOverviewPage";
import ContractPage from "./Components/Contract/ContractPage";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import SettingsPage from "./Components/Settings/SettingsPage";
import EmployeesPage from "./Components/Employee/EmployeesPage";
import NewContract from "./Components/Contract/NewContract";

function App() {
  return (
    <Router>
      <div className="sticky top-0 z-50"><Header/></div>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auftraege/:id" element={<ContractPage/>} />
        <Route path="/auftraege" element={<ContractOverviewPage/>} />
        <Route path="/kunden" element={<ClientsPage/>}/>
        <Route path="/mitarbeiter" element={<EmployeesPage/>}/>
        <Route path="/einstellungen" element={<SettingsPage/>}/>
        <Route path="/neuerAuftrag" element={<NewContract/>}/>
      </Routes>
    </Router>
  );
}

export default App;
