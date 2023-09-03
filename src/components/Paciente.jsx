import React from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  // distructuring
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar=()=>{
    const respuesta=confirm("Desea eliminar este registro?");
    if (respuesta) {
      eliminarPaciente(id)
      
    }
  }

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
        <span className=" font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Fecha alta: {""}
        <span className=" font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Sintomas: {""}
        <span className=" font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 rounded-md font-bold text-white uppercase hover:bg-indigo-700"
          onClick={()=>setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 rounded-md font-bold text-white uppercase hover:bg-red-700"
          onClick={handleEliminar} 
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
