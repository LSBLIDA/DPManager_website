import React from 'react';

export default function PromoPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-blue-50 to-violet-50 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
        Offre promotionnelle
      </h1>
      <div className="w-full flex justify-center">
        <iframe
          width="600"
          height="850"
          src="https://fenekio.com/forms/wtl/6709f7edfdbe64c0c7254adf322e679d"
          frameBorder="0"
          sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups"
          allowFullScreen
          className="rounded-lg border border-gray-200 shadow-lg w-full max-w-xl"
          title="Formulaire promotion"
        ></iframe>
      </div>
    </div>
  );
}
