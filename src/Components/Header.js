import React, { Component } from 'react'
import "./Header.css"
import "./RolexLight.woff2"
import { Link } from 'react-router-dom'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    
    render() {
        
        return (
            <div>
                
                    
                    <div className="navbar">Chocolicious
                    <Link to="/signup">
                    <div id="signuphome">Signup</div>
                    </Link>
                    <Link to="/login">
                    <div id='loginhome'>Signin</div></Link>
                    </div>
                    
                
            </div>
        )
    }
}

export default HeaderComponent