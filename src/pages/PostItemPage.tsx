import React, { Suspense } from 'react';
import { useNavigate, useLoaderData, defer, Await } from 'react-router-dom';
import { TPost } from '../types/PostTypes';

interface LoaderData {
  post: TPost;
}

const PostItem = () => {
  const navigate = useNavigate();
  const { post } = useLoaderData() as LoaderData;

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', { replace: true });

  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <Await resolve={post}>
          {(resolvedPost) => {
            return (
              <>
                <h3>
                  {resolvedPost.id}. {resolvedPost.title}
                </h3>
                <p>{resolvedPost.body}</p>
              </>
            );
          }}
        </Await>
      </Suspense>

      <div>
        <button onClick={goBack}>Go Back</button>
        <button onClick={goHome}>Go Home</button>
      </div>
    </div>
  );
};

const loadSinglePost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return data;
};

export const singlePostLoader = async ({ params }: any) => {
  const { id } = params;

  return defer({
    post: loadSinglePost(id),
  });
};

export default PostItem;
