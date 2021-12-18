import { useMoralis } from 'react-moralis';

function ChangeUsername() {
	const { setUserData, isUserUpdating, userError, user } = useMoralis();

	const setUsername = () => {
		const username = prompt(
			`Enter your new username (current: ${user.getUsername()})`,
		);

		if (!username) {
			return;
		}

		setUserData({
			username,
		});
	};

	return (
		<div className="text-sm absolute top-5 right-5">
			<button
				disabled={isUserUpdating}
				onClick={setUsername}
				className="bg-blue-700 hover:bg-blue-600 text-white font-sans font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-white rounded"
			>
				Change your username
			</button>
		</div>
	);
}

export default ChangeUsername;
