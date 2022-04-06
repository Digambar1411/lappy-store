import React from "react";
import "./home.css";
import { Navbar } from  "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
const laptopImage = require('../../assets/laptop.png');
const dellLogo = require('../../assets/dell-144.png');
const hpLogo = require('../../assets/hp-144.png');
const samsungLogo = require('../../assets/samsung-144.png');
const asusLogo = require('../../assets/asus-144.png');


export function Home() {
  const Navigate = useNavigate();
  return (
      <div>
        <Navbar /> 
        <div className="bg-image ">
          <div className="main-text flex-col">
            <p className="site-info">INDIA'S LARGEST LAPTOP STORE</p>
            <p className="deal">Get best laptops deals with exciting offers</p>
            <div>
              <button className="solid primary-solid" onClick={()=> Navigate('/products')} >Explore More</button>
            </div>
          </div>
        </div>

        <div className="home-body">
          <div className="deal-container flex-col ">
            <p className="deal-heading flex center">BEST DEALS</p>
            <div className="brand-cards flex ">
              <div className="card">
                <div className="body">
                  <div className="img-div">
                    <img className="deal-card-img-size" src={ laptopImage }alt="samsung"/>
                  </div>
          
                  <div className="body-content div-padding">
                    <h3 className="card-title" onClick={()=> Navigate('/products')}>Thin & Light Laptop</h3>
                    <h4 className="card-sub-title">Reimagine the Way Your Kids Learn No Cost EMI & more.</h4>
                  </div>
                </div>             
              </div>

              <div className="card">
                <div className="body">
                  <div className="img-div">
                    <img className="deal-card-img-size" src={ laptopImage }alt="laptop"/>
                  </div>
          
                  <div className="body-content div-padding">
                    <h3 className="card-title" onClick={()=> Navigate('/products')}>Budget Laptop </h3>
                    <h4 className="card-sub-title">Learning Made Engaging and Fun. Exclusive Deals with Great Offers.</h4>
                  </div>
                </div>             
              </div>

              <div className="card">
                <div className="body">
                  <div className="img-div">
                    <img className="deal-card-img-size" src={ laptopImage }alt="laptop"/>
                  </div>
          
                  <div className="body-content div-padding">
                    <h3 className="card-title" onClick={()=> Navigate('/products')}>Gaming Laptop</h3>
                    <h4 className="card-sub-title">Powerful gaming setups for brilliant wins.</h4>
                  </div>
                </div>
              </div>
                    
            </div>
          </div>

          <div>
            <p className="deal-heading center flex">Featured Brands</p>
            <div className="deal-container flex center">
              <div className="brand">
                  <img className="brandLogo" src={ dellLogo } alt="dellLogo" />
                </div>
                
                <div className="brand">
                    <img  className="brandLogo" src={ hpLogo } alt="hpLogo" />
                </div>
                <div className="brand">
                    <img className="brandLogo" src={ samsungLogo }alt="samsungLogo"/>
                </div>
                <div className="brand"> 
                <img className="brandLogo" src={ asusLogo } alt="asusLogo"/>
                </div>
            </div>
          </div>
        </div>
    
        <Footer /> 
      </div>
  );
}

