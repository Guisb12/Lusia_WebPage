
import { useState } from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "O que é a LUSIA?",
      answer: "A LUSIA é uma ferramenta de Inteligência Artificial criada para ajudar alunos e professores do ensino secundário."
    },
    {
      question: "A LUSIA é 100% gratuita?",
      answer: "Temos uma versão gratuita para si mas recomendamos utilizar a paga para que possa usá-la sem limites!"
    },
    {
      question: "LUSIA está alinhada com as diretrizes do Ministério da Educação Português?",
      answer: "A LUSIA utiliza modelos de linguagem avançados e está alinhada com o programa escolar."
    },
    {
      question: "Como é que LUSIA garante a segurança e privacidade dos dados (RGPD)?",
      answer: "A sua segurança é uma prioridade. Os seus dados não são partilhados com terceiros e são tratados com total segurança."
    },
    {
      question: "Preciso de conhecimentos técnicos para usar LUSIA?",
      answer: "De todo. A LUSIA foi pensada para ser simples e intuitiva para que qualquer pessoa consiga utilizar."
    },
    {
      question: "Posso cancelar a minha subscrição LUSIA a qualquer momento?",
      answer: "Sim, o cancelamento é possível a qualquer altura e 100% gratuito."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title reveal">Dúvidas Sobre LUSIA? Encontre as Respostas Aqui</h2>
        </div>
        
        <div className="space-y-4 reveal">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden"
            >
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-accent font-medium">{faq.question}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 text-secondary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`px-6 pb-4 transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <p className="text-accent/80">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
