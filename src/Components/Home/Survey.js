import Employees from "../../Employees";
import Clients from "../Client/Clients";
import ContractTable from "../Contract/ContractTable";
import NewsFeed from "./NewsFeed";

function Survey() {
  return (
    <div className="grid grid-cols-3 ">
      <div className="border-r-8 border-slate-500">
        <h1 className="text-center text-xl bg-slate-500">Aktuelle Aufträge</h1>
        <ContractTable />
      </div>
      <div className="border-x-8 border-slate-500">
        <h1 className="text-center text-xl bg-slate-500">Neuigkeiten</h1>
        <NewsFeed />
      </div>
      <div className="border-l-8 border-slate-500">
      <div className="h-1/3">
      <h1 className="text-center text-xl bg-slate-500">Kunden</h1>
      <Clients/>
      </div>
      <div className="h-1/3">
      <h1 className="text-center text-xl bg-slate-500">Mitarbeiter</h1>
      <Employees/>
          </div> 


      </div>
    </div>
  );
}

export default Survey;
