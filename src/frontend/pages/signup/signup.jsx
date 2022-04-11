import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import "../login/auth.css";

export function Signup(){
    return(
       <>
       <Navbar />
        <div className="login-card flex-col">
            <h1 className="text-center margin-zero">Sign up</h1>
            <form className="flex-col">
                <div className="flex-col-login">
                    <label className="larger-font" for="email">Email address</label>
                    <input className="input padding-top-12px" type="email" placeholder="abc@gmail.com" required/>
                </div>

                <div className="flex-col">
                    <label className="larger-font" for="password">Password</label>
                    <input className="input padding-top-12px" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" id='password' type="password" required/>
                </div>

                <div className="flex-col-login">
                    <label className="larger-font" for="password">Re-type Password</label>
                    <input className="input padding-top-12px" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" id='password' type="password" required/>
                </div>

                <div className="flex-col-login margin-top-8px">
                    <div className="flex-left">
                        <label className="flex-row-login">
                            <input className="input-checkbox" type="checkbox" name="light"  value="" required/>
                            <span required>Accept terms & condition</span>
                        </label>
                        
                    </div>

                </div>
                
                <div >
                    <button className="w-100 login-btn"><Link className="link-white" to="">Create account</Link></button>
                </div>
            </form>

            <div className="flex-row-login text-center margin-top-1rem">
                <span>Already have account ?</span>
                <div className="flex-center">
                    <Link className=" link-black text-center" to="/login">Login</Link>
                    <span className="material-icons-outlined bold">login</span>
                </div>
                
            </div>
        </div>
       </>
    )
}