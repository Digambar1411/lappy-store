import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	const initialValue = {
		isLoggedIn: false,
		token: localStorage.getItem("token") | [],
		user: localStorage.getItem("user"),
	};

	const authReducerFunc = (state, action) => {
		switch (action.type) {
			case "LOGIN":
				return {
					...state,
					isLoggedIn: true,
					user: JSON.parse(localStorage.getItem("user")),
				};

			case "SIGNUP":
				return {
					...state,
					isLoggedIn: true,
					user: JSON.parse(localStorage.getItem("user")),
				};

			case "LOGOUT":
				return { ...state, isLoggedIn: false };

			default:
				return state;
		}
	};

	const logoutHandler = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		authDispatch({
			type:"LOGOUT",
			payload:""})
		navigate("/login");
	};

	const [authState, authDispatch] = useReducer(authReducerFunc, initialValue);

	return (
		<AuthContext.Provider value={{ authState, authDispatch, logoutHandler }}>
			{children}
		</AuthContext.Provider>
	);
};

export { useAuth, AuthProvider };
