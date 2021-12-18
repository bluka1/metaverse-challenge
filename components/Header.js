import { useMoralis } from 'react-moralis';
import Image from 'next/image';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';
import logo from '../img/logo.png';

function Header() {
	const { user } = useMoralis();

	return (
		<div className="sticky top-2 p-5 z-50 bg-gradient-to-r from-cyan-300 to-blue-600 shadow-sm text-white border-b-3 border-blue-900 font-sans rounded-[30px]">
			<div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
				<div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
					<Image
						src={logo}
						layout="fill"
						objectFit="cover"
						className="rounded-full"
					/>
				</div>

				<div className="col-span-4 text-left lg:text-center">
					<div className="relative h-48 w-48 lg:mx-auto border-white border-8 rounded-full">
						<Avatar logoutOnPress />
					</div>

					<h1 className="text-3xl">Welcome to the METAVERSE!</h1>
					<h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

					<ChangeUsername />
				</div>
			</div>
		</div>
	);
}

export default Header;
