import React from 'react';
import Header from '@/components/layout/Header';

export default function Posts() {
 return (
  <>
   <Header />
   <main className="p-8">
    <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
    <p>This is where posts will be listed or managed.</p>
   </main>
  </>
 );
}
