import React from 'react';
import PostItem from './PostItem';



const PostList = ({posts, title}) => {
    return (
        <div>
            <h4>{title}</h4>
      {posts.map((post) => 
        <PostItem post={post} key={post.id} />
      )}
    </div>
      
    );
};

export default PostList;