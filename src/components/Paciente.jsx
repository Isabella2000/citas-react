import React from "react";

const Paciente = () => {
  return (
    <div className="mt-5 bg-white shadow-md px-5 py-10 rounded-xl ml-5">
      <p className="font-bold mb-3 uppercase text-gray-700">
        Nombre: {""}
        <span className=" font-normal normal-case">Isabella</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Propietario: {""}
        <span className=" font-normal normal-case">Juan</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Email: {""}
        <span className=" font-normal normal-case">
          collantemendeizsabella@gmail.com
        </span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Fecha alta: {""}
        <span className=" font-normal normal-case">10 Diciembre de 2022</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Sintomas: {""}
        <span className=" font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          distinctio molestiae deleniti, quaerat iusto quidem asperiores magnam
          in reprehenderit ad minima, ratione.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
