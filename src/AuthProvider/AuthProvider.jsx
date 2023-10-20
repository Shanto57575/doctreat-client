import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const auth = getAuth(app);
const gitProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

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

	const GithubSignIn = () => {
		setLoader(true);
		return signInWithPopup(auth, gitProvider);
	};

	const googleSignIn = () => {
		setLoader(true);
		return signInWithPopup(auth, googleProvider);
	};

	const resetPassword = (email) => {
		setLoader(true);
		return sendPasswordResetEmail(auth, email);
	};

	const logOut = () => {
		setLoader(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			if (currentUser) {
				axios
					.post("http://localhost:5000/jwt", { email: currentUser?.email })
					.then((response) => {
						localStorage.setItem("access-token", response.data.token);
						setLoader(false);
					});
			} else {
				localStorage.removeItem("access-token");
			}
		});

		return () => {
			return unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		loader,
		createUser,
		SignIn,
		googleSignIn,
		GithubSignIn,
		logOut,
		resetPassword,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
