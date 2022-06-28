import React from "react";
import "./style.css";
import userpic from "./user.jpg";
const Sidebar = (props) => {
  const userList = props.connectedUsers;

  //console.log("In sidebar userlist:", userList);

  const userName_from_click = (e) => {
    let selectedUserDetails = userList.find((user) => user.username === e);

    //console.log("In sidebar the user details:", selectedUserDetails);
    props.selectUser(selectedUserDetails);
  };

  let showUsers = userList.map((user) => {
    return (
      <div className="chatOnline">
        <div className="chatOnlineFriend" key={user.key}>
          <div className="chatOnlineImgContainer">
            <img className="chatOnlineImg" src={userpic} alt="" />
            <div className="chatOnlineBadge"></div>
          </div>
          <div
            onClick={(e) => userName_from_click(user.username)}
            className="chatOnlineName"
          >
            <h6> {user.username}</h6>
          </div>
        </div>
      </div>
    );
  });

  return <div>{showUsers}</div>;
};

export default Sidebar;
