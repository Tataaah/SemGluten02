import React from 'react';
import { ChevronDown } from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';
import StarRating from './ui/StarRating';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://i.im.ge/2025/05/01/vwveZ4.img-bolos.md.jpeg')",
          filter: "brightness(0.6)"
        }}
      />

      {/* Content Container with Glass Effect */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center bg-white/70 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-begeNatural shadow-xl animate-fadeIn">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-terracota">
            SEM GLÚTEN<br />
            <span className="text-gray-800">Bolos simples e fofinhos</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-5 text-gray-700">
            Receitas Fáceis E Deliciosas Para Todos Os Amantes De Bolos
          </h2>
          
          <div className="mb-6">
            <StarRating value={5} />
          </div>
          
          <PrimaryButton
            href="https://pay.kirvano.com/0ba8de89-e236-4edb-bf3b-ccb4f33ea5e2"
            className="btn-large mx-auto mb-6"
          >
            BAIXAR MINHA CÓPIA
          </PrimaryButton>
          
          <ChevronDown 
            size={36} 
            className="text-terracota mx-auto animate-bounce-slow cursor-pointer" 
            onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;