
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-light py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/96b49e29-c8ad-4165-b7ac-3fa58fdff95b.png" 
                alt="LUSIA Logo" 
                className="h-10 mr-3" 
              />
              <span className="text-accent font-serif text-xl">LUSIA</span>
            </div>
            <p className="text-accent/70 text-sm">
              A ferramenta de IA que está a transformar a educação em Portugal.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-accent font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#funcionalidades" className="text-accent/70 hover:text-secondary transition-colors text-sm">Funcionalidades</a></li>
              <li><a href="#como-funciona" className="text-accent/70 hover:text-secondary transition-colors text-sm">Como Funciona</a></li>
              <li><a href="#precos" className="text-accent/70 hover:text-secondary transition-colors text-sm">Preços</a></li>
              <li><a href="#faq" className="text-accent/70 hover:text-secondary transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-accent font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent/70 hover:text-secondary transition-colors text-sm">Termos e Condições</a></li>
              <li><a href="#" className="text-accent/70 hover:text-secondary transition-colors text-sm">Política de Privacidade</a></li>
              <li><a href="#" className="text-accent/70 hover:text-secondary transition-colors text-sm">Política de Cookies</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-accent font-medium mb-4">Newsletter</h4>
            <p className="text-accent/70 text-sm mb-4">
              Receba novidades e dicas sobre como LUSIA pode potenciar a educação.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="O seu email" 
                className="bg-primary border border-accent/20 rounded-l-lg px-4 py-2 text-accent placeholder:text-accent/50 focus:outline-none focus:border-secondary flex-grow"
              />
              <button className="bg-secondary text-primary font-medium px-4 py-2 rounded-r-lg">
                Subscrever
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-accent/70 text-sm mb-4 md:mb-0">
            © {currentYear} LUSIA. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-4">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
              <a 
                key={platform} 
                href="#" 
                className="text-accent/70 hover:text-secondary transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-5 w-5"
                >
                  {platform === 'facebook' && (
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  )}
                  {platform === 'twitter' && (
                    <>
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </>
                  )}
                  {platform === 'instagram' && (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </>
                  )}
                  {platform === 'linkedin' && (
                    <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </>
                  )}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
