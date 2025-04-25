import React from 'react';

function Card({ icon, title, description }) {
  return (
    <div className="rounded-lg border border-green-100 p-6 flex flex-col items-center text-center space-y-4">
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}

export default Card;