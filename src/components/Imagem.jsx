import React from 'react';

// eslint-disable-next-line react/prop-types
const Imagem = ({ children }) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `url('/imagens/in.png')`, // Corrija o caminho se necessário
        backgroundSize: 'contain', // Ajusta a imagem para caber dentro do contêiner sem cortar
        backgroundPosition: 'top', // Centraliza a imagem
        backgroundRepeat: 'no-repeat', // Evita a repetição da imagem
        backgroundAttachment: 'fixed', // Mantém a imagem fixa enquanto rola a página
        height: '50px', // Define a altura do contêiner para a altura total da viewport
        width: '100vw',
        
        // Define a largura do contêiner para a largura total da viewport
      }}
    >
      {children}
    </div>
  );
};

export default Imagem;
