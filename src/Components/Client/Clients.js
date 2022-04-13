import React, { useEffect } from "react";
import ClientElement from "./ClientElement";

export default function Clients() {
  const [clients, setClients] = React.useState([
    {
      cl_id: "x",
      cl_firstname: "ladet Kunden ein...",
      cl_lastname: "",
      cl_dob: "",
    },
  ]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/client");
      const json = await response.json();
      setClients(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      {clients.map((client) => {
        return (
          <div key={client.id}>
            <ClientElement
              firstName={client.cl_firstname}
              lastName={client.cl_lastname}
              dob={client.cl_dob}
            />
          </div>
        );
      })}
    </div>
  );
}
