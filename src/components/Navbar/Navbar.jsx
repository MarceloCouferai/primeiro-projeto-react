import React from "react";
import logoImg from '../../assets/images/logo.png';
import "./Navbar.css"

class Navbar extends React.Component{
    render(){
        return (
            <header>
            <nav id="nav-bar">
              <div className="nav-brand">
                <img src={logoImg} alt="" />
                <h1>Space Flight News</h1>
              </div>
    
              <ul className="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/">Trending</a></li>
                <li><a href="/">Categorias</a></li>
                <li><a href="/">About is</a></li>
              </ul>
            </nav>
          </header>
        )
    }
}

export default Navbar;