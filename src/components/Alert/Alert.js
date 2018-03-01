import React from 'react';
import { createAlert } from 'react-redux-alerts';
 
const MyAlert = ({message, close}) => (
    <div className='myAlert'>
        {message}
        <button onClick={close}> Click to Dismiss me </button>
    </div>
);
 
export default createAlert({
    alertName: 'myAlert'
})(MyAlert);