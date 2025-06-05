const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Lo que dicen nuestros <span className="text-primary">Clientes</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonio 1 */}
          <div className="bg-slate-800 p-8 rounded-xl shadow-2xl flex flex-col">
            <div className="p-0 flex-grow">
              <p className="text-gray-300 italic mb-6">
                "SISOS ha revolucionado nuestra gestión de SST. Ahora todo es más ágil y tenemos un control total."
              </p>
            </div>
            <div className="flex flex-col space-y-1.5 p-0 mt-auto">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-white mr-4">
                  AP
                </div>
                <div>
                  <h3 className="tracking-tight text-lg font-semibold text-gray-100">Ana Pérez</h3>
                  <p className="text-sm text-primary">Constructora Segura S.A.S.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonio 2 */}
          <div className="bg-slate-800 p-8 rounded-xl shadow-2xl flex flex-col">
            <div className="p-0 flex-grow">
              <p className="text-gray-300 italic mb-6">
                "La facilidad para el seguimiento de EPP y capacitaciones es increíble. ¡Recomendadísimo!"
              </p>
            </div>
            <div className="flex flex-col space-y-1.5 p-0 mt-auto">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-white mr-4">
                  CL
                </div>
                <div>
                  <h3 className="tracking-tight text-lg font-semibold text-gray-100">Carlos López</h3>
                  <p className="text-sm text-primary">Industrias Protegidas Ltda.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonio 3 */}
          <div className="bg-slate-800 p-8 rounded-xl shadow-2xl flex flex-col">
            <div className="p-0 flex-grow">
              <p className="text-gray-300 italic mb-6">
                "Implementar SISOS fue la mejor decisión. Cumplimos normativas sin estrés y mejoramos la seguridad."
              </p>
            </div>
            <div className="flex flex-col space-y-1.5 p-0 mt-auto">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-white mr-4">
                  SG
                </div>
                <div>
                  <h3 className="tracking-tight text-lg font-semibold text-gray-100">Sofía Gómez</h3>
                  <p className="text-sm text-primary">Servicios Integrales HSE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
