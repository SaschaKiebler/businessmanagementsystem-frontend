import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ContractOverviewPage from "./ContractOverviewPage";

export default function ContractPage() {
  const { id } = useParams();

  const  [contract, setContract] = useState(
    [
      {
        id: "",
        contract_name: "",
        contract_description: "",
        contract_plannedstartdate: "",
        contract_startdate: "",
        contract_plannedenddate: "",
        contract_enddate: "",
      },
    ]
  );

  useEffect(() => {
    fetchContract();
  },[id]);

  const fetchContract = async () => {
    const fetchContract = await fetch(
      `http://localhost:8080/api/v1/contract/get/${id}`
    );
    const fetchedContract = await fetchContract.json();
    setContract(fetchedContract);
  };

  return (
    <div className="grid grid-cols-2">
      <div className="w-full">
        <ContractOverviewPage/>  
      </div>
      <div className="sticky text-left pl-2 ">
      <h1 className="text-3xl"> test{contract.contract_name}</h1>
      <p>Beschreibung: {contract.contract_description}</p>
      <h2>Geplanter Start: {contract.contract_plannedstartdate}</h2>
      <h2>Geplantes Ende: {contract.contract_plannedenddate}</h2>
      <h2>Gestartet am {contract.contract_startdate}</h2>
      <h2>Abgeeschlossen am {contract.contract_enddate}</h2>
      <Link to="/neuerAuftrag"><button>+</button></Link>
      </div>
    </div>
  );
}
