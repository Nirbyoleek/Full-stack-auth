"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
	const router = useRouter();

	const [user, setUser] = React.useState({
		email: "",
		password: "",
		username: "",
	});

	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [loading, setLoading] = useState(false);

	const onLogin = async () => {
		try {
			setLoading(true);
			const response = await axios.post("/api/users/login", user);
			console.log("Login Successful", response.data);

			toast.success("Login success");

			router.push("/profile");
		} catch (error: any) {
			console.log("Login failed", error.message);
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (user.email.length > 0 && user.password.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1>Login</h1>
			<hr />

			{/* EMAIL */}
			<label htmlFor="email">email</label>
			<input
				className="p-2 rounded-lg border-gray-300 mb-4 text-black"
				id="email"
				type="text"
				value={user.email}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
				placeholder="email"
			/>
			{/* PASSWORD */}
			<label htmlFor="password">password</label>
			<input
				className="p-2 rounded-lg border-gray-300 mb-4 text-black"
				id="password"
				type="password"
				value={user.password}
				onChange={(e) => setUser({ ...user, password: e.target.value })}
				placeholder="password"
			/>
			<button
				onClick={onLogin}
				className="p-2 mb-4 rounded-lg border border-gray-300"
			>
				Login
			</button>
			<Link href="/signup">Visit Signup</Link>
		</div>
	);
}
