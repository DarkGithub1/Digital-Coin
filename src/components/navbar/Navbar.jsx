import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
const Navbar = () => {
  const{setCurrency}=useContext(CoinContext)
  const currencyHandler=(e)=>{
    switch(e.target.value){
      case "usd":{
        setCurrency({name:'usd',symbol:'$'})
        break;
      }
      case "eur":{
        setCurrency({name:'eur',symbol:'€'})
        break;
      }
      case "inr":{
        setCurrency({name:'inr',symbol:'₹'})
        break;
      }
      default:{
        setCurrency({name:'usd',symbol:'$'})
        break;
      }
    }
  }
  return (
    <div className="navbar">
    <Link to={'/'}>
      <img src={logo} className="logo" alt="no Logo" />
      </Link>
      <ul>
      <Link to={'/'}> <li>Home</li></Link> 
      
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
