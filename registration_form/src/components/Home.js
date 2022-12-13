import React from "react";

export default function Home(props) {
  const userDetails = props.userDetails;
  return (
    <div>
      <div className="user-details">
        <p>Following are the user details:</p>
        <div>First name: {userDetails.first_name}</div>
        <div>Last name: {userDetails.last_name}</div>
        <div>Email: {userDetails.user_email}</div>
        <div>Country: {userDetails.country}</div>
        <div>State: {userDetails.state}</div>
        <div>City: {userDetails.city}</div>
      </div>
    </div>
  );
}
