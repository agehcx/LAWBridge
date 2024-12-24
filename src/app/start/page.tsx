"use client";

import { SetStateAction, useState } from 'react';

export default function RoleSelect() {
    const [selectedRole, setSelectedRole] = useState('');

    const roles = [
        { id: 'public', label: 'General Public' },
        { id: 'legal', label: 'Legal Institutions' },
        { id: 'business', label: 'Business Organizations' },
    ];

    const handleSelect = (role: SetStateAction<string>) => {
        setSelectedRole(role);
        // console.log(`Selected role: ${role}`);
        // Add navigation or logic here as needed
    };

    return (
        <div
            className="flex items-center justify-center bg-gray-100"
            style={{ height: 'calc(100vh - 8vh)' }} // Adjust for the navbar
        >
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-semibold text-gray-800 text-center">
                    Welcome to LAWBridge
                </h1>
                <p className="text-gray-600 mb-6 text-center">
                    Please select your role to proceed:
                </p>
                <div className="space-y-4">
                    {roles.map((role) => (
                        <button
                            key={role.id}
                            onClick={() => handleSelect(role.label)}
                            className={`w-full py-2 px-4 rounded-lg text-white font-medium bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out`}
                        >
                            {role.label}
                        </button>
                    ))}
                </div>
                {/* {selectedRole && (
                    <p className="mt-6 text-center text-green-600">
                        You selected: <strong>{selectedRole}</strong>
                    </p>
                )} */}
            </div>
        </div>
    );
}