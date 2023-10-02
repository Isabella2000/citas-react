import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import Header from "./components/Header";
import Home from "./Home";

function App() {
  const [pacientes, setPacientes] = useState([]);
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")); // si no hay nada en localstorash entonces deja un arreglo vacio, esa condicional no me esta sirviendo jum
      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);

  console.log(pacientes)

  const [paciente, setPaciente] = useState({});
  const [ingresar, setIngresar] = useState(false);

  

 

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <>
      {ingresar ? (
        <div className="container mx-auto mt-20">
          <Header ingresar={ingresar} setIngresar={setIngresar} />
          <div className="mt-12 md:flex">
            <Formulario
              pacientes={pacientes}
              setPacientes={setPacientes}
              paciente={paciente}
              setPaciente={setPaciente}
            />
            <ListadoPacientes
              pacientes={pacientes}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          </div>
        </div>
      ) : (
        <Home ingresar={ingresar} setIngresar={setIngresar} />
      )}
    </>
  );
}

export default App;
