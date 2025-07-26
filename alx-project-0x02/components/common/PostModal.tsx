"use client"
import React, { useState } from 'react';

interface PostModalProps {
 isOpen: boolean;
 onClose: () => void;
 onSubmit: (title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
 const [title, setTitle] = useState('');
 const [content, setContent] = useState('');

 if (!isOpen) return null;

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!title.trim() || !content.trim()) return;
  onSubmit(title.trim(), content.trim());
  setTitle('');
  setContent('');
  onClose();
 };

 return (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
   <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
    <h2 className="text-xl font-semibold mb-4">Add New Post</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
     <input
      type="text"
      placeholder="Title"
      className="w-full border border-gray-300 rounded px-3 py-2"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
     />
     <textarea
      placeholder="Content"
      className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
      rows={4}
      value={content}
      onChange={(e) => setContent(e.target.value)}
      required
     />
     <div className="flex justify-end space-x-2">
      <button
       type="button"
       onClick={onClose}
       className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
      >
       Cancel
      </button>
      <button
       type="submit"
       className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
       Add
      </button>
     </div>
    </form>
   </div>
  </div>
 );
};

export default PostModal;
