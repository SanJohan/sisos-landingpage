const HeroSection = () => {
  return (
    <section
      className="py-20 md:py-32 bg-cover bg-center relative text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), 
        url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)`
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transforma la gestión de <span className="text-primary">SST</span> en tu empresa
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-300">
          SISOS es la solución integral para optimizar el cumplimiento normativo y proteger a tus empleados de manera eficiente y moderna.
        </p>
        <div>
          <button
            className="inline-flex items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 bg-primary hover:bg-primary/90
            text-white font-bold py-4 px-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Descubre SISOS Ahora
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
