'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

export default function Posts() {
 const [posts, setPosts] = useState<PostProps[]>([]);

 useEffect(() => {
  const fetchPosts = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
   const data = await res.json();
   const formatted = data.map((post: any) => ({
    userId: post.userId,
    title: post.title,
    content: post.body,
   }));
   setPosts(formatted);
  };

  fetchPosts();
 }, []);

 return (
  <>
   <Header />
   <main className="p-8 space-y-6">
    <h1 className="text-2xl font-bold">Posts List</h1>
    {posts.map((post, index) => (
     <PostCard
      key={index}
      userId={post.userId}
      title={post.title}
      content={post.content}
     />
    ))}
   </main>
  </>
 );
}
