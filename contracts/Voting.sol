// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;
contract Voting {
    mapping(address => mapping(uint256 => bool)) public hasVoted;

    event Voted(address indexed voter, uint256 indexed proposalId, uint256 indexed optionId, uint256 votedAt);

    function vote(uint256 proposalId, uint256 optionId) public {
        require(!hasVoted[msg.sender][proposalId], 'Already voted on this proposal');

        hasVoted[msg.sender][proposalId] = true;

        emit Voted(msg.sender, proposalId, optionId, block.timestamp);
    }
}
