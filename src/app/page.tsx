import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/LAWBridgeBlack.png';


export default function Home() {
  return (
    <div className="min-h-screen h-[400vh] flex flex-col">
      <main className="min-h-[95vh] flex-grow bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="w-3/5 mx-auto text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">
            Empowering the future of digital solutions
          </p>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Unlock the full potential of <span className="text-blue-600">LAWBridge</span>
          </h1>
          <p className="text-lg text-gray-700 mb-10">
            LAWBridge is the world’s leading platform for seamless digital connections. Create, manage, and innovate like never before.
          </p>
          <div className="space-x-4">
            <Link href={`/start`}>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transform transition-all duration-300 ease-300 hover:scale-110">
                Get Started
              </button>
            </Link>
            <button className="px-6 py-3 bg-gray-100 text-gray-900 rounded-full shadow hover:bg-gray-200 transform transition-all duration-300 ease-300 hover:scale-110">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-xl text-gray-600 mb-6">A seamless experience for digital innovation</p>
          <div className="flex justify-center space-x-8">
            <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center opacity-80 transform transition-all duration-500 ease-in-out hover:scale-125 hover:rotate-45">
              <div className="w-20 h-20 bg-white rounded-full"></div>
            </div>
            <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center opacity-80 transform transition-all duration-500 ease-in-out hover:scale-125 hover:rotate-45">
              <div className="w-20 h-20 bg-white rounded-full"></div>
            </div>
            <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center opacity-80 transform transition-all duration-500 ease-in-out hover:scale-125 hover:rotate-45">
              <div className="w-20 h-20 bg-white rounded-full"></div>
            </div>
            <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center opacity-80 transform transition-all duration-500 ease-in-out hover:scale-125 hover:rotate-45">
              <div className="w-20 h-20 bg-white rounded-full"></div>
            </div>
            <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center opacity-80 transform transition-all duration-500 ease-in-out hover:scale-125 hover:rotate-45">
              <div className="w-20 h-20 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </main>

      <div className="w-full bg-gray-200 py-20">
        <div className="w-3/5 mx-auto text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">
            Key Features of LAWBridge
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-6">
            Why Choose LAWBridge?
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            LAWBridge brings advanced tools to your fingertips. We empower businesses and individuals to create, connect, and manage with ease.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Seamless Integration</h3>
              <p className="text-gray-700">
                Easily integrate LAWBridge into your existing workflows and platforms for a smoother user experience.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Security First</h3>
              <p className="text-gray-700">
                Built with security as a top priority, we ensure your data is always protected with state-of-the-art encryption.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Global Reach</h3>
              <p className="text-gray-700">
                With a global network of users, LAWBridge allows for easy cross-border collaboration and seamless communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}