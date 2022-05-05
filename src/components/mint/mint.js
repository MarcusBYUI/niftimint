import React from "react";
import { ethers, BigNumber } from "ethers";
import abi from "../abi.json";
import "./mint.css";
import Animation from "./Floating-NiFTis.gif";
const Mint = () => {
  const niftiContract = "0xCE46A2d831744AfAD9E449Fc56789C0C092D8173";
  const mintCID = "ipfs://QmZXY6aEE7J9RvncuCzyKCVfaPnzTcQ5Pgj6Pi5ueHLPqW/";

  const randgen = () => {
    const theArr = [];
    const times = 100;
    for (let i = 0; i <= times; i++) {
      if (i % 33 === 0) {
        theArr.push(Math.floor(Math.random() * (25 - 23 + 1) + 23));
        theArr.push(Math.floor(Math.random() * (22 - 16 + 1) + 16));
        theArr.push(Math.floor(Math.random() * (22 - 16 + 1) + 16));
      } else {
        theArr.push(Math.floor(Math.random() * 16));
      }
    }

    return theArr[Math.floor(Math.random() * 109)];
  };
  const morerand = () => {
    const arrMore = [];
    arrMore.push(`${mintCID}${randgen()}.json`);
    arrMore.push(`${mintCID}${randgen()}.json`);
    arrMore.push(`${mintCID}${randgen()}.json`);
    return arrMore;
  };
  const handleMint = async (num) => {
    if (window.ethereum) {
      let fee;
      let cid;
      if (num === 1) {
        fee = 0.1;
        cid = [`${mintCID}${randgen()}.json`];
      } else {
        fee = 0.25;
        cid = morerand();
      }
      const valueFee = {
        value: ethers.utils.parseEther(`${fee}`),
        gasLimit: 30000,
      };
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(niftiContract, abi, signer);
      try {
        //debugger;
        const response = await contract.mintToken(
          BigNumber.from(num),
          cid,
          valueFee
        );
        console.log("response", response);
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <img className="animation" src={Animation} />
      <div className="description_container">
        <h2>Mint Your Niftis</h2>
        <p>
          Own one of the 8,888 unique gensis montas, gensis monstas will be the
          only NFT available for staking $Monsta, All Monstaeggs will be hacthed
          and reveal post launch
        </p>
      </div>
      <div className="MintButtonContainer">
        <button className="MintButton" onClick={() => handleMint(1)}>
          <span>Mint 1 NIFTI</span>
        </button>
        <button className="MintButton" onClick={() => handleMint(3)}>
          <span>Mint 3 NIFTI</span>
        </button>
      </div>
    </div>
  );
};

export default Mint;
