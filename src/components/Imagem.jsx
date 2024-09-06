import React from 'react';

// eslint-disable-next-line react/prop-types
const Imagem = ({ children }) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative" // Remove o bg-cover e bg-center
    >
      <img 
        src="imagens/logo.png" // Corrija o caminho se necessário
        alt="Logo"
        className="w-64 h-56 " // Define tamanho da imagem e ajusta a margem inferior
        style={{ transform: 'translateY(-50%)' }} // Desloca um pouco a imagem para cima
      />
      {children}
    </div>
  );
};

export default Imagem;
