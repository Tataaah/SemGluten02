import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Features: React.FC = () => {
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
    <section className="section bg-offWhite">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Principais Benefícios
          </h2>
          <p className="text-cinzaPardo text-lg">
            Descubra como nosso livro de receitas vai transformar sua experiência na cozinha
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="flex items-start mb-4">
              <div className="bg-terracota rounded-full p-2 mr-4">
                <Check className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Saborosos e Fofinhos</h3>
            </div>
            <p className="text-cinzaPardo">
              Receitas desenvolvidas para garantir bolos com textura macia e sabor incrível, mesmo sem glúten ou leite.
            </p>
          </motion.div>

          <motion.div className="feature-card" variants={itemVariants}>
            <div className="flex items-start mb-4">
              <div className="bg-terracota rounded-full p-2 mr-4">
                <Check className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Fáceis de Preparar</h3>
            </div>
            <p className="text-cinzaPardo">
              Instruções passo a passo simples, perfeitas tanto para iniciantes quanto para quem já tem experiência na cozinha.
            </p>
          </motion.div>

          <motion.div className="feature-card" variants={itemVariants}>
            <div className="flex items-start mb-4">
              <div className="bg-terracota rounded-full p-2 mr-4">
                <Check className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Ingredientes Acessíveis</h3>
            </div>
            <p className="text-cinzaPardo">
              Receitas criadas com ingredientes facilmente encontrados em supermercados locais, sem necessidade de produtos caros ou importados.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;