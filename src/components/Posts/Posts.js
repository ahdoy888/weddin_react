import React from 'react';
import './Posts.css';



const Posts = (props)=> {

 const posts = props.posts.map((post, index) => {
  return (
   

    <div className="card" key={index} style={{width: 15 + `rem`}}>
      <img src={post.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{post.content}</p>
      </div>
      <button onClick={() => props.editPost(post)}>Edit</button>
      <button onClick={() => props.removePost(post._id)}>Delete</button>
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
