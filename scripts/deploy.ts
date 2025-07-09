import { ethers } from 'hardhat';

async function main() {
    const Voting = await ethers.getContractFactory('Voting');
    const voting = await Voting.deploy();

    await voting.waitForDeployment();
    console.log('✅ Contract deployed at:', await voting.getAddress());
}

main().catch((error) => {
    console.error('❌ Error deploying:', error);
    process.exitCode = 1;
});
