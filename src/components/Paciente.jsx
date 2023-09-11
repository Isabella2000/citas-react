import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const MySwal = withReactContent(Swal)

  // distructuring
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar=()=>{
    const respuesta= Swal.fire({
      title: 'Desea eliminar este registro?',
      text: "Se eliminara del localStorage",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El paciente ha sido eliminado.',
          'success'
        )
        eliminarPaciente(id)
      }
    })
    
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
          className="py-2 px-10 bg-orange-600 rounded-md font-bold text-white uppercase hover:bg-orange-700"
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
