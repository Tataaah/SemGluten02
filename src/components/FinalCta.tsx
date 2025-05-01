import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const FinalCta: React.FC = () => {
  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/0ba8de89-e236-4edb-bf3b-ccb4f33ea5e2', '_blank');
  };

  return (
    <section className="section bg-gradient-to-b from-begeNatural/20 to-carameloClaro/20">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            DESVENDE OS SEGREDOS DOS BOLOS SEM GLÚTEN PERFEITOS E SABOREIE HOJE MESMO!
          </h2>
          
          <motion.button
            className="btn btn-primary text-lg md:text-xl px-8 py-4 mb-6"
            onClick={handleBuyClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            BAIXAR MINHA CÓPIA
          </motion.button>
          
          <div className="relative">
            <p className="font-medium text-xl text-terracota">Acesso imediato</p>
            <motion.div 
              className="absolute -top-1 -right-10 md:right-20"
              animate={{ 
                x: [0, 10, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <ArrowDownRight className="h-8 w-8 text-terracota transform rotate-180" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;