import React from 'react';
import './Profile.css';

const Profile = ({ profile: { username, email, signup_date }}) => {
  // const Profile = (props) => {
  //   const { username } = props.user;
  // console.log('Profile Props = ', props);
  return (
    <div class="card" className="profile" style={{width: 18 + `rem`}}>
      <img src="https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text"><strong>Username:</strong> {username}</p>
        <p class="card-text"><strong>Email:</strong> {email}</p>
        <p class="card-text"><strong>Signup Date:</strong> {new Date(signup_date).toLocaleString()}</p>
      </div>
      
      
      {/* <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Signup Date:</strong> {new Date(signup_date).toLocaleString()}</p> */}


    </div>
  );
};

export default Profile;
