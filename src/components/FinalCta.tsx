import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';

const FinalCta = () => {
  return (
    <section className="section bg-gradient-to-b from-offWhite to-begeNatural/30 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            DESVENDE OS SEGREDOS DOS BOLOS SEM GLÚTEN PERFEITOS E SABOREIE HOJE MESMO!
          </h2>
          
          <div className="mb-6">
            <PrimaryButton
              href="https://pay.kirvano.com/0ba8de89-e236-4edb-bf3b-ccb4f33ea5e2"
              className="btn-large mx-auto"
            >
              BAIXAR MINHA CÓPIA <ChevronRight size={20} />
            </PrimaryButton>
          </div>
          
          <div className="relative">
            <h3 className="text-xl font-semibold mb-2">Acesso imediato</h3>
            <ArrowDown 
              size={30} 
              className="absolute -top-10 right-1/4 text-terracota animate-bounce-slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;