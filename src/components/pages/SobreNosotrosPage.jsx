function SobreNosotrosPage() {
  return (
    <main className="w-full bg-white mt-0">

      <div className="max-w-4xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-0 items-center">

        {/* IMAGEN IZQUIERDA */}
        <div className="flex justify-center md:justify-start md:-ml-10">
          <div
            className="
            w-[300px] h-[300px]
            rounded-full 
            bg-[#ffcc80]
            border-4 border-[#c62828]
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            flex items-center justify-center overflow-hidden
          "
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3595/3595454.png"
              alt="Ohana Pizza"
              className="w-[85%] h-[85%] object-contain"
            />
          </div>
        </div>

        {/* TEXTO DERECHA — CENTRADO */}
        <div className="text-left md:ml-10 -mt-2">
          <h2 className="text-4xl font-extrabold text-black mb-3">
            Sobre Nosotros
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed mb-3">
            En <strong>Ohana Pizzas</strong>, preparamos cada pizza con amor, tradición
            y los ingredientes más frescos...
          </p>

          <p className="text-lg text-gray-800 leading-relaxed mb-3">
            Nuestro objetivo es simple:{" "}
            <strong className="text-[#c62828]">
              que cada bocado sea inolvidable.
            </strong>
          </p>

          <p className="text-xl font-bold text-[#c62828]">
            ¡Porque en OHANA, la familia siempre va primero!
          </p>
        </div>

      </div>
    </main>
  );
}

export default SobreNosotrosPage;
