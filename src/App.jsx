import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Thanks from "./components/Thanks";
import HomeQrCode from "./components/HomeQrCode";
import Imagem from "./components/Imagem";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-red-500 to-black">
    <Router>
      
      <Imagem>
        
        <Routes>
          {/* Rota para exibir os QR codes */}
          <Route path="/" element={<HomeQrCode />} />

          {/* Rota para o formulário */}
          <Route path="/form" element={<Form />} />
          <Route path="/download/ebook.pdf" element={<Form />} />

          {/* Rota para a página de agradecimento */}
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
        <Logo />
      </Imagem>
      
    </Router>
    </div>
  );
}

export default App;