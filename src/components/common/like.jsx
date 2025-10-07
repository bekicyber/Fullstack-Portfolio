import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const Like = ({ liked, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={liked ? solidHeart : regularHeart}
      fontSize={24}
      style={{ cursor: "pointer", color: liked ? "black" : "black" }}
      onClick={onClick}
    />
  );
};

export default Like;
