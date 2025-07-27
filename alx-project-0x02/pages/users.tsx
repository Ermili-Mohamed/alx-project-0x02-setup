import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';

interface UsersPageProps {
 users: UserProps[];
}

export default function Users({ users }: UsersPageProps) {
 return (
  <>
   <Header />
   <main className="p-8 space-y-6">
    <h1 className="text-2xl font-bold mb-4">User List</h1>
    {users.map((user) => (
     <UserCard
      key={user.id}
      name={user.name}
      email={user.email}
      address={user.address}
      id={user.id}
     />
    ))}
   </main>
  </>
 );
}

export async function getStaticProps() {
 const res = await fetch('https://jsonplaceholder.typicode.com/users');
 const data = await res.json();

 const users: UserProps[] = data.map((user: any) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  address: {
   street: user.address.street,
   city: user.address.city,
  },
 }));

 return {
  props: {
   users,
  },
 };
}
