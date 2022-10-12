// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./WalletProxy.sol";

contract XChangeFactory is
    Initializable,
    PausableUpgradeable,
    OwnableUpgradeable
{
    address public walletImp;

    mapping(string => address) public wallets;

    event NewWallet(string uuid, address wallet);

    function initialize(address _walletImp) public initializer {
        walletImp = _walletImp;
    }

    function updateWalletImplementation(address _walletImp)
        public
        onlyOwner
        returns (bool)
    {
        walletImp = _walletImp;

        return true;
    }

    function pause() public onlyOwner returns (bool) {
        _pause();

        return true;
    }

    function newWallet(string memory uuid) public onlyOwner returns (bool) {
        address wallet = address(new WalletProxy(address(this)));

        wallets[uuid] = wallet;

        emit NewWallet(uuid, wallet);

        return true;
    }
}
