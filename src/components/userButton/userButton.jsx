import { useState } from 'react';
import './userButton.css';

const UserButton = ({ username, onClick }) => {

    const [open, setOpen] = useState(false);

    //TEMP
    const curentUser = true; 

    return curentUser ? ( 
       <div className="userButton">
            <img src="/general/noAvatar.png" alt=""/>
            <img 
            onClick={() => setOpen((prev) => !prev)} 
            src="/general/arrow.svg"
            alt=""
            className="arrow"
            />
            {open && (
            <div className='userOptions'>
                <div className='userOption'>Profile</div>
                <div className='userOption'>Settings</div>
                <div className='userOption'>Logout</div>
            </div>
            )}
         </div>
    ) : (
        <a herf='/' className='loginLink'>
        Login / sign Up
        </a>
        );
};

export default UserButton;