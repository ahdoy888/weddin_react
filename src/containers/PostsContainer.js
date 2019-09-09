import axios from 'axios';
import React, {Component} from 'react';
import { API_URL } from '../constants';
import Posts from '../components/Posts/Posts';


class PostsContainer extends Component {

    state = {
      posts: [],
      img: '',
      content: '',
      username: '',
      mode: 'view post'
    }


  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    
    const { img, content, mode, id } = this.state
    const newPost = {
      img, content
    };
    if(mode === "create post"){
    axios.post(`${API_URL}/posts`, newPost, { withCredentials: true })
      .then(res =>{
        const posts = this.state.posts
        posts.push(res.data.data)
        this.setState({
          id: "",
          img: "",
          content: "",
          posts,
          mode: 'view post'
        })
      })
      .catch(err => console.log(err));
    }else {
      axios.put(`${API_URL}/posts/${id}`, newPost, { withCredentials: true })
      .then(res =>{
        const posts = this.state.posts.map((post)=> {
          if(post._id === id){
            post = res.data.data
          }
          return post
        })
        this.setState({
          id: "",
          img: "",
          content: "",
          posts,
          mode: 'view post'
        })
      })
      .catch(err => console.log(err));
    }
  };

  componentDidMount() {
    axios.get(`${API_URL}/posts`, { withCredentials: true })
    .then(res => {
      this.setState({posts: res.data.data});
      console.log(res.data);
    })
    .catch(err=>console.log(err));
  };

  editPost = (post) => {
    this.setState({
      mode: "edit post",
      id: post._id,
      img: post.img,
      content: post.content
    })
  }


  removePost = (id) => {
    // this.props.removePost(id);
    axios.delete(`${API_URL}/posts/${id}`,  { withCredentials: true })
    .then(res => {
      this.setState({
        posts: this.state.posts.filter((post)=> post._id !== id)
      })
      console.log("successfully removed a post!");
    }).then().catch(err => console.log(err))
  }

 

  render() {
  
  return (
   
    <div>
      <button onClick={() => this.setState({
        id: "",
        img: "",
        content: "",
        mode: this.state.mode === "create post"? "view post": "create post"
      })}> {this.state.mode === "create post"? "View Posts": "Create Post"}</button>
      {this.state.mode === "create post" || this.state.mode === "edit post"?
      <div>
        <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <form>
          <div>
            <input onChange={this.handleChange} placeholder="image url" type="text" name="img" value={this.state.img}/>
          </div>

          <div>
            <input onChange={this.handleChange} placeholder="content" type="text" name = "content" value={this.state.content}/>
          </div>
          <button onClick={this.handleSubmit}>submit</button>
        </form>
  </div>
</div>

  
      </div>

       :<Posts posts ={this.state.posts} editPost={this.editPost} removePost={this.removePost}/>
    }
    </div>
  )
  }
}

export default PostsContainer;

