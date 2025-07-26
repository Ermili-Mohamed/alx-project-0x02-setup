import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function About() {
 return (
  <>
   <Header />
   <main className="p-8 space-y-4">
    <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
    <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
    <Button size="large" shape="rounded-full">Large Rounded-full</Button>
   </main>
  </>
 );
}
