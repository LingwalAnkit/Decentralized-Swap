import React from 'react';

function Header() {
    return (
        <header className="bg-transparent text-white py-8 px-12">
            <div className="flex justify-between items-center">
                <div className="flex flex-row items-center gap-8">
                    <div className="text-2xl font-bold">
                        DEX Swap
                    </div>
                    <nav className="flex items-center gap-8">
                        <div className="text-white text-lg font-medium 
                            transition-colors duration-300 
                            hover:text-blue-400 
                            cursor-pointer mt-2">
                            Swap
                        </div>
                        <div className="text-white text-lg font-medium 
                            transition-colors duration-300 
                            hover:text-blue-400 
                            cursor-pointer mt-2">
                            Tokens
                        </div>
                    </nav>
                </div>

                {/* Right Side: Ethereum and Connect Button */}
                <div className="flex flex-row items-center gap-8 mt-2">
                    {/* Ethereum Section */}
                    <div className="flex items-center space-x-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg"
                            alt="Ethereum Logo"
                            className="w-6 h-6"
                        />
                        <span className="text-lg font-semibold">Ethereum</span>
                    </div>

                    {/* Connect Button */}
                    <button className="
                        bg-blue-600 
                        hover:bg-blue-700 
                        text-white 
                        font-semibold 
                        py-2 
                        px-6 
                        rounded-full 
                        transition-all 
                        duration-300 
                        ease-in-out 
                        hover:scale-105 
                        active:scale-95">
                        Connect
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;