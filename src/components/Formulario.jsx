import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(pacientes)
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  useEffect(()=>{
    if (Object.keys(paciente).length>0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
      setNombre(paciente.nombre)
    }
  },[paciente]);
  


  const generarID=()=>{
    const random= Math.random().toString(36).substr(2);
    const fecha=Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion del Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Tiene campos vacios");
      setError(true);
      return;  
    } 
    setError(false);


    const objetoPaciente={
      nombre, propietario, email, fecha, sintomas
    }

    if (paciente.id) {
      objetoPaciente.id=paciente.id

      // Editando
      const pacientesActualizados= pacientes.map(pacienteState=>pacienteState.id == paciente.id ?objetoPaciente:pacienteState)
    
      setPacientes(pacientesActualizados)
      setPaciente({})
    
    }else{
      // Nuevo registro
      objetoPaciente.id=generarID()
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar form
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg text-center mt-5 mb-10">
        Añade Pacientes y {""}
        <span className="text-orange-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error> <p>Todos los campos son obligatrios</p> </Error>}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            Nombre Mascota
          </label>
          <input
            id="mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            Nombre Propietario
          </label>
          <input
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            Email
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            Alta
          </label>
          <input
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            Sintomas
          </label>
          <textarea
            id="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            placeholder="Decribe los Sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md"
          />
        </div>
        <input
          type="submit"
          className="bg-orange-600 w-full p-3 text-white uppercase font-bold hover:bg-orange-700 cursor-pointer transition-all rounded-md"
          value={paciente.id?"Editar Paciente":"Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
