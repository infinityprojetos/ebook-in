import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Função para extrair query parameters da URL
  const queryParams = new URLSearchParams(location.search);
  const formLocation = queryParams.get("location"); // Captura a `location` da query string

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    contactLocation: formLocation || "",
  });

  const downloadAllPDFs = () => {
    const ebooks = [
      "ebookcriativo.pdf",
      "ebookcriativo2.pdf",
      "ebookcriativo3.pdf",
      "ebooktech.pdf",
      "ebooktech2.pdf" 
    ];
  
    ebooks.forEach((ebook) => {
      const link = document.createElement("a");
      link.href = `/assets/${ebook}`;  // Removido process.env.PUBLIC_URL
      link.download = ebook;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação do envio de dados para o backend (substitua pela lógica real)
    console.log("Form submitted:", formData);
    downloadAllPDFs();
  };

  return (
    <div className="max-w-lg mx-auto bg-black p-8 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-white">Formulário para Ebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white">Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Cpf:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">WhatsApp:</label>
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">
            De qual cidade você é ?
          </label>
          <input
            type="text"
            name="contactLocation"
            value={formData.contactLocation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex justify-center">
        <button
          type="submit"
          className="flex justify-center  w-32 text-white bg-red-700 rounded"
        >
          Enviar
        </button>
        </div>
      </form>
    </div>
  );
};

export default Form;