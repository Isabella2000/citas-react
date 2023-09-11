import React from "react";
import App from "./App.jsx";
import { useState, useEffect } from "react";

const Home = () => {
  // const [ingresar, setIngresar] = useState(false);

  return (
    <>
      <section className="flex justify-center items-center flex-wrap my-10">
        <div className="flex justify-center items-start flex-col w-auto me-9">
          <span className="text-orange-400 font-semibold text-start mb-5">
            By Isabella Collante Mendez
          </span>

          <h1 className="font-semibold text-5xl text-start mb-5">
            Amamos <span className="text-orange-400">a tu Mascota</span>
          </h1>
          <h4 className="font-semibold text-2xl text-start   mb-5">
            Estamos para cuidar y curar a tu{""}
            <span className="text-orange-400"> peludito</span>
          </h4>
          <p className="font-semibold text-base text-start mb-5">
            Llena el formulario para apartar cita y poder curar a tus peluditos
          </p>
          {/* <a
            className="bg-orange-500 p-3 w-48 text-white font-bold hover:bg-orange-600 cursor-pointer transition-all rounded-md text-center"
          >{ingresar?<App/>:<Home/>} INGRESAR</a>  */}
        </div>

        <div>
          <img src="./assets/img/pet.png" alt="imagen de perrito" />
        </div>
      </section>

      <section className="bg-orange-200 flex justify-center items-center flex-wrap my-10">
        <div>
          <img
            className="m-10"
            src="./assets/img/pet2.png"
            alt="imagen de perrito"
          />
        </div>

        <div className="flex justify-center items-start flex-col w-auto me-9">
          <h1 className="font-semibold text-5xl text-start  mb-5">
            Queremos que tu pequeño este{" "}
            <span className="text-orange-400">feliz</span>
          </h1>
          <h4 className=" text-2xl text-start   mb-5">
            Le damos lo mejor a tu mascota como:
          </h4>
          <ul
            className="font-medium text-base text-start mb-5 marker:text-orange-700 list-disc pl-5 space-y-3"
            role="list"
          >
            <li>Skilled Personnel</li>
            <li>Best Veterinarians</li>
            <li>Pets Care</li>
            <li>Quality Food</li>
          </ul>
          <input
            type="submit"
            className="bg-orange-500 p-3 w-48 text-white font-bold hover:bg-orange-600 cursor-pointer transition-all rounded-md text-center"
            value={"INGRESE"}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
