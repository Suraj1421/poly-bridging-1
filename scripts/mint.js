// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/srjNFT.sol/srjNFT.json");
require("dotenv").config();

const tokenAddress = "0x0Fc0Bff77Ad615D0a904faeB80bF4b46d776871c"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x076234D21e404B8832ff2aD8cfa179598357724A"; // place your public address for your wallet here

async function main() {
  const imageUrls = [
    "https://brown-gigantic-cephalopod-330.mypinata.cloud/ipfs/QmUfYTm5tswrrZeDhimsTtqS9YnoUmrU7dmyMpo3Tj8h1M",
    "https://brown-gigantic-cephalopod-330.mypinata.cloud/ipfs/QmUXivN6Hoc4nvTgmzgUERvH4VCM8eTuqksonUQFScj7Fp",
    "https://brown-gigantic-cephalopod-330.mypinata.cloud/ipfs/QmPoo6bNE9bsK5NBHijfaGYFBVoCGD5b51RTJYjho11GLo",
    "https://brown-gigantic-cephalopod-330.mypinata.cloud/ipfs/QmZVVTSSK97MzGR23AyTyrdugnqksvf65B3qn1C5F7JY7x",
    "https://brown-gigantic-cephalopod-330.mypinata.cloud/ipfs/Qme5TwnYSw9nnU1mpraWyiqY5kuKDd2pvEQyEieEfJBhjW",
  ];

  const prompts = [
    "imagine an image of sun with solar flares",
    "imagine an beautiful mountain with house",
    "imagine a river with dolphin",
    "imagine an human life with dinosaur",
    "imagine a human colony with animals",
  ];

  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

  const tx = await token.mintNFTs(imageUrls, prompts);
  await tx.wait();

  console.log(`You now have minted ${imageUrls.length} NFTs`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// npx hardhat run scripts/deploy.js --network sepolia
// npx hardhat run scripts/mint.js --network sepolia
// npx hardhat run scripts/approveDeposit.js --network sepolia