

import React from 'react';

// Componente Logo
const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Insira a imagem do logo */}
      <img 
        src="imagens/inlogobggrey.png" // Corrija o caminho para a sua imagem
        alt="Logo" 
        className="ml-4 w-60 h-auto" // Ajuste o tamanho conforme necessário
      />
    </div>
  );
};

export default Logo;