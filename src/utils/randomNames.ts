const firstNames = [
  'Ana', 'Carla', 'Débora', 'Fernanda', 'Gabriela', 
  'Juliana', 'Lucia', 'Mariana', 'Paula', 'Silvia',
  'Tatiana', 'Renata', 'Vanessa', 'Lívia', 'Bianca',
  'Carolina', 'Daniela', 'Érica', 'Patrícia', 'Amanda'
];

const lastNames = [
  'Silva', 'Santos', 'Oliveira', 'Souza', 'Costa',
  'Pereira', 'Rodrigues', 'Almeida', 'Nascimento', 'Lima',
  'Araújo', 'Carvalho', 'Gomes', 'Martins', 'Rocha',
  'Ribeiro', 'Mendes', 'Cardoso', 'Barbosa', 'Teixeira'
];

export const getRandomName = (): string => {
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
  return `${randomFirstName} ${randomLastName}`;
};