// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.waitForDeployment();
  console.log("contract deployed at:", await upload.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Contract address:    0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0
//From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
//Transaction:         0x2c057b8b209aa1a6944241a45970672e78cc991141f673070e2c722e44b36a23