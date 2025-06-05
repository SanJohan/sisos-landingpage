const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-r from-primary to-purple-600"
      style={{
        background: "linear-gradient(to right, rgb(132, 136, 255), rgb(108, 111, 250))",
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Listo para optimizar tu gestión de SST?
        </h2>
        <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
          Solicita una demostración gratuita y descubre cómo SISOS puede transformar la seguridad y salud en tu trabajo.
        </p>
        <div>
          <button
            className="inline-flex items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 bg-white 
            text-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-lg shadow-xl hover:shadow-2xl transition-all 
            duration-300 transform hover:scale-105 text-lg"
            style={{ color: "rgb(132, 136, 255)" }}
          >
            Solicitar Demo Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
