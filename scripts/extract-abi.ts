import * as fs from 'fs';
import * as path from 'path';

const artifactPath = path.resolve(
    __dirname,
    '../artifacts/contracts/Voting.sol/Voting.json',
);
const outputDir = path.resolve(__dirname, '../abi');
const outputPath = path.join(outputDir, 'VotingAbi.json');

function extractAbi() {
    try {
        const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));
        const abi = artifact.abi;

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeFileSync(outputPath, JSON.stringify(abi, null, 2));
        console.log(`✅ ABI extracted to: ${outputPath}`);
    } catch (error) {
        console.error('❌ Failed to extract ABI:', error);
    }
}

extractAbi();
