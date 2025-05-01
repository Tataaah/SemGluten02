import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock } from 'lucide-react';

const HowToReceive: React.FC = () => {
  return (
    <section className="section bg-offWhite">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Como Vou Receber As Receitas?
          </h2>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="card flex flex-col items-center p-8 border-2 border-terracota">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-8 w-8 text-terracota" />
              <Clock className="h-8 w-8 text-terracota" />
            </div>
            <p className="text-xl font-medium text-center">
              Receba INSTANTANEAMENTE por E-MAIL logo após o pagamento. ZERO ESPERA!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToReceive;