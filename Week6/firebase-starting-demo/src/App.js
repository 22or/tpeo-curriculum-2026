import './App.css';
import { useState } from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth,GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe8rXUropmwsi_0irDxESQzFxGuG1oI1o",
  authDomain: "tpeo-test.firebaseapp.com",
  projectId: "tpeo-test",
  storageBucket: "tpeo-test.firebasestorage.app",
  messagingSenderId: "705706693030",
  appId: "1:705706693030:web:2704643320032df404ff67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


function App() {
	// This will hold the user information
	const [user,setUser] = useState(null);
	const [loginEmail,setLoginEmail] = useState('');
	const [loginPassword,setLoginPassword] = useState('');
	const [signupEmail,setSignupEmail] = useState('');
	const [signupPassword,setSignupPassword] = useState('');

	const handleSignup = async (e) => {
		e.preventDefault();
		try {
			const userCred = await createUserWithEmailAndPassword(auth,signupEmail,signupPassword);
			setUser(userCred.user);
		}
		catch (exception) {
			alert(exception);
		}
	}
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const userCred = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
			setUser(userCred.user);
		}
		catch (exception) {
			alert(exception);
		}
	}

	const handleSignout = async () => {
		try {
			setUser(null);
		}
		catch (exception) {
			alert(exception);
		}
	}

	const googleSignin = async () => {
		try {
			const userCred = await signInWithPopup(auth,googleProvider);
			setUser(userCred.user);
		}
		catch (exception) {
			alert(exception);
		}
	}


	// This will hold the uploaded image URL
	const uploadedImageURL = null;

	return (
		<div className="App">
		<header className="App-header">
		<h1>Firebase Authentication & File Upload Demo</h1>
		{/* Check if the user exists (is logged in) to show the login or welcome screen */}
		{!user ? (
			<>
			<form onSubmit={handleLogin}>
			<h3>Login</h3>
			<input
			type="email"
			placeholder="Email"
			onChange={(e) => {setLoginEmail(e.target.value)}}
			required
			/>
			<input
			type="password"
			placeholder="Password"
			onChange={(e) => {setLoginPassword(e.target.value)}}
			required
			/>
			<button type="submit">Login</button>
			</form>

			<form onSubmit={handleSignup}>
			<h3>Sign Up</h3>
			<input
			type="email"
			placeholder="Email"
			onChange={(e) => {setSignupEmail(e.target.value)}}
			required
			/>
			<input
			type="password"
			placeholder="Password"
			required
			onChange={(e) => {setSignupPassword(e.target.value)}}
			/>
			<button type="submit">Sign Up</button>
			</form>

			<button onClick={googleSignin}>Sign Up with Google</button>
			</>
		) : (
			<div>
			<p>Welcome, {user?.displayName || user?.email}</p>
			<button onClick={handleSignout}>Sign Out</button>

			{/* Image upload section */}
			<h3>Upload an Image</h3>
			<input type="file" />
			<button>Upload</button>

			{/* Display uploaded image if there is one*/}
			{uploadedImageURL && (
				<div>
				<h4>Uploaded Image:</h4>
				<img
				alt="Uploaded"
				style={{ width: "300px", height: "auto" }}
				/>
				</div>
			)}
			</div>
		)}
		</header>
		</div>
	);
}

export default App;
