import React from 'react';
import { Check, Cake, Coffee } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Check className="text-terracota" size={24} />,
      title: "Receitas Testadas E Aprovadas",
      description: "Todas as receitas foram testadas múltiplas vezes para garantir resultados consistentes e deliciosos."
    },
    {
      icon: <Cake className="text-terracota" size={24} />,
      title: "Sem Leite E Sem Açúcar",
      description: "Ideal para pessoas com intolerâncias, todas as receitas são livres de glúten, lácteos e açúcar refinado."
    },
    {
      icon: <Coffee className="text-terracota" size={24} />,
      title: "Ingredientes Acessíveis",
      description: "Utilizamos ingredientes fáceis de encontrar em qualquer supermercado, sem itens caros ou exóticos."
    }
  ];

  return (
    <section className="section bg-offWhite relative">
      <div className="container-custom">
        <div className="card p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="border border-cinzaAreia rounded-lg p-6 bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  {benefit.icon}
                  <h3 className="font-semibold text-xl">{benefit.title}</h3>
                </div>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;