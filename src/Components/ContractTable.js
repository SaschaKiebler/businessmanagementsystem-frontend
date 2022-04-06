import React from "react";
import Contract from "./Contract";

export default class ContractTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contracts: [],
      DataisLoaded: false,
    };
  }

 
  componentDidMount() {
    fetch("http://localhost:8080/api/v1/contract")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          contracts: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, contracts } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Aufträge werden geladen.... </h1>
        </div>
      );

    return (
      <div>
        
            {contracts.map((row) => {
              return (
                <div key={row.id} className="text-2xl text-left">
                  <Contract name={row.contract_name} startdate={row.contract_plannedstartdate} enddate={row.contract_plannedenddate}/>
                </div>
              );
            })}
      </div>
    );
  }
}
