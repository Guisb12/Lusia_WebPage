
const PartnersSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="section-title reveal">Com a Confiança de Instituições de Ensino e Educadores em Portugal</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 reveal">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="aspect-[4/3] glass-card flex items-center justify-center p-4"
            >
              <div className="text-accent/50 text-sm">Logo do Parceiro</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
