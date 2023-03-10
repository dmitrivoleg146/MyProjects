
const hre = require("hardhat");


async function main() {

  const Coin = await hre.ethers.getContractFactory("Coin");
  const coin= await  Coin.deploy(1);

  await coin.deployed();

  console.log(
    `Coin with 1 ETH and unlock timestamp deployed to ${coin.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


