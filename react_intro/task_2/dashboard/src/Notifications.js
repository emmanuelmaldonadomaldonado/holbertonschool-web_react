import React from 'react';
import './Notifications.css'


import closeIcon from './close-icon.png';

const Notifications = () => {
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    };

    const getLatestNotification = () => {
        return "<strong>Urgent requirement</strong> - complete by EOD";
    };

    return (
        <div style={{
            position: 'relative',
            width: '300px',
            border: '1px solid #ccc',
            padding: '10px',
            margin: '20px',
        }}>
            <p>Here is the list of notifications</p>

            <button
                style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    backgroundColor: '#4CAF50',
                    border: 'none',
                    color: 'white',
                    padding: '10px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                }}
                aria-label="Close"
                onClick={handleButtonClick}
            >
                <img
                    src={closeIcon}
                    alt="Close icon"
                    style={{ width: '16px', height: '16px', marginRight: '5px' }}
                />
                Close
            </button>

            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    );
};

export default Notifications;
