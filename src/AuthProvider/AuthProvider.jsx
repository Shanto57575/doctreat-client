import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState([]);
	const [loader, setLoader] = useState(true);

	const createUser = (email, password) => {
		setLoader(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const SignIn = (email, password) => {
		setLoader(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		setLoader(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoader(false);
			const loggedUser = {
				email: currentUser?.email,
			};
			if (currentUser && currentUser?.email) {
				fetch("http://localhost:5000/jwt", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(loggedUser),
				})
					.then((res) => res.json())
					.then((data) => {
						localStorage.setItem("doctorsSecret", data.token);
					});
			} else {
				localStorage.removeItem("doctorsSecret");
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		createUser,
		SignIn,
		loader,
		logOut,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
