// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Voting {
    uint256 nextVoteId;

    struct Vote {
        string uri;
        address owner;
        uint256 endTime;
        uint256[] votes;
        mapping(address => bool) voted;
        uint256 options;
    }
    mapping(uint256 => Vote) votes;
    mapping(address => bool) public members;

    event MemberJoined(address indexed member, uint256 joinedAt);
    event VoteCreated(
        address indexed owner,
        uint256 indexed voteId,
        uint256 indexed createdAt,
        uint256 endTime
    );
    event Voted(
        address indexed voter,
        uint256 indexed voteId,
        uint256 indexed option,
        uint256 createdAt
    );

    modifier isMember() {
        require(members[msg.sender], "you are not a member");
        _;
    }

    modifier canVote(uint256 voteId, uint256 option) {
        require(voteId < nextVoteId, "vote does not exist");
        require(option < votes[voteId].options, "invalid option");
        require(!votes[voteId].voted[msg.sender], "you have already voted");
        require(block.timestamp <= votes[voteId].endTime, "vote has ended");
        _;
    }
}