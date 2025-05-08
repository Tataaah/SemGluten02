import React from 'react';
import { Quote } from 'lucide-react';
import StarRating from './ui/StarRating';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nayara Soares",
      text: "Pensa num e-book maravilhoso as receitas são maravilhosas estou amando real... a Lara é maravilhosa, uma benção nos dar suporte tira nossas dúvidas... super indico mil vezes!!!"
    },
    {
      name: "Marcia Maria",
      text: "Gente gente, o bolo é maravilhoso. Sigam exatamente a receita. Olha sem palavras para descrever a alegria em comer um bolo sem glúten delicioso."
    },
    {
      name: "Tatiane Araújo Moraes",
      text: "Oi comprei seu ebook estou apaixonada vou imprimir e encadernar, vou fazer uma receita agorinha❤️"
    },
    {
      name: "Tamires Reis",
      text: "Comprei e chegou na hora no e-mail, adorei o material, super bem feitinho, achei ótimo que tem as medidas em xícaras e em gramas também. Logo começo a testar as receitas."
    },
    {
      name: "Marlene Costa",
      text: "Fiquei com um pouco de medo de comprar pq tem colocar CPF e celular, mas deu tudo certo e o ebook é super bem feito e com diversas receitas que podemos fazer"
    }
  ];

  return (
    <section className="section bg-begeNatural/30">
      <div className="container-custom">
        <h2 className="section-title">Avaliações de Clientes</h2>
        
        <div className="flex justify-center mb-8">
          <StarRating value={5} size={28} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card p-6 flex flex-col h-full border border-begeNatural hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-3">
                <StarRating value={5} />
              </div>
              
              <div className="flex-1 flex items-start mb-4">
                <Quote size={20} className="text-terracota flex-shrink-0 mr-2 mt-1" />
                <p className="text-gray-700 italic">{testimonial.text}</p>
              </div>
              
              <p className="font-semibold text-terracota">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;