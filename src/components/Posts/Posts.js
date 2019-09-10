import React from 'react';
import './Posts.css';



const Posts = (props)=> {

 const posts = props.posts.map((post, index) => {
  return (
   
    
      <div className="card mb-4" key={index} >
      <img src={post.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{post.content}</p>
        <div>
          <h3>Comments</h3>
          {
            post.comments.map((comment)=> 
              <p className="card-text" key={comment._id}>{comment.content}</p>
            )
          }
        
        </div>
      </div>
      {props.isLoggedIn &&<>
       <button onClick={() => props.editPost(post)}>Edit</button>
      <button onClick={() => props.removePost(post._id)}>Delete</button>
      </>}
    </div>
  
  
  

  )
 })

 return (
  <div className="row d-flex flex-row">
  <div className="col-md-4">
     { posts }
    </div>
    <div className="col-md-4">
     bvhgnbjhbnjhbjhbhb
    </div>
    </div>
 )

 
    
  
}

export default Posts;
