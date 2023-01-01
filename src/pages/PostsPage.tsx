import React, { Suspense, useState } from 'react';
import PageItem from '../components/Posts/PostItem/PageItem';
import Posts from '../components/Posts/Posts';
import Search from '../components/Search/Search';
import { TPost } from '../types/PostTypes';
import { defer, useLoaderData, Await } from 'react-router-dom';

interface LoaderData {
  posts: TPost[];
}

const PostsPage = () => {
  const { posts } = useLoaderData() as LoaderData;

  console.log('posts ', posts);
  // const [posts, setPosts] = useState<TPost[]>(postsLoader);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const removePost = (id: number): void => {
    // setPosts([...posts].filter((post) => post.id !== id));
  };

  const searchPost = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className='App'>
      {/* <Search value={searchQuery} onChange={searchPost} /> */}
      <h2>Hello They are my posts</h2>
      <Suspense fallback={<>Loading...</>}>
        <Await resolve={posts}>
          {(awaitedPosts) => {
            return <Posts posts={awaitedPosts} removePost={removePost} />;
          }}
        </Await>
      </Suspense>
      {/* <Posts
        posts={[...posts].filter((post) =>
          post.title.toLowerCase().includes(searchQuery)
        )}
        removePost={removePost}
      /> */}
    </div>
  );
};

const loadPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = res.json();
  return data;
};

export const postsLoader = async ({ request, params }: any) => {
  return defer({
    posts: await loadPosts(),
  });
};

export default PostsPage;
