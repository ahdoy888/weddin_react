import React from 'react';
// import Comments from '../Comments/Comments';
// import Posts from '../Posts/Post';

// import { API_URL } from '../../constants';


const Posts = (props)=> {

 const posts = props.posts.map(post => {
  return (
    // <div className="post">
    //   <h3>{this.props.title} || {this.props.content}</h3>
    //   <button onClick={() => this.removePost(this.props.id)}>Delete</button>
    // </div>
    <div>
      <h3>{post.content}</h3>
    </div>

  )
 })

 return (
   <div>
     { posts }
   </div>
 )

 
    
  
}

export default Posts;
