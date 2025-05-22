
const CtaSection = () => {
  return (
    <section id="cta" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-light to-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-30"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 reveal">
          <h2 className="section-title">Pronto para Elevar o Nível da Educação com LUSIA?</h2>
          <p className="section-subtitle">Junte-se à nossa comunidade e vamos criar o futuro!</p>
        </div>
        
        <div className="reveal">
          <a 
            href="#" 
            className="btn-primary text-lg px-8 py-4 shadow-[0_0_20px_rgba(94,182,230,0.3)]"
          >
            Crie a Sua Conta LUSIA Gratuitamente!
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
