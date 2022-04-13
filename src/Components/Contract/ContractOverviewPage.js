import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contract from "./Contract";

export default function ContractOverviewPage(props) {
  const [contracts, setContracts] = useState([
    {
      id: "",
      contract_name: "",
      contract_description: "",
      contract_plannedstartdate: "",
      contract_startdate: "",
      contract_plannedenddate: "",
      contract_enddate: "",
    },
  ]);

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    const fetchContracts = await fetch("http://localhost:8080/api/v1/contract");
    const contracts = await fetchContracts.json();
    console.log(contracts);
    setContracts(contracts);
  };

  return (
    <div>
      {contracts.map((contract) => {
        return (
          <div key={contract.id}>
          <Link to= {`/auftraege/${contract.id}`}>
            <Contract
              name={String(contract.contract_name)}
              description={String(contract.contract_description)}
              plannedstartdate={String(contract.contract_plannedstartdate)}
              startdate={String(contract.contract_startdate)}
              plannedenddate={String(contract.contract_plannedenddate)}
              enddate={String(contract.contract_enddate)}
            />
            </Link>
            <Link to="/neuerAuftrag"><button>+</button></Link>
     
          </div>
        );
      })}
    </div>
  );
}
