import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/0ba8de89-e236-4edb-bf3b-ccb4f33ea5e2', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-offWhite/80 via-offWhite/70 to-offWhite/95 backdrop-blur-[2px]"></div>
      
      <div className="container relative z-10 py-16 md:py-24">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            SEM GLÚTEN - Bolos simples e fofinhos
          </h1>
          
          <h2 className="text-xl md:text-2xl text-cinzaPardo font-medium mb-6">
            Receitas Fáceis E Deliciosas Para Todos Os Amantes De Bolos
          </h2>
          
          <div className="star-rating justify-center mb-8">
            <span className="text-2xl">★★★★★</span>
          </div>
          
          <motion.button
            className="btn btn-primary text-lg md:text-xl px-8 py-4 mb-8"
            onClick={handleBuyClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            BAIXAR MINHA CÓPIA
          </motion.button>
          
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="card grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
              <div className="flex flex-col items-center p-4 border-b md:border-b-0 md:border-r border-cinzaAreia">
                <h3 className="font-medium text-center">Receitas Testadas E Aprovadas</h3>
              </div>
              <div className="flex flex-col items-center p-4 border-b md:border-b-0 md:border-r border-cinzaAreia">
                <h3 className="font-medium text-center">Sem Leite E Sem Açúcar</h3>
              </div>
              <div className="flex flex-col items-center p-4">
                <h3 className="font-medium text-center">Ingredientes Acessíveis</h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16 animate-bounce-slow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <ArrowDown className="mx-auto h-8 w-8 text-terracota" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;