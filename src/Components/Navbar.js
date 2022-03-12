import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';


const Navbar=()=>{
    return(
        <nav>
            <Link to='/' >Home</Link>
            <Link to='/student'>Student</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
}
export default Navbar;