// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract XChangeFactory is
  Initializable,
  OwnableUpgradeable,
  PausableUpgradeable
{
  address walletImp;

  function initialize(address _walletImp) public initializer {
    __Ownable_init();
    __Pausable_init();

    walletImp = _walletImp;
  }

  function updateWalletImplementation(address _walletImp) public onlyOwner whenPaused {
    walletImp = _walletImp;
  }
}
