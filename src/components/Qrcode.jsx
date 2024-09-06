import { QRCodeCanvas } from "qrcode.react";

// eslint-disable-next-line react/prop-types
const QRCodeGenerator = ({ location }) => {
  // URL aponta para a rota específica para o formulário da praça
  const url = `https://ebook-in-italo-gabriels-projects.vercel.app/form?location=${encodeURIComponent(
    location
  )}`;

  return (
    <div className="flex flex-col items-center text-white">
     
      <QRCodeCanvas value={`${url}`} size={256} />
      <p className="mt-2">
        Baixe sua coletânea de Ebooks aqui!
      </p>
    </div>
  );
};

export default QRCodeGenerator;
