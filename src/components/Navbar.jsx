import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(params) {
  return (
    <>
      <nav className="navbar fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex w-full justify-between py-4 px-16 border items-center">
          <div className="flex gap-5 items-center">
            <Image
              src="/logosmk.png"
              width={35}
              height={35}
              alt="Sapa alumni"
            />
            <h1 className="text-xl font-bold">SMK NEGERI 2 BALEENDAH</h1>
          </div>
          <ul className="gap-5 hidden sm:flex items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Profile</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/forum">Community</Link>
            </li>
            <li>
              <button className="bg-blue-500 text-white px-5 py-1 rounded-md">
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
