
const TestimonialsSection = () => {
  return (
    <section id="testemunhos" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title reveal">Educadores Portugueses Partilham a Sua Experiência com LUSIA</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(2)].map((_, index) => (
            <div 
              key={index} 
              className="glass-card p-8 reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-secondary">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <div className="text-accent font-medium">[Nome do Utilizador]</div>
                  <div className="text-accent/70 text-sm">[Cargo, Instituição]</div>
                </div>
              </div>
              
              <blockquote className="text-accent/90 italic">
                "Espaço para texto do testemunho. Aqui poderá ser adicionado o depoimento do utilizador sobre a sua experiência com a plataforma LUSIA."
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
