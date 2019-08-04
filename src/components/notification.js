import React from "react";

const notification = props => {
  const notif_type = props.type === "error" ? "bg-red-500" : "bg-transparent";
  return <div className={notif_type}>{props.message}</div>;
};

export default notification;
