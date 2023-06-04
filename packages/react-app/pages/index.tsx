import React, { useState } from "react";
import connectToContract from "../utils/connectContract";
import Alert from "../components/Alert";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Home() {
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState("creation");
  const [tokenA, setTokenA] = useState("");
  const [tokenB, setTokenB] = useState("");
  const [amountA, setAmountA] = useState("");
  const [amountB, setAmountB] = useState("");
  const [liquidityPoolId, setLiquidityPoolId] = useState("");
  const [reserveA, setReserveA] = useState("");
  const [reserveB, setReserveB] = useState("");
  const [fees, setFees] = useState("");
  const [success, setSuccess] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);

  // TODO: Perform input validation

  async function handleCreateLiquidityPool(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    const body = {
      tokenA: tokenA,
      tokenB: tokenB,
      amountA: amountA,
      amountB: amountB,
    };

    try {
      console.log("Form successfully submitted!");
      await createLiquidityPool();
    } catch (error) {
      alert(
        `Oops! Something went wrong. Please refresh and try again. Error ${error}`
      );
    }
  }

  const createLiquidityPool = async () => {
    try {
      const ammContract = connectToContract();
      console.log(ammContract);
      if (ammContract) {
        let txn = await ammContract.createLiquidityPool(
          tokenA,
          tokenB,
          amountA,
          amountB,
          { gasLimit: 900000 }
        );
        console.log(await txn);
        setLoading(true);
        console.log("Creating pool...", txn.hash);
        await txn.wait();
        console.log("Created -- ", txn.hash);
        setSuccess(true);
        setLoading(false);
        setMessage("Tokens have been added to liquidity pool successfully.");
      } else {
        console.log("Error getting contract.");
      }
    } catch (error) {
      setSuccess(false);
      setLoading(false);
      console.log(error);
    }
  };

  // Mock data - replace with actual implementation
  // const mockLiquidityPoolId = "123456789";
  // const mockReserveA = "1000";
  // const mockReserveB = "2000";
  // const mockFees = "0.03%";

  // // Update state with the created pool's details
  // setLiquidityPoolId(mockLiquidityPoolId);
  // setReserveA(mockReserveA);
  // setReserveB(mockReserveB);
  // setFees(mockFees);

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen mt-10 ml-10">
        {loading && (
          <Alert
            alertType={"loading"}
            alertBody={"Please wait"}
            triggerAlert={true}
            color={"white"}
          />
        )}
        {success && (
          <Alert
            alertType={"success"}
            alertBody={message}
            triggerAlert={true}
            color={"palegreen"}
          />
        )}
        {success === false && (
          <Alert
            alertType={"failed"}
            alertBody={message}
            triggerAlert={true}
            color={"palevioletred"}
          />
        )}
        <h1 className="text-3xl font-bold mb-4">Create Liquidity Pool</h1>
        <form className="w-64" onSubmit={handleCreateLiquidityPool}>
          <div className="mb-4">
            <label htmlFor="tokenA" className="block mb-1 font-semibold">
              Token A (Address):
            </label>
            <input
              type="text"
              id="tokenA"
              className="w-full px-2 py-1 border border-gray-300 rounded"
              value={tokenA}
              onChange={(e) => setTokenA(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tokenB" className="block mb-1 font-semibold">
              Token B (Address):
            </label>
            <input
              type="text"
              id="tokenB"
              className="w-full px-2 py-1 border border-gray-300 rounded"
              value={tokenB}
              onChange={(e) => setTokenB(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amountA" className="block mb-1 font-semibold">
              Amount A:
            </label>
            <input
              type="number"
              id="amountA"
              className="w-full px-2 py-1 border border-gray-300 rounded"
              value={amountA}
              onChange={(e) => setAmountA(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amountB" className="block mb-1 font-semibold">
              Amount B:
            </label>
            <input
              type="number"
              id="amountB"
              className="w-full px-2 py-1 border border-gray-300 rounded"
              value={amountB}
              onChange={(e) => setAmountB(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Create Liquidity Pool
          </button>
        </form>

        {/* {liquidityPoolId && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">Liquidity Pool Details</h2>
            <p>Liquidity Pool ID: {liquidityPoolId}</p>
            <p>Reserve A: {reserveA}</p>
            <p>Reserve B: {reserveB}</p>
            <p>Fees: {fees}</p>
          </div>
        )} */}
      </div>
    </div>
  );
}
