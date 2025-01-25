function Header() {
    return (
        <header className="bg-gray-800 text-white py-4 px-6">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">
                    DEX Swap
                </div>
                <div className="flex flex-row gap-8 mx-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        Swap 
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        Tokens 
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                        Connect Wallet
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
