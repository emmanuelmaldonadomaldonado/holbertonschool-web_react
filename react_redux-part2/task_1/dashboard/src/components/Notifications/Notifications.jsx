import React from "react";
import { useSelector } from "react-redux";

const Notifications = () => {
  const loading = useSelector((state) => state.notifications.loading);
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div className="Notifications">{/* Render notifications here */}</div>;
};

export default Notifications;
