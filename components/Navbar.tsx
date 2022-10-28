import logo from '../public/icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import userSvg from '../public/user.svg';
export default function Navbar(): JSX.Element {
  const { user, username } = useContext(UserContext);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/enter" className="flex items-center">
          <Image src={logo} className=" h-12 w-12 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Wrilogs
          </span>
        </Link>
        <div className="flex md:order-2">
          {username !== '' ? (
            <>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Sign Out
              </button>

              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Write Posts
              </button>
              <Image
                className="w-10 h-10 mx-4 rounded-full"
                src={user === null ? userSvg : user.photoURL}
                alt="Jese Leos"
                width={40}
                height={40}
              />
            </>
          ) : (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Log in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
