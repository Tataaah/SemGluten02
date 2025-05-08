import React from 'react';
import { MailOpen } from 'lucide-react';

const HowToReceive = () => {
  return (
    <section className="section bg-offWhite/80">
      <div className="container-custom">
        <h2 className="section-title">Como Vou Receber As Receitas?</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="card p-8 border-2 border-cinzaAreia flex flex-col items-center text-center">
            <MailOpen size={48} className="text-terracota mb-4" />
            <p className="text-xl md:text-2xl font-medium">
              Receba INSTANTANEAMENTE por E-MAIL logo após o pagamento.
            </p>
            <p className="text-xl md:text-2xl font-bold text-terracota mt-2">
              ZERO ESPERA!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToReceive;