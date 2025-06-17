import React from 'react';

function Progress({ value }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${value}%` }}></div>
    </div>
  );
}

export default function EspaceClient() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Bienvenue sur votre espace Cultivé’Nou</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Vue générale</h2>
        <p>Vous avez actuellement 3 parrainages actifs.</p>
        <p className="mt-2 text-sm text-gray-500">
          Prochain rendement estimé : Septembre 2025
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Mes parrainages</h2>

        <div className="mb-4">
          <p className="font-medium">Parrainage : Bovin #2025-01</p>
          <Progress value={65} />
          <p className="text-sm text-gray-500">État : 65% - En élevage (8e mois)</p>
        </div>

        <div>
          <p className="font-medium">Parrainage : Patate douce #2025-07</p>
          <Progress value={90} />
          <p className="text-sm text-gray-500">État : 90% - Récolte imminente</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Mes documents</h2>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Contrat de parrainage - Bovin #2025-01 (PDF)</li>
          <li>Reçu de paiement - Patate douce #2025-07</li>
        </ul>
        <button className="mt-4 px-4 py-2 border rounded">Télécharger tous les documents</button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Informations personnelles</h2>
        <p>Nom : Jean MARTIN</p>
        <p>Email : jean.martin@email.com</p>
        <button className="mt-4 px-4 py-2 border rounded">Modifier mes informations</button>
      </div>
    </div>
  );
}