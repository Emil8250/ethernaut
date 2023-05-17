try {
    const Web3 = require('web3');
    let web3 = new Web3("http://62.171.185.249:8502/");
    const privateKey = '9c01437fdd23019e5bc8d0c2beb360a06efe6fe0723f4724d5ce0ed5eff68d9f';
    const account = web3.eth.accounts.privateKeyToAccount('0x' + privateKey);
    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;
    const address = "0xf1de1Fb80A8785A95C47ebbd39397e9b80eD60A9";
    web3.eth.sendTransaction({data: '0x3c5269d8', gas: 10000000, to: address});
    
    //web3.eth.sendTransaction({data: "0x75ec067a", gas: 1000000, to: address });
} catch (error) {
    console.log(error.message)
}

