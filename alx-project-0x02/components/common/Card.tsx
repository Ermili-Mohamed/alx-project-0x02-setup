import React from 'react';
import { type CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
 return (
  <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
   <h2 className="text-xl font-semibold mb-2">{title}</h2>
   <p className="text-gray-700">{content}</p>
  </div>
 );
};

export default Card;
