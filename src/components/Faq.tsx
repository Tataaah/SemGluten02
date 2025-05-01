import React from 'react';
import { motion } from 'framer-motion';

const Faq: React.FC = () => {
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
    <section className="section bg-gradient-to-b from-offWhite to-begeNatural/20">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            VOCÊ DEVE ESTAR SE PERGUNTANDO:
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="faq-card" variants={itemVariants}>
            <h3 className="font-serif text-xl font-semibold mb-4 text-center md:text-left">
              Essas receitas são caras?
            </h3>
            <p className="text-cinzaPardo">
              Não! Usamos ingredientes básicos que você provavelmente já tem na cozinha, evitando a necessidade de itens caros ou especializados.
            </p>
          </motion.div>

          <motion.div className="faq-card" variants={itemVariants}>
            <h3 className="font-serif text-xl font-semibold mb-4 text-center md:text-left">
              O bolo realmente fica gostoso e fofinho?
            </h3>
            <p className="text-cinzaPardo">
              Sim! Criadas por uma especialista em intolerâncias, nossas receitas garantem bolos fofinhos e deliciosos, comparáveis aos bolos tradicionais.
            </p>
          </motion.div>

          <motion.div className="faq-card" variants={itemVariants}>
            <h3 className="font-serif text-xl font-semibold mb-4 text-center md:text-left">
              Eu preciso ser experiente na cozinha?
            </h3>
            <p className="text-cinzaPardo">
              Não! Fizemos receitas pensando em todos os níveis de habilidade, com instruções claras e um passo a passo super simples.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;