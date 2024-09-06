

import React from 'react';

// Componente Logo
const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Insira a imagem do logo */}
      <img 
        src="/public/imagens/inlogobggrey.png" // Corrija o caminho para a sua imagem
        alt="Logo" 
        className="w-96 h-auto" // Ajuste o tamanho conforme necessário
      />
    </div>
  );
};

export default Logo;