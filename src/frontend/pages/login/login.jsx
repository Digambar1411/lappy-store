import React, { useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";

export function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { authDispatch } = useAuth();
	const navigate = useNavigate();

	const loginHandler = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("/api/auth/login", {
				email,
				password,
			});
			if (response.status === 201 || 200) {
				localStorage.setItem("token", response.data.encodedToken);
				localStorage.setItem(
					"user",
					JSON.stringify({
						name: response.data.foundUser.firstName,
						email: response.data.foundUser.email,
					})
				);
				authDispatch({
					type: "LOGIN",
					payload: "",
				});
				navigate("/");
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleGuestLogin = async (e) => {
		setEmail("admin@gmail.com");
		setPassword("Digambar1234");
	};

	return (
		<>
			<Navbar />
			<div className="login-card flex-col">
				<h1 className="text-center margin-below-1rem">Login</h1>
				<form className="flex-col-login" onSubmit={loginHandler}>
					<div className="flex-col">
						<label className="larger-font" htmlFor="email">
							Email address
						</label>
						<input
							className="input"
							type="email"
							placeholder="abc@gmail.com"
							required
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>

					<div className="flex-col">
						<label className="larger-font" htmlFor="password">
							Password
						</label>
						<input
							className="input"
							placeholder="enter your password"
							id="password"
							type="password"
							required
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<div className="flex-col-login margin-top-8px">
						<div className="justify-content-space-btwn">
							<label className="flex-row">
								<input
									className="input-checkbox"
									type="checkbox"
									name="light"
									value=""
								/>
								<span>Remember me</span>
							</label>
							<Link className="link-forgot-pass" to="#">
								Forgot password?
							</Link>
						</div>
					</div>

					<div>
						<button className="w-100 login-btn outline-login" type="submit">
							Login
						</button>

						<button
							className="w-100 login-btn solid-login"
							type="submit"
							onClick={handleGuestLogin}
						>
							Guest Login
						</button>
					</div>
				</form>

				<div className="text-center margin-top-1rem">
					<Link className="link-black text-center flex-center" to="/signup">
						Create New Account
						<span className="material-icons-outlined fs-24">arrow_forward</span>
					</Link>
				</div>
			</div>
		</>
	);
}
