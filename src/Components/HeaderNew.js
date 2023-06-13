import React, { Component } from 'react'
import "./HeaderNew.css"
import "./RolexLight.woff2"
import { Link } from 'react-router-dom'
class HeaderNew extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    
    render() {
        
        return (
            <div>
                
                    
                    <div className="navbar">Chocolicious
                    <Link to="/list">
                    <div id="vieworder">View Orders</div>
                    </Link>
                    <Link to="/login">
                    <div id='logout'>LogOut</div></Link>
                    </div>
                    
                
            </div>
        )
    }
}

export default HeaderNew