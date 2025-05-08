import React from 'react';

const Faq = () => {
  const faqItems = [
    {
      question: "Essas receitas são caras?",
      answer: "Não! Usamos ingredientes básicos que você provavelmente já tem na cozinha, evitando a necessidade de itens caros ou especializados."
    },
    {
      question: "O bolo realmente fica gostoso e fofinho?",
      answer: "Sim! Criadas por uma especialista em intolerâncias, nossas receitas garantem bolos fofinhos e deliciosos, comparáveis aos bolos tradicionais."
    },
    {
      question: "Eu preciso ser experiente na cozinha?",
      answer: "Não! Fizemos receitas pensando em todos os níveis de habilidade, com instruções claras e um passo a passo super simples."
    }
  ];

  return (
    <section className="section bg-offWhite py-16">
      <div className="container-custom">
        <h2 className="section-title mb-10">VOCÊ DEVE ESTAR SE PERGUNTANDO:</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="card p-6 border-2 border-cinzaAreia hover:border-terracota/60 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-terracota">{item.question}</h3>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;