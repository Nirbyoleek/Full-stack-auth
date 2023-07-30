export default function UserProfile({ params }: any) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1>Profile</h1>
			<hr />
			<p className="text-4xl">
				Profile page
				<span className="text-4xl p-2 ml-2 rounded-lg bg-red-700">
					{params.id}
				</span>
			</p>
		</div>
	);
}
