

async function main() {
  // const { ethers } = require("hardhat")
  const NewNFT = await ethers.getContractFactory("MyToken");


  // Start deployment, returning a promise that resolves to a contract object
  const newNFT = await NewNFT.deploy()
  await newNFT.deployed()
  console.log("Contract deployed to address:", newNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
