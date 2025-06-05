const Benefits = () => {
  return(
    <section id="benefits" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" >
          Beneficios Clave de <span >SISOS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <custom className="bg-slate-800 p-8 rounded-xl shadow-2xl hover:shadow-primary/30 transition-shadow duration-300 transform hover:-translate-y-1" >
            <div className="flex flex-col space-y-1.5 p-0 mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-10 w-10 text-primary" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="tracking-tight text-xl font-semibold text-gray-100">
                Registro de Empleado
              </h3>
            </div>
            <div className="p-0">
              <p className="text-sm text-gray-400">
                Gestiona fácilmente empleados y sus afiliaciones (EPS, ARL, etc.).
              </p>
            </div>
          </custom>
          <custom className="bg-slate-800 p-8 rounded-xl shadow-2xl hover:shadow-primary/30 transition-shadow duration-300 transform hover:-translate-y-1" >
          <div className="flex flex-col space-y-1.5 p-0 mb-4"><div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-10 w-10 text-primary" ><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg></div><h3 className="tracking-tight text-xl font-semibold text-gray-100">Listas de Verificación</h3></div><div className="p-0">
            <p className="text-sm text-gray-400">Crea y administra listas de verificación de seguridad personalizadas.</p></div></custom><custom className="bg-slate-800 p-8 rounded-xl shadow-2xl hover:shadow-primary/30 transition-shadow duration-300 transform hover:-translate-y-1" ><div className="flex flex-col space-y-1.5 p-0 mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-10 w-10 text-primary" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg></div><h3 className="tracking-tight text-xl font-semibold text-gray-100">Control de EPP</h3></div><div className="p-0"><p className="text-sm text-gray-400">Realiza seguimiento a la entrega y control de Elementos de Protección Personal.
                </p></div></custom><custom className="bg-slate-800 p-8 rounded-xl shadow-2xl hover:shadow-primary/30 transition-shadow duration-300 transform hover:-translate-y-1" ><div className="flex flex-col space-y-1.5 p-0 mb-4"><div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-10 w-10 text-primary" ><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path>
                </svg></div><h3 className="tracking-tight text-xl font-semibold text-gray-100">Evaluación de Estándares
                  </h3></div>
                <div className="p-0"><p className="text-sm text-gray-400">Evalúa y asegura el cumplimiento de los estándares de seguridad.</p></div></custom>
                <custom className="bg-slate-800 p-8 rounded-xl shadow-2xl hover:shadow-primary/30 transition-shadow duration-300 transform hover:-translate-y-1" ><div className="flex flex-col space-y-1.5 p-0 mb-4"><div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-10 w-10 text-primary" ><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></div><h3 className="tracking-tight text-xl font-semibold text-gray-100">Gestión de Capacitaciones</h3></div><div className="p-0"><p className="text-sm text-gray-400">Registra y programa capacitaciones en SST para tu personal.</p></div></custom><custom className="bg-slate-800 p-8 rounded-xl shadow-2xl hover:shadow-primary/30 transition-shadow duration-300 transform hover:-translate-y-1" ><div className="flex flex-col space-y-1.5 p-0 mb-4"><div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-10 w-10 text-primary" ><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path>
                </svg></div><h3 className="tracking-tight text-xl font-semibold text-gray-100">Cumplimiento Normativo</h3></div>
                <div className="p-0"><p className="text-sm text-gray-400">Asegura el cumplimiento de la normatividad vigente en salud y seguridad laboral.
            </p></div></custom></div></div>
    </section>
  );

};

export default Benefits;