// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unvotingTime = currentTimestampInSeconds + 60;

  const votingedAmount = hre.ethers.parseEther("0.001");

  const voting = await hre.ethers.deployContract("Voting", [unvotingTime], {
    value: votingedAmount,
  });

  await voting.waitForDeployment();

  console.log(
    `Voting with ${ethers.formatEther(
      votingedAmount
    )}ETH and unVoting timestamp ${unvotingTime} deployed to ${voting.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
