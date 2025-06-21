import React from 'react';

export default function StepCard({ title, description, image }) {
  return (
    <div className="border p-4 rounded-lg shadow text-center">
      <img src={image} alt={title} className="w-20 mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
