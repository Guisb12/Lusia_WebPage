
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-secondary text-sm md:text-base mb-3 reveal">
          O futuro é hoje. Entra na tua universidade de sonho!
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-6 leading-tight reveal">
          LUSIA: A Inteligência Artificial que <br className="hidden md:block" />
          Transforma o Ensino em Portugal
        </h1>
        <p className="text-lg md:text-xl text-accent/80 mb-8 max-w-3xl mx-auto reveal">
          A ferramenta que simplifica a vida de quem vive a escola. Recupere o seu tempo e tenha sucesso na sala de aula!
        </p>
        
        <div className="mb-12 reveal">
          <div className="bg-primary-light p-4 rounded-2xl border border-secondary/20 shadow-[0_0_30px_rgba(94,182,230,0.2)] max-w-4xl mx-auto">
            {/* Placeholder for video or screenshot */}
            <div className="aspect-video bg-primary-light rounded-xl flex items-center justify-center border border-white/10">
              <p className="text-accent">Vídeo da LUSIA em ação</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal">
          <a href="#cta" className="btn-primary w-full sm:w-auto">
            Faz parte do futuro da Educação
          </a>
          <a href="#como-funciona" className="btn-secondary w-full sm:w-auto">
            Começar a usar
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
