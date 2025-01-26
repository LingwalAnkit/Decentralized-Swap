import { useState } from "react";

function Swap() {
  const [fromCurrency, setFromCurrency] = useState("ETH"); // Default: Ethereum
  const [toCurrency, setToCurrency] = useState("BTC"); // Default: Bitcoin
  const [amount, setAmount] = useState(""); // Input amount
  const [convertedAmount, setConvertedAmount] = useState(0); // Calculated amount
  const exchangeRate = 0.07; // Mock exchange rate (1 ETH = 0.07 BTC)

  // Handle swap logic
  const handleSwap = () => {
    if (amount > 0) {
      setConvertedAmount((amount * exchangeRate).toFixed(4));
    } else {
      alert("Please enter a valid amount");
    }
  };

  return (
    <div className="flex flex-col items-center justify-top text-white mt-24">
      <div className="bg-gray-800 bg-opacity-90 p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Crypto Swap</h1>

        {/* From Currency */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">From</label>
          <div className="flex items-center gap-4">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full py-2 px-4 bg-gray-700 rounded-lg text-white focus:outline-none"
            >
              <option value="ETH">Ethereum (ETH)</option>
              <option value="BTC">Bitcoin (BTC)</option>
              <option value="USDT">Tether (USDT)</option>
            </select>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="w-1/2 py-2 px-4 bg-gray-700 rounded-lg text-white focus:outline-none"
            />
          </div>
        </div>

        {/* To Currency */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">To</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full py-2 px-4 bg-gray-700 rounded-lg text-white focus:outline-none"
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="USDT">Tether (USDT)</option>
          </select>
        </div>

        {/* Converted Amount */}
        <div className="bg-gray-700 py-2 px-4 rounded-lg text-white mb-4">
          <p className="text-sm">Estimated Output:</p>
          <p className="text-lg font-bold">{convertedAmount} {toCurrency}</p>
        </div>

        {/* Swap Button */}
        <button
          onClick={handleSwap}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
        >
          Swap
        </button>
      </div>
    </div>
  );
}

export default Swap;
