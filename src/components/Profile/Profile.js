import React from 'react';
import './Profile.css';

const Profile = ({ profile: { username, email, signup_date }}) => {
  // const Profile = (props) => {
  //   const { username } = props.user;
  // console.log('Profile Props = ', props);
  return (
    <div className="row d-flex">
      <div className="col-md-5 ">
      <div className="card profile" >
      <img src="https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png" class="card-img-top" alt="avatar" />
      <div className="card-body">
        <p className="card-text"><strong>Username:</strong> {username}</p>
        <p className="card-text"><strong>Email:</strong> {email}</p>
        <p className="card-text"><strong>Signup Date:</strong> {new Date(signup_date).toLocaleString()}</p>
      </div>
      </div>
    </div>
   
      
      
      {/* <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Signup Date:</strong> {new Date(signup_date).toLocaleString()}</p> */}


    </div>
  );
};

export default Profile;
