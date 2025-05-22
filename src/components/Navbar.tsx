
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 mx-4 md:mx-8 lg:mx-16 my-4 ${
      isScrolled ? "navbar-glass" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/96b49e29-c8ad-4165-b7ac-3fa58fdff95b.png" 
            alt="LUSIA Logo" 
            className="h-10 mr-3" 
          />
          <span className="text-accent font-serif text-xl">LUSIA</span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-accent p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#funcionalidades" className="text-accent hover:text-secondary transition-colors">Funcionalidades</a>
          <a href="#como-funciona" className="text-accent hover:text-secondary transition-colors">Como Funciona?</a>
          <a href="#testemunhos" className="text-accent hover:text-secondary transition-colors">Testemunhos</a>
          <a href="#precos" className="text-accent hover:text-secondary transition-colors">Preços</a>
          <a href="#faq" className="text-accent hover:text-secondary transition-colors">FAQ</a>
        </div>

        <div className="hidden md:block">
          <a href="#cta" className="btn-primary">Começar agora</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
