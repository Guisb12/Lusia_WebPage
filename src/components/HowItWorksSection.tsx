
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Registe-se e Configure",
      description: "Registe-se e diga-nos se é professor ou aluno.",
      delay: 0
    },
    {
      number: "02",
      title: "Explore e Personalize",
      description: "Precisa de um resumo? Um plano de aula? Lusia trata disso!",
      delay: 0.2
    },
    {
      number: "03",
      title: "Acompanhe e Potencialize",
      description: "Em segundos tem o conteúdo pronto para si. Personalize, reutilize e melhore conforme precisa.",
      delay: 0.4
    }
  ];

  return (
    <section id="como-funciona" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-light opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title reveal">
            Comece a Revolucionar o Ensino com LUSIA em 3 Passos Simples
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-card p-8 relative reveal"
              style={{ animationDelay: `${step.delay}s` }}
            >
              {/* Step number with glow effect */}
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full flex items-center justify-center bg-secondary text-primary-foreground font-bold shadow-[0_0_15px_rgba(94,182,230,0.5)]">
                {step.number}
              </div>
              
              <h3 className="text-xl font-serif text-accent mt-4 mb-3">{step.title}</h3>
              <p className="text-accent/80">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Circle connecting all steps */}
        <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-[2px] bg-secondary/30 -translate-y-1/2 z-0"></div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
