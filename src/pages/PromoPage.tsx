import React from 'react';

export default function PromoPage() {
  // Fonction pour scroller vers le formulaire
  const scrollToForm = () => {
    const formElement = document.getElementById("promo-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-blue-50 to-violet-50 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
        Offre promotionnelle
      </h1>

      {/* Bloc Offre spéciale */}
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-2xl text-left border border-gray-200 mb-10">
        <h2 className="text-2xl font-bold text-violet-700 mb-4 text-center">
          ⚡ Offre spéciale Formatech
        </h2>
        <ul className="space-y-2 text-lg text-gray-700">
          <li>✅ -50 % pendant le salon Formatech</li>
          <li>
            💰 Prix remisé : <strong>190 000 DA HT</strong> (au lieu de 380 000 DA)
          </li>
          <li>🎁 + 5 heures de consulting incluses</li>
          <li>
            💳 Paiement possible en 5 × 38 000 DA HT
            (encaissement chaque début de mois)
          </li>
        </ul>
        <p className="mt-4 text-red-600 font-semibold">
          📌 Condition : remise des 5 chèques sur place pendant le salon
        </p>

        {/* Bouton scroll vers formulaire */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={scrollToForm}
            className="bg-violet-700 hover:bg-violet-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            🚀 J’en profite
          </button>
        </div>
      </div>

      {/* Formulaire */}
      <div id="promo-form" className="w-full flex justify-center">
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
