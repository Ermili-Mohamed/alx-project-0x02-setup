import React from 'react';
import { type PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
 return (
  <div className="border rounded-lg p-4 shadow-md space-y-2">
   <h2 className="text-xl font-semibold">{title}</h2>
   <p className="text-gray-700">{content}</p>
   <span className="text-sm text-gray-500">User ID: {userId}</span>
  </div>
 );
};

export default PostCard;
