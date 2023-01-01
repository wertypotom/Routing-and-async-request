import React from 'react';
import { TPost } from '../../../types/PostTypes';
import './PageItem.css';
import { Link, useNavigate } from 'react-router-dom';

interface IPageItemProps {
  post: TPost;
  removePost(id: number): void;
}

const PageItem = ({ post, removePost }: IPageItemProps) => {
  const { id, body, title } = post;
  const navigate = useNavigate();

  return (
    <div className='post_container'>
      <div className='post_content'>
        <h3>
          {id}. {title}
        </h3>
        <p>{body}</p>
      </div>
      <div className='post__btns'>
        <button className='remove' onClick={() => removePost(id)}>
          remove
        </button>
        <button className='open' onClick={() => navigate(`/posts/${id}`)}>
          open
        </button>
      </div>
    </div>
  );
};

export default PageItem;
