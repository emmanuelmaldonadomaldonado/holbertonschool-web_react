import React, { useRef } from "react";
// import { useSelector, useDispatch } from 'react-redux'; // Remove these if not needed

const Notifications = () => {
  const notificationsRef = useRef(null);

  const handleToggleDrawer = () => {
    if (notificationsRef.current) {
      notificationsRef.current.classList.toggle("visible");
    }
  };

  return (
    <div ref={notificationsRef} className="Notifications">
      <button onClick={handleToggleDrawer}>Toggle Notifications</button>
      {/* Render notifications here */}
    </div>
  );
};

export default Notifications;
