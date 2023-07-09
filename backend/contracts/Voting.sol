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
}