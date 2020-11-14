import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return(
        <nav style={{display:"flex",justifyContent:"flex-end"}}>
            <p className='f3 link black ma2 pa3 pointer' id='SignOut'>
                Sign Out
            </p>
        </nav>
    )
}

export default Navigation;