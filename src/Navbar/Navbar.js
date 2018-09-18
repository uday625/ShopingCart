import React from 'react';

const Navbar = (props) => {
    return ( 
        <div> 
            <nav className="navbar navbar-light bg-light shadow">
                <a className="navbar-brand" href="">
                    <img src="https://images.vexels.com/media/users/3/141185/isolated/preview/b2c7de1951d5d57e9305c96ca875e170-shopping-bags-by-vexels.png" width="30" height="30" alt=""/>
                    SHOPCENTER
                </a>
                
                
                <span> 
                    <img src="http://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532323sy0um.png" width="30" height="30" alt=""/>                                       
                    <span className ="badge badge-pill badge-warning">{props.totalCounters} </span>
                </span>
            </nav>

        </div> 
    );
}
 
export default Navbar;
