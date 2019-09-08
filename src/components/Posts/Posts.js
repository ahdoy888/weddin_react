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

    <div class="card" style={{width: 18 + `rem`}}>
      <img src={post.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">{post.content}</p>
      </div>
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
