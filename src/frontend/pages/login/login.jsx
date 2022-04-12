import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

export function Login(){
    

    return (
        <>
            <Navbar />
            <div className="login-card flex-col">
                <h1 className="text-center margin-below-1rem">Login</h1>
                <form className="flex-col-login">
                    <div className="flex-col">
                        <label className="larger-font" for="email">Email address</label>
                        <input className="input padding-top-12px" type="email" placeholder="abc@gmail.com" required/>
                    </div>

                    <div className="flex-col" >
                        <label className="larger-font" for="password">Password</label>
                        <input className="input  padding-top-12px" placeholder="enter your password" id='password' type="password" required/>
                    </div>
                    <div className="flex-col-login margin-top-8px">
                        <div className="justify-content-space-btwn">
                            <label className="flex-row">
                                <input className="input-checkbox" type="checkbox" name="light"  value=""/>
                                <span>Remember me</span>
                            </label>
                            <Link  className="link-forgot-pass" to="#">Forgot password?</Link>
                        </div>

                    </div>
            
                    <div >
                        <button className="w-100 login-btn"><Link className="link-white" to="/">Login</Link></button>
                    </div>
                </form>

            
                <div className="text-center center margin-top-1rem">
                    <Link className="link-black text-center center" to="/signup">Create New Account
                    <span className="material-icons-outlined bold center">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </>

    );
}