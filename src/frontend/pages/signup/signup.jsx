import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import "../login/auth.css";
import { useAuth } from "../../contexts/auth-context";
import axios from "axios";

export function Signup() {
	const { authDispatch } = useAuth();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const signUpHandler = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("/api/auth/signup", {
				email,
				password,
				name,
			});
			if (response.status === 200 || 201) {
				localStorage.setItem("token", response.data.token);
				localStorage.setItem(
					"user",
					JSON.stringify({
						name: response.data.createdUser.name,
						email: response.data.createdUser.email,
					})
				);
				authDispatch({
					type: "SIGNUP",
					payload: "",
				});
				navigate("/");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Navbar />
			<div className="login-card flex-col">
				<h1 className="text-center margin-below-1rem">Sign up</h1>
				<form className="flex-col-login" onSubmit={signUpHandler}>
					<div className="flex-col">
						<label className="larger-font" htmlFor="name">
							Name
						</label>
						<input
							className="input padding-top-12px"
							type="name"
							placeholder="john"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

					<div className="flex-col">
						<label className="larger-font" htmlFor="email">
							Email address
						</label>
						<input
							className="input padding-top-12px"
							type="email"
							placeholder="abc@gmail.com"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="flex-col">
						<label className="larger-font" htmlFor="password">
							Password
						</label>
						<input
							className="input padding-top-12px"
							placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
							id="password"
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className="flex-col-login margin-top-8px">
						<div className="flex-left">
							<label className="flex-row">
								<input
									className="input-checkbox"
									type="checkbox"
									name="light"
									value=""
									required
								/>
								<span required>Accept terms & condition</span>
							</label>
						</div>
					</div>

					<div>
						<button className="w-100 login-btn solid-login" type="submit">
							Create account
						</button>
					</div>
				</form>

				<div className="flex-row-login margin-top-1rem">
					<span>Already have account ?</span>
					<div className="flex-center">
						<Link className=" link-black flex-center" to="/login">
							Login
							<span className="material-icons-outlined fs-24">login</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
