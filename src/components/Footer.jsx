const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1 */}
          <div>
            <p className="text-xl font-bold mb-2" style={{ color: "rgb(132, 136, 255)" }}>
              SISOS
            </p>
            <p className="text-sm">Transformando la gestión de Seguridad y Salud en el Trabajo.</p>
          </div>

          {/* Columna 2 */}
          <div>
            <p className="font-semibold text-gray-200 mb-3">Enlaces Rápidos</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#benefits" className="hover:text-primary transition-colors">Beneficios</a></li>
              <li><a href="#results" className="hover:text-primary transition-colors">Resultados</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonios</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <p className="font-semibold text-gray-200 mb-3">Síguenos</p>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/jorge-alexander-urrea-calderon-33477b308/" target="_blank" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              

              {/* Facebook */}
              <a href="https://www.facebook.com/devnestinnova" target="_blank"  aria-label="Facebook" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/devnest_innova?igsh=YXk2N292cmxjaDRp" target="_blank"  aria-label="Instagram" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>© 2025 SISOS. Todos los derechos reservados.</p>
          <p>
            Diseñado con <span role="img" aria-label="love">❤️</span> por un equipo comprometido con tu seguridad.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
