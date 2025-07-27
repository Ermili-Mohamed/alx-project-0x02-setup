import React from 'react';
import { type UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
 return (
  <div className="border rounded-lg p-4 shadow-md space-y-2">
   <h2 className="text-xl font-semibold">{name}</h2>
   <p className="text-gray-700">Email: {email}</p>
   <p className="text-gray-600">
    Address: {address.street}, {address.city}
   </p>
  </div>
 );
};

export default UserCard;
