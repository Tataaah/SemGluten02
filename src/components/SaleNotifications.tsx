import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

// List of random names
const randomNames = [
  "Maria Silva", "João Santos", "Ana Oliveira", "Pedro Costa", 
  "Carla Souza", "Roberto Almeida", "Fernanda Lima", "Lucas Rocha",
  "Juliana Martins", "Carlos Ferreira", "Beatriz Gomes", "Eduardo Pereira",
  "Amanda Ribeiro", "Marcelo Barbosa", "Letícia Cardoso", "Gustavo Alves"
];

// List of random cities
const randomCities = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", 
  "Recife", "Fortaleza", "Brasília", "Curitiba",
  "Porto Alegre", "Manaus", "Goiânia", "Florianópolis",
  "Vitória", "Belém", "São Luís", "Natal"
];

const SaleNotifications: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [notification, setNotification] = useState<{name: string, city: string}>({
    name: randomNames[0],
    city: randomCities[0]
  });

  useEffect(() => {
    // Show first notification after 10 seconds
    const initialTimeout = setTimeout(() => {
      showRandomNotification();
    }, 10000);

    return () => clearTimeout(initialTimeout);
  }, []);

  const showRandomNotification = () => {
    // Get random name and city
    const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
    const randomCity = randomCities[Math.floor(Math.random() * randomCities.length)];
    
    setNotification({
      name: randomName,
      city: randomCity
    });
    
    setIsVisible(true);
    
    // Hide notification after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
      
      // Schedule next notification after random interval (30-120 seconds)
      const nextNotificationDelay = Math.floor(Math.random() * (90000 - 30000 + 1)) + 30000;
      setTimeout(showRandomNotification, nextNotificationDelay);
    }, 5000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-4 left-4 z-50 max-w-xs"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-lg border border-begeNatural shadow-lg p-4 flex items-start gap-3">
            <div className="bg-terracota/20 rounded-full p-2 flex-shrink-0">
              <ShoppingBag className="h-5 w-5 text-terracota" />
            </div>
            <div>
              <p className="font-medium text-gray-800">
                {notification.name}
              </p>
              <p className="text-sm text-cinzaPardo">
                de {notification.city} acabou de comprar
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SaleNotifications;