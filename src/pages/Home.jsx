import React from 'react';
import StepCard from '../components/StepCard';

const steps = [
  {
    title: "1. Parrainage local",
    description: "Investissez en parrainant un animal ou une parcelle.",
    image: "/gfx/parrainage.png"
  },
  {
    title: "2. Prise en charge",
    description: "Un agriculteur s'en occupe localement.",
    image: "/gfx/agriculteur.png"
  },
  {
    title: "3. Récolte ou bénéfices",
    description: "Récupérez vos produits ou une part des revenus.",
    image: "/gfx/recolte.png"
  }
];

export default function Home() {
  return (
    <main className="p-6">
      <h2 className="text-xl font-bold text-center mb-6">Comment ça marche ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => <StepCard key={i} {...s} />)}
      </div>
    </main>
  );
}
