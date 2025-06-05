const Results = () => {
  return(
    <section id="results" className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" >
            Resultados Medibles con <span >SISOS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-slate-700 rounded-xl shadow-lg" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-12 w-12 mx-auto mb-4 text-primary" >
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
            <p className="text-4xl font-bold mb-2" >
              40%
            </p>
            <p className="text-gray-300">
              Reducción en tiempos de gestión
            </p>
          </div>
          <div className="p-8 bg-slate-700 rounded-xl shadow-lg" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-12 w-12 mx-auto mb-4 text-primary" >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <p className="text-4xl font-bold mb-2" >99%</p>
            <p className="text-gray-300">Cumplimiento normativo asegurado</p>
          </div>
          <div className="p-8 bg-slate-700 rounded-xl shadow-lg" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-12 w-12 mx-auto mb-4 text-primary" >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <p className="text-4xl font-bold mb-2" >30%</p>
              <p className="text-gray-300">Mejora en la cultura de seguridad</p>
          </div>
        </div>
      </div>
    </section>
  );

};

export default Results;