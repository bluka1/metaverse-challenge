import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import logo from '../img/logo.png';
import bg from '../img/bg.jpg';
import Notification from './Notification';

function Login() {
	const { authenticate, isAuthenticating } = useMoralis();

	return (
		<div className="bg-black relative">
			{isAuthenticating && (
				<Notification
					title="AUTHENTICATION..."
					message="Authenticate using Metamask"
					className="absolute top-0 right-0 h-16 w-16 animate-pulse"
				/>
			)}
			<div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-8">
				<Image
					className="object-cover rounded-full animate-wiggle"
					src={logo}
					height={200}
					width={200}
				/>
				<button
					onClick={authenticate}
					className="bg-gradient-to-r from-cyan-200 to-blue-500 rounded-full p-5 font-bold animate-wiggle text-white opacity-75"
				>
					Login to the Metaverse
				</button>
			</div>

			<div className="w-full h-screen">
				<Image
					src={bg}
					layout="fill"
					objectFit="cover"
					className="animate-pulse"
				/>
			</div>
		</div>
	);
}

export default Login;
