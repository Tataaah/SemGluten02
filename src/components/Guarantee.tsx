import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="section bg-offWhite">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="bg-success/20 backdrop-blur-sm border-2 border-success rounded-xl p-6 md:p-8 shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <ShieldCheck size={64} className="text-success" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-success">Garantia de Satisfação</h3>
            
            <p className="text-lg mb-3">
              Se por algum motivo você não ficar satisfeito com as receitas, 
              devolveremos seu dinheiro integralmente em até 7 dias após a compra.
            </p>
            
            <p className="text-lg font-medium">
              Sem perguntas, sem complicações!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;