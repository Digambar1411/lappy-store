import React, { useState, useEffect} from "react";
import axios from "axios";
import "./home.css";
import { Navbar } from  "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { useNavigate} from "react-router-dom";
import { useFilter} from "../../contexts/filter-context";
export const laptopImage = require('../../assets/laptop.png');
const dellLogo = require('../../assets/dell-144.png');
const hpLogo = require('../../assets/hp-144.png');
const samsungLogo = require('../../assets/samsung-144.png');
const asusLogo = require('../../assets/asus-144.png');


export function Home() {
  const { dispatch } = useFilter();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

    const getCategory = async()=>{
        const res = await axios.get("/api/categories");
        setCategories(res.data.categories);
        
      }
    
      useEffect(()=>{
        getCategory()
      },[])
  
  return (
      <div>
        <Navbar /> 
        <div className="bg-image ">
          <div className="main-text flex-col">
            <p className="site-info">INDIA'S LARGEST LAPTOP STORE</p>
            <p className="deal">Get best laptops deals with exciting offers</p>
            <div>
              <button className="main-solid-btn primary-solid" onClick={()=> navigate('/products')} >Explore More</button>
            </div>
          </div>
        </div>

        <div className="home-body">
          <div className="deal-container flex-col ">
            <p className="deal-heading flex center">BEST DEALS</p>
            <div className="brand-cards flex ">

              {categories && categories.map((category)=> {const {_id, categoryName, description, image } = category;

                return (
                <div className="deal-card" key={_id} onClick={() => 
                  {

                    // clear any category previously selected
                    dispatch({type:"CLEAR"});
                    
                    // fetch product of selected category and navigate to products page
                    dispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: categoryName
                    });

                    navigate("/products");
                  }}>
                <div className="body">
                  <div className="img-div">
                    <img className="deal-card-img-size" src={ image }alt="samsung"/>
                  </div>
          
                  <div className="body-content div-padding">
                    <h3 className="deal-card-title">{categoryName}</h3>
                    <h4 className="card-sub-title">{description}</h4>
                  </div>
                </div>             
              </div>
              )})}
              
                    
            </div>
          </div>

          <div>
            <p className="deal-heading center flex">Featured Brands</p>
            <div className="deal-container flex center">
              <div className="laptop-brand">
                  <img className="brandLogo" src={ dellLogo } alt="dellLogo" />
                </div>
                
                <div className="laptop-brand">
                    <img  className="brandLogo" src={ hpLogo } alt="hpLogo" />
                </div>
                <div className="laptop-brand">
                    <img className="brandLogo" src={ samsungLogo }alt="samsungLogo"/>
                </div>
                <div className="laptop-brand"> 
                <img className="brandLogo" src={ asusLogo } alt="asusLogo"/>
                </div>
            </div>
          </div>
        </div>
    
        <Footer /> 
      </div>
  );
}

