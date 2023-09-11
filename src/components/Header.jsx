function Header({ingresar, setIngresar}) {
  const handleIngresar = () => {
    setIngresar(false);
  };

  return (
    <>
      <div>
        <button onClick={handleIngresar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-md text-white p-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </div>
      <div>
        <h1 className="font-black text-5xl text-center md:w-1/2 mx-auto">
          Seguimiento Pacientes {/*acuerdate como poner el espacio jejje */}
          <span className="text-orange-600">Veterinaria</span>
        </h1>
      </div>
    </>
  );
}

export default Header;
