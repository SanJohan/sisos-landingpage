const Navbar = () => {

    return(
      <nav className='nav sticky top-0 z-50 py-4 backdrop-blur-md bg-slate-900/80  shadow-lg'>
        <div className='container px-4 mx-auto relative text-sm'>
          <div className='flex justify-between items-center md:px-18'>
            <div className='flex items-center flex-shrink-0  space-x-3'>
              <span className=' text-3xl font-bold text-primary'>SISOS</span>
            </div>
            <div className='flex justify-center items-center'>
              <a href="#" className='inline-flex items-center justify-center text-sm ring-offset-background 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                  disabled:pointer-events-none disabled:opacity-50 h-10 bg-primary hover:bg-primary/90 text-white font-semibold py-3 
                  px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105'>
                Solicitar Demo
              </a>
            </div>
          </div>
        </div>      
      </nav>
    )
}

export default Navbar;