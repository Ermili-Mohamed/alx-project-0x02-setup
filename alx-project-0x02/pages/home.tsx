import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

interface Post {
 title: string;
 content: string;
}

export default function Home() {
 const [posts, setPosts] = useState<Post[]>([
  { title: 'Card Title 1', content: 'This is the content of the first card.' },
  { title: 'Card Title 2', content: 'Different content for the second card.' },
 ]);
 const [isModalOpen, setIsModalOpen] = useState(false);

 const handleAddPost = (title: string, content: string) => {
  setPosts((prev) => [...prev, { title, content }]);
 };

 return (
  <>
   <Header />
   <main className="p-8 space-y-6">
    <button
     onClick={() => setIsModalOpen(true)}
     className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
     Add New Post
    </button>

    {posts.map((post, idx) => (
     <Card key={idx} title={post.title} content={post.content} />
    ))}

    <PostModal
     isOpen={isModalOpen}
     onClose={() => setIsModalOpen(false)}
     onSubmit={handleAddPost}
    />
   </main>
  </>
 );
}
