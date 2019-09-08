import axios from 'axios';
import React, {Component} from 'react';
import { API_URL } from '../constants';
import Posts from '../components/Posts/Posts';


class PostsContainer extends Component {

    state = {
      posts: [],
      img: '',
      content: '',
      // username: '',
    }


  // handleChange = (event) => {
  //     this.setState({[event.target.name]: event.target.value});
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   let userId = localStorage.getItem('uid');
  //   const newPost = {title: this.state.title,content: this.state.content,username:userId, city: this.props.currentCity.id};
  //   axios.post(`${API_URL}/post`, newPost, { withCredentials: true })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // };

  componentDidMount() {
    axios.get(`${API_URL}/posts`, { withCredentials: true })
    .then(res => {
      this.setState({posts: res.data.data});
      console.log(res.data);
    })
    .catch(err=>console.log(err));
  };

  // componentDidUpdate(prevProps) {
  //   axios.get(`${API_URL}/post`).then(res => {
  //     this.setState({posts: res.data});
  //     console.log(res.data);
  //   })
  //   .catch(err=>console.log(err));
  // };

  // removePost = (id) => {
  //   // this.props.removePost(id);
  //   axios.delete(`${API_URL}/post/${id}`,  { withCredentials: true }).then(res => {
  //     console.log("successfully removed a post!");
  //   }).then().catch(err => console.log(err))
  // }

 

  render() {
  
  return <Posts posts = {this.state.posts} />
  }
}

export default PostsContainer;

