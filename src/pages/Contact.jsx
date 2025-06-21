import React from 'react';

export default function Contact() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Contactez-nous</h2>
      <form className="grid gap-4">
        <input type="text" placeholder="Nom" className="border p-2" />
        <input type="email" placeholder="Email" className="border p-2" />
        <textarea rows="4" placeholder="Message" className="border p-2" />
        <button className="bg-green-700 text-white p-2 rounded">Envoyer</button>
      </form>
    </div>
  );
}
