import React, { useState } from 'react';
import { FaRegCopy } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

export default function Password_Generator() {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(10);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const generatePassword = () => {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()";

        let allChars = lowercaseChars;
        if (includeUppercase) allChars += uppercaseChars;
        if (includeNumbers) allChars += numberChars;
        if (includeSymbols) allChars += symbolChars;

        let generatedPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            generatedPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
        setPassword(generatedPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);

    };

    return (
        <div className="flex flex-col items-center lg:p-8 md:-4 p-1 bg-gradient-to-r min-h-screen">
            <h1 className="text-center text-2xl  md:text-4xl lg:text-5xl font-bold text-gray-800  mb-4 md:mb-8">
                Password Generator
            </h1>

            <div className="w-full lg:max-w-xl lg:p-6 md:p-4 p-2.5 shadow-md rounded-lg border border-gray-200">
                <h2 className="text-3xl font-semibold text-gray-700 mb-4 text-center ">Generate a Secure Password</h2>
                <p className="text-gray-600 mb-8 text-center ">Customize your password options below:</p>

                <div className=' md:flex items-center justify-between gap-6 overflow-hidden '>
                    <div className=" py-2 rounded-md border border-gray-300 w-full px-3 ">
                        <p className="text-gray-700 font-mono text-lg">
                            {password || "(CfxU9Op9)"}
                        </p>
                    </div>

                    <div className='border text-center border-gray-300 rounded-lg  md:mt-0 mt-2 '>
                        <button
                            onClick={copyToClipboard}
                            className=" font-medium hover:underline p-2  "
                        >
                            < FaRegCopy size={30} />
                        </button>
                    </div>
                </div>

                <div className="my-6">
                    <label className="block text-xl text-gray-700 font-medium mb-2">Password Length: {passwordLength}</label>
                    <input
                        type="range"
                        min="8"
                        max="24"
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(Number(e.target.value))}
                        className="w-full accent-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Include Options</label>
                    <div className="flex flex-col space-y-3">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={includeUppercase}
                                onChange={(e) => setIncludeUppercase(e.target.checked)}
                                className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring "
                            />
                            <span className="ml-3 text-gray-600">Include Uppercase Letters</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={includeNumbers}
                                onChange={(e) => setIncludeNumbers(e.target.checked)}
                                className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring "
                            />
                            <span className="ml-3 text-gray-600">Include Numbers</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={includeSymbols}
                                onChange={(e) => setIncludeSymbols(e.target.checked)}
                                className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring "
                            />
                            <span className="ml-3 text-gray-600">Include Symbols</span>
                        </label>
                    </div>
                </div>

                <button
                    onClick={generatePassword}
                    className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200 ease-in-out"
                >
                    <IoReload size={24} className="mr-1.5" /> Generate New Password
                </button>
            </div>
        </div>
    );
}
