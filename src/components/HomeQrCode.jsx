import QRCodeGenerator from "./Qrcode";

export default function HomeQrCode() {
  const locations = ["Central"];

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex flex-grow items-center justify-center">
        {/* Este contêiner está centrado horizontalmente e verticalmente */}
      </div>
      <div className="flex flex-col items-center mb-8">
        {locations.map((location) => (
          <QRCodeGenerator key={location} location={location} />
        ))}
      </div>
    </div>
  );
}
