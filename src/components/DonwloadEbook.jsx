import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DownloadEbook = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Aqui você pode redirecionar ou realizar qualquer ação
    window.location.href = "/ebook.pdf";
    navigate("/thanks"); // Exemplo de redirecionamento para uma página de agradecimento
  }, [navigate]);

  return null;
};

export default DownloadEbook;
