import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="section bg-offWhite">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="guarantee-card flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 flex items-center justify-center bg-green-100 rounded-full p-4">
              <Shield className="h-12 w-12 text-green-600" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-semibold mb-2 text-green-700">
                Garantia de Satisfação
              </h3>
              <p className="text-green-600 mb-2">
                Tenha acesso ao e-book completo com todas as receitas. Experimente sem riscos!
              </p>
              <p className="text-sm text-green-600">
                Se você não ficar satisfeito com as receitas ou tiver qualquer problema, entre em contato 
                conosco em até 7 dias após a compra para um reembolso integral.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;