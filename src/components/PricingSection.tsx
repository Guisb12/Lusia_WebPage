
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      description: "Para experimentar",
      price: "0€",
      period: "",
      features: [
        "Até 5 perguntas por dia",
        "Respostas básicas",
        "Acesso à comunidade",
      ],
      cta: "Começar Agora",
      popular: false,
      delay: 0
    },
    {
      name: "Pro",
      description: "Para estudantes e profissionais",
      price: "6.99€",
      period: "/mês",
      yearlyPrice: "59.99€",
      yearlyPeriod: "/ano",
      features: [
        "Perguntas ilimitadas",
        "Criação de documentos variados",
        "Resposta rápida e direta",
        "Acesso prioritário",
        "Suporte personalizado"
      ],
      cta: "Obter Pro",
      popular: true,
      delay: 0.2
    },
    {
      name: "Teacher",
      description: "Para educadores",
      price: "",
      period: "",
      features: [
        "Todas as funcionalidades do Pro",
        "Colaboração entre turmas",
        "Ferramentas de avaliação avançadas",
        "Integração com plataformas escolares"
      ],
      cta: "Brevemente",
      disabled: true,
      popular: false,
      delay: 0.4
    }
  ];

  return (
    <section id="precos" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title reveal">Escolha o Plano LUSIA Ideal para Si</h2>
          <p className="section-subtitle reveal">Facilite a sua vida escolar connosco!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card-effect relative reveal ${plan.popular ? 'border-secondary ring-2 ring-secondary/30' : ''}`}
              style={{ animationDelay: `${plan.delay}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                  Mais Popular
                </div>
              )}
              
              <h3 className="text-2xl font-serif text-accent">{plan.name}</h3>
              <p className="text-accent/70 mb-4">{plan.description}</p>
              
              <div className="mb-6">
                {plan.price ? (
                  <>
                    <div className="flex items-end">
                      <span className="text-3xl font-bold text-accent">{plan.price}</span>
                      <span className="text-accent/70 ml-1">{plan.period}</span>
                    </div>
                    {plan.yearlyPrice && (
                      <div className="text-sm text-accent/70 mt-1">
                        ou {plan.yearlyPrice}{plan.yearlyPeriod}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-2xl font-bold text-secondary">Brevemente</div>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={18} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-accent/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full ${plan.disabled ? 'btn-secondary opacity-70 cursor-not-allowed' : 'btn-primary'}`}
                disabled={plan.disabled}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
