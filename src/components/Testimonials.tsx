import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

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

const Testimonials: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section bg-gradient-to-b from-begeNatural/20 to-offWhite">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Avaliações de Clientes
          </h2>
          <div className="star-rating justify-center text-2xl mb-4">
            <span>★★★★★</span>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="bg-begeNatural/50 rounded-full p-2 mr-3">
                  <User className="h-5 w-5 text-carameloClaro" />
                </div>
                <h3 className="font-medium">{testimonial.name}</h3>
              </div>
              <div className="star-rating mb-3 text-lg">
                <span>★★★★★</span>
              </div>
              <p className="text-cinzaPardo italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;