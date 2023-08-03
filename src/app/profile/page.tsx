"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
	const router = useRouter();
	const logout = async () => {
		try {
			await axios.get("/api/users/logout");
			router.push("/login");
		} catch (error: any) {
			console.log(error.message);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1>Profile</h1>
			<hr />
			<h1>Profile page</h1>
			<hr />

			<button
				onClick={logout}
				className="bg-blue-600 rounded-xl p-2 mt-10 text-bold"
			>
				Logout
			</button>
		</div>
	);
}
