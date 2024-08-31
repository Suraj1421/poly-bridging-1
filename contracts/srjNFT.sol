// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";

contract srjNFT is ERC721A, Ownable {
    mapping(uint256 => string) private metadataUrls;

    mapping(uint256 => string) private promptDescriptions;
    constructor() ERC721A("srjNFT", "SRJ") Ownable(msg.sender) {}

    function mintNFTs(string[] memory _metadataUrls, string[] memory _promptDescriptions) public onlyOwner {
        require(_metadataUrls.length == _promptDescriptions.length, "Invalid data");

        uint256 startTokenId = _nextTokenId();
        uint256 tokensLength = _metadataUrls.length;
        _safeMint(owner(), tokensLength);

        for (uint256 i = 0; i < tokensLength; i++) {
            metadataUrls[startTokenId + i] = _metadataUrls[i];
            promptDescriptions[startTokenId + i] = _promptDescriptions[i];
        }
    }
    function getPromptDescription(uint256 _id) public view returns (string memory) {
        require(_exists(_id), "Token doesn't exist");
        return promptDescriptions[_id];
    }

    function getMetadataUrl(uint256 _id) public view returns (string memory) {
        require(_exists(_id), "Token doesn't exist");
        return metadataUrls[_id];
    }
}