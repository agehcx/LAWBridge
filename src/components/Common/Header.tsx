import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Logo from '@/assets/LAWBridgeBlackCut.png';

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      <Head>
        <title>Welcome to LAWBridge</title>
        <meta name="description" content="Experience the full potential of LAWBridge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full bg-white shadow-sm">
        <nav className="w-5/6 mx-auto px-4 py-4 flex justify-between items-center h-16">
          <div className="w-full flex justify-between items-center">
            <Link href={`/`}>
              <div className="flex items-center">
                <Image
                  src={Logo}
                  alt="logo"
                  height={40}
                  width={160}
                  className="object-contain"
                />
              </div>
            </Link>
            <ul className="flex space-x-6 items-center">
              <li><a href="#about" className="text-gray-700 hover:text-gray-900">About</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-gray-900">Services</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
            </ul>
            <Link href={`/start`}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transform transition-all duration-300 ease-300 hover:scale-105">
              Get Started
            </button>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}