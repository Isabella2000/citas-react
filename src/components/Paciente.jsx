import React from "react";

const Paciente = ({paciente}) => {

  // distructuring
  const{nombre, propietario, email, fecha, sintomas}=paciente

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl ml-5">
      <p className="font-bold mb-3 uppercase text-gray-700">
        Nombre: {""}
        <span className=" font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Propietario: {""}
        <span className=" font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Email: {""}
        <span className=" font-normal normal-case">
          {email}
        </span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Fecha alta: {""}
        <span className=" font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Sintomas: {""}
        <span className=" font-normal normal-case">
          {sintomas}
        </span>
      </p>
    </div>
  );
};

export default Paciente;
