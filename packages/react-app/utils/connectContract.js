import abiJSON from "./AmmSwap.json";
import { ethers } from "ethers";

function connectContract() {
  const contractAddress = "0x3E73365764fBBE4f58Eb0B6a62CA80FC706D851B";
  const contractABI = abiJSON.abi;
  let ammContract;
  try {
    const { ethereum } = window;

    if (ethereum.chainId === "0xaef3") {
      //checking for eth object in the window, see if they have wallet connected to Alfajeros network
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      console.log("contractABI", contractABI);
      ammContract = new ethers.Contract(contractAddress, contractABI, signer); // instantiating new connection to the contract
    } else {
      throw new Error("Please connect to the Polygon Alfajeros network.");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return ammContract;
}

export default connectContract;
