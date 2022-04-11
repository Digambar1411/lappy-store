import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

export function Login(){
    

    return (
        <>
            <Navbar />
            <div className="login-card flex-col">
                <h1 className="text-center margin-zero">Login</h1>
                <form className="flex-col">
                    <div className="flex-col">
                        <label className="larger-font" for="email">Email address</label>
                        <input className="input padding-top-12px" type="email" placeholder="abc@gmail.com" required/>
                    </div>

                    <div className="flex-col" >
                        <label className="larger-font" for="password">Password</label>
                        <input className="input  padding-top-12px" placeholder="enter your password" id='password' type="password" required/>
                    </div>
                    <div className="flex-col-login margin-top-8px">
                        <div className="flex-row-login">
                            <label className="flex-row-login">
                                <input className="input-checkbox" type="checkbox" name="light"  value=""/>
                                <span>Remember me</span>
                            </label>
                            <Link  className="link-forgot-pass" to="#">Forgot password</Link>
                        </div>

                    </div>
            
                    <div >
                        <button className="w-100 login-btn"><Link className="link-white" to="/">Login</Link></button>
                    </div>
                </form>

            
                <div className=" flex-center-login text-center margin-top-1rem">
                    <Link className="link-black text-center" to="/signup">Create New Account</Link>
                    <span className="material-icons-outlined bold">
                        arrow_forward
                        </span>
                </div>
            </div>
        </>

    );
}