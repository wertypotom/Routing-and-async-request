import React from 'react';
import { TPost } from '../../types/PostTypes';
import PageItem from './PostItem/PageItem';

interface PostsProps {
  posts: TPost[];
  removePost: (id: number) => void;
}

const Posts = ({ posts, removePost }: PostsProps) => {
  return (
    <div>
      {posts.map((post) => (
        <PageItem post={post} removePost={removePost} key={post.id} />
      ))}
      <button>Add post</button>
    </div>
  );
};

export default Posts;
