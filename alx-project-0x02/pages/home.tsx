import Card from '@/components/layout/common/Card';
import React from 'react';

export default function Home() {
 return (
  <main className="p-8 space-y-6">
   <Card
    title="Card Title 1"
    content="This is the content of the first card. It can be anything you want to display."
   />
   <Card
    title="Card Title 2"
    content="Here's some different content for the second card. Cards are reusable!"
   />
   <Card
    title="Card Title 3"
    content="You can add as many cards as needed by passing different props."
   />
  </main>
 );
}
